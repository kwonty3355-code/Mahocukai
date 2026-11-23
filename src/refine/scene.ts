/**
 * 원석 정제 작업대 장면.
 * 잔잔하게 살아 있는 화면: 촛불이 흔들리고, 창밖 날씨가 아주 천천히 바뀌고, 가루가 그릇에 조금씩 쌓인다.
 * 숫자·팝업·깜짝 연출은 없다. 움직임은 손 입력에 반응하는 것 외에는 모두 느리고 낮은 대비로.
 */
import { Container, Graphics, Sprite, Texture } from 'pixi.js';
import type { Element } from '../shared/inventory';

export const VW = 1280;
export const VH = 800;
const TAU = Math.PI * 2;
const RES = 2; // 레티나 대응: 정적 텍스처를 2배로 그린다

const ELEMENT_COLOR: Record<Element, [number, number, number]> = {
  fire: [217, 119, 63], water: [90, 143, 207], wind: [124, 191, 160], earth: [173, 138, 85],
};
const hex = (r: number, g: number, b: number) => (Math.round(r) << 16) | (Math.round(g) << 8) | Math.round(b);
const shade = ([r, g, b]: [number, number, number], k: number) => hex(Math.min(255, r * k), Math.min(255, g * k), Math.min(255, b * k));

function canvasTex(w: number, h: number, draw: (c: CanvasRenderingContext2D) => void): Texture {
  const cv = document.createElement('canvas');
  cv.width = Math.ceil(w * RES); cv.height = Math.ceil(h * RES);
  const c = cv.getContext('2d')!;
  c.scale(RES, RES);
  draw(c);
  return Texture.from(cv);
}
function hiSprite(tex: Texture) { const s = new Sprite(tex); s.scale.set(1 / RES); return s; }
function radialTex(r: number, stops: [number, string][]) {
  return canvasTex(r * 2, r * 2, (c) => {
    const g = c.createRadialGradient(r, r, 0, r, r, r);
    for (const [o, col] of stops) g.addColorStop(o, col);
    c.fillStyle = g; c.fillRect(0, 0, r * 2, r * 2);
  });
}
function rng(seed: number) { return () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; }; }

/* 배치 좌표 */
const WIN = { x: 120, y: 90, w: 300, h: 250 };
const STONE = { cx: 640, cy: 500, rx: 170, squash: 0.38, side: 40 };
const BASE = { rx: 192, top: STONE.cy + 46, side: 34 };
const SPOUT_END = { x: 858, y: 612 };
const BOWL = { x: 905, y: 690, rx: 92, ry: 30 };
const BASKET = { x: 290, y: 650 };
const CANDLE = { x: 1070, y: 452 };
const PILE_N = 14;

interface Crystal { g: Graphics; el: Element; alive: boolean; alpha: number }
interface Mote { s: Sprite; x: number; y: number; ph: number; sp: number }
interface Grain { g: Graphics; x: number; y: number; vx: number; vy: number }
interface Star { s: Sprite; ph: number; sp: number; base: number }

export class RefineScene {
  readonly world = new Container();
  private faceSpin = new Sprite();
  private peg = new Graphics();
  private flame = new Sprite();
  private flameCore = new Sprite();
  private glow = new Sprite();
  private heap = new Graphics();
  private rainLayer = new Container();
  private rainDrops: Graphics[] = [];
  private clouds: Sprite[] = [];
  private stars: Star[] = [];
  private crystals: Crystal[] = [];
  private motes: Mote[] = [];
  private grains: Grain[] = [];
  private grainLayer = new Container();
  private feedGlint = new Graphics();

  private angle = 0;
  private time = 0;
  private rain = 0;
  private rainTarget = 0;
  private weatherTimer = 90 + Math.random() * 120;
  private heapLevel = -1;
  private powderTotal = 0;
  private heapColor: [number, number, number] = [150, 130, 110];
  private grainAcc = 0;
  private current: Element = 'fire';

  constructor(private bundle: Element[]) {
    this.build();
    this.refill(true);
  }

  /* ---------- 구성 ---------- */
  private build() {
    const w = this.world;
    // 1) 창밖 하늘 (배경 그림의 창문 구멍 뒤에 깔린다)
    const sky = new Container();
    sky.addChild(hiSprite(canvasTex(WIN.w, WIN.h, (c) => {
      const g = c.createLinearGradient(0, 0, 0, WIN.h);
      g.addColorStop(0, '#0d1630'); g.addColorStop(1, '#27304f');
      c.fillStyle = g; c.fillRect(0, 0, WIN.w, WIN.h);
    })));
    const starTex = radialTex(4, [[0, 'rgba(255,250,235,1)'], [1, 'rgba(255,250,235,0)']]);
    const r = rng(7);
    for (let i = 0; i < 34; i++) {
      const s = new Sprite(starTex); s.anchor.set(0.5);
      s.position.set(r() * WIN.w, r() * WIN.h * 0.75); s.scale.set((0.35 + r() * 0.5) / RES);
      sky.addChild(s); this.stars.push({ s, ph: r() * TAU, sp: 0.2 + r() * 0.5, base: 0.35 + r() * 0.5 });
    }
    const moon = hiSprite(radialTex(46, [[0, 'rgba(250,244,220,1)'], [0.42, 'rgba(250,244,220,1)'], [0.5, 'rgba(250,240,210,0.25)'], [1, 'rgba(250,240,210,0)']]));
    moon.position.set(WIN.w * 0.62, 18); sky.addChild(moon);
    const cloudTex = radialTex(80, [[0, 'rgba(150,160,190,0.5)'], [1, 'rgba(150,160,190,0)']]);
    for (let i = 0; i < 4; i++) {
      const s = hiSprite(cloudTex); s.scale.set((1 / RES) * (1.2 + r()), (1 / RES) * 0.5);
      s.position.set(r() * WIN.w - 80, 20 + r() * 120); s.alpha = 0.35;
      sky.addChild(s); this.clouds.push(s);
    }
    for (let i = 0; i < 70; i++) {
      const d = new Graphics().moveTo(0, 0).lineTo(-3, 16).stroke({ width: 1, color: 0xaebbd8, alpha: 0.55 });
      d.position.set(r() * (WIN.w + 40), r() * WIN.h);
      this.rainLayer.addChild(d); this.rainDrops.push(d);
    }
    this.rainLayer.alpha = 0;
    sky.addChild(this.rainLayer);
    sky.position.set(WIN.x, WIN.y);
    const mask = new Graphics().rect(WIN.x, WIN.y, WIN.w, WIN.h).fill(0xffffff);
    sky.mask = mask;
    w.addChild(sky, mask);

    // 2) 방 배경 (벽, 창틀, 선반, 탁자, 촛대, 바구니 뒤쪽, 그릇 뒤쪽)
    w.addChild(hiSprite(this.drawRoom()));

    // 3) 원석 바구니 속 결정
    const pile = new Container();
    const pr = rng(11);
    for (let i = 0; i < PILE_N; i++) {
      const row = i < 6 ? 0 : i < 11 ? 1 : 2;
      const inRow = row === 0 ? i : row === 1 ? i - 6 : i - 11;
      const count = row === 0 ? 6 : row === 1 ? 5 : 3;
      const x = BASKET.x + (inRow - (count - 1) / 2) * 26 + (pr() - 0.5) * 8;
      const y = BASKET.y - 22 - row * 16 + (pr() - 0.5) * 4;
      const g = new Graphics(); g.position.set(x, y); g.rotation = (pr() - 0.5) * 0.7;
      pile.addChild(g);
      this.crystals.push({ g, el: 'fire', alive: false, alpha: 0 });
    }
    w.addChild(pile);
    w.addChild(hiSprite(this.drawBasketFront()));

    // 4) 맷돌: 아랫돌 → 윗돌 옆면 → 윗돌 윗면(회전) → 손잡이
    w.addChild(this.drawBaseStone());
    const sideTex = this.drawStoneSide();
    const side = hiSprite(sideTex); side.position.set(STONE.cx - STONE.rx, STONE.cy - STONE.rx * STONE.squash);
    w.addChild(side);
    const face = new Container();
    face.position.set(STONE.cx, STONE.cy); face.scale.set(1, STONE.squash);
    this.faceSpin = new Sprite(this.drawStoneFace()); this.faceSpin.anchor.set(0.5); this.faceSpin.scale.set(1 / RES);
    const light = new Sprite(radialTex(STONE.rx, [[0, 'rgba(255,214,160,0.20)'], [0.7, 'rgba(255,214,160,0.04)'], [1, 'rgba(0,0,0,0.25)']]));
    light.anchor.set(0.5); light.scale.set(1 / RES); light.position.set(30, -20);
    const faceMask = new Graphics().circle(0, 0, STONE.rx).fill(0xffffff);
    light.mask = faceMask;
    face.addChild(this.faceSpin, light, faceMask);
    w.addChild(face);
    this.feedGlint.position.set(STONE.cx, STONE.cy);
    w.addChild(this.feedGlint);
    w.addChild(this.peg);

    // 5) 가루 알갱이, 그릇 속 가루, 그릇 앞면
    w.addChild(this.grainLayer);
    w.addChild(this.heap);
    w.addChild(hiSprite(this.drawBowlFront()));

    // 6) 촛불과 빛
    const glowTex = radialTex(420, [[0, 'rgba(255,170,90,0.55)'], [0.35, 'rgba(255,140,70,0.18)'], [1, 'rgba(255,120,60,0)']]);
    this.glow = hiSprite(glowTex); this.glow.anchor.set(0.5); this.glow.position.set(CANDLE.x, CANDLE.y); this.glow.blendMode = 'add';
    w.addChild(this.glow);
    const flameTex = canvasTex(30, 60, (c) => {
      const g = c.createRadialGradient(15, 42, 2, 15, 36, 30);
      g.addColorStop(0, 'rgba(255,250,220,1)'); g.addColorStop(0.35, 'rgba(255,200,110,0.95)'); g.addColorStop(0.75, 'rgba(240,120,50,0.6)'); g.addColorStop(1, 'rgba(240,100,40,0)');
      c.fillStyle = g; c.beginPath(); c.moveTo(15, 0); c.bezierCurveTo(28, 26, 27, 52, 15, 58); c.bezierCurveTo(3, 52, 2, 26, 15, 0); c.fill();
    });
    this.flame = hiSprite(flameTex); this.flame.anchor.set(0.5, 0.95); this.flame.position.set(CANDLE.x, CANDLE.y + 22);
    this.flameCore = hiSprite(radialTex(10, [[0, 'rgba(255,255,240,0.9)'], [1, 'rgba(255,240,200,0)']]));
    this.flameCore.anchor.set(0.5); this.flameCore.position.set(CANDLE.x, CANDLE.y + 12); this.flameCore.blendMode = 'add';
    w.addChild(this.flame, this.flameCore);

    // 7) 떠다니는 먼지
    const moteTex = radialTex(3, [[0, 'rgba(255,230,190,1)'], [1, 'rgba(255,230,190,0)']]);
    const mr = rng(23);
    for (let i = 0; i < 26; i++) {
      const s = new Sprite(moteTex); s.anchor.set(0.5); s.scale.set(0.8 / RES); s.blendMode = 'add';
      const m = { s, x: 520 + mr() * 700, y: 120 + mr() * 520, ph: mr() * TAU, sp: 0.05 + mr() * 0.12 };
      w.addChild(s); this.motes.push(m);
    }

    // 8) 가장자리 어둡게
    w.addChild(hiSprite(canvasTex(VW, VH, (c) => {
      const g = c.createRadialGradient(VW * 0.55, VH * 0.6, VH * 0.35, VW * 0.55, VH * 0.6, VW * 0.75);
      g.addColorStop(0, 'rgba(8,5,10,0)'); g.addColorStop(1, 'rgba(8,5,10,0.6)');
      c.fillStyle = g; c.fillRect(0, 0, VW, VH);
    })));
  }

  private drawRoom(): Texture {
    return canvasTex(VW, VH, (c) => {
      const r = rng(3);
      let g = c.createLinearGradient(0, 0, 0, 560);
      g.addColorStop(0, '#1b1520'); g.addColorStop(1, '#2c2024');
      c.fillStyle = g; c.fillRect(0, 0, VW, 560);
      // 벽 질감
      for (let i = 0; i < 1400; i++) { c.fillStyle = `rgba(255,240,220,${r() * 0.025})`; c.fillRect(r() * VW, r() * 560, 2, 2); }
      // 창틀
      c.fillStyle = '#3a2a22'; c.fillRect(WIN.x - 20, WIN.y - 20, WIN.w + 40, WIN.h + 40);
      c.clearRect(WIN.x, WIN.y, WIN.w, WIN.h);
      c.fillStyle = '#3a2a22'; c.fillRect(WIN.x + WIN.w / 2 - 4, WIN.y, 8, WIN.h); c.fillRect(WIN.x, WIN.y + WIN.h / 2 - 4, WIN.w, 8);
      c.fillStyle = '#4a372c'; c.fillRect(WIN.x - 32, WIN.y + WIN.h + 18, WIN.w + 64, 14);
      // 달빛이 벽에 떨어진 자국
      const mg = c.createLinearGradient(WIN.x + WIN.w + 20, 0, WIN.x + WIN.w + 300, 0);
      mg.addColorStop(0, 'rgba(150,170,220,0.045)'); mg.addColorStop(1, 'rgba(150,170,220,0)');
      c.fillStyle = mg;
      c.filter = 'blur(18px)';
      c.beginPath(); c.moveTo(WIN.x + WIN.w + 20, WIN.y + 30); c.lineTo(WIN.x + WIN.w + 300, WIN.y + 200); c.lineTo(WIN.x + WIN.w + 300, 560); c.lineTo(WIN.x + WIN.w + 20, WIN.y + WIN.h); c.closePath(); c.fill();
      c.filter = 'none';
      // 선반과 병
      c.fillStyle = '#3d2c24'; c.fillRect(820, 236, 360, 12);
      c.fillStyle = '#2a1e19'; c.fillRect(840, 248, 10, 22); c.fillRect(1150, 248, 10, 22);
      const bottles: [number, number, number, string][] = [[860, 46, 26, '#3f5566'], [900, 62, 22, '#5e3f52'], [944, 38, 30, '#4f5d3e'], [1000, 54, 20, '#5a4a3a'], [1042, 70, 26, '#3e4a66'], [1100, 44, 24, '#614536']];
      for (const [x, h, wd, col] of bottles) {
        c.fillStyle = col; c.beginPath(); c.roundRect(x, 236 - h, wd, h, 5); c.fill();
        c.fillRect(x + wd / 2 - 4, 236 - h - 10, 8, 12);
        c.fillStyle = 'rgba(255,230,200,0.10)'; c.fillRect(x + 4, 236 - h + 6, 3, h - 14);
      }
      // 탁자
      g = c.createLinearGradient(0, 560, 0, VH);
      g.addColorStop(0, '#553a2b'); g.addColorStop(1, '#22160f');
      c.fillStyle = g; c.fillRect(0, 560, VW, VH - 560);
      c.fillStyle = 'rgba(255,220,180,0.10)'; c.fillRect(0, 560, VW, 3);
      for (let i = 0; i < 26; i++) {
        c.strokeStyle = `rgba(20,10,6,${0.15 + r() * 0.2})`; c.lineWidth = 1 + r() * 1.5;
        const y0 = 575 + r() * 220; c.beginPath(); c.moveTo(0, y0);
        for (let x = 0; x <= VW; x += 80) c.lineTo(x, y0 + Math.sin(x * 0.01 + i) * 4 + (r() - 0.5) * 2);
        c.stroke();
      }
      // 촛대
      c.fillStyle = '#7a5a32'; c.beginPath(); c.ellipse(CANDLE.x, 580, 44, 12, 0, 0, TAU); c.fill();
      c.fillStyle = '#9c7a44'; c.beginPath(); c.ellipse(CANDLE.x, 576, 40, 10, 0, 0, TAU); c.fill();
      g = c.createLinearGradient(CANDLE.x - 14, 0, CANDLE.x + 14, 0);
      g.addColorStop(0, '#cbbd9e'); g.addColorStop(0.4, '#efe6d0'); g.addColorStop(1, '#a8987a');
      c.fillStyle = g; c.fillRect(CANDLE.x - 14, CANDLE.y + 22, 28, 576 - CANDLE.y - 22);
      c.fillStyle = '#f4ecd8'; c.beginPath(); c.ellipse(CANDLE.x, CANDLE.y + 22, 14, 4, 0, 0, TAU); c.fill();
      c.strokeStyle = '#2a2018'; c.lineWidth = 2; c.beginPath(); c.moveTo(CANDLE.x, CANDLE.y + 22); c.lineTo(CANDLE.x, CANDLE.y + 12); c.stroke();
      // 바구니 뒤쪽
      c.fillStyle = '#3e2b1b'; c.beginPath(); c.ellipse(BASKET.x, BASKET.y - 26, 100, 26, 0, Math.PI, TAU); c.fill();
      c.fillStyle = '#21160e'; c.beginPath(); c.ellipse(BASKET.x, BASKET.y - 26, 92, 21, 0, 0, TAU); c.fill();
      // 그릇 뒤쪽 (안쪽 그림자)
      c.fillStyle = '#2b2430'; c.beginPath(); c.ellipse(BOWL.x, BOWL.y - 40, BOWL.rx, BOWL.ry, 0, 0, TAU); c.fill();
      c.fillStyle = '#16121a'; c.beginPath(); c.ellipse(BOWL.x, BOWL.y - 38, BOWL.rx - 8, BOWL.ry - 7, 0, 0, TAU); c.fill();
      // 맷돌 그림자
      c.fillStyle = 'rgba(0,0,0,0.35)'; c.beginPath(); c.ellipse(STONE.cx + 20, BASE.top + BASE.side + 18, BASE.rx + 30, 40, 0, 0, TAU); c.fill();
    });
  }

  private drawBasketFront(): Texture {
    return canvasTex(VW, VH, (c) => {
      const g = c.createLinearGradient(0, BASKET.y - 30, 0, BASKET.y + 40);
      g.addColorStop(0, '#6b4a2c'); g.addColorStop(1, '#3a2716');
      c.fillStyle = g;
      c.beginPath(); c.ellipse(BASKET.x, BASKET.y - 26, 100, 26, 0, 0, Math.PI);
      c.lineTo(BASKET.x - 86, BASKET.y + 26); c.ellipse(BASKET.x, BASKET.y + 26, 86, 18, 0, Math.PI, 0, true); c.closePath(); c.fill();
      c.strokeStyle = 'rgba(30,18,10,0.45)'; c.lineWidth = 2;
      for (let k = 0; k < 4; k++) { const y = BASKET.y - 8 + k * 11; c.beginPath(); c.ellipse(BASKET.x, y, 96 - k * 3, 22, 0, 0.15, Math.PI - 0.15); c.stroke(); }
      c.strokeStyle = '#7d5a37'; c.lineWidth = 5; c.beginPath(); c.ellipse(BASKET.x, BASKET.y - 26, 100, 26, 0, 0, Math.PI); c.stroke();
    });
  }

  private drawBaseStone(): Graphics {
    const g = new Graphics();
    const { rx, top, side } = BASE; const ry = rx * STONE.squash;
    g.ellipse(STONE.cx, top + side, rx, ry).fill(0x3e3a44);
    g.rect(STONE.cx - rx, top, rx * 2, side).fill(0x46424c);
    g.ellipse(STONE.cx, top, rx, ry).fill(0x5d5864);
    g.ellipse(STONE.cx, top, rx - 10, ry - 4).fill(0x4a4652); // 가루가 모이는 홈
    // 주둥이 (그릇 쪽으로 가루가 흘러나가는 홈통)
    g.poly([STONE.cx + 150, top + 34, SPOUT_END.x, SPOUT_END.y - 10, SPOUT_END.x + 6, SPOUT_END.y + 4, STONE.cx + 160, top + 56]).fill(0x524d59);
    g.poly([STONE.cx + 154, top + 40, SPOUT_END.x, SPOUT_END.y - 5, SPOUT_END.x + 2, SPOUT_END.y, STONE.cx + 158, top + 50]).fill(0x37333d);
    return g;
  }

  private drawStoneSide(): Texture {
    const { rx, squash, side } = STONE; const ry = rx * squash;
    return canvasTex(rx * 2, side + ry * 2, (c) => {
      c.beginPath(); c.rect(0, ry, rx * 2, side); c.ellipse(rx, ry + side, rx, ry, 0, 0, Math.PI); c.closePath();
      const g = c.createLinearGradient(0, 0, rx * 2, 0);
      g.addColorStop(0, '#3a3540'); g.addColorStop(0.55, '#6e6774'); g.addColorStop(0.8, '#7d7480'); g.addColorStop(1, '#4a4450');
      c.fillStyle = g; c.fill();
      c.save(); c.clip(); const r = rng(5);
      for (let i = 0; i < 260; i++) { c.fillStyle = `rgba(${r() > 0.5 ? '255,255,255' : '0,0,0'},${r() * 0.12})`; c.fillRect(r() * rx * 2, ry + r() * (side + ry), 2, 2); }
      c.restore();
    });
  }

  private drawStoneFace(): Texture {
    const R = STONE.rx;
    return canvasTex(R * 2, R * 2, (c) => {
      c.translate(R, R);
      c.fillStyle = '#7b7482'; c.beginPath(); c.arc(0, 0, R, 0, TAU); c.fill();
      const r = rng(9);
      for (let i = 0; i < 900; i++) {
        const a = r() * TAU, d = Math.sqrt(r()) * R;
        c.fillStyle = `rgba(${r() > 0.5 ? '255,250,240' : '20,15,25'},${0.05 + r() * 0.12})`;
        c.fillRect(Math.cos(a) * d, Math.sin(a) * d, 1 + r() * 2.5, 1 + r() * 2.5);
      }
      c.strokeStyle = 'rgba(30,25,35,0.35)'; c.lineWidth = 3;
      for (let i = 0; i < 8; i++) {
        const a = i / 8 * TAU; c.beginPath();
        c.moveTo(Math.cos(a) * 40, Math.sin(a) * 40); c.lineTo(Math.cos(a + 0.35) * (R - 12), Math.sin(a + 0.35) * (R - 12)); c.stroke();
      }
      c.strokeStyle = 'rgba(255,245,230,0.12)'; c.lineWidth = 2; c.beginPath(); c.arc(0, 0, R - 3, 0, TAU); c.stroke();
      // 원석을 넣는 구멍
      c.fillStyle = '#1b1720'; c.beginPath(); c.arc(0, 0, 30, 0, TAU); c.fill();
      c.strokeStyle = 'rgba(0,0,0,0.5)'; c.lineWidth = 4; c.beginPath(); c.arc(0, 0, 30, 0, TAU); c.stroke();
    });
  }

  private drawBowlFront(): Texture {
    return canvasTex(VW, VH, (c) => {
      const { x, y, rx, ry } = BOWL;
      const g = c.createLinearGradient(x - rx, 0, x + rx, 0);
      g.addColorStop(0, '#2a2533'); g.addColorStop(0.6, '#4c4458'); g.addColorStop(1, '#2e2838');
      c.fillStyle = g;
      c.beginPath(); c.ellipse(x, y - 40, rx, ry, 0, 0, Math.PI);
      c.bezierCurveTo(x - rx, y + 20, x - rx * 0.5, y + 34, x, y + 34);
      c.bezierCurveTo(x + rx * 0.5, y + 34, x + rx, y + 20, x + rx, y - 40);
      c.closePath(); c.fill();
      c.strokeStyle = '#6a6078'; c.lineWidth = 3; c.beginPath(); c.ellipse(x, y - 40, rx, ry, 0, 0, Math.PI); c.stroke();
      c.fillStyle = 'rgba(0,0,0,0.3)'; c.beginPath(); c.ellipse(x + 10, y + 36, rx * 0.8, 10, 0, 0, TAU); c.fill();
    });
  }

  /* ---------- 원석 ---------- */
  private drawCrystal(cr: Crystal) {
    const col = ELEMENT_COLOR[cr.el];
    cr.g.clear()
      .poly([0, -16, 9, -6, 7, 10, -7, 10, -9, -6]).fill(shade(col, 0.8))
      .poly([0, -16, 9, -6, 0, -2, -9, -6]).fill(shade(col, 1.15))
      .poly([0, -2, 9, -6, 7, 10, 0, 10]).fill(shade(col, 0.6));
  }

  setBundle(bundle: Element[]) { this.bundle = bundle; this.refill(true); }

  /** 바구니를 다시 채운다. 새 결정은 천천히 나타난다. */
  refill(instant = false) {
    for (const cr of this.crystals) {
      cr.el = this.bundle[Math.floor(Math.random() * this.bundle.length)];
      cr.alive = true; if (instant) cr.alpha = 1;
      this.drawCrystal(cr);
    }
    this.current = this.crystals[this.crystals.length - 1].el;
  }

  /** 원석 하나를 맷돌에 넣는다. 그 원석의 원소를 돌려준다. */
  consumeOre(): Element {
    let idx = -1;
    for (let i = this.crystals.length - 1; i >= 0; i--) if (this.crystals[i].alive) { idx = i; break; }
    if (idx < 0) { this.refill(); idx = this.crystals.length - 1; }
    const cr = this.crystals[idx]; cr.alive = false;
    this.current = cr.el;
    if (!this.crystals.some((c) => c.alive)) this.refill();
    return cr.el;
  }

  addPowder(el: Element) {
    this.powderTotal++;
    const c = ELEMENT_COLOR[el], k = 0.08;
    this.heapColor = [this.heapColor[0] * (1 - k) + c[0] * k, this.heapColor[1] * (1 - k) + c[1] * k, this.heapColor[2] * (1 - k) + c[2] * k];
  }

  /* ---------- 매 프레임 ---------- */
  update(dt: number, totalTurns: number, speed: number) {
    this.time += dt;
    const t = this.time;

    // 맷돌: 손 입력을 그대로 따라 돈다
    const target = totalTurns * TAU;
    this.angle += (target - this.angle) * Math.min(1, dt * 12);
    this.faceSpin.rotation = this.angle;
    const pr = 128, px = STONE.cx + Math.cos(this.angle) * pr, py = STONE.cy + Math.sin(this.angle) * pr * STONE.squash;
    this.peg.clear()
      .ellipse(px + 4, py + 2, 12, 5).fill({ color: 0x000000, alpha: 0.3 })
      .roundRect(px - 7, py - 74, 14, 76, 6).fill(0x6e4b2e)
      .roundRect(px - 7, py - 74, 5, 76, 3).fill({ color: 0xffd9a8, alpha: 0.12 })
      .ellipse(px, py - 76, 11, 6).fill(0x86603c);
    const gc = ELEMENT_COLOR[this.current];
    this.feedGlint.clear()
      .poly([-8, -3, 0, -9, 8, -3, 5, 3, -5, 3]).fill({ color: shade(gc, 1), alpha: 0.85 });

    // 가루가 주둥이에서 그릇으로 흘러내린다 (손을 움직일 때만)
    this.grainAcc += Math.min(speed, 2) * 26 * dt;
    while (this.grainAcc >= 1) {
      this.grainAcc -= 1;
      const g = new Graphics().circle(0, 0, 1.2 + Math.random() * 1.3).fill(shade(gc, 0.9 + Math.random() * 0.25));
      const gr: Grain = { g, x: SPOUT_END.x + Math.random() * 4, y: SPOUT_END.y, vx: 30 + Math.random() * 25, vy: -5 + Math.random() * 10 };
      g.position.set(gr.x, gr.y); this.grainLayer.addChild(g); this.grains.push(gr);
    }
    const floor = BOWL.y - 40 - this.heapHeight();
    for (let i = this.grains.length - 1; i >= 0; i--) {
      const gr = this.grains[i];
      gr.vy += 520 * dt; gr.x += gr.vx * dt; gr.y += gr.vy * dt; gr.g.position.set(gr.x, gr.y);
      if (gr.y > floor) { gr.g.destroy(); this.grains.splice(i, 1); }
    }

    // 그릇 속 가루 더미
    const lvl = Math.round(Math.min(1, this.powderTotal / 360) * 200) / 200;
    if (lvl !== this.heapLevel) { this.heapLevel = lvl; this.drawHeap(); }

    // 바구니 결정 페이드
    for (const cr of this.crystals) {
      cr.alpha += ((cr.alive ? 1 : 0) - cr.alpha) * Math.min(1, dt * (cr.alive ? 0.8 : 6));
      cr.g.alpha = cr.alpha;
    }

    // 촛불 흔들림
    const n = Math.sin(t * 7.3) * 0.5 + Math.sin(t * 11.1 + 1.3) * 0.3 + Math.sin(t * 2.1) * 0.4;
    this.flame.scale.set((1 / RES) * (1 + n * 0.04), (1 / RES) * (1 + n * 0.08));
    this.flame.rotation = Math.sin(t * 1.7) * 0.04;
    this.glow.alpha = 0.85 + n * 0.08;
    this.flameCore.alpha = 0.8 + n * 0.1;

    // 별, 구름, 비 (아주 느리게)
    for (const s of this.stars) s.s.alpha = s.base * (0.7 + 0.3 * Math.sin(t * s.sp + s.ph)) * (1 - this.rain * 0.85);
    for (const cl of this.clouds) { cl.x += dt * 3; if (cl.x > WIN.w + 40) cl.x = -200; cl.alpha = 0.3 + this.rain * 0.45; }
    this.weatherTimer -= dt;
    if (this.weatherTimer <= 0) { this.rainTarget = this.rainTarget > 0.5 ? 0 : 1; this.weatherTimer = 180 + Math.random() * 240; }
    this.rain += (this.rainTarget - this.rain) * Math.min(1, dt / 40);
    this.rainLayer.alpha = this.rain;
    if (this.rain > 0.01) for (const d of this.rainDrops) { d.y += dt * 260; d.x -= dt * 45; if (d.y > WIN.h) { d.y = -20; d.x = Math.random() * (WIN.w + 40); } }

    // 먼지
    for (const m of this.motes) {
      m.y -= m.sp * dt * 20; m.x += Math.sin(t * m.sp * 3 + m.ph) * dt * 4;
      if (m.y < 100) { m.y = 640; }
      m.s.position.set(m.x, m.y);
      const d = Math.hypot(m.x - CANDLE.x, m.y - CANDLE.y);
      m.s.alpha = Math.max(0, 0.5 - d / 1000) * (0.6 + 0.4 * Math.sin(t * 0.7 + m.ph));
    }
  }

  private heapHeight() { return this.heapLevel <= 0 ? 0 : 6 + this.heapLevel * 30; }

  private drawHeap() {
    const h = this.heapHeight();
    this.heap.clear();
    if (h <= 0) return;
    const { x, y, rx, ry } = BOWL; const top = y - 40;
    const w = (rx - 12) * (0.55 + 0.45 * Math.min(1, this.heapLevel * 1.4));
    const col = this.heapColor;
    this.heap
      .ellipse(x, top, w, ry * 0.65).fill(shade(col, 0.75))
      .moveTo(x - w, top).bezierCurveTo(x - w * 0.6, top - h * 0.9, x - w * 0.2, top - h, x, top - h)
      .bezierCurveTo(x + w * 0.2, top - h, x + w * 0.6, top - h * 0.9, x + w, top).closePath().fill(shade(col, 0.95))
      .moveTo(x - w * 0.3, top - h * 0.7).bezierCurveTo(x - w * 0.1, top - h * 0.98, x + w * 0.1, top - h * 0.98, x + w * 0.25, top - h * 0.8).stroke({ width: 3, color: shade(col, 1.2), alpha: 0.5 });
  }
}
