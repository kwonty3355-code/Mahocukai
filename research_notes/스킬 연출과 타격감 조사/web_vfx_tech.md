# Web 2D spell VFX and skill motion: techniques for PixiJS 8 and Canvas2D

Scope: implementable techniques for "마법산업기능사" (Vite + TypeScript + pixi.js 8.22.0 + pixi-filters 6.1.5, versions read from the project's package.json). Targets: PC, iPad, mid-range Android.

Research conditions: the session's network blocked pixijs.com, pixijs.io, code.tutsplus.com and easings.net, so official PixiJS guide pages could not be fetched. Filter defaults were instead verified two ways: from the pixi-filters source on GitHub (raw.githubusercontent.com), and from the installed package code in `node_modules/pixi-filters/lib/*` and `node_modules/pixi.js/lib/*` in this repo. Several other findings come from search-engine summaries, and they are marked as such. Code recipes that I wrote myself, not taken from a source, sit under **Inferences**.

---

## 1. Shader and filter effects: trails, lightning, beams, fire/smoke, shockwave, heat haze, zoom/radial blur, chromatic aberration, bloom, glow, god rays

### Takeaway
pixi-filters v6 (the line that pairs with PixiJS v8) ships ready-made filters for almost every listed effect: Shockwave, ZoomBlur, RadialBlur, MotionBlur, RGBSplit, AdvancedBloom, Bloom, KawaseBlur, Glow, Godray, BulgePinch, SimplexNoise, and Displacement (which is in pixi.js core). Each one is a full-screen or bounds-sized pass, so on mobile apply them to one container at reduced `resolution`, and only for short bursts. Trails, lightning and beams are geometry problems (MeshRope, Graphics, line segments with additive blend), not filter problems.

### Cited Findings

**Filter catalogue and versions**
- pixi-filters version compatibility: PixiJS v8.x pairs with pixi-filters v6.x. Imports are sub-module paths such as `pixi-filters/shockwave`, `pixi-filters/zoom-blur`, `pixi-filters/rgb-split`, `pixi-filters/advanced-bloom`, `pixi-filters/kawase-blur`, `pixi-filters/glow`, `pixi-filters/godray`, `pixi-filters/motion-blur`, `pixi-filters/radial-blur`, `pixi-filters/bulge-pinch`, `pixi-filters/simplex-noise`, `pixi-filters/glitch` and `pixi-filters/crt`. — [pixi-filters README](https://raw.githubusercontent.com/pixijs/filters/main/README.md)
- In v6 the individual `@pixi/filter-*` packages were replaced by sub-module exports, and the positional-argument constructors are deprecated in favour of an options object. — [pixijs/filters releases (search summary)](https://www.github.com/pixijs/filters/releases); [KawaseBlurFilter source](https://raw.githubusercontent.com/pixijs/filters/main/src/kawase-blur/KawaseBlurFilter.ts)

**ShockwaveFilter (shockwave / ring distortion)**
- Defaults: `center {0,0}`, `speed 500` (px per second), `amplitude 30`, `wavelength 160`, `brightness 1`, `radius -1` (no limit), `time 0`. `time` is a plain property that is copied into the `uTime` uniform on each `apply()`, so you advance the ring by incrementing `filter.time` every tick. — [ShockwaveFilter.ts](https://raw.githubusercontent.com/pixijs/filters/main/src/shockwave/ShockwaveFilter.ts) (defaults also confirmed in the installed `node_modules/pixi-filters/lib/shockwave/ShockwaveFilter.mjs`)

**ZoomBlurFilter (impact zoom blur)**
- Defaults: `strength 0.1`, `center {0,0}`, `innerRadius 0`, `radius -1`, `maxKernelSize 32`. `maxKernelSize` is baked into the shader at construction. The source comment says: "On older iOS devices, it's better to not go above 13.0". Lowering it gives a lower-quality blur with more dithering. — [ZoomBlurFilter.ts](https://raw.githubusercontent.com/pixijs/filters/main/src/zoom-blur/ZoomBlurFilter.ts)
- The installed shader loops `MAX_KERNEL_SIZE` times, taking one texture sample per iteration, so the default is about 32 samples per pixel. It randomises the start offset per pixel to hide banding, and pixels inside `innerRadius` return unblurred. — installed `node_modules/pixi-filters/lib/zoom-blur/zoom-blur.mjs` (same source as the [GitHub zoom-blur folder](https://github.com/pixijs/filters/tree/main/src/zoom-blur))
- Pitfall: if `center` is omitted, the filter's center uniform references the shared `DEFAULT_OPTIONS.center` object, so mutating `centerX`/`centerY` also changes the default for later instances. Always pass a fresh `center` object. — [ZoomBlurFilter.ts](https://raw.githubusercontent.com/pixijs/filters/main/src/zoom-blur/ZoomBlurFilter.ts)

**RadialBlurFilter, MotionBlurFilter, BulgePinchFilter, BloomFilter**
- RadialBlur defaults: `angle 0`, `center {0,0}`, `kernelSize 5`, `radius -1`. — installed `pixi-filters/lib/radial-blur/RadialBlurFilter.mjs` ([source dir](https://github.com/pixijs/filters/tree/main/src/radial-blur))
- MotionBlur defaults: `velocity {0,0}`, `kernelSize 5`, `offset 0`. — installed `pixi-filters/lib/motion-blur/MotionBlurFilter.mjs` ([source dir](https://github.com/pixijs/filters/tree/main/src/motion-blur))
- BulgePinch defaults: `center {0.5,0.5}`, `radius 100`, `strength 1`. — installed `pixi-filters/lib/bulge-pinch/BulgePinchFilter.mjs` ([source dir](https://github.com/pixijs/filters/tree/main/src/bulge-pinch))
- BloomFilter (simple Gaussian bloom) defaults: `strength {2,2}`, `quality 4`, `resolution 1`, `kernelSize 5`. Internally it uses separate X and Y blur filters. — installed `pixi-filters/lib/bloom/BloomFilter.mjs` ([source dir](https://github.com/pixijs/filters/tree/main/src/bloom))

**RGBSplitFilter (chromatic aberration)**
- Defaults: `red {x:-10,y:0}`, `green {x:0,y:10}`, `blue {x:0,y:0}` (pixel offsets per channel). It also has per-axis setters such as `redX` and `greenY` for animating. — [RGBSplitFilter.ts](https://raw.githubusercontent.com/pixijs/filters/main/src/rgb-split/RGBSplitFilter.ts)

**AdvancedBloomFilter and KawaseBlurFilter (bloom)**
- AdvancedBloom defaults: `threshold 0.5`, `bloomScale 1`, `brightness 1`, `blur 8`, `quality 4`, `pixelSize {1,1}`. Its doc comments disagree with the code (they say threshold 1, blur 2). It runs three stages: ExtractBrightness, then KawaseBlur, then a combine step. The bright and blur stages use two pooled temporary render textures of the same size. — [AdvancedBloomFilter.ts](https://raw.githubusercontent.com/pixijs/filters/main/src/advanced-bloom/AdvancedBloomFilter.ts)
- KawaseBlur defaults: `strength 4`, `quality 3`, `clamp false`, `pixelSize {1,1}`. It runs `quality` full passes, ping-ponging through pooled textures, with kernels `[4, 2.667, 1.333]` at the defaults. Cost scales linearly with quality, and `clamp:true` avoids dark edges on fullscreen use. — [KawaseBlurFilter.ts](https://raw.githubusercontent.com/pixijs/filters/main/src/kawase-blur/KawaseBlurFilter.ts)
- Cost of AdvancedBloom at defaults: 1 extract pass, `quality` (4) Kawase passes and 1 combine pass, about 6 full passes. This count is inferred from the two sources above.

**GlowFilter (sigil glow)**
- Defaults: `distance 10`, `outerStrength 4`, `innerStrength 0`, `color 0xffffff`, `alpha 1`, `quality 0.1`, `knockout false`. On WebGL, `distance` and `quality` are baked into the shader at construction and cannot change afterwards. Sampling cost scales with quality × distance, and distance also sets the padding. `outerStrength`, `innerStrength`, `color`, `alpha` and `knockout` are uniforms, so they are cheap to animate. — [GlowFilter.ts](https://raw.githubusercontent.com/pixijs/filters/main/src/glow/GlowFilter.ts)

**GodrayFilter**
- Defaults: `angle 30`, `gain 0.5`, `lacunarity 2.5`, `parallel true`, `time 0`, `center {0,0}`, `alpha 1`. You animate it by incrementing `filter.time`, and `parallel:false` makes the rays radiate from `center`. — [GodrayFilter.ts](https://raw.githubusercontent.com/pixijs/filters/main/src/godray/GodrayFilter.ts)

**DisplacementFilter (heat haze, wobble)**
- `DisplacementFilter` is part of pixi.js core. It takes `{ sprite, scale }`, where `scale` is a number or `{x,y}` (doc example: `scale: 20`). — installed `node_modules/pixi.js/lib/filters/defaults/displacement/DisplacementFilter.d.ts` ([pixi.js 8.22 on unpkg](https://unpkg.com/pixi.js@8.22.0/lib/filters/defaults/displacement/DisplacementFilter.d.ts))

**MeshRope (trails and ribbons)**
- `MeshRope` (renamed from v7 `SimpleRope`) "bends a texture along a series of control points, often used for trails, snakes, and animated ribbons". It takes `{ texture, points, textureScale }`. `width` sets the thickness and defaults to the texture height. `textureScale: 0` stretches the texture along the rope, and a value above 0 repeats it. — [PixiJS v8 Mesh guide (search snippet)](https://pixijs.com/8.x/guides/components/scene-objects/mesh); installed `pixi.js/lib/scene/mesh-simple/MeshRope.d.ts`
- I found no PixiJS-specific sword-trail tutorial. The sword-trail examples I found were for Three.js and Babylon.js. — [80.lv Three.js sword trail](https://80.lv/articles/slow-motion-sword-trail-effect-recreated-with-three-js); [Babylon forum trail mesh](https://forum.babylonjs.com/t/trail-mesh-with-uvs/47965)

**Lightning**
- Standard recipe: recursive midpoint displacement. Split a segment, offset the midpoint perpendicular to it by a random amount scaled by the current displacement, halve the displacement each level, and stop when the displacement falls below a "detail" threshold. — [KrazyDad lightning bestiary (search summary)](https://krazydad.com/bestiary/bestiary_lightning.html); [GameMaker recursive thunder](https://soyerdev.itch.io/gml-draw-thunder-a-recursive-function-in-gamemaker); [Roblox devforum](https://devforum.roblox.com/t/how-to-properly-generate-lightning/140795)
- Branches: pick random points along the main bolt and spawn child bolts from them with smaller displacement. Taper the displacement near the endpoints (an "envelope") so the bolt still lands on its target. — [Tuts+ "Shockingly Good 2D Lightning Effects" (search summary; page blocked)](https://code.tutsplus.com/how-to-generate-shockingly-good-2d-lightning-effects--gamedev-2681t)
- Physically based alternatives such as the dielectric breakdown model look more realistic but are slower. — [KAIST physically inspired lightning paper](https://sgga.kaist.ac.kr/paper/physically_inspired_interactive_lightning_generation.pdf)

### Inferences
(These recipes are my own synthesis from the APIs above and standard practice. They are not taken from a cited page.)

**A. Trail/ribbon (MeshRope)**
```ts
// Ring buffer of the last N tip positions; feed MeshRope.points (same array instances).
const N = 16;                                    // 12–20 points is enough for a slash
const pts = Array.from({length:N}, () => new Point());
const rope = new MeshRope({ texture: trailTex, points: pts, textureScale: 0 });
rope.blendMode = 'add';
// trailTex: 64x16 canvas gradient, alpha 0 at the tail (u=0) -> 1 at the head (u=1),
// with a white core and a hue edge (vertical gradient).
ticker.add(() => {
  for (let i = 0; i < N-1; i++) pts[i].copyFrom(pts[i+1]);
  pts[N-1].set(tip.x, tip.y);
});
```
- For a **slash arc** in a turn-based game you do not need a real swept blade. Draw a crescent procedurally with Graphics: an outer arc at radius R from angle a0→a1, then an inner arc at radius R−w·sin(πt) back. Animate `a1` with expo-out over about 90 ms, then fade or erode `a0` toward `a1` over about 150 ms. This is the "smear shape" approach: one frame of a big, flat, bright shape reads as speed better than many thin lines.
- In Canvas2D, draw the same crescent with `ctx.arc` twice plus `globalCompositeOperation='lighter'`.

**B. Lightning**
```ts
function bolt(a, b, disp, detail, out) {   // out: array of points
  if (disp < detail) { out.push(b); return; }
  const mx=(a.x+b.x)/2, my=(a.y+b.y)/2;
  const nx=-(b.y-a.y), ny=b.x-a.x, len=Math.hypot(nx,ny);
  const off=(Math.random()-0.5)*disp;
  const m={x:mx+nx/len*off, y:my+ny/len*off};
  bolt(a,m,disp/2,detail,out); bolt(m,b,disp/2,detail,out);
}
// disp0 ≈ 0.25–0.35 × length, detail ≈ 4–8 px  → ~32–64 points
// branches: 1–3 per bolt, from random index i, angle ±20–35°, length 0.3–0.5×, disp halved
```
- Render each bolt in three additive passes: a wide faint stroke (width 10–14, alpha 0.15), a medium stroke (width 4, alpha 0.5), and a white core (width 1.5, alpha 1).
- Regenerate the path every 50–70 ms (a "flicker" at 15–20 Hz) for about 200–350 ms. Then hold the last frame and fade alpha over 150 ms.
- This is cheap: one Graphics `clear()` plus three strokes per frame. No filter is needed. Bloom on the effect layer will add the halo.

**C. Beam with noise**
- Build the beam from a MeshRope or a quad of 2–3 stacked layers: a white core, a coloured body, and an outer soft layer. Scroll the UVs of a tiling noise texture along the beam (`texture.source.style.addressMode='repeat'` plus a `textureScale > 0` rope, offsetting points or using a custom shader `uv.x += time*speed`).
- Width pulse: `w = base * (1 + 0.15*sin(t*40) + 0.1*noise)`.
- Start: width goes from 0 to 1.4× in 60 ms, settles to 1.0 with back-out, sustains, then collapses to 0 over 120 ms with expo-in.

**D. Fire and smoke without sprite sheets**
- Option 1, cheapest: a pooled particle system using one procedurally generated soft-circle texture (radial gradient drawn to a canvas once). Fire particles have additive blend, a colour ramp over life (white → yellow → orange → vermilion → transparent), upward velocity plus a sideways sine wobble, and scale growth (1.0 → 1.8). Smoke particles have normal blend, dark low alpha, slower motion, and larger growth (1 → 3).
- Option 2, a custom fragment shader (Filter or Mesh shader) using fbm value noise, as in the standard Book of Shaders / Inigo Quilez approach: `n = fbm(uv*3 + vec2(0,-time*1.5))`, `mask = smoothstep(0.3, 0.8, n * (1.0 - uv.y) * radialFalloff)`, `colour = ramp(mask)`. Use 4–5 octaves on PC and 3 on mobile. Apply it only on a small quad (for example 256×256 px), not full screen. `pixi-filters/simplex-noise` exists but is a generic noise overlay.
- Metaballs (for plasma or ooze): render soft blobs additively into a low-resolution RenderTexture (¼ size), then threshold them (a ColorMatrix, or a tiny custom filter `step(0.5, a)` with a smoothstep edge). Two passes in total, which is cheap at ¼ resolution.

**E. Shockwave**
```ts
const sw = new ShockwaveFilter({ center:{x,y}, amplitude:25, wavelength:120,
                                 speed:900, brightness:1.15, radius:400 });
world.filters = [sw];
// tick: sw.time += dt/1000; amplitude *= 0.92 per frame; remove when time > radius/speed
```
- Lifetime is about `radius/speed`: 400/900 ≈ 0.45 s.
- Pair it with a procedural additive ring drawn with Graphics (`circle(r)` stroke whose width shrinks 12 → 1 while r grows), so low-effects mode can drop the filter and keep the ring.

**F. Heat haze**
- Use DisplacementFilter with a tiling noise sprite (128×128, made once from canvas noise) whose position you scroll each frame. Set `scale` to 6–12 px. Apply it to a small container around the caster, not the whole stage. Animate scale 0 → 10 → 0 over the cast so it is only active briefly.

**G. Impact zoom blur and chromatic aberration ("impact frame" stack)**
- On hit frame 0, add `ZoomBlurFilter({ strength:0.25, center:{x,y}, innerRadius:40, maxKernelSize:13 })` and `RGBSplitFilter({ red:{x:-6,y:0}, green:{x:0,y:0}, blue:{x:6,y:0} })`. Decay both to 0 over 120–180 ms with expo-out, then remove the filters from the array entirely (filters with strength 0 still cost a pass).
- Use `maxKernelSize: 13` in line with the iOS note in the source.

**H. Bloom and glow**
- Put all additive VFX in a dedicated `fxLayer` container and give only that layer `AdvancedBloomFilter({ threshold:0.4, bloomScale:1.2, brightness:1, blur:6, quality:3 })` with `filter.resolution = 0.5`. On low-end devices, fall back to Kawase `{strength:4, quality:2}` blended additively, or to no bloom at all.
- Bake familiar sigil glow instead of filtering per sprite: draw the sigil once into a RenderTexture with GlowFilter (or with a canvas `shadowBlur`) and reuse that texture. Because GlowFilter's `distance` and `quality` are compile-time, a live per-sprite GlowFilter is expensive and inflexible. If you must use it live, use `quality 0.1`, `distance ≤ 10`, and animate only `outerStrength`.

**I. God rays**
- Use GodrayFilter with `parallel:false`, `center` at the summon point, `gain 0.4–0.6` and `alpha` animated from 0 to 0.6 to 0. Reserve it for one "ultimate" moment per battle, since it is a full-screen noise shader. That cost estimate is inferred, not measured.

### Gaps
- I found no measured per-filter millisecond costs on mobile GPUs for pixi-filters v6. All cost statements here are inferred from pass and sample counts.
- The official PixiJS filter and mesh guides could not be fetched (network block), so MeshRope details rely on search snippets and installed type definitions.
- I could not retrieve the Tuts+ lightning code's exact parameter values (page blocked).
- I could not fetch Inigo Quilez or Book of Shaders pages, so the fbm fire recipe is from general knowledge, not a cited page.

---

## 2. Easing, timing, anticipation, hold frames, and tweening libraries

### Takeaway
Use expo-out for fast "snap" moves, back-out (c1 = 1.70158) for overshoot settles, elastic-out for magical "boing", and back-in for anticipation pull-backs. GSAP is now free for commercial use, including all its plugins, and its Timeline is the strongest sequencing tool for choreography. A hand-written timeline is also feasible because the easing formulas are short.

### Cited Findings
- Canonical easing formulas: constants `c1=1.70158`, `c2=c1*1.525`, `c3=c1+1`, `c4=2π/3`.
  - `easeInBack(x)=c3x³−c1x²`
  - `easeOutBack(x)=1+c3(x−1)³+c1(x−1)²`
  - `easeOutElastic(x)=2^(−10x)·sin((10x−0.75)·c4)+1` (with the 0 and 1 endpoints special-cased)
  - `easeOutExpo(x)=1−2^(−10x)`
  - easeInOutBack uses c2.
  — [easings.net source, easingsFunctions.ts](https://raw.githubusercontent.com/ai/easings.net/master/src/easings/easingsFunctions.ts)
- Webflow made GSAP "100% free" for everyone, including formerly Club-only plugins such as SplitText and MorphSVG. The standard license now covers commercial use, effective April 30, 2025. The one restriction is on tools that compete with Webflow's visual animation builder. — [Webflow blog](https://webflow.com/blog/gsap-becomes-free); [GSAP standard license copy](https://open.windriver.com/info/uni-license-list/licenses/gsap-standard-no-charge-2025.html)
- GreenSock's licensing page says the no-charge license covers free and paid apps and games. — [GreenSock licensing (search summary)](https://GreenSock.com/licensing)
- PixiJS v8's Ticker exposes `deltaTime` (a dimensionless value of about 1.0 at 60 fps) and `deltaMS` (milliseconds, "capped and speed-scaled"). — installed `node_modules/pixi.js/lib/ticker/Ticker.d.ts` ([unpkg](https://unpkg.com/pixi.js@8.22.0/lib/ticker/Ticker.d.ts))

### Inferences
**Spell choreography template (beats at 60 fps, my recommendation)**

| Beat | Duration | Easing | Content |
|---|---|---|---|
| 1. Anticipation | 150–250 ms | back-in / sine-in | Caster pulls back 8–16 px opposite to the target and squashes (scaleX 1.1, scaleY 0.9). The circle starts drawing. |
| 2. Charge hold | 100–400 ms (scales with skill tier) | — | Hold the pose. Particles converge (inward velocity), glow intensity ramps up, a low audio riser plays. |
| 3. Release | 60–120 ms | expo-out | Projectile, beam or slash travels. The caster lunges past its rest position. |
| 4. Impact | 1 frame flash plus 50–120 ms hitstop | — | White flash frame, hitstop, shake, ZoomBlur/RGBSplit burst, shockwave. |
| 5. Follow-through | 200–400 ms | back-out / elastic-out | Target knockback (expo-out), caster settles (back-out), debris particles, damage number pops (back-out, scale 0 → 1.3 → 1). |
| 6. Linger | 300–800 ms | linear fade | Embers, smoke, circle fades, decals. |

- GSAP sketch:
```ts
const tl = gsap.timeline();
tl.to(hero, {x: hero.x-12, duration:.18, ease:'back.in(2)'})
  .add(drawCircle(circle), '<')                 // custom function returning a tween
  .to(hero, {x: hero.x+24, duration:.09, ease:'expo.out'}, '+=0.15')
  .add(() => impact(target), '>')
  .to(hero, {x: hero.x, duration:.3, ease:'back.out(1.7)'}, '>+0.08');
```
- If you use GSAP, drive it from the Pixi ticker so that hitstop and slow-mo apply to it too: `gsap.ticker.remove(gsap.updateRoot)` plus your own `gsap.updateRoot(gameTime)`, or set `gsap.globalTimeline.timeScale(s)`. A lighter alternative is a ~100-line custom tween/timeline driven by a `gameTime` that respects time scale. This avoids double clocks.
- **Hold frames**: never tween the final pose straight into idle. Freeze on the key pose for 2–6 frames (33–100 ms) before follow-through. This is the 2D-animation "hold", and it reads strongly on small phone screens.

### Gaps
- I did not fetch GSAP docs directly, so the API details (`updateRoot`, `globalTimeline.timeScale`) are from my knowledge and should be verified against gsap.com docs.
- I did not compare popmotion or tween.js against GSAP in sources (not searched due to the call budget).

---

## 3. Particle systems for PixiJS v8 and mobile counts

### Takeaway
The official `@pixi/particle-emitter` has no confirmed v8 release. Use v8's built-in `ParticleContainer` + `Particle` with your own pooled update loop, or a community port. With `ParticleContainer`, rendering is rarely the bottleneck. Per-particle JavaScript logic and overdraw (large additive sprites) are what limit you on phones.

### Cited Findings
- The v8 `ParticleContainer` is officially claimed to render "hundreds of thousands or even millions" of particles. The launch demo showed a million bunnies, where "the main bottleneck ... wasn't even rendering but the logic". It is claimed to be over 3× faster than v7's container. These numbers are PixiJS's own, on unspecified hardware. — [PixiJS blog: ParticleContainer v8 (search summary)](https://pixijs.com/blog/particlecontainer-v8); [PixiJS v8 launch blog](https://pixijs.com/blog/pixi-v8-launches)
- Particles are lightweight `Particle` objects added with `addParticle` (not `addChild`). They cannot have children, filters or masks. `dynamicProperties` defaults to `{ position:true, rotation:false, vertex:false, uvs:false, color:false }`, and each flag set to true means that attribute is re-uploaded every frame. — installed `node_modules/pixi.js/lib/scene/particle-container/shared/ParticleContainer.d.ts` ([unpkg](https://unpkg.com/pixi.js@8.22.0/lib/scene/particle-container/shared/ParticleContainer.d.ts)); [PixiJS particle-container guide (search summary)](https://pixijs.com/8.x/guides/components/scene-objects/particle-container)
- A third-party skill page advises setting `boundsArea` on a ParticleContainer to avoid empty-bounds culling issues. This is unofficial. — [skills.sh pixijs-scene-particle-container (search summary)](https://skills.sh/pixijs/pixijs-skills/pixijs-scene-particle-container)
- v8 emitter alternatives:
  - `@spd789562/particle-emitter` / `pixi-v8-particle-emitter`: a port of the original that keeps the same config format, built on the v8 ParticleContainer. — [pkgstats](https://www.pkgstats.com/pkg:@spd789562/particle-emitter)
  - `pixi-particle-system` (danielpokladek): a TypeScript rewrite, MIT licensed, with a different API. — [docs](https://danielpokladek.github.io/pixi-particle-system)
  - RevoltFX: claims PixiJS 7.3 and 8.x support. — [GitHub](https://github.com/bma73/revolt-fx)
  - The upstream emitter has moved to `pixijs-userland`, and its v8 status is unconfirmed. — [pixijs/particle-emitter](https://WWW.GITHUB.COM/pixijs/particle-emitter)

### Inferences
**Custom pooled emitter (recommended: small, fully controllable, and it respects game time scale):**
```ts
// Structure-of-arrays for the sim, Particle objects only for rendering.
const MAX = 2048;
const px=new Float32Array(MAX), py=..., vx=..., vy=..., life=..., maxLife=..., size0=..., size1=...;
const parts: Particle[] = [];     // pre-created, all added to container once
let alive = 0;
function spawn(...) { if (alive>=MAX) return; const i=alive++; /* write arrays */ }
function update(dt) {
  for (let i=0;i<alive;i++){
    life[i]-=dt; if (life[i]<=0){ swapRemove(i--); continue; }
    vx[i]*=drag; vy[i]+=grav*dt; px[i]+=vx[i]*dt; py[i]+=vy[i]*dt;
    const t=1-life[i]/maxLife[i], p=parts[i];
    p.x=px[i]; p.y=py[i]; p.scaleX=p.scaleY=lerp(size0[i],size1[i],t);
    p.alpha=1-t*t; p.tint=ramp(t);
  }
  // hide the unused tail: alpha=0, or keep container.particleChildren length = alive
}
// ParticleContainer({ dynamicProperties:{ position:true, color:true, vertex:true(for scale) } })
```
- Note: whether scale needs `vertex:true` should be checked in the v8 docs. My inference is that scale lives in the vertex attribute.

**Suggested budgets (inference, not measured):**

| Tier | Live particles on screen | Notes |
|---|---|---|
| PC | 3,000–5,000 | Additive, small (≤32 px) sprites |
| iPad / recent iPhone | 1,500–3,000 | |
| Mid-range Android | 600–1,200 | Keep sprites ≤24 px, cap large additive glows to ~50 |

- Overdraw is the real mobile killer: 50 additive 256 px glow sprites cost more fill-rate than 2,000 8 px sparks.
- Use 1–2 shared textures (soft dot, streak) generated once at startup. A single texture per ParticleContainer keeps it to one draw call.
- Per spell burst: sparks 40–120, embers 20–40, smoke 10–20, ring debris 8–16. Use velocity-stretched "streak" particles (rotation = atan2(vy,vx), scaleX ∝ speed) for impact sparks. They read as fast and need fewer particles.

### Gaps
- I found no independent benchmark of v8 ParticleContainer on specific mobile devices. Measure on the target iPad and Android.
- The actual maintenance state of the v8 emitter forks was not verified beyond package listings.

---

## 4. Camera systems: trauma shake, punch zoom, slow-mo, hitstop, letterboxing

### Takeaway
Use the Eiserloh "trauma" model: trauma is clamped to 0..1, decays linearly, shake = trauma² (or ³), and offsets are sampled from smooth noise. Add hitstop as a global game-time freeze of roughly 3–15 frames (50–250 ms). Implement slow-mo as a game-time scale that the VFX, tween and particle clocks all read.

### Cited Findings
- Squirrel Eiserloh's GDC 2016 talk "Math for Game Programmers: Juicing Your Cameras With Math" covers camera shake (2D and 3D), smoothing and framing. — [GDC Vault](https://gdcvault.com/play/1023146/Math-for-Game-Programmers-Juicing); [Game Developer summary](https://gamedeveloper.com/programming/video-sprucing-up-cameras-with-math)
- Implementations of the talk's model:
  - Gameplay adds trauma in 0..1, trauma decays linearly, and the visible shake = trauma^exponent. — [Strayspark Godot camera docs (search summary)](https://www.strayspark.studio/docs/godot-camera-system/noise-and-shake)
  - Square (2) or cube (3) is "typically the best". — [KidsCanCode Godot recipe](https://kidscancode.org/godot_recipes/3.x/2d/screen_shake/)
  - Bevy's official 2D screen-shake example says it follows the talk. — [Bevy example](https://bevy.org/examples/camera/2d-screen-shake/)
- Jan Willem Nijman (Vlambeer)'s 2013 "The Art of Screenshake" is a separate, earlier talk. — [search summary, gamejuice guide](https://gamejuice.pages.dev/articles/screen-shake-guide)
- Hitstop (hitlag) is frozen frames that stress a hit's power, "sometimes accompanied by screen shaking" for strong moves (Sakurai). It is most prominent in 2D fighters such as Street Fighter and Guilty Gear. — [Source Gaming translation of Sakurai's Famitsu column](https://sourcegaming.info/2015/11/11/thoughts-on-hitstop-sakurais-famitsu-column-vol-490-1/)
- Smash scales hitlag with damage. A 15% move gets 8 frames in Melee, 10 in Brawl/Smash 4 and 15 in Ultimate, and at 60 fps 10 frames ≈ 167 ms and 15 ≈ 250 ms. — [SmashWiki: Hitlag](https://www.ssbwiki.com/Hitlag)
- A claim that Hades uses hitstop on every attack comes from an uncited blog and is unverified. Supergiant's official 2020 VFX breakdown video exists, and the game shipped 32,494 FX animation frames. — [80.lv Hades effects](https://80.lv/articles/a-behind-the-scenes-look-at-the-effects-in-hades); [freegamesprites game-feel article (low authority)](https://freegamesprites.com/es/news/game-feel-2d-combat-juice-tricks)

### Inferences
```ts
// Camera = a Container wrapping the world. UI is outside it.
let trauma=0; const MAX_OFF=14, MAX_ROT=0.03; // px, rad (phone: MAX_OFF 8–10)
function addTrauma(a){ trauma=Math.min(1,trauma+a); }  // light 0.2, heavy 0.45, ult 0.7
function updateCam(realDt){                             // use REAL dt so shake runs during hitstop
  trauma=Math.max(0,trauma-realDt*1.6);                 // ~0.6 s from full to zero
  const s=trauma*trauma, t=performance.now()*0.001*25;  // 25 Hz noise speed
  cam.pivot.set(base.x + MAX_OFF*s*noise1(t,1), base.y + MAX_OFF*s*noise1(t,2));
  cam.rotation = MAX_ROT*s*noise1(t,3);
}
```
- **Directional kick**: on a hit from direction d, also offset the camera 6–10 px along d and spring it back (back-out, 150 ms). It reads better than random shake for single strong hits.
- **Punch zoom**: scale the camera container 1.0 → 1.06 in 40 ms (expo-out) toward the impact point (set the pivot or position so the impact stays fixed), then 1.06 → 1.0 over 250 ms (sine-out). Ultimates can go 1.12.
- **Time model**: `realDt` comes from the ticker; `gameDt = realDt * timeScale * (hitstop>0 ? 0 : 1)`. Particles, tweens, unit animation and shader `time` use `gameDt`. Camera shake, UI and flash fade use `realDt`, so the shake plays *during* the freeze. This is the common "shake during hitstop" feel.
- **Hitstop table** (turn-based, so it can be generous): light 50 ms (3 f), normal 83 ms (5 f), heavy 133 ms (8 f), crit or kill 200–250 ms (12–15 f). Optionally jitter the *target* 2 px left and right during the freeze.
- **Slow-mo**: on the killing blow, ramp `timeScale` 1 → 0.2 in 50 ms, hold 400–600 ms real time, then back to 1 over 300 ms (sine-in-out).
- **Impact frame**: for 1–2 frames, draw the target as a silhouette (white for familiars; for the black broken-sigil enemies, invert to white on black), plus a full-screen tinted flash at alpha 0.6 that fades over 80 ms. A ColorMatrixFilter or a duplicate tinted sprite works; tint swapping is cheapest.
- **Letterboxing**: two black Graphics bars (each 10–12% of screen height) slide in from top and bottom over 250 ms with expo-out when an ultimate starts, and out over 200 ms. On phones in portrait, keep UI-critical HUD outside the bars.

### Gaps
- I could not access the Eiserloh slides themselves. The trauma² model and its parameters come from implementations that cite the talk.
- I found no primary-source frame counts for Hades or Dead Cells hitstop.

---

## 5. Procedural magic circles: self-drawing strokes, layered rotating rings, rune glyphs

### Takeaway
Represent each circle as a list of path primitives (circles, arcs, polygons, inscribed stars, text-like glyph strokes) with precomputed lengths. "Self-drawing" is then just partial-length rendering, either via Canvas2D `setLineDash`/`lineDashOffset` or by drawing a truncated polyline into a Pixi Graphics each frame. Layered rings rotate at different speeds and directions.

### Cited Findings
- I found no dedicated source on procedural magic circles in this session's searches (call budget, blocked hosts). The MeshRope and Graphics APIs above are the relevant primitives. — [PixiJS v8 Mesh guide (search snippet)](https://pixijs.com/8.x/guides/components/scene-objects/mesh)

### Inferences
(All of the following is my own recipe.)
- **Canvas2D self-draw**: for a path of length L, `ctx.setLineDash([L, L]); ctx.lineDashOffset = L*(1-p)` with p from 0 to 1. Circles: `L = 2πr`. You can get L from an SVG `Path2D` via a hidden `<path>.getTotalLength()`, or compute it analytically.
- **PixiJS self-draw**: the v8 Graphics API has no native dash support (inference; verify against the docs). So pre-tessellate each primitive into a polyline with cumulative lengths `cum[]`, and each frame redraw up to `p*L`, interpolating the last point. 6 rings × 64–128 points each costs nothing to rebuild per frame during the 0.3–0.6 s draw-in. After that, cache it: render the finished circle once into a RenderTexture and rotate Sprites of it.
- **Layer recipe** (each ring is its own Container so it can rotate independently):
  1. Outer double ring (r, r−6), drawn in 250 ms, rotation +0.2 rad/s.
  2. Rune band between r−10 and r−34: N = 12–24 glyphs placed at angle 2πi/N, rotated tangentially, appearing one by one with a 15 ms stagger. Rotation −0.35 rad/s.
  3. Inscribed polygon or star {n/k} (5/2, 6/2, 7/3, 8/3). Choose n by element: 3 fire, 4 earth, 6 water, 7 arcane. Drawn in 200 ms.
  4. Inner ring plus a centre sigil (the familiar's own sigil), scaling 0 → 1.15 → 1 with back-out.
  - Draw order: outer → star → runes → centre, overlapping by about 40%, total 0.5–0.8 s. Glow: additive copy at 2× width and 0.3 alpha (cheap), or a single AdvancedBloom on the fxLayer.
- **Rune glyph generation**: a 3×3 (or 3×4) dot grid. A glyph is a random walk of 2–5 strokes between adjacent grid points, plus an optional circle or tick. Seed it by skill id so each skill has a stable "alphabet". Reject glyphs with fewer than 3 points or duplicated segments. Mirror symmetry for 50% of glyphs makes them read as "script".
- **Enemy broken sigils**: use the same generator, then delete 20–30% of segments, jitter endpoints by 2–4 px, and draw in black with a red or vermilion rim. When they are hit, "shatter" the segments into particles that fly off.
- **Activation pulse**: when the spell fires, the circle's scale goes 1 → 1.08 over 60 ms then fades out over 250 ms, with rotation speed ×4. Use an expanding ring copy (scale 1 → 1.6, alpha 0.8 → 0) as a "shock" echo, which can be done without a filter.
- **Tie-in with the hero**: the vermilion rectangle hero's colour (vermilion / 주홍) works as the ink of the circle, so the circle visibly "comes from" the hero. This is a design inference.

### Gaps
- No sourced reference was found for procedural magic-circle generators or for Pixi v8 Graphics dash support.

---

## 6. Impact audio in Web Audio: layering, pitch randomisation, synthesis, free SFX libraries

### Takeaway
Build every hit from 2–3 layers: a short transient (noise burst through a high-pass or band-pass filter), a body (a pitched sine/triangle oscillator with a fast exponential pitch drop), and optionally a tail or sweetener (a sample). Randomise pitch by ±5–10% and gain slightly each time. Kenney's CC0 packs and the yearly Sonniss GDC bundle are safe free sample sources.

### Cited Findings
- Web Audio has no built-in noise node. You fill an AudioBuffer with random values and play it through a buffer source, shaping it with a BiquadFilter. Removing lows makes a snare more realistic. — [MDN Advanced techniques](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Advanced_techniques); [Opera Dev: Synthesising drum sounds](https://dev.opera.com/articles/drum-sounds-webaudio); [Irritant WAC 2016 tutorial](https://github.com/irritant/WAC-2016-Tutorial)
- Kick-style body: an oscillator with an exponential pitch drop of about 400 → 150 Hz over 50 ms, plus an exponential gain decay. — [User Interface Wiki: Web Audio implementation (community)](https://www.mintlify.com/raphaelsalaja/userinterface-wiki/technical/web-audio-api)
- Layering a noise transient over an oscillator body is the standard way to get a sharp attack. — [Sonoport: Synthesising sounds](https://sonoport.github.io/synthesising-sounds-webaudio.html)
- Kenney audio packs (including "Impact Sounds", about 130 sounds) are CC0, with optional credit. — [Godot asset library listing](https://www.godotengine.org/asset-library/asset/edit/7694); [gtstu blog (secondary)](https://gtstu.com/?p=5011)
- Sonniss GDC bundles are free yearly releases (since 2015), royalty-free for commercial use with no attribution required. You may not redistribute the raw files, and newer bundles forbid AI-training use. The 2026 bundle was released in March 2026. — [Bedroom Producers Blog 2026](https://bedroomproducersblog.com/2026/03/16/sonniss-gdc-2026-bundle/); [Freesound forum on redistribution](https://freesound.org/forum/legal-help-and-attribution-questions/42190); the primary license page (sonniss.com/gdc-bundle-license) was not retrieved.
- Other free impact sources exist: OpenGameArt CC0 packs (for example "qubodup audio cc0"), and ZapSplat (which has its own license, not checked). — [OpenGameArt qubodup CC0](https://opengameart.org/content/qubodup-audio-cc0); [ZapSplat impacts](https://www.zapsplat.com/sound-effect-category/impacts/)

### Inferences
```ts
const ac = new AudioContext();                  // resume() on first tap (iOS requirement)
const noiseBuf = (() => { const b=ac.createBuffer(1, ac.sampleRate*0.5, ac.sampleRate);
  const d=b.getChannelData(0); for(let i=0;i<d.length;i++) d[i]=Math.random()*2-1; return b; })();
const master = ac.createDynamicsCompressor();   // glue + prevents clipping when layers stack
master.connect(ac.destination);

function hit(power=1){
  const t=ac.currentTime, r=1+(Math.random()-0.5)*0.15;   // ±7.5% pitch
  // body
  const o=ac.createOscillator(), g=ac.createGain();
  o.type='triangle'; o.frequency.setValueAtTime(180*r*power,t);
  o.frequency.exponentialRampToValueAtTime(45*r,t+0.12);
  g.gain.setValueAtTime(0.9,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.25);
  o.connect(g).connect(master); o.start(t); o.stop(t+0.26);
  // transient
  const n=ac.createBufferSource(); n.buffer=noiseBuf;
  const f=ac.createBiquadFilter(); f.type='highpass'; f.frequency.value=1500*r;
  const ng=ac.createGain(); ng.gain.setValueAtTime(0.6,t); ng.gain.exponentialRampToValueAtTime(0.001,t+0.06);
  n.connect(f).connect(ng).connect(master); n.start(t, Math.random()*0.4); n.stop(t+0.07);
}
```
- **Magic flavour**:
  - Add a "shimmer" layer: 3 detuned sine partials at 1200/1800/2700 Hz × r, 400 ms decay.
  - Charge riser: a sawtooth through a lowpass, sweeping cutoff 200 → 4000 Hz over the charge-hold duration.
  - Lightning crack: a band-passed noise burst (2–4 kHz, Q 0.7) retriggered 3–4 times at 30–60 ms intervals to match the visual flicker.
- **Sync rule**: fire the transient on the exact impact frame (the start of hitstop). Let the body and tail ring through the freeze, because audio should not pause during hitstop.
- **Voice limiting**: cap simultaneous instances of the same SFX at 4, and skip re-triggers within 30 ms (multi-hit spells otherwise smear and clip).
- **Mobile**: the AudioContext must be created or resumed inside a user gesture on iOS Safari (this is common knowledge, not sourced here). Decode samples once to AudioBuffers. Synthesis has near-zero download cost, which fits the procedural art direction.

### Gaps
- I did not retrieve the Sonniss license text or Kenney's own license page directly; the details above are from secondary pages.
- I found no source with tested Web Audio node-count limits on mid-range Android.

---

## 7. Mobile performance budgets: filter cost, render textures, resolution scaling, reduced-effects mode

### Takeaway
On phones the budget is fill-rate. Each filter costs one or more extra passes over its bounds (AdvancedBloom about 6, Kawase = quality, ZoomBlur about 32 samples per pixel by default). Keep at most 1 persistent filter (bloom on the fx layer at half resolution) plus 1–2 transient impact filters, cap the device pixel ratio, and ship a reduced-effects tier.

### Cited Findings
- `Filter.resolution`: "the lower the resolution, the more performant". It can be a number or `'inherit'`. `padding` extends the filter area, and `antialias` "can have a performance impact" and should not be true if the target is not antialiased. `blendRequired` exists for filters that need the backdrop. — installed `node_modules/pixi.js/lib/filters/Filter.d.ts` ([unpkg 8.17.1 Filter.d.ts](https://unpkg.com/pixi.js@8.17.1/lib/filters/Filter.d.ts)); [PixiJS performance tips (search summary)](https://pixijs.com/8.x/guides/concepts/performance-tips)
- Official tip: older mobile devices benefit from `antialias:false` (and `useContextAlpha:false`) on the renderer, and lowering Text resolution saves memory. — [PixiJS v8 performance tips (search summary)](https://pixijs.com/8.x/guides/concepts/performance-tips)
- Setting `container.filterArea` (a fixed Rectangle) avoids per-frame recursive `getGlobalBounds()` measurement for filtered containers. This is unofficial advice. — [skills.sh pixijs-filters (search summary)](https://skills.sh/pixijs/pixijs-skills/pixijs-filters)
- Masks are expensive in large numbers ("100s of masks will really slow things down"). This is v7 guidance. — [PixiJS v7 performance tips](https://pixijs.com/7.x/guides/production/performance-tips)
- ZoomBlur: do not exceed `maxKernelSize` 13 on older iOS. — [ZoomBlurFilter.ts](https://raw.githubusercontent.com/pixijs/filters/main/src/zoom-blur/ZoomBlurFilter.ts)
- GlowFilter cost ∝ quality × distance, with both fixed at construction. — [GlowFilter.ts](https://raw.githubusercontent.com/pixijs/filters/main/src/glow/GlowFilter.ts)
- Kawase cost scales linearly with quality, and each pass is full-size. — [KawaseBlurFilter.ts](https://raw.githubusercontent.com/pixijs/filters/main/src/kawase-blur/KawaseBlurFilter.ts)

### Inferences
**Tiered quality preset (my recommendation, to be validated with on-device profiling):**

| Setting | High (PC) | Medium (iPad / flagship phone) | Low (mid-range Android) |
|---|---|---|---|
| Renderer resolution | min(DPR, 2) | min(DPR, 2) | min(DPR, 1.5), or 1 |
| antialias | true | false | false |
| Bloom on fxLayer | AdvancedBloom q3, res 0.5 | Kawase q2, res 0.5 | Off (fake it with additive halo sprites) |
| Impact filters (ZoomBlur/RGBSplit/Shockwave) | All, kernel 24 | Shockwave + RGBSplit, ZoomBlur kernel 13 | Shockwave only, res 0.5, or a Graphics ring only |
| Godrays / heat haze | On | Ultimate only | Off |
| Particle cap | 4,000 | 2,000 | 800 |
| Lightning glow passes | 3 strokes | 3 | 2 |

- **Auto-detect**: measure the average frame time over the first 2–3 s of the title screen. If p90 is above 20 ms, drop one tier. Expose a "reduced effects" toggle as well; it doubles as an accessibility option to reduce flashing, shake and chromatic aberration.
- **Filter hygiene**:
  - Apply filters to the smallest container that needs them (fxLayer, not the stage).
  - Set `filterArea` to the screen rect for full-screen effects.
  - Remove filters from the `filters` array as soon as their strength reaches 0.
  - Construct filters once at load and reuse them, because shader compilation causes hitches. Pre-warm by rendering one frame with each filter on a hidden 1×1 target during loading.
- **RenderTexture use**: bake static procedural art (sigils, completed magic circles, the soft-dot particle texture, the noise texture) into textures once, and keep live Graphics only for things being drawn this frame. Release RTs after the battle.
- **Canvas2D fallback** (if WebGL is unavailable): the previous demo's tricks still apply. `globalCompositeOperation='lighter'` gives additive blending, and the downscaled-canvas bloom (draw the fx canvas at ¼ size with `ctx.filter='blur(4px)'`, then scale back with 'lighter') is cheap. `ctx.filter` support on iOS Safari is limited (common knowledge, not verified here), so use the downscale-and-upscale blur without `ctx.filter`.
- **Thermal throttling**: phones slow down after minutes of sustained GPU load, so budget against roughly 70% of the cold-start headroom. This is an inference from common practice; I have no source for it.

### Gaps
- I found no measured filter-cost numbers (ms per filter per device) for PixiJS v8 on iPad or Android. Profile on target devices.
- I did not obtain official v8 guidance specific to mobile filters; v8 guide pages were blocked, so this relies on search snippets and installed type docs.
- Canvas `ctx.filter` support status on iOS Safari was not verified in this session.
