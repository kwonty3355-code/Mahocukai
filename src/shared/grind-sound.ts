/**
 * 맷돌 가는 소리. 아이패드에는 진동이 없어서 눈 대신 귀로 받는 아주 작은 피드백.
 * 애니 소리에 묻힐 만큼 작게, 손을 움직일 때만 난다. 끊김이나 효과음 없이 이어지는 소리만 쓴다.
 */
export class GrindSound {
  private ctx: AudioContext | null = null;
  private gain: GainNode | null = null;
  enabled = true;
  volume = 0.5; // 0~1

  /** 반드시 사용자 조작(클릭) 안에서 호출 */
  start() {
    if (this.ctx) { void this.ctx.resume(); return; }
    const C = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!C) return;
    const ctx = new C();
    // 브라운 노이즈 (돌이 갈리는 낮은 질감)
    const len = ctx.sampleRate * 2;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; d[i] = last * 3.5; }
    const src = ctx.createBufferSource(); src.buffer = buf; src.loop = true;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 420;
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 60;
    const g = ctx.createGain(); g.gain.value = 0;
    src.connect(hp); hp.connect(lp); lp.connect(g); g.connect(ctx.destination);
    src.start();
    this.ctx = ctx; this.gain = g;
  }

  /** speed: 초당 바퀴 수 */
  update(speed: number) {
    if (!this.ctx || !this.gain) return;
    const target = this.enabled ? Math.min(1, speed / 1.2) * 0.09 * this.volume : 0;
    this.gain.gain.setTargetAtTime(target, this.ctx.currentTime, 0.12);
  }

  stop() { this.update(0); }
}
