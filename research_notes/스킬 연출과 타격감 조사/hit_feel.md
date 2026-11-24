# 타격감 (Hit Feel / Impact) Techniques for Attacks and Spells, with Numbers

> Research conditions: network was heavily limited. WebSearch worked, but WebFetch failed (DNS blocked) for ssbwiki.com, sourcegaming.info, nintendowire.com, gameranx.com and docs.rs, so most findings below come from **search-result snippets, not full-page reads**. Items marked **[snippet]** were seen only in search summaries. Items marked **[training knowledge, unverified]** come from the researcher's prior knowledge and were NOT confirmed this session. They are kept only in Inferences or Gaps, never presented as cited facts. All frame counts assume 60fps (1 frame ≈ 16.7 ms).

## 1. Hitstop / hit-lag: durations, attacker vs target, turn-based use

### Takeaway
Hitstop is the single most cited impact tool. Published or community-measured values cluster at **~2–5 frames for light hits, ~8–15 frames for medium to heavy hits, capped around 20–30 frames**, and the duration scales with damage. In Smash both fighters freeze, the victim shakes during the freeze, and the length grows with damage. That freeze-and-shake pattern carries over directly to a turn-based spell landing.

### Cited Findings
- Sakurai calls hit stop "one of the most important things in crafting a sequence", because it highlights the impact and adds weight to the movement. It was the first game-design topic on his YouTube channel "Masahiro Sakurai on Creating Games". [snippet] — [Dot Esports](https://dotesports.com/fgc/news/super-smash-bros-director-launches-youtube-channel-all-about-making-games); [GamesRadar](https://www.gamesradar.com/smash-bros-masahiro-sakurai-has-started-a-fascinating-youtube-game-design-series)
- A later Sakurai episode covers **"8 hit stop specs" (8つのヒットストップ仕様)** used in Smash Ultimate, and further episodes cover "Hit Marks [Effects]" and explosions ("Flash, Blast, and Smoke": "a series of steps we use to impart the appropriate impact"). [snippet, episode listings from third parties] — [GoNintendo: 8 hit stop techniques](https://www.gonintendo.com/contents/13581-sakurai-s-latest-game-dev-video-features-8-hit-stop-techniques); [TheTVDB](https://thetvdb.com/series/masahiro-sakurai-on-creating-games/episodes/10229325); [GoNintendo: explosion effects](https://www.gonintendo.com/contents/14466-sakurai-covers-the-art-of-explosion-effects-in-a-new-video); [GoNintendo: hit marks](https://www.gonintendo.com/contents/23556-masahiro-sakurai-discusses-hit-marks-in-his-latest-dev-video)
- Smash hitlag formula, per fan-maintained SmashWiki: Melee = ⌊⌊⌊d/3 + 3⌋ × e⌋ × c⌋, where d = damage %. Smash 64 uses +4 (JP) or +5 (international) in place of +3. e is an electric-attack multiplier and c a crouch-cancel multiplier. Example for a **15% move: 10f (64), 8f (Melee), 10f (Brawl/Smash 4), 15f (Ultimate)**. Caps: **20f in Melee, 30f from Brawl on** (20f for a crouch-cancelling victim). SmashWiki notes the internal data term is "hitstop"; "hitlag" is a fan term. [snippet; ssbwiki.com fetch blocked] — [SmashWiki Hitlag](https://ssbwiki.com/Hitlag)
- Fighting-game rule of thumb: "in most games light attacks freeze around **9 frames**, medium around **11**, hard around **13**"; in old SF2 "they were all around **14 frames** regardless of button strength". [snippet, community source] — [Sonic Hurricane "Impact Freeze"](https://sonichurricane.com/?p=1043)
- Street Fighter III: 3rd Strike stacks hitstop on a base freeze: Light +4f, Medium +3f, Heavy +2f on top of an initial 16-frame freeze, as listed by the SRK wiki. [snippet] — [SRK wiki SF3 System](https://srk.shib.live/w/Street_Fighter_3:_3rd_Strike/System)
- SF V: heavier attacks have longer hitstop, and Crush Counters "usually have even longer hitstop". This is the special-state extension pattern, comparable to a crit or weakness hit. [snippet] — [Prima SFV eGuide](https://primagames.com/eguides/street-fighter-v-eguide/glossary/d-j)
- Monster Hunter: a Great Sword True Charged Slash yields "two-three freeze frames"; another account says the Overhead Chop hitstop in Generations Ultimate lasted "around a fourth of a second" (~15f). Hitstop also varies by **which body part is hit**: weak or "meaty" zones get more and armored or tail zones get little or none. [snippet] — [Deltia's Gaming](https://deltiasgaming.com/?p=113987); [GamesRadar](https://gamesradar.com/games/monster-hunter/monster-hunter-wilds-player-uses-the-power-of-math-to-prove-why-the-beta-left-some-weapons-feeling-worse-compared-to-monster-hunter-world-or-rise)
- Monster Hunter Wilds' beta reduced hitstop across all 14 weapon types. Players complained it felt weaker, and the director said the beta "ended up feeling a little bit lighter than what was intended" and raised hitstop for release. This is direct evidence that players notice a few frames of hitstop. [snippet] — [PC Gamer](https://pcgamer.com/games/rpg/monster-hunter-wilds-game-director-says-the-betas-missing-hitstop-has-already-been-tweaked-thanks-to-very-positive-feedback-from-hitstop-hungry-veteran-hunters); [GamesRadar](https://www.gamesradar.com/games/monster-hunter/monster-hunter-wilds-hitstop-feels-way-better-in-the-non-beta-build-and-the-games-director-was-happy-to-juice-it-back-up-after-overseas-players-apparently-hated-it-in-world)
- Indie game-feel guides suggest hitstop of **~60–120 ms** (Godot 4 guide), "2–5 frames" (another guide), and "6–10 frames for heavy weapons" / "4–8 frames for sword hits". One guide says **freezing only the target makes the enemy look like it "hiccupped"**, so freeze both. [snippet, low-authority sources] — [dev.to Godot hit stop](https://dev.to/saltmire/godot-4-screen-shake-and-hit-stop-in-one-script-11eh); [freegamesprites game-feel article](https://freegamesprites.com/es/news/game-feel-2d-combat-juice-tricks)
- A Korean game-feel write-up describes hitstop as briefly stopping both attacker and victim at contact "so the hit has time to be perceived", and says it works best combined with a reaction animation, effects and camera motion. [snippet] — [eastondev blog (KO)](https://eastondev.com/blog/ko/posts/dev/20260521-game-feedback-feel/)
- "Sleep (pause game on hit)" is one of the listed steps in Vlambeer's "Art of Screenshake" (2013). [snippet] — [Univ. Bayreuth GxD Game Feel PDF](https://medienwissenschaft.uni-bayreuth.de/wp-content/uploads/GxD-10-Game-Feel.pdf); [DK Liao recreation devlog](https://dkliao.itch.io/the-art-of-screenshake-recreation/devlog/451576/quick-breakdown-of-all-the-effects)
- No reliable source was found for Hades, Dead Cells or Hollow Knight hitstop values. One article claims Hades has "10 frames on every attack", but that refers to windup, not hitstop, and it is unsourced. [snippet] — [freegamesprites](https://freegamesprites.com/ar/news/game-feel-2d-combat-juice-tricks)

### Inferences
- **Suggested hitstop table for this game (inferred from the ranges above):**
  - Familiar's light tick or chip: **3–4f (50–67 ms)**
  - Standard spell hit: **6–8f (100–133 ms)**
  - Heavy spell, weakness hit or crit: **10–14f (167–233 ms)**
  - Killing blow or finisher: **16–24f (267–400 ms)**, optionally followed by slow-motion (see section 8)
  - Hard cap: **30f**, matching the Smash cap.
- **Scale with damage, like Smash:** `frames = clamp(round(base + dmg / k) × multiplier, 2, 30)`. For example base = 3, k scaled so a "typical" hit lands at ~7f, multiplier 1.5 for crits or weakness, and clamped to 2–30f.
- **In a turn-based game, hitstop costs no fairness**, because no input is pending. Only pacing pays for it, so the budget is total animation time per turn, not reaction windows. A 6–12f freeze (0.1–0.2 s) is a cheap way to make a hit read.
- **Freeze both sides.** Freeze the caster's or familiar's pose (or projectile) and the enemy. While frozen, jitter the enemy sprite ±2–4 px horizontally every 1–2 frames, in the "victim shake" style described for Smash. Then release into knockback.
- **[training knowledge, unverified]** In Smash, the victim's freeze-shake is directional along the knockback angle, and Ultimate adds a zoom and slow-motion on KO-worthy finishing hits.
- Practical implementation: run hitstop as a global or per-entity "timeScale = 0" for N frames. Keep particles, flash and screen shake running (or slow them only slightly) so the freeze looks charged, not like a lag spike. This is general practice; no specific source was found.

### Gaps
- Sakurai's exact "8 hitstop specs" could not be read (the nintendowire and gameranx fetches were blocked). Recommended for the report writer to check directly: the YouTube episode "Hitstop" and "8 Hit Stop Specs" on the Masahiro Sakurai on Creating Games channel.
- No verified frame data for Hades, Dead Cells or Hollow Knight.
- No turn-based game was found with published hitstop numbers.
- The Korean NDC / 인벤 / 디스이즈게임 talks on 역경직 (hitstop) were not found by search; the Korean queries returned only general blogs.

## 2. Screen shake design (trauma model, directional vs random, decay, limits)

### Takeaway
The standard modern model is Squirrel Eiserloh's GDC 2016 "trauma" approach. Hits add trauma (0–1), trauma decays linearly, and visible shake = trauma² (or ³) × maxOffset / maxAngle, driven by smooth noise (Perlin) rather than random jitter. Rotation shake is included. Accessibility guidance requires an off switch or slider.

### Cited Findings
- The talk "Math for Game Programmers: Juicing Your Cameras With Math" (GDC 2016, Squirrel Eiserloh, SMU Guildhall) covers framing, smoothed motion, camera shake and dynamic split-screen. It is free on GDC's YouTube channel. [snippet] — [GDC Vault](https://gdcvault.com/play/1023146/Math-for-Game-Programmers-Juicing); [Game Developer](https://gamedeveloper.com/programming/video-sprucing-up-cameras-with-math)
- The trauma model as implemented by followers of the talk:
  - trauma is a 0–1 float that decays linearly per second and is clamped.
  - `shake = trauma^2`, multiplied by `maxOffset` and `maxAngle`.
  - Perlin noise drives x, y and rotation, using different noise seeds or offsets per axis.
  - The Unity PerlinCameraShake repo says "the concept of 'trauma' as a 0–1 float, plus the usage of Perlin noise originates from this GDC talk".

  [snippet] — [Bevy 2D screen shake example](https://bevy.org/examples/camera/2d-screen-shake/); [drhayes Lua gist](https://gist.github.com/drhayes/b4877057c0e289871625d08e31c3a13e); [baratgabor Unity PerlinCameraShake](https://github.com/baratgabor/Unity3D-PerlinCameraShake); [Strayspark Godot docs](https://www.strayspark.studio/docs/godot-camera-system/noise-and-shake)
- An attendee recalled from the talk that jittering camera *translation* can push the camera into walls. This is a reason to favor rotation plus small translation in 3D; it matters less in 2D. [snippet, secondhand] — [JCCC blog GDC16](https://blogs.jccc.edu/dpatter/2016/03/15)
- The Vlambeer "Art of Screenshake" step list includes:
  - muzzle flash
  - impact effect
  - enemy knockback
  - camera lerp
  - screenshake
  - player knockback
  - hit pause
  - weapon recoil
  - random enemy explosion
  - "camera kick" (a directional nudge)

  [snippet, reconstructions differ in order] — [DK Liao recreation](https://dkliao.itch.io/the-art-of-screenshake-recreation/devlog/451576/quick-breakdown-of-all-the-effects); [Bayreuth PDF](https://medienwissenschaft.uni-bayreuth.de/wp-content/uploads/GxD-10-Game-Feel.pdf)
- A Korean dev log implemented shake along a **lemniscate (∞-shaped) path** instead of random offsets, a smoother alternative to random jitter. [snippet] — [DCInside game_dev](https://gall.dcinside.com/m/game_dev/175821)
- Xbox Accessibility Guideline 117 recommends avoiding camera shake or letting players disable it, along with bobbing and motion blur. Halo Infinite is cited for its 0–100% screen-shake slider. [snippet] — [Xbox XAG 117](https://learn.microsoft.com/en-us/gaming/accessibility/xbox-accessibility-guidelines/117)

### Inferences
- **[training knowledge, unverified]** Eiserloh's talk recommends:
  - trauma² or trauma³, so small hits barely shake and big hits shake a lot (non-linear).
  - Perlin noise over `random()` per frame, to avoid "teleporty" jitter.
  - That rotational shake alone is often enough in 2D.
  - Common follower defaults are maxAngle ≈ 10° and maxOffset ≈ 10–20% of screen or a fixed pixel value. These defaults could not be verified this session.
- **Suggested parameters for a 7×7 iso board on phone + PC (inferred):**
  - **maxOffset ≈ 12–16 px at 1080p-equivalent** (scale with canvas height; ~1–1.5% of viewport height)
  - **maxAngle ≈ 1.5–3°.** Large angles on a full board look like an earthquake and hurt readability.
  - Trauma decay **≈ 1.5–2.5 per second**, so a full shake dies out in 0.4–0.7 s.
  - Noise frequency ≈ 15–30 Hz.
  - Trauma added per hit: light 0.15–0.2, normal 0.3, heavy 0.5, finisher 0.7–0.8. Apply trauma² for display.
- **Directional "kick" plus random shake:** On a spell hit, first push the camera 4–8 px *along the spell's travel direction* over 1–2 frames, then ease back over ~100–150 ms (the Vlambeer "camera kick"). Layer trauma shake on top for heavy hits only. Directional kick reads as "force from the caster"; random shake reads as "explosion or chaos".
- On phones the screen is small and held close, so use **~60–70% of desktop amplitude**. This is an inference, not sourced.
- Shake the *world container*, not the UI layer. Damage numbers and HP bars should stay readable, since clarity matters in tactics (see section 9).

### Gaps
- Eiserloh's exact recommended constants could not be verified: the GDC Vault and docs.rs fetches failed.
- No sourced motion-sickness amplitude limits (degrees or pixels) were found; only the "allow disabling" guidance.

## 3. Target reaction: knockback, squash/stretch, white flash, recoil, stagger

### Takeaway
The canonical reaction stack is: white flash on the target (1–3 frames), freeze plus shake during hitstop, knockback or recoil away from the source, squash/stretch, and an elastic return. Every guide treats knockback and flash as core steps, but sourced numeric durations are scarce.

### Cited Findings
- Vlambeer's progression includes enemy knockback, player knockback (recoil) and an impact effect at the contact point. [snippet] — [DK Liao recreation](https://dkliao.itch.io/the-art-of-screenshake-recreation/devlog/451576/quick-breakdown-of-all-the-effects)
- Jonasson & Purho's "Juice it or lose it" (GDC 2012) iteratively adds particles, screenshake, sound and animations (tweening, squash/stretch) to a block-breaker. [snippet] — [gamejuice resource page](https://gamejuice.pages.dev/resources/juice-it-or-lose-it)
- Over-using squash/stretch makes motion look too cartoony; under-using it looks stiff. [snippet] — [brush.ninja glossary](https://brush.ninja/glossary/animation/squash-and-stretch)
- Game Developer has an article on the role of animations in hit effects (title only seen). [snippet] — [Game Developer: The role of animations in hit effects](https://gamedeveloper.com/programming/the-role-of-animations-in-hit-effects)
- Sakurai's "Hit Marks [Effects]" episode covers the contact-point graphic. [snippet] — [GoNintendo](https://www.gonintendo.com/contents/23556-masahiro-sakurai-discusses-hit-marks-in-his-latest-dev-video)

### Inferences
- **Suggested reaction timeline for an enemy sigil (inferred; none of these numbers are sourced):**
  1. **Frame 0:** the target becomes **pure white (tint/fill override) for 2–3 frames**. Optionally the next 1–2 frames are red or the vermilion accent color, then back to normal. Spawn the hit-mark graphic at the contact point.
  2. **Hitstop (6–12f):** jitter ±3 px along the hit direction.
  3. **Release:** squash along the hit axis to **~0.8× length / 1.2× width** for 2–3 frames.
  4. **Knockback:** displace 6–16 px (≈ 0.1–0.25 of a tile) away from the source over ~100 ms with easeOutCubic.
  5. **Return:** spring back over 150–250 ms with easeOutBack or elastic, using 1–2 overshoots.
- For a **broken sigil** enemy specifically, thematic reactions can replace the body animation:
  - stroke segments separate briefly (offset 2–4 px each, then snap back)
  - the red eye flickers or closes for 2–4 frames
  - ink flakes (particles) shed in the hit direction
- **Attacker recoil:** have the hero rectangle lean or kick back 2–4 px opposite to the cast direction on release. This is "player knockback" from Vlambeer and sells the force leaving the caster.

### Gaps
- No sourced frame counts were found for white-flash duration or knockback distance in specific commercial games.

## 4. Impact frames (anime-style inverted / monochrome frames)

### Takeaway
Impact frames are 1–3 frame monochrome or inverted, high-contrast stills inserted at the peak of a hit. They come from anime ("Monochrome Impact Shot") and are now used in games, for example via color-correction inversion. Because they are full-screen flashes, they need care under photosensitivity rules.

### Cited Findings
- Impact frames are described as an anime technique: a stylized, usually monochromatic shot inserted at dynamic moments such as punches and explosions. [snippet] — [TV Tropes Monochrome Impact Shot](https://tvtropes.org/pmwiki/pmwiki.php/Main/MonochromeImpactShot); [80.lv impact frames](https://80.lv/articles/learn-how-to-add-accents-to-your-animations-with-impact-frames)
- A high-contrast flash or inversion typically lasts **1–3 frames**. This came from a source flagged as possibly unreliable. [snippet, low confidence] — [arhfoundation "impact frames meaning"](https://www.arhfoundation.org/impact-frames-meaning)
- A game implementation (Roblox devforum): wait ~0.1 s after contact, then invert colors via color correction (contrast set to ±1), making highlights pure white or black. [snippet] — [Roblox devforum: Advanced impact frames](https://devforum.roblox.com/t/advanced-impact-frames/2468478)
- Analysis of Demon Slayer (ufotable) notes contrast created through darkened areas and silhouettes rather than full inversion, which is a gentler variant. [snippet] — [jbsiraudin: Demon Slayer visual grammar](https://jbsiraudin.github.io/blog/demon-slayer-visual-grammar); [Animation Obsessive: Dangerous Light](https://animationobsessive.substack.com/p/dangerous-light)

### Inferences
- **Recommended use (inferred):** reserve impact frames for **heavy, finisher, crit or weakness hits only** (at most once per action), so they keep their punch.
- **Sequence at the moment of contact:**
  - frame 0–1: the whole board goes **black, with the hero and target as white silhouettes** (or the reverse)
  - frame 2: inverted color
  - frame 3: normal color, entering hitstop
  - Total: **2–4 frames (33–67 ms)**.
- This fits the game's art very well. Vermilion hero, glowing sigils and black broken sigils with a red eye already form a strong value palette. An impact frame can be **paper-white background, pure-black silhouettes, and only the vermilion and red-eye accents kept in color** ("hanji and ink" style), which suits the traditional-magic theme.
- In PixiJS: use a ColorMatrixFilter (negative or desaturate + contrast) on the stage for 2–3 ticks, or swap to a pre-rendered silhouette layer, which is cheaper on mobile.
- Count impact frames as flashes under accessibility rules: at most 1 per second and full-screen at most once per action. Provide a "reduce flashing" option that turns them into a dark vignette pulse (section 10).

### Gaps
- No authoritative game-dev source with frame counts for impact frames in shipped games (e.g. Persona, Guilty Gear, Zenless Zone Zero) was found.

## 5. Sound layering for impact (transient + body + tail), pitch variation, pre-impact silence

### Takeaway
Impact sounds are built in layers: a sharp transient or attack (click or crack), a body (the weight or character), and a tail (decay or reverb). Each layer can be timed and varied independently, and pitch, volume and sample randomization stop repetition from feeling mechanical.

### Cited Findings
- Layer structure: the attack or transient layer gives the hit, the body layer sustains and anchors the sound's character, and the tail or release layer "determines how the sound fades into silence". [snippet] — [Native Instruments blog](https://www.native-instruments.com/blogs/blog/video-game-sound-design); [Splice weapon sound guide](https://splice.com/blog/?p=16617)
- In middleware, the tail can be set to fire at a different time from the body onset. [snippet] — [Splice](https://splice.com/blog/?p=16617)
- A layer can be made by taking just the high-frequency "click" of a kick drum. Pitch envelopes (a quick pitch-down) create energy-weapon character. [snippet] — [GAD 01: Plasma Shotgun (Medium)](https://medium.com/game-audio-design/gad-01-b1da2b874d2e)
- FMOD randomization example: play mode RandomNoRepeat and pitch randomization 0.33 recalculated every spawn, plus volume randomization. [snippet; one tutorial's settings, not a standard] — [GameDev.net FMOD explosion tutorial](https://gamedev.net/tutorials/audio/music-and-sound-fx/using-fmod-designer-to-create-explosion-sound-e-r2752)
- Audiokinetic Impacter cross-combines "impact" and "body" components from different sounds for variation. [snippet] — [Audiokinetic Impacter](https://audiokinetic.com/impacter-launch-blog)

### Inferences
- **Suggested spell impact recipe (inferred):**
  - **Transient:** 0–30 ms. Paper snap, brush slap, wood clap or bell strike. Hard-panned toward the target's screen position.
  - **Body:** 50–300 ms. Taiko or low drum, or a sigil "thoom". Pitch-lowered for heavy hits.
  - **Tail:** 300 ms–1.5 s. Bell, gong ring or a shimmering reverb tail. Fire it *after* hitstop releases so the ring overlaps the knockback.
- **Pitch variation:** randomize ±3–5% per hit (roughly ±0.5–1 semitone).
- **Multi-hit counters:** raise pitch +1 semitone per consecutive hit, up to +5 to +7 semitones, so the sequence climbs and resolves on the final hit at the base pitch with a louder body.
- **Pre-impact silence / ducking:** duck music and ambient **−6 to −12 dB** over the last 100–200 ms of a heavy spell's windup, or cut the windup sound completely for 2–4 frames just before contact. The contrast makes the transient feel louder without raising peak level. This is a common game-audio technique but was not found sourced this session.
- Sync rule: the audio transient must land on the **same frame** as the white flash or impact frame. Web Audio scheduling latency on mobile can be 20–50 ms, so schedule audio by `AudioContext.currentTime` rather than `setTimeout`, and consider pre-firing the audio by 1 frame. (Inference.)
- Theme note: traditional Korean percussion (북 drum, 징 gong, 꽹과리 small gong, 박 clapper) maps naturally onto the layers: 박 = transient, 북 = body, 징 = tail.

### Gaps
- No sourced numbers were found for pre-impact silence or ducking depth in specific games.

## 6. Damage numbers and feedback text (pop curves, crit styling, multi-hit counters)

### Takeaway
Good damage numbers "pop" with an overshoot scale, drift up with easing, and fade. Crits get their own color, size multiplier and stronger pop. On rapid hits, either accumulate into one climbing total that re-pops each hit, or push the separate numbers apart so they don't overlap. No authoritative numeric curves were found; the numbers below are inferred.

### Cited Findings
- The pattern is an initial "pop", a gentle upward drift with easing, and a clean fade-out. [snippet] — [DamagePop (CurseForge)](https://www.curseforge.com/minecraft/bukkit-plugins/damagepop)
- Crits get a separate configurable color, size multiplier and animation intensity, or a separate "Critical Pop Effect", or a star (★) glyph. [snippet] — [Damage Indicator Plus](https://www.curseforge.com/minecraft/mc-mods/damage-indicator-plus); [Hit pop Up](https://www.curseforge.com/minecraft/mc-mods/hit-pop-up)
- Text size can scale with damage relative to a reference value. [snippet] — [Damage Indicator Plus](https://www.curseforge.com/minecraft/mc-mods/damage-indicator-plus)
- On rapid hits, one implementation "resets the timer and triggers a pop animation so you feel the total climbing". Another pushes overlapping numbers apart. [snippet] — [CurseForge/Modrinth listings](https://modrinth.com/project/5yjK29ni)
- The bounce "naturally adds to the 'pop' flavor, the satisfaction of landing a hit". [snippet] — [RPGMaker.net: Damage Number Philosophy](https://rpgmaker.net/articles/2754)

### Inferences
- **Suggested damage-number curve (inferred):**
  - Spawn at **scale 0.3**, then **1.35** in 60–80 ms (easeOutQuad), then **1.0** in 100–120 ms (easeOutBack). Hold 300–500 ms, then fade out while drifting up 20–30 px over 250–400 ms.
  - Spawn on the frame hitstop *ends*, or on the contact frame frozen in place and released with the knockback.
- **Crit or weakness hits:**
  - peak scale **1.6–1.8**, size ×1.3–1.5
  - accent color (vermilion or gold) with a dark outline
  - a 2–3 px shake on the number itself during hitstop
  - a short label such as "약점!" (weakness) or "치명!" (critical)
  - a small rotation tilt of ±5–8°
- **Multi-hit:** show each small hit number briefly (or in smaller text), offset ±8–12 px randomly, plus a running **total counter** near the target that re-pops (scale 1.15) each hit. On the final hit, the total pops big (1.5) and holds slightly longer.
- Damage numbers should **not** be in the shaken world layer. Pin them to the target's screen position, after the shake offset is removed.

### Gaps
- No primary source from a major studio on damage-number timing curves was found.

## 7. Multi-hit rhythm (why combos feel good, spacing, heavy final hit)

### Takeaway
No direct sourced spacing values were found. From the hitstop evidence, the established pattern is light hits with short hitstop in quick succession, then a final heavy hit with much longer hitstop, bigger shake and an impact frame, giving a "ta-ta-ta-BOOM" rhythm.

### Cited Findings
- Hitstop scales with damage in Smash (formula in section 1), so a multi-hit of small hits yields short freezes and a heavy finisher a long freeze. [snippet] — [SmashWiki Hitlag](https://ssbwiki.com/Hitlag)
- Fighting games use about 9 / 11 / 13 frames for light / medium / heavy. [snippet] — [Sonic Hurricane](https://sonichurricane.com/?p=1043)
- Damage-counter implementations re-pop the total on each rapid hit "so you feel the total climbing". [snippet] — [Modrinth listing](https://modrinth.com/project/5yjK29ni)

### Inferences
- **Suggested rhythm for a 3–5 hit spell (inferred):**
  - Hits 1 to N−1 spaced **80–120 ms apart** (5–7 frames, ~8–12 hits per second), each with **2–4f hitstop**, small directional kick and a +1 semitone pitch step.
  - A **beat of anticipation of 150–250 ms** before the final hit, either a brief silence or the sigil gathering light.
  - Final hit: **12–20f hitstop**, impact frame, trauma 0.6+, big number.
- Accelerate slightly: shrink the interval 10–15% per hit (e.g. 120 → 105 → 90 ms) to build tension.
- Why it feels good (inference from music and timing theory): an even pulse sets an expectation, and the delayed, heavier last beat resolves it. The climbing counter also gives a "number go up" reward.
- For familiars (persistent sigils), auto-attacks could stay single light hits, and the player's spell gets the full rhythm treatment so the player's agency feels strongest.

### Gaps
- No sourced studies or developer statements were found giving ideal ms spacing between hits.

## 8. Camera: punch zoom, focus, slow-motion on kill/finisher

### Takeaway
Camera work on impact uses a short push-in toward the impact point, a directional kick, and for finishers a slow-motion and zoom beat before returning to the overview. Turn-based games with strong hit feel (Darkest Dungeon, Persona) cut to closer framing for attacks and pull back to show the follow-through.

### Cited Findings
- In Darkest Dungeon II, after a Man-at-Arms hit, "the camera pulls back to capture the heavy followthrough of the blow", with sparks and weapon trails. [snippet] — [Play UK via PressReader](https://www.pressreader.com/australia/play-uk-1/20230404/282325389228941)
- Red Hook's GDC talk on Darkest Dungeon II combat presentation tools (Independent Games Summit, "Critical Combat") aimed to keep the original's presentation style while raising the bar in 3D. The talk is paywalled. [snippet] — [GDC Vault](https://gdcvault.com/play/1034466/Independent-Games-Summit-Critical-Combat)
- The Vlambeer steps include "camera lerp" (the camera leads toward the action) and "camera kick". [snippet] — [DK Liao](https://dkliao.itch.io/the-art-of-screenshake-recreation/devlog/451576/quick-breakdown-of-all-the-effects)
- Persona 5's All-Out Attack ends with a close-up "finishing touch" splash that replaces the generic victory screen. [snippet] — [Amara transcript: "The Overwhelming Style of Persona 5's All-Out Attacks"](https://amara.org/videos/wIZbgZ3Jyy5D/en/3103539); [The Outer Haven](https://www.theouterhaven.net/2016/08/going-all-out-an-keeping-it-stylish-in-persona-5/)

### Inferences
- **[training knowledge, unverified]**
  - Darkest Dungeon (1) zooms the camera in on the attacker and target pair during each attack and slides them toward each other, with a big hit splash, before returning. Each action lasts about 1–1.5 s.
  - Smash Ultimate shows a zoomed slow-motion freeze with a speed-line background on decisive KO hits.
- **Suggested parameters for the 7×7 board (inferred):**
  - **Punch zoom:** scale 1.0 → **1.04–1.08** toward the impact point over 2–3 frames, then back to 1.0 over 200–300 ms (easeOutCubic). Heavy hits up to 1.12.
  - **Focus before cast:** over 250–400 ms, ease the camera 20–30% of the way toward the midpoint of caster and target and zoom to ~1.1. Hit. Return over 300–400 ms. Skip this for light or familiar actions.
  - **Finisher slow-mo:** after the killing hitstop, run timeScale at **0.2–0.3 for 300–500 ms real time**, zoom ~1.15–1.25 on the target, with the impact frame on the first frame. Ramp back to 1.0 over 150–200 ms. Use only on the last enemy or on boss kills, so it does not slow every turn.
  - Keep the whole board legible: never zoom so far that the threatened tiles or intents of other units go off screen during normal hits. A clarity rule borrowed from Into the Breach (section 9).

### Gaps
- No sourced durations for Darkest Dungeon zoom, Smash KO slow-mo or Persona cut-ins were found.

## 9. Turn-based examples and keeping pacing fast

### Takeaway
Tactics games balance spectacle against clarity and pacing. Into the Breach explicitly puts clarity first and uses short animations as explanations. Persona 5 reserves its big stylish sequence for a conditional finisher (the All-Out Attack after knocking all enemies down). Common pacing tools are short default animations, skip or speed toggles, and saving the long showy sequence for earned moments.

### Cited Findings
- Into the Breach (Justin Ma): "As a game design principle, we would sacrifice cool ideas for the sake of clarity every time." A short animation of tiles being damaged and pushed is "a thousand times more effective" than text. Enemies telegraph attacks, damage is fixed, and there are no random rolls (with one exception). [snippet] — [Game Developer: ITB dev on UI design](https://gamedeveloper.com/design/-i-into-the-breach-i-dev-on-ui-design-sacrifice-cool-ideas-for-the-sake-of-clarity-every-time-); [Kotaku review](https://kotaku.com/into-the-breach-the-kotaku-review-1823365331)
- Persona 5's All-Out Attack is a "high-damage dog-pile maneuver" unlocked by knocking all enemies down, ending on a stylish character "finishing touch" close-up. Persona 3 Reload and Persona 5 Tactica (Triple Threat) reused this conditional-finisher structure. [snippet] — [Amara transcript](https://amara.org/videos/wIZbgZ3Jyy5D/en/3103539); [Gfinity P5 Tactica](https://www.gfinityesports.com/guides/persona-5-tactica-all-out-attack)
- Darkest Dungeon keeps a side-view line formation with skills below. Hit presentation is done with camera and follow-through flourishes while "the turn-based combat stays solid". [snippet] — [PC Gamer DD2 preview](https://www.pcgamer.com/darkest-dungeon-2-charts-a-new-path-through-terror-in-a-roguelike-road-trip-to-save-humanity/); [PressReader Play UK](https://www.pressreader.com/australia/play-uk-1/20230404/282325389228941)

### Inferences
- **[training knowledge, unverified; flag for verification]**
  - **Octopath Traveler:** Break (shield points reduced to 0 by weakness hits) triggers a big "BREAK" stamp, a shatter effect and a stun. Boost (spending stored BP to multiply hits) turns a skill into a multi-hit. This ties the hit-feel spike to a decision the player made.
  - **Honkai: Star Rail:** offers battle speed-up (×1.2/×1.5 style) and auto-battle. Ultimates are cinematic cut-ins played at the player's chosen timing, and Weakness Break shows a distinct shatter effect plus a toughness-bar break.
  - **Fire Emblem:** offers a battle-animation toggle (full / map-only / off) and typically lets players skip any animation with a button.
  - **Pokémon:** has a "Battle Effects" off option.
  - **Slay the Spire:** keeps hits very short (~0.2–0.3 s) with slash or blunt effect sprites, a small shake and immediate damage numbers, and offers a "Fast Mode".
- **Design pattern to adopt (inferred):**
  1. A **tiered presentation budget**:
     - Familiar or chip hits: ≤ 300 ms total.
     - Normal player spells: **600–900 ms** total (windup 150–250 ms, travel 100–200 ms, impact and hitstop 100–200 ms, reaction and return 200–300 ms).
     - Heavy or finisher spells: 1.2–2.0 s.
     - Rare "earned" sequences (weakness break, last enemy, all-sigils combo, à la All-Out Attack): up to ~3 s, always skippable.
  2. **Game state resolves instantly.** Visuals are a queue, and input can buffer the next selection while the impact tail plays. Tap or click to speed the queue ×2–×3.
  3. **Speed toggle** (×1 / ×1.5 / ×2) and an "effects: full / reduced" setting.
  4. **Clarity guard:** the hit effects must not hide intent arrows, tile highlights or HP changes. Show the HP bar dropping (with a white "ghost" segment draining over ~400 ms after the hit) so the result is readable even with the effects at maximum.
- Tie the biggest effects to **player decisions**, such as a weakness hit, a combo or a positional bonus. That makes the hit feel reward good tactics, as Octopath's Break/Boost and Persona's knockdown→All-Out Attack do. Juice that always plays at the same level becomes noise, which may be why the previous demo, which only scaled flash, particles and shake, felt flat.

### Gaps
- No primary sources were retrieved for Octopath Traveler, Honkai: Star Rail, Fire Emblem, Pokémon or Slay the Spire animation timing and speed settings; the searches did not surface them.
- The Darkest Dungeon GDC talk ("Critical Combat") is paywalled, and its content is unknown.

## 10. Accessibility: reduce flash / reduce shake

### Takeaway
Provide a screen-shake slider (0–100%) and a reduce-flashing toggle. Keep full-screen flashes (impact frames, white-outs) under 3 per second, and default to removing risky content rather than relying on warnings.

### Cited Findings
- Xbox Accessibility Guideline 117 recommends avoiding or allowing disabling of camera shake, camera bobbing, motion blur and similar effects. Halo Infinite has a 0–100% screen-shake slider. [snippet] — [Xbox XAG 117](https://learn.microsoft.com/en-us/gaming/accessibility/xbox-accessibility-guidelines/117)
- Xbox Accessibility Guideline 118 (Photosensitivity) favors removing risky content over warnings, because "many players might be unaware that they have epilepsy until they experience their first seizure". It recommends testing every game. [snippet] — [Xbox XAG 118](https://learn.microsoft.com/en-us/gaming/accessibility/xbox-accessibility-guidelines/118)
- The common threshold is no more than **3 flashes per second**; some people react below 3 Hz. Game Accessibility Guidelines cite more than 3 flashes in one second covering **25%+ of the screen** as a risk, plus a limit on flashing sequences over 5 s. [snippet; check against current WCAG 2.3.1 / Xbox docs] — [MDN: Seizure disorders](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Seizure_disorders); [Game Accessibility Guidelines](https://gameaccessibilityguidelines.com/?p=3348)
- Example of retrofitting a "reduced effect intensity" option into an RPG Maker game. [snippet] — [itch.io devlog](https://itch.io/devlog/205264/how-to-adding-a-reduced-effect-intensity-option-to-an-existing-rpg-maker-mv-game.amp)

### Inferences
- **Suggested settings (inferred):**
  - "화면 흔들림" (screen shake) slider 0–100%, default 100% on PC and ~70% on phone. It multiplies maxOffset and maxAngle, and at 0 the camera kick is also removed.
  - "번쩍임 줄이기" (reduce flashing) toggle. It replaces full-screen white or inverted impact frames with a darkened vignette pulse or a target-local flash (under 25% of the screen) and caps all flashes to ≤ 2 per second.
  - "연출 속도" (presentation speed) ×1 / ×1.5 / ×2.
  - Keep hitstop, squash and sound at full strength under the reduce settings. They carry most of the impact without photosensitivity or motion risk, so a reduced mode still feels good.
- Respect `prefers-reduced-motion` (CSS media query, readable in JS via `matchMedia`) to set the initial defaults on the web build.

### Gaps
- Exact WCAG wording and red-flash thresholds were not re-verified this session; the guideline pages were seen as search snippets only.
