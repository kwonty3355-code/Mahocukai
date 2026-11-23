/**
 * "돌리기" 입력 통합 모듈.
 * 손가락·펜·마우스로 문지르기, 컨트롤러 스틱 돌리기, 버튼 리듬, 마우스 휠, 키보드를
 * 모두 "몇 바퀴 돌렸는가(turns)" 하나로 환산한다.
 *
 * 몰입 보호 규칙: 어떤 동작도 실패로 치지 않는다. 원이든 지그재그든 움직이면 작업이 된다.
 */

export type RotationSource = 'touch' | 'pad' | 'wheel' | 'key';
type Listener = (turns: number, source: RotationSource) => void;

const TAU = Math.PI * 2;
const wrap = (a: number) => {
  while (a > Math.PI) a -= TAU;
  while (a < -Math.PI) a += TAU;
  return a;
};

interface Track { lastX: number; lastY: number; heading: number | null }

export class RotationInput {
  /** 지금까지 돌린 총 바퀴 수 */
  total = 0;
  private listeners: Listener[] = [];
  private tracks = new Map<number, Track>();
  private stickAng: (number | null)[] = [null, null];
  private prevButtons: boolean[] = [];
  private detach: (() => void)[] = [];

  onTurn(fn: Listener) { this.listeners.push(fn); }

  private emit(turns: number, source: RotationSource) {
    if (turns <= 0) return;
    this.total += turns;
    for (const fn of this.listeners) fn(turns, source);
  }

  attach(el: HTMLElement) {
    const on = <K extends keyof HTMLElementEventMap>(t: K, fn: (e: HTMLElementEventMap[K]) => void, opts?: AddEventListenerOptions) => {
      el.addEventListener(t, fn as EventListener, opts);
      this.detach.push(() => el.removeEventListener(t, fn as EventListener, opts));
    };

    on('pointerdown', (e) => {
      this.tracks.set(e.pointerId, { lastX: e.clientX, lastY: e.clientY, heading: null });
      el.setPointerCapture?.(e.pointerId);
    });
    on('pointermove', (e) => {
      const tr = this.tracks.get(e.pointerId);
      if (!tr) return;
      const dx = e.clientX - tr.lastX, dy = e.clientY - tr.lastY;
      if (Math.hypot(dx, dy) < 6) return; // 미세한 떨림은 무시
      const h = Math.atan2(dy, dx);
      if (tr.heading !== null) {
        const d = Math.abs(wrap(h - tr.heading));
        // 원을 그리면 방향이 조금씩 꺾인다 → 꺾인 각도만큼 회전.
        // 왕복 문지르기처럼 크게 꺾이면 반대 방향 전환 → 작은 양으로 인정.
        this.emit(d < 1.6 ? d / TAU : 0.08, 'touch');
      }
      tr.heading = h;
      tr.lastX = e.clientX; tr.lastY = e.clientY;
    });
    const end = (e: PointerEvent) => { this.tracks.delete(e.pointerId); };
    on('pointerup', end);
    on('pointercancel', end);

    on('wheel', (e) => {
      e.preventDefault();
      let px = Math.abs(e.deltaY) + Math.abs(e.deltaX);
      if (e.deltaMode === 1) px *= 40;
      else if (e.deltaMode === 2) px *= 800;
      this.emit(Math.min(px, 300) / 600, 'wheel');
    }, { passive: false });

    const onKey = (e: KeyboardEvent) => {
      if (e.repeat) return;
      if (['Space', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.code)) {
        e.preventDefault();
        this.emit(1 / 6, 'key');
      }
    };
    window.addEventListener('keydown', onKey);
    this.detach.push(() => window.removeEventListener('keydown', onKey));
  }

  dispose() { this.detach.forEach((f) => f()); this.detach = []; }

  /** 매 프레임 호출. 컨트롤러 상태를 읽는다. */
  pollGamepad(): Gamepad | null {
    let gp: Gamepad | null = null;
    try {
      for (const g of navigator.getGamepads?.() ?? []) if (g && g.connected) { gp = g; break; }
    } catch { return null; }
    if (!gp) return null;

    // 양쪽 스틱 모두 인정 (마모 분산). 가장자리까지 밀지 않아도 되도록 문턱을 낮게.
    for (let s = 0; s < 2; s++) {
      const ax = gp.axes[s * 2] ?? 0, ay = gp.axes[s * 2 + 1] ?? 0;
      if (Math.hypot(ax, ay) > 0.3) {
        const a = Math.atan2(ay, ax), prev = this.stickAng[s];
        if (prev !== null) {
          const d = Math.abs(wrap(a - prev));
          if (d < 1.2) this.emit(d / TAU, 'pad');
        }
        this.stickAng[s] = a;
      } else this.stickAng[s] = null;
    }
    // 얼굴 버튼 리듬 누르기도 같은 작업으로 인정
    const b = gp.buttons.map((x) => x.pressed);
    for (let i = 0; i < 4; i++) if (b[i] && !this.prevButtons[i]) this.emit(1 / 6, 'pad');
    this.prevButtons = b;
    return gp;
  }
}

export function rumble(gp: Gamepad | null, ms: number, strong: number, weak: number) {
  const act = (gp as (Gamepad & { vibrationActuator?: { playEffect?: (t: string, p: object) => Promise<unknown> } }) | null)?.vibrationActuator;
  try { act?.playEffect?.('dual-rumble', { startDelay: 0, duration: ms, strongMagnitude: strong, weakMagnitude: weak })?.catch(() => {}); } catch { /* 진동 미지원 */ }
}
