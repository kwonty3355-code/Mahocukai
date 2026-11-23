# 로그라이크 리텐션("한 판 더"), 메타 진행, 패배 페널티 설계 조사

> 대상 설계: 20~30분 전술 로그라이크. 공방에서 미리 만든 장비(영구 지팡이 각인 + 직접 그린 소모 스크롤)를 가지고 들어가고, 런 중에는 임시 글리프·스크롤·사역마를 얻는다. 현재 잠정안은 "런에서 지면 가지고 들어간 스크롤만 잃는다"이며, 이 안을 근거와 함께 다시 따져 본다. 스스로 거는 도전 제약(점수·보상 배율, 개인 기록)도 함께 다룬다.
>
> **조사 방법과 접근 제한 (중요)**
> - 이 세션의 WebFetch는 아래 호스트에서 DNS 단계(ENOTFOUND)로 막혔다. 세션 네트워크 허용 목록 밖이기 때문이다.
>   - `www.gamedeveloper.com`
>   - `www.tomsguide.com`
>   - `bottomfeeder.substack.com`
>   - `his.diva-portal.org`
> - 같은 증상이 반복되어 다른 사이트의 전문 fetch는 시도하지 않았다. 따라서 아래 "Cited Findings"는 모두 **WebSearch 결과 요약/스니펫 기반**이고, 원문 전체를 읽고 검증한 것이 아니다. 인용 문구는 검색 엔진이 원문에서 발췌해 보여 준 그대로다.
> - GDC Vault 강연 본문(Hades, Slay the Spire, Darkest Dungeon)은 회원 전용이거나 fetch가 막혀 내용을 직접 확인하지 못했다.
> - Reddit, DC인사이드, 루리웹, 아카라이브의 개별 게시글은 검색에 거의 잡히지 않았다. 커뮤니티 정서는 2차 정리 글과 Steam 토론 스니펫으로만 확인했다.
> - "Inferences"는 출처 사실에서 끌어낸 추론과, 이 게임에 적용할 설계 제안이다. 출처 없이 배경지식에 기댄 내용에는 **(배경지식·미검증)**이라고 표시했다.

---

## Q1. "한 판 더"는 왜 일어나는가: 런 길이, 변동성, 니어미스, 빠른 재시작, 해금 드립

### Takeaway
"한 판 더"를 만드는 핵심은 세 가지다.
1. 죽음이 손실이 아니라 다음 런의 새 내용(서사·해금·선택지)으로 바뀌는 구조
2. 매번 달라지는 런 구성(변동성)
3. 낮은 재시작 비용

Hades는 죽음 자체를 서사 보상으로 바꿨다. Slay the Spire와 Balatro는 "같은 판이 없다"는 변동성과 단계형 난이도로 반복을 끌어냈다. 니어미스(아깝게 짐) 효과는 도박 연구에서조차 재현성이 약하다. 그러니 설계의 기둥으로 삼으면 안 된다.

### Cited Findings
- **Hades: 죽음을 흥미롭게 만든다는 명시적 목표.** Kasavin은 "이야기에 집중하고 영구 진행 요소를 더해, 죽고 다시 시작하는 순간이 최대한 흥미롭도록 하려 했다"고 말했다. 팀은 여러 갈래의 영구 진행과, 플레이마다 이어지며 변하는 서사를 계획했다. — [Game Developer: How Supergiant weaves narrative rewards into Hades' cycle of perpetual death](https://gamedeveloper.com/design/how-supergiant-weaves-narrative-rewards-into-i-hades-i-cycle-of-perpetual-death) (검색 요약 기반, 원문 fetch는 차단됨)
- **Hades의 허브 구조.** 다른 로그라이크는 죽으면 0으로 돌아간다. Hades는 죽을 때마다 서사가 진행되고, 매번 하데스의 집으로 돌아와 캐릭터와 대화하며 곁가지 이야기를 진전시킨다. — [GameSpot: Hades changes what it means to be a roguelike](https://gamespot.com/articles/hades-changes-what-it-means-to-be-a-roguelike/1100-6483420/)
- Kasavin은 개발 중 내부적으로 Hades를 "narrative roguelike"라고 불렀다. — [GDC Podcast ep.16 공지](https://gdconf.com/news/roguelikes-and-narrative-design-hades-creative-director-greg-kasavin-gdc-podcast-ep-16)
- Hades 대사 시스템을 다룬 GDC 2021 세션(Korb·Kasavin)이 있었다. 내용은 확인하지 못했다. — [GDC: Dive into the dialogue of Hades](https://gdconf.com/news/dive-dialogue-hades-gdc-2021)
- **Hades God Mode.**
  - 동작: 피해 저항 20%로 시작해 죽을 때마다 2%씩 오르며, 최대 80%다. 업적은 막히지 않는다. — [GamesRadar: Hades God Mode and Achievements explained](https://www.gamesradar.com/hades-god-mode-achievements)
  - 의도: 일반적인 쉬움 모드로는 부족하다고 봤다. 첫 보너스는 체감되지만 게임을 망치지 않을 정도로 맞췄고, 이후 죽을 때마다 붙는 2%는 잘 느껴지지 않지만 "실력을 키울 시간과 자신감"을 준다. — [Inverse: Hades God Mode interview](https://inverse.com/gaming/hades-god-mode-interview)
  - Hades 2도 God Mode를 유지한다. 받는 피해만 줄이고 주는 피해는 그대로다. — [Destructoid](https://destructoid.com/?p=510022), [GGRecon](https://ggrecon.com/guides/hades-2-god-mode)
  - 출처 충돌: God Mode를 끄면 쌓인 저항이 유지된다는 쪽(Escapist)과 사라진다는 쪽([Game8](https://game8.co/games/Hades-2/archives/453542))이 갈린다. 공식 확인은 못 했다.
- **Balatro.**
  - 로그라이크 요소 덕분에 같은 덱, 같은 스테이크로 해도 런이 똑같은 경우가 없다. — [Rolling Stone: LocalThunk interview](https://www.rollingstone.com/culture/rs-gaming/balatro-localthunk-interview-1235214060/)
  - LocalThunk는 친구가 프로토타입을 "20, 30, 40시간" 했다는 말을 듣고 특별한 게임임을 깨달았다. Big Two와 Luck Be a Landlord에서 영감을 받았다. — [PC Gamer](https://www.pcgamer.com/games/roguelike/localthunk-had-made-hobby-games-in-the-past-but-realized-balatro-was-something-special-when-a-friend-revealed-he-had-played-it-for-20-30-or-40-hours/)
  - 앤티 8을 넘기면 런 승리다. — [Wikipedia: Balatro](https://en.wikipedia.org/wiki/Balatro)
- **Slay the Spire.**
  - Early Access 첫해에 100만 장 이상 팔렸다. 2019 GDC 강연 "Metrics Driven Design and Balance"(Anthony Giovannetti)가 있다. — [GDC Vault](https://gdcvault.com/play/1025731/contactUs)
  - Edge 기사: 정성 피드백에 "공격적인 지표 기반 설계"를 함께 썼고, Heroku 위에 자체 분석 도구를 만들었다. — [PressReader / Edge 2019](https://www.pressreader.com/australia/edge/20190620/282351156287993)
- **Slay the Spire 2: "새 것"에 대한 요구.** 초기에 카드 풀을 줄이는 안이 있었지만, 플레이어 반응은 "새로운 게 필요하다(We need new stuff!)"였다. 신규 콘텐츠·해금 자체가 동기라는 정황이다. — [PC Gamer](https://www.pcgamer.com/uk/games/roguelike/slay-the-spire-2-dev-says-an-early-idea-was-to-actually-reduce-the-card-pool-but-players-hated-it-we-need-new-stuff/)
- **Vampire Survivors.** 30분에 Reaper가 나와 표준 런이 끝난다. 여러 해금이 "30분 생존"이나 "특정 캐릭터로 30분 클리어"에 묶여 있다. Poncle은 비밀을 커뮤니티가 함께 발견하도록 설계했다고 한다. — [GGRecon: Vampire Survivors secret unlocks](https://www.ggrecon.com/guides/vampire-survivors-secret-unlocks-characters-weapons-arcana-levels/), [PCGamesN](https://www.pcgamesn.com/vampire-survivors/unlock-characters), [choostgames](https://choostgames.com/blog/vampire-survivors-secrets/)
- **Risk of Rain 2.** 게임 안 도전 과제를 깨면 생존자, 아이템, 능력, 게임 수정자(modifier)가 해금된다. 해금된 수정자는 런 시작 때 고를 수 있다. — [Wikipedia: Risk of Rain 2](https://en.wikipedia.org/wiki/Risk_of_Rain_2)
- **니어미스 효과의 증거는 약하다.**
  - 초기 슬롯머신 연구에서는 니어미스가 지속 플레이를 늘렸다(Kassinove & Schare의 30% 조건, Clark 등의 VLT 재현).
  - 2019년 Journal of Gambling Studies 연구는 이를 재현하지 못했다. — [Springer: The Near-Miss Effect in Slot Machines (2019)](https://link.springer.com/article/10.1007/s10899-019-09891-8), [PMC 전문](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7214505/)
  - 효과는 개인차(충동성)에 따라 달라진다. — [Tandfonline 2023](https://www.tandfonline.com/doi/abs/10.1080/14459795.2023.2199052), [Springer 2025](https://link.springer.com/article/10.1007/s10899-025-10412-z)
  - 실력 기반 로그라이크에 대한 니어미스 연구는 찾지 못했다.
- **영구 사망 학술 연구.**
  - Parker(2017)는 공포관리이론(Terror Management Theory)으로 영구 사망을 분석했다. 영구 사망에 대한 집중이 로그라이크 커뮤니티가 오래 버틴 주된 동기 요인 중 하나라고 본다. — [Journal of Gaming & Virtual Worlds](https://intellectdiscover.com/content/journals/10.1386/jgvw.9.2.123_1)
  - MIT 석사논문 "Roguelife"의 파일럿 연구는 영구 사망이 플레이 인식을 개선할 수 있다는 예비 결과를 냈다. 저자 스스로 예비 결과라고 한다. — [MIT DSpace](https://dspace.mit.edu/bitstream/handle/1721.1/127723/1196239202-MIT.pdf)

### Inferences
- **"죽음 = 새 콘텐츠"가 Hades의 핵심 레버다.** 이 게임에서는 패배 후 공방에 돌아왔을 때 무언가 새로 열려야 한다. 예: NPC 대사, 새 각인 도안, 새 잉크 레시피, 사역마 도감 항목. "아무것도 없이 귀환"하는 판을 0에 가깝게 만드는 것이 리텐션의 1순위다.
- **God Mode식 '보이지 않는 완충'.** 패배 누적에 비례해 아주 작은 보정을 주고, 끌 수 있게 하며, 업적을 막지 않는다. 이렇게 하면 접근성과 실력자 체면을 함께 지킬 수 있다. 공방 이름에 맞춰 "견습생 보정" 같은 옵션을 생각해 볼 만하다.
- **재시작 비용 = (공방 준비 시간) + (로딩) + (첫 전투 도달 시간).** 스크롤을 직접 그리는 공방 단계가 길면 "한 판 더"의 마찰이 커진다.
  - "지난번 장비로 바로 출발" 버튼이 필요하다.
  - 스크롤 재고를 미리 쌓아 둘 수 있어야 하고, 매 런마다 그리기를 강제하면 안 된다.
- **니어미스는 의도적으로 연출하지 말 것.** 증거가 약하고 도박식 조작이라는 인상을 준다. 대신 패배 화면에 "보스 체력 12% 남음", "개인 최고 기록까지 1층" 같은 정보를 정직하게 보여 준다. 이것은 근거 없는 조작이 아니라 목표 설정 피드백이다.
- **변동성의 위치.** 전술 게임이므로 전투 안 결과의 무작위성보다는 런 구성(보상 풀, 맵, 사역마 조합)에 변동성을 두는 편이 좋다. Balatro와 StS가 그렇다. 런 단위 변동성이 "같은 판 없음"을 만든다.

### Gaps
- Hades GDC/Game Developer 원문(사망 보상 설계의 구체 수치·의도)은 fetch가 차단되어 검색 요약만 확인했다.
- Supergiant의 Tom's Guide 인터뷰("왜 로그라이크를 사랑하고 미워하는가")도 차단되어 내용을 확인하지 못했다.
- Dead Cells, Rogue Legacy, PokeRogue 개발자가 "한 판 더" 동기를 직접 말한 1차 자료는 찾지 못했다.
- 로그라이크 재시작 속도와 세션 지속의 관계를 다룬 정량 연구도 찾지 못했다.

---

## Q2. 로그라이크 vs 로그라이트, 메타 진행 유형(파워 / 다양성 / 지식), 장단점과 플레이어 정서

### Takeaway
메타 진행은 세 가지로 나뉜다.
- **파워형**: 영구 스탯 상승
- **다양성형**: 선택지·콘텐츠 해금
- **지식형**: 플레이어 실력과 정보

파워형은 진입 장벽을 낮추지만, 실력 대신 반복 횟수(그라인드)가 클리어를 결정한다는 비판을 받는다. 최근 커뮤니티 정서는 "옆으로 넓어지는(sideways) 해금은 여전히 좋고, 파워형은 피곤하다" 쪽이다. 지팡이 각인(영구)은 파워형에 가깝기 때문에 상한과 평평한 곡선이 필요하다.

### Cited Findings
- **정의와 차이.**
  - 정통 로그라이크는 사망 시 진행이 모두 사라진다. 로그라이트는 일부 성장이 이어진다.
  - 로그라이트의 핵심은 메타 프로그레션이다. 사망 후에도 능력을 영구 강화하는 시스템이 로그라이크의 진입 장벽을 낮춘다.
  - 대표 예는 Dead Cells의 셀 화폐 영구 업그레이드다. — [게임인사이트: 죽음과 성장의 역설 '로그라이크'란 무엇인가](https://www.gameinsight.co.kr/news/articleViewAmp.html?idxno=36403), [나무위키: 로그라이트](https://namu.wiki/w/%EB%A1%9C%EA%B7%B8%EB%9D%BC%EC%9D%B4%ED%8A%B8), [더위키: 로그라이트](https://thewiki.kr/w/%EB%A1%9C%EA%B7%B8%EB%9D%BC%EC%9D%B4%ED%8A%B8)
- **한국어권 비판.** 실력이 늘지 않아도 영구 강화와 각종 보너스로 난이도가 점점 쉬워진다는 것이 로그라이트의 특징이라는 비판적 시각이 있다. 메타 진행이 밸런스를 무너뜨릴 수 있다는 지적도 있다. — [겜생의 게임생활](https://vgamelifev.com/%EB%A1%9C%EA%B7%B8%EB%9D%BC%EC%9D%B4%ED%81%AC%EC%99%80-%EB%A1%9C%EA%B7%B8%EB%9D%BC%EC%9D%B4%ED%8A%B8-%EC%9E%A5%EB%A5%B4%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90/), [Thinking Machine(김우진): 로그라이크와 로그라이트 장르의 발전](https://blog.woojinkim.org/the-evolution-of-the-roguelike-and-roguelite-genres/)
- **장르 기준.** 로그라이크 기준은 2008년 Berlin Interpretation으로 정리됐다. 로그라이트는 기준이 모호하다. — [Wikipedia: Roguelike](https://en.wikipedia.org/wiki/Roguelike), [컴투스온: 로그라이크](https://on.com2us.com/content/rougelike/)
- **다양성 우선론.** 메타 진행은 힘이 아니라 선택지를 늘려야 하고, 100번째 런도 1번째 런만큼 어려워야 한다는 주장이다. StS가 대표 예다. — [saschb2b game-mechanics: meta as variety not power](https://saschb2b.github.io/game-mechanics/concepts/meta-as-variety-not-power)
  - 주의: 이 페이지에서 Mega Crit이 메타 파워를 명시적으로 거부했다는 부분은 인터뷰 출처가 없다. 미검증이다.
- **혼합형.** Moonlighter 2는 방어구 업그레이드로 실제 스탯이 오르는 혼합형이다. — [saschb2b: Moonlighter 2 progression](https://saschb2b.github.io/game-mechanics/games/moonlighter-2/progression)
- **강도 조절의 어려움.** 메타 진행이 너무 약하면 의미가 없고, 너무 강하면 런이 시시해진다. 많은 로그라이트가 긴장 유지를 위해 일부러 속도를 늦춘다. — [gamebrief glossary: meta progression](https://www.gamebrief.net/glossary/meta-progression)
- 100번째 런은 신규 플레이어보다 선택지가 많아야 하지만 10배 강하면 안 된다. 실력 향상이 곧 진행이다. — [StraySpark: Why Roguelikes Keep Growing](https://www.strayspark.studio/blog/building-roguelike-ue5-procedural-progression)
- 핵심 과제는 업그레이드가 실력 기반 코어를 시시하게 만들지 않게 하는 것이다. — [bugnet: how to design a roguelite meta progression](https://bugnet.io/blog/how-to-design-a-roguelite-meta-progression)
- **인디 개발자의 구분.** 메타 진행의 목적은 (1) 힘 상승 인센티브, (2) 메커니즘을 점진적으로 해금해 학습 곡선을 완화하는 것, 두 가지다. 자기 게임은 (2)에 기울어 있다. — [itch.io devlog (dpswtf)](https://coolsmithygames.itch.io/dpswtf/devlog/466943/guns-science)
- **커뮤니티 정서.** 파워형 메타 진행이 보상감이 떨어진다고 느끼기 시작했고, sideways 해금은 여전히 좋다는 반응이다. — [scribe.disroot.org 토론 미러: "Meta progression in roguelites was fun for a while, but it's starting to feel unrewarding"](https://scribe.disroot.org/comment/9255518)
- **Rogue Legacy의 화폐 회수 장치.**
  - 성 입구의 카론이 성에 들어갈 때 가진 골드를 100% 가져간다. 이것이 골드 누적을 막는 장치다.
  - 영지의 Haggle 업그레이드로 최소 70%까지 줄일 수 있다.
  - 카론의 오볼을 들고 죽으면 후계자가 무료로 통과한다. — [Rogue Legacy Wiki: Charon](https://roguelegacy.wiki.gg/wiki/Charon), [Gameological review](http://gameological.com/2013/07/review-rogue-legacy/)
- **Dead Cells.** 영구 사망 시 아이템과 능력을 모두 잃는다. 적에게서 모은 Cells로 영구 업그레이드를 산다. — [Wikipedia: Dead Cells](https://en.wikipedia.org/wiki/Dead_Cells)
- **Diva 학위논문(스웨덴, 비동료심사).** SDT를 한 관점으로 삼아 메타 진행이 동기, 공정성 인식, 숙달감에 미치는 영향을 다룬다. 검색 요약은 "메타 진행은 동기를 더 즉각적으로 유지시키지만 트레이드오프를 가릴 수 있다"는 취지다. — [his.diva-portal.org thesis PDF](https://his.diva-portal.org/smash/get/diva2:2072480/FULLTEXT01.pdf) (fetch 차단, 요약만 확인)
- **SDT 일반 연구.** 게임 즐거움의 주된 요인으로 자율성과 유능감 욕구를 꼽은 연구가 있다. 로그라이크 대상 연구는 아니다. — [ResearchGate: SDT & Academical](https://www.researchgate.net/publication/361333782_Using_Self-Determination_Theory_to_Explore_Enjoyment_of_Educational_Interactive_Narrative_Games_A_Case_Study_of_Academical)

### Inferences
**이 게임의 영구 축 두 개는 성격이 다르다.**
- **지팡이 각인(영구)**은 파워형이다. 상한이 없으면 "그라인드하면 이긴다" 구조가 되어 도전 시스템(Q4)의 의미가 사라진다.
  - 권장 1: 각인은 수직 성장보다 수평 선택(빌드 성격 변경)으로 설계한다. 예: "화염 피해 +20%" 대신 "화염 스크롤을 쓰면 인접 칸에 불씨를 남김".
  - 권장 2: 장착 슬롯이나 총 코스트에 상한을 둔다.
- **공방 스크롤 그리기**는 다양성·지식형이다. 새 도안·잉크·문양 해금을 메타 진행의 본체로 삼으면 sideways 해금 선호 정서와 맞는다.

**메타 진행을 세 레이어로 나누는 안.**
- **해금(다양성)**: 새 문양, 사역마 종류, 맵 테마
- **숙련(지식)**: 적 도감, 패턴 정보 공개
- **약한 파워**: 각인 슬롯 확장. 상한이 있고 초반에 집중된다.

**화폐 싱크(Rogue Legacy 카론 방식)와 정서.** 카론은 화폐 인플레이션을 막는 싱크로 효과적이다. 다만 커뮤니티에서는 "왜 카론을 죽일 수 없나" 같은 불만 스레드가 꾸준히 있다([Steam 토론](https://steamcommunity.com/app/241600/discussions/0/846963711022511861)). 싱크는 세금보다 투자로 프레이밍하는 편이 낫다. 예: "남은 잉크를 공방 연구에 투입".

### Gaps
- Mega Crit이 메타 파워를 배제한 이유를 직접 밝힌 1차 인터뷰는 찾지 못했다.
- Dead Cells에서 쓰지 않은 Cells를 사망 시 잃는 규칙(배경지식: 다음 수집자 지점 전에 죽으면 잃음)은 이번 검색으로 확인하지 못했다. **(배경지식·미검증)**
- 파워형과 다양성형 메타의 리텐션을 비교한 정량 데이터(이탈률, 플레이 시간)는 공개된 것을 찾지 못했다.
- DC인사이드 로그라이크 갤러리, 아카라이브, 루리웹의 구체 게시글은 검색에 잡히지 않았다.

---

## Q3. 패배 페널티 설계: 반입품 손실(익스트랙션 / 다키스트 던전), 진행도 비례 보상, 보험, 무손실 — 손실 회피와 재미, 그리고 "아까워서 못 쓰는" 문제

### Takeaway
반입품 손실은 긴장을 만든다. 익스트랙션 장르는 이것을 "공포 → 안도" 루프로 상품화했다. 그러나 손실 회피 때문에 장르는 보험, 바이백, 완화된 사망 페널티 쪽으로 진화하는 중이다. 한편 단발성·희소·강력한 소모품은 "Too Awesome to Use"(아까워서 못 씀) 함정을 거의 확실하게 부른다.

플레이어가 손으로 그린 스크롤을 패배 시 잃게 하면 두 문제가 겹친다.
1. 손실 회피: 창작 노동을 잃음
2. 비축 증후군

**현재 잠정안("패배 시 반입 스크롤 상실")은 기본값으로는 위험하다.** 선택형 위험(opt-in wager)으로 옮기는 것이 근거에 더 맞다.

### Cited Findings
- **익스트랙션 장르의 핵심 규칙.** 탈출하지 못한 장비는 영구히 잃는다. — [Wikipedia: Extraction shooter](https://en.wikipedia.org/wiki/Extraction_shooter)
- **익스트랙션 루프.** 위험을 앞에 몰고 안도를 뒤에 몬다("front-loads risk and back-loads relief"). — [COGconnected: How Extraction Loops Changed Reward Design (2026)](https://cogconnected.com/2026/08/how-extraction-loops-changed-reward-design/)
  - 높은 인지 부하가 낮은 수준의 지속적 공포를 만들고, 탈출의 보상감을 키운다. — [iABDI: Why We Love to Lose (2026)](https://www.iabdi.com/designblog/2026/1/14/why-we-love-to-lose-the-evolution-of-extraction-shooter-ux) (오피니언 블로그)
- **보험과 바이백.** 보험, 바이백, 완화된 사망 페널티는 위험 회피 성향 플레이어를 떠나게 하는 변동성을 줄인다. 캐주얼 플레이어 유지 수단이다. — [Nicolas Harvie: The Game Theory of Extraction Shooters](https://nicolasharvie.com/the-game-theory-of-extraction-shooters/) (이론 블로그, 비동료심사)
- **반대 사례.** 사망 페널티가 약하고 장비 복구가 쉬운 익스트랙션 게임은 긴장보다 느긋한 루틴 쪽으로 경험이 이동한다. — [ixbt.games: 6 Extraction Shooters That Work (2026)](https://ixbt.games/en/articles/2026/01/29/pobeg-ot-tarkova-6-extraction-suterov-kotorye-rabotaiut.html)
- **손실 2배 주장(주의).** "손실은 같은 크기의 이득보다 약 2배 강하게 느껴진다"는 흔한 주장, 그리고 Tarkov에서 한 번 죽으면 몇 주 진행이 리셋된다는 서술이 있다. 사이트 자체의 비교이고 출처가 불명확하다. 경험칙으로만 취급한다. — [Renewables Networth: The Extraction Shooter Wiki](https://v1.renewables.org/article/the-extraction-shooter-wiki-inside-the-genre-s-hidden-mechanics)
- **Tarkov 보험의 실제 규칙**(보험 들고 잃은 장비를 일정 시간 뒤 돌려받음, 다른 플레이어가 주워 가면 반환 안 됨)은 검색 결과로 확인하지 못했다. **(배경지식·미검증)**
- **Darkest Dungeon.**
  - Tyler Sigman: "'손실(loss)'은 '실패(failure)'와 같지 않다는 것을 깨달아라." — [Den of Geek: Darkest Dungeon and Permanent Death](https://www.denofgeek.com/games/darkest-dungeon-and-permanent-death-in-video-games/)
  - 영웅이 죽으면 영구히 사라진다. 하지만 역마차에서 대체 인력을 고용하면 회복되므로 "죽는 것은 내가 아니다". 손실은 플레이어 자아가 아니라 교체 가능한 자원에 걸린다. — [Den of Geek](https://www.denofgeek.com/games/darkest-dungeon-and-permanent-death-in-video-games/)
  - 스트레스 미터는 수치를 투명하게 보여 줘 명확한 피드백과 결과를 주면서도 유기적 서사를 남긴다. — [Game Developer: Darkest Dungeon's Affliction System](https://www.gamedeveloper.com/design/game-design-deep-dive-i-darkest-dungeon-s-i-affliction-system) (검색 요약)
  - GDC 2016 포스트모템. 내용은 확인하지 못했다. — [Internet Archive: GDC2016 Sigman](https://archive.org/details/GDC2016Sigman)
- **"Too Awesome to Use" 트로프.** 화려하고 강력하지만 일회성이고 희소한 아이템은 버리기 아까워 완벽한 순간을 기다리게 되고, 그 순간은 오지 않는다. — [TV Tropes: Too Awesome to Use](https://tvtropes.org/pmwiki/pmwiki.php/Main/TooAwesomeTouse)
- **Josh Bycer의 정리.** 소모품 비축은 RPG에서 가장 오래된 설계 문제 중 하나다. 소모품은 "너무 요구가 크고 가혹하거나, 너무 쉽게 무시되는" 양극단으로 흐른다. 단기 사용에 초점을 두라고 권한다. — [Game Developer: Avoiding the Hoarder Trap](https://gamedeveloper.com/design/avoiding-the-hoarder-trap-in-game-design), [Game Developer: How to stop making hoarders](https://gamedeveloper.com/game-platforms/how-to-stop-making-hoarders-in-video-games)
- **해법.**
  - 소모품을 어느 전투에서나 쓸 수 있을 만큼 싸고 흔하게 만든다. — [Game Wisdom: Combating the Hoarding Syndrome](https://game-wisdom.com/critical/hoarding-game-design)
  - 비축은 플레이어 탓이 아니라 설계 문제다. 도전이 아니라 덜 숙련된 플레이어에 대한 처벌이 된다. — [Game Wisdom: How Hoarding Encourages Bad Game Design](https://game-wisdom.com/critical/hoarding-bad-game-design)
- **Witcher 3 방식.** 소모품을 전투당 횟수제로 쓰고 전투 후 재충전한다. 플레이어 호평 사례다. — [GOG forum: hoarding consumables](https://gog.com/forum/general/hoarding_consumables/page1)
- **Rogue Legacy.** 사망 시 골드를 직접 잃는 대신, 다음 런 입장 때 카론이 가진 골드를 가져가는 구조다(업그레이드로 70%까지 감소). 손실을 "다음 런 진입 비용"으로 바꾼 사례다. — [Rogue Legacy Wiki: Charon](https://roguelegacy.wiki.gg/wiki/Charon)

### Inferences (이 게임에의 적용 — 잠정안 재검토)
**잠정안 "패배 = 반입 스크롤 상실"의 문제점**

| 문제 | 근거 | 결과 |
|---|---|---|
| 창작물 손실 | 스크롤은 직접 그린 창작물이다. Darkest Dungeon은 "교체 가능한 자원"에만 손실을 걸어 고통을 줄였다. 손으로 그린 스크롤은 교체 비용(시간·애착)이 크다. | 손실 회피가 최대로 작동한다. |
| 비축 증후군 | 반입 스크롤은 희소·강력·일회성이다. 여기에 "지면 잃는다"는 위협까지 붙는다. | 플레이어는 (a) 아예 안 들고 가거나 (b) 들고 가서 안 쓰고 버티는 전략으로 수렴한다. 핵심 콘텐츠(그리기)가 회피 대상이 된다. |
| 역설적 유인 | 패배가 확실해지는 순간 아끼던 스크롤을 다 쓰는 것이 최선이 된다. | 사용 타이밍이 "망할 때"로 몰린다. 페널티가 사용을 늦추는 쪽으로만 작용한다. |
| 실력차 증폭 | Game Wisdom: 이런 페널티는 도전보다 덜 숙련된 플레이어에 대한 처벌이 된다. | 초보는 지고, 스크롤을 잃고, 다음 런이 더 약해진다(죽음의 나선). |

**대안 설계 (조합 가능)**
1. **"쓰면 소모, 안 쓰면 귀환"을 기본값으로.** 패배해도 쓰지 않은 반입 스크롤은 돌아온다. 이러면 손실의 유일한 원인이 "사용"이 되어 비축 유인이 사라진다. 대신 공방 재료(잉크·종이) 비용으로 소모의 경제적 무게를 유지한다.
2. **전투당 충전형 일부 도입(Witcher 3 방식).** 각인과 연결된 "기본 주문"은 전투마다 재충전한다. 손으로 그린 스크롤은 런당 1회 강력기로 쓴다. 소모 계층을 둘로 나누는 셈이다.
3. **선택형 위험(Wager/봉인 걸기).** 출발 전에 원하는 스크롤을 "걸기" 슬롯에 넣으면, 패배 시 잃는 대신 점수·보상 배율이 붙는다. 익스트랙션식 긴장을 원하는 사람만 고른다. Q4의 도전 시스템과 하나의 축으로 통합할 수 있다.
4. **진행도 비례 회수(salvage).** 패배 시 런 중 얻은 임시 글리프·스크롤은 진행 층수에 비례해 "잉크 찌꺼기/연구 포인트"로 환산된다. Hades처럼 매 런이 무언가를 남기게 한다. 카론 방식은 세금이 아니라 연구 투자로 프레이밍한다.
5. **보험(선택).** 공방에서 "보존 봉인"을 추가 재료로 붙인 스크롤은 패배해도 귀환한다. 손실 위험을 플레이어가 사는 구조로 바꾸며, 캐주얼 유지 효과가 있다(Harvie).
6. **임시 사역마·글리프는 런 종료 시 소멸이 원칙.** 다만 "도감 등록", "다음 런 1회 재소환 가능성 해금" 같은 지식·다양성 보상으로 남긴다.

**권장 조합: 1 + 3 + 4.**
- 기본은 무손실(안 쓴 것 귀환)과 진행도 비례 회수다.
- 긴장은 선택형 Wager로 제공한다.
- 이렇게 하면 "그리기 = 즐거움", "사용 = 보상", "위험 = 선택"으로 분리된다.

**스크롤 희소성 조절.** 공방에서 그리는 데 드는 시간이 곧 비용이다. 이 시간이 크면 스크롤 하나의 가치가 커져 비축이 생긴다. 그리기 1회 시간을 짧게 유지하거나, 한 번 그린 도안을 "복사 인쇄"로 여러 장 만들 수 있게 한다(Game Wisdom의 "싸고 흔하게" 원칙).

### Gaps
- 소모품 반입·손실과 사용률의 관계를 다룬 실험이나 텔레메트리(예: 실제 게임의 반입품 사용률)는 공개 자료를 찾지 못했다.
- Escape from Tarkov 보험 규칙의 1차 출처, Darkest Dungeon 장신구(trinket) 손실 규칙과 설계 의도는 검색으로 확인하지 못했다. 배경지식으로는 원정 실패나 사망 시 해당 영웅의 장신구를 잃는다. **(배경지식·미검증)**
- 손실 회피 계수("약 2배")는 행동경제학 원전(Kahneman & Tversky)을 직접 확인하지 못했다. 게임 맥락에서 이 계수를 재현한 연구도 찾지 못했다.
- bottomfeeder Substack "Understanding the Player Brain Pt.1: Loss Avoidance" 원문은 fetch가 차단되어 확인하지 못했다.

---

## Q4. 도전/히트 시스템: Hades Pact of Punishment, StS Ascension, Balatro Stakes, Dead Cells Boss Cells, RoR2 Artifacts, PokeRogue Challenges, 점수 배율, 리더보드, 데일리 시드

### Takeaway
성공한 도전 시스템은 두 패턴 중 하나다.

| 패턴 | 예 | 장점 | 단점 |
|---|---|---|---|
| 순차 해금형 계단 | StS Ascension, Balatro Stakes, Dead Cells Boss Cells | 명확한 목표 | 자유도 낮음 |
| 자유 조합형 메뉴 | Hades Pact(히트), RoR2 Artifacts, PokeRogue Challenge | 표현의 자유 | 보상 연결 장치 필요 |

Hades는 메뉴형에 "무기별 × 히트별 1회 보상(bounty)"과 "Target Heat"를 붙여 자유 조합에 진행 목표를 줬다. 데일리 시드와 점수는 비교 가능한 공정 조건을 주지만, 리더보드 최상단은 치팅이나 점수 폭발로 의미를 잃기 쉽다.

### Cited Findings
- **Hades Pact of Punishment.**
  - 각 조건에 히트 값이 있다. 게이지의 총 히트가 "총 난이도"다.
  - 보상(bounty) 한계는 20 히트이고, 전부 모으려면 21번 완주가 필요하다.
  - 보상과 Target Heat는 무기마다 따로 추적되며, 보스별·히트별로 1회 수령한다.
  - 0 히트 보상은 별도로 추적되어, 더 높은 히트로 깨도 받을 수 없다.
  - 조건마다 등급이 있다. 예: Extreme Measures는 단계당 히트가 올라가며 최대 10 히트다(원문 표기는 "Extreme Conditions").
  - Hell Mode에서는 보상 범위가 5~25 히트다. — [Hades Wiki: Pact of Punishment](https://hades.fandom.com/wiki/Pact_of_Punishment), [GameSkinny](https://www.gameskinny.com/tips/hades-pact-of-punishment-conditions-bounties-heat-explained/), [SegmentNext](https://segmentnext.com/hades-pact-of-punishment/)
  - Kasavin이 Pact를 직접 설계했다는 근거는 없다. Wikipedia는 그를 작가·디자이너 중 한 명으로만 기재한다. — [Wikipedia: Hades](https://en.wikipedia.org/wiki/Hades_(video_game))
- **Slay the Spire Ascension.**
  - StS1은 20단계 누적 수정자였다. StS2는 이를 10단계로 압축했다.
  - 진행은 캐릭터별이며, 커스텀 모드나 시드 런으로는 얻을 수 없다. — [allthings.how: STS2 Ascension explained](https://allthings.how/slay-the-spire-2-ascension-explained-every-level-and-how-it-differs-from-the-original/)
  - Mega Crit은 StS2 패치에서 게임이 꽤 어렵다는 데 동의하고, 낮은 Ascension을 더 접근 가능하게 만들고 싶다고 밝혔다(2026). — [GamesRadar](https://www.gamesradar.com/games/roguelike/new-slay-the-spire-2-patch-makes-some-terrible-cards-and-relics-actually-good-mega-crit-agrees-the-game-is-quite-hard-and-wants-lower-ascensions-to-be-more-accessible/)
- **Balatro Stakes.**
  - 8개 스테이크가 있다. 덱마다 현재 최고 스테이크를 클리어해야 다음이 열린다(덱별 진행). — [Balatro Wiki: Stakes](https://balatrogame.fandom.com/wiki/Stakes)
  - 퍼블리셔가 골드 스테이크와 Jokerless 챌린지를 매우 빨리 깨서 LocalThunk도 놀랐다. 공식 "챌린지" 덱 모드가 존재한다. — [PC Gamer](https://www.pcgamer.com/games/card-games/balatros-publisher-beat-gold-stakes-and-the-jokerless-challenge-so-quickly-it-even-surprised-localthunk-how-did-you-do-this-so-fast/)
- **Dead Cells Boss Stem Cells.**
  - 활성화하면 난이도를 올리는 영구 아이템이다. 첫 셀은 셀 없이 보스를 잡아 얻고, 다음 셀은 셀을 하나 더 켠 상태로 잡아야 얻는다. 단계별로 이름 붙은 난이도이며 최대 5셀이다.
  - 난이도 상승은 적응형 AI가 아니라 플레이어가 투명하게, 자발적으로 고른다. — [Official Dead Cells Wiki: Boss Stem Cells](https://deadcells.wiki.gg/wiki/Boss_Stem_Cells), [Fandom](https://deadcells.fandom.com/wiki/Boss_Stem_Cell), [Medium: Difficulty as Design: Dead Cells](https://medium.com/@tunganh0806/difficulty-as-design-dead-cells-progressive-challenge-and-player-engagement-74f086064bf6)
- **Risk of Rain 2.** 도전 과제로 게임 수정자를 해금하고 런 시작 때 고른다. — [Wikipedia: Risk of Rain 2](https://en.wikipedia.org/wiki/Risk_of_Rain_2)
  - 아티팩트별 세부(예: Command, Sacrifice)는 이번 검색으로 확인하지 못했다.
- **PokeRogue.**
  - 모드는 Classic, Daily Run, Endless, Spliced Endless, Challenge 다섯 가지다.
  - Challenge 모드는 커스텀 챌린지를 붙인 Classic이며, Single Generation, Single Type, Fresh Start, Inverse Battle이 있다.
  - Daily Run은 고정 시드와 사전 생성 스타터로 진행하고 전 플레이어가 같은 시드를 공유한다.
  - 출처 충돌: Daily Run 길이를 50웨이브라고 하는 쪽과 약 30웨이브라고 하는 쪽이 있다. 50웨이브가 다수다. — [DeepWiki: PokeRogue game modes](https://deepwiki.com/pagefaultgames/pokerogue/5.1-game-modes), [pokeroguewiki: Game Modes](https://pokeroguewiki.com/game-modes/), [pokeroguefusion: Daily Run](https://pokeroguefusion.com/blog/pokerogue-daily-run)
  - 커뮤니티 리더보드는 Speedrun.com에 있다(Classic-Starters-Only, Endless Wave-500 등). — [Speedrun.com: PokeRogue](https://www.speedrun.com/Pokerogue?h=challenge-mode-fresh-start&x=wkpzgzvd-0nwm97k8.q5v59wnl)
- **Slay the Spire Daily Climb.**
  - Kotaku는 데일리 챌린지가 갈수록 좋아진다고 평했다. — [Kotaku](https://kotaku.com/slay-the-spires-daily-challenges-keep-getting-better-1823780588)
  - 점수 보너스: Highlander(중복 카드 없음)와 Collector(같은 카드 세트)는 상호 배타적이라 초반에 하나를 고른다. Speedster(빠른 클리어) 보너스와 엘리트·보스 무피해 보너스도 있다.
  - 평균 점수는 850~950 정도이고, 모든 보너스를 받으면 약 1700이 가능하다는 커뮤니티 추정이 있다. — [Steam Guide: Daily Climb Guide](https://steamcommunity.com/sharedfiles/filedetails/?id=1479783422), [Eric Ransom: Tips for the StS Daily](https://ericra.com/writing/spire_daily.html), [Rappy-World](https://www.rappy-world.com/guide/slay_the_spire_daily_climb_guide)
  - 리더보드 문제: 과거 데일리 1위가 22만 점을 넘어 치팅 의심을 받았다. "1200 이상이면 훌륭"이라는 의견도 있다. — [Steam 토론: Daily climb Score?](https://steamcommunity.com/app/646570/discussions/0/1728701877503087255/)

### Inferences (이 게임에의 적용)
**권장 구조: "결계 서약(가칭)" = Hades식 자유 조합 메뉴 + StS식 계단 목표 표시.**
- 각 제약에 "부담 점수"를 매긴다(Pact의 히트에 해당). 총합이 점수 배율과 보상 등급을 결정한다.
- 이 게임에 맞는 제약 예:
  - 각인 슬롯 봉인
  - 반입 스크롤 수 상한 감소
  - 사역마 금지 또는 1마리 제한
  - 임시 글리프 보상 선택지 감소
  - 엘리트 강화
  - 턴 제한
  - 잉크 색 제한(단색 런 = PokeRogue Single Type)
  - Fresh Start형("공방 각인 없이 출발")
- Q3의 **Wager(반입 스크롤 걸기)**를 이 메뉴의 한 항목으로 넣으면, 패배 위험이 "도전 조건 중 하나"로 정리된다.

**보상 연결 (Hades bounty 모델).**
- "각인 프리셋(빌드) × 부담 단계별 첫 클리어 1회 보상"으로, 자유 조합에도 수집 목표를 준다.
- 보상은 Q2 원칙대로 파워가 아니라 코스메틱, 새 도안, 칭호로 준다. 그래야 그라인드 루프가 생기지 않는다.

**개인 기록.**
- 프리셋별, 부담 단계별로 최고 부담 클리어, 최단 시간, 최고 점수를 기록한다.
- StS Daily처럼 상호 배타적 점수 보너스를 두어 빌드 방향을 강제한다. 예: "단일 문양" vs "모든 문양 수집".

**데일리 시드.**
- 고정 시드, 고정 반입 세트, 공방 각인 무효화로 공정성을 확보한다. PokeRogue의 "사전 생성 스타터" 방식이다.
- 개인 장비 차이가 리더보드를 오염시키지 않게, 데일리에서는 반입품을 표준화한다.
- 리더보드는 친구·근접 순위 중심으로 보여 준다. 전체 최상단은 치팅·폭발 점수로 의미가 약해진다(StS 22만 점 사례).

**접근성.**
- Mega Crit도 낮은 단계 접근성을 다시 조정했다. 첫 1~3단계 제약은 "익숙한 플레이어 대부분이 깰 수 있는" 수준으로 완만하게 둔다.
- 부담 점수 합산형은 사용자가 자기 수준에 맞춰 잘게 올릴 수 있다. 이 점에서 계단형보다 낫다.

### Gaps
- Supergiant나 Mega Crit이 히트·Ascension 수치를 어떻게 정했는지(어떤 지표로 단계를 나눴는지) 밝힌 1차 자료는 접근하지 못했다. GDC Vault는 회원 전용이고 Game Developer fetch는 차단됐다.
- RoR2 아티팩트의 구체 효과와 해금 방식(배경지식: 맵에 숨겨진 코드로 해금하는 16종)은 이번 검색으로 확인하지 못했다. **(배경지식·미검증)**
- PokeRogue 게임 안 데일리 리더보드의 존재와 방식은 확인하지 못했다.
- Hades 2의 Oath of the Unseen(Vows) 상세는 조사하지 않았다.

---

## Q5. 20~30분 런의 페이싱: 전투 수, 보상 주기, 보스 구조, 엘리트, 상점, 이벤트

### Takeaway
레퍼런스 게임은 공통으로 **"막(Act) 단위 3구간 + 막마다 보스 + 막 안에서 경로 선택(전투/엘리트/상점/휴식/이벤트)"** 구조를 쓴다.
- StS: 막당 약 15~17 노드, 그중 엘리트·휴식·상점·미지 노드
- Balatro: 앤티 8 × 3 블라인드(마지막이 보스)
- Vampire Survivors: 30분이라는 시간 상한 자체가 런의 끝

20~30분 목표라면 StS의 1막 분량을 3분할한 "미니 막 3개"가 출발점으로 적당하다.

### Cited Findings
- **Slay the Spire(1편) 맵.**
  - 막당 17층이고, 층마다 최대 6개 위치가 대략 가로 한 줄로 놓인다.
  - 맨 아래·맨 위 층을 빼면 각 방에 1~3개 진입 경로와 1~3개 진출 경로가 있다. — [Slay the Spire Wiki: Map Generation](https://slaythespire.wiki.gg/wiki/Map_Generation)
- **Slay the Spire 2 맵(커뮤니티 데이터).**
  - 7열 그리드다. 1막 15방/17층, 2막 14방/16층, 3막 13방/15층.
  - 엘리트 5, 상점 3, 미지(?) 9~14, 휴식 5~7, 나머지는 일반 전투다.
  - 첫 5행에는 엘리트·휴식이 없다. — [spire-codex: Map Generation](https://spire-codex.com/mechanics/map-generation)
  - 출처 충돌: 다른 사이트는 현재 버전에서 첫 엘리트와 첫 휴식이 7층에 나온다고 한다. — [sts2-calculator](https://sts2-calculator.com/v1032-map-rule-changes/)
  - 가장 짧은 지역은 13방이라 보스 전에 약한 덱을 고칠 층이 적다. — [sts2guides pathing](https://sts2guides.com/en/guides/pathing.html)
- **경로 선택 조언.**
  - 엘리트 전에 휴식하라. 준비가 안 됐으면 캠프파이어나 일반 전투 쪽으로 가라. — [dood.gg map guide](https://dood.gg/en/slay-the-spire/guides/map-guide/)
  - 2막에서는 상점을 우선하라. — [spiregenius map](https://spiregenius.com/map/)
  - 엘리트 2회를 뒤쪽에 몰아 싸우라는 의견도 있다. — [Steam 토론](https://steamcommunity.com/app/646570/discussions/0/1779387743942133058/?ctp=2)
- **Balatro.** 앤티 8 완료가 승리 조건이다. — [Wikipedia: Balatro](https://en.wikipedia.org/wiki/Balatro)
- **Vampire Survivors.** 30분에 Reaper가 나와 표준 런이 끝난다. 30분 생존이 주요 해금 조건이다. — [GGRecon](https://www.ggrecon.com/guides/vampire-survivors-secret-unlocks-characters-weapons-arcana-levels/)
- **StS Daily의 Speedster 보너스.** 빠른 클리어에 점수를 준다. 짧은 런을 보상하는 장치다. — [Rappy-World Daily Climb Guide](https://www.rappy-world.com/guide/slay_the_spire_daily_climb_guide)

### Inferences (25분 런 페이싱 초안 — 설계 제안, 검증 필요)
**시간 예산.** 전술 턴제 전투 1회를 평균 1.5~2.5분으로 잡으면, 25분 안에 전투 약 9~11회와 비전투 노드 4~6개(상점·이벤트·휴식, 각 20~40초)가 들어간다.

**구조안: 3막 × 막당 5~6 노드**

| 구간 | 구성 | 의도 |
|---|---|---|
| 1막 (~7분) | 일반 2, 이벤트/사역마 조우 1, 선택(엘리트 or 휴식) 1, 보스 1 | 첫 3노드에는 엘리트 없음(StS2 첫 5행 규칙 축소판). 빌드 방향 결정. |
| 2막 (~8분) | 일반 2, 상점 1, 엘리트 1(선택 경로), 이벤트 1, 보스 1 | 상점 우선(StS 조언). 반입 스크롤을 쓸 가치가 있는 엘리트. |
| 3막 (~8분) | 일반 1~2, 휴식/상점 택1, 엘리트 1(선택), 최종 보스 | 휴식 → 보스 직행 경로 보장. |

**보상 주기.**
- 모든 전투 후 "임시 글리프 3택 1"을 준다. StS 카드 보상처럼 매 노드마다 선택이 일어나야 한다.
- 엘리트 후에는 사역마나 희귀 글리프를 준다.
- 보스 후에는 각인 계열 강화, 즉 런 한정 대형 보상을 준다.
- 2~3노드마다 "무언가 새로 얻었다"는 인지가 생기게 한다.

**반입 스크롤의 사용처.** 엘리트와 보스를 반입 스크롤의 "명확한 사용 타이밍"으로 디자인한다. 예: 보스 패턴 중 특정 스크롤로 크게 반격할 수 있는 창(window)을 둔다. 이것도 비축 증후군 완화책이다(Q3).

**빠른 실패 지점.** 1막 보스를 첫 "실력 체크"로 둔다. 망한 런이 7분 안에 끝나게 해서 재시작 비용을 낮춘다(Q1). 동시에 Q3의 진행도 비례 회수로 짧은 런에도 무언가 남긴다.

**선택적 시간 압박.** Vampire Survivors처럼 시간 자체를 상한으로 둘 필요는 없다. 대신 Speedster식 시간 점수 보너스를 Q4 도전 메뉴에 선택 항목으로 넣는다.

### Gaps
- 공식 개발자가 밝힌 런당 평균 플레이 시간(StS, Hades, Balatro, Dead Cells)은 이번 검색에서 찾지 못했다. Hades 런 길이 검색은 결과가 없었다.
- 전술 턴제(예: Into the Breach, Monster Train) 런의 전투 수와 시간 데이터는 이번 조사 범위에서 확인하지 못했다. 20~30분 전술 로그라이크의 직접 벤치마크로 후속 조사가 필요하다.
- 노드 수와 보상 주기 수치는 레퍼런스 구조를 축소해 추정한 것이다. 플레이테스트 지표(노드당 소요 시간, 막별 사망률)로 검증해야 한다. StS의 지표 기반 밸런싱 접근([GDC 2019 강연](https://gdcvault.com/play/1025731/contactUs))이 방법론 참고가 된다.
