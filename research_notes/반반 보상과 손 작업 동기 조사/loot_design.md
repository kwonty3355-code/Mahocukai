# 루트(드롭) 디자인: 등급 드롭의 흥분 요인, 루트 피로, 반반(half-attention) 모드 보상 설계

> 조사 범위: Diablo 2/3/4, Path of Exile(1/2), Borderlands 3/4, Grim Dawn, Destiny 2, Monster Hunter World/Wilds, Hades, PokeRogue, Last Epoch, 원신(성유물), 한국 커뮤니티(인벤).
> 조사 방법 메모: 이 세션에서는 WebFetch가 DNS 단계에서 막혔다. **news.blizzard.com, wiki.pokerogue.net, www.gamedeveloper.com 은 접근 불가(ENOTFOUND, 허용 도메인 밖)** 였고, 이후 모든 내용은 검색 결과 스니펫(검색엔진 요약)에 의존한다. 따라서 직접 인용문은 기사 원문 대조를 거치지 않았다. 2013~2014년 자료(D3 Loot 2.0)는 오래된 기사 기준이다.
> 게임 맥락: 「마법산업기능사」 — 두 기둥 (1) 마법진 자유 조립/설계, (2) 9x9 집중 전술 로그라이크. 스크롤은 주로 집중 모드에서. 반반 모드(방송 보며 탭 전진, 상자/제단/쓰러진 마법사 가방/룬석/저주 아이템, 발광색=등급)의 메인 보상 후보 = "촉매(catalyst)": 등급 + 랜덤 어픽스를 가진 마나 보석, 마법진/지팡이에 끼워 주문을 튜닝.

---

## 1. 드롭을 흥분되게 만드는 것은 무엇인가 (기대감, 등급 색, 희귀 어픽스, 빌드를 여는 유니크)

### Takeaway
흥분은 (a) 바닥에 떨어진 순간 "색/빛/소리"로 즉시 읽히는 등급 신호, (b) 예측 불가능한 보상(변동 비율 강화), (c) 높은 등급이 단순 수치가 아니라 "질적으로 다른 것(부품·효과·플레이 방식)"이라는 약속에서 나온다. 희소성이 이 셋의 전제 조건이며, 너무 자주 나오면 즉시 무너진다(BL3 → BL4 반성).

### Cited Findings
**등급 색 문법 / 즉시 판독**
- Borderlands: 루트 품질의 첫 지표는 등급이며, "무기에서 뿜어나오는 빛(glow)만 보고" 판단할 수 있다. 등급이 높을수록 강하고 얻기 어렵다는 관례. — [Twinfinite, BL3 tips](https://twinfinite.net/guides/borderlands-3-tips-and-tricks-for-beginners/2/); [Giant Bomb: Color Coded Loot](https://giantbomb.com/wiki/Concepts/Color_Coded_Loot)
- Borderlands에서 높은 등급은 색만 바뀐 게 아니라 "실제 총기 부품(더 좋은 총열·탄창)"이 바뀐다. — [Shamus Young, Borderlands: The Loot Lottery](https://www.shamusyoung.com/twentysidedtale/?p=15131)
- 제조사(브랜드)마다 성격이 다름(한 곳은 속성 피해, 다른 곳은 순수 피해를 대가로 무언가 희생) → "새 무기, 혹은 상자를 여는 순간이 더 흥분된다". 추가 총기는 "보기·느낌·소리·성능이 달라야" 한다는 Gearbox 측 언급. — [Shamus Young](https://www.shamusyoung.com/twentysidedtale/?p=15131); [Fandom: BL3 algorithm article](https://www.fandom.com/articles/borderlands-3-how-trusting-an-algorithm-accidentally-built-gearbox-an-empire)
- Hades 축복(Boon) 등급: Common(흰)·Rare(파랑)·Epic(보라)·Heroic(빨강) 4단계 + 별도 카테고리 Duo(두 신의 조합, 각 신의 특정 축복 보유가 전제)·Legendary(Hades 2에서는 주황). 출처마다 Legendary를 등급으로 셀지 여부가 엇갈림. — [DBLTAP Hades boon rarity](https://www.dbltap.com/posts/hades-boon-rarity-guide-to-standard-and-special-boons-01ek30qqebzt); [Prima: Heroic, Legendary, Duo](https://primagames.com/gaming/hades-guide-legendary-heroic-duo-boons)
- Diablo 2 하이룬: Zod 룬은 최상위 확률 약 1:2,987,183(헬 바알 퀘스트 드롭 기준). 스피드러너 Kano 방송 중 Zod가 떨어지자 채팅이 폭발("수년간 한 번도 못 봤다"), 그가 즉시 상점에 35,000골드에 팔아버리는 장면이 화제가 됨. — [GamesRadar](https://www.gamesradar.com/diablo-2-speedrun-gets-derailed-after-runner-finds-the-rpgs-uber-rare-1-in-3-million-drop-and-sells-it-immediately); [PC Gamer](https://pcgamer.com/diablo-2-speedrunner-effortlessly-trolls-audience-by-breezily-selling-ultra-rare-rune-its-taken-others-20-years-to-find)
- 드롭 사운드는 등급 판독의 일부: Path of Diablo 모드는 Fal 이상 룬, Vex 이상 룬에 각각 다른 드롭 사운드를 덮어씌움(루트 필터의 일부로 사운드가 커스터마이즈됨). 공식 D2 사운드 디자인 의도 자료는 찾지 못함. — [Path of Diablo wiki: Loot SFX](https://pathofdiablo.com/wiki/Loot_SFX)

**기대감 / 변동 보상 심리**
- 루트는 "변동 비율 강화 계획(variable ratio)"으로 설명되며, 심리학자들은 뇌가 무작위임에도 다음 보상을 끌어낼 방법을 계속 찾는다고 설명(슬롯머신에 비유). — [Game Informer: The Science Behind Why We Love Loot](https://gameinformer.com/b/features/archive/2015/10/23/the-science-behind-why-we-love-loot)
- 주의: GDC 2017 Ben Lewis-Evans(Epic)는 디자인 용어로서 "도파민"이 즐거움이 아니라 원함/강박(wanting)을 가리키는 경우가 많다고 경고. — [Shacknews GDC 2017](https://shacknews.com/article/99219/gdc-2017-epic-games-ben-lewis-evans-on-player-psychology-and-rewards)
- 희소성 자체가 가치: Tarkov처럼 잃을 수 있으면 루트가 귀해진다는 PC Gamer 논평; 같은 필자는 대작 게임에서 루트가 "패딩(pink slime)"으로 쓰인다고 비판. — [PC Gamer: stop adding loot](https://www.pcgamer.com/i-am-begging-you-to-stop-adding-loot-to-games-that-dont-need-it/)

**빌드를 여는 유니크 / 체이스 아이템**
- PoE 2 개발 측 발언(2차 보도): 유니크는 "이걸 얻으면 완전히 다른 방식으로 플레이할 수 있다"는 느낌이어야 하며, 쫓고 빌드를 짜는 대상. — [FRVR: PoE2 lead on D4 uniques](https://frvr.com/blog/news/path-of-exile-2-lead-discusses-diablo-4s-new-uniques-change/)
- PoE에서는 레어(랜덤 어픽스) 아이템이 대부분의 유니크보다 강할 수 있어 "기본 파워 = 레어, 유니크 = 틈새 체이스" 구조. — [Sportskeeda: PoE2 makes Rares count](https://sportskeeda.com/mmo/unlike-diablo-4-path-exile-2-makes-rares-count-post-unique-world)
- 플레이어 의견: "레어에선 굴릴 수 없는 모드"를 가진 유니크가 새로운 상호작용을 가능하게 함; 반면 "대부분의 아이템 효과는 하던 걸 더 잘하게 할 뿐, 하는 방식을 바꾸지 않는다"는 불만. 키스-커스(장단점) 유니크 선호. — [Steam PoE2 discussion](https://steamcommunity.com/app/2694490/discussions/0/830448456536498339); [Blizzard D3/D4 forum](https://us.forums.blizzard.com/en/d3/t/d4-feedback-it-all-seems-to-come-back-to-items/35144?page=2)
- Grim Dawn의 기묘한 효과를 가진 유니크(일명 "diarrhea pants")가 PoE2 유니크보다 기억에 남는다는 PC Gamer 칼럼. — [PC Gamer](https://pcgamer.com/games/rpg/unique-items-in-path-of-exile-2-need-to-take-more-inspiration-from-grim-dawns-diarrhea-pants)
- Grim Dawn "Monster Infrequent(MI)": 특정 몬스터만 확률적으로 떨어뜨리는 레어 등급 아이템, 항상 고정 기본 속성 + 일반 어픽스 추가. v1.1.7.0부터 모든 MI가 어픽스 2개로 드롭되도록 변경(빈 껍데기 드롭 제거). — [Grim Dawn: The Hunt for Loot](https://www.grimdawn.com/guide/items/the-hunt-for-loot); [Crate forum v1.1.7.0](https://forums.crateentertainment.com/t/grim-dawn-version-1-1-7-0/100418)
- Destiny "갓롤": 원하는 무기가 떨어져도 갓롤 근처에 가려면 여러 번 다시 얻어야 함 — 체이스가 "아이템 자체"가 아니라 "그 아이템의 특정 퍽 조합". — [GamesRadar: random perk rolls](https://gamesradar.com/destiny-2s-getting-rid-of-random-perk-rolls-for-loot-and-the-response-is-divided)

**PokeRogue 웨이브 보상 (사용자가 좋아한 경험)**
- wiki.pokerogue.net 접근 불가 → 커뮤니티 자료만 확보. 루크(Luck)는 웨이브 종료 상점 아이템의 "티어업" 확률을 올린다. 파티의 색이 다른 포켓몬이 Luck +1(흔한)/+2(레어)/+3(에픽), 최대 +14. — [r/pokerogue FAQ (미러)](https://pol1.lr.ggtyler.dev/r/pokerogue/comments/1czask1/faq_and_comprehensive_guide)
- 코드상 등급 이름(Common/Great/Ultra/Rogue/Master)과 티어 재배치 커밋 존재(예: Voucher Ultra→Great, Voucher Plus Master→Rogue). Master 풀 시작 가중치 108, Rogue 140이라는 레딧 댓글이 있으나 미검증. — [PokeRogue repo mirror commit](https://git.pikami.org/random-mirrors/pokerogue/src/commit/902d4df1a8f8f135769647431b75112eca5023f6); [r/pokerogue comment](https://pol1.lr.ggtyler.dev/r/pokerogue/comments/1czask1/faq_and_comprehensive_guide/l5zujih/?context=3)
- 초반 돈을 아껴 상점 리롤에 투자하라는 공략 → 리롤 자체가 "더 높은 등급을 보고 싶은" 루프의 일부. — [Gameleap PokeRogue tips](https://gameleap.com/articles/pok-rogue-classic-game-mode-tips-and-tricks)

### Inferences
- PokeRogue 보상이 좋은 이유는 (1) 매 웨이브 "선택지 3~4개"가 동시에 제시되어 등급 색 대비가 한눈에 보이고, (2) Luck로 티어업 확률이 올라가 "오늘은 운이 좋다"는 감각이 생기며, (3) 개수가 적어 하나하나 읽을 여유가 있는 것으로 보인다(구조는 게임 경험 기반 추론, 수치는 미검증). 반반 모드에 그대로 맞는 형태: "한 번에 하나, 빛 색으로 즉시 판독, 탭 한 번으로 개봉".
- 발광색=등급은 업계 표준 문법(흰→초록→파랑→보라→주황/금)이므로 플레이어 학습 비용이 0에 가깝다. 단 최상위 등급은 색 외에 "소리·연출(빛기둥, 화면 반짝임, 캐릭터 대사)"로 따로 구분해야 반쯤 보는 사람도 눈을 돌린다(D2 하이룬 사운드 사례). 애니 몰입 원칙상 최상위 등급은 사역마/주인공의 리액션 컷인으로 연출하는 것이 적합.
- "높은 등급 = 숫자만 큼"이면 흥분이 빨리 식는다. Borderlands처럼 등급이 "부품/형태"를 바꾸거나, PoE·Grim Dawn처럼 최상위는 "규칙을 바꾸는 효과"를 가져야 한다. 촉매 최상위 등급(예: 전설)은 마법진 규칙을 바꾸는 효과(예: 글리프 하나를 두 번 발동, 원소 변환, 사역마 연계 트리거)를 가져야 한다.

### Gaps
- PokeRogue 공식 위키(등급별 정확 가중치, 웨이브당 보상 수, 티어업 공식)는 wiki.pokerogue.net 차단으로 확인 불가. 소스코드(GitHub pagefaultgames/pokerogue `modifier-type.ts`)를 직접 읽는 것이 다음 단계.
- Hades 등급 설계에 대한 Greg Kasavin 등 개발자 의도 발언은 찾지 못함.
- D2 하이룬 드롭 사운드의 공식 설계 의도 자료 없음.

---

## 2. 루트 피로의 원인과 해결책

### Takeaway
피로의 주원인은 "양이 너무 많고, 대부분 쓸모없고, 정리하는 데 손이 간다"는 것. 대형 ARPG들은 반복적으로 같은 결론("Less but better")에 도달했다: D3 Loot 2.0(2014), D4 Season 4 Loot Reborn(2024), BL4의 BL3 반성(2025). 동시에 너무 짜면(BL4 출시 직후 레전더리 ~5%) 역풍이 나서 상향 패치가 필요했다 — 희소성과 체감 빈도의 균형이 핵심.

### Cited Findings
**D3 바닐라 → Loot 2.0**
- Jay Wilson(GDC 2013)은 경매장이 게임을 "really hurt"했다고 인정; 좋은 아이템을 싸게 사게 되어 "스스로 찾고 업그레이드하는 페이스"가 사라졌다는 취지(일본어 보도). — [PC Gamer](https://www.pcgamer.com/blizzard-we-acknowledge-diablo-iii-needs-to-be-a-better-game); [Game*Spark GDC13](https://www.gamespark.jp/article/2013/03/31/39897.html)
- Josh Mosqueira: 드롭되는 루트의 양을 줄이고 전체 품질을 높이며, 타깃 레전더리를 도입. — [Softpedia: Less Loot More Quality](https://games.softpedia.com/blog/Blizzard-Diablo-III-Will-Have-Less-Loot-More-Quality-Items-359006.shtml)
- Loot 2.0 = "훨씬 적지만 더 좋은 드롭", Smart Drop(발견한 클래스에 맞춘 주 스탯; 예: +힘 위자드 모자가 안 나옴). 약 15% 아이템은 스마트 드롭 비적용. — [Diablo Wiki: Loot 2.0](https://diablo.fandom.com/wiki/Loot_2.0); [Shacknews 2.0.1](https://shacknews.com/article/83266/diablo-3-patch-201-deploys-with-loot-20)
- Patrick Martens: 전체 드롭을 줄여 "가방 정리하러 마을에 자주 돌아가지 않아도 되게". Mosqueira: "신경 쓰지 않는 아이템으로 가방이 계속 차지 않게". — [GameSpot: Breathing Life Back Into D3](https://www.gamespot.com/articles/breathing-life-back-into-diablo-3-with-reaper-of-souls/1100-6417912/); [Escapist forum: Less, Better, More Epic](https://forums.escapistmagazine.com/threads/263663)
- 루트 시스템은 경매장의 "다리를 자르도록" 설계됨(외부 획득 경로가 자기 파밍의 의미를 없앰). — [PC Gamer: cut the legs out from the auction house](https://pcgamer.com/diablo-3-reaper-of-souls-loot-system-designed-to-cut-the-legs-out-from-the-auction-house)
- Kanai's Cube(2.3): 레전더리를 파괴해 그 "고유 능력"을 계정 공유 라이브러리에 영구 등록(값은 항상 최대치로 정규화), 무기/방어구/장신구 3슬롯에 장착. 중복/저롤 레전더리의 처리 경로(추출 or 분해 or 세트 변환/재련). — [GameSpot: reforge or extract](https://www.gamespot.com/articles/this-new-diablo-3-item-lets-you-reforge-legendarie/1100-6429260/); [Icy Veins Kanai's Cube](https://icy-veins.com/d3/kanais-cube-guide)

**D4 출시 ~ Season 4 Loot Reborn**
- 시즌 2 즈음 몬스터가 인벤토리가 감당 못할 만큼 떨어뜨려 "액션 RPG가 아니라 자원관리 게임" 같다는 불만; 레전더리 과잉에 "extremely frustrated". — [Yahoo Tech: D4 finally fixed loot](https://tech.yahoo.com/general/articles/diablo-4-finally-fixed-loot-220749248.html); [Dexerto: legendary loot overload](https://dexerto.com/diablo/diablo-4-legendary-loot-overload-2867981)
- Loot Reborn: 레어/레전더리 어픽스를 1개씩 줄이고 각 어픽스의 가치를 높임; Greater Affix(일반 어픽스의 1.5배)는 "찾을 수만 있고 인챈트로 만들 수 없음"; 설계 목표 "less loot but better loot"; 이터널 영역에도 영구 적용. (Greater Affix가 어디서 붙는지 출처 간 상이: Kotaku는 Ancestral 레전더리/유니크 한정, PTR 노트는 WT3/4 어픽스마다 확률) — [Dexerto 1.4.0](https://www.dexerto.com/diablo/diablo-4-patch-notes-1-4-0-itemization-crafting-2676111/); [Kotaku S4 patch notes](https://kotaku.com/diablo-4-d4-loot-reborn-season-4-patch-notes-1851453998); [Icy Veins preview](https://www.icy-veins.com/d4/news/diablo-4-season-4-loot-reborn-official-preview/)
- Tempering(어픽스 추가/리롤)은 실패 시 아이템을 "벽돌(brick)"로 만들 수 있어 애증 반응. — [Kotaku tempering guide](https://kotaku.com/diablo-4-tempering-guide-reroll-affix-brick-1851516526)
- (주의) news.blizzard.com 원문은 접근 불가로 직접 확인 못 함.

**Borderlands 3 → 4**
- Gearbox CD Graeme Timmins: BL3에서 레전더리가 너무 자주 떨어졌다고 인정, BL4에서 드롭률·루트 전면 개편; 레전더리를 "truly special events"로. — [GamesRadar](https://www.gamesradar.com/games/borderlands/with-borderlands-4-gearbox-says-weve-overhauled-our-drop-rates-and-loot-across-the-game-and-admits-that-in-borderlands-3-legendaries-dropped-too-often); [PC Gamer](https://www.pcgamer.com/games/fps/gearbox-is-making-rarity-matter-again-in-borderlands-4-after-dropping-too-many-legendaries-in-borderlands-3)
- 출시 후 레딧 유저 집계(보스 약 3,000킬) 레전더리 약 5% → "surprisingly stingy"; 2026-01-15 패치로 레전더리 드롭 확률 영구 상향; 클래스 모드는 현재 캐릭터용이 더 나오도록 조정(=스마트 드롭). — [Kotaku](https://kotaku.com/borderlands-4-legendary-drop-rate-bosses-patch-notes-nerf-2000634114); [Borderlands update notes](https://borderlands.2k.com/borderlands-4/update-notes/); [GamesRadar class mods](https://www.gamesradar.com/games/borderlands/gearbox-finally-fixes-the-most-frustrating-loot-in-borderlands-4-class-mods-have-been-adjusted-to-drop-more-for-your-current-character)

**루트 필터 / 정리 부담**
- PoE는 클라이언트에 아이템 필터 기능을 내장해 바닥 아이템 표시 방식을 사용자 정의하게 함; 그럼에도 "왜 서드파티 필터가 여전히 필수냐"는 공식 포럼 불만. — [PoE Wiki: Loot filter](https://pathofexile.fandom.com/wiki/Loot_filter); [PoE forum: Why are third-party loot filters still required?](https://www.pathofexile.com/forum/view-thread/3749954/page/2)
- D4의 루트 필터 부재가 PoE2로 번지는 문제 / Blizzard가 필터 요청에 응답. — [Dexerto](https://dexerto.com/diablo/diablo-4s-lack-of-loot-filter-issue-is-seeping-into-path-of-exile-2-3019238); [PCGamesN](https://www.pcgamesn.com/diablo-4/loot-filter)
- PoE Delve(Archnemesis 시기): 상자 수를 줄이되 각 상자가 흥미로운 보상을 낼 확률을 높임. — [Maxroll Delve farming guide](https://maxroll.gg/poe/currency/delve-farming-guide)

**과다 루트의 심리**
- "모든 게 특별하면 아무것도 특별하지 않다" — 과잉 보상 시 획득 단계의 의미가 사라지는 "심리적 루트 피로"(TRPG 맥락 블로그). — [LitRPG Reads](https://litrpgreads.com/blog/rpg/how-to-fix-over-looted-tabletop-campaigns-gold-gear-and-reward-inflation)
- 고정 드롭률은 불운한 꼬리를 무시 → 실패할 때마다 확률이 오르다 확정 후 리셋되는 "점증 드롭률(pity)" 제안(Game Developer 블로그, 스니펫). — [Game Developer: emotions and randomness](https://www.gamedeveloper.com/design/emotions-and-randomness-loot-drops) (원문 접근 불가)

**Destiny 2: 보관함 막힘**
- Bungie: Deepsight 무기("빨간 박스")가 너무 흔해 크래프팅 재료 추출을 기다리는 동안 보관함을 막는다고 인정 → 크래프팅 불가 무기는 Deepsight로 안 나오게 변경. 2018년엔 "Help, I'm drowning in Destiny 2 gear" 기사. — [PC Gamer: crafting grind](https://pcgamer.com/bungie-responds-to-player-complaints-over-weapon-crafting-grind); [Kotaku](https://kotaku.com/help-i-m-drowning-in-destiny-2-gear-1829277731)
- "Weightgate": 퍽 조합이 표기보다 드물다는 유저 의심 → Bungie가 처음엔 부정 후 코드 이슈 조사/인정. 체감 불운은 공정성 불신으로 번진다. — [Bungie Dev Insights](https://www.bungie.net/7/en/News/article/dev_insights_perk_rng_issue); [PC Gamer](https://www.pcgamer.com/games/fps/destiny-2-players-have-spent-the-last-week-trying-to-prove-that-weapon-perks-are-being-weighted-and-yeah-it-turns-out-that-weightgate-might-be-real-we-are-now-investigating-a-potential-issue-within-our-code)

### Inferences
- 반반 모드는 "주의를 덜 쓰는 모드"이므로 정리(분류·판매·분해) 부담이 집중 모드보다 훨씬 치명적이다. 원칙: **바닥에 떨어진 것을 플레이어가 수동으로 정리하는 단계가 없어야 한다.** 해결책 조합 제안:
  1) 오브젝트 수 자체를 적게(탭 몇십 번에 하나), 대신 각 개봉이 의미 있게(PoE Delve, D3 Loot 2.0).
  2) 자동 분해/자동 흡수: 기준 미달 촉매는 탐험 종료 시 "마나 가루"로 자동 환원(루트 필터의 기본값을 게임이 제공, 사용자가 임계 등급만 설정).
  3) 중복은 손실이 아니라 진척: Kanai's Cube처럼 "어픽스를 도감/연구서에 각인(최대치로 정규화)"하거나 동일 촉매 합성으로 등급 상승.
  4) 스마트 드롭: 현재 보유 사역마/자주 쓰는 원소 계열에 맞는 어픽스 가중(D3, BL4 클래스 모드).
  5) 불운 보정(pity): 일정 개봉 수마다 등급 하한 상승 — 반쯤 보는 플레이어에게도 "언젠가 온다"는 신뢰.
- 너무 짜도 실패(BL4 5%). 반반 모드에서는 "중간 등급 이상이 세션당 몇 번은 반드시 보인다" 정도의 체감 빈도를 설정하고, 최상위만 드물게.
- 드롭 확률은 공개하거나 최소한 "Luck/심도 보정"을 UI에 명시해 Weightgate류 불신을 예방.

### Gaps
- D3 GDC 2015(Mosqueira) 원문 상세, D4 Loot Reborn Blizzard 원문(news.blizzard.com 차단), Game Developer 원문(차단)은 직접 확인 못 함.
- "적정 드롭 빈도"에 대한 정량적 연구/데이터는 찾지 못함(대부분 의견·포럼 자료).

---

## 3. 랜덤 어픽스와 빌드 다양성 ("사람마다 다른 조합")

### Takeaway
랜덤 어픽스는 "같은 아이템이라도 내 것만의 조합"을 만들지만, 어픽스 풀이 넓고 대부분이 +1%류 소수치면 노이즈가 된다. 성공 사례는 (a) 어픽스 수를 줄이고 하나하나의 무게를 키움, (b) 희귀 어픽스(Greater, 특수 모드)를 "찾아야만" 얻게 함, (c) 리롤/크래프팅으로 불운을 부분 완화하되 완전 결정론은 피함. 크래프팅으로 갓롤을 보장하면 기대감이 줄어든다는 반발(Destiny)도 있다.

### Cited Findings
- D4 S4: 어픽스 수를 하나 줄이고 남은 어픽스를 더 가치 있게, Greater Affix는 인챈트 불가·발견 전용. — [Dexerto](https://www.dexerto.com/diablo/diablo-4-patch-notes-1-4-0-itemization-crafting-2676111/); [Kotaku](https://kotaku.com/diablo-4-d4-loot-reborn-season-4-patch-notes-1851453998)
- D4 유니크가 "스탯 변형 파밍"이 되어 "더는 유니크하지 않다"는 비판 → 테마에 맞는 고정 스탯 2개를 돌려주고, 나머지 랜덤 중 하나를 빌드에 맞게 교체 가능하게 조정(보도). D4는 파워가 아이템 어픽스보다 코덱스 아스펙트에서 나온다는 지적. — [FRVR](https://frvr.com/blog/news/path-of-exile-2-lead-discusses-diablo-4s-new-uniques-change/); [PC Gamer: next season weakness](https://www.pcgamer.com/games/rpg/diablo-4s-next-season-acknowledges-its-greatest-weakness-as-an-action-rpg-and-offers-a-solution-on-how-to-fix-it)
- 플레이어들은 "더 많은 유니크보다 빌드 자유"를 원하며, D3 룬처럼 스킬을 모듈식으로(더 깊게) 바꾸는 쪽을 선호(Icy Veins 독자 반응). — [Icy Veins](https://icy-veins.com/d4/news/players-want-more-build-freedom-in-diablo-4-not-more-uniques/)
- Last Epoch: 7개 희귀도; 유니크의 Legendary Potential(0~4) = 엑잘티드 아이템에서 옮길 수 있는 어픽스 수 → "유니크 효과 + 내가 고른 레어 어픽스" 결합. Forging Potential = 아이템의 크래프팅 내구도(수정할 때마다 소모). — [Gfinity crafting explained](https://www.gfinityesports.com/guides/last-epoch-crafting-explained); [AFKGaming LP](https://afkgaming.com/gaming/general/last-epoch-what-is-legendary-potential-and-how-does-it-affect-crafting); [Icy Veins LE crafting](https://www.icy-veins.com/last-epoch/crafting-guide)
- LE 유저 요청: 어픽스 희귀도를 필터와 아이템 위에 모두 표시해 달라(희귀 어픽스 롤의 가시성이 흥분의 조건). — [Last Epoch forum feedback](https://forum.lastepoch.com/t/last-epoch-feedback-suggestions/62345)
- PoE 화석(Delve): 레조네이터에 끼워 크래프팅 동작을 바꾸는 특수 화폐; 특정 모드 계열을 편향/차단; 화석 전용 모드가 존재했으나 대거 제거됨. — [PoE Wiki: Fossil](https://poewiki.net/wiki/Fossil); [List of fossil-only Delve modifiers](https://www.poewiki.net/wiki/List_of_fossil-only_Delve_modifiers)
- Destiny 2: 크래프팅으로 갓롤이 쉬워졌지만 "RNG 갓롤을 기대하는 매력이 사라진다"는 반대 의견 — 커뮤니티 분열. — [Sportskeeda: crafting vs RNG](https://sportskeeda.com/mmo/news-the-destiny-2-community-split-war-weapon-crafting-rng-drops); [GamesRadar](https://gamesradar.com/destiny-2s-getting-rid-of-random-perk-rolls-for-loot-and-the-response-is-divided)
- Monster Hunter World 장식주: 역템 조사에서 나오는 "가장 RNG가 심한" 엔드게임 → 1000개 넘게 녹여도 쓸 만한 게 안 나왔다는 유저 사례, Wilds 디렉터도 "빌드를 완성 못 하고 끝냈다". Wilds는 핵심 장식주 일부를 제작으로 보장(출처 간 상충: Mobalytics는 RNG 장식주로 회귀 + 제한적 직접 제작). 1.021 패치로 9성 역전 몬스터의 "빛나는 돌" 감정 → 랜덤 스킬·슬롯 호석 추가, 피티 시스템은 미확인. — [GameSkinny](https://www.gameskinny.com/tips/the-best-decoration-farms-in-monster-hunter-world/); [Steam MHW](https://steamcommunity.com/app/582010/discussions/0/2953789422391158001); [GamesRadar Wilds lead](https://gamesradar.com/games/monster-hunter/monster-hunter-wilds-lead-was-also-crushed-by-monster-hunter-worlds-brutal-decoration-rng-i-ended-up-finishing-the-game-without-having-completed-my-build); [GamingBolt 1.021](https://gamingbolt.com/monster-hunter-wilds-update-adds-random-talismans-new-9-star-tempered-monsters-and-more); [Mobalytics MH decorations](https://mobalytics.gg/mhw/guides/decorations-talismans)
- 원신 성유물: AR45+ 비경 레진 20당 5성 확정이지만 원하는 부옵 조합 확률이 낮음; 변환 시스템(쓸모없는 5성 3개 → 원하는 세트 1개)으로 우회. 해당 수치 출처는 충전 판매 사이트라 신뢰도 낮음. — [TheGamer: artifact farming resin problems](https://www.thegamer.com/genshin-impact-artifact-farming-resin-problems/); [Buffget 반환의 신상](https://buffget.com/ko/news/genshin-artifact-strongbox-guide-best-sets-and-tier-list)

### Inferences
- 촉매 어픽스 설계 원칙 제안:
  - 어픽스 수 = 등급에 비례하되 적게(일반 0~1, 고급 1, 희귀 2, 영웅 2+특수 1, 전설 고유효과+1). 각 어픽스는 "+3% 피해" 같은 소수치가 아니라 **마법진 문법에 개입하는 효과**(예: "화염 글리프 → 범위 +1칸", "회로 끝에 메아리 1회", "사역마 ○○ 계열과 연결 시 공명")로.
  - **사람마다 다른 조합**은 어픽스 × 사역마(가챠 팀) × 마법진 설계의 곱에서 나와야 한다. 즉 촉매 어픽스 일부를 "사역마 속성/종족 태그 조건부"로 만들면 같은 촉매도 팀에 따라 가치가 달라져 각자의 '보물'이 생긴다(Hades Duo가 두 신의 축복 보유를 조건으로 하는 구조와 유사).
  - Greater Affix처럼 "찾아야만 나오는" 상위판 어픽스를 두어, 반반 모드에서만 얻는 정당성 확보(D4 S4).
  - 불운 완화는 결정론적 제작이 아니라 **부분 리롤(한 줄만)** + **재사용 횟수 제한(Last Epoch Forging Potential)** 으로 → 크래프팅은 집중 모드/마법진 설계 쪽 재료와 연결하고, 기대감(Destiny 교훈)은 유지.
  - 어픽스 희귀도를 아이템 위에 표시(LE 유저 요청) → 등급 색 외에 "희귀 어픽스 별표"가 빛나면 두 번째 흥분 포인트.

### Gaps
- 어픽스 개수·가치 분포에 대한 정량 디자인 지침(예: "몇 개가 최적인가")은 공식 자료를 찾지 못함.
- Grim Dawn 어픽스 설계(접두/접미 희귀 어픽스 확률 "challenge layers")에 관한 개발자 원문은 포럼 언급만 확인.

---

## 4. 보조 모드는 "튜닝/수정자", 주 모드는 "새 능력" — 사례와 모드 구분 교훈

### Takeaway
여러 게임이 "새 능력(스킬/무기/캐릭터)"과 "그 능력을 조율하는 수정자(장식주·화석·성유물·카나이 능력·어픽스)"를 서로 다른 출처로 분리한다. 효과적인 경우 수정자 원천은 **고유한 이유로 반드시 가야 하는 곳**이 되지만, 수정자가 너무 RNG에 의존하면 그 모드는 "숙제/노동"이 된다(MHW 장식주, 원신 성유물). 또한 보조 모드 보상이 주 모드 보상을 대체하면 주 모드가 죽는다(D3 경매장 교훈).

### Cited Findings
- MHW: 무기/방어구(능력의 틀)는 몬스터 소재로 제작, 장식주(스킬 튜닝)는 역템 조사 보상의 "용결정/feystone"에서 → 별도 루프. 하지만 이 분리된 루프가 "가장 RNG 심한 엔드게임"이자 "anti-player"라는 평. — [RPGSite MHW endgame explained](https://www.rpgsite.net/feature/6775-monster-hunter-world-tempered-monsters-augmentation-decoration-farming-and-the-endgame-explained); [Nexus mod description](https://www.nexusmods.com/monsterhunterworld/mods/5255); [GameSkinny](https://www.gameskinny.com/tips/the-best-decoration-farms-in-monster-hunter-world/)
- PoE Delve: 리그 메커니즘(보조 콘텐츠)이 "크래프팅 수정자(화석/레조네이터)"를 공급하고 다른 플레이어가 그것을 소비하는 구조로 서술됨; 3.28에서는 다른 콘텐츠의 화석 보상을 제거하고 Delve 내 화석 확률을 높여 원천을 한 곳으로 집중. — [Maxroll Delve farming](https://maxroll.gg/poe/currency/delve-farming-guide); [Vocal: Best Delve fossils 3.26](https://vocal.media/gamers/what-are-the-best-delve-fossils-in-po-e-3-26)
- D3 Kanai's Cube: 새 능력(레전더리 고유 효과)을 수집 → 3슬롯으로 장착해 빌드 튜닝. 드롭 = 능력의 원천, 큐브 = 튜닝 레이어. — [GameSpot](https://www.gamespot.com/articles/this-new-diablo-3-item-lets-you-reforge-legendarie/1100-6429260/); [Maxroll Kanai's Cube](https://maxroll.gg/d3/resources/kanais-cube)
- D3 경매장: 외부 획득 경로가 자기 파밍의 페이스를 무너뜨려 게임을 해쳤다는 Jay Wilson의 회고 → 보조 경로가 주 보상을 대체하면 주 루프의 존재 이유가 사라짐. — [PC Gamer](https://www.pcgamer.com/blizzard-we-acknowledge-diablo-iii-needs-to-be-a-better-game); [PC Gamer: cut the legs out](https://pcgamer.com/diablo-3-reaper-of-souls-loot-system-designed-to-cut-the-legs-out-from-the-auction-house)
- 원신: 캐릭터(새 능력)는 가챠, 성유물(스탯·세트 튜닝)은 레진 소모 비경 → 분리 구조이나 성유물 파밍이 가장 많이 불평받는 루프 중 하나. — [TheGamer](https://www.thegamer.com/genshin-impact-artifact-farming-resin-problems/)
- Last Epoch: 유니크(능력) 위에 엑잘티드 어픽스(튜닝)를 Legendary Potential만큼 옮기는 "결합" 시스템 — 두 출처의 보상이 하나의 결과물로 합쳐짐. — [Gfinity](https://www.gfinityesports.com/guides/last-epoch-crafting-explained)

### Inferences
- 「마법산업기능사」에 맞춘 역할 분리안:
  - 집중 모드(9x9) = **새 글리프/새 주문(스크롤)** = "할 수 있는 것"을 늘림. 반반 모드 = **촉매** = "이미 할 수 있는 것을 나만의 방식으로 비틂". 이 구분은 MHW(무기 vs 장식주), D3(레전더리 vs 큐브), 원신(캐릭터 vs 성유물)과 같은 계열.
  - 반반 모드에서 스크롤이 절대 나오지 않을 필요는 없다. "스크롤 조각/미완성 스크롤(빈 양피지, 잉크)"처럼 **손 작업(필사) 재료**나 **이미 해금한 글리프의 강화판**만 나오게 해 집중 모드의 새 능력 독점을 지킨다(경매장 교훈: 주 보상의 대체 경로를 만들지 말 것).
  - 반대로 촉매는 반반 모드에서만(또는 거의 반반 모드에서만) 나오게 하여 "반반 모드의 고유한 must-do 이유"를 만든다(PoE 3.28이 화석 원천을 Delve로 집중시킨 것과 같은 방향).
  - MHW/원신의 실패를 피하려면 촉매는 "완벽한 롤"을 요구하지 않는 설계여야 한다: 쓸 만한 범위가 넓고, 최상위 롤은 자랑거리(체이스)지 필수 조건이 아님. 9x9 전투 난이도는 중간 롤 촉매로 충분히 깰 수 있게.
  - 두 기둥에 모두 먹이기: 촉매는 (1) 마법진 설계의 슬롯(설계 퍼즐에 새 변수), (2) 9x9 전투의 성능 → 반반 모드가 두 기둥 모두를 살찌운다. 손 작업(필사)과의 연결: 촉매를 마법진에 "봉입"하는 미니 의식(손으로 원을 따라 그리기)을 두면 획득 → 사용 사이에 애착이 생김.

### Gaps
- "보조 모드는 수정자, 주 모드는 능력"을 명시적으로 설계 원칙으로 말한 개발자 인터뷰는 찾지 못함(위 사례는 구조적 관찰).
- Warframe(모드 vs 프레임), Honkai: Star Rail(유물) 등 추가 사례는 이번 조사 범위에서 검색하지 못함.

---

## 5. 커뮤니티 정서 (Reddit/포럼/한국 커뮤니티): 흥분 vs 피로

### Takeaway
영어권·한국 모두 공통 불만은 "운 의존이 지나침", "힘들게 맞춰도 옆그레이드", "확인/정리에 시간이 다 감". 흥분의 기억은 "드물고 확실히 다른 것"이 떨어진 순간(D2 Zod, 갓롤)에 몰린다. 한국 커뮤니티(디시/루리웹) 원문은 이번 검색으로 거의 확보하지 못했다.

### Cited Findings
- 인벤 D4 유저(2023.6): 100렙까지 쓸 만한 템이 하나 나와 69렙 반지에 끼운 채 못 바꾸고 있다 — 운이 지나치게 작용; 레어 확인에 시간을 다 날리고 만렙쯤엔 재료가 바닥에 떨어져 상점에 팔아야 함; 마부를 돌려 비슷하게 맞추면 "거의 옆그레이드". — [인벤 디아블로4 게시판](https://www.inven.co.kr/board/diablo4/6025/262703)
- Blizzard 포럼 "Bad RNG Ruined D4" 스레드. — [Blizzard forums](https://us.forums.blizzard.com/en/d4/t/bad-rng-ruined-d4/165632?page=2)
- D4 플레이어 "extremely frustrated" — 레전더리 과잉. — [Dexerto](https://dexerto.com/diablo/diablo-4-legendary-loot-overload-2867981)
- MHW: 1000+ 용골 녹여도 소득 없음, "RNG가 딜브레이커". — [Steam MHW discussion](https://steamcommunity.com/app/582010/discussions/0/2953789422391158001)
- Destiny: 불운 체감이 "확률 조작 음모론"으로 번졌고 실제 코드 이슈로 일부 확인. — [GamesRadar](https://gamesradar.com/games/destiny/denied-their-crafting-fix-destiny-2-players-got-so-unlucky-that-they-started-conspiracy-theories-about-the-mmos-drop-rates-and-got-so-loud-bungie-had-to-correct-them)
- "common/rare/epic/legendary 등급 체계에 질렸다"는 칼럼 — 등급 라벨이 의미 있는 디자인을 대신하는 지름길이 될 수 있음. — [Gfinity: tired of common rare epic legendary](https://www.gfinityesports.com/article/im-tired-of-common-rare-epic-and-legendary-loot-system)
- D2 Zod 드롭에 방송 채팅 폭발 — "드물고 확실한" 최상위 드롭이 **보는 사람까지** 흥분시킨다(반반 모드 = 방송 보며 하는 모드와 정서적으로 연결됨). — [GamesRadar](https://www.gamesradar.com/diablo-2-speedrun-gets-derailed-after-runner-finds-the-rpgs-uber-rare-1-in-3-million-drop-and-sells-it-immediately)
- PokeRogue 한국 커뮤니티: 인벤에 '포케로그 파티' 게시판 존재만 확인, 보상 등급 관련 감상 글은 찾지 못함. — [인벤 party 게시판](https://www.inven.co.kr/board/party/6316/1523)

### Inferences
- 반반 모드 유저는 화면을 계속 보지 않으므로 "옆그레이드 판단"을 요구하는 비교 UI는 피로 요인. 촉매는 **비교가 아니라 수집/적용 제안**으로: "이 촉매는 ○○ 마법진에 끼우면 +효과" 같은 자동 추천 배지.
- 최상위 등급 드롭은 공유 가능한 순간(스크린샷/짧은 연출)으로 만들면 방송·SNS 문화와 맞물린다.

### Gaps
- 디시인사이드·루리웹의 루트 피로/득템 쾌감 관련 원문은 검색 결과에 나오지 않아 확보 실패(직접 사이트 검색 필요).
- Reddit 원문은 미러 사이트(ggtyler) 스니펫으로만 확인.

---

## 6. 종합: 반반 모드 메인 보상 "촉매" 설계에 대한 실행 가능한 교훈

### Takeaway
"적게, 즉시 읽히고, 각자 다르게, 정리 노동 없이"가 핵심. 촉매는 집중 모드의 스크롤(새 능력)을 침범하지 않는 "튜닝 레이어"이자 반반 모드의 독점 보상으로 두고, 최상위 등급만 규칙을 바꾸는 체이스로 설계한다.

### Cited Findings
- Less but better: D3 Loot 2.0, D4 S4, BL4, PoE Delve 상자 축소 — [Diablo Wiki](https://diablo.fandom.com/wiki/Loot_2.0); [Dexerto](https://www.dexerto.com/diablo/diablo-4-patch-notes-1-4-0-itemization-crafting-2676111/); [PC Gamer BL4](https://www.pcgamer.com/games/fps/gearbox-is-making-rarity-matter-again-in-borderlands-4-after-dropping-too-many-legendaries-in-borderlands-3); [Maxroll Delve](https://maxroll.gg/poe/currency/delve-farming-guide)
- 너무 짜면 역풍 → 상향 패치(BL4 2026-01) — [Borderlands update notes](https://borderlands.2k.com/borderlands-4/update-notes/)
- 스마트 드롭(현재 캐릭터에 맞게) — [Shacknews](https://shacknews.com/article/83266/diablo-3-patch-201-deploys-with-loot-20); [GamesRadar BL4 class mods](https://www.gamesradar.com/games/borderlands/gearbox-finally-fixes-the-most-frustrating-loot-in-borderlands-4-class-mods-have-been-adjusted-to-drop-more-for-your-current-character)
- 중복의 영구 진척화(Kanai's Cube 추출, 최대치 정규화) — [Icy Veins](https://icy-veins.com/d3/kanais-cube-guide)
- 발견 전용 상위 어픽스(Greater Affix) — [Kotaku](https://kotaku.com/diablo-4-d4-loot-reborn-season-4-patch-notes-1851453998)
- 빌드를 바꾸는 유니크 — [FRVR](https://frvr.com/blog/news/path-of-exile-2-lead-discusses-diablo-4s-new-uniques-change/)
- 빈 껍데기 드롭 제거(Grim Dawn MI 2어픽스 보장) — [Crate forum](https://forums.crateentertainment.com/t/grim-dawn-version-1-1-7-0/100418)
- 불운 보정(점증 확률) — [Game Developer](https://www.gamedeveloper.com/design/emotions-and-randomness-loot-drops) (스니펫)

### Inferences (설계 제안 — 출처 기반 추론)
1. **등급 색 문법**: 흰(평범)→초록→파랑→보라→주황(전설)→(무지개/별빛: 극히 드문 "봉인 촉매"). 오브젝트(상자·제단·가방·룬석)의 발광이 곧 내부 최고 등급의 힌트. 저주 아이템은 검붉은 빛 + 리스크/리턴(키스-커스 유니크 계열).
2. **개봉 리듬**: 탭 전진 N회마다 오브젝트 1개(PokeRogue식 "한 웨이브 한 보상"). 오브젝트 하나가 최대 1~3개 촉매만, 대부분은 1개. 심도가 깊을수록 몬스터 강해지고 등급 하한·Luck 상승.
3. **어픽스는 적고 무겁게**: 등급별 어픽스 수 제한, 소수점 % 금지, 마법진 문법에 개입하는 효과 위주. 최상위는 "규칙을 바꾸는" 고유 효과.
4. **사역마 조건부 어픽스**: "○○ 계열 사역마가 팀에 있으면 공명" → 가챠 팀 구성 × 촉매 × 마법진의 곱으로 사람마다 다른 콤보.
5. **정리 노동 0**: 세션 종료 시 자동 분류(임계 등급 미만 자동 환원 → 마나 가루), 중복은 "촉매 도감" 각인(최대치 정규화)으로 영구 진척, 가루는 부분 리롤 재료.
6. **불운 보정 + 투명성**: 개봉 수 기반 등급 하한 상승을 UI에 표시(예: 마나 게이지가 차오르면 다음 오브젝트는 파랑 이상 확정).
7. **모드 경계**: 반반 모드는 새 글리프/스크롤을 주지 않음(혹은 필사 재료만) → 집중 모드의 "새 능력" 독점 유지. 촉매는 반반 모드 독점 → 반반 모드의 must-do 이유.
8. **애니 몰입**: 최상위 드롭 시 사역마 리액션 컷인·주인공 대사·빛기둥 연출, 공유하기 좋은 한 장면.
9. **완벽 롤 비강제**: 9x9 전투 난이도는 중간 롤 촉매로 공략 가능하게 — 최상위 롤은 자랑/체이스로만(MHW·원신의 노동화 회피).

### Gaps
- 반반(idle/half-attention) 장르에서의 적정 개봉 빈도·세션 길이에 대한 데이터는 이번 조사 범위 밖(별도 조사 권장).
- PokeRogue 정확 확률 테이블은 소스코드 확인 필요.
