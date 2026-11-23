# 빠릿빠릿한 그리드 전술 전투 설계 조사 (9x9 마법사 + 사역마 로그라이크)

> 조사 방법 메모: 이 세션은 외부 페이지 직접 열람(WebFetch)이 네트워크 정책으로 막혀 있었음. 확인된 차단 호스트: gamedeveloper.com, 80.lv, kotaku.com, pentadact.wordpress.com (모두 `getaddrinfo ENOTFOUND`). 따라서 아래 인용은 **웹 검색 결과 요약/스니펫 기준**이며, 원문 전체를 읽지 못함. 특히 GDC "Into the Breach Design Postmortem"(Matthew Davis, 2019)의 실제 발표 내용(슬라이드/영상)은 확인하지 못함. 정확한 인용이 필요하면 해당 호스트 허용 후 재확인 필요.
> 대상 게임 전제: 9x9 그리드, 마법사 1 + 사역마 1~3, 다턴 채널링 대마법, 적 의도 부분 공개(누구를 노리는지만), 원소 타일 반응 연쇄, 20~30분 런, 과장된 연출.

## Q1. Into the Breach는 왜 빠르고 퍼즐이 선명한가 (완전정보·의도 공개·작은 보드·밀기)

### Takeaway
ItB의 속도감은 "적이 다음 턴에 할 일을 정확히 보여 주고 → 플레이어가 그걸 비틀게 하는" 구조, 아주 작은 보드(8x8), 3유닛, 짧은 턴 제한(대략 4~6턴), 무작위 명중 제거에서 나온다. 개발진은 "멋진 아이디어보다 명료함"을 원칙으로 삼았고, 계획의 대부분을 잘라내는 과정에서 게임이 완성됐다.

### Cited Findings
- 턴 제한을 둔 목적은 전투를 짧게 유지하기 위함이었고, Vek(적)의 움직임을 텔레그래프한 것이 템포를 더 빠르게 하는 데 도움이 됐다는 서술 — [Wikipedia: Into the Breach](https://en.wikipedia.org/wiki/Into_the_Breach)
- 전장은 8x8 칸, 체스와 자주 비교됨(위치 장악) — [Wikipedia](https://en.wikipedia.org/wiki/Into_the_Breach)
- Justin Ma(2018, RPS 인터뷰 인용): "As a game design principle, we would sacrifice cool ideas for the sake of clarity every time." — [Game Developer 기사(검색 요약)](https://gamedeveloper.com/design/-i-into-the-breach-i-dev-on-ui-design-sacrifice-cool-ideas-for-the-sake-of-clarity-every-time-) (원문 열람 차단)
- GDC 2019 Kotaku 인터뷰에서 Davis와 Ma는 "eureka moment에 가장 가까웠던 것"이 계획했던 것의 60%를 잘라낸 순간이라고 설명 — [Kotaku(검색 요약)](https://kotaku.com/the-creators-of-into-the-breach-came-very-close-to-givi-1833498295) (원문 차단)
- 초기 버전에는 도시 건설과 테크 트리가 있었음(이후 삭제) — [PC Gamer](https://www.pcgamer.com/au/into-the-breach-originally-had-city-building-and-tech-trees-creators-reveal/)
- GDC 발표는 "designing with constraints, UI-guided design, strategy layer development, final balancing", 어떤 기능을 자를지, 다른 게임의 디자인을 어떻게 "훔칠지", 난이도 결정 등을 다룸; 개발 기간 약 4년 — [Class Central(GDC 영상 소개)](https://www.classcentral.com/course/youtube-into-the-breach-design-postmortem-158085), [GDC Vault](https://gdcvault.com/play/1026333/-Into-the-Breach-Design)
- Ma: "all enemy attacks are telegraphed"가 "The big point of how the gameplay works"; 공격 옵션에 무작위 확률이 없으니 퍼즐처럼 느껴진다 — [Road to the IGF (Game Developer, 검색 요약)](https://www.gamedeveloper.com/game-platforms/road-to-the-igf-subset-games-i-into-the-breach-i-)
- 텔레그래프가 있어도 긴장은 남음: 적 공격을 피하면 그 공격이 더 중요한 건물에 맞을 수 있음 — [Game Developer "Reimagining failure"(검색 요약)](https://gamedeveloper.com/design/reimagining-failure-in-strategy-game-design-in-i-into-the-breach-i-)
- 이벤트가 일어날 순서를 확인할 수 있어서, 환경 위험이 Vek의 공격 전에 그 Vek를 죽이는지 볼 수 있음 — [Kotaku 리뷰(검색 요약)](https://kotaku.com/into-the-breach-the-kotaku-review-1823365331)
- 공격을 조준하면 대상 Vek의 HP와 예상 피해가 깜빡이며 표시되는 결과 미리보기 UI — [Sevastromo 리뷰](https://www.sevastromo.com/into-the-breach/)
- 인벤 리뷰: "필드는 스크롤이 없어도 한눈에 들어올 정도로 좁고, 조작할 수 있는 유닛은 단 세 개로 한정된다. 또한 턴 제한도 6턴 정도로 짧다." 게임을 "묘수풀이"로 규정 — [인벤 리뷰 "8X8 묘수풀이의 매력"](https://www.inven.co.kr/webzine/news/?news=195219)
- 한국어 스팀 평가 "매우 긍정적"(425개 중 95%, 검색 시점) — [Steam 한국어 페이지](https://store.steampowered.com/app/590380/Into_the_Breach/?l=koreana)

### Inferences
- 9x9는 ItB(8x8)보다 한 줄 크지만 여전히 "스크롤 없이 한눈에" 범위. 화면 한 장에 전장 전체 + 모든 의도 표시가 들어가도록 카메라/UI를 고정하는 것이 템포의 전제 조건.
- 조작 유닛 수(마법사 1 + 사역마 1~3)는 ItB의 3유닛과 거의 같음 → 턴당 입력 수를 비슷하게 유지할 수 있음. 단 "수동적 사역마"는 입력을 요구하지 않게 하여 턴당 결정 수를 3~4개 이하로 유지.
- 짧은 턴 제한(또는 "N턴 버티면 승리/대마법 완성")은 전투 길이 상한을 만들어 20~30분 런에 맞추기 쉬움. 채널링 대마법을 "버티기 시계" 역할로 쓰면 ItB의 턴 제한과 같은 기능을 함.
- "60% 잘라내기", "명료함을 위해 멋진 아이디어 희생" → 원소 반응 수를 제한하는 근거로 쓸 수 있음.

### Gaps
- GDC 포스트모템의 구체 내용(밀기/당기기를 핵심으로 정한 이유, 보드 크기 결정 과정)은 영상/원문 접근 불가로 미확인.
- 밀기(push/pull)가 왜 핵심 동사가 되었는지에 대한 개발자 1차 발언은 찾지 못함.

## Q2. 기타 레퍼런스 게임에서 얻을 교훈 (Hoplite, Slay the Spire, Tactical Breach Wizards, Wildfrost, Shogun Showdown, Mario+Rabbids, XCOM, DOS2, Genshin, FFT)

### Takeaway
"빠르고 선명한" 전술 게임들의 공통점은 (1) 결정적(deterministic)이거나 적어도 이번 턴은 예측 가능한 결과, (2) 적 행동을 아이콘/타이머/하이라이트로 보여 주는 장치, (3) 짧은 연출과 대기 시간, (4) 적은 행동 동사. XCOM은 반대로 확률 명중과 긴 카메라/연출로 "느리다"는 불만을 받아 왔고, Tactical Breach Wizards는 그 불만에서 출발해 결과 미리보기 + 되감기로 방향을 틀었다.

### Cited Findings
**Hoplite**
- 플레이어와 적이 턴마다 단 한 번 움직이며, 이동 자체가 대부분 유닛의 공격 수단 — [Giant Bomb](https://www.giantbomb.com/hoplite/3030-45184/)
- 결정적(deterministic) 게임이며 적이 예측 가능한 패턴으로 반응 — [Pocket Gamer 리뷰](https://www.pocketgamer.com/hoplite/review/)
- 적은 HP 1, 공격 방식은 고정 패턴; 모든 수의 결과를 미리 계산 가능해 "도박이 아니라 체스" — [Arcadian Rhythms](https://www.arcadianrhythms.com/2014/01/hoplite-forge-your-own-odyssey/)
- 반론: 예측 가능성 때문에 전투라기보다 논리 퍼즐처럼 느껴진다는 평 — [BGG 블로그 리뷰](https://boardgamegeek.com/blog/2414/blogpost/27021/review-the-thematic-solitairist-plays-hoplite-iosa)
- Tom Francis(TBW 개발자)가 Hoplite를 "Randomised Tactical Elegance"로 분석한 글 존재 — [pentadact 블로그](https://pentadact.wordpress.com/2014/03/29/the-randomised-tactical-elegance-of-hoplite/) (열람 차단, 내용 미확인)

**Slay the Spire (intent)**
- 원래 "next move" 시스템이 스트리밍에 부적합해서 각 적 머리 위 작은 아이콘(intent)으로 교체됐다는 개발 설명(2차 출처) — [sts2Showcase deep dive](https://cmcour.github.io/sts2Showcase/deep-dive/slay-the-spire/), [saschb2b 게임 메커닉 노트](https://saschb2b.github.io/game-mechanics/concepts/enemy-intent-telegraph)
- intent는 "이번 턴"을 거의 완전정보로 만들고, 불확실성은 드로우/미래 턴으로 이동 — [saschb2b STS combat](https://saschb2b.github.io/game-mechanics/games/slay-the-spire/combat), [STS2 untapped 가이드](https://sts2.untapped.gg/guides/how-to-read-enemy-intent)
- "오도하는 텔레그래프는 없느니만 못함": 방어 intent가 가끔 피해를 주면 플레이어가 시스템을 불신 — [saschb2b intent telegraph](https://saschb2b.github.io/game-mechanics/concepts/enemy-intent-telegraph)
- 비판: "공격하면 방어, 방어하면 공격"만으로 깰 수 있었다는 플레이어 평 → intent만으로는 선택지가 얕을 수 있음 — [LessWrong 리뷰](https://www.lesswrong.com/posts/MEimkSwwuRgiPaZaY/review-slay-the-spire)

**Tactical Breach Wizards (Suspicious Developments, Tom Francis)**
- Francis는 XCOM 2를 수백 시간 플레이 후 바꾸고 싶은 점을 디자인 문서로 정리; 단순하고 평평한 전투 공간에서 훨씬 명료할 수 있다고 주장 — [PC Gamer 인터뷰](https://www.pcgamer.com/tactical-breach-wizards-interview/), [GamesRadar](https://www.gamesradar.com/games/strategy/steam-next-fests-big-strategy-hit-was-made-because-its-dev-loves-xcom-and-played-it-for-hundreds-of-hours-but-also-has-so-many-problems-with-it/)
- 무작위 확률이나 가려진 정보로 캐릭터가 죽는 데 좌절; 결국 ItB와 유사한 미리보기 시스템에 의존 — [Game Developer](https://www.gamedeveloper.com/design/tactical-breach-wizards-shows-how-strategy-games-can-tickle-the-funny-bone) (검색 요약)
- "전술을 시험하고 결과를 보는" 기능은 XCOM에서 자의적인 이유로 대원을 잃은 좌절에서 나옴 — [Wikipedia: Tactical Breach Wizards](https://en.wikipedia.org/wiki/Tactical_Breach_Wizards)
- 불확실성을 걷어낸 "indie XCOM"이라는 평 — [PCGamesN](https://www.pcgamesn.com/tactical-breach-wizards/xcom)

**Wildfrost**
- 카드마다 카운터(타이머)가 있고 가장 먼저 0이 되는 쪽이 행동 → 타이머 자체가 턴 순서 표시. 아군 카드가 자기 타이머를 당기거나 적 타이머를 늦출 수 있음(플레이어 포럼 서술) — [itch.io 포스트](https://itch.io/post/12870283)
- 타이머 설계 일반론: 능동/수동(플레이어 행동이 줄이는가, 자동으로 줄어드는가), 끝나길 바라는 것/막아야 하는 것의 4분면 — [jfacegames Substack](https://jfacegames.substack.com/p/the-ticking-clock-using-encounter)

**Shogun Showdown**
- 타일(공격)을 큐에 넣는 데 턴이 소모되지만 큐 순서 재배치/제거는 턴을 쓰지 않음; 적도 자기 타일 사용 — [Hey Poor Player](https://www.heypoorplayer.com/2024/10/22/shogun-showdown-is-a-tight-retro-styled-deckbuilder/)
- 최대 3개까지 쌓았다가 발사 — [Turn Based Lovers](https://turnbasedlovers.com/review/shogun-showdown-a-roguelite-that-really-packs-a-punch-review/)
- 다음 이동 후 떨어질 공격 칸이 노란색으로 깜빡여 피하라는 신호를 줌; 적도 자기 턴에 공격을 "준비"함 — [Heros Web](https://herosweb.com/shogun-showdown-review-a-unique-roguelike-that-hits-all-the-right-spots), [Wikipedia](https://en.wikipedia.org/wiki/Shogun_Showdown)
- 1인 개발(Roboatino) — [Wikipedia](https://en.wikipedia.org/wiki/Shogun_Showdown)

**Mario + Rabbids Kingdom Battle**
- Soliani: "The combat system and the bonuses in Mario Kart were a huge influence on us." — [Game Developer(검색 요약; 페이지 제목 불일치로 신뢰도 주의)](https://gamedeveloper.com/design/blending-two-game-worlds-in-i-mario-rabbids-kingdom-battle-i-)
- 이동 단계 하나에서 "triple dash the enemy, run towards a teammate, team jump, and land behind cover" 가능 → 이동 자체가 공격/콤보 — [Nintendo World Report 인터뷰](https://www.nintendoworldreport.com/interview/44949/mario--rabbids-kingdom-battle-interview)
- 장르를 혁명이 아니라 "renew"하려 했다는 발언 — [Digital Trends](https://digitaltrends.com/gaming/how-mario-kart-inspired-mario-rabbids-interview)

**XCOM (왜 느리게 느껴지는가)**
- 플레이어 불만: 적 턴, 순간이동 시네마틱, 카메라 이동, 포드 활성화 시 슬로모션; 은신 분대 사용 시 "매 턴 끝에 약 2분간 카메라가 천천히 기어다니는 걸 본다" — [Steam 토론](https://steamcommunity.com/app/268500/discussions/0/412447613573339899), [Nexus 포럼](https://forums.nexusmods.com/topic/1093467-getting-rid-of-slow-motion)
- 공식 패치 "Zip Mode"가 애니메이션 가속 및 애니메이션 사이 정지 제거 — [GameBanshee](https://gamebanshee.com/kxh9w)
- 유명 모드 "Stop Wasting My Time": 애니메이션 자체보다 애니메이션 종료 후의 약 2초 정지를 줄임 — [TweakTown](https://www.tweaktown.com/news/50396/having-performance-issues-xcom-2-mod-stops-wasting-time/index.html), [Nexus mod](https://www.nexusmods.com/xcom2/mods/159?tab=posts)
- 유닛 이동 시 follow camera 비활성화 ini 옵션 논의 — [Nexus mod 142](https://www.nexusmods.com/xcom2/mods/142?tab=posts)

**Divinity: Original Sin 2 (표면 시스템)**
- 불 + 물 표면 → 증기(젖음 제거), 전기 + 물 → 감전 표면(서 있는 모두 감전·기절), 증기 구름도 감전 가능 — [Gamepressure 가이드](https://www.gamepressure.com/originalsinii/environmental-effects-and-combinations/zea274), [Clouds](https://www.gamepressure.com/originalsinii/clouds-and-combinations/zfa275)
- 축복/저주 레이어가 표면 효과를 또 바꿈(예: 축복 감전수 → 가속, 저주 감전수 → 거미줄; 가이드 서술) — [Gamepressure](https://www.gamepressure.com/originalsinii/environmental-effects-and-combinations/zea274)
- 감전수 지속시간 2→3턴 핫픽스(2021.12) 등 표면 지속 시간을 계속 튜닝 — [Steam 변경 로그(모드 페이지)](https://steamcommunity.com/sharedfiles/filedetails/changelog/2124638169?p=10)
- 리뷰: "한 번의 잘못된 수로 게임이 매우 어려워질 수 있어 미리 읽어야" — [Trusted Reviews](https://www.trustedreviews.com/reviews/divinity-original-sin-2-definitive-edition); 이니셔티브가 증원 시 꼬인다는 비판 — [TheGamer](https://www.thegamer.com/divinity-original-sin-2-make-no-sense/)

**Genshin Impact (원소 반응)**
- 첫 타격이 원소 "오라"를 부여하고 다른 원소의 두 번째 타격이 반응을 "트리거" — [Destructoid](https://www.destructoid.com/?p=495825)
- 오라는 시간에 따라 줄고 반응에 소모되는 보이지 않는 게이지 — [Keqing Mains Library](https://library.keqingmains.com/evidence/combat-mechanics/elemental-effects/elemental-gauge-theory), [Genshin Wiki](https://genshin-impact.fandom.com/wiki/Element_Durability)
- 캐릭터마다 다른 내부 쿨다운(ICD) 때문에 화면상 규칙과 실제가 어긋남(숨은 복잡성) — [Icy Veins](https://icy-veins.com/genshin-impact/elements-and-elemental-reactions)

**Final Fantasy Tactics (캐스팅 타임)**
- 주문은 Charge Time이 차야 발동; 강력한 주문(바하무트 등)은 오래 걸려 발동 시 대상이 범위에 없을 수 있음 — [TV Tropes YMMV](https://www.tvtropes.org/pmwiki/pmwiki.php/YMMV/FinalFantasyTactics), [Caves of Narshe](https://www.cavesofnarshe.com/fft/newbie.php)
- 팬 의견 분열: 깊이를 더한다 vs "Scrappy Mechanic"(인위적 난이도·직업 제한) — [TV Tropes YMMV](https://www.tvtropes.org/pmwiki/pmwiki.php/YMMV/FinalFantasyTactics)
- FFT Advance는 캐스팅 타임을 완전히 제거 — [Final Fantasy Wiki](https://finalfantasy.fandom.com/wiki/Final_Fantasy_Tactics)
- FFT는 원래 캐스팅 타임을 가질 예정이 아니었다는 Kotaku 기사 존재 — [Kotaku](https://kotaku.com/final-fantasy-tactics-wasnt-supposed-to-have-casting-t-1519947150) (열람 차단, 내용 미확인)

### Inferences
- Hoplite식 "이동 = 공격"과 Mario+Rabbids식 "이동 중 대시 공격"은 턴당 입력 수를 줄이면서 결정 밀도를 높임. 사역마에게 "이동 경로에 닿는 적에게 자동 효과" 같은 이동형 동사를 주면 빠릿함에 유리.
- Wildfrost 카운터는 "누가 언제 행동하는지"를 숫자 하나로 보여 줌 → 채널링 대마법에 "완성까지 3" 같은 큰 카운터, 적에 "행동까지 N" 카운터를 붙이면 턴 순서 UI를 따로 만들 필요가 줄어듦.
- XCOM의 느림 원인 1순위는 애니메이션 자체가 아니라 "행동 사이 정지·카메라 이동·슬로모션"(Stop Wasting My Time 모드가 고친 지점). 과장된 연출을 원하더라도 연출 '사이의 공백'은 0에 가깝게.
- DOS2 표면은 3중 레이어(원소 × 상태 × 축복/저주)라 조합 폭발. 이 게임은 레이어를 1개(원소)로 제한하는 편이 안전.

### Gaps
- Despot's Game, Darkest Dungeon, Fire Emblem, Hades식 템포의 턴제 적용에 대한 구체 자료는 이번 조사(도구 호출 한도 내)에서 수집하지 못함.
- Wildfrost / Shogun Showdown 개발자의 1차 설계 발언은 찾지 못함(리뷰·포럼 기반).
- DOS2 표면이 "혼란스럽다"는 체계적 분석이나 Larian의 1차 발언은 찾지 못함.

## Q3. 적 의도: 완전 공개 vs 부분 공개의 트레이드오프

### Takeaway
완전 공개(ItB, Hoplite, STS의 이번 턴)는 결정을 "퍼즐"로 만들어 빠르고 공정하게 느끼게 하지만, 예측 가능성 때문에 "전투가 아니라 논리 퍼즐"이라는 반응과 선택지 얕음 비판도 있다. 공개 범위를 줄일 때 가장 중요한 원칙은 "보여 준 정보는 절대 거짓말하지 않는다"이고, 불확실성은 적 행동이 아니라 다른 곳(드로우, 미래 턴, 생성)으로 옮기는 것이 일반적 해법이다.

### Cited Findings
- STS: intent는 이번 턴을 알 수 있게 하고 무작위성을 "적이 뭘 할지"에서 "내가 가진 자원"으로 옮김 — [saschb2b](https://saschb2b.github.io/game-mechanics/games/slay-the-spire/combat), [STS2 untapped](https://sts2.untapped.gg/guides/how-to-read-enemy-intent)
- 오도하는 텔레그래프는 신뢰 붕괴를 낳음 — [saschb2b intent telegraph](https://saschb2b.github.io/game-mechanics/concepts/enemy-intent-telegraph)
- 예외 사례: Writhing Mass는 피해를 받을 때마다 intent가 바뀜(계획을 짠 뒤 정보가 바뀌는 드문 경우) — [Steam 커뮤니티 토론](https://steamcommunity.com/workshop/filedetails/discussion/1609846039/1743356969847083332)
- ItB: 텔레그래프가 있어도 "피하면 건물이 맞는다" 구조로 긴장 유지 — [Game Developer(검색 요약)](https://gamedeveloper.com/design/reimagining-failure-in-strategy-game-design-in-i-into-the-breach-i-)
- Hoplite: 결정성 → "체스" vs "논리 퍼즐 같아 전투감 부족" 평가 공존 — [Arcadian Rhythms](https://www.arcadianrhythms.com/2014/01/hoplite-forge-your-own-odyssey/), [BGG 리뷰](https://boardgamegeek.com/blog/2414/blogpost/27021/review-the-thematic-solitairist-plays-hoplite-iosa)
- TBW: XCOM의 확률·가려진 정보로 인한 죽음에 대한 좌절이 출발점 — [Game Developer](https://www.gamedeveloper.com/design/tactical-breach-wizards-shows-how-strategy-games-can-tickle-the-funny-bone), [Wikipedia](https://en.wikipedia.org/wiki/Tactical_Breach_Wizards)
- 패턴 인식 기회를 주는 것이 가독성의 핵심이며, 난이도를 위해 가독성을 희생하지 말라는 주장(ARPG 맥락) — [Game Developer "Designing for difficulty readability in ARPGs"](https://www.gamedeveloper.com/game-platforms/designing-for-difficulty-readability-in-arpgs) (검색 요약)

### Inferences
- "누구를 노리는지만 공개, 무슨 공격인지는 비공개"는 STS·ItB보다 정보가 적음. 빠릿함을 지키려면 다음을 권장:
  1. 공격 '종류'는 숨겨도 **위험 등급**(약/강/치명) 또는 **범위 형태**(단일/직선/광역)는 아이콘 1개로 보여 주기. 완전 비공개면 플레이어가 매 턴 최악을 가정하고 방어만 해서(STS의 "spam-defense" 반응) 결정이 느려지고 단조로워짐.
  2. 적 종류별로 공격 레퍼토리를 2~3개로 고정해 "학습으로 추론 가능한" 부분 정보로 만들기(Hoplite식 고정 패턴). 런 후반엔 플레이어가 사실상 완전정보를 갖게 됨.
  3. 보여 준 타겟은 반드시 지키기(타겟 변경은 플레이어 행동 — 도발, 시야 차단(증기) — 에 의해서만). 증기가 시야를 막아 타겟이 바뀌는 건 플레이어 도구로서 "정직한" 변화.
- 불확실성은 적 행동 대신 "다음 웨이브 출현 위치", "원소 타일 생성", "보상"에 두는 편이 STS/ItB 계열의 검증된 방식.

### Gaps
- 부분 공개 vs 완전 공개에 대한 정량적 플레이어 선호 데이터(설문, A/B 테스트)는 찾지 못함. 근거는 리뷰·포럼·2차 분석뿐.

## Q4. 턴 구조 옵션과 Undo 논쟁

### Takeaway
빠른 게임들은 대부분 "플레이어 전체 페이즈 → 적 전체 페이즈"(ItB, Hoplite, Mario+Rabbids)이거나 "타이머/큐가 곧 턴 순서"(Wildfrost, Shogun Showdown) 구조를 쓴다. 이니셔티브 타임라인은 증원 시 꼬이고(DOS2 비판), 캐스팅 타임(FFT)은 깊이와 짜증을 동시에 낳는다. Undo는 "커밋 전 무제한 이동 취소 + 제한적 턴 리셋"(ItB) 또는 "무제한 되감기"(TBW)로 갈리며, 둘 다 실험과 학습을 빠르게 만든다는 평이 많다.

### Cited Findings
- Hoplite: 플레이어 이동 → 적 전체 이동의 동기식 1행동 턴 — [Giant Bomb](https://www.giantbomb.com/hoplite/3030-45184/)
- Shogun Showdown: 큐에 넣기는 턴 소모, 재배치·제거는 무료 → "생각하는 동작"은 공짜, "커밋하는 동작"만 비용 — [Hey Poor Player](https://www.heypoorplayer.com/2024/10/22/shogun-showdown-is-a-tight-retro-styled-deckbuilder/)
- Wildfrost: 타이머 최솟값 순으로 행동(타이머=턴 순서) — [itch.io 포스트](https://itch.io/post/12870283)
- DOS2: 증원 시 이니셔티브가 "haywire" — [TheGamer](https://www.thegamer.com/divinity-original-sin-2-make-no-sense/)
- FFT CT 시스템: 속도만큼 CT 증가, 100에서 행동/발동 — [Caves of Narshe](https://www.cavesofnarshe.com/fft/newbie.php)
- ItB: 이동은 커밋 전 취소 가능, 공격 후에는 "Reset Turn"을 전투당 1회만 사용 가능(출처마다 "미션당/전투당" 표현 차이) — [Destructoid 리뷰](https://www.destructoid.com/reviews/review-into-the-breach/), [Vice](https://www.vice.com/en/article/into-the-breach-turns-mech-combat-into-a-tactical-dance/)
- ItB 리셋 제한 논쟁: 무제한 리셋 요구 vs "난이도 유지하려면 무제한 리셋과 제한 리셋이 둘 다 필요" vs "익숙하지 않을 때 메커닉을 시험하라고 있는 것"; 리셋 추가 파일럿 존재 — [Steam 토론](https://steamcommunity.com/app/590380/discussions/0/2650805212053351822/?ctp=2)
- TBW: 턴 종료 커밋 전까지 모든 행동을 되돌릴 수 있고, 실수로 턴 종료 시 경고 — [Shacknews 리뷰](https://shacknews.com/article/141015/tactical-breach-wizards-review-score); Francis는 되감기가 게임을 "a bit easier, with less stakes"로 만든다고 인정 — [PC Gamer 영상 기사](https://www.pcgamer.com/uk/watch-10-minutes-of-magical-cops-battling-drug-dealers-in-tactical-breach-wizards); 설정상 시간 예지자 캐릭터로 되감기를 정당화 — [Aftermath](https://aftermath.site/tactical-breach-wizards-pc-impressions.md)
- AV Club: STS2와 Mewgenics 모두 (모드 제외) undo 없음; 필자는 "no undo" 편이지만 엄격한 no-undo는 "안전한 수 vs 재미있는 수" 사이 선택을 강요한다고 지적 — [AV Club](https://www.avclub.com/slay-the-spire-2-mewgenics-roguelikes)

### Inferences
- 권장 구조: **플레이어 페이즈(마법사+사역마 순서 자유) → 원소 반응 해소 → 적 페이즈**. 사역마별 "이동 1 + 행동 1", 수동형 사역마는 자동. 페이즈 일괄 구조가 이니셔티브 타임라인보다 9x9 소규모 전투에 빠름.
- 채널링 대마법은 "턴 순서"가 아니라 **카운터(Wildfrost식)**로 표현: 시전 시작 시 "3", 매 턴 감소, 0에서 발동. 별도 CT 시스템을 만들지 않아도 됨.
- Undo: 결정적 해소(무작위 없음)라면 **커밋 전 무제한 undo**는 거의 순수 이득(오조작 제거, 실험 촉진). 결과가 확정된 뒤의 리셋은 ItB처럼 전투당 1회 또는 유물/사역마 능력으로 제한하면 긴장 유지 + 로그라이크 보상 소재. 원소 연쇄가 복잡할수록 미리보기/undo의 가치가 커짐(AV Club의 "연쇄 반응 실수" 사례).
- Shogun Showdown의 "커밋만 비용" 원칙: 대상 선택·경로 확인·미리보기 같은 탐색 동작은 무료·무애니메이션으로.

### Gaps
- 동시 해소(simultaneous resolution) 방식 전술 게임의 템포 사례는 이번 조사에서 확보하지 못함.
- Subset Games가 리셋을 1회로 제한한 공식 이유는 찾지 못함(플레이어 해석만 존재).

## Q5. 다턴 채널링/차지 메커닉과 방해(interrupt)

### Takeaway
다턴 캐스팅은 "발동 시 대상이 빠져나가 있음"(FFT) 같은 불확실성과 짜증을 낳기 쉽고, FFT 후속작은 이를 아예 제거했다. 긴장을 남기고 짜증을 줄이려면 채널링을 칸(지역) 기준으로 명확히 표시하고, 방해 조건을 명시적 트리거로 정의하며, 방해가 왜 성공/실패했는지 보이게 해야 한다.

### Cited Findings
- FFT: 긴 차지의 강력 주문은 발동 시 대상이 범위에 없을 수 있음; 팬 평가 분열 — [TV Tropes YMMV](https://www.tvtropes.org/pmwiki/pmwiki.php/YMMV/FinalFantasyTactics)
- FFT Advance는 캐스팅 시간 제거 — [Final Fantasy Wiki](https://finalfantasy.fandom.com/wiki/Final_Fantasy_Tactics)
- 턴제 interrupt는 명시적 트리거(시전 시작, 이동 진입, 치명타, 자원 임계)가 필요하고, 공격 하나에 여러 겹의 프롬프트가 쌓이면 전투를 따라가기 어려움 — [Gamestick 가이드(턴제 변환 팁)](https://gamestick.store/converting-real-time-combat-to-turn-based-practical-tips-for)
- Merc Tactics: 오버워치 interrupt를 눈에 보이는 "kill zone"으로 단순화; 명확한 구역은 interrupt가 왜 성공/실패했는지 보여 주며, 피드백 없는 불투명한 interrupt는 좌절감을 줌 — [Merc Tactics devlog](https://ed-welch.itch.io/merc-tactics/devlog/57296/new-interrupt-mechanism)
- 타이머는 "끝나길 바라는 타이머 vs 막아야 하는 타이머"로 나눌 수 있음 — [jfacegames Substack](https://jfacegames.substack.com/p/the-ticking-clock-using-encounter)
- ItB의 턴 제한 생존 구조(N턴 버티기)는 전투를 짧게 유지하는 목적 — [Wikipedia](https://en.wikipedia.org/wiki/Into_the_Breach)

### Inferences
- 이 게임의 채널링은 "플레이어가 끝나길 바라는 타이머" + 적에게는 "막아야 하는 타이머"가 동시에 되는 구조. 적의 의도(타겟) 표시가 마법사를 향하는 수로 "적이 채널링을 끊으러 온다"는 긴장을 시각화할 수 있음.
- 짜증 방지 설계안:
  1. 대마법 범위를 **시전 시작 시 칸 단위로 고정·표시**(FFT의 "대상이 빠져나감" 문제를 플레이어가 예측 가능한 형태로 전환). 적이 범위를 빠져나가려는 것도 의도 표시에 드러나게.
  2. 방해 조건을 1~2개로 명시: 예) "마법사가 피해 X 이상" 또는 "마법사가 이동하면 중단". 방해 위험을 범위 하이라이트(kill zone처럼)로 표시.
  3. 방해 시 전부 날리기보다 "단계 하락"(3→2단계 위력) 같은 부분 손실 → 긴장은 유지, 런 붕괴는 방지.
  4. 사역마의 역할 = 채널링 보호(도발, 벽 생성, 밀어내기). 이것이 ItB의 "건물 보호" 역할을 대체하는 핵심 긴장원이 될 수 있음.
  5. 채널링 중 단계마다 연출을 점층(마법진 확장, 타일 진동)시키면 과장 연출 욕구와 정보 전달(남은 턴)을 동시에 충족.

### Gaps
- "다턴 채널링 + 방해" 자체를 핵심으로 다룬 턴제 전술 게임의 개발자 발언/포스트모템은 찾지 못함. FFT 외 사례(예: 보드게임의 concentration 규칙 등)는 미조사.

## Q6. 원소 표면/반응 시스템을 읽기 쉽고 재미있게 유지하는 법

### Takeaway
DOS2와 Genshin은 원소 조합의 재미를 증명하지만, 둘 다 숨은 규칙(Genshin의 게이지·ICD, DOS2의 축복/저주 레이어·지속시간)이 가독성 비용을 만든다. 턴제 그리드에서는 "칸당 원소 1개, 결정적 반응, 반응 전 미리보기, 해소 순서 표시"가 혼란을 막는 핵심이다.

### Cited Findings
- DOS2: 불+물=증기, 전기+물=감전·기절 표면, 감전 구름 등; 축복/저주 레이어로 효과가 다시 변형 — [Gamepressure](https://www.gamepressure.com/originalsinii/environmental-effects-and-combinations/zea274)
- DOS2 표면 지속시간을 패치로 조정(감전수 2→3턴) — [Steam 변경 로그](https://steamcommunity.com/sharedfiles/filedetails/changelog/2124638169?p=10)
- DOS2: "한 수 잘못하면 매우 어려워짐, 미리 읽어야 함" — [Trusted Reviews](https://www.trustedreviews.com/reviews/divinity-original-sin-2-definitive-edition)
- Genshin: 오라(부여) → 트리거(두 번째 원소) 2단계 모델 — [Destructoid](https://www.destructoid.com/?p=495825)
- Genshin: 보이지 않는 감쇠 게이지, 캐릭터별 다른 ICD로 화면상 규칙과 실제 불일치 — [Keqing Mains](https://library.keqingmains.com/evidence/combat-mechanics/elemental-effects/elemental-gauge-theory), [Icy Veins](https://icy-veins.com/genshin-impact/elements-and-elemental-reactions)
- 반응 이름 팝업 자체가 이해하기 어렵다는 가이드 서술 — [ONE Esports](https://www.oneesports.gg/genshin-impact/genshin-impact-elements-reactions/), [Beebom](https://beebom.com/genshin-impact-elements-elemental-reactions-explained/amp/)
- ItB: 이벤트 해소 순서를 확인할 수 있음 — [Kotaku 리뷰(검색 요약)](https://kotaku.com/into-the-breach-the-kotaku-review-1823365331)
- ItB 원칙: 명료함을 위해 멋진 아이디어 희생 — [Game Developer(검색 요약)](https://gamedeveloper.com/design/-i-into-the-breach-i-dev-on-ui-design-sacrifice-cool-ideas-for-the-sake-of-clarity-every-time-)

### Inferences
- 권장 규칙 세트(가독성 우선):
  1. **칸당 표면 1개 + 공기층(증기/연기) 1개**까지만. 축복/저주 같은 2차 레이어 금지.
  2. 반응은 **즉시·결정적**(확률 없음), 반응표는 4원소 기준 6쌍 이내로 시작(예시 제시된 것: 바람+불=확산, 물+흙=진흙, 불+물=증기(시야 차단), 흙=벽). 조합이 없는 쌍은 "덮어쓰기"로 통일.
  3. 연쇄(바람이 불을 퍼뜨림)는 **1단계당 1틱**으로 순차 재생하고, 미리보기에서 최종 결과 칸을 미리 색칠(ItB의 예상 피해 깜빡임 방식). 플레이어는 "이 주문을 쏘면 어느 칸이 어떻게 바뀌는가"를 커밋 전에 봐야 함.
  4. 표면 지속시간은 숫자보다 시각적 감쇠(타일이 점점 옅어짐)로 표시하고, 정확한 값은 호버로(Tutsplus의 "숫자 대신 그래픽" 원칙과 동일 방향: [Tutsplus](https://code.tutsplus.com/the-smoke-mirrors-of-good-countdowns-1--cms-28347t)).
  5. 해소 순서 고정: 플레이어 행동 → 표면 반응 → 표면 피해 → 적 행동. 적 행동 전에 표면 피해로 적이 죽는지 보이게(ItB 순서 표시와 동일 효과).
  6. 반응 이름 팝업은 짧게(2~4글자) + 아이콘. Genshin식 긴 반응 명칭 남발은 가독성 비용.
- 증기의 "시야 차단"은 부분 정보 시스템과 직접 연결: 증기 안 유닛은 적의 타겟이 될 수 없다는 명확한 규칙으로 쓰면 강력한 방어 도구 + 직관적 규칙.

### Gaps
- 턴제 그리드 게임에서 원소 반응 수와 플레이어 이해도의 관계를 다룬 정량 데이터는 찾지 못함.
- Larian의 표면 시스템 설계 의도에 대한 1차 자료 미확보.

## Q7. 속도를 위한 UX 기법 (애니메이션 스킵, 빨리감기, 적 턴 속도, 입력 수, 결과 미리보기) + 한국 커뮤니티 정서

### Takeaway
"느림"의 주범은 애니메이션 길이보다 행동 사이의 정지, 카메라 이동, 슬로모션, 시네마틱이다(XCOM 모드·패치 사례). 결과 미리보기(ItB, TBW)는 생각 시간을 줄여 실제 체감 속도를 올린다. 한국 커뮤니티 원문 반응(루리웹·디시·아카라이브)은 이번 검색으로 확보하지 못했고, 인벤 리뷰가 "한눈에 들어오는 좁은 필드, 3유닛, 짧은 턴 제한"을 매력으로 꼽은 정도만 확인했다.

### Cited Findings
- XCOM 2 "Zip Mode" 패치: 애니메이션 가속 + 애니메이션 사이 정지 제거 — [GameBanshee](https://gamebanshee.com/kxh9w)
- "Stop Wasting My Time" 모드는 애니메이션을 많이 지우지 않고 종료 후 2초 정지만 줄임 — [TweakTown](https://www.tweaktown.com/news/50396/having-performance-issues-xcom-2-mod-stops-wasting-time/index.html)
- 애니메이션 사이 정지 제거 + 유닛 이동 속도 증가 모드가 뉴스가 될 정도의 수요 — [Wccftech](https://wccftech.com/xcom-2-ay-lmao-2-mod-replaces-game-text-humorous-jokes/amp/)
- 이벤트 시네마틱 끄기, 스페이스바로 적 턴 넘기기 권장(플레이어 팁); 일부는 장르 자체의 문제라고 봄 — [Steam 토론](https://steamcommunity.com/app/268500/discussions/0/412447613573339899)
- 후속 장르 게임(Chaos Gate)에서도 같은 속도 불만 반복 — [Steam 토론](https://steamcommunity.com/app/1611910/discussions/0/3276942370885321740)
- ItB: 조준 시 예상 피해/HP 미리보기 — [Sevastromo](https://www.sevastromo.com/into-the-breach/); TBW도 ItB 유사 미리보기에 의존 — [Game Developer](https://www.gamedeveloper.com/design/tactical-breach-wizards-shows-how-strategy-games-can-tickle-the-funny-bone)
- STS intent 아이콘은 스트리밍(시청자 가독성) 문제를 해결하려고 도입됐다는 2차 서술 — [sts2Showcase](https://cmcour.github.io/sts2Showcase/deep-dive/slay-the-spire/)
- Shogun Showdown: 위협 칸 노란색 깜빡임 — [Heros Web](https://herosweb.com/shogun-showdown-review-a-unique-roguelike-that-hits-all-the-right-spots)
- 한국 리뷰: 인벤 "8X8 묘수풀이의 매력" — 좁은 필드, 3유닛, 6턴 내외 제한 — [인벤](https://www.inven.co.kr/webzine/news/?news=195219)
- Google Play(넷플릭스판) 사용자: "작은 실수 하나가 런 전체를 망칠 수 있어 처음엔 답답" — [Google Play](https://play.google.com/store/apps/details?id=com.netflix.NGP.IntoTheBreach&hl=en_US)

### Inferences
- 체크리스트(빠릿함):
  - 행동 사이 정지 ≤ 0.1~0.2초, 카메라는 고정(9x9 전체 노출)으로 이동 연출 제거.
  - 적 페이즈: 적들 동시 이동 후 공격만 순차, 빨리감기(2x/4x) + 홀드 시 즉시 스킵. 같은 종류 적의 행동은 묶어서 동시 재생.
  - 과장된 대마법 연출은 **발동 1회에만 풀 연출 + 스킵 가능**, 반복 시전 시 자동 단축(첫 시전 풀, 이후 짧은 버전) 옵션. 연출 중에도 결과 숫자는 즉시 표시.
  - 턴당 입력 목표: 사역마당 2클릭(이동 칸, 행동 대상) + 마법사 2클릭 + 턴 종료 1 → 약 5~9 입력. 탐색(호버 미리보기, 경로 확인)은 무료·즉시.
  - 미리보기: 피해 수치, 밀림 결과 칸, 원소 반응 결과 칸, 적 사망 여부, 적 타겟 변경 여부를 커밋 전에 모두 표시.
  - 턴 종료 시 행동하지 않은 유닛이 있으면 가벼운 경고(TBW식), 단 확인 팝업 남발 금지.
- 런 20~30분이면, 전투 1회 3~5분 × 5~7전투 정도가 현실적 범위(추정, 출처 없음 — 설계 가정).

### Gaps
- 루리웹/디시인사이드/아카라이브의 턴제 템포 관련 원문 반응은 검색으로 확보하지 못함(사이트 직접 열람도 불가). 한국 유저 정서는 인벤 리뷰와 스팀 한국어 평가 수치 외에 근거 없음.
- 적 턴 시간, 턴당 입력 수 등에 대한 업계 수치 벤치마크는 찾지 못함.
- GDC/분석 영상(예: Game Maker's Toolkit의 ItB 분석) 스크립트는 접근하지 못함.
