# Character and Creature Appeal: Practical Rules a Non-Artist Can Apply

Research note on method: network access in this session was restricted. Every WebFetch attempt failed with DNS errors (rocketbrush.com, studio.blender.org, creativebloq.com, characterdesignnotes.blogspot.com, gamedeveloper.com, clipstudio.net). All cited findings below therefore come from **search-result snippets and search-engine summaries**, not full-page reads. Quotes are snippet-level and should be treated as accurate but stripped of context. Items labelled "Inferences" are my synthesis plus standard animation/character-design teaching from training knowledge, and are **not** source-verified in this session.

---

## 1. Shape language, silhouette, big-medium-small, straights vs curves, exaggeration

### Takeaway
Teachers converge on four checkable rules: (1) the design must be recognizable as a solid black fill; (2) it should be built from a few basic shapes, with one dominant shape type that matches personality (circle = friendly, square = dependable/heavy, triangle = dangerous/villainous); (3) shape sizes must vary as big / medium / small, never all the same; (4) mix straight lines against curves, and exaggerate one or two features. "Same simple shape drawn with different pens" breaks rules 2-4, so no rendering technique can fix it.

### Cited Findings
- Big-medium-small: designs should have one element that takes up a lot of space, a medium-sized space, and then a small area of detail; the rule keeps a design engaging and avoids monotony; it also applies recursively to smaller shapes inside shapes. — [Skillshare: Emma Gillette, Character Design Fundamentals Pt 1](https://www.skillshare.com/en/classes/Character-Design-Fundamentals-Part-1-Shape-Language-and-Basic-Construction/441125331); [Skillshare: Alycia Pace, Character Design Basics](https://www.skillshare.com/classes/Character-Design-Basics-for-Animators-and-Illustrators/1057062961) (snippet-level; attribution between the two courses not separable in the summary)
- Silhouette test: "a sign of good character design is a character being recognizable solely from their silhouette"; artists use the silhouette to test whether a design "reads." — [Creative Bloq: strong silhouettes](https://www.creativebloq.com/art/character-design/how-to-design-instantly-recognisable-characters-using-strong-silhouettes); [Walt Disney Family Museum silhouette PDF](https://www.waltdisney.org/sites/default/files/2020-05/T%26T_Silhouette-final2.pdf)
- Negative space strengthens silhouette: cutouts in clothing, gaps between limbs/armour. Outfit must not override the base silhouette. — [Creative Bloq: strong silhouettes](https://www.creativebloq.com/art/character-design/how-to-design-instantly-recognisable-characters-using-strong-silhouettes); [Creative Bloq: how shape can make or break character art](https://www.creativebloq.com/art/digital-art/how-shape-can-make-or-break-your-character-art)
- "70% silhouette, 30% details" is cited as a common rule of thumb in game art (not a measured finding). — [RocketBrush: shape language in game character design](https://rocketbrush.com/blog/shape-language-in-game-character-design-how-to-make-characters-readable-and-consistent)
- Shape psychology (attributed to Tom Bancroft, *Creating Characters with Personality*, via secondary sources): squares suggest steadfast, dependable characters (heroes, heavies); villains are "often based upon dominant triangular concepts"; "curved and circular shapes are considered the friendliest." — [Medium: The Shape of Character Design](https://medium.com/media-reflections-past-present-future/the-shape-of-character-design-78c66eb97518); [SlideShare: Use of shapes in character design](https://www.slideshare.net/slideshow/shapes-32441225/32441225)
- Contrast in proportions and body shapes across a cast creates visual interest and hints at personality (Bancroft, via secondary source). — [AWN: Inspired 3D, effective character design pt 3](https://www.awn.com/vfxworld/inspired-3d-short-film-production-visual-elements-effective-character-design-part-3)
- Straights vs curves: mix straight and curved lines for variety; "a cuddly and sympathetic little bear cub will work well with mostly curved shapes," a battle-worn grandfather more angular; "even subtle variations in basic lines, angles and shapes can result in drastic changes in mood and personality." — [AWN: Inspired 3D pt 3](https://www.awn.com/vfxworld/inspired-3d-short-film-production-visual-elements-effective-character-design-part-3) (not confirmed as Bancroft's own wording)
- Fewer core shapes make a design more iconic; build from a primary shape plus secondary shapes. Exaggerating key elements such as head size or eyes makes a character memorable and easy to identify. — [CLIP STUDIO (KR): 단순한 모양으로 캐릭터 만들기](https://www.clipstudio.net/drawing/archives/161573); [CLIP STUDIO (KR): 매력적인 캐릭터 디자인 방법](https://www.clipstudio.net/drawing/archives/176087); [CLIP STUDIO (KR): 대담한 패션과 강한 실루엣](https://www.clipstudio.net/drawing/archives/159271)
- Blender Studio's *Sprite Fright* training post frames appeal as "the illusion of simplicity": a simple overall form with selectively layered complexity. — [Blender Studio: Sprite Fright, the illusion of simplicity](https://studio.blender.org/blog/sprite-fright-the-illusion-of-simplicity) (title/snippet only)
- Team Cherry on Hollow Knight: "The main character is probably just built from what is the simplest way of representing something bug-like that behaves like a knight" (Ari Gibson); bugs "make for simple characters." — [MCV/Develop: When We Made... Hollow Knight](https://mcvuk.com/when-we-made-hollow-knight/)
- Pokémon: newer designs were built from simple, abstract shapes with "simple exaggerated features to make them easy to remember and recognize." Ken Sugimori names Gengar as a favourite for its simple design and wanted the series to return to simpler roots after X/Y. — [Smogon: Pokémon art through the ages](https://www.smogon.com/articles/pokemon-art-through-ages); [Siliconera: Art director wants next generation simpler](https://www.siliconera.com/pokmon-art-director-wants-next-generation-simpler/); [Nintendo Life: Sugimori wants designs memorable](https://www.nintendolife.com/news/2018/07/ken_sugimori_wants_pokemon_designs_to_be_as_memorable_as_possible)

### Inferences
- Checkable rules for the dev:
  - **Black-fill test at board size.** Fill each character solid black at the actual 7×7 tile size (e.g., 40-60 px on a phone). If you can't tell mage / familiar type / enemy type apart, the design fails before color.
  - **Shape count:** body read = 1 dominant shape + 1-2 secondary shapes + 1-3 small accents. Example for the mage: big = hat triangle or robe bell, medium = head/face area, small = wand tip, buckle, eye glow.
  - **Size ratio check:** the big shape should be visibly larger than the medium (roughly 2× or more area), and the medium visibly larger than small details. Equal-size parts (head = body = hat) read as "stacked blobs," a common cause of ugly procedural shapes.
  - **One dominant shape type per character, with a contrasting minority** (e.g., round familiar + one pointed horn/tail; triangular villain + one round eye). Pure-circle or pure-triangle builds look generic.
  - **Straight-against-curve:** each outer contour should pair a straighter side against a curved side (classic animation teaching, e.g., Disney / Preston Blair), not two mirror-image curves.
  - **Exaggerate 1-2 features per character** (huge hat brim, oversized sleeves, tiny legs), not everything.
- Why the 19 mockups failed: same underlying silhouettes and shape ratios were reused, so every render technique inherited the same proportion/shape problems. "Variety" must happen at the silhouette/shape-language level (different dominant shapes, different exaggerations), which matches the user's complaint.

### Gaps
- Could not read Bancroft's book text directly; the straights-vs-curves wording is from secondary sources.
- Could not verify an exact numeric ratio for big-medium-small from a primary source (commonly taught informally as ~60/30/10 or similar; not found in sources this session).

---

## 2. Proportions: head-to-body ratios, age, cuteness, menace, eye placement

### Takeaway
Head-to-body ratio is the single strongest dial: ~2-2.5 heads tall reads as cutest (chibi), ~3 heads reads as a young child, ~7-8 heads is standard adult anime/heroic. Cuteness research (baby schema) adds: large head, large forehead, large eyes set low on the face (below the head's midline), small chin. Moving eyes up and lengthening the face ages the character.

### Cited Findings
- Chibi range: bodies from 3 heads tall down to 2 heads; "the most common 2 and 2.5 heads chibis." — [CLIP STUDIO TIPS: General guide to drawing chibis](https://tips.clip-studio.com/en-us/articles/4863); [CLIP STUDIO TIPS: How to draw chibis](https://tips.clip-studio.com/en-us/articles/3448); [Wikipedia: Chibi (style)](https://en.wikipedia.org/wiki/Chibi_(style))
- A 3-head ratio can be used to draw 4-5-year-old children; longer legs create a more mature effect even at the same head-body ratio; a longer torso makes a chibi look cuter and more doll-like. — [CLIP STUDIO TIPS: chibis](https://tips.clip-studio.com/en-us/articles/4868); [Clipstudio: Easy steps to creating chibi characters](https://www.clipstudio.net/how-to-draw/archives/155423)
- Warning: if facial features sit too high, it looks like "a realistic head plastered on top of a tiny body." — [CLIP STUDIO TIPS: chibis](https://tips.clip-studio.com/en-us/articles/4863)
- Standard manga/anime adult anatomy: about 7-8 heads tall. — [CLIP STUDIO TIPS: chibis](https://tips.clip-studio.com/en-us/articles/3448)
- Super-deformed is sometimes defined as 2-5 heads depending on style/age; chibi ~2 heads with very short limbs (forum opinion). — [intfiction forum thread](https://intfiction.org/t/video-games-of-characters-with-short-proportions/63241)
- Baby schema (Lorenz): relatively large head, large cranium, large eyes set below the horizontal midline of the skull. Large forehead + small chin + large eyes make a face look cute. — [Glocker et al., Baby Schema in Infant Faces (UPenn PDF)](https://www.cceb.upenn.edu/csa/assets/user-content/documents/BabySchemainInfantFacesInducesCutenessPerceptionandMotivationforCaretakinginAdults.pdf); [PMC: Sweet Puppies and Cute Babies](https://pmc.ncbi.nlm.nih.gov/articles/PMC3596402)
- Experimental: high baby-schema faces were rated cuter and elicited stronger caretaking motivation than low baby-schema faces; higher baby-schema content activated the nucleus accumbens (reward). — [Glocker et al. (UPenn repository)](https://repository.upenn.edu/cog_neuro_pubs/11); [PMC3260535](https://pmc.ncbi.nlm.nih.gov/articles/PMC3260535)
- Both cat and human faces were rated cuter when shifted toward a human-baby face shape (cross-species transfer). — [PMC: Sweet Puppies and Cute Babies](https://pmc.ncbi.nlm.nih.gov/articles/PMC3596402)
- Caveat: a 2024 review says the "baby schema" term lacks consistency among researchers and cross-species data is "conspicuously absent." — reported in search summary (Proceedings B review; URL not returned)
- Korean marketing source compares adult proportions (long face, eyes high) vs baby proportions (round face, big eyes placed low); large eyes, round forms, small features trigger care/affection. — [Kmong article](https://kmong.com/article/1268); [eopla magazine](https://eopla.net/magazines/14774)
- "Changing the eye height alone can change how old a character appears." — [Envato Tuts+: brainstorming head design, the eye line](https://design.tutsplus.com/articles/quick-tip-brainstorming-head-design-a-focus-on-the-eye-line--vector-5436)
- Darkest Dungeon II deliberately "grew the heroes up" in proportion to shift tone. — [Game Developer: DD2 road trip from hell](https://gamedeveloper.com/design/how-a-theme-of-a-road-trip-from-hell-would-shape-darkest-dungeon-ii)

### Inferences
- Proportion rules for this game:
  - **Mage player character:** 2.5-3 heads tall for a cute-but-capable read on a small board; the hat can count as extra "head mass" (hat + head ≈ 50% of total height is a common chibi game look).
  - **Low-rank familiars (knight tier):** baby-schema max: head/body ≈ 1:1 or a single round body, eyes below the vertical midpoint of the head, wide-set, large.
  - **High-rank familiars (duke/king):** keep them appealing but more "grown": eyes higher, face/body longer, more vertical silhouette, 3-4+ heads; add regalia rather than losing the cute core.
  - **Menace dial for enemies:** small eyes (or many eyes), eyes high or hidden, long jaw/chin, triangular top-heavy mass, narrow negative-space gaps.
- In 2.5D on a 7×7 board, chibi proportions also help readability: big heads give big faces/hats that survive downscaling.

### Gaps
- No source found giving a numeric "heroic" (8-9 heads) rule in this session, though it is common art-book teaching.
- No source tied a specific low eye position (e.g., "eyes at 60% down the head") to measured cuteness ratings; the baby-schema literature says "below the midline" only.

---

## 3. Faces and expression: why dot-eye faces look dead; minimal faces that charm

### Takeaway
Simple faces are fine (Hollow Knight, Kirby-style), but dead/creepy faces come from specific mistakes: no eye highlight, highlight dead-center, pupils staring straight out, wide mouths, eyes too high or too close, and no expression asymmetry. Minimal designs that work tend to use a few large, deliberate face elements (mask + two big eyes, glowing eyes under a hood/hat brim) and let the silhouette carry personality.

### Cited Findings
- "There's a fine line between cute and creepy. Creepy is astonishingly easy, and cute takes work!" Keeping eyes simpler helps; wide mouths can look creepy. — [Liz Haywood: On Designing Toy Faces](https://lizhaywood.com.au/?p=10983)
- "The bigger the pupil, the more you want to hug the character. Large iris and/or pupils also add youth." Pupils aimed skyward make viewers wonder what the character is thinking. Dead-center highlights read as "hypnotized." — [Packt: Planning a character's look](https://www.packtpub.com/en-in/learning/how-to-tutorials/planning-characters-look)
- More highlights make eyes look sparkly, bright and cheerful; no highlights is a common shorthand for evil or empty characters. — [Unvale: choosing an eye design](https://blog.unvale.io/choosing-an-eye-design-for-your-oc)
- Eye placement on toys/amigurumi changes expression strongly (spacing, height). — [PlanetJune: eyes](https://www.planetjune.com/eyes); [PlanetJune: positioning amigurumi eyes](https://www.planetjune.com/blog/?p=8222)
- Trope evidence that big round eyes signal good and small/narrow eyes signal evil in visual media. — [TV Tropes: Big Eyes, Little Eyes](https://www.tvtropes.org/pmwiki/pmwiki.php/Main/BigEyesLittleEyes); [TV Tropes: Good Eyes, Evil Eyes](https://tvtropes.org/pmwiki/pmwiki.php/Main/GoodEyesEvilEyes)
- Hollow Knight's protagonist is the "simplest way of representing something bug-like that behaves like a knight" (mask-like head, two eyes, no mouth). — [MCV/Develop: When We Made Hollow Knight](https://mcvuk.com/when-we-made-hollow-knight/)
- Masks weakened the link between measured kindchenschema and perceived cuteness in human faces, meaning covering the lower face reduces baby-schema cues. — [Scientific Reports 2022 (PDF)](https://www.nature.com/articles/s41598-022-15922-z.pdf)
- Cuteness isn't only appearance; behavior and story are cited as reasons characters stay loved. — [Newneek: 오래 사랑받는 캐릭터의 조건](https://newneek.co/@wpl/article/47117)

### Inferences
- Checklist for "not dead" minimal faces:
  - Always include **one highlight per eye, off-center, same side on both eyes** (e.g., upper-left). This one fix animates dot eyes.
  - **Pupils slightly off-center / looking toward a target** (another character, the wand), not straight at the camera, unless the intent is creepy.
  - **Eye spacing ≥ one eye-width apart** for cute; close-set reads tense or sly.
  - **Asymmetric expression:** one brow up, one eye slightly squinted, or a tilted head; perfectly mirrored faces look masklike in a bad way.
  - **Small or no mouth** for cute; a wide mouth reads creepy unless it is clearly smiling.
- Hidden-face options fitting a grimoire/occult theme:
  - **Hood/hat shadow + two glowing eyes** (classic "black mage" read): high contrast, readable at tiny sizes, and avoids drawing a full face badly. Glow color can encode rank or element.
  - **Mask or sigil face** for demons/familiars: a single geometric mask shape with two eye holes, à la Hollow Knight.
  - Per the mask study, a covered lower face reduces cuteness signals, so put the cute signal into the eyes (big, round, low) and the body silhouette.

### Gaps
- No primary source in this session explicitly explains why code-drawn dot eyes look "dead"; the highlight/pupil-direction advice is from tutorial/practitioner sources.
- Team Cherry's rationale for the eyes-only mask face specifically was not found.

---

## 4. Color: limited palettes, value contrast, saturation hierarchy, small-size readability

### Takeaway
Readability comes from value (light/dark) and silhouette before hue. Use a small per-character palette (roughly 3-8 colors for a small sprite), keep one shared game-wide palette, reserve the highest contrast and saturation for the focal point / gameplay-critical element, and use color-coding (uniform color + accent) to separate tiers.

### Cited Findings
- A sprite should be recognizable as a solid black fill at distance; shape should register before color or detail. — [FreeGameSprites: sprite silhouette test](https://freegamesprites.com/pt/news/sprite-silhouette-test-character-readability); [Bugnet: pixel art that reads clearly](https://bugnet.io/blog/how-to-make-pixel-art-that-reads-clearly)
- Use strong contrast between gameplay-critical elements and the background so the eye lands where it should. — [Bugnet: pixel art that reads clearly](https://bugnet.io/blog/how-to-make-pixel-art-that-reads-clearly)
- Palette size guidance varies: ≤16 colors per sprite ([MIT GDG style guide](https://gdg.mit.edu/style-guide)); 15 + transparency ([Newgrounds bluemagma](https://bluemagma.newgrounds.com)); 3-8 colors per small sprite with a shared game-wide palette ([Playbooks pixel-art skill page](https://playbooks.com/skills/omer-metin/skills-for-antigravity/pixel-art-sprites)). These are rules of thumb from community guides.
- At small sizes, detail has to give way to clarity. — [pubhtml5 excerpt](https://pubhtml5.com/drtd/hqdo/basic/101-150)
- Silhouette, color and setting consistency together make a character persuasive (Korean pro tutorial). — [CLIP STUDIO (KR): 실루엣/색상/설정](https://www.clipstudio.net/drawing/archives/176087)
- Elite enemies in Warhammer 40K: Darktide got their own uniform colors plus additional accent colors on armor (e.g., red/white paint) over the same base torso as regular enemies. — [Darktide 101 enemy character art dev blog](https://darktide.gameslantern.com/news/darktide-101-enemy-character-art-dev-blog)
- Human enemies have a distinction problem, reduced by color-coded uniforms or distinct weaponry. — search summary of [Game Developer: on monster design](https://gamedeveloper.com/design/on-monster-design) / related results (exact source attribution uncertain)
- FFVII remake breakdown: combat color hierarchy where "a single primary intent reigns supreme: signal attacks, telegraphs, and player actions." — [Studios Ground Zero: FFVII breakdown](https://studios-groundzero.pages.dev/journal/breakdowns/final-fantasy-vii)

### Inferences
- Rules for the 7×7 board:
  - **Value separation test:** convert a screenshot to grayscale. Each unit must still separate from its tile. Give units either a dark outline or a light rim against the board's mid values.
  - **Palette per character:** 1 dominant hue (≈60% of area), 1 secondary (≈30%), 1 accent (≈10%) at highest saturation on the focal point (eyes, wand gem, sigil). The 60/30/10 split is standard design practice, not sourced here.
  - **Saturation hierarchy:** board/tiles least saturated, units mid, accents/glows/telegraphs most saturated. Never let the board out-saturate units.
  - **Faction color coding:** player/familiars share warm or "arcane" accent; enemies a different accent family; elites = same body + new uniform color + extra accent; bosses = unique palette plus scale.
  - **Rank via color:** use a metal ladder (bronze → silver → gold → violet/black-gold) for the knight→king familiar ranks, applied to trims/crowns/sigils, while the creature's base palette stays its own.

### Gaps
- No primary-source numbers were found for minimum contrast ratios for game sprites on busy boards.
- No source verified a specific accent-color percentage; the 60/30/10 rule is design folk practice.

---

## 5. Creature/monster design: lovable familiars, distinct enemies, rank progression

### Takeaway
Lovable creatures come from simple, exaggerated, mostly-round shapes with one "uncute" twist for character (Sugimori's balance rule). Enemies need distinct silhouettes per type and a clear visual ranking (regular → elite via color/accent layers → boss via scale and unique shapes). Rank progression is best shown by adding regalia, height, verticality and accent complexity onto a recognizable core, not by redrawing from scratch.

### Cited Findings
- Sugimori's "keeping the balance": add something uncool to an overly cool design (and vice versa); tells staff to take away from designs that are too cool. — [Siliconera: balancing cool or cute by adding uncool features](https://www.siliconera.com/pokmon-designer-on-balancing-cool-or-cute-pokmon-by-adding-uncool-or-uncute-features/); [Nintendo Everything: Sugimori on balancing designs](https://nintendoeverything.com/ken-sugimori-on-balancing-pokemon-designs/)
- Sugimori likes Venusaur but doesn't enjoy drawing it because it is complex; favors Gengar for simplicity. — [Wikipedia: Ken Sugimori](https://www.wikipedia.org/wiki/Ken_Sugimori); [Well Played: 2000 interview](https://www.well-played.com.au/pokemon-artist-ken-sugimori-talks-design-in-newly-translated-2000-interview/)
- A 2003 Nintendo Dream interview says the team purposely aimed for some Pokémon to be "more cool, tough-looking, [and] monstrous." — search summary (source in results: [Siliconera / Pikachu origin article](https://www.siliconera.com/pikachu-originally-second-evolution-called-gorochu-large-fangs-two-horns/))
- Pikachu's originally planned second evolution "Gorochu" had large fangs and two horns (an example of escalating menace features along a line). — [Siliconera: Gorochu](https://www.siliconera.com/pikachu-originally-second-evolution-called-gorochu-large-fangs-two-horns/)
- Readable enemies: type, threat and attacks should be recognizable via distinct silhouettes, clear visual language, telegraphed attacks. — [Bugnet: how to design a readable enemy](https://bugnet.io/blog/how-to-design-a-readable-enemy-design)
- "Some types are weaker, some are stronger. Make this ranking clear." — [The Level Design Book: enemies](https://book.leveldesignbook.com/process/combat/enemy)
- Darktide elites: same torso uniform as basics, different uniform color + accent colors. — [Darktide 101 enemy art dev blog](https://darktide.gameslantern.com/news/darktide-101-enemy-character-art-dev-blog)
- Boss telegraphs: 3-5 primary telegraph "families" is enough for most fights. — [GamineAI: enemy telegraph shape language](https://gamineai.com/blog/enemy-telegraph-shape-language-top-down-boss-fights-fast-visual-consistency-audit-2026) (low-authority checklist blog)
- Darkest Dungeon: art designed to "reinforce and enhance the tone and design of the game"; Bourassa built "a style that had a set of rules I could externalize" so he could art-direct himself; wanted it to feel "old and worn." — [80.lv: Red Hook on Darkest Dungeon](https://80.lv/articles/red-hook-studios-talks-about-the-creation-of-darkest-dungeon); [GameSpot: gothic sensibilities of Darkest Dungeon](https://www.gamespot.com/articles/the-gothic-sensibilities-of-darkest-dungeon/1100-6424880/); [Game Developer: Road to the IGF, Red Hook](https://www.gamedeveloper.com/audio/road-to-the-igf-red-hook-studios-i-darkest-dungeon-i-)
- Hornet (Hollow Knight) is "half-bug," which grounds her design physically versus the Knight's ethereal look; the taller Hornet forced redesign of Silksong's world. — [GamesRadar: Hornet being taller changes everything](https://gamesradar.com/games/platformer/team-cherry-had-to-go-back-to-the-drawing-board-for-hollow-knight-silksong-for-one-simple-reason-hornet-being-taller-changes-everything)
- Kotaku "science of size": size is a recurring tool for signalling power in games. — [Kotaku: the science of size](https://kotaku.com/the-science-of-size-in-video-games-5703898) (title-level only)

### Inferences
- Familiar rank ladder (Goetia ranks), keeping one creature's identity recognizable across tiers:
  - **Knight:** smallest, roundest, 1-1.5 heads, one accent, simplest silhouette, big low eyes (maximum baby schema).
  - **President / Earl:** add one regalia item (collar, chain of office, small crown of horns), slightly taller, add a secondary shape.
  - **Duke:** vertical elongation, cape/wings expanding the silhouette, two accent colors, sigil visible.
  - **King:** largest silhouette, crown/halo/throne-like mass, unique glow color, more pointed (triangular) elements balanced by a cute core (Sugimori balance rule in reverse: keep one soft feature).
  - Rule: each rank adds **one** new silhouette element and one rank-color trim; the base creature shape stays constant so collections read as families.
- Enemies:
  - **Small fry:** simple, one dominant shape, muted palette, cohort-shared silhouette (the "uniform").
  - **Elite:** same silhouette + new color + accent + one added feature (horn, armor plate), the Darktide model.
  - **Boss:** occupies 2×2 or more board space or visibly taller; unique silhouette not shared with any small fry; strongest saturation reserved for its weak point/telegraph.
- Occult theme hooks: Goetia demons are historically described as composite creatures (animal heads, crowns, mounts), which maps naturally to "core animal + rank regalia" design.

### Gaps
- No primary source found documenting Pokémon evolution lines as an explicit simple→complex rule (it is widely observed but unverified here).
- No Monster Hunter or Slay the Spire primary design-talk material was retrieved this session.
- No numeric guidance on how much bigger an elite/boss should be than a regular unit.

---

## 6. Why amateur/procedural characters look ugly or generic, and fixes

### Takeaway
The recurring causes are: weak silhouettes, stiff symmetrical "twinned" poses, equal-sized parts (no big-medium-small), detail spread evenly with no focal point or rest areas, uniform lines, and no exaggeration. Each has a concrete fix.

### Cited Findings
- Weak silhouette is a core problem: block the character as a solid shape and check whether it is still recognizable. — [DonCorgi: character design mistakes](https://doncorgi.com/blog/character-design-mistakes/); [Freelancer: bad character design](https://www.freelancer.com/articles/graphic-design/bad-character-design)
- Twinning: mirrored or near-mirrored limbs make poses look flat and wooden (citing Thomas & Johnston, *The Illusion of Life*); a 3/4 view "offers fewer opportunities for twinning and conveys a greater sense of dimension." — [Character Design Notes: How to kill great character design](https://characterdesignnotes.blogspot.com/2010/11/how-to-kill-great-character-design-part.html)
- Stiff, symmetrical poses that ignore weight are among the most common beginner mistakes. — [School of Motion: common 2D animation mistakes](https://schoolofmotion.com/blog/new-to-2d-character-animation-here-are-the-most-common-mistakes-and-how-to-avoid-them)
- Appeal comes from natural head/body tilts, varied limbs and fabric folds, solid construction, and an engaging expression. — [SitePoint: 10 ways to add life to a mascot](https://www.sitepoint.com/10-ways-to-add-life-to-a-mascot-or-character)
- "Having detail everywhere is as good as having no detail at all. The key is to have detail in the right spots to maintain readability." Calves/arms act as visual rest spots near the busiest part. — [80.lv: character design shape language and readability](https://80.lv/articles/character-design-shape-language-and-readability/); [Position Is Everything: what makes a design visually appealing](https://www.positioniseverything.net/what-makes-a-fictional-character-design-visually-appealing/)
- Make some areas broad and empty to contrast with intense detail in a small area. — [Polycount discussion](https://polycount.com/discussion/comment/2487393/)
- Reserve strongest contrast, sharpest edges and highest detail for important areas, with quiet zones around the focal point; establish a dominant proportion, a supporting proportion, and ordinary rest areas. — [CivArchive: methodologies from a professional concept artist](https://civarchive.com/articles/33926/how-to-design-character-appearance-methodologies-from-a-professional-concept-artist)
- A focal point doesn't need maximum saturation/detail; a calm figure can be the focus through contrast with busy surroundings. — [Muddy Colors: Focal point](https://muddycolors.com/?p=18508)
- Proko assigns "thematic focal points" as a design exercise. — [Proko: thematic focal points](https://proko.com/course-lesson/assignment-thematic-focal-points)
- Line quality helps describe the character. — [Toonsmag: consider line quality](https://www.toonsmag.com/mag_item/consider-line-quality/) (no detail on weights)
- Pokémon's Sugimori: designs that get too complex become hard to draw and less iconic. — [Siliconera: simpler next generation](https://www.siliconera.com/pokmon-art-director-wants-next-generation-simpler/)

### Inferences
- Diagnostic checklist (apply to each SVG):
  1. **Black-fill test** at board size: distinct? (silhouette)
  2. **Shape-size test:** is there a clear big, medium, small? Any two major parts the same size → change one.
  3. **Symmetry test:** draw a vertical axis; if left = right exactly, tilt the head 5-15°, offset hat tip, move one arm, put the familiar/wand on one side. (Degree numbers are my suggestion.)
  4. **Tangent test:** do any two contours just touch (hat brim touching shoulder line, eye touching head edge, wand tip touching outline)? Either overlap clearly or separate with clear gap. (Tangents are standard comics/animation teaching; no source retrieved this session.)
  5. **Line-weight test:** SVG strokes are uniform by default. Make outer silhouette stroke thicker (≈1.5-2× inner lines), thin interior lines, and thicken lines on the shadow side / under overlaps.
  6. **Focal-point test:** one area (face/eyes or the magic glow) has the most contrast and detail; at least one large area (robe body) is plain.
  7. **Straight-vs-curve test:** each big contour pairs a straight with a curve.
  8. **Exaggeration test:** name the one feature you'd caricature; if none, push one by 30-50%.
- Code-drawn shapes suffer especially from perfect geometry: perfect circles, perfect symmetry, equal stroke, aligned centers. Deliberately add irregularity (tapered strokes, slightly egg-shaped heads, off-axis hat tips).

### Gaps
- No retrieved source specifically on tangents or uniform line weight (search returned none); the advice above is from standard teaching, not verified here.
- No source specifically on procedurally generated / SVG-drawn character pitfalls.

---

## 7. Gesture, pose and asymmetry in static sprites

### Takeaway
Even a static idle sprite needs a gesture: a line of action, a head tilt, weight on one side, and a 3/4 view instead of straight-front. Twinning and front-facing symmetry are the main causes of a "wooden" look.

### Cited Findings
- Mirrored limbs make poses flat and wooden; prefer 3/4 view to reduce twinning and add dimension. — [Character Design Notes](https://characterdesignnotes.blogspot.com/2010/11/how-to-kill-great-character-design-part.html)
- Head and body tilts, varied limbs, fabric folds and expression produce appeal. — [SitePoint: 10 ways to add life to a mascot](https://www.sitepoint.com/10-ways-to-add-life-to-a-mascot-or-character)
- Stiff symmetrical poses ignoring weight are a top beginner mistake. — [School of Motion](https://schoolofmotion.com/blog/new-to-2d-character-animation-here-are-the-most-common-mistakes-and-how-to-avoid-them)
- Preston Blair's definition of appeal is widely cited as foundational. — [Scribd: Preston Blair excerpt](https://www.scribd.com/document/366673264/MK-pdf) (title-level only)

### Inferences
- Rules for this game:
  - **Default to 3/4 facing** for all board units (fits 2.5D too); avoid dead-front.
  - **Line of action:** a single C or S curve through the body: lean the mage's body, hat tip curling back the other way.
  - **Weight shift:** one hip/foot higher; robe hem tilted.
  - **Overlap:** wand arm crosses the body, familiar overlaps the hat, so forms read in depth.
  - **Idle "breathing" or bob** (2-4 px squash/stretch loop) gives life even to minimal faces; card art can use a stronger, more dynamic pose than the board sprite.
  - **Pose sells rank:** low-rank familiars bounce/tilt playfully; high-rank ones stand upright and still (stillness reads as power).

### Gaps
- No sourced measurement of how much pose/asymmetry changes perceived appeal; evidence is practitioner consensus.
- Could not retrieve Marc Brunet, Sinix Design or Proko video content (video/text not accessible in this session).
