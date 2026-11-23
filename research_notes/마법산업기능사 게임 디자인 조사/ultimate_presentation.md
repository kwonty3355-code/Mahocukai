# 궁극기 연출 문법과 타격감 (Ultimate/Cut-in Presentation & Hit Feel) — for a PixiJS 2D/2.5D web game

> Research method note: In this session WebFetch could not resolve external hosts (blocked: gonintendo.com, sourcegaming.info, gamedeveloper.com, gamesradar.com — "ENOTFOUND", outside the session's allowed network). All findings below come from **web-search result snippets/summaries**, not full-page reads. Treat numbers as "reported by the cited page" and re-verify against originals where it matters. Items I know only from prior background knowledge (not confirmed in this session) are placed in **Gaps** or flagged "(unverified)" in Inferences.

---

## 1. Ultimate / cut-in grammar (FF summons, Persona AOA, HSR/Genshin/ZZZ/Blue Archive, Arc System Works supers, Tengen Toppa, Frieren)

### Takeaway
The best-documented "anime look" grammar is Arc System Works' (Guilty Gear Xrd / DBFZ): **few hand-picked key poses held for multiple frames (limited animation, "on 3s/4s"), no auto in-betweens**, which reads as hand-drawn and *clearer* than smooth motion. Persona's All-Out Attack shows the cut-in → chaos → stylized finish-card structure; JRPG/gacha cases show the cost: long, unskippable sequences become a "tax" on repeat play.

### Cited Findings
**Arc System Works (Guilty Gear Xrd, DBFZ)**
- GDC 2015 talk "GuiltyGearXrd's Art Style: The X Factor Between 2D and 3D" by Junya Christopher Motomura (Arc System Works) covered how the team rebuilt a 2D fighter in full 3D while keeping a 2D look; slides/handout released by ASW. — [GDC Vault](https://gdcvault.com/play/1022031/GuiltyGearXrd-s-Art-Style-The); [ASW post](https://www.arcsystemworks.com/?p=812); [ASW slides post](https://arcsystemworks.com/?p=823); [Motomura PDF](https://www.ggxrd.com/Motomura_Junya_GuiltyGearXrd.pdf)
- The team adopted "Limited Animation" (fewer frames) for **clarity**, contrasted with smooth full animation; a Japanese CEDEC 2015 report says motion relies on **keyframes rather than interpolated in-betweens**, mirroring hand-drawn anime (secondary summary, indicative). — [Famitsu](https://www.famitsu.com/news/201508/27087024.html); [Game Watch](https://game.watch.impress.co.jp/docs/news/20150307_691725.html)
- DBFZ: "additional frames make a model look more three-dimensional, so the team used limited animation." — [GameStar (DE)](https://www.gamestar.de/artikel/dragon-ball-fighterz,3325366.html)
- DBFZ standard animation reportedly runs **on 4s** (new pose every 4 frames at 60fps ≈ 15 poses/s), with the Daima-style character animated **on 8s**. — [DashFight](https://dashfight.com/news/dragon-ball-fighter-z-gets-a-new-character-4-years-after-its-last-dlc-8644)
- The studio manually keyframes only poses meant to be shown on screen, imitating sprite animation. — [CinemaBlend](https://cinemablend.com/games/1671520/why-dragon-balls-latest-game-has-2d-combat)
- Kotaku / New Frame Plus video breakdown of GGXrd & DBFZ animation based on Motomura's talk; subtitle transcript exists on Amara. — [Kotaku](https://kotaku.com/breaking-down-the-animation-of-guilty-gear-and-dragonba-1836849279); [Amara transcript](https://amara.org/videos/bDmpkclvfB5I/info/the-animation-of-guilty-gear-xrd-dragon-ball-fighterz)
- DBFZ "Dramatic Finishes" recreate specific anime scenes under conditions — a rare, conditional, extra-spectacular variant. — [PC Gamer](https://pcgamer.com/dragon-ball-fighterzs-best-dramatic-finishes-look-as-good-as-the-anime); [Kotaku](https://kotaku.com/dragon-ball-fighterz-recreates-series-most-dramatic-mom-1821368943)

**Persona All-Out Attack**
- P3/P4: a cut-in flashes the participants' faces/busts, then all rush the enemy in a comical dust cloud. — [Megami Tensei Wiki](https://megatenwiki.com/wiki/All-Out_Attack)
- P5: the last party member who enabled the AOA gets a **"Finishing Touch" close-up splash** replacing the generic victory scene — only if the AOA kills and that member had a One More (conditional payoff). P3 Reload adopted per-character finishing touches. — [Megami Tensei Wiki](https://megatenwiki.com/wiki/All-Out_Attack)
- Smash Ultimate's Joker Final Smash reuses the P5 splash screen and cut-ins nearly identically. — [SmashWiki](https://ssbwiki.com/All-Out_Attack)
- Video essay "The Overwhelming Style of Persona 5's All-Out Attacks" (transcript on Amara). — [Amara](https://amara.org/subtitles/wIZbgZ3Jyy5D/en/1/download/The%20Overwhelming%20Style%20of%20Persona%205s%20All-Out%20Attacks.en.txt)

**Final Fantasy summons (the cautionary tale)**
- FF7: Cloud countering with Knights of the Round "takes an additional, unskippable minute." (I found no source for the commonly cited "80 seconds"; the commonly-cited figure should be verified separately.) — [GamingBolt](https://gamingbolt.com/10-things-players-disliked-about-the-original-final-fantasy-7/3)
- FF8 Guardian Forces reportedly last **20–60 seconds**. — [JRPG long animations article](https://lightyellowsimple.pages.dev/posts/great-jrpgs-hampered-by-long-battle-animations) (low-authority blog)
- Early PlayStation FF entries were "the worst" for "ridiculously time-consuming, unskippable summons"; PC players used Cheat Engine to speed them. — [WhatCulture](https://whatculture.com/gaming/12-awesome-video-games-with-one-awful-mechanic?page=7)
- Counterpoint: Steam FF9 users called summons "a minor annoyance"; grinders are the ones who want them gone. — [Steam discussion](https://steamcommunity.com/app/377840/discussions/0/357284131789171677)
- Kotaku's "best FF summoning animations" list — summons are also beloved. — [Kotaku](https://kotaku.com/the-best-final-fantasy-summoning-animations-1764728381)

**HoYoverse (HSR / ZZZ)**
- HSR: Ultimate animations cannot be skipped; HSR has "very limited skipping functionality in general." — [GINX](https://www.ginx.tv/en/skip-ultimate-animation)
- HSR: Seele's ultimate drew complaints of "too many flashy effects" (eye strain); HoYoverse said it would add a settings option to personalize this, not ready for v1.1. — [GamesRadar](https://gamesradar.com/honkai-star-rails-best-dps-does-so-much-damage-that-shes-damaging-players-eyeballs-so-her-animations-getting-nerfed) (via search summary)
- Players requested an option to "skip or really shorten" ultimate animations and turn off ultimate voice lines. — [GameSpace wish list](https://www.gamespace.com/featured/honkai-star-rail-wish-list/)
- ZZZ: each Agent's Ultimate opens with a short intro cinematic, which some players see as a drawback ("I am annoyed": Ultimates feel pointless). — [VideoGamer](https://www.videogamer.com/news/i-am-annoyed-zenless-zone-zero-fans-think-ultimates-are-pointless)
- ZZZ: long Ultimate animations are used as gameplay windows (e.g., Burnice's Ultimate can "fit about 2 EX Special Attacks" from the next Agent). — [Game8](https://game8.co/games/Zenless-Zone-Zero/archives/537578)

### Inferences
- **Stage model to adopt** (synthesized from ASW limited animation + Persona cut-in/finish card + Smash hitstop): (1) *Windup/charge* (magic circle draws, ambient darken), (2) *Cut-in* (character bust/eyes slash across screen, ~0.5–1.0s), (3) *Freeze/held pose* (time-stop on a key pose; held frames, not tweens), (4) *Release* (impact frame 1–3 frames, flash, shockwave, big shake), (5) *Aftermath* (lingering particles/smoke, damage numbers, finish card / title text). Second values are my design suggestion, not sourced.
- Animate the ultimate's character art "on 3s or 4s" (stepped, `Math.floor(t*fps/3)`) while particles/screen effects run at full 60fps — that contrast is the core ASW look and is cheap in PixiJS (AnimatedSprite with fewer frames + per-frame hold durations).
- Use a *conditional extra-spectacular finisher* (P5 Finishing Touch / DBFZ Dramatic Finish) for kills or rare conditions, so the biggest presentation is earned and not every-turn.

### Gaps
- Genshin Burst, Blue Archive EX, Tengen Toppa Gurren Lagann (Giga Drill Break), and Frieren Zoltraak / magic-circle scenes: no usable sources retrieved in this session. (Background knowledge, unverified: Blue Archive EX skills use a brief cut-in and the game offers an EX-skill cut-in toggle; Frieren's Zoltraak scenes use layered concentric magic circles that build up before a narrow beam release.) Needs verification.
- Exact second/frame timings of FF summons, HSR/Genshin ultimates — not found (would need to time videos).
- GGXrd camera techniques for supers (camera cut, FOV swings, per-frame model deformation) — known to be in the GDC talk but not confirmed via search snippets.

---

## 2. Game feel / juice: hitstop, shake, camera punch, flash, particles, sound

### Takeaway
Hitstop should **scale with damage, have a cap, and be lighter for projectiles**; shake should be **directional, decaying, and noise-based**; and juice is best introduced as stacked small layers (Nijman's ~30 tweaks, Jonasson & Purho's Breakout). Concrete published numbers: Smash Ultimate 15% hit ≈ 15 frames hitlag (0.25s at 60fps); Nuclear Throne pistol = 6px camera kick + 4 shake units.

### Cited Findings
**Hitstop (Sakurai / Smash)**
- Sakurai (Famitsu col. vol. 490): hitstop = frozen frames emphasizing the power of a hit, sometimes with screen shake for powerful moves; there is a **cap** on freeze length; **projectiles get less hitstop**; grounded victims vibrate **side-to-side**, airborne **up-and-down**; a **4-frame transition** into the hurt pose avoids abruptness. — [Source Gaming (column translation)](https://sourcegaming.info/2015/11/11/thoughts-on-hitstop-sakurais-famitsu-column-vol-490-1/) (via search summary); [MyNintendoNews](https://mynintendonews.com/2015/11/12/sakurai-talks-about-the-term-hitstop-used-in-fighting-games/)
- Sakurai YouTube (late 2022) "8 hit-stop techniques" reportedly: shake the victim more; keep hitbox fixed during shake; horizontal shake on ground / vertical in air; taper shake over time; control hitstop length; interpolate into the damage pose; **keep the attacker moving slightly**; **scale shake by camera distance**. — [GoNintendo](https://www.gonintendo.com/contents/13581-sakurai-s-latest-game-dev-video-features-8-hit-stop-techniques); [Nintendo Wire](https://nintendowire.com/news/2022/12/12/this-week-in-sakurai-12-5-12-11-fine-tuning-hit-stop-and-cheating-the-system/) (list from search summary; verify against video)
- Hitlag scales with damage; a 15% move = **10f (64), 8f (Melee), 10f (Brawl/4), 15f (Ultimate)**; Smash runs at 60fps (1f = 16.67ms). Brawl plays a special SFX during hitlag. — [SmashWiki Hitlag](https://www.ssbwiki.com/Hitlag); [SmashWiki Frame](https://ssbwiki.com/Frame)
- After hitstop ends, motion resumes from the stored value "as if nothing changed" — a slow-motion-like trick. — [MyNintendoNews](https://mynintendonews.com/2015/11/12/sakurai-talks-about-the-term-hitstop-used-in-fighting-games/)

**Screenshake / camera (Vlambeer, Eiserloh)**
- Jan Willem Nijman "The Art of Screenshake" (~40–45 min, INDIGO 2013): a dull shooter gets ~30 small tweaks; examples: shake slightly **opposite the direction of fire**, enemies have a 33% chance to explode on death. — [Game Developer](https://gamedeveloper.com/design/vlambeer-co-founder-shares-advice-on-building-better-action-games); [Kenney list](https://kenney.nl/learn/must-see-videos-for-indie-developers) (sources disagree: 40 vs ~45 min)
- Talk stage outline (secondhand): basic animation & sound → lower enemy HP → more bullets/enemies → bigger explosions → **permanence** (smoke, debris stays) → meaning (game over) → slow motion. — [Uni Bayreuth GxD slides](https://medienwissenschaft.uni-bayreuth.de/wp-content/uploads/GxD-10-Game-Feel.pdf)
- Nuclear Throne pistol: camera pushed back **6 px** from aim point, screenshake value **+4**, which decays quickly; total = max pixels screen can move. — [Infovore (quoting RPS interview)](https://infovore.org/?p=5275)
- Squirrel Eiserloh, GDC 2016 "Math for Game Programmers: Juicing Your Cameras With Math": framing, smoothed motion, camera shake, split-screen. — [GDC Vault](https://gdcvault.com/play/1023146/contactUs); [Game Developer](https://gamedeveloper.com/programming/video-sprucing-up-cameras-with-math)
- Common implementation (community): trauma-based shake using Perlin noise, `offset *= maxShake * trauma * trauma` (I could not confirm squaring is from Eiserloh's talk itself). — [gamedev.tv forum](https://community.gamedev.tv/t/enhanced-camera-shake-with-perlin-noise/204230)

**Juice it or lose it / Game Feel**
- Jonasson & Purho (GDC Europe 2012) iteratively juice a Breakout clone with particles, screenshake, sound, animation, tweening. — [gamejuice resource](https://gamejuice.pages.dev/resources/juice-it-or-lose-it); [ModDB summary](https://www.moddb.com/games/zeroes/news/make-it-juicy)
- Academic review: Swink's *Game Feel* plus the Jonasson & Purho and Nijman talks remain the primary sources for game feel/juiciness; tweening = interpolating between values over time with easing. — [arXiv 2011.09201 (Squeezer)](https://arxiv.org/pdf/2011.09201)
- Squash & stretch etc. are "relevant only in specific situations" (don't apply everything everywhere). — [Game Developer: Squeezing more juice](https://gamedeveloper.com/design/squeezing-more-juice-out-of-your-game-design-)

**Impact frames / smear frames (anime look)**
- Smear frames: single in-between frames that stylize fast motion along its path; used for sword swings, dashes, punches. — [Wikipedia](https://en.wikipedia.org/wiki/Smear_frame); [canmom smears](https://canmom.github.io/animation/smears)
- Impact frames: single, high-contrast, often monochrome/inverted frames (radiating lines from a point, flash, darkened BG) at the moment of extreme force; suggested durations **1–3 frames** (impact) and **1–2 frames** (smear) — low-authority source. — [80.lv impact frames](https://80.lv/articles/learn-how-to-add-accents-to-your-animations-with-impact-frames); [prolificstudio](https://prolificstudio.co/blog/smear-frames/)
- A UE5 artist built impact frames from 7 post-process materials, one frame each; warns rotating/normal-based ones can affect photosensitive viewers. — [80.lv MHA VFX](https://80.lv/articles/my-hero-academia-style-attack-vfx-in-unreal-engine-5?amp=1)

### Inferences
- Starter numbers for this game (60fps, turn-based so we can be generous): light hit 3–5f hitstop; normal 6–10f; heavy 12–18f; ultimate final blow 20–40f + 0.3–0.6s slow-mo tail. Cap per-hit; projectile/DoT ticks get ~half. (Anchored to Smash 8–15f for a solid hit; ultimates beyond that are my extrapolation.)
- Shake: trauma model (0..1, add per hit, decay ~1.5–2/s), offset = maxPx·trauma²·noise(t). maxPx ~ 4–8px for normal, 16–30px for ultimate at 1080p. Directional bias along hit vector (Nijman). Rotational shake ±1–3° only for huge hits.
- Layer order per impact: hitstop → impact frame (1–2f invert/white) → shockwave + RGB split peak → particles burst → shake decays → lingering smoke/scorch (Nijman's "permanence").
- Sound: low "thump" sub layer + mid crack + high sparkle; mute/duck music for the freeze frame, then slam back in on release. (Design suggestion; sound layering specifics not sourced this session.)

### Gaps
- Steve Swink *Game Feel* specific numbers (e.g., response-time thresholds) not retrieved.
- Full list of Jonasson & Purho / Nijman techniques — only partial via secondary sources.
- Sakurai's video on hitstop sound design — no source found.

---

## 3. Scaling spectacle with power/size and rarity

### Takeaway
Published sources support **proportional scaling** (hitlag scales with damage; shake scales with move strength and camera distance; projectiles get less) and **conditional rarity tiers** (P5 Finishing Touch only on kill + One More; DBFZ Dramatic Finish only in specific matchups). Spectacle should be a function of power, not a fixed per-skill asset.

### Cited Findings
- Hitlag length scales with damage dealt; Ultimate increased it vs earlier games. — [SmashWiki Hitlag](https://www.ssbwiki.com/Hitlag)
- Screen shake accompanies hitstop "if the move is especially powerful" (threshold-gated, not always on). — [MyNintendoNews](https://mynintendonews.com/2015/11/12/sakurai-talks-about-the-term-hitstop-used-in-fighting-games/)
- Shake scaled by camera distance; projectiles get less hitstop; a cap exists. — [GoNintendo](https://www.gonintendo.com/contents/13581-sakurai-s-latest-game-dev-video-features-8-hit-stop-techniques); [Source Gaming](https://sourcegaming.info/2015/11/11/thoughts-on-hitstop-sakurais-famitsu-column-vol-490-1/)
- P5 Finishing Touch appears only when the AOA defeats the enemy and the initiator had a One More. — [Megami Tensei Wiki](https://megatenwiki.com/wiki/All-Out_Attack)
- DBFZ Dramatic Finishes trigger only under specific character/stage conditions. — [PC Gamer](https://pcgamer.com/dragon-ball-fighterzs-best-dramatic-finishes-look-as-good-as-the-anime)
- OuterPlane (Korean community): main DPS cutscenes are tolerated, but **cutscenes of characters you field only for a gimmick are irritating** — spectacle tolerance depends on how much the player cares about the unit. — [Arca.live OuterPlane](https://arca.live/b/outerplane/102780493)

### Inferences
- Define a single `spectacle = f(manaCost or tier, damage%, isKill, isFirstCast, rarity)` that drives: hitstop frames, shake trauma, flash alpha, particle count, slow-mo duration, whether a cut-in plays, whether a full cutscene plays. Tiers (suggested):
  - T0 cantrip: 0 cut-in, 2–4f hitstop, tiny shake, ≤0.4s total.
  - T1 normal spell: 6–8f hitstop, small shake, 0.6–1.0s.
  - T2 strong spell: brief bust cut-in (≤0.6s), 10–14f, flash, shockwave, 1.2–2.0s.
  - T3 ultimate: windup + magic circle + cut-in + freeze + release + aftermath, 3–6s full / 1.5–2s short.
  - T4 "legendary / first-time / finisher": full cutscene 6–12s, plays rarely (first cast, killing blow on boss, special condition).
- Small fast spells: speed over weight — smears, fast tweens, short hitstop, high-frequency light shake. Huge channeled spells: long anticipation (magic circles assembling, darkening, sound swelling, camera slowly pushing in), then a single massive release — the anticipation is what sells scale.

### Gaps
- No formal source found on rarity-scaled ultimate presentation in gacha (e.g., SSR vs SR cut-in budget). Plausible from industry practice but unsourced here.

---

## 4. Avoiding fatigue: skip, speed, first-time vs repeat, community sentiment, accessibility

### Takeaway
The recurring community complaint (FF7 KOTR, HSR, ZZZ, OuterPlane) is **unskippable repetition**, not spectacle itself. Proven mitigations: per-type skip toggles (7DS Grand Cross "Skip Animation [Ultimate Move]"), **"view once per day"** mode (Gundam UCE), speed-up, and intensity options. For flashes, follow Xbox XAG 118 / WCAG 2.3.1: **≤3 flashes/s**, especially for areas ≥~20% of screen and saturated red.

### Cited Findings
**Skip/shorten options in shipped games**
- 7DS Grand Cross: Menu → Game Settings → first tab → toggle **"Skip Animation [Ultimate Move]"** — disable all or some ult scenes. — [AppGamer](https://www.appgamer.com/7ds/strategy-guide/how-to-turn-off-ultimate-move-scenes)
- Gundam UCE: option to show EX skill animations **"once per day"** (play full the first time each day, then skip). — [Game8](https://game8.co/games/gundam-uce/archives/568994)
- Nikke: "Skill Cut-In Animation" toggle; community recommends turning it off because it interrupts kiting. — [IOP Wiki settings](https://iopwiki.com/wiki/Guide:Settings) (as returned by search; attribution to Nikke per search summary)
- Hero Wars: support article on turning skill animations on/off. — [Nexters support](https://support-hwde.nexters.com/hc/en-us/articles/27358653231634-How-to-Turn-on-off-Skill-Animations)
- Obey Me: "Disable Skill Animations" item/feature. — [Obey Me Wiki](https://www.obeymewiki.com/wiki/Disable_Skill_Animations)
- Stranger of Paradise FF Origin: Soul Burst animations cannot be fully skipped, only shortened. — [ProGameGuides](https://progameguides.com/stranger-of-paradise-final-fantasy-origin/how-to-shorten-animations-in-stranger-of-paradise-final-fantasy-origin/); [Gamepur](https://gamepur.com/guides/how-to-skip-soul-burst-animations-in-stranger-of-paradise-final-fantasy-origin)
- HSR: no ultimate skip; players asked to skip/shorten and mute ult voice lines. — [GINX](https://www.ginx.tv/en/skip-ultimate-animation); [GameSpace](https://www.gamespace.com/featured/honkai-star-rail-wish-list/)

**Community sentiment**
- Arca.live (OuterPlane, Apr 2024): frustration that skill cutscenes can't be skipped; replies — "some users quit because of it", "once used to it you just auto/skip", sweep (소탕) makes it tolerable; dev-side reason given: the cutscene contains the character's preparation motion so it can't be skipped; gimmick-unit cutscenes are the most irritating. — [Arca.live](https://arca.live/b/outerplane/102780493)
- Analysis piece: by the ~4th repetition during farming, ultimate animations feel like an attention "tax." — [hostedgg: gacha ultimate animation skip culture](https://hostedgg.com/blog/gacha-ultimate-animation-skip-culture) (low-authority blog)
- FF7 KOTR: "unskippable minute"; WhatCulture: early PS FF summons "ridiculously time-consuming, unskippable." — [GamingBolt](https://gamingbolt.com/10-things-players-disliked-about-the-original-final-fantasy-7/3); [WhatCulture](https://whatculture.com/gaming/12-awesome-video-games-with-one-awful-mechanic?page=7)
- FF7 Revelations (sic; GamesRadar headline) allowing fast-forwarding cutscenes was met with sarcastic outrage from some fans ("games are truly dead") — skip options can be divisive among story fans. — [GamesRadar](https://www.gamesradar.com/games/final-fantasy/final-fantasy-7-revelations-new-gameplay-showcase-confirms-cutscenes-can-be-fast-forwarded-and-jrpg-fans-are-losing-it-games-are-truly-dead/)
- Kotaku: "The next time you want to skip those animations…" (cost/craft behind battle animations). — [Kotaku](https://kotaku.com/the-next-time-you-want-to-skip-those-animations-world-1793545437)

**Accessibility (flash/photosensitivity)**
- Xbox Accessibility Guideline 118: fail if flashes > ~**3 per second** and cover ≈**20%+** of screen; long sustained lower-intensity flashing also flagged; red flash rule when either extreme is saturated red (**R/(R+G+B) ≥ 0.8**); recommends Harding FPA test. — [Microsoft XAG 118](https://learn.microsoft.com/en-us/gaming/accessibility/xbox-accessibility-guidelines/118)
- WCAG 2.3.1 Three Flashes or Below Threshold; people are more sensitive to red flashing. — [W3C](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html); [MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Seizure_disorders)
- Harding test: automated frame-by-frame analysis of luminance flashes, red flashes, spatial patterns. — [Wikipedia](https://en.wikipedia.org/wiki/Harding_test)
- HSR Seele ult "too many flashy effects" → HoYoverse planned an effects-intensity setting. — [GamesRadar](https://gamesradar.com/honkai-star-rails-best-dps-does-so-much-damage-that-shes-damaging-players-eyeballs-so-her-animations-getting-nerfed)

### Inferences
- Recommended options panel: `Ultimate cutscene: Always / First time only (per spell) / Once per day / Short / Off`; `Battle speed: 1x/1.5x/2x/3x`; `Screen shake: 0–100%`; `Flash intensity: 0–100%` (+ "reduce flashing" that converts white flashes into soft vignettes and clamps to ≤3/s); `Chromatic aberration: on/off`.
- Make every cutscene **interruptible at any point by tap**, skipping to the aftermath state (never require dev-side "prep motion" to be watched — the OuterPlane excuse is an architecture smell: decouple gameplay state from presentation timeline so skip = jump to end keyframe).
- Auto-shorten on repeat: 1st cast = full (T4), next casts = short version (cut-in + release only), auto/sweep battles = icon flash only. Raise to full again on special conditions (boss kill, new skin, level up of the spell).
- Hold big white flashes to ≤2 per ultimate and ≥333ms apart; prefer luminance spikes on small areas (impact point) over full-screen; avoid saturated-red full-screen flashes.

### Gaps
- DC인사이드/루리웹 specific threads on ultimate length: not retrieved (one DC result was about story skip in another game, weak evidence). Korean community evidence here rests on one Arca.live thread.
- Whether Genshin/HSR/ZZZ have added skip toggles in 2025–2026 patches: not verified (search results were older evergreen guides).
- PlayStation/Nintendo photosensitivity cert specifics not found.

---

## 5. Achieving anime-feel effects cheaply in 2D WebGL (PixiJS)

### Takeaway
PixiJS's community `pixi-filters` already provides the core post-FX (ShockwaveFilter, AdvancedBloomFilter, RGBSplitFilter for chromatic aberration); combine with stepped "on 3s/4s" character animation, 1–3 frame impact frames, and smear sprites to get most of the ASW/anime look at low cost.

### Cited Findings
- `pixi-filters` includes AdvancedBloomFilter, ShockwaveFilter, RGBSplitFilter (each with demos). In PixiJS v8 import from `pixi-filters/{name}`; `@pixi/filter-*` packages are v7-only; non-options constructors deprecated — use options objects. — [pixijs/filters releases](https://www.github.com/pixijs/filters/releases); [pixijs-filters skill guide](https://skills.sh/pixijs/pixijs-skills/pixijs-filters); [PixiJS filters guide](https://pixijs.com/8.x/guides/components/filters.md)
- AdvancedBloomFilter options: `threshold` (default 0.5), `bloomScale`, `brightness`, `blur`. — [Snyk advisor](https://snyk.io/advisor/npm-package/pixi-filters/functions/pixi-filters.AdvancedBloomFilter)
- ShockwaveFilter takes options incl. `center`; RGBSplitFilter offsets per channel (`red.x` etc.). — [jsDelivr d.ts](https://cdn.jsdelivr.net/npm/@pixi/filter-shockwave@5.1.1/index.d.ts); [socket.dev rgb-split](https://socket.dev/npm/package/@pixi/filter-rgb-split)
- Limited animation (fewer drawn poses, held) reads as 2D/anime; extra frames make it read 3D — [GameStar](https://www.gamestar.de/artikel/dragon-ball-fighterz,3325366.html); DBFZ on 4s — [DashFight](https://dashfight.com/news/dragon-ball-fighter-z-gets-a-new-character-4-years-after-its-last-dlc-8644)
- Smear frames can be made by geometric stretching, motion blur, or duplicating elements along the path. — [Wikipedia](https://en.wikipedia.org/wiki/Smear_frame); [CG Wire](https://blog.cg-wire.com/smear-frames/)
- Impact frames as one-frame post-process swaps (UE5 example, 7 materials). — [80.lv](https://80.lv/articles/my-hero-academia-style-attack-vfx-in-unreal-engine-5?amp=1)

### Inferences (implementation recipe, PixiJS)
- **Stepped animation**: drive cut-in character tweens through a quantizer (`t_q = floor(t * 60 / 3) * 3 / 60` → on 3s; on 2s for fast action, on 4s for "weighty" ASW feel). Keep particles/screen FX unquantized for contrast.
- **Impact frame**: on release, for 1–2 frames render a full-screen ColorMatrixFilter (invert/threshold to 2-tone) + radial speed-line sprite centered on impact; then 1 frame pure white at ≤60% alpha (respect flash setting).
- **Shockwave**: ShockwaveFilter on the world container, center = impact point, animate `time` 0→~1s; amplitude/wavelength scale with spell tier.
- **Bloom**: AdvancedBloomFilter on an FX-only container (not the UI) with threshold ~0.5–0.7; spike `bloomScale` for 100–200ms at release.
- **Chromatic aberration**: RGBSplitFilter offsets driven by the same trauma value as shake (e.g., 0–6px), decaying with it.
- **Cut-in**: diagonal masked strip (Graphics mask) sliding across in ~8–12 frames, character bust stepped on 3s, background speed lines (tiling sprite scrolled fast), held 0.4–0.8s, exit wipe; dim world with a black overlay at ~60% alpha during the cut-in.
- **Magic circle (Zoltraak-like)**: build from concentric ring sprites/SVG-to-texture with rotating rune text; reveal with mask arcs (angle tween), stack 2–5 circles in depth (scale/alpha offsets = cheap 2.5D), pulse with additive blend before release; beam = stretched additive sprite + noise-scrolled texture.
- **Flipbook VFX**: author explosions/smoke as spritesheets at 12–15fps (on 4s/5s) — cheaper and more "anime" than physics particles; mix with a few hundred additive particles for sparkle.
- **Performance**: filters cost full-screen passes — apply only during the ultimate window, set `filterArea`/resolution lower (0.5) for bloom, remove filters after aftermath.

### Gaps
- No sourced benchmarks for PixiJS filter cost on mobile WebGL.
- No retrieved source on Frieren magic-circle production technique specifically.
