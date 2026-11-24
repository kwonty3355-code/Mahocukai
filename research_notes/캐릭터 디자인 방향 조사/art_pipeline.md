# Art production routes for a non-drawing solo dev (마법산업기능사): code-drawn art, 3D-to-2D, asset packs, commissions, hybrid strategies, avoiding the "AI look"

Research date: 2026-11-24. The network allowed web search only; most pages were not fetched in full, so many findings come from search-result snippets (noted where it matters). Prices are from individual seller listings, not market surveys. Many listings are undated.

## 1. Limits and best practices of procedural / code-drawn characters

### Takeaway
Code-drawn art succeeds when the **movement, simulation or post-processing** does the work and the shapes stay simple. Rain World (code-animated creatures) and Inscryption (a look built from shaders and post-processing) are the strongest proven cases. Code does badly at **detailed, appealing faces and anatomy**, which is exactly what a "cute mage + gacha familiars" roster leans on. Code-only characters should be either stylized non-humans (masks, blobs, paper, geometric spirits) or simple bodies that are animated and shaded well.

### Cited Findings
- Rain World's creatures are animated procedurally with code. Joar Jakobsson (art, design and programming) said he "never really set out to do procedural animation" but needed limbs to move, and used "a bunch of points in space" instead of drawn frames. The slugcat body is two spherical chunks locked at a fixed distance. — [Unity blog: Exploring procedural design in Rain World](https://unity.com/blog/exploring-procedural-design-rain-world)
- Rain World has 100+ creatures with varied looks, and each needs its own body and movement code. That is a real cost even when the art is procedural. — [Unity blog](https://unity.com/blog/exploring-procedural-design-rain-world)
- A PC Gamer interview describes the animation as "little blobs of physics", with all creatures simulated at once. — [PC Gamer](https://pcgamer.com/rain-worlds-simulated-ecosystem-reacts-to-your-choices)
- GDC 2016 talk by Jakobsson and Therrien on animating Rain World's "squishy stretchy creatures". — [Game Developer video](https://gamedeveloper.com/art/video-animating-i-rain-world-i-and-its-many-squishy-stretchy-creatures)
- Inscryption's "unfaithful retro-3D" look was mostly made with **post-processing and shaders rather than individually crafted art assets**. Daniel Mullins chose this partly because he was unsure he would have a permanent art collaborator. — [Game Developer: Inscryption, Daniel Mullins Games](https://gamedeveloper.com/design/inscryption---daniel-mullins-games) (search snippet of GDC 2022 coverage)
- Mullins still hand-drew the card portraits in Photoshop and iterated on the style until it clicked "when he drew the Beaver card". So the shader-driven look sat on top of a small set of hand-made images. — [Game Developer: How a game jam became Inscryption](https://www.gamedeveloper.com/design/how-game-jam-sacrifices-became-inscryption); [Thumbsticks](https://www.thumbsticks.com/magic-myst-pokemon-inspire-inscryption/)
- Inigo Quilez's SDF characters show both the ceiling and the cost of math-only characters. His "Happy Jumping" was a one-day piece with a "super simple character" and rough animation. His SDF "selfie girl" is described as "quite taxing even on large desktop-class GPUs". That is unsuitable for a phone/iPad web game as a live renderer, though it could be pre-baked. — [iquilezles.org raymarching SDF article](https://iquilezles.org/articles/raymarchingdf); [Hackaday on SDF modeling](https://hackaday.com/2023/04/12/signed-distance-functions-modeling-in-math/)
- SDFs are proven and cheap for **outlines, glow and shadows** on 2D shapes, e.g., SDF fonts and map labels. That is exactly the spell-effect and outline layer. — [Red Blob Games: SDF fonts](https://www.redblobgames.com/articles/sdf-fonts/)
- I found no well-known examples of an SVG/procedural character *generator* praised for good-looking characters. The search turned up SDF tooling, not character art. — (negative result; see Gaps)

### Inferences
- Styles that suit code (AI assistant writing SVG/Canvas/shaders), from best to worst fit:
  1. **Geometric / mask / talisman spirits** for familiars: symmetric silhouettes, flat colors, one or two accent glows, eyes as simple shapes. They fit 부적 (paper talismans), 탈 (masks), 도깨비불 (goblin fire) and paper-craft themes, which suit "traditional magic". The appeal comes from motion (bobbing, squash-stretch, particle trails) done the Rain World way.
  2. **Paper-cutout / puppet rigs** (separate flat parts with pivot points, like Spine cutout animation). Code is good at transforms. The art per part can be simple shapes with a paper texture and a hard drop shadow. This also gives outfit swaps for free (swap the "robe" part).
  3. **Silhouette + rim light** characters: black or dark body with a strong outline and glowing eyes or accessories. This hides the lack of anatomy skill, and light comes from shaders.
  4. **Programmatic pixel art** at very low resolution (16–32px): code can place pixels, but good pixel characters need hand-judged clusters. Expect "OK, not charming" results unless a human edits.
  5. **Detailed anime-style humans** in SVG: the worst fit. Faces, hands, hair flow and fabric folds are where code-drawn art looks clumsy. This is almost certainly why the mockups were judged ugly.
- Good practice for code art: limit the palette (4–8 colors per character), use a consistent line weight or no lines, bold silhouettes readable at thumbnail size, a deliberate noise/paper texture to break the "vector clip-art" sterility, and procedural secondary motion (breathing, cloth sway, hair springs).
- A hybrid works well: **a human draws flat parts** (or they come from a pack), and **code rigs, animates, recolors and adds VFX**. This is the Inscryption pattern: a few hand assets plus heavy shader and post work.

### Gaps
- No sourced list of web/JS games with "beautiful code-drawn characters". Examples I recall but did not verify this session (e.g., Kenney-style flat assets, generative "blob" games) are not cited.
- No benchmark of SDF rendering cost on mobile WebGL for 2D characters.

## 2. 3D-to-2D pipelines (Blender / VRoid / kitbash → sprites, toon shaders) and modular creators

### Takeaway
Rendering 3D models to 2D sprites is proven at the professional level (Dead Cells) and has hobbyist tools (Blender to Pixels). VRoid gives non-artists anime humanoids with commercial-use rights. The look is generic "VRoid anime" unless heavily customized, and creatures and familiars still need models from somewhere. For this project, three.js/PixiJS toon-shaded low-poly is something the AI assistant *can* write code for (geometry + shader), unlike painting.

### Cited Findings
- Dead Cells artist Thomas Vasseur: "To make up for the lack of bandwidth and still deliver on quality, we had to find a pipeline that could give us great looking pixel art, without having to hand draw each and every retake." They rendered 3D animation and reduced it to low-res pixel art with simple post-processing, including normal maps for lighting. — [80.lv: Dead Cells character art pipeline](https://80.lv/articles/case-study-dead-cells-character-art-pipeline)
- "Blender to Pixels" is a downloadable tool for creating and animating 3D models and turning them into pixel art. — [astropulse.itch.io/blender-to-pixels](https://astropulse.itch.io/blender-to-pixels)
- Hobbyist reports of using Blender + Unity for a pixel-art game. — [Blender Artists thread](https://blenderartists.org/t/so-i-did-a-pixel-art-game-with-blender-and-unity/1169165)
- VRoid Studio guidelines: unless a model's license has special clauses, anyone (individual or corporation) may use VRoid Studio's meshes, textures and preset items commercially. Models, textures or items made by other creators carry those creators' terms. — [VRoid Studio Guidelines](https://vroid.com/en/studio/guidelines)
- Example third-party VRoid model: commercial use in games allowed, redistribution and resale prohibited. — [CGTrader VRoid model listing](https://www.cgtrader.com/3d-models/character/woman/luca-vroid-model)
- Darkest Dungeon II moved to 3D but kept hand-painted textures painted onto 3D models, using "technology to support and enhance the 2d work". — [PC Gamer DD2 interview](https://www.pcgamer.com/au/interview-darkest-dungeon-2s-new-3d-look-monsters-the-narrator-and-its-surprising-aspirational-spirit/) (search snippet)

### Inferences
- **What it looks like:** VRoid + toon shader gives clean anime "VTuber-ish" humans. Players familiar with VRoid will recognize default hair and face presets. That is not an "AI look", but it reads as "asset-made". Customize hair silhouettes, the eye texture and outfits to escape it.
- **Low-poly toon 3D written as code** (three.js or a PixiJS mesh, flat or 2–3 tone ramp shading, inverted-hull outlines) is the most realistic route for the AI assistant to produce acceptable *creatures* on its own. Simple geometric familiars (spheres, cones, lathe shapes) with toon ramps and outlines look deliberate and hold up at any resolution. Human characters made from primitives tend to look like toys or chess pieces; that works if the style embraces it, e.g., wooden puppets or 인형 (dolls).
- Pre-rendering 3D to sprite sheets suits phone performance in a PixiJS game. Real-time 3D adds a second renderer.
- The effort is front-loaded: learning Blender takes weeks, but each extra outfit or palette variant is cheap.

### Gaps
- No sourced data found on modular 2D character creators with commercial licenses (e.g., paper-doll generators, LPC "Universal Sprite Generator"). Those exist, but I did not verify them this session.
- No sourced examples of shipped indie games built on VRoid-rendered sprites.

## 3. Asset packs and marketplaces for witch/mage/monster art

### Takeaway
Many witch/mage sprite packs exist on itch.io (free to cheap) and Craftpix (paid, with free items). The main risks are **style inconsistency when mixing packs**, **recognizability** (popular packs show up in many games), and **AI-made packs on itch.io**. Packs work best when the whole game is built around **one artist's or studio's family of packs**.

### Cited Findings
- itch.io has many witch/mage character packs, for example: "The Witch Game Sprites" (pzuh), "Witches character pack" and "Mega mage pack" (gamedeveloperstudio), Witch pixel art sprite set (MariaParraGames, 10 animations), Witchcraft spritesheet (Arks, free), a 16x16 top-down mage (FlandreScarlet64, free), and Fantasy RPG Pixel Pack (chamepixel). — [pzuh](https://pzuh.itch.io/the-witch-game-sprites), [gamedeveloperstudio witches](https://gamedeveloperstudio.itch.io/witches-character-pack), [mega mage pack](https://gamedeveloperstudio.itch.io/mega-mage-pack), [MariaParraGames](https://mariaparragames.itch.io/witch-pixel-art), [Arks](https://arks.itch.io/witchcraft-spritesheet), [FlandreScarlet64](https://flandrescarlet64.itch.io/16x16-16-bits-top-down-mage-character), [chamepixel](https://chamepixel.itch.io/fantasy-rpg-pixel-pack), [itch.io tag: witch](https://itch.io/game-assets/newest/tag-witch), [spellcaster collection](https://itch.io/c/6610882/spellcaster-characters)
- Ansimuz's Gothicvania packs: the Patreon Collection is listed under CC0. Gothicvania Town allows personal and commercial use and modification. — [Gothicvania Patreon Collection](https://ansimuz.itch.io/gothicvania-patreon-collection), [Gothicvania Town](https://ansimuz.itch.io/gothicvania-town)
- Craftpix: staff comments on itch.io say even free assets carry a commercial license with no royalties. Reselling or redistributing the original files is prohibited. These statements are secondhand; the authoritative page is craftpix.net/file-licenses. — [itch.io comment thread results](https://itch.io/post/13066279) (snippet)
- Vampire Survivors controversy: in 2022, players claimed some sprites resembled Castlevania art, possibly via an Oryx Design Lab pack. PC Gamer's headline says the game "didn't rip off Castlevania sprites after all", and the developer changed the sprites people objected to. This shows a risk of building on third-party packs: you inherit their provenance. — [PC Gamer](https://www.pcgamer.com/vampire-survivors-didnt-rip-off-castlevania-sprites-after-all); [Steam discussion](https://steamcommunity.com/app/1794680/discussions/0/3201496371570662124)
- itch.io now requires generative-AI assets to be tagged. Untagged AI assets lose browse-page indexing. This matters when buying packs, because some packs are AI-made. — [itechguides summary](https://www.itechguides.com/how-to-spot-ai-generated-assets-in-an-indie-game-a-careful-players-guide/) (secondary source)
- An indie developer was falsely accused of AI use after using pre-made assets they had tried to verify. Pack provenance can't be 100% guaranteed. — [Plagiarism Today, 2026-04-07](https://www.plagiarismtoday.com/2026/04/07/game-developer-falsely-accused-of-using-ai/)

### Inferences
- Assets fit best for **enemies, backgrounds, UI frames and items**, where uniqueness matters less. They fit worst for the **player mage and gacha familiars**: those are the "collectible face" of the game, and generic packs undermine gacha appeal.
- To keep style consistent, buy from one creator's catalog, recolor everything to one project palette (easy in code: palette-swap shader), and add the same outline and shadow treatment in-engine.
- Check each license for: commercial use, modification, credit, a no-redistribution clause (web games ship assets publicly in the bundle, so check whether the license allows that), and an AI-generated tag.

### Gaps
- LimeZu license terms were not retrieved. Unity Asset Store pricing and licensing details for 2D witch packs were not retrieved.
- **Korean asset marketplaces** (e.g., 인디터, 클립스튜디오 에셋, 크몽 리소스): no sourced results this session.

## 4. Commissioning artists: prices, briefing, roster size

### Takeaway
Hobby-scale budgets can afford commissioned art **if the roster is small and the style is simple**. Korean commercial-use SD/chibi work starts around ₩50,000–200,000 per character; full-color commercial character illustrations run ₩180,000–300,000+. Global chibi starts around US$20–75. Pixel sprites cost about US$2–10 per frame plus a base fee. Commercial-use rights typically cost 1.5–3× the personal-use price.

### Cited Findings (prices as listed in search results, retrieved 2026-11-24; listing dates mostly unknown)
**Korea (크몽 / 아트머그 / 개인 커미션)** — sources: [크몽 일러스트 가격 페이지](https://kmong.com/prices/%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8) and seller listings such as [kmong gig 834569](https://kmong.com/gig/834569), [gig 701283](https://kmong.com/gig/701283), [gig 349686](https://kmong.com/gig/349686), [gig 686404](https://kmong.com/gig/686404), [gig 374275](https://kmong.com/gig/374275), [gig 664760](https://kmong.com/gig/664760). The search tool summarized these pages without mapping each price to a gig, so cite as "크몽 seller listings".
- Personal-use full-body SD: ₩20,000–40,000. Personal SD bust ₩30,000, commercial ₩50,000.
- Commercial SD bust: ₩90,000 with basic coloring, ₩150,000 with full coloring (one seller). Another seller lists SD at ₩150,000 for broadcast use and ₩200,000 for commercial use, with secondary editing not allowed.
- One seller prices commercial use at 1.5× broadcast use. Another prices commercial at 3× personal use and says "커미션(비상업)과 외주(상업)는 다른 개념" (a commission is non-commercial; outsourcing is commercial).
- Commercial full-color illustration: head/bust ₩180,000, half/full body ₩240,000 (one seller). Commercial character design ₩300,000 minimum per character, with extra revision rounds charged separately (another seller).
- Parts-separated, Live2D-ready work: about ₩110,000–220,000 (one seller). That is relevant to puppet rigs in code.
- Some sellers forbid commercial secondary use of their game-character work, so read the terms.
- No price list was found for 아트머그 itself. One 크몽 seller says they also take 1:1 commissions on 아트머그.

**Global**
- VGen "YCH Storybook Chibi" from US$45 per character. — [VGen che-seri](https://vgen.co/che-seri)
- Artist price sheets (2025): chibi US$30 base, with extra characters +25–75%; chibi US$35, flat color US$70; chibi lineart US$20 / flat US$25 / shaded US$30. — [Google Docs price sheets in search results](https://docs.google.com/document/u/0/d/1X-qynMScP5UTi6WrXQ691I2qZWcQ66WTQAdhKSooV3A/mobilebasic) (sheets from different artists; snippet-level)
- Pixel sprites (Fiverr/itch listings): about US$2–4 per frame for small sprites. Size tiers: 32x32 $3/frame, 48x48 $5, 64x64 $8, with a 40% discount for repeated frames. Base fees: $15 (32px) / $25 (48px) / $40 (80px). Higher end: $30 base + $10 per frame for 32px. — [Fiverr listings](https://www.fiverr.com/endrewhag/create-pixel-art-assets-and-icons), [Fiverr sungeek76](https://fiverr.com/sungeek76/create-2d-spritesheet-for-your-indie-game), [Alexander Bodine commissions](https://powermaster.itch.io/commissions-alex-bodine), [jamesfoxbr pixel prices](https://sites.google.com/view/jamesfoxbr/prices/pixel-art)
- Pricing guidance from pixel artists: quote the process (sketch, palette exploration, revisions, export variants, messaging), not just pixels. Under 5 minutes per frame "almost never works" even at low resolution. — [Aseprite community](https://community.aseprite.org/t/a-simple-pricing-sanity-check-for-pixel-art-commissions/28697); [Game Developer: Pricing pixel art](https://gamedeveloper.com/business/pricing-pixelart-or-quot-where-can-i-get-free-pixels-quot-)

### Inferences
- **Worked budget example (estimates, not sourced quotes):**
  - Player mage: commercial character design sheet (front/back, ₩300k) plus a parts-separated version for rigging (₩110–220k) comes to about ₩400–520k.
  - Each outfit as a parts swap: perhaps ₩50–100k.
  - 20 familiars as commercial SD/chibi at ₩50–150k each comes to ₩1M–3M. As 32px pixel sprites with a 4-frame idle (~$15–25 base + ~$12–32 in frames, roughly $27–57 each), 20 familiars cost about US$540–1,140.
- **Gacha roster size:** no sourced number was found. Inference: a small web gacha can launch with about 12–24 base familiars and multiply them with code-driven variants: palette swaps for elemental or shiny versions, accessory overlays, aura and particle effects, and "evolution" via VFX. Many classic games use palette-swapped enemy variants. Code can do recolors, glow, outlines, and size/pose transforms for free.
- **Briefing an artist (style guide checklist):**
  - Locked palette as hex codes.
  - Line weight in px at final size, or a no-line rule.
  - Head-to-body ratio (e.g., 2.5 heads for SD).
  - Silhouette rules (each familiar readable as a black silhouette at 64px).
  - Shading model (flat, 1-step cel or soft).
  - 3–5 reference images *of mood, not to copy*.
  - Deliverable format (layered PSD/PNG parts with named pivot points for code rigging; transparent PNG at 2× target size).
  - Usage rights in writing (commercial, game distribution, modification and recolor allowed, promotional use).
  - Revision count.
  - **Ask the artist to state they use no generative AI.**
- **Explicitly buy "2차 가공 허용"** (permission to modify and recolor). The code pipeline depends on recoloring and splitting assets, and several 크몽 sellers forbid it by default.

### Gaps
- No sourced Skeb pricing or terms (Skeb is generally personal-use oriented; unverified). No 트위터/X commission rate survey. No data on creature-design-specific pricing.
- No source gives the typical roster size of indie or small gacha games.

## 5. Hybrid strategies from successful small-team / solo games

### Takeaway
Successful small teams pair **one consistent, limited style** with **one strong art lead or the developer's own simple drawings**, and lean on shaders, post-processing and readability rather than asset count. None of these games used a pile of mismatched sources.

### Cited Findings
- **Slay the Spire:** co-founder Casey Yano did most of the programming *and the original character art*. Mega Crit's newsletter: "Myself (Casey Yano) and Anthony were programming, designing, and arting." Card art (Anailis Dorta) and backgrounds (Bruce Brenneise) were credited separately. Early access was late 2017, full release January 2019. — [Mega Crit Neowsletter Sept 2024](https://megacrit.com/news/2024-09-09-neowsletter-issue-2/); [ModDB press kit](https://www.moddb.com/games/slay-the-spire/presskit); [Wikipedia](https://wikipedia.com/wiki/Slay_the_Spire)
- **Inscryption:** Daniel Mullins did "pretty much everything" except music, SFX and from-scratch 3D. He drew in Photoshop. The style came largely from shaders and post-processing. — [Game Developer](https://gamedeveloper.com/design/inscryption---daniel-mullins-games); [Thumbsticks](https://www.thumbsticks.com/magic-myst-pokemon-inspire-inscryption/)
- **Darkest Dungeon:** Chris Bourassa was described as the sole artist. He drew on Mignola, Davis, Bachalo and Kalvachev. Pooling blacks tie to the light mechanic, and empty eyes convey hopelessness. Going side-view "meant fewer assets" and kept the presentation character-centric. — [Kotaku: The Art of Darkest Dungeon](https://kotaku.com/the-art-of-darkest-dungeon-1798520287); [80.lv: Red Hook interview](https://80.lv/articles/red-hook-studios-talks-about-the-creation-of-darkest-dungeon); [GameSpot](https://www.gamespot.com:443/articles/the-gothic-sensibilities-of-darkest-dungeon/1100-6424880/)
- **Into the Breach:** Subset Games "sacrifice cool ideas for the sake of clarity every time". Its art is described as "relatively simple, even by pixel art standards", following FTL's style. — [Game Developer](https://gamedeveloper.com/design/-i-into-the-breach-i-dev-on-ui-design-sacrifice-cool-ideas-for-the-sake-of-clarity-every-time-); [Medium/GameTextures](https://medium.com/gametextures/subset-games-create-near-perfection-94688f04847)
- **Loop Hero:** the concept and art came from Four Quarters' main artist, Dmitry "Deceiver" Karimov. The style was retro SNES-like pixel art with minimalist overworld sprites and detailed battle sprites. — [Destructoid: making of Loop Hero](https://destructoid.com/?p=265570); [Shacknews review](https://www.shacknews.com/article/123099/loop-hero-review-happy-death-day)
- **Dead Cells:** a 3D-to-pixel pipeline to cover the lack of art bandwidth. — [80.lv](https://80.lv/articles/case-study-dead-cells-character-art-pipeline)
- **Rain World:** one person did art and programming, and code-driven animation carried a bestiary of 100+ creatures. — [Unity blog](https://unity.com/blog/exploring-procedural-design-rain-world)

### Inferences
- Pattern to copy:
  - (a) Pick one style that matches the theme and mechanics. Darkest Dungeon's blacks fit its light mechanic; for 마법산업기능사, "traditional magic" suggests 한지 (paper) and 먹 (ink), 부적 talismans, 단청 palettes, or woodblock-print (목판화) flatness.
  - (b) Keep hand-made art to a small core set.
  - (c) Let code do animation, VFX, recolors and post-processing.
  - (d) Put readability above detail.
- Slay the Spire and Inscryption show that **simple developer-drawn art with a strong frame and shader treatment can ship and sell**. The art did not have to be skilled, only consistent and owned. For a developer who can't draw at all, an equivalent is **tracing simple shapes in a vector tool, or cutting paper and scanning it**. Paper-cut or 종이공예 is a style where "non-artist" imperfection reads as charm, and it fits traditional magic.
- Balatro (LocalThunk, solo) is often cited as a solo-made pixel and shader-heavy hit. No source on its art process was retrieved, so treat it as unverified.

### Gaps
- No sourced details on Balatro's art process, Vampire Survivors' asset origins beyond the 2022 controversy, or Darkest Dungeon's animation tooling (Spine is commonly assumed; unverified).

## 6. Avoiding the "AI look": what signals it

### Takeaway
Players actively hunt for AI art and punish it (1666: Amsterdam, Crimson Desert cases). False accusations also happen. The best defense is **visible human provenance plus a style with deliberate, consistent constraints**. AI tends to produce glossy, over-rendered, inconsistent detail.

### Cited Findings
- Visual tells (odd hands, garbled text or signs, glossy textures) are "leads, not proof". Reliable checks are disclosures, dated developer statements, credits and file provenance. — [itechguides](https://www.itechguides.com/how-to-spot-ai-generated-assets-in-an-indie-game-a-careful-players-guide/)
- Steam requires disclosure of player-facing AI content. itch.io requires AI-asset tagging. — [itechguides](https://www.itechguides.com/how-to-spot-ai-generated-assets-in-an-indie-game-a-careful-players-guide/)
- Panache apologized for AI assets in the 1666: Amsterdam prologue and promised human replacements. — [Kotaku](https://kotaku.com/1666-amsterdam-apology-ai-assets-panache-genai-2000705525); [PC Gamer](https://www.pcgamer.com/software/ai/once-again-players-are-right-to-suspect-ai-was-used-in-a-game-once-again-a-dev-apologizes-for-using-ai-in-their-game/)
- Crimson Desert: players found apparently AI-generated paintings and textures. Replacing assets in a patch helped calm the backlash. — [Kotaku](https://kotaku.com/crimson-desert-painting-gen-ai-art-2000680661); [Creative Bloq](https://www.creativebloq.com/3d/video-game-design/how-should-game-developers-respond-to-ai-art-accusations)
- Publisher Hooded Horse banned gen-AI art. — [Kotaku](https://kotaku.com/hooded-horse-gen-ai-art-ban-4x-strategy-steam-2000658179)
- A developer was falsely accused of AI use. People sometimes read human-made polish as "telltale signs". — [Plagiarism Today](https://www.plagiarismtoday.com/2026/04/07/game-developer-falsely-accused-of-using-ai/)
- Opinion piece arguing AI game art is a "fool's errand". — [Creative Bloq](https://www.creativebloq.com/3d/video-game-design/why-ai-game-art-is-a-fools-errand)

### Inferences
- Common "AI look" signals (consensus from these articles plus general observation; not individually sourced): a uniform soft airbrushed glow on everything, over-detailed ornaments that don't resolve into real structure (buttons and straps that go nowhere), inconsistent design between images of the same character, a symmetric centered "splash" composition, an over-saturated rim light, painterly noise with no consistent brush logic, and a generic "fantasy mage girl" face.
- Styles that read as **clearly not AI** and suit a non-artist:
  - Flat, limited-palette shapes with hard edges, consistent across every asset.
  - Visible process texture: paper grain, ink bleed, misregistered print, cut-paper edges.
  - Pixel art at a strict low resolution.
  - Low-poly toon 3D with visible facets.
  - Strong graphic design rules (fixed line weight, fixed eye style, fixed proportions) applied 100% consistently.
  
  Code-drawn art is inherently provenance-safe: the SVG/shader source *is* the proof of human direction.
- For a developer who dislikes AI art, a devlog showing process (sketches, code, commissioned-artist credit) is cheap insurance against false accusations.

### Gaps
- No systematic study of which visual features players use to identify AI art. The list above is a synthesis.
