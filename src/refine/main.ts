import { Application } from 'pixi.js';
import { RefineScene, VW, VH } from './scene';
import { RotationInput, rumble } from '../shared/rotation-input';
import { GrindSound } from '../shared/grind-sound';
import { addToInventory, loadInventory, MATERIAL_INFO, type Element, type Inventory, type Material } from '../shared/inventory';

/** 원석 하나를 다 가는 데 필요한 바퀴 수 */
const TURNS_PER_ORE = 3;

const BUNDLES: { id: string; name: string; note: string; color: string; mix: Element[] }[] = [
  { id: 'mixed', name: '혼합 원석', note: '네 원소가 고루 섞임', color: 'linear-gradient(90deg,#d9773f,#5a8fcf,#7cbfa0,#ad8a55)', mix: ['fire', 'water', 'wind', 'earth'] },
  { id: 'fire', name: '불의 원석', note: '불 가루가 많이 나옴', color: '#d9773f', mix: weighted('fire') },
  { id: 'water', name: '물의 원석', note: '물 가루가 많이 나옴', color: '#5a8fcf', mix: weighted('water') },
  { id: 'wind', name: '바람의 원석', note: '바람 가루가 많이 나옴', color: '#7cbfa0', mix: weighted('wind') },
  { id: 'earth', name: '땅의 원석', note: '땅 가루가 많이 나옴', color: '#ad8a55', mix: weighted('earth') },
];
function weighted(main: Element): Element[] {
  const others = (['fire', 'water', 'wind', 'earth'] as Element[]).filter((e) => e !== main);
  return [...Array(7).fill(main), ...others];
}

const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;

async function boot() {
  const app = new Application();
  await app.init({ resizeTo: window, background: '#120d14', antialias: true, resolution: Math.min(2, window.devicePixelRatio || 1), autoDensity: true });
  $('stage').appendChild(app.canvas);

  let scene = new RefineScene(BUNDLES[0].mix);
  app.stage.addChild(scene.world);
  const fit = () => {
    const s = Math.min(app.screen.width / VW, app.screen.height / VH);
    scene.world.scale.set(s);
    scene.world.position.set((app.screen.width - VW * s) / 2, (app.screen.height - VH * s) / 2);
  };
  fit();
  app.renderer.on('resize', fit);

  const input = new RotationInput();
  input.attach(app.canvas);
  const sound = new GrindSound();

  // 작업 상태
  let working = false;
  let startedAt = 0;
  let oreTurns = 0;
  let oreCount = 0;
  let gains: Inventory = {};
  let lastWhole = 0;
  let pad: Gamepad | null = null;

  const gain = (m: Material, n = 1) => { gains[m] = (gains[m] ?? 0) + n; };

  input.onTurn((turns) => {
    if (!working) return;
    oreTurns += turns;
    while (oreTurns >= TURNS_PER_ORE) {
      oreTurns -= TURNS_PER_ORE;
      const el = scene.consumeOre();
      oreCount++;
      gain(`powder_${el}` as Material);
      if (Math.random() < 0.25) gain('ink');
      if (Math.random() < 0.18) gain('fiber');
      if (Math.random() < 0.02) gain('crystal');
      scene.addPowder(el);
    }
    // 한 바퀴마다 아주 약한 진동 (컨트롤러가 있을 때만)
    const whole = Math.floor(input.total);
    if (whole > lastWhole) { lastWhole = whole; rumble(pad, 35, 0, 0.3); }
    if (input.total > 1.5) $('hint').style.opacity = '0';
  });

  // 매 프레임
  let speed = 0;
  let prevTotal = 0;
  app.ticker.add((tk) => {
    const dt = Math.min(0.1, tk.deltaMS / 1000);
    pad = input.pollGamepad();
    const d = working ? input.total - prevTotal : 0;
    prevTotal = input.total;
    speed += ((d / Math.max(dt, 1e-3)) - speed) * Math.min(1, dt * 4);
    scene.update(dt, working ? input.total : input.total, speed);
    sound.update(working ? speed : 0);
  });

  // 화면 꺼짐 방지 (아이패드가 애니 보는 중에 잠들지 않게)
  let lock: { release: () => Promise<void> } | null = null;
  const keepAwake = async () => {
    try { lock = await (navigator as Navigator & { wakeLock?: { request: (t: 'screen') => Promise<{ release: () => Promise<void> }> } }).wakeLock?.request('screen') ?? null; } catch { lock = null; }
  };
  document.addEventListener('visibilitychange', () => { if (working && document.visibilityState === 'visible') void keepAwake(); });

  // 시작 화면
  const bundlesEl = $('bundles');
  BUNDLES.forEach((b, i) => {
    const label = document.createElement('label');
    label.className = 'bundle';
    label.innerHTML = `<input type="radio" name="bundle" id="bundle-${b.id}" value="${b.id}" ${i === 0 ? 'checked' : ''}><b><span class="dot" style="background:${b.color}"></span>${b.name}</b><small>${b.note}</small>`;
    bundlesEl.appendChild(label);
  });
  bundlesEl.addEventListener('change', () => {
    const id = (bundlesEl.querySelector('input:checked') as HTMLInputElement).value;
    scene.setBundle(BUNDLES.find((b) => b.id === id)!.mix);
  });
  const renderStock = () => {
    const inv = loadInventory();
    const parts = (Object.keys(MATERIAL_INFO) as Material[]).filter((k) => (inv[k] ?? 0) > 0)
      .map((k) => `<span><span class="dot" style="background:${MATERIAL_INFO[k].color}"></span>${MATERIAL_INFO[k].name} ${inv[k]}</span>`);
    $('stock').innerHTML = parts.length ? `<span>보관함</span>${parts.join('')}` : '';
  };
  renderStock();

  const soundBtn = $('btnSound');
  const syncSoundBtn = () => {
    soundBtn.textContent = sound.enabled ? '작업 소리 켜짐' : '작업 소리 꺼짐';
    soundBtn.setAttribute('aria-pressed', String(sound.enabled));
  };
  soundBtn.addEventListener('click', () => { sound.enabled = !sound.enabled; syncSoundBtn(); });

  $('btnStart').addEventListener('click', () => {
    sound.enabled = ($('optSound') as HTMLInputElement).checked;
    syncSoundBtn();
    sound.start();
    gains = {}; oreCount = 0; oreTurns = 0;
    startedAt = performance.now();
    working = true;
    $('startPanel').hidden = true;
    $('hud').hidden = false;
    const hint = $('hint'); hint.hidden = false; hint.style.opacity = '1';
    void keepAwake();
    app.canvas.focus?.();
  });

  $('btnFinish').addEventListener('click', () => {
    working = false;
    sound.stop();
    void lock?.release().catch(() => {}); lock = null;
    $('hud').hidden = true; $('hint').hidden = true;
    addToInventory(gains);
    const min = Math.round((performance.now() - startedAt) / 60000);
    $('doneTime').textContent = min < 1 ? '1분 미만' : `${min}분`;
    $('doneOre').textContent = `${oreCount}개`;
    const items = (Object.keys(MATERIAL_INFO) as Material[]).filter((k) => (gains[k] ?? 0) > 0);
    $('doneGains').innerHTML = items.length
      ? items.map((k) => `<li><span class="dot" style="background:${MATERIAL_INFO[k].color}"></span><span class="name">${MATERIAL_INFO[k].name}<small>${MATERIAL_INFO[k].note}</small></span><span class="num">+${gains[k]}</span></li>`).join('')
      : '<li class="empty">이번에는 다 갈린 원석이 없어요. 맷돌을 세 바퀴 돌리면 원석 하나가 정제돼요.</li>';
    $('donePanel').hidden = false;
  });

  $('btnAgain').addEventListener('click', () => {
    $('donePanel').hidden = true;
    $('startPanel').hidden = false;
    renderStock();
  });

  document.addEventListener('gesturestart', (e) => e.preventDefault());
  // 장면 교체가 필요할 때를 위한 참조 (디버그용)
  (window as unknown as { __refine: unknown }).__refine = { app, get scene() { return scene; }, set scene(s: RefineScene) { scene = s; }, input };
}

void boot();
