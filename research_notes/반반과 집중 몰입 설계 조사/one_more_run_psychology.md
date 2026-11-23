# "한 판만 더": 5~6시간 연속 플레이를 만드는 심리와 설계 (건강한 몰입 vs 다크 패턴)

> 조사 범위: Civilization, Balatro, Slay the Spire(StS), Hades, Vampire Survivors(VS), Factorio, PokeRogue, Into the Breach 등. 적용 대상은 "마법산업기능사"(문양 조립 마법진, 촉매 등급, 9x9 동시턴 집중 모드 20~30분 런, 반집중 탭 탐색 모드, 무과금 사역마 가챠).
>
> **네트워크 제약 메모:** 이 세션에서는 WebFetch/curl로 본문을 직접 열 수 없었다. 시도했지만 막힌 호스트: deceptive.design, www.gamedeveloper.com, arxiv.org, theconversation.com, namu.moe, phaser.io, gall.dcinside.com, www.reddit.com, store.steampowered.com, steamcommunity.com, pmc.ncbi.nlm.nih.gov, pcgamer.com, gamesradar.com, kotaku.com, wikipedia, acm.org, eprints.whiterose.ac.uk, gup.ub.gu.se, inven.co.kr, bbs.ruliweb.com, techraptor.net, business.columbia.edu. **아래 내용은 모두 웹 검색 스니펫/요약에 근거한다.** 원문 문구를 확인하지 못한 항목은 그렇다고 표시했다. Reddit·루리웹·DC 원글은 직접 읽지 못했다.

---

## Q1. "한 판만 더" 메커니즘: 겹치는 목표, 미완결, 짧은 재시작, 성장 판타지, 조합 발견

### Takeaway
마라톤 세션은 대부분 (a) 항상 '거의 끝난' 하위 목표가 하나 이상 걸려 있는 중첩 목표 구조, (b) 매 순간 의미 있는 선택(Sid Meier의 "흥미로운 결정"), (c) 실패 비용이 낮고 재시작이 즉시인 짧은 런, (d) 런 안에서 숫자/화력이 폭발하는 성장 곡선과 새 조합 발견에서 나온다. 이 중 (a)~(d)는 실력과 이해가 깊어지는 구조와 결합되면 건강한 몰입이 되고, 같은 장치를 슬롯머신식 연출이나 시간 압박과 결합하면 강박 쪽으로 기운다.

### Cited Findings
**Civilization / Sid Meier**
- "just one more turn"이라는 말은 개발 중 동료들이 플레이하며 "한 턴만 더", "멈출 수가 없다"고 말하던 데서 나왔다고 Meier가 회고했다. — [PC Gamer, The complete history of Civilization](https://www.pcgamer.com/au/the-complete-history-of-civilization/) (검색 요약 기준이며 출처 인덱스 매칭은 다소 불확실함); 관련 회고 [PCWorld 인터뷰](https://www.pcworld.com/article/3133567/interview-sid-meier-reflects-on-25-years-of-civilization.html)
- 시리즈 누적 판매 3,300만 장 이상, 합산 플레이 10억 시간 이상으로 보도됐다. — [PCWorld](https://www.pcworld.com/article/3133567/interview-sid-meier-reflects-on-25-years-of-civilization.html)
- Meier 팁 정리 기사: 플레이어의 시선을 "앞으로 올 것"에 두게 하고, 패배는 보상이 충분히 쌓인 뒤에 오게 하라. 처음부터 복잡한 시스템을 만들지 말고 단순한 시스템 여러 개가 상호작용해 복잡성을 낳게 하라. — [Game Developer, "Just one more turn" tips from Sid Meier](https://www.gamedeveloper.com/game-platforms/just-one-more-turn---game-development-tips-and-tricks-from-the-creator-of-civilization-sid-meier-) (본문 미열람, 검색 요약)
- GDC 2012 "Interesting Decisions": 게임플레이를 "흥미로운 결정의 연속"으로 보자는 1989년 발언을 재검토했다. 결정이 흥미로우려면 플레이어가 처한 상황과 의미 있게 상호작용해야 하며, 트레이드오프와 단기/장기 이익 대비, 커스터마이징이 주요 원천이다. — [GDC Vault](https://gdcvault.com/play/1015756/Interesting); [Escapist](https://www.escapistmagazine.com/v2/gdc-2012-sid-meier-sees-interesting-decisions-even-in-rhythm-games/); [Game Developer GDC 2012 요약](https://gamedeveloper.com/design/gdc-2012-sid-meier-on-how-to-see-games-as-sets-of-interesting-decisions)
- "겹치는 목표(overlapping goals)"라는 표현을 Meier 본인이 쓴 1차 출처는 이번 검색에서 찾지 못했다(아래 Gaps 참고). 대신 Jamie Madigan은 "한 턴만 더"는 거의 항상 건물·업그레이드·기술·정복 같은 어떤 구조물을 완성하기 위한 것이므로 자이가르닉 효과의 직접적 결과라고 주장했다. Rigby & Ryan의 책 *Glued to Games*도 자이가르닉 효과를 언급한다. — [Psychology Today, The Zeigarnik Effect and Quest Logs](https://www.psychologytoday.com/us/blog/mind-games/201303/the-zeigarnik-effect-and-quest-logs-8)
- **주의:** 자이가르닉의 원래 효과(미완료 과제를 더 잘 기억함)는 여러 재현 실험에서 유의미한 차이를 찾지 못했다. 재개 경향을 다루는 오브시안키나 효과(중단된 과제로 돌아가려는 경향)가 "돌아오게 만드는" 현상에는 더 가깝다. — [Wikipedia, Zeigarnik effect](https://en.wikipedia.org/wiki/Zeigarnik_effect); [Wikipedia, Ovsiankina effect](https://en.wikipedia.com/wiki/Ovsiankina_effect)
- 2026년 SMU 석사 논문은 무료 시작 게임에서 사람들을 돌아오게 하는 주요 장치로 미완료 과제, 시간제 보상, 잦은 알림을 꼽고 "자이가르닉 메커닉"으로 분류했다. 학생 논문이라 단일 사례 연구로 보아야 한다. — [SMU Guildhall thesis](https://scholar.smu.edu/guildhall_production_etds/11)

**Balatro**
- LocalThunk는 친구가 프로토타입을 "20, 30, 40시간" 했다는 말을 듣고 특별하다는 걸 알았다. 미완성 상태에서도 코어 루프가 이미 중독적이었다고 한다. — [PC Gamer](https://pcgamer.com/games/roguelike/localthunk-had-made-hobby-games-in-the-past-but-realized-balatro-was-something-special-when-a-friend-revealed-he-had-played-it-for-20-30-or-40-hours)
- 디자인은 대부분 시행착오로 나왔다. 포커 족보는 "익숙한 입력 포맷"으로 쓰였다(플레이어가 플러시와 페어의 우열을 이미 앎). 영향작은 Big Two와 Luck Be a Landlord. — [PC Gamer, "I don't play poker at all"](https://www.pcgamer.com/i-dont-play-poker-at-all-says-solo-developer-who-made-the-poker-roguelike-i-cant-stop-playing/); [Game Informer 인터뷰](https://www.gameinformer.com/interview/2024/03/21/balatro-was-almost-called-joker-poker-and-other-details-from-its-creator)
- 리뷰들이 꼽는 이유: 런 대부분이 15~20분 내외로 짧다. 실패가 교육적이다(덱이 왜 막혔는지, 왜 욕심을 냈는지 보인다). 불공정할 만큼 랜덤하지 않다. 지난 런의 강한 조커를 다시 시험해 보고 싶어진다. 런 밖의 덱/카드 해금이 두 번째 동기를 준다. — 검색 요약이 가리킨 리뷰들: [GameSpot "One More Blind"](https://GameSpot.com/reviews/balatro-review-one-more-blind/1900-6418192/), [VGC](https://videogameschronicle.com/review/balatro), [Shacknews](https://www.shacknews.com/article/138994/balatro-review-score?amphtml=1), [VideoGamer](https://www.videogamer.com/features/i-was-getting-tired-of-roguelikes-until-balatro-came-along). (어느 문장이 어느 리뷰에서 나왔는지는 스니펫만으로 확정하지 못함)
- A.V. Club은 Balatro를 "숫자가 커지게 만드는 기술"로 평했다(제목 기준). — [A.V. Club](https://www.avclub.com/balatro-hones-the-art-of-making-numbers-go-up)

**Slay the Spire**
- Mega Crit의 Casey Yano는 StS2에 엔들리스 모드를 넣지 않는 이유로 "런이 길어질수록 덱빌딩이 덜 흥미로워진다"고 말했다. 즉 런 길이에 상한을 두는 것이 의도된 설계다. — [GamesRadar](https://www.gamesradar.com/games/roguelike/slay-the-spire-2-wont-get-an-endless-mode-like-balatro-because-it-limits-infinite-strategies-but-creator-says-maybe-a-modder-will-think-of-a-way-to-make-it-work/)
- StS2 개발 초기에 카드 풀을 줄이려 했지만 테스터들이 "새로운 게 필요해!"라며 싫어했다. 새 조합 발견이 핵심 동력이라는 방증이다. — [PC Gamer](https://www.pcgamer.com/games/roguelike/slay-the-spire-2-dev-says-an-early-idea-was-to-actually-reduce-the-card-pool-but-players-hated-it-we-need-new-stuff/)
- 원작의 일반적 런 길이는 약 45~90분(팬 정리 자료, 개발사 발언 아님). — [saschb2b game-mechanics](https://saschb2b.github.io/game-mechanics/games/slay-the-spire/)

**Hades**
- Kasavin: 죽음을 플레이어가 자주 볼 순간으로 보고 특별히 공을 들였다. 죽을 때마다 하우스로 돌아와 대화와 서브플롯이 진행되고, 작은 자원 보상이 주어진다. 원칙은 "every run should count". 짧게 끊어 해도, 원하는 만큼 길게 해도 되도록 설계했고, 이야기 속에 여러 "멈출 지점(stopping points)"을 서사적 출구로 두었다. 이야기는 유한하며 "이야기가 바닥나기 전에 플레이어가 떠나길" 바란다고 했다. — [Game Developer, How Supergiant weaves narrative rewards](https://gamedeveloper.com/design/how-supergiant-weaves-narrative-rewards-into-i-hades-i-cycle-of-perpetual-death); [Tom's Guide 인터뷰](https://www.tomsguide.com/features/hades-exclusive-interview-supergiant); [ScreenHub](https://www.screenhub.com.au/news-article/features/digital/jini-maxwell/hades-greg-kasavin-breaks-down-supergiants-unique-approach-to-narrative-262459); [GameSpot](https://gamespot.com/articles/hades-changes-what-it-means-to-be-a-roguelike/1100-6483420/) (어느 문장이 어느 기사에서 나왔는지는 스니펫 기준)

**Vampire Survivors**
- Luca Galante: 도박 앱 업계 경력이 상자 개봉의 슬롯머신식 연출에 직접 영향을 줬다. — [Kotaku](https://kotaku.com/enter-the-gungeon-balatro-vampire-survivors-roguelikes-gambling-dodge-roll-cash-grab-2000690804); [PC Gamer](https://pcgamer.com/vampire-survivors-saved-its-creator-from-working-on-mobile-gambling-games)
- 다만 Game Informer 인터뷰를 요약한 Game Developer 기사는 그 배경이 게임 전체가 아니라 "보물상자 개봉에만" 영향을 줬다고 전한다. 핵심 영감은 모바일 게임 Magic Survival. — [Game Developer](https://gamedeveloper.com/design/vampire-survivors-development-sounds-like-an-open-source-fueled-fever-dream)
- Galante는 "아무도 2시간 이상 하지 않을 줄 알았다"고 했지만 본인은 Steam에서만 약 3,000시간을 했다고 추정한다. — [GamesRadar](https://www.gamesradar.com/games/roguelike/on-steam-alone-i-probably-have-3-000-hours-nobody-loves-vampire-survivors-more-than-its-creator-who-once-thought-nobody-would-play-it-for-more-than-two-hours-and-ironically-says-short-games-rule); [iXBT](https://ixbt.games/en/news/2025/09/19/avtora-vampire-survivors-zasosalo-v-sobstvennuiu-igru-tvorec-dumal-cto-eto-igra-na-paru-casov-no.html)

**Factorio** (개발사 1차 발언 없음, 플레이어 서술)
- "공장은 커져야 한다": 채굴기 하나에서 벨트, 판, 제품으로 커지고, 완벽한 정답이 없어 같은 구역을 계속 다시 짓게 된다. — [Lemmy 댓글](https://lemmy.world/comment/18047526)
- "시작하면 갑자기 새벽 5시, 그리고 2주가 지나 있다." 배급해서 해야 하는 게임 목록에 올림. — [hamatti notes](https://notes.hamatti.org/Gaming/Video-games/Reviews/Factorio)
- "Cracktorio"라는 별명과 보상 루프. — [LeadDev](https://leaddev.com/career-development/factorio-and-the-promise-of-better-software-engineering)

**Into the Breach / StS의 의도 공개 (본 게임의 9x9 전술 모드와 직결)**
- Subset: "모든 죽음이 자기 탓으로 느껴지게" 하려고 적 공격 예고(telegraph)를 핵심으로 삼았다. 다른 턴 순서나 시간 시스템도 시도했지만 예고가 단연 가장 흥미로웠다. 공격이 예고되고 내 공격에 확률이 없으면 게임이 퍼즐처럼 느껴진다. — [Game Developer, Road to the IGF: Into the Breach](https://gamedeveloper.com/game-platforms/road-to-the-igf-subset-games-i-into-the-breach-i-)
- 리뷰: 완전 정보 덕에 추측이 사라지고, 어려운 게임이 불공정하게 느껴지지 않는다. — [Kotaku 리뷰](https://kotaku.com/into-the-breach-the-kotaku-review-1823365331); [Destructoid](https://www.destructoid.com/review-into-the-breach/)
- StS는 초기 "Next Turn" 시스템에서 적마다 아이콘을 띄우는 "Intents" 시스템으로 바꿨다(다수 적일 때 UI 문제). PC Gamer는 적 의도의 투명성이 셔플마다 확실성을 쌓아 준다고 평했다. — [Wikipedia, Slay the Spire](https://en.wikipedia.org/wiki/Slay_the_Spire); [PC Gamer Best Design 2019](https://pcgamer.com/best-design-2019-slay-the-spire)

### Inferences
- **중첩 목표 시계(nested goal clocks)**가 핵심이다. Civ에서 한 턴이 끝날 때 보통 2~3개의 카운트다운(건물 완성, 기술, 유닛 도착)이 1~3턴 남은 상태로 걸려 있다. 본 게임에 적용하면 다음과 같다.
  - **런 내부:** 큰 마법진 채널링(n턴 후 발동), 다음 층/웨이브, 이번 런에서 노리는 문양 조합 완성이 서로 어긋난 타이밍으로 겹쳐야 한다.
  - **런 외부:** 두루마리 해독 진척(문양 n개 중 m개 해부), 촉매 등급 승급, 사역마 성장. 런이 끝나는 순간 이 중 하나는 '거의 다 됨' 상태여야 다음 런 시작 동기가 생긴다.
- "단순한 시스템 여러 개의 상호작용"(Meier)과 "익숙한 입력 포맷"(Balatro 포커 족보)은 문양 조립과 맞닿아 있다. 문양 문법(예: 원 + 방위 + 원소)은 소수의 규칙으로 즉시 이해되게 하고, 조합 공간은 상호작용으로 폭발하게 만든다. 그러면 "이 문양을 저 촉매와 붙이면?"이라는 발견이 다음 런의 동기가 된다.
- **9x9 동시턴 설계 경고:** "적이 행동을 미리 정하되 턴 순서만 보여 준다"면 Into the Breach/StS가 공정성의 핵심으로 꼽은 의도 공개가 빠진다. 큰 주문 채널링이 피격으로 끊기는 구조에서 적 행동이 안 보이면 실패가 "내 탓"이 아니라 "운 탓"으로 느껴져 재도전 동기를 깎을 수 있다. 절충안으로 의도의 일부만 공개(유형만, 범위만, 또는 '관측' 문양/촉매로 공개 범위를 넓히는 방식)하는 것이 학습 가능성과 긴장을 함께 지킨다.
- StS가 엔들리스를 거부한 이유(길어지면 덱빌딩이 지루해짐)는 20~30분 런 목표가 옳다는 근거다. 큰 무한 스케일링은 런 밖이 아니라 엔딩 이후 선택 모드로만 둔다.
- Hades의 "모든 런이 의미 있다 + 서사적 출구" 조합은 본 게임의 반집중 모드와 사역마 대화에 그대로 쓸 수 있다. 런이 끝나면 공방으로 돌아와 짧은 대화나 두루마리 해독 한 줄이 열리는 식이다.

### Gaps
- Sid Meier가 "overlapping goals"를 직접 설명한 1차 출처(회고록 *Sid Meier's Memoir!* 등)는 찾지 못했다. Game Developer 본문은 네트워크 차단으로 열람하지 못했다.
- PokeRogue와 Diablo의 설계 의도를 다룬 개발자 1차 인터뷰는 찾지 못했다. PokeRogue는 2024년 6월 r/pokerogue 회원 6.4만 명이라는 지표만 확인했다. — [Phaser news](https://phaser.io/news/2024/06/pokerogue)
- Balatro 리뷰 문장과 출처의 정확한 매칭은 원문을 열 수 없어 확정하지 못했다.

---

## Q2. 몰입(Flow)과 난이도 곡선, 보상예측오차/도파민/가변 보상: 근거와 한계

### Takeaway
Flow는 "도전과 실력의 균형 + 통제감 + 명확한 피드백"에서 생기며, Jenova Chen은 이를 시스템이 몰래 조절하는 DDA가 아니라 **플레이어 선택으로 조절하는 난이도**로 구현하자고 주장했다. 도파민 연구는 "예측보다 좋은 결과"에 반응한다는 RPE 모델이 탄탄하지만, 이를 게임 설계의 '도파민 루프'로 바로 옮기는 것은 과장이다. 가장 경계할 것은 **니어미스와 통제 착각**이다. 이것들은 결과가 불쾌한데도 계속하고 싶게 만든다는 점이 도박 연구에서 확인됐다.

### Cited Findings
- Flow zone: 너무 어려우면 불안, 너무 쉬우면 지루함. 그 사이에 머물게 해야 한다. Chen은 *flOw*에서 플레이어가 스스로 내려가거나 올라가는 선택으로 난이도를 조절하게 했다(사용자 중심 DDA). 적 스폰율이나 데미지를 몰래 바꾸는 방식과 대비된다. 또 "적응적 선택을 제공해 사용자마다 자기 방식으로 Flow를 누리게 하라"고 썼고, 대상 청중이 넓을수록 균형 설계가 어려워진다고 지적했다. — [Chen, "Flow in Games (and Everything Else)", CACM 2007](https://cacmb4.acm.org/magazines/2007/4/5692-flow-in-games-and-everything-else/fulltext); [Chen 논문 PDF](https://khoury.northeastern.edu/~lieber/courses/csu670/f08/materials/p31-chen-flow-in-games.pdf)
- Csikszentmihalyi의 flow 기준에는 능력과 도전의 균형, 개인적 통제감이 포함된다. Chen의 선택 기반 방식이 이 기준에 부합한다는 2차 해설이 있다. — [Flow and Difficulty Adjustment in Video Games (Samson)](https://sebsamson.github.io/pdf/Flow%20and%20Difficulty%20Adjustment%20in%20Video%20Games.pdf)
- 도전 최적성이 긍정 정서와 flow에 미치는 영향을 다룬 실험 연구가 있다(제목 기준). — [Cyberpsychology journal](https://cyberpsychology.eu/article/view/30988)
- SDT 동기 모델(Przybylski, Rigby, Ryan 2010): 게임의 매력과 웰빙 효과는 유능감, 자율성, 관계성 욕구 충족에서 나온다. 같은 논문이 장애적 몰입의 전후 요인도 검토한다. — [Review of General Psychology 2010 (Essex repo)](https://repository.essex.ac.uk/7228/)
- 욕구 충족이 강박적 열정이 아닌 **조화로운 열정(harmonious passion)**을 키운다고 가정한 연구도 있다("having to vs wanting to play"). — [Przybylski et al. 2009, ACU](https://acuresearchbank.acu.edu.au/item/89x90/having-to-versus-wanting-to-play-background-and-consequences-of-harmonious-versus-obsessive-engagement-in-video-games)
- RPE: 도파민 뉴런은 보상이 예측보다 크면 더 발화하고, 완전히 예측되면 기저선, 예측보다 작으면 감소한다. — [Schultz, Dayan, Montague 1997, Science](https://www.its.caltech.edu/~jkenny/nb250c/papers/Schultz-1997.pdf); [PMC review, Dopamine reward prediction error coding](https://pmc.ncbi.nlm.nih.gov/articles/PMC4826767)
- 게임 중 선조체 도파민 방출을 PET로 처음 보였고, 방출량이 수행 수준과 양의 상관을 보였다(Koepp 1998, Nature). 한계도 있다. PET는 수십 분 단위로 적분하므로 시행별 RPE 신호를 볼 수 없고, 머리 움직임과 혈류 교란 문제가 지적됐다. RPE를 직접 검증한 연구도 아니다. — [PubMed 9607763](https://pubmed.ncbi.nlm.nih.gov/9607763/); [Cardiff ORCA](https://orca.cardiff.ac.uk/id/eprint/35495/)
- 니어미스(Clark et al. 2009, Neuron): 니어미스는 '결과 만족도'로는 불쾌하게 평가되면서도 '계속하고 싶음'을 높였다. 승리 관련 선조체·섬엽 회로를 동원했고, **플레이어가 개인적 통제를 가질 때 효과가 더 강했다**. 저자들은 통제 착각을 메커니즘으로 제시했다. — [PMC2658737](https://pmc.ncbi.nlm.nih.gov/articles/PMC2658737); [Cambridge press](https://cam.ac.uk/node/25799)
- 목표 경사(Kivetz, Urminsky, Zheng 2006): 커피 쿠폰에서 10개 중 0개로 시작한 그룹보다 12개 중 2개를 미리 찍어 준 그룹이 10회 구매를 더 빨리 마쳤다(중앙값 10일 vs 15일). 목표에 가까워질수록 행동이 가속된다. — [Columbia Business School](https://business.columbia.edu/faculty/research/goal-gradient-hypothesis-resurrected-purchase-acceleration-illusionary-goal); [논문 PDF](https://business.columbia.edu/sites/default/files-efs/pubfiles/1200/goalgradient.pdf)
- Balatro의 매 핸드가 "판을 뒤집을 그 한 판일 수 있다"는 가변비율 강화 해석이 있다(의견 글). — [Mechanics of Magic](https://mechanicsofmagic.com/?p=44524)

### Inferences
- **건강한 RPE 설계:** 놀라움의 원천을 "무작위 숫자"가 아니라 "내가 몰랐던 상호작용 발견"에 두면 예측오차가 학습으로 소진된다. 이해하면 더 이상 놀랍지 않고, 다음 발견으로 넘어가게 된다. 문양 조합 효과를 결정적(같은 입력이면 같은 출력)으로 만들고, 랜덤은 "무엇을 얻느냐"(드랍 두루마리, 촉매 부가효과)에만 쓰면 Into the Breach식 공정성과 Balatro식 놀라움을 같이 얻는다.
- **촉매 랜덤 효과 주의:** 등급(납→금)과 랜덤 효과, 소모형이 결합되면 가챠나 강화 도박처럼 니어미스 구조가 쉽게 생긴다. "금 촉매로 그렸는데 효과가 아깝게 빗나감" 같은 연출(릴이 멈추기 직전 흔들림, 한 칸 차이 표시)을 금지한다. 랜덤 효과는 그리기 전에 미리 보여 주거나(선택 후 확정), 범위를 공개해 기대값을 플레이어가 계산할 수 있게 한다.
- **난이도:** Chen식 선택형 난이도가 9x9 모드와 잘 맞는다. 예: 층 진입 시 "위험한 길/안전한 길", 런 시작 시 '봉인(Ascension 계열)' 단계 선택, 반집중 모드의 push-your-luck 깊이 선택. 몰래 하는 DDA는 실력 성장의 의미를 흐리므로 피한다.
- 목표 경사 효과는 진행 막대 설계에 쓸 수 있다. 다만 Kivetz의 "미리 찍어 준 2칸"처럼 **가짜 진척**을 주는 것은 경계선에 있다. 본 게임에서는 실제 진척(해부한 문양 수 등)만 표시하는 것을 원칙으로 둔다.

### Gaps
- "가변 보상 = 도파민 = 중독"이라는 대중적 서술을 게임 맥락에서 직접 검증한 신경과학 연구는 이번 검색에서 확인하지 못했다. Koepp 1998은 RPE가 아니라 과제 수행 중 방출만 보였다.
- Przybylski 2010 본문의 구체적 수치는 확인하지 못했다.

---

## Q3. 세션 구조: 빠른 재시작과 '거의 다 됨'이 장시간 세션을 만드는 방식, 멈출 지점이 흐려지는 이유

### Takeaway
세션이 길어지는 구조는 "런 사이의 경계가 결론이 아니라 다음 시작으로 느껴질 때"다. 즉시 재시작, 런 종료 시 해금이나 '거의 다 찬' 메타 진척, 마지막에 본 강한 조합의 잔상이 겹치면 경계가 흐려진다. 반대로 연구는 플레이어가 **종결감(closure)이 있는 지점**에서 스스로 멈출 수 있을 때 세션 종료 경험이 좋다고 본다. 강제 피로도 시스템은 역효과가 날 수 있다.

### Cited Findings
- 플레이 세션의 끝을 플레이어가 어떻게 경험하는지는 거의 연구되지 않았다. 2024 연구는 disengagement를 "나중에 돌아올 계획을 갖고 멈추는 행위"로 정의하고, 긍정적 종료 경험을 위한 설계 포인트를 제안한다. — [arXiv 2406.00189](https://arxiv.org/pdf/2406.00189)
- 2023 포지션 페이퍼: 분야 대부분이 계속 플레이시키기에 집중해 왔다. 매끄럽고 방해가 적은 종료를 돕는 설계 도구로 disengagement를 제안한다. 아동처럼 스스로 시간 조절이 어려운 집단이 있으며, 후속 연구에서 아동과 부모가 종결 지점에 닿기 전에 세션이 끝날 때 좌절한다는 결과가 나왔다. — [arXiv 2303.15400](https://www.arxiv.org/abs/2303.15400); [KIT 출판물](https://publikationen.bibliothek.kit.edu/1000177702/156262101)
- 캐주얼 게임 연구에서 마지막 순간이 전체 경험 인상에 크게 작용한다(피크엔드 계열). — [arXiv 2406.00189](https://ar5iv.labs.arxiv.org/html/2406.00189) (검색 요약)
- *Torchlight II*에 피로도 메커닉을 넣은 학위논문: 세션을 줄이려던 의도와 달리 목표 달성이 늦어졌고, 오히려 세션 사이 휴식이 길어질 가능성을 시사했다(단일 게임, 소표본). — [UCT thesis](https://pubs.cs.uct.ac.za/id/eprint/1248/1/Thesis.pdf)
- Hades는 짧게도 길게도 할 수 있게 설계하고 이야기 속 "멈출 지점"을 둔 사례로 보도됐다. — [Tom's Guide](https://www.tomsguide.com/features/hades-exclusive-interview-supergiant); [Game Developer](https://gamedeveloper.com/design/how-supergiant-weaves-narrative-rewards-into-i-hades-i-cycle-of-perpetual-death)
- Dodge Roll(Enter the Gungeon)의 Dave Crooks는 VS와 Balatro 이후 로그라이크가 슬롯머신화했고 "약간 돈벌이 같다"고 비판했다. 대표 예로 약 45초마다 플레이를 끊고 뜨는 3지선다 팝업을 들었다. 한 개발자의 의견이다. — [Kotaku](https://kotaku.com/enter-the-gungeon-balatro-vampire-survivors-roguelikes-gambling-dodge-roll-cash-grab-2000690804); [Game*Spark(일본어)](https://www.gamespark.jp/article/2026/04/28/165813.html); [PC Gamer](https://pcgamer.com/games/roguelike/as-enter-the-gungeon-celebrates-its-10th-anniversary-its-creators-have-some-choice-words-for-the-modern-roguelike-were-seeing-it-mutate-to-the-version-of-itself-that-popularity-obfuscates)
- StS 같은 싱글 게임은 언제든 내려놓을 수 있는데도(30~40분 동안 중단할 수 없는 멀티와 달리) 루프를 무시하기 어렵다는 칼럼이 있다. — [Inquirer](https://plus.inquirer.net/?p=394568)

### Inferences (본 게임 세션 설계안)
- **런 종료 화면 = 결론 화면.** 런 요약(가장 강했던 마법진, 새로 해부한 문양, 공방에 가져가는 것)을 보여 주고, 기본 버튼은 "공방으로 돌아가기"로 둔다. "즉시 재도전"은 보조 버튼으로 둔다. 재시작 비용은 낮게 유지하되(로딩 없음, 2클릭) 자동 시작 카운트다운은 넣지 않는다.
- **Hades식 서사적 출구:** 런 몇 번마다 사역마나 스승과 짧은 장면을 넣고 "오늘은 여기까지"라는 자연스러운 마침표를 준다. 다음 장면의 미리보기(예: "다음 두루마리 해독 시 계속")는 가볍게만 남긴다. 미완결의 끌림은 남기되 강박적 cliffhanger는 피하는 정도다.
- **런 내부의 겹치는 시계는 적극적으로, 런 외부의 시계는 '선택적으로'.** 런 안에서 채널링, 층, 조합 목표가 겹치는 것은 건강한 몰입이다. 런 밖에서 "촉매 승급까지 1회!"를 런 종료 화면마다 강조하면 경계가 흐려진다. 메타 진척은 공방 화면에서 플레이어가 직접 보러 갈 때 보이게 한다.
- **3지선다 빈도:** Crooks의 비판처럼 보상 선택 팝업이 리듬을 지배하지 않게 한다. 9x9 모드에서는 전투 사이, 층 사이에만 선택을 둔다.
- **반집중 모드(탭 탐색, 빛나는 오브젝트, push-your-luck 깊이)**가 가장 무심코 길어지기 쉬운 구조다(저노력 + 가변 보상 + 계속 가능). 깊이마다 "귀환" 선택을 명시적인 쉼표로 만들고, 귀환 시 획득 정산 연출을 결론감 있게 준다. 손작업(애니메 몰입) 모드는 별개로 두고 시간 압박이나 랜덤 보상 없이 차분하게 유지한다.
- 피로도나 에너지 같은 강제 제한은 넣지 않는다(역효과 근거, 그리고 playing-by-appointment 다크 패턴과 인접).

### Gaps
- "빠른 재시작 → 세션 길이 증가"를 정량 측정한 공개 연구는 찾지 못했다. 업계 텔레메트리는 비공개다.
- Balatro, StS의 평균 세션 길이 공식 통계는 찾지 못했다.

---

## Q4. 피해야 할 다크 패턴, 그리고 다크 패턴 없이 깊이를 만드는 방법

### Takeaway
Zagal, Björk, Lewis(2013)는 다크 게임 디자인 패턴을 "제작자가 플레이어 이익에 반해 의도적으로 넣은 설계"로 정의하고 시간, 금전, 사회 세 범주(7개 패턴)로 나눴다. 실돈이 없는 본 게임에서도 **시간형**(그라인딩, 약속 플레이)과 **심리형**(니어미스, 가짜 진척, 손실 회피 연출)은 그대로 적용될 수 있다. 루트박스 연구는 실돈 루트박스 지출과 문제성 도박의 상관을 반복 확인했다(인과는 미확정). 따라서 무과금 가챠라도 도박 연출 문법은 빌리지 않는 것이 안전하다.

### Cited Findings
- 정의와 범주: 다크 게임 디자인 패턴은 제작자의 의도적 선택이 플레이어 이익에 반하는 것이다. 7개 유형, 3개 범주로 나뉜다. 시간형은 예상보다 오래 플레이하게 하고, 금전형은 더 쓰게 하며, 사회형은 사회적 지위 욕구를 이용한다. 저자들은 창작자 비판이 아니라 게임의 가치에 대한 논의에 기여하려는 것이라고 밝혔다. — [Chalmers research](https://research.chalmers.se/en/publication/177148); [GUP 원문](https://gup.ub.gu.se/file/101018); [Deceptive Patterns 요약](https://deceptive.design/articles/dark-patterns-in-the-design-of-games) (원문 미열람)
- 명명된 패턴(검색으로 확인된 범위): Grinding(반복 작업으로 원하는 것보다 오래 플레이), Playing by Appointment(매일 접속해야 퀘스트 완료), Pay to Skip(그라인딩을 돈으로 건너뜀), Social Pyramid Schemes. 원 논문의 Pre-delivered Content, Monetized Rivalries, Impersonation 정의 문구는 스니펫에서 확인하지 못했다. — [arXiv 2412.05039](https://arxiv.org/html/2412.05039v1); [Dupont & Malliet 2021](https://orbi.uliege.be/bitstream/2268/263460/1/AL_2021-4-1_Study-1_Dupont-Malliet.pdf)
- 2024 모바일 연구는 네 번째 범주로 **심리형**을 추가했다. — [arXiv 2412.05039 PDF](https://arxiv.org/pdf/2412.05039)
- 비판: DiGRA 2020 논문은 "패턴"이 게임 설계 윤리 분석의 생산적 출발점이 아니라고 주장한다(맥락 의존성). — [DiGRA 2020 paper 189](https://eprints.whiterose.ac.uk/156460/1/DiGRA_2020_paper_189.pdf)
- 루트박스: Zendle & Cairns(2018, PLOS ONE, 성인 대규모 표본)에서 루트박스 지출이 많을수록 문제성 도박 심각도가 높았다. 인과 방향은 알 수 없고 양방향일 수 있다. 2019 재현 연구에서도 같은 연관이 나왔고, 2020 후속 연구에서는 특정 기능 유무와 상관없이 실돈으로 팔리면 연관이 있었다. — [PLOS ONE PDF](https://eprints.whiterose.ac.uk/139116/1/journal.pone.0206767.pdf); [York 보도자료](https://www.york.ac.uk/news-and-events/news/2018/research/researchers-find-link-problem-gambling-loot-boxes/); [재현 연구](https://eprints.whiterose.ac.uk/143229/3/journal.pone.0213194.pdf); [Loot box features (CHB)](https://eprints.whiterose.ac.uk/148267/1/CHB_Loot_Box_Features_Accepted.pdf)
- Balatro는 베팅, 소액결제, 루트박스가 없지만 포커 테마로 PEGI 18을 받았고, LocalThunk가 "차라리 소액결제나 루트박스를 넣으면 3세가 되겠다"고 비꼬았다. 이후 항소로 12로 재분류됐다는 보도가 있다(시점 미확인). LocalThunk는 유언에 Balatro IP를 도박 회사나 카지노에 팔거나 라이선스하지 말라고 적었다고 보도됐다. — [PC Gamer](https://www.pcgamer.com/games/roguelike/balatro-dev-swings-at-pegi-for-rating-it-18-because-of-its-evil-playing-cards-jokes-that-he-should-add-microtransactions-like-ea-sports-fc-25-to-lower-that-rating-to-a-3); [TechRadar 재분류](https://www.techradar.com/gaming/balatro-has-had-its-pegi-18-age-rating-overturned-following-appeal-i-hope-this-change-will-allow-developers-to-create-without-being-unfairly-punished); [80.lv](https://80.lv/articles/balatro-s-pegi-rating-is-such-a-pain-that-localthunk-almost-wanted-to-add-real-gambling-for-3-rating)
- Balatro는 도박을 권하기보다 드러낸다는 해석과, 돈은 들지 않지만 시간을 쓰게 하는 강박이라는 해석이 공존한다. — [Inverse](https://www.inverse.com/gaming/balatro-poker-gambling-addiction-design-roguelike-rec); [TechRaptor](https://Techraptor.net/gaming/features/high-stakes-how-balatro-confronts-addiction-and-roguelikes)
- 니어미스는 통제감이 있을 때 계속 의향을 더 높인다(Q2 Clark 2009). — [PMC2658737](https://pmc.ncbi.nlm.nih.gov/articles/PMC2658737)

### Inferences: 본 게임의 금지 목록과 대체안

| 피할 패턴 | 본 게임에서 생길 수 있는 지점 | 대체(깊이는 유지) |
|---|---|---|
| Playing by Appointment / 데일리 강제 | 사역마 일일 가챠, 일일 촉매 | 데일리 시드 런(StS식)은 선택 콘텐츠로만, 놓쳐도 손실 없음, 스트릭 없음 |
| Grinding | 금 촉매를 얻으려 반집중 모드를 반복 | 촉매 등급을 실력으로 얻는 경로(어려운 층, 정교한 마법진) 제공, 하위 촉매 합성 |
| 니어미스 연출 | 촉매 랜덤 효과, 가챠 연출 | 결과를 즉시·정직하게 표시, "아깝다" 연출 금지, 확률 공개 |
| 가짜 진척(illusory progress) | 진행 막대 선채움 | 실제 진척만 표시 |
| 손실 회피 압박(시간 한정, 사라지는 보상) | 반집중 모드 빛나는 오브젝트 | 오브젝트가 사라지지 않거나 사라져도 다음에 다시 등장 |
| 가챠 천장 압박/수집 강박 | 사역마 가챠 | 중복은 다른 자원으로 전환, 모든 사역마를 플레이로 확정 획득하는 경로, 가챠 재화는 플레이로만 획득하고 상한 있음 |
| 3지선다 팝업 남발 | 레벨업마다 선택 | 층·전투 사이에만 선택 |

- **깊이의 원천을 '지식과 기술'에 둔다(Meier의 흥미로운 결정, Into the Breach의 공정성).** 문양 문법 이해, 적 의도 해석, 채널링 타이밍 판단처럼 다음 런에 가져가는 것이 실력인 구조가 건강한 "한 판만 더"다. 다음 런에 가져가는 것이 확률 재화뿐이면 강박형이 된다.
- 무과금이어도 SDT의 자율성을 해치는 장치(일일 접속 압박, 사라지는 보상)는 "having to play"를 만든다. 조화로운 열정은 유능감과 자율성 충족에서 나온다(Q2).

### Gaps
- Zagal 2013 원문의 7개 패턴 전체 정의(Pre-delivered Content, Monetized Rivalries, Impersonation 등)는 원문 접근이 막혀 문구로 확인하지 못했다.
- 실돈이 없는 가챠의 해악에 대한 실증 연구는 찾지 못했다(루트박스 연구는 실돈 전제).

---

## Q5. 플레이어 증언: "밤새 했다", "시간이 사라졌다"와 그 원인 귀속

### Takeaway
영어 리뷰와 증언은 시간 소실의 원인을 대체로 (1) 짧은 런과 즉시 재시작, (2) 실패가 이해 가능해서 "다음엔 더 잘할 수 있다"는 느낌, (3) 지난 런에서 본 조합을 다시 시험하고 싶은 욕구, (4) 숫자가 폭발하는 성장, (5) 끝없는 재설계(Factorio)에 돌린다. 한국어 커뮤니티 원글(DC, 루리웹, 인벤)은 네트워크 차단과 검색 노출 부족으로 직접 수집하지 못했다.

### Cited Findings
- Balatro: 한 주에 12시간을 쏟았고 수면과 업무를 미뤘다는 리뷰. — [TapTap 리뷰](https://taptap.io/post/7025401)
- Balatro: "다음 라운드엔 더 잘할 것 같은" 느낌, 지난 런의 강한 조커를 다시 시험하고 싶은 욕구, 15~20분 단위 런으로 점심시간에도 하다가 "한 판만 더"가 된다. — [VideoGamer](https://www.videogamer.com/features/i-was-getting-tired-of-roguelikes-until-balatro-came-along); [GameSpot](https://GameSpot.com/reviews/balatro-review-one-more-blind/1900-6418192/) (스니펫 기준, 문장별 출처 미확정)
- Balatro: 높은 스테이크에서 계속 지는데도 돌아오게 된다. — [VideoGamer](https://www.videogamer.com/features/i-was-getting-tired-of-roguelikes-until-balatro-came-along)
- Balatro 개발자 본인의 플레이테스터(친구) 20~40시간 사례. — [PC Gamer](https://pcgamer.com/games/roguelike/localthunk-had-made-hobby-games-in-the-past-but-realized-balatro-was-something-special-when-a-friend-revealed-he-had-played-it-for-20-30-or-40-hours)
- StS/StS2: 자유 시간이 적어도 계속 손이 가고, 지루해지지 않는 "타임 싱크"라는 리뷰. — [Dawn](https://www.dawn.com/news/2022520)
- Vampire Survivors: 개발자 본인 3,000시간. — [GamesRadar](https://www.gamesradar.com/games/roguelike/on-steam-alone-i-probably-have-3-000-hours-nobody-loves-vampire-survivors-more-than-its-creator-who-once-thought-nobody-would-play-it-for-more-than-two-hours-and-ironically-says-short-games-rule)
- Factorio: "시작하면 새벽 5시, 그리고 2주가 지나 있다"(배급해야 하는 게임). — [hamatti notes](https://notes.hamatti.org/Gaming/Video-games/Reviews/Factorio)
- 일본 Game*Spark는 2025년 결산 특집 제목에서 "그만둘 수 없는 중독적 로그라이트로 연말연시를 순식간에 소비하자"고 소개했다. 문화적 수사로서의 '시간 소멸'이다. — [Game*Spark 2025 특집](https://www.gamespark.jp/article/2025/12/30/161126.html)
- PokeRogue: 2024년 3월 출시된 Pagefault Games의 웹 기반 로그라이트(Phaser 엔진)로, 한국어를 지원하며 2024년 6월 r/pokerogue 회원이 6.4만 명이었다. 한국 DC 로그라이크 갤러리에 오프라인 실행 팁 글이 있다(커뮤니티 활동은 확인했지만 '밤새 했다' 원글은 미확인). — [Phaser news](https://phaser.io/news/2024/06/pokerogue); [나무위키 미러](https://namu.moe/w/Pok%C3%A9Rogue); [DC 로그라이크 갤러리](https://gall.dcinside.com/rlike/460201)
- 한국어 소개 글(게임메카)은 StS2 출시 후 흥행 돌풍을 전하며 원작을 장르의 기틀을 다진 명작으로 평한다. DC 슬더스 마이너 갤러리가 존재한다. — [게임메카](https://www.gamemeca.com/mv.php?gid=1772483); [DC 슬레이 더 스파이어 갤](https://gall.dcinside.com/m/slay/124346)
- 독일어권 리뷰 제목 "Crack mit Karten(카드로 된 크랙)". — [Galaxus](https://www.galaxus.ch/en/page/balatro-im-test-crack-mit-karten-31922)
- 반례: NPR 기고자는 "삶이 이미 충분히 지옥 같아서" Hades를 그만둬야 했다고 썼다(제목 기준). 반복 실패 구조가 모든 사람에게 즐겁지는 않다는 신호다. — [NPR](https://www.npr.org/2020/11/15/934539471/life-is-hellish-enough-thats-why-i-had-to-stop-playing-hades)

### Inferences
- 증언에서 반복되는 귀인은 "운이 좋을 것 같아서"보다 **"이번엔 내가 더 잘할 수 있을 것 같아서"**다(실력 귀인). 본 게임에서 이 감각을 만들려면 실패 원인이 화면에 남아야 한다. 예: 런 종료 시 "채널링이 끊긴 턴과 원인 적" 리플레이 한 컷, 적 의도 이력 표시.
- "지난 런에서 본 강한 조합을 다시 시험하고 싶음"은 문양 도감(해부한 문양 + 최고 성능 마법진 기록)을 런 시작 화면에 두면 자연스럽게 생긴다. 이것은 강박이 아니라 실험 욕구를 자극하는 건강한 고리다.
- 증언 속 "수면과 업무를 미뤘다"는 부작용 측면이다. 본 게임은 런 종료 화면의 결론감, 플레이 시간 표시(선택형, 비난하지 않는 톤), 서사적 쉼표로 "원하면 멈출 수 있는" 구조를 확보한다.

### Gaps
- DC인사이드, 루리웹, 인벤 원문 증언("밤새 했다", "시간 순삭")은 해당 호스트 차단과 검색 미노출로 수집하지 못했다. 원하면 해당 호스트를 허용한 뒤 재조사가 필요하다.
- Steam 리뷰(한국어 필터)와 Reddit 스레드도 차단되어 직접 인용하지 못했다.
- Diablo의 루트 루프에 대한 증언과 개발자 1차 발언은 이번 조사에서 다루지 못했다.
