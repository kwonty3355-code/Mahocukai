# 집중 모드(9x9 전술 로그라이크) 중독성 설계 조사: 턴/런/메타/연출/함정

> 조사 범위: 전술·전략 로그라이크와 턴제 전투가 "턴 단위"와 "런 단위"로 왜 계속 하게 만드는지 정리하고, 마법사 집중 모드(9x9, 동시 턴, 다턴 채널링 대마법, 원소 타일 연쇄, 리와인드 주문, 20~30분 런)에 적용할 메커닉을 뽑는다.
> 네트워크 참고: WebFetch가 80.lv, gamedeveloper.com, tomsguide.com에서 DNS 차단됨(세션 허용 도메인 밖). 이 출처들은 검색 스니펫으로만 인용했다. 직접 원문을 확인하지 못한 항목은 그렇게 표시했다. 검색 약 26회.

## Q1. 턴 단위 훅: 결정 밀도, 콤보/연쇄 보상, 동시 해결에서의 예측과 심리전, 공정한 수읽기

### Takeaway
턴 단위 몰입은 (1) 결과가 결정론적이고 미리 보이는 완전정보 퍼즐(Into the Breach, Hoplite)이나 (2) 결정론적 해결 + 숨겨진 상대 선택(Diplomacy, Frozen Synapse, Pokémon)에서 나온다. 랜덤은 "결정 전"(입력)에 두고, 불확실성은 "상대 마음 읽기"에서만 나오게 할 때 공정하다고 느낀다. 콤보 보상은 "설계한 기계가 돌아가는 걸 지켜보는" 데서 나온다(Balatro).

### Cited Findings
**텔레그래프 / 완전정보 퍼즐**
- Into the Breach는 적의 다음 공격 페이즈 행동을 플레이어 턴 동안 UI로 전부 텔레그래프한다 — [GameSpot review](https://gamespot.com/reviews/into-the-breach-review-a-mechanized-masterpiece/1900-6416865/) (검색 스니펫)
- Subset은 "모든 죽음이 내 탓으로 느껴지게" 하려고 텔레그래프를 핵심 메커닉으로 삼았고 FTL보다 랜덤을 줄였다. 텔레그래프와 선택지에 확률이 없어서 게임이 퍼즐처럼 느껴진다 — [Game Developer: Road to the IGF Into the Breach](https://gamedeveloper.com/game-platforms/road-to-the-igf-subset-games-i-into-the-breach-i-) (스니펫, 원문 fetch 차단)
- 텔레그래프 아이디어는 공격을 예고하는 한 종류의 적에서 시작했고, 개발자는 공격을 문서화·예고하는 Rift Wizard도 영향으로 언급했다 — 같은 검색 묶음 [Game Developer](https://gamedeveloper.com/game-platforms/road-to-the-igf-subset-games-i-into-the-breach-i-), [PC Gamer: Rift Wizard](https://pcgamer.com/old-school-roguelike-rift-wizard-is-no-looker-but-its-a-tactical-slaughterfest-so-deep-you-could-drown) (스니펫, 어느 출처의 발언인지 정확히 분리 못 함)
- Into the Breach 개발자 UI 원칙: "멋진 아이디어는 명료성을 위해 매번 희생한다" — [Game Developer 기사 제목](https://gamedeveloper.com/design/-i-into-the-breach-i-dev-on-ui-design-sacrifice-cool-ideas-for-the-sake-of-clarity-every-time-) (본문 fetch 차단)
- 맵은 절차 생성이 아니라 손으로 설계했다. 재미없는 맵이 생성되지 않도록 통제하려는 이유 — [Into the Breach 리뷰/기사 검색 스니펫](https://gamedeveloper.com/design/reimagining-failure-in-strategy-game-design-in-i-into-the-breach-i-) (스니펫 출처 불명확)
- Hoplite: 플레이어가 움직이면 모든 적이 함께 움직인다. 레벨은 절차 생성이지만 각 층이 풀어야 할 퍼즐처럼 느껴지고, "좋은 상황이 한 수 만에 끔찍하게 무너질 수 있다" — [Pocket Gamer review](https://www.pocketgamer.com/hoplite/review/), [148apps](https://148apps.com/hoplite/hoplite-review), [Electron Dance](https://www.electrondance.com/hoplite/)
- Hoplite의 이동 자체가 공격이 되는 규칙(인접 적 사이를 지나가면 베기 등)이 "모든 이동이 결정"이 되게 만든다 — [AV Club](https://www.avclub.com/mobile-review-of-the-week-hoplite-iosandroid)
- Slay the Spire는 초기 "Next Turn" 시스템에서 적의 다음 행동을 아이콘으로 표시하는 "Intents" 시스템으로 바꿨다. 다수의 적이 있을 때 문제가 있었기 때문 — [Game Developer: Casey Yano breakdown](https://gamedeveloper.com/game-platforms/watch-casey-yano-break-down-the-design-decisions-behind-i-slay-the-spire-i-) (스니펫)

**동시 해결 / 심리전**
- Frozen Synapse: 양쪽이 다음 5초 동안의 명령을 내리고 "Priming"으로 확정하면 두 계획이 동시에 실행된다. 처음부터 동시 턴제로 구상했고, Laser Squad Nemesis에서 영향 — [StrategyCore interview](https://www.strategycore.co.uk/articles/interviews/frozen-synapse-interview/), [ModDB interview](https://www.moddb.com/features/weekly-interview-frozen-synapse)
- 개발자들은 동시 턴을 가장 어려운 기술 문제로 꼽았다. 후속 Tactics 인터뷰는 게임이 상대를 예측하고 속이게 만든다고 말한다 — [ModDB](https://www.moddb.com/features/weekly-interview-frozen-synapse), [Pocket Gamer: Frozen Synapse Tactics](https://www.pocketgamer.com/frozen-synapse-prime/frozen-synapse-tactics-team-talks-about-new-looks-multiplayer-and-some-huge-chan/)
- Diplomacy: 명령은 비밀리에 쓰고 동시에 공개된다. 해결은 주사위 없이 유닛 수만으로 결정되고 동률은 방어측 승리. 불확실성은 운이 아니라 상대 명령 추측에서 나온다. 불완전정보이므로 강한 정책은 혼합(랜덤화) 전략이 될 수 있다 — [Wikipedia: Diplomacy](https://www.wikipedia.org/wiki/Lepanto_opening), [Human-Level Performance in No-Press Diplomacy (arXiv)](https://ar5iv.labs.arxiv.org/html/2010.02923)
- Pokémon 경쟁전: 예측(prediction)은 가장 미묘한 기술이며, 가장 풍부한 심리전은 반복 대면에서 양쪽이 이전 선택으로 정보를 쌓을 때 생긴다 — [Smogon: The Art of Psychological Warfare](https://smogon.com/bw/articles/bw_psychological_warfare)
- Sucker Punch 같은 50/50을 유한 확률 게임으로 보고 혼합 전략 내시 균형을 푸는 모델 제시(모델일 뿐, 실증 아님) — [Julian Henry blog](https://juleshenry.github.io/blog/2026/03/04/Sucker-Punch-Nash-Equilibrium)
- 비판: 고수준에서 맞춤 50/50이 "운빨 게임"처럼 느껴진다는 커뮤니티 불만, 그리고 Pokémon이 전략 게임의 목표를 랜덤으로 훼손한다는 에세이 — [Smogon forum post](https://www.smogon.com/forums/goto/post?id=424724), [Quinnipiac essay (PDF)](https://mywebspace.quinnipiac.edu/tfoster/portfolio/writing/To%20Gamble%20or%20to%20Ponder_%20Contradictory%20Values%20in%20the%20Pokemon%20Series.pdf)
- 채널링/집중 기술의 직접 선례: Pokémon Focus Punch는 우선도 -3이며, 같은 턴에 기술에 의한 데미지를 받으면 실패한다. 일격필살기는 집중을 깨지 않고, 더 낮은 우선도의 공격도 깨지 않는다 — [Bulbapedia: Focus Punch](https://bulbapedia.bulbagarden.net/wiki/Focus_Punch_(move)), [PokemonDB](https://www.pokemondb.net/move/focus-punch)

**랜덤 배치 원칙**
- 입력 랜덤(결정 전: StS 드로우, ItB 맵)과 출력 랜덤(결정 후: XCOM 명중률) 구분. 입력 랜덤이 숙련자에게 더 잘 수용되고 기술을 더 쓰게 한다. 단, 출력 랜덤 전면 배제에는 반론도 있다 — [Loop & Ledger](https://loopandledger.beehiiv.com/p/input-vs-output-randomness), [Ezra Szanton: output randomness](https://ezraszanton.substack.com/p/output-randomness-game-designers), [Kotaku](https://kotaku.com/randomness-in-video-games-is-not-all-the-same-1841049263)
- Dicey Dungeons는 랜덤(주사위)을 숨기지 않고 "스포트라이트 아래" 둔다. 굴린 주사위를 장비 슬롯에 배치하는 매 턴 퍼즐 — [PC Gamer review](https://www.pcgamer.com/uk/dicey-dungeons-review/), [Game Developer: Witch Craft](https://gamedeveloper.com/design/witch-craft-how-i-dicey-dungeons-i-balances-chance-and-predictability) (스니펫)
- Wildfrost: 모든 유닛·적에 카운트다운 타이머가 보이고 카드를 낼 때마다 시간이 흐른다. 가장 낮은 타이머가 다음에 행동 — [Prima Games](https://primagames.com/featured/wildfrost-review-cold-and-calculating), [Softpedia](https://www.softpedia.com/reviews/games/pc/wildfrost-review-537186.shtml), [MCV/UK: When We Made Wildfrost](https://mcvuk.com/business-news/when-we-made-wildfrost/)

**콤보/연쇄 보상**
- LocalThunk: 결과를 미리 아는 것보다 루브 골드버그 기계를 세팅하고 돌아가는 걸 지켜볼 때 더 재밌다 — [GamesRadar](https://www.gamesradar.com/exploring-balatros-hype-its-ingenious-twists-on-poker-and-its-mysterious-creator) (스니펫)
- Balatro는 점수 미리보기를 의도적으로 넣지 않았다. 미리보기가 있으면 모든 패를 다 확인하느라 게임이 느려진다는 이유. "옵션을 넣으면 사람들은 그냥 누를 거고, 내가 만들고 싶은 경험을 못 한다"(Eggplant 팟캐스트 인용) — [GMTK: Balatro's 'Cursed' Design Problem](https://gmtk.substack.com/p/balatros-cursed-design-problem)
- Luck be a Landlord: 심볼과 아이템을 시너지시켜 연쇄 반응을 만드는 게 핵심(벌·꽃·벌집·곰 콤보 예). 개발자는 플레이어가 "불공평하다"고 느끼지 않게 설계하려 했다 — [Game Developer press release](https://www.gamedeveloper.com/press-release/roguelike-deckbuilder-luck-be-a-landlord-crushes-capitalism-on-consoles-feb-6-2025), [TrampolineTales Q&A](https://blog.trampolinetales.com/questions-and-danswers/)

### Inferences
- **"Commit 공개" 규칙 = 공정한 동시 턴.** 적은 이번 턴 행동을 이미 확정했고, 플레이어에겐 **턴 순서 + 적의 "성향/선택지 후보 2~3개"**까지만 보인다(Pokémon에서 상대 기술 4개를 아는 것과 같은 정보량). 완전히 숨기면 운으로, 완전히 보이면 ItB식 퍼즐이 된다. 중간 지점이 "1v1 심리전"이다. 권장 구현: 적별 **의도 후보 아이콘(예: 근접 / 원소탄 / 방어)** 을 보여주고 실제 선택은 해결 순간에 공개.
- **해결은 100% 결정론.** 데미지 굴림, 명중 확률은 없앤다(Diplomacy·ItB 원칙). 랜덤은 맵, 적 구성, 보상(입력 랜덤)에만. 그러면 진 판이 "내가 잘못 읽었다"로 귀결된다.
- **적 AI에 "반복 대면 정보"를 준다.** Smogon 지적처럼 심리전은 반복에서 깊어진다. 같은 적 타입이 "직전 턴에 플레이어가 채널링하면 다음 턴 돌진 확률↑" 같은 읽을 수 있는 성향을 가지면, 플레이어가 역으로 미끼(가짜 채널링, 이동)를 쓸 수 있다. 성향은 도감/관찰 로그로 해금.
- **채널링 = Focus Punch 구조.** "HP 데미지가 들어오면 취소"는 이미 검증된 심리전 장치다. 상대가 "지금 때려야 하나"를 고민하게 만든다. Bulbapedia의 예외 규칙(일격 처리, 더 느린 공격은 안 깨짐)처럼 **"채널을 깨는 것/안 깨는 것" 목록을 명확히**: 예) 실드·패밀리어 대신 맞기·원소 저항으로 HP 피해 0이면 유지. 이것이 패밀리어(방어형)의 존재 이유가 된다.
- **마법진 점진 형성 = 텔레그래프의 역방향.** 적이 플레이어에게 텔레그래프하듯, 플레이어 대마법도 타일에 서서히 그려져 적 AI가 피하거나 시전자를 노리게 한다. 적은 "진 밖으로 이동 vs 시전자 공격 vs 무시"의 3지선다를 미리 커밋해야 하므로, 매 턴 양방향 수읽기가 생긴다.
- **원소 연쇄는 "세팅→발동→감상" 3박자.** Balatro처럼 점수/피해 미리보기는 일부만(예: 직접 피해만 표시, 연쇄 결과는 미표시 또는 숙련도 등급으로 해금). 연쇄를 다 보여주면 분석 마비, 전혀 안 보여주면 "속았다" 감정. Hoplite처럼 **이동 자체가 원소 반응을 일으키는 규칙**(젖은 타일 통과 시 감전 등)으로 1행동당 결정 밀도를 높인다.
- **9x9 맵은 손으로 만든 템플릿 + 변형.** ItB처럼 재미없는 배치를 막기 위해 절차 생성은 템플릿 조합 단위로.

### Gaps
- Frozen Synapse 개발자가 "예측의 공정성"을 어떻게 다뤘는지 직접 발언은 못 찾음.
- Slay the Spire intents 도입 근거 원문(Ars Technica 인터뷰, GDC 영상) 본문 미확인. gamedeveloper.com fetch 차단.
- Sirlin의 Yomi(읽기 레이어) 원문을 검색으로 못 찾음(sirlin.net 직접 확인 필요).
- 동시 턴 PvE(적이 사전 커밋하는 싱글 게임)에 대한 학술/포스트모템 자료는 찾지 못함. 사례가 드문 설계 공간임.

## Q2. 런 단위 훅: 빌드 결정 순간, 희귀한 '깨진' 콤보, 보스/에스컬레이션, 보상 선택 주기, 엘리트 리스크, 런 다양성

### Takeaway
런의 재미는 "이번 판은 이걸로 간다"는 빌드 확정 순간과, 가끔 게임을 부수는 폭발 콤보에서 나온다. 성공한 게임들은 깨진 콤보를 고치기보다 허용하고(Balatro, Monster Train), 위험을 스스로 고르게 하며(StS 맵 경로/엘리트, Hades Heat), 매 판 "의미 있었다"는 느낌을 준다.

### Cited Findings
- Giovannetti: "Slay the Spire의 핵심 설계는 위험 대 보상." 맵 경로 선택이 추가적인 위험/보상과 계획 요소를 더한다 — [Game Developer: Road to the IGF Slay the Spire](https://www.gamedeveloper.com/disciplines/road-to-the-igf-mega-crit-games-i-slay-the-spire-i-) (스니펫)
- 엘리트를 "지금 다치고 유물을 얻는다"는 트레이드오프로 요약한 2차 분석(개발자 인용 아님) — [Game Mechanics: StS design tensions](https://saschb2b.github.io/game-mechanics/games/slay-the-spire/design-tensions)
- StS 2 개발 초기에 카드 풀을 줄이는 안을 시도했으나 플레이어가 "새로운 게 필요하다"며 싫어했다 — [PC Gamer](https://www.pcgamer.com/games/roguelike/slay-the-spire-2-dev-says-an-early-idea-was-to-actually-reduce-the-card-pool-but-players-hated-it-we-need-new-stuff/)
- Kasavin(Hades 2): 얼리 액세스 동안 계속 반복 개발한 이유 중 하나가 "기억에 남는 돌파구 런을 만드는 강력한 조합"을 허용하기 위해서. 인기 부운은 너프하지 않고 다른 곳으로 옮겼다 — [PC Gamer](https://www.pcgamer.com/games/roguelike/hades-2-lead-says-they-didnt-nerf-the-games-most-popular-boons-but-rather-found-new-homes-for-them-during-early-access-development), [GamesRadar](https://www.gamesradar.com/games/hades/hades-2-lead-says-the-best-boons-from-early-access-werent-killed-just-reskinned-we-think-its-important-not-to-be-too-precious-about-these-things)
- Supergiant 원칙: "모든 런이 의미 있어야 한다(every run should count)" — [GameDaily: Kasavin on Hades](https://www.gamedaily.biz/?p=588)
- Hades Extreme Measures: 보스 아레나·패턴을 바꾸거나 새 적을 추가(예: 1단계에서 메가이라전에 알렉토·티시포네 합류), 일부는 스토리에 반영 — [Fextralife/TV Tropes 등 검색 스니펫](https://www.tvtropes.org/pmwiki/pmwiki.php/YMMV/Hades)
- Monster Train: 고난도에서는 "가장 잔인하고 깨진 콤보"를 매번 찾아야 한다. 덱을 가볍게 깎아 최고 콤보가 매 턴 발동하도록 유도 — [Game Informer review](https://gameinformer.com/review/monster-train/monster-train-review-delightfully-devious-deckbuilding), [PC Gamer review](https://pcgamer.com/monster-train-review)
- Monster Train 2 리뷰: 1편 매력은 "얼마나 깨질 수 있느냐"였고 2편은 그게 약간 과하게 조정됨 — [Gaming Trend](https://gamingtrend.com/reviews/monster-train-2-review-a-monstrous-leap-forward-for-turn-based-deck-builders)
- Balatro: 조커로 한 핸드에 수백만~수십억 점. LocalThunk는 "나는 이 게임을 잘 못해서 그런 걸 보면 매우 놀란다" — [Yahoo/TechRadar 인터뷰](https://uk.news.yahoo.com/dont-play-poker-says-solo-212210290.html), [GMTK](https://gmtk.substack.com/p/balatros-cursed-design-problem)
- Rift Wizard(주문 구매+업그레이드 빌드 로그라이크): 주문 125~150개, 대부분 3~7개 업그레이드. RW2 패치에서 다른 학파 효과를 빌리는 업그레이드가 그 학파 태그를 얻게 해 교차 시너지를 열었다. 개발자는 런 다양성 때문에 밸런스 평가가 어렵다고 인정 — [Rift Wizard 2 Steam](https://store.steampowered.com/app/2058570/Rift_Wizard_2/), [SteamDB patch notes](https://steamdb.info/patchnotes/18785664), [Quarter to Three forum](https://forum.quartertothree.com/t/rift-wizard-a-combat-puzzle-build-optimization-roguelike/153359)
- Rift Wizard 커뮤니티: 상위 레벨이 "엄청 불공평"하다는 의견 vs "마법사가 OP이고 수십~수백 개 빌드가 가능"하다는 반론. 다중 면역 몬스터에 대한 불만 — [Steam discussion](https://steamcommunity.com/app/1271280/discussions/0/2949284554624531427)
- Dicey Dungeons: Witch 클래스는 Cavanagh가 말한 "장비 문제(equipment problem)"를 해결하려고 설계됨. 클래스마다 규칙이 다름(Robot은 동전 던지기 등) — [Game Developer: Witch Craft](https://gamedeveloper.com/design/witch-craft-how-i-dicey-dungeons-i-balances-chance-and-predictability), [Xbox Hub interview](https://www.thexboxhub.com/exclusive-interview-with-terry-cavanagh-mastermind-of-dicey-dungeons/)
- Tactical Breach Wizards: 턴 종료 전까지 모든 행동을 되돌릴 수 있는 리와인드. Francis는 "게임이 쉬워지고 행동의 긴장감이 줄어든다"고 인정했지만 실험을 장려하기 위해 유지. XCOM에서 임의로 보이는 이유로 대원을 잃는 좌절이 출발점. 리뷰는 리와인드가 난이도엔 거의 영향 없고 복잡성 학습을 돕는다고 평가 — [PC Gamer](https://www.pcgamer.com/watch-10-minutes-of-magical-cops-battling-drug-dealers-in-tactical-breach-wizards), [PC Gamer interview](https://www.pcgamer.com/uk/tactical-breach-wizards-interview/), [Shacknews review](https://shacknews.com/article/141015/tactical-breach-wizards-review-score?amphtml=1), [Game Informer preview](https://www.gameinformer.com/preview/2019/03/12/strategy-with-a-supernatural-twist)
- Into the Breach 리셋: 미션당 1회 턴 리셋. 섬을 완벽 클리어하면 추가 리셋 능력 파일럿 등 보상. 실패해도 생존 파일럿 1명을 다음 타임라인으로 이어간다 — [PC Gamer: biggest screw-ups](https://www.pcgamer.com/our-biggest-screw-ups-from-into-the-breach), [Kotaku review](https://kotaku.com/into-the-breach-the-kotaku-review-1823365331)

### Inferences
- **빌드 확정 순간을 런 1/3 지점(약 8~10분)에 보장.** 스크롤(주문) 해부로 얻는 "핵심 문양(glyph)"이 런 초반 2~3번째 보상에서 반드시 등장하도록 보정 → "이번 판은 번개-물 연쇄 빌드"가 정해짐. StS/Hades식 3지선다 보상을 2~3전투마다.
- **깨진 콤보는 고치지 말고 '희귀'하게.** Hades/Balatro/Monster Train 모두 OP 조합을 허용한다. 촉매(catalyst)×문양 조합 중 일부는 의도적 폭발 조합(예: 연쇄 반응 무한 증폭)으로 두되, 재료 희귀도로 등장 빈도를 조절. 너프가 필요하면 Hades 2처럼 "다른 곳으로 옮기기".
- **엘리트 = 맵에서 보이는 선택.** 9x9 전투 사이 노드 지도에 엘리트(희귀 스크롤 확정 드롭)·일반·휴식·촉매 상점을 표시. 엘리트를 고르면 HP를 깎고 해부용 고급 스크롤.
- **보스는 "대마법을 읽는" 상대.** 보스가 플레이어 채널링을 보고 우선도 높은 방해 공격을 커밋하는 성향, 또는 보스 자신이 다턴 채널링 대마법을 텔레그래프 → 플레이어가 그걸 끊어야 하는 역할 반전. Extreme Measures처럼 고난도에서 보스 패턴 자체가 바뀌는 단계 제공.
- **리와인드 주문 = ItB 리셋 + TBW 리와인드의 중간.** 무제한 undo는 긴장을 죽인다(Francis 본인 인정). 리와인드를 "주문 슬롯/마나를 소모하는 희소 자원"으로 두면 동시 턴 심리전에서 "잘못 읽었을 때 1회 보험"이 된다. 단, 동시 턴에선 되감기 후 적의 커밋을 다시 굴리지 말고 **적 커밋은 유지**(정보를 얻은 채 재시도하는 강력함 = 비용 높게) 또는 **적도 재커밋**(정보 이득 없음 = 비용 낮게) 중 하나를 명시. 랭크 점수 모드에선 리와인드 사용 시 배율 감소.
- **런 다양성 축:** 시작 "면허 등급별 마법사 타입"(Dicey Dungeons식 클래스별 규칙 변형), 지역별 원소 지형 템플릿, 보스 풀. Rift Wizard 교훈: 교차 학파 태그 같은 규칙으로 조합 수를 늘리되, 적 다중 면역처럼 빌드를 무효화하는 요소는 피한다.

### Gaps
- Monster Train(Shiny Shoe) 공식 포스트모템을 못 찾음.
- StS 엘리트 보상 수치 설계에 대한 개발자 원문 없음(GDC "Metrics Driven Design and Balance" 2019 영상 미확인).
- Hades 듀오 부운 희귀도 설계 의도에 대한 Kasavin 직접 발언은 못 찾음.

## Q3. 메타 훅: 해금 주기, 수집, 도전 사다리(Ascension, Stakes, Heat), 데일리 시드, 리더보드

### Takeaway
메타 진행의 정석은 "클리어할 때마다 한 단계씩 누적되는 난이도 사다리 + 고난도를 고를 이유가 되는 별도 보상"이다. Hades Heat는 난이도를 플레이어가 조합하는 메뉴로 만들었고(집중 모드의 도전 조건 메뉴와 거의 동일한 구조), Spelunky 데일리는 1회 시도·공유 시드로 사회적 경쟁을 만든다.

### Cited Findings
- StS Ascension: 클리어할 때마다 최대 20단계가 해금되며 각 단계는 누적 패널티(HP 감소, 적 공격 강화 등) — [Wikipedia: Slay the Spire](https://wikipedia.com/wiki/Slay_the_Spire) (스니펫)
- Ascension은 실력대별 난이도를 제공해 밸런스용 데이터 수집에도 기여했다. 주간 업데이트, Discord 피드백, 스트리머 관찰과 함께 밸런스를 만들었다 — [GDC 토크 요약(Glasp)](https://glasp.co/youtube/7rqfbvnO_H0), [Podwise 요약](https://podwise.ai/episodes/1459444) (2차 요약)
- Hades Pact of Punishment: 15개(헬 모드 16) 조건을 조합하며, 전부 적용 시 최대 63 Heat. Heat가 높을수록 보상이 커지지만 일정 이상에선 추가 보상이 없다 — [TheGamer](https://www.thegamer.com/hades-heat-pact-punishment-trivia/), [DualShockers](https://www.dualshockers.com/hades-beating-pact-of-punishment-32-heat-run-guide/)
- Kasavin: 조건으로 "게임이 어려워지는 방식을 정밀하게 조정"하게 한다. 세계관 안에서 설명되는 난이도 설정 — [GamesRadar hands-on](https://www.gamesradar.com/hands-on-with-hades-supergiants-devilishly-stylish-underworld-dungeon-crawler), [DualShockers](https://www.dualshockers.com/hades-beating-pact-of-punishment-32-heat-run-guide/)
- Kasavin: "로그라이크가 혹독하게 어렵다는 점은 아이러니하게도 반복 플레이성과 정면으로 충돌한다" — [Inverse: Hades God Mode interview](https://inverse.com/gaming/hades-god-mode-interview)
- 고난도 참여 유도를 위해 Pact 전용 보상(Weapon Aspects)을 새로 추가 — [PC Gamer: Early Access made Hades](https://www.pcgamer.com/uk/a-journey-through-early-access-helped-make-hades-a-masterpiece/)
- Hades 최고 난도 한 번 시도에 상위 플레이어가 최소 85시간을 쓴다는 보도 — [GamesRadar](https://www.gamesradar.com/hades-highest-difficulty-is-so-tough-that-top-players-say-a-single-attempt-takes-at-least-85-hours-to-pull-off)
- Balatro Stakes: 덱마다 별도 사다리, 각 단계가 규칙 1개씩 추가(Gold: 보상 축소, 점수 요구↑, 상점 가격↑, Eternal/Perishable 조커). 패치로 Gold Stake 시드가 "아직 Gold로 이기지 못한 전설 조커"를 먼저 주도록 바꿔 수집 완성 사냥을 지원. 플레이어들은 Gold Stake가 지루한 반복이라는 불만도 제기 — [Press Start patch news](https://press-start.com.au/news/2024/04/08/the-latest-balatro-update-has-some-massive-changes-that-should-make-winning-easier/), [Game Mechanics: Decks+Stakes](https://saschb2b.github.io/game-mechanics/games/balatro/decks-and-stakes), [Steam discussion](https://steamcommunity.com/app/2379780/discussions/0/4308327178396574730)
- Monster Train: Covenant 25단계, 2.0 패치에서 재작업 — [PC Gamer](https://www.pcgamer.com/monster-train-is-a-deckbuilder-that-tries-to-do-it-all-and-actually-pulls-it-off), [Medium: Going Rogue](https://medium.com/@gwenckatz/going-rogue-monster-train-de73fde50fea)
- Spelunky 데일리: 매일 하나의 동굴, 각자 리더보드(최종 돈과 도달 레벨 비교). 기원은 플레이어들이 "하룻밤에 한 번만" 도는 의식이었고 2013 Steam판에 공식 도입. 목적은 경쟁성과 사회성 — [Spelunky Wiki](https://spelunky.fandom.com/wiki/Daily_Challenge_Mode_(HD)), [Nifflas/Gute Fabrik](https://gutefabrik.com/redux-spelunky-glory-videogame-rituals-and-nifflas-miracle-run/), [PC Gamer](https://pcgamer.com/now-playing-the-spelunky-daily-challenge)
- Vampire Survivors: 업그레이드·새 캐릭터·비밀 해금으로 이루어진 진행 곡선이 매 판 도파민을 준다 — [GamesRadar](https://www.gamesradar.com/games/roguelike/on-steam-alone-i-probably-have-3-000-hours-nobody-loves-vampire-survivors-more-than-its-creator-who-once-thought-nobody-would-play-it-for-more-than-two-hours-and-ironically-says-short-games-rule)
- Into the Breach: 섬 퍼펙트 클리어, 타임 포드 회수로 새 파일럿 해금 — [PC Gamer](https://www.pcgamer.com/our-biggest-screw-ups-from-into-the-breach)

### Inferences
- **도전 조건 메뉴 = Heat 구조 그대로.** 조건마다 점수 배율을 주고 합산 "열기(Heat)" 값을 표시. 면허 승급 시험은 "최소 X 열기로 클리어"로 정의 → 면허 등급 = Ascension 사다리, 조건 메뉴 = 자유 조합. 두 시스템을 하나로 묶는다.
- **고난도 전용 보상 축 필요.** Hades가 Weapon Aspects를 추가한 이유처럼, 높은 배율 클리어에만 나오는 "희귀 스크롤 등급"(해부 시 고급 문양)을 둬야 점수 외 동기가 생긴다. 일정 이상에서 보상이 멈추는 Hades 방식으로 극단적 고통 강요를 피한다.
- **조건은 규칙 1개씩, 테마 있게.** Balatro Stakes처럼 각 조건이 한 줄짜리 규칙(예: "채널링 중 이동 불가", "리와인드 금지", "적 의도 후보 숨김", "원소 연쇄 1단계 감쇄"). 특히 "의도 후보 숨김"은 심리전 난이도를 직접 올리는 조건으로 좋다.
- **수집 완성 사냥 보조:** Balatro의 Gold Stake 시드 보정처럼 "아직 해부 안 한 스크롤 타입"을 우선 드롭.
- **데일리 시드:** 같은 맵·적 커밋 시드·보상 풀로 하루 1회 공식 기록(무제한 연습은 별도). 동시 턴에서 적 커밋까지 시드 고정이면 공정 비교 가능. 리더보드 지표: 점수 + 턴 수 + 대마법 피날레 수.

### Gaps
- 해금 주기(몇 판마다 새 콘텐츠)에 대한 정량 자료는 못 찾음.
- Balatro 데일리/챌린지 덱 설계 의도 자료 없음.
- 한국 커뮤니티의 메타 진행 선호 자료는 검색에서 나오지 않음(디시·인벤·루리웹 직접 검색 필요).

## Q4. 보상으로서의 연출: 큰 결과 애니메이션이 플레이를 늦추지 않으면서 도파민을 키우는 법

### Takeaway
Balatro의 불꽃 연출은 개발자가 가장 자랑하는 기능이고, 루브 골드버그식 점수 연쇄를 "지켜보는" 것이 재미의 핵심이다. 동시에 플레이어 대부분은 속도를 2~4배로 올리고, 스킵 요구와 16배속 모드까지 등장한다. 연출은 크되 가속 가능해야 한다.

### Cited Findings
- LocalThunk가 가장 자랑하는 기능은 핸드가 안테 점수 요구를 넘을 때 나오는 불꽃 효과이며, 하룻밤 만에 만들었다("인생에서 가장 생산적인 밤") — [GamesRadar](https://gamesradar.com/games/roguelike/after-winning-big-at-the-game-awards-and-taking-hours-of-our-time-in-2024-balatro-creator-reveals-their-most-productive-night-resulted-in-one-of-the-games-most-satisfying-features)
- Balatro 분석: "주스가 게임 그 자체다." 점수 이벤트마다 카드 애니메이션, 칩 카운터, 화면 흔들림이 겹친다(타이밍 수치는 저자 예시이므로 개발자 사실로 인용 불가) — [Blake Crosley design guide (한국어판)](https://blakecrosley.com/ko/guides/design/balatro)
- Balatro 게임 속도 설정: 애니메이션 재생 0.5x~4x(단일 블로그 출처). 플레이어들은 2x 또는 4x에 정착하며 "4x에 익숙해져 돌아갈 수 없다". 후반 런은 2x에도 느리다는 의견 — [Switchblade Gaming](https://www.switchbladegaming.com/game-settings/balatro-steam-deck-settings/), [Steam](https://steamcommunity.com/app/2379780/discussions/0/6426156954538745672/?l=dutch), [Nexus Mods](https://nexusmods.com/balatro/mods/48)
- 모드는 16배속과 애니메이션 제거, 클릭 유지 시 가속을 제공. 일부 플레이어는 점수 애니메이션 전체 스킵을 요청 — [GitHub: Saturn mod](https://github.com/oceanramen/saturn), [Steam](https://steamcommunity.com/app/2379780/discussions/0/604143740583453920)
- 많은 플레이어가 속도 설정 존재를 오래 몰랐다 — [itch.io comment](https://itch.io/post/10351702)
- Vampire Survivors: Galante는 도박 앱 경력이 게임 전체가 아니라 상자 열기 연출에만 영향을 줬다고 말함. The Conversation은 도박 심리가 전반에 적용됐다고 반대 해석 — [Game Developer](https://gamedeveloper.com/design/vampire-survivors-development-sounds-like-an-open-source-fueled-fever-dream) (스니펫); 반대: [The Conversation](https://theconversation.com/vampire-survivors-how-developers-used-gambling-psychology-to-create-a-bafta-winning-game-203613)
- Vampire Survivors는 적을 편하게 압도하는 구간과 더 큰 적 무리가 나오는 긴장 구간을 번갈아 둬서 유능감과 자율성을 준다 — [The Conversation](https://theconversation.com/vampire-survivors-how-developers-used-gambling-psychology-to-create-a-bafta-winning-game-203613)
- StS 2: Mega Crit은 승리 시 엔딩이 "더 화려하길" 원한다고 언급 — [PC Gamer](https://www.pcgamer.com/uk/games/card-games/slay-the-spire-2-ending/)
- Tactical Breach Wizards는 턴 종료를 실수로 하지 않도록 경고를 준다(긴 연출/확정 전 안전장치) — [Shacknews](https://shacknews.com/article/141015/tactical-breach-wizards-review-score?amphtml=1)

### Inferences
- **연출 3단 등급.** (1) 일반 주문: 0.3~0.6초, 항상 가속. (2) 원소 연쇄: 연쇄 단계마다 짧은 히트스톱 + 카운터 상승(Balatro식 누적 숫자), 단계가 많을수록 음높이 상승. (3) 최상위 대마법 컷신: 처음 2~3회는 풀 컷신, 이후는 기본 "축약 컷신"(2초) + 설정에서 "항상 풀/축약/스킵". 신규 스펠이나 신기록 피해일 땐 자동 풀 재생(희소성 유지).
- **채널링 = 연출의 빌드업.** 마법진이 여러 턴에 걸쳐 타일에 그려지는 것 자체가 Balatro 불꽃 전의 "점수 쌓이는 시간"이다. 진이 완성될수록 BGM 레이어 추가, 화면 가장자리 빛, 적 반응 대사. 발사 순간 보상이 커진다.
- **적 턴 해결은 동시 재생.** 동시 턴이므로 적 행동을 순서대로 다 보여줄 필요 없이 턴 순서대로 빠르게(겹쳐서) 재생 → 적 턴 지루함 문제 자체를 피할 수 있다. 게임 속도 1x/2x/4x + 클릭 유지 가속을 기본 제공하고 **설정을 처음부터 눈에 띄게** 노출(Balatro에서 많은 플레이어가 몰랐음).
- **런 종료 연출:** 점수·배율·피날레 대마법 하이라이트 리플레이(공유용 GIF) → Hades/StS2처럼 승리를 화려하게.

### Gaps
- Balatro 연출 타이밍의 개발자 공식 수치는 없음(분석 글의 수치는 저자 예시).
- Vampire Survivors 화면 채우기 연출과 성능/가독성 균형에 대한 개발자 자료 없음(80.lv 인터뷰 fetch 차단).

## Q5. 마라톤 플레이를 죽이는 함정: 느린 적 턴, 분석 마비, RNG 좌절, 스노우볼/승리 불가 상태

### Takeaway
주요 함정은 느린 적 턴(빨리감기는 애니메이션만 줄이고 AI 처리는 못 줄임), 너무 많은 정보로 인한 분석 마비(Balatro가 점수 미리보기를 뺀 이유), 결정 후 랜덤(XCOM식 명중률)에서 오는 "내 탓이 아닌" 패배, 빌드를 무효화하는 적, 그리고 너무 어려운 난이도가 반복 플레이성을 깎는 문제다.

### Cited Findings
- 빨리감기는 보통 애니메이션만 빠르게 하고 AI 계산은 못 줄여서, AI가 병목이면 소용없다 — [Steam: Baldur's Gate 3 discussion](https://steamcommunity.com/app/1086940/discussions/1/3109144584162296134)
- Tactics Ogre: Reborn 플레이어들은 내장 빨리감기를 켜도 너무 느리다며 외부 속도 모드를 겹쳐 쓴다 — [Steam discussion](https://steamcommunity.com/app/1451090/discussions/0/3712684644834475193)
- 인디 개발자: 적이 뭘 하는지 이해하기 어려워 적 턴을 일부러 느리게 했다. 다른 개발자: 유닛이 많으면 적 턴이 금방 지루해진다. 해결책으로 적 턴 가속 버튼, 속도 배율 옵션 제안 — [itch.io comment](https://itch.io/post/6221357), [itch.io comment](https://itch.io/post/6220905)
- Balatro는 점수 미리보기가 모든 패를 확인하게 만들어 게임을 느리게 한다는 이유로 미리보기를 제외 — [GMTK](https://gmtk.substack.com/p/balatros-cursed-design-problem)
- 입력 랜덤이 출력 랜덤보다 숙련자에게 잘 수용된다 — [Loop & Ledger](https://loopandledger.beehiiv.com/p/input-vs-output-randomness)
- Tactical Breach Wizards는 XCOM에서 임의처럼 느껴지는 이유로 대원을 잃는 좌절에서 출발했다 — [Wikipedia: Tactical Breach Wizards](https://en.wikipedia.org/wiki/Tactical_Breach_Wizards), [PC Gamer interview](https://www.pcgamer.com/uk/tactical-breach-wizards-interview/)
- Kasavin: 혹독한 난이도가 반복 플레이성과 충돌한다 — [Inverse](https://inverse.com/gaming/hades-god-mode-interview)
- Rift Wizard 플레이어: 다중 면역 몬스터가 빌드를 무효화한다는 불만, 상위 단계가 불공평하다는 의견 — [Steam discussion](https://steamcommunity.com/app/1271280/discussions/0/2949284554624531427)
- Balatro Gold Stake: 낮은 난이도에선 Ante 12+ 갈 런이 Ante 6을 못 넘는다는 불만, 상점 빌드에 필요한 골드를 굶긴다는 불만 — [Steam discussion](https://steamcommunity.com/app/2379780/discussions/0/4308327178396574730)
- Diplomacy 비판: 초반 탈락이 전쟁 게임 공통의 설계 결함 — [LessWrong](https://www.lesswrong.com/posts/jkf2YjuH8Z2E7hKBA/diplomacy-as-a-game-theory-laboratory)
- Hoplite: 한 수 만에 좋은 상황이 무너질 수 있다(긴장 원천이지만 동시에 좌절 원천) — [Pocket Gamer](https://www.pocketgamer.com/hoplite/review/)
- StS는 언제든 내려놓을 수 있는 짧은 판(30~40분) 구조가 중독성 루프와 맞물린다는 평 — [Pocket Tactics](https://www.pockettactics.com/roguelikes-changed-my-life) (검색 결과 요약 기반)
- Luck be a Landlord 개발자는 초반 혼란을 피하고 "불공평하다"는 생각이 들지 않게 설계하려 했다 — [TrampolineTales Q&A](https://blog.trampolinetales.com/questions-and-danswers/)

### Inferences
- **적 턴 시간 예산:** 동시 해결 재생은 기본 속도에서 턴당 2초 이하 목표, 4x에서 0.5초. AI는 플레이어 입력 대기 중에 이미 커밋을 계산해 두므로(사전 커밋 구조의 장점) 처리 지연이 없다.
- **분석 마비 방지:** (a) 적 의도 후보는 최대 2~3개, (b) 원소 연쇄 결과 미리보기는 "1단계까지만"(숙련도로 확장), (c) 9x9에 적 수 상한(예: 동시 6체), (d) 연습/일반 모드엔 턴 제한 없음, 데일리/고배율 조건엔 선택적 "턴 타이머" 조건(배율 보너스).
- **RNG 좌절 제거:** 명중·데미지 굴림 없음. 패배 원인은 "읽기 실패"나 "자원 관리 실패"로만. 적 커밋 성향은 관찰로 학습 가능해야 한다(완전 랜덤 50/50 금지, Pokémon 고수준 50/50 불만 참고).
- **채널링 취소 좌절 완화:** HP 데미지로 취소되면 소모 자원 일부 환급 또는 "잔여 마법진" 타일이 남아 원소 반응을 일으키게 해 완전한 손실을 피한다. 취소 위험이 있는 턴엔 진 테두리 경고(적이 시전자 사거리 안에 커밋 후보를 가짐).
- **스노우볼/승리 불가:** (a) 런 초반 3전투 안에 핵심 문양 보장, (b) 빌드 무효 면역 적 금지(면역 대신 "저항 + 다른 원소로 반응 시 해제"), (c) 진 런도 해부할 스크롤과 면허 경험치를 줘서 "every run should count"(Hades), (d) 데일리는 1회지만 일반 런은 즉시 재시작 버튼.
- **20~30분 런 + 중간 저장:** StS처럼 언제든 내려놓을 수 있게 전투 단위 자동 저장. "한 판만 더"는 짧고 끊기 쉬운 판에서 나온다.

### Gaps
- 전술 로그라이크 적 턴 길이와 이탈률을 직접 연결한 정량 데이터는 못 찾음(포럼 일화만 있음).
- 분석 마비에 대한 학술 연구는 검색 결과가 선택 과부하 일반론뿐이라 제외.
- 한국어 커뮤니티(디시, 인벤, 루리웹) 반응은 검색에서 거의 나오지 않음. 국내 커뮤니티를 직접 검색해야 함.
