# 빌드 조립(주문·스킬·빌드 크래프팅) 시스템이 재미있고 중독적인 이유 — 마법진 조립 전술 로그라이크를 위한 조사 노트

> 조사 방법 및 접근 제한 메모 (보고서 작성자 필독)
> - 이 세션에서는 WebFetch가 대부분 막혔다. `www.escapistmagazine.com`, `www.gameinformer.com`, `gamedeveloper.com`, `www.pcgamer.com`, `noita.wiki.gg`는 모두 `getaddrinfo ENOTFOUND`(세션 네트워크 허용 목록 밖)로 실패했다. 아래 인용은 전부 **WebSearch 결과 요약(검색 엔진이 해당 URL에서 뽑은 발췌/요약)** 에 근거한다. 원문 전체를 읽지 못했으므로 직접 인용문은 검색 발췌에 나온 문구로만 한정했고, 원문 확인이 필요한 항목은 Gaps에 적었다.
> - 한국 커뮤니티(디시인사이드 갤러리, 루리웹, 아카라이브)는 검색에 걸리지 않았다(검색 결과가 영문/중문 공략 위주). 한국 플레이어 정서는 **확보 실패**로 기록한다.
> - 대상 게임 가정: 중심/링/외곽 슬롯에 원소(불·물·바람·땅), 형태(투사체·소환·장판·방벽), 수식 글리프(연쇄·확산·지연·관통)를 넣어 마법진을 조립. 큰 마법진일수록 영창 턴이 길고 강함. 컨셉 "마법진 = 전기 회로도".

---

## 1. Noita 지팡이 빌딩: 수식자·멀티캐스트·트리거·순서가 만드는 창발 콤보, 그리고 플레이어가 좋아하는 점/싫어하는 점

### Takeaway
Noita의 지팡이는 본질적으로 "덱빌딩 카드 게임"(덱·핸드·드로우)이며, 왼→오 순서로 읽히는 수식자·멀티캐스트·트리거가 작은 부품으로 거대한 창발 조합을 만든다. 반면 게임 내 설명이 거의 없어 커뮤니티 위키·시뮬레이터에 의존해야 하는 불투명성과 편집 UI의 불편이 가장 큰 불만이다.

### Cited Findings
- 개발자 Petri Purho: 지팡이 시스템은 Dominion 같은 덱빌딩 게임에서 영감을 받았고, 플레이어가 지팡이 사이로 주문을 옮기는 것이 덱빌딩 게임에서 카드를 옮기는 것과 같다고 설명. — [80.lv 인터뷰](https://80.lv/articles/noita-a-game-based-on-falling-sand-simulation/)
- 위키는 지팡이 시스템을 "본질적으로 카드 게임"으로 설명: 덱(Deck)·핸드(Hand)·드로우(Draw)로 주문이 순환. 투사체는 (트리거가 아닌 한) 드로우하지 않고, 수식자(modifier)는 주문 1장을 드로우, 멀티캐스트는 여러 장을 드로우. — [Noita Wiki: Expert Guide: Draw](https://noita.wiki.gg/wiki/Expert_Guide:_Draw)
- 수식자는 오른쪽에 있는 주문에 적용되며 실제 주문을 만날 때까지 왼→오로 진행. — [Noita Wiki: Guide: Wand Mechanics](https://noita.wiki.gg/wiki/Guide:_Wand_Mechanics)
- 흔한 오해: 주문이 다른 주문을 "직접 수정"하는 것이 아니라, 수식자는 주로 "현재 발사(shot) 상태"를 바꾸며, 일부는 재충전 시간 같은 전역값을 바꾼다. — [Noita Wiki: Expert Guide: Draw](https://noita.wiki.gg/wiki/Expert_Guide:_Draw)
- 비셔플 지팡이는 왼→오로 읽히므로 "Homing"을 "Spark Bolt" 앞에 둬야 한다. 셔플 지팡이는 무작위 순서로 발사되어 강한 주문 여러 개를 넣기는 쉽지만 정밀 콤보는 어렵다. — [dood.gg 노이타 지팡이 가이드(한국어)](https://dood.gg/ko/noita/wands)
- 트리거 계열(타이머/만료 트리거 등)은 투사체의 위치에서 다른 주문을 시전시킨다. — [Noita Wiki: Add Expiration Trigger](https://noita.wiki.gg/wiki/Add_Expiration_Trigger); [Noita Wiki: Guide: Wand Mechanics](https://noita.wiki.gg/wiki/Guide:_Wand_Mechanics)
- 커뮤니티는 지팡이가 실제로 무엇을 하는지 보여주기 위해 "주문 평가 트리(spell evaluation tree)"를 그려주는 외부 도구(Wand Simulator)를 만들었다. — [Noita Wiki: Tool: Noita Wand Simulator](https://noita.wiki.gg/wiki/Tool:_Noita_Wand_Simulator)
- 플레이어들은 예상치 못한 지팡이 조합(예: 물 궤적과 번개 아크를 단 초고탄성 주문의 더블 캐스트)을 GIF로 공유 — 조합 결과의 "시각적 공유 가치"가 커뮤니티 문화를 만든다. — [PC Gamer: Noita players are sharing beautiful, explosive gifs](https://www.pcgamer.com/noita-players-are-sharing-beautiful-explosive-gifs)
- 불만(UI): Steam 스레드에서 지팡이 흐름도의 주문 아이콘을 클릭하다 실수로 지팡이가 발사되는 문제, 지팡이를 들고 있지 않으면 흐름도를 볼 수 없는 문제 제기. — [Steam Workshop 토론](https://steamcommunity.com/workshop/filedetails/discussion/2572385079/5800060047325831212)
- 불만(불투명성): 자동 집계된 Steam 리뷰 요약에서 지팡이 제작·편집이 제대로 설명되지 않고 게임 내 도구가 부족하다는 의견, 무작위 지팡이 생성·자멸형 빌드에 대한 어려움이 언급됨(자동 요약이므로 가중치는 참고용). — [Vaporlens: Noita](https://vaporlens.app/app/881100/noita.md)
- 리뷰: Noita의 주문 제작을 이해하는 과정은 느리며, 주된 이유는 게임이 그것이 어떻게 작동하는지 거의 설명하지 않기 때문. — [GameSpot Noita 리뷰](https://www.gamespot.com/reviews/noita-review/1900-6417589/) (검색 요약 기준; 정확한 문구는 Magicraft 비교 검색 결과의 리뷰 요약에서 확인)
- 학습 곡선: Steam 사용자가 업적 통계를 근거로 소유자의 약 30%가 지팡이 편집이 처음 등장하는 2층에 도달하지 못한다고 주장(단일 사용자의 해석, 신뢰도 낮음). — [Steam 토론](https://steamcommunity.com/app/881100/discussions/0/604148566876768427)
- Purho(출시 전): 기술적 문제는 해결 가능했지만 "진짜 어려움은 게임 디자인"이었다. — [Game Developer: Road to the IGF: Noita](https://www.gamedeveloper.com/game-platforms/road-to-the-igf-nolla-games-i-noita-i-)
- GDC 2019 IGS 세션 "Exploring the Tech and Design of 'Noita'"(Petri Purho)가 존재하며 GDC 유튜브에 무료 공개됨. 지팡이 파트 내용은 확인 못함. — [GDC Vault](https://gdcvault.com/play/1025695/Exploring-the-Tech-and-Design)
- Noita-like 후속작 Magicraft: 지팡이 슬롯에 주문·수식자를 넣으면 클릭마다 왼→오 순서로 발동하는 Noita식 구조를 유지하되, Hades식 방/보상 선택 구조와 영구 해금(지팡이 슬롯 추가 등)을 붙였다. 리뷰는 "주문들이 상호작용하는 방법을 발견하는 것이 재미의 큰 부분"이라고 평가. 동시접속 10,904명 기록. — [Wikipedia: Magicraft](https://en.wikipedia.org/wiki/Magicraft); [Rogueliker 리뷰](https://rogueliker.com/magicraft-review/); [GamesRadar](https://gamesradar.com/hogwarts-legacy-meets-the-binding-of-isaac-in-this-spell-slinging-roguelike-with-excellent-steam-reviews); [PC Gamer: Magicraft](https://www.pcgamer.com/games/roguelike/magicraft-is-like-brotato-mixed-with-hades-where-you-make-up-all-your-guns-as-you-go-along)

### Inferences
- "지팡이 = 순서 있는 덱 + 드로우 규칙"이라는 단일 추상 모델 덕분에 소수 규칙으로 엄청난 조합이 나온다. 우리 마법진도 "슬롯 = 실행 순서가 있는 회로 소자"로 정의하면(예: 중심→링→외곽 순, 또는 시계방향 전류 흐름) 동일한 창발을 얻을 수 있다. "회로도" 컨셉과 정확히 맞물린다.
- Noita의 가장 큰 실패는 시스템 자체가 아니라 **가시화 부재**다. 커뮤니티가 "평가 트리" 도구를 만들었다는 것은 플레이어가 그 정보를 원했다는 증거. 우리 게임은 마법진 편집 화면에서 "전류가 흐르는 경로"와 각 글리프의 적용 대상, 최종 결과(피해량·범위·영창 턴)를 실시간 미리보기로 보여줘야 한다. 회로도 컨셉이 이 미리보기를 자연스러운 연출(전선에 불이 들어오는 애니메이션)로 만들 수 있다.
- 턴제 전술이므로 Noita의 "실수로 발사" 같은 실시간 압박 문제는 피할 수 있다 — 편집은 전투 밖 또는 별도 단계에서, 결과 미리보기와 함께.
- 셔플(무작위 순서) 같은 변수는 "정밀 콤보 vs 안정적 강함"의 선택지로 쓸 수 있다(예: '불안정한 마법진' 속성).

### Gaps
- GDC 2019 Noita 강연의 지팡이 관련 발언 원문, Nolla의 지팡이 설계 의도에 대한 상세 인터뷰는 확보 못함(GDC Vault 회원 전용/유튜브 미확인).
- r/noita 스레드 직접 인용 확보 못함. noita.wiki.gg 원문 fetch 차단.
- 디시인사이드 노이타 갤러리 등 한국 플레이어 반응 확보 못함.

---

## 2. Balatro: 조커 시너지, 곱연산 점수, "숫자가 올라가는" 도파민, LocalThunk의 설계 발언

### Takeaway
Balatro의 쾌감은 제한된 조커 슬롯 안에서 가산(+Mult/+Chips)과 승산(xMult) 효과를 조합해 점수가 폭발하는 구조, 그리고 "규칙을 깨는" 조커(Four Fingers 등)를 통한 점진적 학습에서 나온다. LocalThunk 본인의 곱연산 철학 발언은 1차 자료로 확인하지 못했다.

### Cited Findings
- 조커는 점수 방식을 바꾸는 주된 수단이며, 제한된 조커 슬롯을 서로/다른 카드와 상호작용하는 조커로 채우는 것이 전략의 핵심. 일부 조커는 포커 규칙 자체를 깨며 조합 시 매우 높은 점수를 낸다. — [GamesHub: Balatro is pushing the roguelike deckbuilder to new territory](https://www.gameshub.com/news/features/balatro-roguelike-deckbuilder-2637397)
- 가산형(예: Jolly Joker "+8 Mult" 조건부)과 승산형(예: Obelisk는 연속 핸드에 따라 곱으로 증가)이 공존하며, 곱 Mult 증가는 가산과 다른 색으로 표시된다. — [GamesHub](https://www.gameshub.com/news/features/balatro-roguelike-deckbuilder-2637397)
- 시너지 예: Blueprint는 바로 오른쪽 조커의 효과를 복사 → 고배율 조커 옆에 두면 효과가 사실상 2배. Midas Mask(얼굴 카드를 골드로) + Vampire(강화를 소모하며 자기 배율 영구 상승). — [Comicbook: best joker combos](https://comicbook.com/gaming/news/best-joker-combos-balatro)
- 공략 커뮤니티는 조커 평가 기준으로 "Scaling Power(런이 진행될수록 쌓이는 배율/칩)"를 핵심으로 듦. — [SteelSeries Balatro Joker tier list](https://steelseries.com/en-gb/blog/balatro-joker-tier-list)
- LocalThunk는 2024년 7월 X 스레드에서 사인포스팅(signposting) 전략을 공유: 데모에 넣은 "Four Fingers"(4장으로 플러시/스트레이트 가능)가 "huge teachable moment"였고, 스트리머 반응을 보며 "the first moment people really understood Balatro's hook"이라고 함. 게임 전반의 안내를 "extended low-calorie tutorial"이라고 표현. — [Game Developer: Balatro creator unveils a few slick signposting strategies](https://gamedeveloper.com/design/balatro-creator-unveils-a-few-slick-signposting-strategies); 미러 [jikguard](https://www.jikguard.com/news/balatro-creator-unveils-a-few-slick-signposting-strategies)
- LocalThunk: 비슷한 게임을 일부러 피해 설계했다 — 무의식적으로 차용하거나 디자인 공간을 의도치 않게 좁히는 것을 막기 위해. — [Game Informer 인터뷰](https://www.gameinformer.com/interview/2024/03/21/balatro-was-almost-called-joker-poker-and-other-details-from-its-creator) (검색 요약 기준)
- LocalThunk 블로그: 솔리테어가 "가장 중요한" 영감이라고 주장, 비디오 게임보다 트럼프 카드 게임을 훨씬 많이 했다고 언급. — [GamesRadar](https://gamesradar.com/games/roguelike/balatro-dev-says-solitaire-exists-at-the-peak-of-game-culture-and-was-debatably-the-most-important-inspiration-for-his-poker-roguelike)
- 조커 수: 퍼블리셔가 150개라고 잘못 말하자 정정 대신 30개를 더 만들었다는 일화(기준 수치가 매체마다 120/150으로 상이). — [PC Gamer](https://www.pcgamer.com/games/card-games/balatro-was-only-supposed-to-have-120-jokers-but-instead-of-correcting-a-publisher-mistake-localthunk-just-made-30-more-of-them/); [GamesRadar](https://gamesradar.com/games/roguelike/balatro-creator-added-extra-jokers-to-the-hit-roguelike-because-someone-at-its-publisher-mentioned-something-about-150-jokers-and-instead-of-correcting-them-i-just-made-30-more)
- 1.1 업데이트에서 "really confusing" 했던 기존 조커를 개편 — 혼란스러운 효과 텍스트는 사후 수정 대상이 됨. — [PC Gamer: Balatro 1.1](https://pcgamer.com/games/roguelike/balatro-1-1-will-include-new-jokers-plus-a-revamp-of-a-really-confusing-existing-one)
- Slay the Spire 공동 제작자 Casey Yano: StS2에 Balatro식 무한(Endless) 모드를 넣지 않는 이유는 런이 길어질수록 덱빌딩의 매력이 떨어지고, Balatro는 설계상 무한 전략이 덜 나오기 때문. — [GamesRadar](https://www.gamesradar.com/games/roguelike/slay-the-spire-2-wont-get-an-endless-mode-like-balatro-because-it-limits-infinite-strategies-but-creator-says-maybe-a-modder-will-think-of-a-way-to-make-it-work/)
- (2차 자료, 신뢰도 낮음) 팬 분석 사이트는 LocalThunk의 "balance by feel" 접근, 수치적 균형보다 개성 있는 조커를 선호한다고 서술. 직접 인용 아님. — [saschb2b: Balatro design tensions](https://saschb2b.github.io/game-mechanics/games/balatro/design-tensions)

### Inferences
- Balatro의 점수 공식(Chips × Mult)은 "가산 단계 → 승산 단계"의 2단 구조다. 우리 마법진도 **"기본 위력(칩) × 배율(멀트)"** 로 나누고, 원소/형태는 기본 위력, 수식 글리프 일부는 가산, 극소수 희귀 글리프만 곱연산(×)으로 두면 "곱 하나 얻었을 때의 폭발감"을 만들 수 있다. 곱 효과는 색·아이콘을 다르게 표시(Balatro의 색 구분 관례).
- Blueprint(오른쪽 복사)는 "위치 의존 + 복제" 패턴. 회로도 컨셉에서는 "병렬 분기(복제)" 글리프 — 인접 슬롯 효과를 복사 — 로 자연스럽게 번역된다.
- 점수 계산을 단계별로 하나씩 "쌓아 올리는" 연출(Balatro의 카드별 점수 팝업)이 숫자-증가 도파민의 핵심 전달 수단. 우리 게임은 마법진 발동 시 전류가 각 소자를 지나며 수치가 누적되는 연출을 넣을 수 있다.
- "규칙을 깨는" 첫 부품(Four Fingers)을 데모/초반에 배치해 훅을 이해시키는 전략은 그대로 차용 가능: 예) 초반 고정 보상으로 '연쇄' 글리프를 줘서 "하나의 마법이 다른 마법을 부른다"는 훅을 각인.

### Gaps
- LocalThunk가 곱연산/숫자 인플레이션에 대해 직접 말한 1차 자료(블로그, 포스트모템)는 찾지 못함. Game Informer·TouchArcade 인터뷰 원문 fetch 차단.
- 루리웹/디시 등 한국 커뮤니티의 발라트로 "중독" 반응 확보 못함.

---

## 3. 비교 사례: Magicka, Slay the Spire/Monster Train, Path of Exile, Backpack Hero, Vampire Survivors, 프로그래밍형 주문 게임(Mages of Mystralia, Opus Magnum), 전술 가독성(Into the Breach)

### Takeaway
성공한 조립 시스템들은 (a) 작은 원자 부품의 조합 폭발(Magicka 원소, PoE 서포트 젬), (b) 위치·인접·순서 의존성(Backpack Hero, Mages of Mystralia), (c) 특정 조합의 "진화/완성" 보상(Vampire Survivors), (d) 데이터 기반 사후 밸런싱(StS, Monster Train)을 공유한다. 프로그래밍형 주문 게임은 "동사(행동)+부사(수식)+트리거(호출)" 구조로 정리된다.

### Cited Findings
**Magicka (원소 조합)**
- 8개 원소를 즉석 조합해 주문을 만든다. 일반 주문은 원소 입력 순서와 무관, "Magick"만 순서가 중요. — [Wikipedia: Magicka](https://en.wikipedia.org/wiki/Magicka)
- Arrowhead 포스트모템: 마나바를 소모하는 버튼이 아니라 "비전 에너지를 다루는 느낌"을 원했다. 방패 원소 단독은 역장 방벽, 여기에 흙을 더하면 흙 방벽이 된다. — [Game Developer: Postmortem Magicka](https://gamedeveloper.com/business/postmortem-arrowhead-game-studios-i-magicka-i-) (검색 요약 일부만 확인)
- 같은 원소 반복은 강화: 불+불+불 = 아주 큰 불. — [Engadget hands-on](https://www.engadget.com/2010/04/05/hands-on-magicka/)
- Wizard Wars 리드 디자이너 David Nisshagen: 원작 Magicka는 약 4000개의 고유 주문 조합이 있어 "완전히 밸런스 불가능". 후속작에서 원소 위계를 바꿔(번개 > 비전) 시스템을 더 균형 있게 함. — [GameWatcher 인터뷰](https://www.gamewatcher.com/interviews/magicka-wizard-wars-interview/11232)
- 실시간 PvP에서는 "그 조합이 뭐였더라" 하고 멈춰 생각할 수 없다는 개발자 발언 — 조합 기억 부담 문제. — [GameWatcher 인터뷰](https://www.gamewatcher.com/interviews/magicka-wizard-wars-interview/11232)

**Slay the Spire / Monster Train (덱빌딩 시너지)**
- Mega Crit은 GDC 2019 "Slay the Spire: Metrics Driven Design and Balance"에서 데이터 기반 밸런싱을 발표. — [GDC 뉴스](https://gdconf.com/news/learn-slay-spires-successful-metrics-driven-approach-game-balancing-gdc-2019)
- Giovannetti: 초기 빌드는 카드 복사로 쉽게 무한 콤보가 나와 심하게 망가져 있었고, 무한 콤보를 "드물게" 만드는 것이 최우선 과제. 모든 런의 데이터와 테스터 피드백으로 카드를 "더 재밌게 또는 덜 강하게" 조정. — [Game Developer: How Slay the Spire's devs use data](https://gamedeveloper.com/design/how-i-slay-the-spire-i-s-devs-use-data-to-balance-their-roguelike-deck-builder)
- StS2 개발진: 플레이어가 게임을 부수길 원하며 그것이 덱빌더 재미의 일부이고, 망가진 게 있으면 너프하면 된다. — [GamesRadar](https://www.gamesradar.com/games/roguelike/slay-the-spire-2-devs-want-you-to-break-the-game-as-thats-part-of-the-fun-of-deckbuilders-and-if-somethings-busted-they-can-do-one-of-their-favorite-things-nerf-cards)
- StS2: 카드 풀을 줄이려다 테스터가 "새로운 게 필요하다"며 싫어함; 수백 개 카드 아이디어를 "도살업자처럼" 잘라냄. — [PC Gamer](https://www.pcgamer.com/games/roguelike/slay-the-spire-2-dev-says-an-early-idea-was-to-actually-reduce-the-card-pool-but-players-hated-it-we-need-new-stuff/); [PC Gamer](https://www.pcgamer.com/uk/games/card-games/its-kind-of-like-youre-a-butcher-hundreds-of-slay-the-spire-2-card-ideas-were-cut-during-development-in-an-incredibly-destructive-process/)
- Monster Train: 매 런 2개 클랜 덱을 결합 → 조합 발견이 재미의 원천. Shiny Shoe는 클랜 조합별 승률을 추적하며 대부분 클랜 승률이 비슷하다고 밝힘. — [Digitally Downloaded Q&A](https://www.digitallydownloaded.net/2020/02/developer-q-a-monster-train-a-deckbuilding-roguelike-with-a-hellish-theme.html); [PC Gamer 리뷰](https://pcgamer.com/monster-train-review)

**Path of Exile (스킬 젬 + 서포트 젬 링크)**
- 스킬 젬을 다른 젬이 서포트하는 구조는 FF7의 마테리아 시스템을 발전시키려는 데서 출발. — [Hardcore Gamer 인터뷰](https://hardcoregamer.com/features/interviews/grinding-gears-about-path-of-exile-with-chris-wilson/35504/)
- 서포트 젬 너프 이유: 새로운 빌드를 낳을 유틸리티 젬 대신 피해 젬만 고르는 현상 방지. 젬을 통한 트리거 주문도 마나 비용을 지불하게 변경. — [GamesBeat](https://gamesbeat.com/path-of-exile-interview-an-expedition-into-some-big-changes/)
- PoE2 개발 중 발견한 핵심 문제: "무엇이 무엇과 함께 작동하는지가 정말 불명확했다". — [Fandom 인터뷰](https://www.fandom.com/articles/2050-interview-chris-wilson-on-path-of-exile-2s-origins)
- Chris Wilson: 시스템을 신중히 밸런싱하지만 "모두가 어떤 식으로든 게임을 부수고 있다고 느끼고 싶어한다". — [GamesRadar](https://www.gamesradar.com/path-of-exile-2-devs-want-you-to-feel-like-youre-breaking-the-game-with-class-skills)
- PoE2는 젬 안에 젬을 넣는 "메타 젬"(트리거 등)을 도입했으나, 출시 후 Cast on Freeze 등 트리거 젬을 크게 너프해 플레이어 반발. 리스펙 비용이 높아 "빌드 파괴" 패치에 대한 불만. — [PC Gamer: meta gems](https://pcgamer.com/path-of-exile-2-pushes-action-rpg-technology-to-the-absolute-limit-with-meta-gems-that-you-socket-other-gems-into); [PC Gamer: build-breaking patch](https://pcgamer.com/games/path-of-exile-2s-build-breaking-patch-leave-fans-calling-for-better-respec-options); [GamesRadar: 너프 vs 창의성](https://www.gamesradar.com/games/action-rpg/path-of-exile-2-developer-says-we-are-trying-to-avoid-nerfing-skills-and-builds-but-as-it-sets-its-sights-on-a-popular-explosive-build-players-argue-it-discourages-creativity)

**Backpack Hero (공간 배치)**
- 팀 리드 Jasper Cole: 카드를 모아 전투에 쓰는 카드 게임, 특히 "전략적 카드 배치"에서 영감 → 인벤토리 관리 메커닉으로 발전. Deus Ex의 격자 인벤토리도 영향. — [Shacknews](https://www.shacknews.com/article/132048/backpack-hero-lead-on-game-influences-challenges)
- 위치 조건부 효과: 예) 창은 다른 무기와 인접하지 않을 때만 범위 피해. 800개 이상 아이템. — [Epic Games Store 기사](https://store.epicgames.com/news/backpack-hero-makes-inventory-management-a-blissful-delight)
- Backpack Battles 관련 설계 자료는 찾지 못함.

**Vampire Survivors (진화)**
- 진화 조건: 기본 무기 최대 레벨 + 연결된 패시브 아이템 + (10분 이후) 보스 상자. 여러 무기가 진화 가능하면 상자가 무작위로 선택. — [GameSpot: How To Evolve Weapons](https://www.gamespot.com/articles/vampire-survivors-how-to-evolve-weapons/1100-6508815/); [PC Gamer 진화 가이드](https://pcgamer.com/vampire-survivors-evolve-weapons-evolutions-guide)
- 스핀오프 Vampire Crawlers는 카드 조합 기반 진화 시스템 채택. — [gamedev.net / GamesIndustry.biz](https://gamedev.net/news/4991/)

**프로그래밍형 주문 / 회로형 퍼즐**
- Mages of Mystralia: 행동(Behavior) 룬을 중앙 노드에 연결해 쌓고, 증강(Augment) 룬이 그 행동을 수정하며, 트리거(Trigger)로 한 주문이 다른 주문을 호출. 리뷰: "행동 룬이 동사라면 증강 룬은 부사". 같은 증강이라도 위치에 따라 결과가 달라짐. 개발 중 행동 룬을 20개 → 11개로 줄임. 트리거 중첩 최대 4회(구 위키, 미검증). — [Game Developer: Creative process of a procedural spell crafting system](https://gamedeveloper.com/design/creative-process-of-a-procedural-spell-crafting-system); [Destructoid: spellcrafting is like programming magic](https://www.destructoid.com/mages-of-mystralias-spellcrafting-is-like-programming-magic/); [GameSpot](https://gamespot.com/articles/an-incredible-spell-creation-system-elevates-mages/1100-6448651/); [Pixeltwelve 가이드](https://pixeltwelve.com/articles/mages-of-mystralia-spellcrafting-runes); [Fandom Wiki](https://magesofmystralia.fandom.com/wiki/Spells/In-Depth?oldid=2051)
- Opus Magnum(Zachtronics): 결과를 전 세계 플레이어 분포 히스토그램과 비교해 완성한 해답을 계속 다듬게 만든다(Infinifactory에서 시작된 방식). 한 유저의 루핑 공장 해답이 "이상하게 만족스러워서" 루프 GIF 내보내기를 넣음. 최적이 아니어도 시각적으로 만족스러운 해답을 장려. — [Wikipedia: Infinifactory](https://en.wikipedia.org/wiki/Infinifactory); [Wikipedia: Opus Magnum](https://en.wikipedia.org/wiki/Opus_Magnum); [PC Gamer](https://www.pcgamer.com/perfectly-solving-opus-magnums-puzzles-is-impossible-but-thats-ok); [Game Developer: Road to the IGF Opus Magnum](https://gamedeveloper.com/business/road-to-the-igf-zachtronics-i-opus-magnum-i-)

**전술 가독성 (Into the Breach)**
- 적 행동 예고(telegraphing)가 핵심 설계이며 속도감에도 기여. Justin Ma: 멋진 아이디어보다 명료함(clarity)을 매번 우선. — [Game Developer: UI design - sacrifice cool ideas for the sake of clarity every time](https://gamedeveloper.com/design/-i-into-the-breach-i-dev-on-ui-design-sacrifice-cool-ideas-for-the-sake-of-clarity-every-time-); [GDC Vault: Into the Breach Design Postmortem](https://www.gdcvault.com/play/1026333/contactUs)

### Inferences
- Magicka의 "4000조합 = 밸런스 불가" 교훈: 원소 4 × 형태 4 × 수식 4 × 슬롯 위치만으로도 조합 수가 폭발한다. **모든 조합을 균형 잡으려 하지 말고**, (1) 데이터/플레이테스트로 극단만 잘라내고(StS), (2) 원소 간 위계·상성 규칙(Magicka 2의 원소 위계)으로 구조적으로 제어하라.
- Mages of Mystralia의 "동사(행동)+부사(증강)+호출(트리거)"은 우리 설계와 거의 1:1: 형태 = 동사, 원소 = 목적어/속성, 수식 글리프 = 부사, '연쇄/지연' = 트리거. 개발 중 행동 룬 20→11 축소는 "부품 수를 늘리기보다 상호작용 규칙을 깊게"라는 신호.
- Backpack Hero의 인접 조건(“인접하지 않을 때만”)은 원형 마법진 슬롯(링의 이웃)에 바로 이식 가능: "같은 원소가 인접하면 공명(+)", "물-불 인접 시 증기(새 효과)" 같은 인접 규칙이 회로도의 "직렬/병렬 연결" 비유와 맞는다.
- Vampire Survivors 진화는 "특정 두 부품 + 조건 → 상위 부품" 레시피. 마법진에서는 "불+바람+확산 = 화염폭풍" 같은 숨겨진 레시피(도감 해금)로 발견의 쾌감 제공.
- Opus Magnum의 히스토그램/GIF 공유는 "내가 만든 마법진"을 공유·비교하게 하는 장치로 직결: 마법진 도면 이미지 내보내기, "이 회로의 효율(턴당 피해)" 분포 비교.
- Into the Breach의 적 의도 예고 + 명료함 우선은, 조립 시스템이 복잡해질수록 **전투 화면은 더 단순해야** 함을 의미. 영창 턴이 긴 마법진은 "영창 중 적 행동 예고"와 함께여야 전술적 의사결정(언제 큰 마법진을 시작할지)이 성립.
- PoE의 "무엇이 무엇과 작동하는지 불명확" + 트리거 너프 반발 → 트리거/연쇄 계열은 초반부터 비용(영창 턴/마나)을 붙여 설계하라. 출시 후 대형 너프는 "빌드 파괴" 불만을 낳는다; 로그라이크는 런 단위라 영구 빌드 파괴 반발은 덜하지만, 메타 해금 요소가 있으면 동일 문제가 생긴다.

### Gaps
- Spellbreak, Wizard of Legend, Tactical Breach Wizards, Backpack Battles의 설계 자료는 이번 검색에서 확보하지 못함.
- Monster Train의 곱연산 피해(예: 배율 버프) 설계 의도 1차 자료 없음. "모든 카드가 무한 콤보의 일부가 될 수 있게" 했다는 Mark Cooke 발언은 팬 사이트 출처라 미검증(제외).
- Vampire Survivors 진화 시스템에 대한 poncle(Luca Galante) 본인의 설계 발언 1차 자료 없음.

---

## 4. "게임을 부수는" 사기 빌드의 심리, 가독성 vs 깊이, 콤보를 가르치는 법

### Takeaway
개발자들(StS2, PoE2)은 명시적으로 "플레이어가 게임을 부수고 있다고 느끼길" 원하며, 그 쾌감은 (a) 스스로 발견한 틈새, (b) 드물게 완성된다는 희소성, (c) 여전히 남아 있는 도전에서 온다. 가독성 측면에서는 복잡도를 초보에게 보이지 않게 숨기는 "렌티큘러 디자인"과 규칙을 깨는 부품을 통한 점진적 가르침(Balatro Four Fingers)이 핵심 기법이다.

### Cited Findings
- PoE2 Chris Wilson: "everyone wants to feel like they're breaking the game somehow". — [GamesRadar](https://www.gamesradar.com/path-of-exile-2-devs-want-you-to-feel-like-youre-breaking-the-game-with-class-skills)
- StS2 개발진: 게임을 부수는 것이 덱빌더 재미의 일부; 망가지면 너프. — [GamesRadar](https://www.gamesradar.com/games/roguelike/slay-the-spire-2-devs-want-you-to-break-the-game-as-thats-part-of-the-fun-of-deckbuilders-and-if-somethings-busted-they-can-do-one-of-their-favorite-things-nerf-cards)
- 그러나 StS는 무한 콤보를 "드물게" 만드는 것을 최우선 과제로 삼음 — 부수는 쾌감은 허용하되 상시화는 막는다. — [Game Developer](https://gamedeveloper.com/design/how-i-slay-the-spire-i-s-devs-use-data-to-balance-their-roguelike-deck-builder)
- Risk of Rain 2 리뷰: 전통적 균형의 부재가 매력의 일부, 불공정한 조합을 고치지 말고 "디자인 맥시멀리즘"을 유지하길 바람. — [VICE: Risk of Rain 2 makes you a force of nature](https://vice.com/en/article/7xgvbz/risk-of-rain-2-makes-you-a-force-of-nature)
- AV Club: 덱을 보며 "정말 망가진 무언가를 끼워 넣을 틈"을 찾는 즐거움. — [AV Club: The joy of breaking a video game](https://www.avclub.com/game-theory-shroom-and-gloom-breaking-games)
- Digital Trends(Inkbound): 훌륭한 로그라이크의 척도는 "얼마나 완전히 부술 수 있느냐". — [Digital Trends](https://digitaltrends.com/?p=3243043)
- 포럼 의견(희소성): 매 런 특정 사기 빌드를 보장할 수 없고 런이 짧고 무작위라 끝나기 전에 모든 조각을 모으기 어렵다 → 그래서 특별하다; 특정 빌드를 안정적으로 낚을 수 있으면 즉흥 적응이 필요 없어진다. 반론: 최적이 아닌 빌드가 도태돼 다양성이 줄고, 전투가 사소해지면 빌드가 밋밋해진다. — [Lemmy 토론](https://lemmy.cleberg.net/post/7774/7863); [Lemmy 토론](https://lemmy.cleberg.net/post/7774/8244) (개인 의견)
- 인디 개발자(itch.io): 설계 목표는 "aha" 순간 — 어떤 것이 다른 것과 엄청나게 시너지가 난다는 걸 깨닫는 순간. — [itch.io 포스트](https://itch.io/post/13024050) (개인 개발자 의견)
- Diablo 4 사례 분석: 의도치 않은 "god roll"을 찾아내는 발견 문화가 사기 빌드의 재미. — [L'ODJ](https://www.lodj.ma/Diablo-4-s-overpowered-builds-why-they-happen-why-they-re-fun_a147919.html)
- 렌티큘러 디자인(Mark Rosewater, MTG): 같은 카드가 초보에게는 단순하게, 숙련자에게는 깊게 보이도록 복잡도를 "자연스럽게" 숨긴다; 레벨 게이팅 같은 인위적 차단은 렌티큘러 디자인이 아님. 2006–07 복잡한 세트 이후 신규 유입 감소가 계기. — [Wizards: Lenticular Design (2014)](https://magic.wizards.com/en/news/making-magic/lenticular-design-2014-03-31); [Wizards: The Grand Experiment (2020)](https://magic.wizards.com/en/news/making-magic/grand-experiment-2020-05-25); [GiantBomb 에세이](https://giantbomb.com/users/4072/articles/looking-at-nintendo-through-the-lens-of-lenticular)
- Rosewater(2025, Draftsim 요약): 복잡도를 더하는 카드가 곧 참신함·흥분을 더하는 카드라 쉬운 해법이 없음; 복잡도 증가는 확장 게임의 영구적 특성. — [Draftsim: MTG complexity creep](https://draftsim.com/mtg-complexity-creep/)
- Balatro의 "extended low-calorie tutorial", Four Fingers = 훅을 처음 이해시킨 순간. — [Game Developer](https://gamedeveloper.com/design/balatro-creator-unveils-a-few-slick-signposting-strategies)
- Into the Breach: "명료함을 위해 멋진 아이디어를 매번 희생". — [Game Developer](https://gamedeveloper.com/design/-i-into-the-breach-i-dev-on-ui-design-sacrifice-cool-ideas-for-the-sake-of-clarity-every-time-)
- Noita: 게임이 거의 설명하지 않아 학습이 느림 → 커뮤니티 위키/시뮬레이터가 대체. — [Steam Workshop 토론](https://steamcommunity.com/workshop/filedetails/discussion/2572385079/5800060047325831212); [Noita Wiki: Wand Simulator](https://noita.wiki.gg/wiki/Tool:_Noita_Wand_Simulator)

### Inferences
- "부수는 쾌감"의 3조건(추론): ① 발견의 주체가 플레이어일 것(정답을 주지 않음), ② 완성이 확률적·희소할 것(매 런 보장 X), ③ 부순 뒤에도 보스/고난도에서 시험받을 것(전투가 완전히 사소해지면 지루). 로그라이크 구조(런 단위 리셋)가 ①②를 자연스럽게 보장한다.
- 우리 게임에 적용: "사기 마법진"은 허용하되 영창 턴 비용이 안전장치다 — 거대 회로는 강하지만 영창 중 무방비 → 방벽/소환으로 시간을 버는 "보조 회로"가 필요해지며, 이것이 빌드 다양성(공격 회로 + 방어 회로)을 만든다.
- 렌티큘러 적용: 기본 글리프는 초보에게 "불 = 화상 피해" 정도로 단순하지만, 숙련자에게는 "불은 바람과 인접 시 확산 범위 +1, 물과 인접 시 증기로 변환" 같은 숨은 규칙이 보이도록. 툴팁 1층(단순)·2층(상호작용 키워드) 구조.
- 가르치는 순서(추론): Balatro식으로 "규칙을 깨는 부품 하나"를 초반 확정 보상으로 → 훅 각인; 이후 키워드 단위로 하나씩 해금; 편집 화면의 실시간 미리보기로 실험 비용을 0에 가깝게.

### Gaps
- 자기결정이론(유능감) 등 학술 심리 연구를 빌드 크래프팅에 직접 적용한 논문은 이번 검색에서 확보하지 못함(DiGRA 논문 링크 [dl.digra.org](https://dl.digra.org/index.php/dl/article/download/1938/1937)가 Noita 관련 검색에 떴으나 내용 미확인).
- Game Maker's Toolkit의 Noita/빌드 관련 영상은 검색으로 확인되지 않음.
- Rosewater의 "세 가지 복잡도" 원문 세부 목록 미확인.

---

## 5. 슬롯형 마법진 시스템으로 번역 가능한 구체적 디자인 패턴

### Takeaway
검증된 패턴은 ① 순서 의존 실행(Noita 왼→오, 수식자는 다음 대상에 적용), ② 드로우/호출 규칙(멀티캐스트·트리거), ③ 2단 점수(가산 후 승산, Balatro), ④ 위치/인접 조건(Backpack Hero, Blueprint), ⑤ 레시피형 진화(Vampire Survivors), ⑥ 동사-부사-트리거 문법(Mages of Mystralia), ⑦ 데이터 기반 극단 컷(StS), ⑧ 결과 공유·비교(Opus Magnum)다.

### Cited Findings
- 순서 의존 + 드로우 규칙: 수식자 1장 드로우, 멀티캐스트 다수 드로우, 투사체는 트리거일 때만 드로우. — [Noita Wiki: Expert Guide: Draw](https://noita.wiki.gg/wiki/Expert_Guide:_Draw)
- 수식자는 "다음 투사체"에 적용 → 배치 순서가 곧 설계. — [dood.gg](https://dood.gg/ko/noita/wands)
- 트리거는 투사체 위치에서 다른 주문을 시전. — [Noita Wiki: Add Expiration Trigger](https://noita.wiki.gg/wiki/Add_Expiration_Trigger)
- 가산 vs 승산 공존 + 색 구분. — [GamesHub](https://www.gameshub.com/news/features/balatro-roguelike-deckbuilder-2637397)
- 위치 복사(Blueprint: 오른쪽 조커 복사). — [Comicbook](https://comicbook.com/gaming/news/best-joker-combos-balatro)
- 인접 조건부 효과(창: 다른 무기와 비인접 시 범위 피해). — [Epic Games Store](https://store.epicgames.com/news/backpack-hero-makes-inventory-management-a-blissful-delight)
- 진화 레시피(무기 최대 레벨 + 특정 패시브 + 조건). — [GameSpot](https://www.gamespot.com/articles/vampire-survivors-how-to-evolve-weapons/1100-6508815/)
- 동사(행동)·부사(증강)·트리거, 위치에 따라 결과 상이, 행동 룬 20→11 축소. — [Destructoid](https://www.destructoid.com/mages-of-mystralias-spellcrafting-is-like-programming-magic/); [Game Developer](https://gamedeveloper.com/design/creative-process-of-a-procedural-spell-crafting-system)
- 원소 반복 강화(불+불+불), 원소 결합 시 형태 변환(방패+흙=흙 방벽), 원소 위계로 밸런스. — [Engadget](https://www.engadget.com/2010/04/05/hands-on-magicka/); [Game Developer: Magicka Postmortem](https://gamedeveloper.com/business/postmortem-arrowhead-game-studios-i-magicka-i-); [GameWatcher](https://www.gamewatcher.com/interviews/magicka-wizard-wars-interview/11232)
- 서포트 계열이 "피해 증가"만 선택되는 문제 → 유틸리티 선택지가 사라지지 않게 조정; 트리거에 비용 부과. — [GamesBeat](https://gamesbeat.com/path-of-exile-interview-an-expedition-into-some-big-changes/)
- 무한 콤보는 드물게, 데이터로 조정. — [Game Developer](https://gamedeveloper.com/design/how-i-slay-the-spire-i-s-devs-use-data-to-balance-their-roguelike-deck-builder)
- 히스토그램 비교·루프 GIF 공유. — [Wikipedia: Opus Magnum](https://en.wikipedia.org/wiki/Opus_Magnum)

### Inferences (마법진 = 회로도 번역안; 모두 제안이며 검증 필요)
1. **전류 흐름 = 실행 순서**: 중심(전원/코어) → 링(가공) → 외곽(출력) 순으로 "전류"가 흐른다고 정의. 수식 글리프는 "다음으로 전류가 닿는 소자"에 적용(Noita 규칙). 편집 화면에서 전선이 점등되며 순서를 보여주면 Noita의 불투명성 문제를 해결하면서 회로도 유머도 살린다.
2. **형태 = 동사, 원소 = 속성, 수식 = 부사, 연쇄/지연 = 트리거(서브루틴 호출)**: Mages of Mystralia 문법. '연쇄'는 "적중 시 다음 링의 마법진을 호출", '지연'은 "N턴 후 발동(타이머 트리거)" — 턴제에서 지연은 강력한 전술 도구(적 이동 예측 지점에 설치).
3. **2단 점수식**: 최종 위력 = (원소 기본값 + 가산 글리프) × (승산 글리프들의 곱). 승산 글리프는 희귀·고비용(영창 +턴)으로 묶고 색을 다르게. 발동 연출에서 소자별로 수치가 누적되며 마지막 ×에서 폭발(Balatro식 숫자 쾌감).
4. **인접 규칙(직렬/병렬)**: 링에서 같은 원소 인접 = 공명(+), 상극 인접 = 반응(물+불=증기 장판, 바람+불=확산 화염) — Magicka의 원소 결합 변환과 Backpack Hero 인접 조건 결합. "병렬 분기" 글리프 = Blueprint식 복제.
5. **크기-영창 트레이드오프를 1차 밸런스 축으로**: 거대 회로는 강하지만 영창 턴 동안 Into the Breach식 적 행동 예고를 보며 리스크를 판단. 이것이 "사기 빌드"의 자연스러운 안전장치이자, 방벽/소환(시간 벌기) 회로의 존재 이유.
6. **레시피 진화**: 특정 조합(예: 불+바람+확산)을 완성하면 "상위 마법진 도면"으로 진화, 도감에 기록(Vampire Survivors). 첫 발견 시 특별 연출.
7. **엔진 부품**: 런을 정의하는 희귀 "코어" 글리프(예: 모든 연쇄를 2회 반복, 지연 마법진이 영창 중에도 발동) — StS 렐릭/Balatro 스케일링 조커에 해당. 스케일링형 코어(전투마다 영구 누적)는 "한 판 더"의 핵심.
8. **불확정성 옵션**: Noita 셔플 지팡이처럼 '불안정 회로'(순서 무작위, 대신 슬롯 +2)로 정밀 vs 물량 선택지.
9. **극단 컷 정책**: 무한 루프(연쇄가 자기 자신을 호출)는 회로도 개그로 처리하되(예: "합선! 과부하로 마법진 폭발"), 루프 횟수 상한·과부하 자해 등 구조적 제한. StS처럼 무한은 "드물게" — 완전 금지하지 말고 고비용 희귀 경로로.
10. **공유 장치**: 완성 마법진을 회로도 스타일 이미지/짧은 GIF로 내보내기, 턴당 피해 분포 비교(Opus Magnum).
11. **가르치는 순서**: 튜토리얼 대신 "규칙을 깨는 첫 글리프"(예: 연쇄)를 초반 확정 보상으로 → 훅 체감(Balatro Four Fingers) → 이후 키워드 한 개씩 도입; 툴팁 2층 구조(렌티큘러).
12. **부품 수 절제**: 원소4·형태4·수식4로 시작하는 현재 계획은 Mages of Mystralia의 20→11 축소 교훈과 맞다. 부품 추가보다 상호작용(인접·순서·트리거) 규칙을 깊게.

### Gaps
- 위 번역안은 수집 자료에서 추론한 제안이며, 해당 패턴이 턴제 전술 로그라이크에서 동일하게 작동한다는 직접 사례(예: Tactical Breach Wizards의 설계 자료)는 확보하지 못함.
- "마법진/회로도" 비주얼을 실제로 사용한 상용 게임의 플레이어 반응 자료는 이번 검색에서 찾지 못함.
- 한국 플레이어(디시/루리웹/아카라이브) 정서 자료 전무 — 별도 조사 또는 네트워크 허용 후 재조사 필요.
