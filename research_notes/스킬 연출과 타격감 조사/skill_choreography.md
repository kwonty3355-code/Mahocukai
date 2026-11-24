# Skill choreography (스킬 연출 안무): how to *perform* a spell, not just *fire* it

> **Method note (read first).** Network access in this session was heavily restricted: WebFetch failed with `ENOTFOUND` for vfxapprentice.com, animetudes.com, wavemotioncannon.com, nexus.leagueoflegends.com, 80.lv, gonintendo.com, amara.org and gigazine.net (all outside the session's allowed domains). **Every "Cited Finding" below comes from web-search result snippets/summaries, not full-page reads** — treat quoted numbers as "reported by that page" and re-verify against the original before relying on them. Material I know only from background knowledge (game/anime examples, typical durations) is **never** put in Cited Findings; it appears in *Inferences* explicitly tagged **(background, unverified)** or in *Gaps*.
>
> **Overlap:** hitstop numbers, screenshake math, Arc System Works "limited animation", Persona AOA finishing-touch rules and FF summon fatigue are already covered in `research_notes/마법산업기능사 게임 디자인 조사/ultimate_presentation.md`. This file focuses on **phase structure, motion devices, staging, magic-circle choreography and pacing**, and cross-references that file rather than repeating it.
>
> Frame math used throughout: at 60 fps, 1f = 16.7 ms; 6f = 0.1 s; 12f = 0.2 s; 30f = 0.5 s.

---

## 1. Phase structure used by VFX artists (anticipation → build-up → release → travel → impact → dissipation) and time proportions

### Takeaway
Industry sources consistently describe effects as **anticipation → attack/release → decay** with a *non-linear* lifetime (fast punch, long tail), and insist that **visual weight must track gameplay weight** (Riot: importance via size, shape, timing, value, saturation, opacity; gameplay readability beats theme). No primary source I could reach gives a canonical "% of time per phase"; the frequently quoted "10/10/80" or "80% of impact is before contact" ratios come from **AI-generated skill-listing pages**, not GDC talks, and should not be cited as industry fact.

### Cited Findings
- Riot's VFX style guide organizes effects around five pillars — **gameplay, value, color, shape, timing** — and states that "the level of importance can be controlled by **size, shape, timing, value, saturation and opacity**." — [Riot / Nexus: League's VFX style guide](https://nexus.leagueoflegends.com/en-us/2017/10/dev-leagues-vfx-style-guide/); [public PDF](https://nexus.leagueoflegends.com/wp-content/uploads/2017/10/VFX_Styleguide_final_public_hidpjqwx7lqyx0pjj3ss.pdf)
- Riot "Clarity in League": the attention an ability draws should **match its importance (hierarchy)**; effects that don't match their real hitbox are a major frustration source. — [Riot: Clarity in League](https://www.leagueoflegends.com/en-us/news/dev/clarity-in-league/)
- Riot VFX-update post: "gameplay readability will always prevail over thematic resonance"; correcting inaccurate hit indicators is the primary goal of VFX updates. — [Riot: Behind the scenes of VFX updates](https://www.leagueoflegends.com/en-us/news/dev/dev-behind-the-scenes-of-vfx-updates/)
- A VFX-education blog summarizing Riot's handbook says **"timing can make or break an effect"** and describes a **non-linear lifetime curve with a brief anticipation/cast window** that alerts the opponent (secondary source, attributes points to a Riot presenter). — [VFX Apprentice: 10 LoL VFX design tips](https://www.vfxapprentice.com/blog/10-league-of-legends-vfx-design-tips) (snippet only); companion article [The Soul of Effects: What is Timing in VFX?](https://www.vfxapprentice.com/blog/the-soul-of-effects-what-is-timing-in-vfx) (could not fetch)
- A VFX documentation site frames emission timing as **anticipation → attack → decay**, using an explosion as the canonical example. — [vfxdoc: Authoring VFX](https://vfxdoc.readthedocs.io/en/latest/vfx/authoringvfx/)
- A PvP-game VFX artist recommends **pre-cast effects** as "anticipation for an impactful ability as well as a warning to other players." — [Mighty Bear Games: How UX design can help with VFX](https://medium.com/mighty-bear-games/how-ux-design-can-help-with-vfx-a0925f80e0f0)
- GDC Vault has talks that apply the **12 animation principles to VFX** ("Visual Effects Bootcamp: Zip! Thwack! Ping! Animation Principles of VFX" — software-agnostic, about "the why behind the numbers and sliders"), "The Dao of VFX", and "VFX as a Game Design Language". — [GDC Vault 1025301](https://gdcvault.com/play/1025301/contactUs); [The Dao of VFX](https://gdcvault.com/play/1026279/The-Dao-of-VFX); [VFX Summit: VFX as…](https://gdcvault.com/play/1027899/Visual-Effects-Summit-VFX-as)
- Overwatch: readability "formed the bedrock" of hero design (would abilities/effects add too much visual complexity?); VFX artist Rachel Day: "VFX is the visual telling of gameplay" and "learning timing is such an instinctual thing." — [Cook & Becker: Designing Overwatch](https://cookandbecker.com/en/article/378/designing-overwatch.html); [VFX Voice](https://vfxvoice.com/?p=624080)
- The "10/10/80" and "80% of impact happens before contact" ratios surfaced only on AI skill-index pages, not in a verifiable talk. — [openskillindex vfx-realtime](https://openskillindex.com/skills/vibeforge1111-vibeship-spawner-skills-vfx-realtime); [skillselion vfx-realtime](https://skillselion.com/skills/omer-metin/skills-for-antigravity/vfx-realtime) (**flagged unreliable**)

### Inferences
- **Reusable 7-phase template for this game** (my synthesis of anticipation/attack/decay + anime "tame" + Riot hierarchy; percentages are design proposals, not sourced):

  | # | Phase | What happens | Share of a 1.2 s normal spell | Share of a 4–6 s signature |
  |---|---|---|---|---|
  | 0 | **Tell / Intent** (예고) | target tile highlight, sigil eye turns toward target | 0 (UI, before input confirm) | 0 |
  | 1 | **Anticipation** (예비동작) | opposite-direction motion: rectangle squashes down & leans *away* from target; familiar sigil contracts | 15–20 % (≈0.2 s) | 8–10 % |
  | 2 | **Build-up / Charge** (축적) | circle draws itself, particles converge *inward*, light rises, sound riser | 20–25 % | 30–40 % |
  | 3 | **Hold / Tame** (タメ·멈춤) | everything freezes on peak pose 6–18f; brightness peak, audio drop-out | 5–10 % | 5–8 % (+ cut-in here) |
  | 4 | **Release** (방출) | 1–3f flash / impact frame, stretch toward target, overshoot | ≈5 % (3–4f) | ≈3 % |
  | 5 | **Travel** (비행) | projectile / beam / circle-chain; skip entirely for "instant" spells | 10–20 % | 10–15 % |
  | 6 | **Impact** (착탄) | hitstop, shockwave, shake, enemy sigil cracks | 10 % + hitstop | 10 % + longer hitstop |
  | 7 | **Aftermath / Dissipation** (여운) | debris, embers drifting *outward & up*, circle fades in reverse order, hero settles with follow-through wobble | 20–25 % | 20–25 % |

- The single most important "stylish vs. fired" lever is **Phase 3 (the hold)** plus **asymmetric easing**: slow, ease-in build (energy accumulating) → near-instant release (ease-out or linear, 2–4f) → long ease-out decay. A projectile that simply spawns and flies skips 1, 3 and 7 — that is exactly what reads as "spitting out a projectile."
- **Riot's hierarchy rule as a budget**: ordinary skills may not use the full-screen flash, screen darkening, or camera moves; reserve those levers (size, value contrast, saturation, timing length) for signature spells so the player's eye learns "dark screen = big moment."
- Because combat is turn-based (no reaction-time pressure), the *gameplay* reason for anticipation (warning the opponent) is replaced by an **enemy-intent telegraph** shown before the player's turn; spell anticipation can then be purely aesthetic and kept very short.

### Gaps
- No primary source (GDC talk transcript, Riot PDF text) retrieved with explicit per-phase second/percentage budgets; the table above is a proposal to be tuned by eye.
- Blizzard/Overwatch ultimate-specific VFX timing talk not located; only general readability material.

---

## 2. Animation principles applied to spells (anticipation, overshoot, follow-through, easing, smears, arcs, holds/"tame", staging, silhouette)

### Takeaway
The 12 principles transfer directly to VFX (a GDC bootcamp exists specifically on this). The highest-value ones for a faceless rectangle hero are **anticipation (even 1 frame helps)**, **holds before release (Japanese タメ / tame)**, **overshoot + follow-through on settle**, **smear frames on fast motion**, and **framerate modulation** (effects start fluid "on ones" then drop to held "threes").

### Cited Findings
- Skullgirls GDC animation talk: anticipation, smears and timing within restrictive gameplay frame budgets; "having **even a frame of anticipation** will make your move much better in terms of readability." — [GDC Vault: Animation Bootcamp – Fluid and Powerful Animations](https://gdcvault.com/play/1020575/Animation-Bootcamp-Fluid-and-Powerful); [Game Developer recap](https://gamedeveloper.com/production/video-creating-fluid-and-powerful-animations-for-i-skullgirls-i-); [80.lv tips](https://80.lv/articles/tips-on-making-fluid-and-powerful-animations)
- GDC "Animation Principles of VFX" bootcamp applies the 12 principles to effects specifically. — [GDC Vault 1025301](https://gdcvault.com/play/1025301/contactUs)
- Sakuga discussions note electric-looking effects that **start on ones, then switch to threes** (drawings held for 3 frames), which makes flashes feel punchy. — search-snippet summary of [Wave Motion Cannon: An Introduction to Framerate Modulation](https://wavemotioncannon.com/2016/12/31/an-introduction-to-framerate-modulation/) (could not fetch)
- Impact frames are "typically **1–3 frames**", single high-contrast, often monochrome frames marking extreme force (low-quality glossary source; consistent with 80.lv). — [80.lv: impact frames](https://80.lv/articles/learn-how-to-add-accents-to-your-animations-with-impact-frames); [ARH glossary](https://www.arhfoundation.org/impact-frames-meaning)
- Arc System Works' limited animation (few key poses held 3–4 frames, no auto-tweens) — see the existing `ultimate_presentation.md` §1 for sources (GDC 2015 Motomura talk, DBFZ "on 4s").
- Sakurai: hitstop gives weight (stronger move → longer freeze) and confirms a hit; projectiles get less; there is a cap. — [Source Gaming: Sakurai Famitsu col. 490](https://sourcegaming.info/2015/11/11/thoughts-on-hitstop-sakurais-famitsu-column-vol-490-1/); [MyNintendoNews](https://mynintendonews.com/2015/11/12/sakurai-talks-about-the-term-hitstop-used-in-fighting-games/)
- A 2022 study coins "impact feel" and finds **hit stop, sound coherence and camera control** strongly influence it; missing one can ruin it. — [arXiv 2208.06155](https://arxiv.org/abs/2208.06155)
- Practitioner rule of thumb (not a standard): **2–4f** hitstop for light hits, **12–20f** for finishers/boss slams. — [Bugnet: hit pause](https://bugnet.io/blog/how-to-use-hit-pause-to-make-impacts-feel-powerful)

### Inferences
Principle → concrete spell device (my mapping; values are starting points):
- **Anticipation**: before casting, rectangle squashes to ~85 % height / 112 % width over 6–10f and tilts 5–10° *away* from the target (wind-up). Familiar sigil *contracts* (scale 0.9) and its eye narrows. Even 3f of this beats none (Skullgirls).
- **Tame / hold (タメ)**: freeze the peak pose 6–12f (normal) or 18–40f (signature). During the hold, *something must still move* subtly (a single pulsing ring, flickering embers) so it reads as tension, not lag — Sakurai's "keep the attacker moving slightly" logic.
- **Release**: 1 frame white/vermilion flash or inverted impact frame, then stretch the rectangle toward the target (115–130 % along cast axis) for 2–4f.
- **Overshoot & settle**: after release, rectangle springs back past neutral (e.g., 95 % → 103 % → 100 %) with a damped spring (2–3 oscillations, ~0.3 s). Circles that snap into place should overshoot scale ~1.08 then settle.
- **Follow-through / overlapping action**: hero's settle lags behind the effect; the familiar's orbit wobbles after release; the magic circle's outer ring keeps rotating 0.3–0.5 s after the inner ring stops.
- **Easing**: charge = ease-in (cubic/expo in, accelerating gather); release = 0–2f linear snap; decay = ease-out (expo out). Avoid symmetric ease-in-out on releases — it reads "floaty".
- **Arcs**: projectiles and flying runes travel on curved Bézier paths (slight lift then dive) rather than straight lines; multiple runes take staggered, fanned arcs that converge.
- **Smear frames**: for dashes/hops, replace 1–2 frames with an elongated, semi-transparent rectangle trail; for spinning circles, use a radial motion-blur frame at peak spin.
- **Framerate modulation (cheap anime look)**: drive particles/glows at 60 fps but step key "drawn" shapes (lightning, big flash shapes, rune glyph swaps) on 2s/3s (`frame = floor(t*60/3)`), and switch from ones→threes at the moment of impact to make it feel heavier.
- **Staging & silhouette**: during a signature spell, darken/desaturate the board 40–70 % so the casting silhouette (vermilion rectangle + glowing circle) is the only high-value shape; this is Riot's value-hierarchy rule applied cinematically.

### Gaps
- Could not read the Wave Motion Cannon framerate-modulation article or GDC VFX-principles talk in full; specific frame counts from them unverified.
- No sourced number for "ideal hold length before release"; 6–40f is my proposal.

---

## 3. Anime effects animation (sakuga): Kanada, Nakamura, impact frames, light-shape vocabulary, beams/explosions; magical-girl transformations; Frieren / Fate / JJK staging

### Takeaway
The Kanada school defined the anime effects vocabulary: **bold geometric light shapes, dark smoke vs. bright light contrast, circular vs. straight trajectories, snappy timing with holds**. Modern usage is mostly "citation" (angular effects, snappier timing). Impact frames (1–3f, monochrome/inverted) and framerate modulation are the transferable devices. I could not retrieve sourced material on Nakamura, Frieren, Fate or JJK staging in this session — those examples below are background knowledge.

### Cited Findings
- Yoshinori Kanada "left his mark on anime history with his innovative way of drawing effects: lightning, smokes and explosions"; central to the "charisma animator" movement. — [Full Frontal: Sakuga Espresso 16 (Arcadia of My Youth)](https://fullfrontal.moe/sakuga-expresso-16-arcadia-of-my-youth/)
- "The key idea behind this cut is **geometry**: these very bold shapes are what Kanada is famous for"; "the smoke effects and the rays of light contrast against each other (**dark smoke/bright light, circular/straight trajectories**) to create even more dynamism." — [Full Frontal: Sakuga Espresso 16](https://fullfrontal.moe/sakuga-expresso-16-arcadia-of-my-youth/)
- Today the Kanada style "is mostly visible through citations (Kanada dragons, very angular effects) and a generally **snappier approach to timing**." — [Animetudes: The Kanada style now](https://animetudes.com/2021/07/09/the-kanada-style-now/) (snippet)
- Impact frames: "stylized shots, usually **monochromatic**, which are added to dynamic moments in animations to emphasize them." — [80.lv](https://80.lv/articles/learn-how-to-add-accents-to-your-animations-with-impact-frames)
- A UE5 artist recreating My Hero Academia-style attacks built impact frames from **7 post-process materials, one frame each**, and warned that rotating/normal-based ones can affect photosensitive viewers. — via existing notes: [80.lv MHA VFX](https://80.lv/articles/my-hero-academia-style-attack-vfx-in-unreal-engine-5?amp=1)
- CEDEC 2011 had a session on anime-style effects (reported by GIGAZINE) — title/coverage found, content not retrievable. — [GIGAZINE CEDEC2011 anime effect](https://www.gigazine.net/news/20111019_anime_effect_cedec2011/); CEDEC 2025 session on **effect storyboards (エフェクト絵コンテ)** — making guides so downstream artists know what's needed. — [Speaker Deck: CEDEC2025 GREE](https://speakerdeck.com/gree_tech/cedec2025-0723-2-1440)

### Inferences
Background-knowledge vocabulary (all **(background, unverified)** — verify by watching clips/sakugabooru tags before quoting):
- **Kanada light shapes**: hard-edged polygonal flares, "bubble" explosions with flat dark shadow shapes, light rays drawn as solid wedges, poses held then snapped with very few in-betweens. → For this game: draw explosion/flash shapes as **flat 2–3-tone vector polygons** (fits the flat vermilion rectangle aesthetic better than soft particles), swap glyph shapes on 3s.
- **Yutaka Nakamura (Bones: Cowboy Bebop, Soul Eater, MHA, Mob Psycho 100 contributions)**: extremely fast, fluid action broken by sudden held impact poses; signature cube/block-shaped debris and smoke ("Yutapon cubes"); camera seemingly tracking through the action. → Use **square/cube debris** when enemy black sigils shatter — on-brand with a rectangle hero.
- **Beam timing (generic anime grammar)**: (1) gather — particles/light converge to a point, lines suck inward; (2) a hold of near-silence with a tiny bright core; (3) release — 1–2 white/inverted frames, then the beam appears at full width instantly (no grow-in), held with jittering edges; (4) beam narrows to a line and vanishes; (5) delayed explosion at target with a held smoke silhouette. The **delay between beam hit and explosion bloom** (several frames) is what sells weight.
- **Magical-girl transformation "bank" sequences (Sailor Moon / Pretty Cure)**: a fixed, pre-animated sequence (~20–60 s) reused every episode with: abstract colored void background, silhouette + light ribbons, item-by-item costume assembly, a final pose + name call. Key game lesson: the anime industry already solved repeat-viewing by making the bank sequence **highly rhythmic, music-synced and pose-driven** — and by shortening/cutting it in later episodes. (Hisashi Kagawa's Sailor Moon work is covered in a Full Frontal Sakuga Espresso post I could not read: [link](https://fullfrontal.moe/sakuga-espresso-sailor-moon-hisashi-kagawa/).)
- **Frieren (2023)**: magic is staged *understated*: Zoltraak is a small circle at the fingertip and a thin, fast white beam; mass spells are **many identical circles appearing in formation across the sky**, then firing in volleys; defensive magic is hexagonal-panel barriers that crack. The contrast — quiet tiny gesture, huge consequence — is ideal for a "traditional/craft magic" tone. (background, unverified)
- **Fate (Ufotable)**: Noble Phantasm releases = name declaration (incantation as a cut-in beat) → light gathering into the weapon (long tame) → massive beam with camera pulled far back to show scale → white-out. (background, unverified)
- **Jujutsu Kaisen**: Hollow Purple = two orbs (blue attraction, red repulsion) brought together with a chant, the merge as the tame, then an erasing sphere; Domain Expansion = hand sign → background replaced by a new world (a full "stage takeover"); Black Flash = colour-inverted impact frames with black lightning. → Strong models for (a) **two-familiar combination spells**, (b) a **board-takeover ultimate** where the battlefield background is replaced by the caster's grimoire page, (c) **inverted-colour crit frames**. (background, unverified)
- **Incantation as rhythm**: Fate/JJK/Frieren all use spoken chant lines to segment the build-up; in a game without voice, segment with **Hanja/rune glyphs stamped one per beat** (e.g., 4 glyphs → 4 beats → release on beat 5).

### Gaps
- No retrievable source on Yutaka Nakamura's specific techniques, Frieren/Fate/JJK spell staging, or magical-girl bank timings; all are flagged background knowledge.
- Sakugabooru tag pages and CEDEC 2011 anime-effect slides not retrieved.

---

## 4. Gacha / RPG ultimates: structure, lengths, cut-ins, camera, skip options, first-time vs repeat

### Takeaway
Sourced data is thin on exact durations, but the pattern is clear: **long unskippable ultimates are tolerated in gacha (HSR) yet are a recurring complaint**; the classic failure is FF summons (~1 min+, unskippable); successful systems either **gate the biggest presentation behind conditions** (P5 Finishing Touch on kill) or **split the animation into a skippable flourish and a non-skippable result** (Granblue summons). Photosensitivity is a real constraint (HSR Seele).

### Cited Findings
- Honkai: Star Rail — ultimate animations **cannot be skipped**; animations and combat are interwoven. — [GINX](https://www.ginx.tv/en/skip-ultimate-animation); [Spieltimes](https://www.spieltimes.io/news/honkai-star-rail-skip-ultimate-battle-animation)
- HSR — Seele's ultimate flashing drew eye-strain complaints; HoYoverse added an **"Eye Comfort Mode"** option to reduce flashing (v1.2, 19 Jul 2023), after saying it needed "extra development and testing." — [Siliconera](https://www.siliconera.com/honkai-star-rail-gets-eye-comfort-mode-for-seeles-ultimate/); [GamesRadar](https://gamesradar.com/honkai-star-rails-best-dps-does-so-much-damage-that-shes-damaging-players-eyeballs-so-her-animations-getting-nerfed)
- Granblue Fantasy (mobile): a fan animation viewer reports modern summon animations are split into **two parts, "Attack" and "Damage"**, and the skip option "seems to just play the Damage one." — [GBFAP viewer](https://mizagbf.github.io/GBFAP) (third-party observation)
- Granblue Fantasy Versus: Rising offers an Intro Animation Skip setting with **Normal / Always Skip / Can't Skip**. — [SeekingTech](https://seekingtech.com/how-to-always-skip-cut-scene-intros-in-granblue-fantasy-versus-rising/)
- GBF Relink: Endless Ragnarok — summon locks the character in a casting animation of **~2.5 s** (commercial-blog source). — [xmodhub](https://www.xmodhub.com/info/blog/endless-ragnarok-summons-primal-burst-no-cooldown/)
- Final Fantasy — Knights of the Round / Eden / Ark described as **~100-second** animations (listicle) vs "an additional, unskippable minute" (blog); conflicting, neither primary. FF9: long summon version plays only under conditions (sources conflict on item vs ability). FF8: summon power depends partly on animation length/support abilities. — [WhatCulture](https://whatculture.com/gaming/12-awesome-video-games-with-one-awful-mechanic?page=7); [JRPG long animations blog](https://lightyellowsimple.pages.dev/posts/great-jrpgs-hampered-by-long-battle-animations); [Steam FF9 thread](https://steamcommunity.com/app/377840/discussions/0/357284131789171677); [Kotaku best summons](https://kotaku.com/the-best-final-fantasy-summoning-animations-1764728381)
- Persona 5 All-Out Attack: a special finish screen where the initiating character **drops onto a flat red-and-black field with the enemy silhouetted behind, then strikes a pose**; static finisher art; shown only when the attack defeats every remaining enemy. — [Megami Tensei Wiki](https://megatenwiki.com/wiki/All-Out_Attack); [SmashWiki](https://ssbwiki.com/All-Out_Attack); video essay transcript [Amara: The Overwhelming Style of Persona 5's All-Out Attacks](https://amara.org/subtitles/wIZbgZ3Jyy5D/en/1/download/The%20Overwhelming%20Style%20of%20Persona%205s%20All-Out%20Attacks.en.txt) (not fetchable)
- Blue Archive: raid-boss guide notes players can cancel at the start of a boss animation and may **turn down game speed**; no source found for EX-skill length or cut-in toggle. — [Blue Archive Wiki: Hieronymus](https://bluearchive.fandom.com/wiki/Hieronymus/Guide)
- (From existing notes) ZZZ ultimates open with a short intro cinematic some players find annoying; long ultimates also serve as gameplay windows. — see `ultimate_presentation.md` §1.

### Inferences
Background-knowledge structure patterns (**(background, unverified)** — durations are rough recollections, time actual videos before quoting):
- **HSR ultimate**: (a) ultimate-ready glow on portrait → player taps (can interrupt turn order — the *timing* of the ultimate is itself a player expression); (b) short character cinematic with dedicated camera (~2–6 s; limited/flagship units longer, 4★ shorter); (c) return to battle camera for hit + numbers. Normal/skill attacks ≈1–2 s; auto-battle and **2× speed** exist. Lesson: rarity/power tier ↔ animation length.
- **Genshin Elemental Burst**: brief camera cut to the character (~1–3 s) then gameplay resumes; the cut is short because it's action-real-time. The burst's **voice line + camera swoop** is the "cut-in"; the actual damage plays in gameplay space.
- **Granblue Fantasy**: Charge Attacks (per-character, few seconds) and Summons (full-screen illustrated sequences); options exist to shorten/disable some animations (exact menu labels unverified). The "Attack/Damage split" above is the key engineering trick: **flourish segment skippable, result segment always shown**.
- **Arknights**: no cut-ins in combat at all; skill activation = small icon/flash + effect on the operator, because it is real-time tower defense with 2× speed. Proof that strategy games can stay readable with micro-presentation.
- **Blue Archive EX skills**: brief 2D cut-in/close-up camera on the student, then the effect (~2–4 s); battle speed up to 3× in many modes; often the first-use cut-in is the "full" one. (verify)
- **Limbus Company / Reverse:1999**: Limbus uses illustrated E.G.O. cut-ins and coin-flip clash rhythms; Reverse:1999 "Ultimate/Ritual" plays a stylized camera piece ~3–6 s. Both support battle speed-up. (verify)
- **Octopath Traveler II**: HD-2D sprites + 3D camera dolly/zoom on Boost/Latent Power and divine skills; spell = sprite pose + layered circle + full-screen tint; ultimate-tier skills ~3–5 s. Useful precedent for **flat 2D characters + camera moves**.
- **Fire Emblem series**: battle animations On / Off / per-unit, and map-only mode — the long-standing tactics-genre answer to fatigue.
- **Design rules extracted**:
  1. Length ∝ rarity of use: every-turn actions ≤1.2 s; once-per-battle ultimates 3–6 s; once-per-run "first reveal" 6–10 s.
  2. **First-time full, repeat condensed**: first cast in a save plays the full staging + title card; later casts drop the cut-in and keep only charge-hold-release-impact (≈40–50 % length). Settings: Full / Short / Off (FE / GBVSR pattern).
  3. **Never block the result**: tap-to-skip jumps to the "Damage" segment (GBF), never to a blank state.
  4. **Gate the finisher card** (P5): the stylized title/finish screen only when the spell kills the last enemy or overkills.
  5. **Photosensitivity setting** from day one (HSR Seele): cap full-screen flashes to ≤3 per second, provide "reduce flashes" that swaps white flashes for a vermilion vignette pulse.

### Gaps
- No sourced per-second durations for any HSR, Genshin, Blue Archive, Arknights, Limbus, Reverse:1999, Octopath 2 or GBF charge-attack/summon animation; would need to time videos.
- No sourced data on first-time vs repeat animation policies in gacha games (beyond FF9's conditional long summons).
- HoYoverse animation-team interviews about ultimate camera design not found; NDC (Korean) 스킬 연출 talks not searched due to tool budget.

---

## 5. Choreography devices for a faceless rectangle and floating sigils (abstract characters conveying power through motion)

### Takeaway
Abstract characters get personality from **one strong differentiating motion parameter** (Thomas Was Alone: each rectangle's jump height *is* its identity) plus narration/text; Thomas Was Alone itself uses almost no animation, so for a "stylish" hero we must add the motion layer ourselves. The levers left to a faceless rectangle are **scale (squash/stretch), rotation (tilt), position (hops/dashes), colour/value (glow, flash), timing (holds), and the environment reacting (camera, light, particles)**.

### Cited Findings
- Thomas Was Alone: each rectangle has a name and personality conveyed largely via narration (Danny Wallace); jump ability defines identity (Thomas average; Chris small, low jump; John tall, high jump). — [Wikipedia](https://www.wikipedia.org/wiki/Thomas_Was_Alone); [Engadget review](https://www.engadget.com/2013-05-01-thomas-was-alone-review.html)
- Reviewers note "Thomas doesn't have much in the way of animation" — personality comes from writing and movement capability, not animation. — [Kotaku review](https://kotaku.com/thomas-was-alone-the-kotaku-review-5929049)
- Essay on why players empathize with Thomas Was Alone's cubes (projection onto simple shapes). — [Nicolle Lamerichs](https://nicollelamerichs.com/2018/07/15/game-theory-why-we-empathize-with-cubes-in-thomas-was-alone/)
- "Squash & stretch etc. are relevant only in specific situations" — don't apply every juice technique everywhere. — via existing notes: [Game Developer: Squeezing more juice](https://gamedeveloper.com/design/squeezing-more-juice-out-of-your-game-design-)

### Inferences
Device toolkit for the vermilion rectangle hero (my proposals; abstract-game references are **(background, unverified)**):
- **Body as gauge**: during channeling across turns, the rectangle literally *fills* (a brighter inner rectangle rises from bottom like a bar) or *grows taller* 3–5 % per channel turn; at release it compresses into a thin bright slab then snaps back. The body itself becomes the charge meter.
- **Hops as beats**: 1–3 small hops in rhythm during build-up (each hop stamps a glyph on the circle), then a big crouch (tame) and a high hop at release — the rectangle "conducts" the spell like a baton/stamp. A *stamp/seal (도장)* metaphor fits traditional Korean magic: the rectangle slams down onto the circle like a 인장, and the impact prints the sigil.
- **Tilt as gaze**: with no face, a 5–15° tilt toward the target = "looking"; a sharp 90° rotate-and-slam = decisive cast; a full 360° spin during release = flourish.
- **Shadow/afterimage clones**: 3–5 fading vermilion afterimages on dashes (smear) — the cheapest "anime speed" device for a rectangle.
- **Folding/unfolding**: rectangle splits into a thinner strip that unrolls like a scroll/talisman (부적) → the hero physically becomes the spell medium for the signature move. (Strongly on-theme: a vermilion rectangle already reads as a paper talisman.)
- **Familiars (one-eyed sigils)**: eye is the only facial cue — use it hard: eye widens on charge, narrows to a slit during hold, closes on release (blink = "fire"), reopens with a sparkle after. Sigil strokes can *unravel and reassemble* (stroke-order animation) as their wind-up; orbiting around the hero then aligning into formation = "lock-on".
- **Enemies (black broken sigils)**: hits should *crack* the stroke along fracture lines, scatter square fragments (Nakamura-cube nod), and flicker with inverted colour on crits.
- **Rez / Tetris Effect / Geometry Wars lesson (background, unverified)**: abstract worlds sell power through *environment response synced to rhythm* — background pulses, particles bloom on beat, the grid warps toward impacts (Geometry Wars' spring grid). → The tactics board grid itself should ripple/warp away from impact points on big spells.
- **Hyper Light Drifter lesson (background, unverified)**: tiny characters, big readable silhouettes, strong colour-coded flashes and brief screen freezes. → Keep the hero's silhouette constant; communicate power through what surrounds it.

### Gaps
- No sourced analyses of motion design in Rez, Tetris Effect, Geometry Wars or Hyper Light Drifter retrieved this session.
- Thomas Was Alone squash/stretch specifics: sources indicate minimal animation; no developer postmortem found.

---

## 6. Magic-circle-centric staging (circles drawing themselves, rotating layers, runes flying, stacking circles toward the target)

### Takeaway
Real-time VFX practice builds magic circles from **separate concentric layers that rotate at different speeds/directions**, revealed with **gradient-driven opacity masks** (so the circle "draws itself"), with glyphs lighting **stroke by stroke**. This maps perfectly onto the game's grimoire/sigil theme and can be the *build-up* phase of nearly every spell.

### Cited Findings
- Realtime VFX forum magic-circle WIP: circles and runes get opacity from a **texture gradient** (reveal), a rotating helix uses vertex colours + second UV channel for opacity, a star shape spawns/despawns along a gradient; author planned sparks, a spawn animation and rune shapes. — [realtimevfx.com: Magic Circle WIP](https://realtimevfx.com/t/magic-circle-wip/12940)
- Unity asset "Magic Circle": circles rotate in 3D; a floating variant has **three components rotating at different angles**. — [Unity Asset Store](https://assetstore.unity.com/packages/vfx/particles/magic-circle-260860)
- Fab "Portal & Summon VFX": **concentric rings with glyphs, counter-rotating**; a Summon Rune effect lights an amber sigil **stroke by stroke**. — [Fab listing](https://www.fab.com/listings/0c76f432-5c18-4326-9022-259b69d56394)
- An Unreal-forum magic circle removed GPU particles because they were **distracting** (restraint aids readability). — [Unreal forum (mirror)](https://irc.pcper.com/magic-circle-vfx-v-1.html) (low-quality mirror)

### Inferences
Magic-circle choreography kit (my synthesis + **(background, unverified)** anime references such as Frieren formation circles, Fate/Nasuverse layered circles, Toaru/Index-style geometric circles):
- **Self-drawing**: reveal the outer ring with a conic-gradient mask sweeping 0→360° (0.2–0.4 s, ease-in-out), then inner ring the *opposite* direction, then glyphs stamp in one at a time (40–80 ms apart) with a small scale pop (1.3→1.0) and a tick sound. Stroke-order reveal for Hanja/rune glyphs = "traditional craft" flavour.
- **Layer rotation**: 3 layers at e.g. +20°/s, −35°/s, +60°/s; at the tame, **accelerate all layers** (spin-up) then **stop them dead** on the release frame (hard stop = punch).
- **Perspective tilt**: lay the circle flat on the ground (scaleY 0.4–0.5) during build-up, then rotate it upright to face the target at release (a "cannon muzzle" circle).
- **Stacking toward target (circle chain / 포신)**: 3–5 circles appear in a line from caster to target, each smaller and later (60–100 ms stagger), each starting its rotation as the previous lights up; the projectile/beam passes through them and each circle *bursts* as it's traversed (acceleration through gates). Very legible as "the spell is being amplified."
- **Runes flying**: on release, glyphs peel off the circle and fly along fanned arcs to the target, landing in sequence; each landing = small hit; last glyph = big hit. Great for multi-hit spells.
- **Channel-over-turns visual**: each channel turn adds one ring/layer to the persistent circle under the hero (turn 1: one ring; turn 2: + glyph ring; turn 3: + outer seal), so the board itself shows progress. At release, all layers collapse inward (implosion, 6–10f) then explode outward.
- **Grimoire page**: for signatures, a giant translucent grimoire page or circle covers the *whole board* behind units (stage takeover, JJK Domain-style), the page turns at the tame, and the spell fires out of the page.
- **Dissipation**: run the build in reverse but faster (layers fade outermost→innermost, glyph embers drift up), 0.3–0.6 s; leave a faint scorched sigil decal on the tile for 1–2 turns ("permanence", per Nijman in existing notes).
- **Restraint**: per the Unreal-forum note and Riot hierarchy, keep normal-spell circles small and 1–2 layers; full multi-layer circles only for channelled/signature spells.

### Gaps
- No authoritative breakdown (GDC/80.lv/CEDEC) of anime-style magic-circle animation timing found; only asset listings and a WIP forum thread.

---

## 7. Pacing in turn-based tactics: short ordinary spells, longer signatures, repeat-viewing fatigue and speed-up

### Takeaway
Players love spectacle the first times and resent it on the 50th (FF summons, HSR ultimate skip requests). The robust solution set is: **tiered lengths by usage frequency, a speed multiplier, condensed repeat versions, per-setting skip that still shows the result, and conditional "extra" finishers**. Presentation length must never gate information.

### Cited Findings
- Long unskippable summons (FF7 Knights of the Round, FF8 GFs, FF9 Ark) are a canonical player complaint; some players call them a minor annoyance, grinders want them gone. — [WhatCulture](https://whatculture.com/gaming/12-awesome-video-games-with-one-awful-mechanic?page=7); [Steam FF9 thread](https://steamcommunity.com/app/377840/discussions/0/357284131789171677); [Kotaku: next time you want to skip animations](https://kotaku.com/the-next-time-you-want-to-skip-those-animations-world-1793545437)
- HSR ultimates unskippable; players requested a skip/shorten option. — [GINX](https://www.ginx.tv/en/skip-ultimate-animation); (existing notes: [GameSpace wish list](https://www.gamespace.com/featured/honkai-star-rail-wish-list/))
- GBVSR: Normal / Always Skip / Can't Skip intro setting; GBF summon skip plays only the damage segment. — [SeekingTech](https://seekingtech.com/how-to-always-skip-cut-scene-intros-in-granblue-fantasy-versus-rising/); [GBFAP](https://mizagbf.github.io/GBFAP)
- P5 finisher card only when the attack clears the battle (conditional spectacle). — [Megami Tensei Wiki](https://megatenwiki.com/wiki/All-Out_Attack)
- Blue Archive players can adjust game speed. — [Blue Archive Wiki](https://bluearchive.fandom.com/wiki/Hieronymus/Guide)

### Inferences
**Timing budget proposal for 마법산업기능사** (design proposal, not sourced):

| Tier | Frequency | Total | Breakdown (approx.) | Camera |
|---|---|---|---|---|
| T0 basic / familiar poke | every turn | 0.5–0.8 s | antic 0.1 · release 0.05 · travel 0.15 · impact 0.1(+3–5f stop) · settle 0.2 | none, ≤4 px shake |
| T1 normal spell | most turns | 0.9–1.4 s | antic 0.15 · mini-circle 0.25 · hold 0.1 · release/travel 0.25 · impact 0.15(+6–8f) · after 0.3 | slight 3–5 % zoom punch |
| T2 channelled release | every few turns | 1.8–3.0 s | layered circle collapse 0.4 · hold 0.25 · release 0.1 · travel 0.4 · impact 0.3(+10–14f) · after 0.6 | push-in to caster then whip to target |
| T3 signature / ultimate | ≤1× per battle | first time 5–8 s; repeat 2.5–3.5 s | board darken 0.3 · cut-in/title 0.8–1.2 · circle build 1.5 · tame 0.5 · release 0.1 · impact 0.6(+18–30f) · finish card 1.0 · after 0.8 | full: dolly, tilt, zoom-out for scale |

- **Speed-up**: global battle speed 1× / 1.5× / 2× / 3×; at ≥2× drop holds to half and skip aftermath tails (but never skip the impact frame/hitstop — that carries the "hit happened" information).
- **Input buffer**: let the player issue the next command during the aftermath phase (tactics games feel slow mainly because input is locked during tails).
- **First-time vs repeat**: track `seenCount` per spell; seen 0 → full + title card ("靈符·○○" style name stamp); seen ≥1 → condensed (no title card, shorter build); setting "Always full" for fans.
- **Variation against fatigue**: randomize small things each cast (circle rotation direction, which glyphs, rune flight arcs, camera side left/right), and escalate with power: overkill or chain kills add the finisher card (P5 gating).
- **Channel-turn integration**: since spells charge across turns, spread the build-up across those turns (one layer added per turn, ~0.4 s each) so the *release turn* can be short yet feel enormous — the tame already happened on previous turns.

**Five–six signature spell sketches applying the above (design proposals):**
1. **도장 낙인 (Seal Stamp)** — T2. Rectangle hops 3× (each hop stamps a glyph into a ground circle), crouches (tame 12f), leaps high, rotates 90° and slams down like a seal; 2f vermilion impact frame; a giant red seal imprint ripples across the target tiles; enemy sigils crack; imprint decal remains 1 turn.
2. **부적 해방 (Talisman Unroll)** — T3 signature. Board darkens 60 %; the rectangle stretches thin and *unrolls into a long talisman strip* with Hanja written stroke by stroke (cut-in title card here); the strip folds into a paper crane/arrow, holds (spin-up), then snaps across the board; each enemy pierced flashes inverted; talisman burns to embers in aftermath.
3. **연쇄 법진 포격 (Circle Battery)** — T2/T3. Persistent channel circle under the hero gains a ring per turn; on release, 4 circles appear in a line toward the target with 80 ms stagger, layers spin up, stop dead; beam fires through them, each gate bursts; delayed explosion 6f after beam contact; square fragments scatter.
4. **쌍안 공명 (Twin-Eye Resonance)** — familiar combo (JJK Hollow-Purple-style, background reference). Two one-eyed sigils orbit opposite ways, eyes narrow, collide at the hero's front (merge flash), eye opens huge in the merged sigil = the beam; follow-through: both familiars ricochet back to orbit with wobble.
5. **서고 강림 (Grimoire Domain)** — T3 ultimate. A giant grimoire page fades over the whole board (stage takeover), pages turn in 3 beats (each beat marks enemies with glyphs), last page slams shut = all marks detonate in sequence (multi-hit rhythm, increasing hitstop per hit, final 30f hold + finish card if it clears the stage).
6. **흑인 정화 (Inverse Purge)** — crit/finisher variant usable on any spell: on kill of a broken black sigil, colour-invert 2f, shatter into cubes, slow-mo 0.3 s, enemy's fragments get pulled into the hero's circle (absorbed as resource) — ties spectacle to the economy.

### Gaps
- No sourced numbers on how long tactics players tolerate per-action animations (e.g., Fire Emblem/XCOM telemetry); budgets above are proposals to playtest.
- Korean NDC talks on 스킬 연출 / 타격감 not searched (tool budget); worth a follow-up search ("NDC 타격감", "NDC 스킬 이펙트 연출").
