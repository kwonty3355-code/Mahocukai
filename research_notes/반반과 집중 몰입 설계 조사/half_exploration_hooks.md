# 반반(반쯤 보는) 탐험 모드: 자발적으로 몇 시간씩 파밍하게 만드는 구조 + 진짜 위기감 설계

> 조사 범위: 탭으로 전진하는 반반 탐험(상자, 룬석 귀환점, 원소 제단 3중 공명, 마법사의 가방, 저주 아이템, 떠돌이 영혼 상인, 등급별 빛깔, 촉매(납→철→구리→은→금), 몬스터, 사역마 탐험 특성, 귀환 확률 룬석 100% / 그 외 80% / 쓰러짐 50%).
> 사용자 지적: "엘리트를 싸우지 않고 기록만 하면 위기감이 없다."
>
> **네트워크 제약**: 이 세션에서 gamedeveloper.com, jboger.substack.com, pcgamesn.com, kotaku.com 직접 열람(WebFetch)이 막혀 있었다(DNS 미해결). 아래 인용 대부분은 **검색 결과 스니펫**을 근거로 한다. 원문 맥락을 확인하지 못한 항목은 따로 표시했다. 출처 상당수가 가이드, 포럼, 리뷰이며 개발자 1차 발언은 일부에 그친다.

---

## Q1. 사람들은 왜 몇 시간씩 파밍하나: 게임별 루프와 보상 일정

### Takeaway
오래 붙잡는 게임들의 공통점은 **(1) 아주 짧은 간격의 작은 보상 + (2) 드물지만 확실히 보이는 대박 + (3) 한 판 안에서 눈덩이처럼 커지는 빌드 + (4) 실패해도 남는 장기 진척**이다. 어느 하나만 있는 게임(예: 진척 없는 Brotato, 대박이 묻히는 PoE 후반)은 리뷰에서 바로 약점으로 지적된다.

### Cited Findings
**Vampire Survivors (보상 간격과 상자 연출)**
- 개발자 Luca Galante는 도박 앱 프로그래머 경력이 게임 전체가 아니라 **보물상자 개봉 연출에만** 영향을 줬다고 말했다(원 인터뷰는 Game Informer, 원문은 아카이브 소실). — [Game Developer](https://gamedeveloper.com/design/vampire-survivors-development-sounds-like-an-open-source-fueled-fever-dream); [Kotaku](https://kotaku.com/enter-the-gungeon-balatro-vampire-survivors-roguelikes-gambling-dodge-roll-cash-grab-2000690804)
- 한 분석은 30분 판에서 아이템 12개를 2분 30초마다 주는 대신 **약 23초마다 보상**이 오는 구조라고 계산하고, 상자 연출이 나머지 게임보다 공들인 슬롯머신식이라고 평한다(스니펫 기준, 원문 미열람). — [The Secret Sauce of Vampire Survivors (Substack)](https://jboger.substack.com/p/the-secret-sauce-of-vampire-survivors)
- 화려한 상자 개봉을 가챠·오버워치 루트박스의 "도파민 샤워"에 비유. — [Epic Games Store 뉴스](https://store.epicgames.com/news/vampire-survivors-built-genre-autoshooter-bullet-heaven)
- 행운(Luck) 스탯이 상자에서 여러 개 보상이 나올 확률을 올린다(정확한 1/3/5개 확률은 미확인). 진화 조건을 채우면 **상자에서 진화 무기가 나올 확률**이 생긴다(개발자 FAQ). 더 올릴 것이 없으면 상자는 골드만 준다. — [Nerds and Scoundrels](https://www.nerdsandscoundrels.com/vampire-survivors-luck/); [Steam 토론](https://steamcommunity.com/app/1794680/discussions/0/3473981814928580134)
- 제작자 본인이 Steam에서만 약 3,000시간을 플레이했다고 말하고, 아이러니하게 "짧은 게임이 최고"라고 말한다. — [GamesRadar](https://www.gamesradar.com/games/roguelike/on-steam-alone-i-probably-have-3-000-hours-nobody-loves-vampire-survivors-more-than-its-creator-who-once-thought-nobody-would-play-it-for-more-than-two-hours-and-ironically-says-short-games-rule)

**Loop Hero (반자동 탐험의 직계 선조)**
- 출발점이 "zero-player game(플레이어 없는 게임)" 논의였다. 영웅은 고리를 자동으로 돌고, 플레이어는 주변에 장애물을 깔아 영웅이 감당하며 강해지도록 균형을 잡는 역할. — [Destructoid](https://www.destructoid.com/closing-the-loop-four-quarters-on-the-making-of-loop-hero/); [Windows Central](https://www.windowscentral.com/loop-hero-interview)
- 리뷰는 손을 떼는 전투 방식이 핵심 매력이라고 평한다. 장비 교체 같은 선택적 개입이 전투 중 행위 주체성을 준다. — [PC Gamer](https://www.pcgamer.com/loop-hero-is-giving-me-a-major-god-complex); [Medium 분석](https://medium.com/@sacitsivri/game-design-breakdown-loop-hero-4a86d55142b8)
- "idle 게임 + 경영 시뮬 + 로그라이트의 지속 진척" 매시업으로 규정. 개발자는 "발견"이 목표였다고 말한다. — [Destructoid](https://destructoid.com/?p=265570); [GamesBeat](https://gamesbeat.com/the-d20-beat-loop-hero-has-cast-a-calm-strategic-spell-over-me/)

**Dredge / Dave the Diver / Cult of the Lamb / Dome Keeper (두 축 루프)**
- Dredge: 프리뷰는 "공포의 순간이 낚시와 업그레이드 루프를 지루하지 않게 한다"고 평. — [GodIsAGeek 프리뷰](https://www.godisageek.com/2023/02/dredge-combines-fishing-gameplay-and-horror-elements-and-im-in-hands-on-preview/)
- Dredge 개발자(Bastiaens)는 "낮과 밤 = 열림과 닫힘" 같은 대비를 설계 원리로 언급(스니펫, 원문 미열람). — [Game Developer](https://www.gamedeveloper.com/production/leveraging-the-unseen-to-turn-players-worst-fears-against-them-in-dredge)
- Dave the Diver: "낮엔 잠수, 밤엔 초밥집"이라는 두 단계 분리가 결정적이었다는 감독 발언. 돈으로 깊이·시간·무게 한계를 늘린다. — [Gamedeveloper](https://gamedeveloper.com/design/dave-the-diver); [RPGamer 리뷰](https://www.rpgamer.com/review/dave-the-diver-review/)
- Cult of the Lamb: 기지+던전 조합이 컬트 테마보다 먼저였고, 기지 개선이 전투로 되먹임되도록 시스템을 연결하는 데 반복 작업이 많이 들었다(Jay Armstrong). 던전에서 죽어도 마을 진척은 남지만 시간은 흘러 굶주린 신도가 기다린다. — [Game Developer](https://gamedeveloper.com/design/interview-corralling-the-inherent-cuteness-of-cult-of-the-lamb); [PC Gamer](https://www.pcgamer.com/uk/youre-a-cult-leader-and-also-a-cute-lamb-in-this-cartoon-cross-between-rimworld-and-the-binding-of-isaac)
- Dome Keeper: René Habermann은 채굴 구간을 "돌아가기 전에 최대한 많이 캐려는 시간과의 경주"로 묘사. 자기 게임을 "push your luck 아케이드 어드벤처 로그라이크"라고 부른다. PC Gamer는 같은 사이클만 반복하는데도 "완전히 빨려든다"고 평. — [Software Engineering Daily](https://pod.wave.co/podcast/software-engineering-daily/developing-multiplayer-games-in-godot); [The Sausage Factory #423](https://www.everand.com/podcast/619633932/The-Sausage-Factory-423-Dome-Keeper-by-Bippinbits-Chris-chats-to-Rene-Habermann-of-Bippinbits-about-the-design-and-development-of-their-push-your); [PC Gamer 리뷰](https://pcgamer.com/dome-keeper-review)

**Brotato / Halls of Torment**
- Brotato: 웨이브 1은 20초, 웨이브 9부터 60초. 웨이브 20까지 약 30분. 반면 판 간 진척이 없어 "붙잡을 고리가 하나 적다"는 비판. — [Adrian Hon](https://adrianhon.substack.com/p/brotato); [Digital Trends](https://digitaltrends.com/?p=3377739)
- Halls of Torment: "Diablo의 강박적 루트 그라인드 + Vampire Survivors의 한 판 더". 반면 "이번 판이 이전과 많이 다르리라는 확신을 못 준다"는 비판. — [PC Gamer](https://www.pcgamer.com/games/action/halls-of-torment-feels-like-the-brilliant-lovechild-of-vampire-survivors-and-diablo-and-the-absolute-pinnacle-of-autobattlers); [Xbox Hub](https://www.thexboxhub.com/halls-of-torment-review/)

**PokeRogue (색이 다른 포켓몬 사냥, 엔드리스)**
- 일부 포켓몬은 이로치(shiny) 확률이 높고 아이템으로 확률을 올릴 수 있다. 엔드리스는 알 파밍과 레벨 극한 육성용 모드. — [Couch Soup](https://couchsoup.com/pokerogue-is-very-addictive/page/139)
- 실패한 판도 도감 진척으로 남아 "생산적으로 느껴진다". 반면 엔드리스는 한두 번 해볼 만하지만 클래식만 못하다는 리뷰도 있다. — [Medium / Trill Mag](https://medium.com/trill-mag/pok%C3%A9rogue-the-fangame-that-hooked-players-immediately-e26cf2089384); [Backloggd](https://backloggd.com/reviews/everyone/eternity/liked/pokerogue--1?page=2)
- r/pokerogue는 2024년 중반에 이미 6.4만 명. — [Phaser 뉴스](https://www.phaser.io/news/2024/06/pokerogue)

**Path of Exile / Diablo (맵 쥬싱, 루트 폭발)**
- PoE의 핵심은 "더 어렵게 만들어서 더 받는" 자발적 선택(맵 수식어, 섹스턴트). 맵이 예기치 않게 보너스 구역으로 열리는 순간이 "엄청 재밌다"는 플레이어 반응. — [PoE 포럼](https://www.pathofexile.com/forum/view-thread/3651519)
- 개발자는 쥬싱이 맵 하나에 고유 몬스터 200마리 이상을 소환하는 수준까지 가자 아이템 홍수를 "용납 불가"라 했다. — [devtrackers (Chris Wilson)](https://devtrackers.gg/pathofexile/p/e6c0fef3-what-happened-with-items)
- 감독 Mark Roberts: "루트 품질 균형은 언제나 가장 큰 문제". 3.28은 바닥 루트를 늘리지만 화면 난잡 위험을 GGG가 인정. — [FRVR](https://frvr.com/blog/path-of-exile-lead-explains-that-theyre-always-working-on-improving-loot-drops); [FinalBoss](https://finalboss.io/path-of-exile-3-28-will-dump-more)

**한국 방치형(키우기)**
- 방치형 RPG는 2023년 국내 RPG 다운로드 1위(점유율 28.2%, 센서타워). — [바이라인네트워크](https://byline.network/2024/09/20-353/)
- 버섯커 키우기 공식 소개: "램프만 누르면 장비가 쏟아지는" 무한 장비 뽑기가 전면 홍보 포인트. — [App Store](https://apps.apple.com/kr/app/%EB%B2%84%EC%84%AF%EC%BB%A4-%ED%82%A4%EC%9A%B0%EA%B8%B0/id6467117398)
- 최근 키우기 게임은 경쟁·과금 부담이 커지며 "가볍고 간편하다는 건 옛말"이라는 칼럼(제목·부제만 확인). — [다음/김영욱 칼럼](https://v.daum.net/v/20260727160707467)

### Inferences
- **보상 간격 표**를 먼저 정하고 오브젝트 출현을 거기에 맞춘다. 제안: 탭 전진 중 **15~25초마다 "작은 무언가"(촉매 조각, 몬스터 처치, 상자)**, **2~4분마다 "선택"(제단, 상인, 저주, 엘리트)**, **10~20분마다 "대박 후보"(금빛, 마법사의 가방, 희귀 출현)**. VS의 약 23초 간격을 반반 모드 하한 기준으로 쓴다.
- 반반 모드를 Loop Hero처럼 **"영웅은 자동, 플레이어는 결정 지점에서만 개입"**으로 정의하면 반쯤 보는 플레이와 맞는다. 탭 전진 자체는 결정이 아니므로 결정은 분기점(오브젝트, 엘리트, 귀환)에 모은다.
- Dave the Diver와 Cult of the Lamb처럼 **반반 탐험 = 재료 수집 / 집중 모드 = 사용처**로 분리하고, 탐험 결과가 집중 모드에서 "써야 할 것"을 반드시 만들게 한다. 촉매가 주문서 뽑기에서 소모되는 현재 설계가 이 연결 고리다. "이번 판 촉매로 집중 모드에서 무엇을 할 수 있는지"를 귀환 화면에 바로 보여 준다.
- 판 간 진척(도감, 이로치 기록, 사역마 숙련)이 없으면 Brotato 비판처럼 고리가 하나 적어진다. 실패한 탐험도 도감·기록이 남게 한다.

### Gaps
- VS 상자의 1/3/5개 실제 확률과 정확한 연출 시간은 출처 미확인.
- PokeRogue 이로치 사냥 플레이 시간 통계, 한국 키우기 게임의 득템 연출과 이탈률 관계를 다룬 1차 자료는 찾지 못했다.
- Dredge, Dome Keeper 개발 인터뷰 원문(gamedeveloper.com)은 네트워크 차단으로 열람하지 못했다.

---

## Q2. 반자동/가벼운 모드에서 진짜 긴장과 위험 만들기

### Takeaway
참고작들의 위기감은 **"시간이나 행동량에 따라 차오르는 눈에 보이는 위협 게이지" + "그 끝에 반드시 오는, 피할 수 없거나 피하는 데 대가가 드는 사건" + "들고 있는 것을 잃을 수 있다"**의 조합에서 나온다. 엘리트를 '기록만' 하면 세 요소가 모두 빠진다. 공정함은 **예고(텔레그래프) + 미리 아는 탈출구 + 손실 상한**으로 지킨다.

### Cited Findings
**차오르는 위협 게이지**
- Dredge: 해가 지면 공포(panic) 표시가 켜지고, 어둠 속을 오래 항해할수록 강해진다. 잠만이 공포를 즉시 0으로 만든다. 밤낚시는 도감 채우기와 퀘스트용 물고기라는 보상이 있다. — [Gamepressure](https://www.gamepressure.com/dredge-pc/how-to-reduce-the-level-of-panic/zc10a6d); [Casual Game Guides](https://casualgameguides.com/walkthroughs/dredge/night-panic-aberrations-explained)
- Darkest Dungeon: 빛 0~100, 구간으로 나뉨. 빛이 줄수록 적과 정신력 손실이 강해지지만 보상이 커진다. 빛이 높으면 정찰·비밀방 발견이 쉽다. 빛 0으로 일부러 돌며 "매우 수익적"이라는 플레이어도 있다. 빛과 기습 확률의 관계는 출처끼리 엇갈린다(모드 노트는 직접 영향 없다고 함). — [Gamepressure](https://www.gamepressure.com/darkestdungeon/light-level-and-its-influence/z28424); [Steam 토론](https://steamcommunity.com/app/262060/discussions/0/1727575977558067839); [Zotlan 모드](https://catalogue.smods.ru/?p=232889)
- Spelunky: 스테이지에 오래 머물면 거대한 유령이 나타나 거의 피할 수 없다(제한 약 3분). Derek Yu: "플레이어가 어려운 결정을 내리도록 강제하고 싶었다." — [Game Developer 분석](https://www.gamedeveloper.com/design/a-spelunky-game-design-analysis-pt-2); [Spelunky 책 발췌](https://gamedeveloper.com/design/explorer-gmk-an-excerpt-from-the-spelunky-book)
- Loop Hero: 적을 잡고 카드를 놓을수록 보스 게이지가 차고(카드를 많이 놓을수록 빨리), 다 차면 캠프 타일에 보스가 등장. 캠프 근처에서 퇴각하면 자원을 전부 가지고 돌아간다. 보스에게 지면 30%만 남는다는 포럼 주장은 미검증. — [TechRaptor](https://techraptor.net/gaming/guides/loop-hero-beginners-guide); [PC Gamer 팁](https://pcgamer.com/loop-hero-tips-guide); [포럼(미검증)](https://therewillbe.games/forum/video-games/208663-loop-hero?start=45)
- Diablo 4 헬타이드: 처치와 상자 개봉이 위협 게이지를 올린다. 3단계이며 단계가 오를수록 기습이 잦아진다. 최고 단계에서 "지옥 낙인"이 찍히면 최대 밀도의 연쇄 기습이 오고, 마지막에 직업 능력을 쓰는 타락 영웅(Hellborne)이 나온다. 처치하거나 죽으면 게이지가 초기화된다. — [GGRecon](https://ggrecon.com/guides/diablo-4-helltide-threat); [Maxroll](https://maxroll.gg/d4/resources/helltide-guide); [Gameleap](https://gameleap.com/articles/diablo-4-season-4-helltide-threat-level-explained)
- Dome Keeper: 채굴은 "올라가기 전에 최대한 캐는 시간과의 경주". 방어 단계에서 괴물이 사방에서 유리돔을 두드리며 "전부 막는 건 불가능하다". — [Software Engineering Daily](https://pod.wave.co/podcast/software-engineering-daily/developing-multiplayer-games-in-godot); [PC Gamer](https://pcgamer.com/dome-keeper-review)

**들고 있는 것을 잃는 공포(gear fear)**
- 익스트랙션 장르의 중심 긴장은 "죽으면 가져온 것과 주운 것을 다 잃는다"는 gear fear. 인벤토리에 감정적으로 묶여 매 판이 긴장된다. 반면 연패나 초보에겐 좌절이 되어 Escape from Duckov처럼 손실을 완화한 변종이 나온다. — [Acer 블로그](https://blog.acer.com/en/discussion/3097/best-extraction-shooter-to-play-in-2025); [PCGames.de](https://www.pcgames.de/Escape-from-Tarkov-Spiel-56471/Specials/Escape-from-Tarkov-Albtraum-Abenteuer-First-Person-Third-Person-1486744/2/)
- PoE2: 죽으면 맵에서 쫓겨나 경험치와 줍지 않은 드롭을 잃는다. 개발진은 엔드게임이 가혹하다고 인정하면서도 "죽음이 의미 있어야 한다"며 유지. 플레이어는 예고 없는 원샷(시체 폭발 등)을 불공정하다고 반발. — [PC Gamer](https://pcgamer.com/games/strategy/path-of-exile-2-devs-acknowledge-the-endgame-is-too-severe-but-are-sticking-to-their-guns-because-the-whole-death-actually-mattering-thing-is-actually-important); [PoE 포럼](https://www.pathofexile.com/forum/view-thread/3635118)

**선택을 강요하는 엘리트**
- Slay the Spire: 엘리트를 이기면 유물 + 25~35골드 + 카드 보상이 확정. 대신 HP를 크게 깎으므로 덱이 강해진 막 후반에 치라는 조언. 지도는 "안전 경로 vs 고보상 경로" 선택. StS2 얼리액세스에선 엘리트 피해가 보상보다 커서 회피한다는 보도(밸런스 변동 가능). — [Slay the Spire Wiki](https://slaythespire.wiki.gg/wiki/Elite); [Scribd 가이드](https://www.scribd.com/document/718620806/Ironclad-Guide-A20H); [Pulse](https://www.pulse.bot/gaming/news/slay-the-spire-2-fans-are-avoiding-elites-fights-with-good-reason-087fb7aa-71b1-478e-a064-a6a95fabdb03)

**공정함과 읽기 쉬움**
- Into the Breach: 모든 죽음이 플레이어 탓으로 느껴지기를 원해서 적 공격 예고를 핵심 메커닉으로 삼았고, 무작위성을 FTL보다 줄였다. 불가능해 보이지 않게 막은 것은 AI보다 맵 설계였다. — [Game Developer (Road to IGF)](https://gamedeveloper.com/game-platforms/road-to-the-igf-subset-games-i-into-the-breach-i-); [Kicktraq/making of](https://kicktraq.com/articles/redirect/35147)
- 보드게임 push-your-luck 설계: 다 잃는 게임은 짧거나 한 번의 도박 비중을 작게 해서 한 번의 불운이 전부를 날리지 않게 한다. "언제 멈출지"를 고르는 것만으로는 재미가 부족하므로 선택이 더 있어야 한다. 단계마다 커지는 보상이 멈추기 어렵게 만든다. — [TV Tropes](https://tvtropes.org/pmwiki/pmwiki.php/Sandbox/DraftYourLuck); [Magpie Games](https://magpiegames.com/blogs/news/gametech-push-your-luck); [NoobFeed](https://www.noobfeed.com/articles/push-luck-risk-reward-loops-modern-games)

**반쯤 보는 화면(세컨드 스크린) 설계**
- 세컨드 스크린 연구의 핵심 과제는 TV와 앱 사이 주의 배분. 주의가 나뉘어도 플레이어는 재미와 사용성을 높게 평가했다. 실무 교훈: 폰을 집어 들 때마다 바로 상호작용할 수 있어야 하고, TV에서 눈을 떼게 해서는 안 된다. — [IBC](https://ibc.org/more-is-more-investigating-attention-distribution-between-the-television-and-second-screen-applications-/1028.article); [Game Developer (Viggle)](https://gamedeveloper.com/business/video-second-screen-app-design-lessons-learned-from-i-viggle-i-); [Swansea 논문](https://cronfa.swansea.ac.uk/Record/cronfa33922/Download/0033922-24052017093539.pdf)

### Inferences (Mahocukai 반반 탐험 적용안)
1. **"마력 잔향(위협) 게이지" 1개만 둔다.** 전진, 상자 개봉, 저주 아이템 착용, 촉매 획득이 게이지를 올린다(D4 헬타이드처럼 **욕심 행동 = 위협 증가**). 룬석에서만 내린다(Dredge의 잠). 3단계로 나누고, 단계마다 화면 가장자리 색과 배경음이 바뀌어 **곁눈질로 읽힌다**.
2. **엘리트는 기록하지 않고 '조우'시킨다.** 게이지 2단계 이상에서 엘리트가 **길을 막는다**. 반반 플레이어에게 3초 판단 창을 주고, 무입력이면 기본값(사역마 자동전)을 실행한다.
   - **싸운다**: 승리 시 확정 보상(StS처럼 금빛 상자 1개 + 촉매). 패배 시 쓰러짐 판정(귀환 50%).
   - **도망친다**: 들고 있는 촉매 중 무작위 1개를 떨군다(퇴각 비용).
   - **바친다**: 저주 아이템 하나 또는 제단 축복 하나를 내주고 지나간다.
   "기록만 하고 지나가기"는 없앤다. 엘리트 기록은 **싸워 이겼을 때만** 도감에 남긴다(위기감 + 수집 보상 동시 확보).
3. **게이지 끝에는 반드시 사건이 온다(Spelunky 유령, Loop Hero 보스).** 최고 단계에서 N걸음 뒤 "추적자"가 등장하고, 다음 룬석까지 도달하느냐가 승부가 된다. 화면에는 "룬석까지 7걸음 / 추적자까지 5걸음"처럼 **숫자 두 개만** 보여 준다.
4. **손실은 '들고 있는 것'만, 상한을 둔다.** 기존 확률(룬석 100%/그 외 80%/쓰러짐 50%)을 "가방 단위"로 보이게 한다. 예: 쓰러지면 가방 칸 절반이 날아가되, **사역마 '수호' 특성으로 1칸 봉인**(gear fear 유지 + Duckov식 완화). 집중 모드 진척(마법 숙련, 사역마)은 절대 잃지 않는다.
5. **예고 원칙(Into the Breach).** 엘리트와 기습은 1~2걸음 전에 실루엣, 소리, 진동으로 예고한다. 예고 없는 즉사는 금지(PoE2 원샷 반발 사례). 반반 시청자는 소리로 고개를 돌리므로 **오디오 텔레그래프가 1순위**다.
6. **위협과 보상을 묶는다(Darkest Dungeon 빛).** 게이지가 높을수록 상자 빛깔 등급 상한이 오른다(3단계에서만 금빛 출현). 게이지는 벌칙이자 **보상 배율**이 되어 "조금만 더"를 만든다.

### Gaps
- Dredge 공포 게이지의 정확한 수치와 개발자 의도 원문, Dome Keeper 웨이브 타이머 설계 의도, Spelunky 유령의 "늑장 방지" 의도를 Derek Yu가 직접 말한 원문은 확보하지 못했다.
- 반자동 모드에서 "무입력 기본값" 결정 창의 적정 시간(3초 등)을 다룬 연구는 찾지 못했다. 플레이테스트로 정해야 한다.

---

## Q3. "대박" 순간: 희귀 출현, 희귀 드롭, 루트 폭발, 전체 화면 축하

### Takeaway
대박 연출은 **등급마다 색 + 소리 + 빛기둥을 함께, 등급마다 겹치지 않게** 주는 것이 표준(Diablo 계보)이다. 최상위 대박은 **고유한 소리**를 가져야 반쯤 보는 플레이어를 돌아보게 한다. 빈도는 넓은 분산보다 **적당한 분산 + 불운 보정(천장)**이 선호된다. 너무 잦으면 PoE처럼 홍수와 난잡함이 된다.

### Cited Findings
- Diablo 3 전설: 주황색, 큰 "쨍" 소리, 주황/초록 빛기둥, 미니맵 별 아이콘 **3중 신호**. 세트 아이템은 초록 기둥으로 구분. — [Diablo Wiki](https://di.diablowiki.net/Legendary)
- Diablo 4는 전설 차임과 빛기둥을 D3보다 다소 줄였다. 우버 유니크는 나중에 전용 사운드와 보라색 기둥을 받았다(구분이 약하다는 비판 이후). 전설에서만 오디오 신호가 울리게 하는 옵션도 있다. — [GamerGuides](https://www.gamerguides.com/diablo-iv/guide/equipment/loot-drops); [Icy Veins](https://www.icy-veins.com/d4/news/uber-uniques-are-getting-a-facelift-in-diablo-4); [Icy Veins 비판](https://www.icy-veins.com/d4/news/uber-uniques-need-far-more-distinction-in-diablo-4/)
- 색으로 희귀도를 나타내는 관행을 대중화한 것은 Diablo. 원작에서도 반지 같은 희귀 드롭은 특별한 소리를 냈다. — [GameSpot](https://gamespot.com/articles/how-color-coded-loot-conquered-gaming/1100-6473027/); [Mein-MMO](https://mein-mmo.de/diablo-loot-erfanden/)
- Dredge 변이(Aberrant) 어종: 평범한 낚시터에 **초록 안개와 다색 반짝임**으로 표시되는 희귀 변종. 도감 항목이 따로 있고 값이 더 나가며, 13종으로 도감의 약 1/10. 특정 능력은 빛나는 낚시터에서 변이를 확정한다. — [GameSkinny](https://www.gameskinny.com/tips/how-to-catch-aberrant-fish-in-dredge/); [Gameranx](https://gameranx.com/features/id/458521/article/dredge-how-to-catch-aberrant-fish-tips-tricks/)
- Princeton 실험: 평균이 같다면 가변 보상 일정이 고정 일정보다 선호됐다. 단 **가변 범위를 너무 넓히면** 선호가 사라졌다. — [Princeton tech report](https://www.cs.princeton.edu/techreports/2012/931.pdf)
- 불운 보정: 실패할 때마다 드롭 확률이 오르고 확정 상한에 도달하면 초기화. 고정 %는 긴 가뭄을 만든다. 가챠에선 "천장(pity timer)"이 거의 보편적이다. — [Game Developer: Emotions and Randomness](https://www.gamedeveloper.com/design/emotions-and-randomness-loot-drops); [TV Tropes](https://tvtropes.org:443/pmwiki/pmwiki.php/Main/BadLuckMitigationMechanic)
- 근접 실패(near miss)는 슬롯머신에서 직접 빌려 온 기법이라는 설명(카지노 계열 출처라 근거 약함). — [The Xbox Hub](https://www.thexboxhub.com/volatility-and-difficulty-curves-what-game-designers-borrow-from-slot-maths/)
- PoE 쥬싱 과잉(고유 몬스터 200+)은 아이템 홍수로 "용납 불가" 판정. 3.28 바닥 루트 증가는 난잡함 위험을 동반한다. PoE2 감독은 맵의 레어 아이콘을 다시 넣지 않겠다고 했다. — [devtrackers](https://devtrackers.gg/pathofexile/p/e6c0fef3-what-happened-with-items); [FinalBoss](https://finalboss.io/path-of-exile-3-28-will-dump-more); [FRVR](https://frvr.com/blog/path-of-exile-2-lead-wont-add-rare-icons-back-to-the-map-highly-regret-feature)

### Inferences
- **촉매 등급(납→철→구리→은→금)마다 빛깔과 고유 음을 정한다.** 반반 시청자를 돌아보게 하는 것은 소리다. 은빛 이상은 소리만 듣고도 등급을 알 수 있게 음계를 올린다(납=둔탁, 금=종소리 + 짧은 코러스).
- **3단 연출 예산**: 일반(효과 없음, 1초 미만) / 희귀(빛기둥 + 효과음, 1~2초) / 대박(전체 화면 마법진 + 일시정지 + "탭하여 열기", 판당 0~2회). 대박은 **플레이어가 탭해야 열리게** 해서 돌아오는 계기이자 손맛으로 쓴다(VS 상자 개봉 구조).
- **희귀 출현(이로치 역할)**: 오브젝트 변종(예: "별빛 봉인 상자", "공명하는 제단")을 Dredge 변이처럼 **평소 오브젝트 위의 특이한 안개와 반짝임**으로 표시한다. 별도 도감 칸을 주고 판 간에 기록한다(PokeRogue식 장기 수집).
- **빈도**: 금빛은 기대 간격 약 15~20분을 목표로 하되 천장을 둔다(예: 금 없이 25분이 지나면 다음 상자는 최소 은, 30분이면 금 확정). 넓은 분산은 피한다(Princeton).
- **원소 제단 3중 공명**을 "대박 2"로 쓴다. 같은 원소 2개를 모으면 화면 가장자리에 공명 예고를 띄워 "하나만 더" 근접 동기를 만든다. 단 가짜 근접 실패(조작된 아깝게 빗나감)는 쓰지 않는다(Q5 참고).

### Gaps
- 대박 연출 빈도가 체류 시간에 미치는 정량 데이터(공개 A/B)는 찾지 못했다.
- 한국 키우기 게임의 등급 연출 방식과 효과에 관한 1차 자료는 검색되지 않았다.

---

## Q4. 한 판 안의 빌드 성장(눈덩이)과 "조금만 더 깊이"

### Takeaway
"조금만 더"는 **(a) 지금 빌드가 막 강해져서 더 깊은 곳이 감당될 것 같은 느낌 + (b) 더 깊을수록 보상 배율이 오름 + (c) 다음 돌파 직전이라는 근접 신호**에서 나온다. 깊이마다 보상이 커지고, 멈추는 순간 "이 빌드가 사라진다"는 아쉬움이 동기가 된다.

### Cited Findings
- Hades 혼돈의 문: HP를 내고 들어가 몇 방 동안 저주를 받은 뒤, 일반 축복보다 강한 **영구 축복**을 얻는다. 접두·접미 조합이 무작위다. 저주가 싼 초반에 받으라는 조언. 저주가 치명적일 수 있어 "벌이 죄에 맞아야 한다"는 비판도 있다. — [Rogueranker](https://rogueranker.com/?p=11364); [Primagames](https://primagames.com/gaming/hades-chaos-realm-chaos-blessings); [GameSpot](https://www.GameSpot.com/articles/hades-2-chaos-boons-guide/1100-6523316/); [Steam 토론](https://steamcommunity.com/app/1145350/discussions/2/4337607287059547521)
- Loop Hero: 플레이어가 놓는 장애물이 영웅을 위협하는 동시에 성장시키고(위험 = 성장 재료), 카드를 놓을수록 보스 게이지도 빨리 찬다. — [Windows Central](https://www.windowscentral.com/loop-hero-interview); [TechRaptor](https://techraptor.net/gaming/guides/loop-hero-beginners-guide)
- VS: 진화 조건을 채우면 상자에서 진화 무기가 나올 수 있다. 빌드 완성 지점이 상자 기대감과 직결된다. — [Steam (개발자 FAQ)](https://steamcommunity.com/app/1794680/discussions/0/3473981814928580134)
- Halls of Torment Agony Mode: 더 어렵고 시간 제한이 없지만 루트와 업그레이드를 더 준다. — [Halls of Torment Steam/GodIsAGeek](https://www.godisageek.com/reviews/halls-of-torment-review)
- Push-your-luck에서 단계마다 커지는 보상이 추진력을 만들어 멈추기 어렵게 한다. — [NoobFeed](https://www.noobfeed.com/articles/push-luck-risk-reward-loops-modern-games)
- Dave the Diver: 돈으로 잠수 깊이, 산소, 무게 한계를 늘린다. 장기 성장이 "더 깊이"를 열어 준다. — [RPGamer](https://www.rpgamer.com/review/dave-the-diver-review/)

### Inferences
- **판 내 성장 3계층**: ① 제단 축복(판 한정, 3중 공명이 정점) ② 저주 아이템(Hades 혼돈식: 강한 효과 + 비용, 일정 걸음 후 비용 약화 또는 '해주' 시 보너스) ③ 촉매 보유량(집중 모드에서 주문서 뽑기 재료). ①②는 판이 끝나면 사라지고 ③만 가져간다. 그래서 "이 빌드 살아 있을 때 더 내려가자"가 생긴다.
- **깊이 표지판**: 다음 룬석까지 걸음 수와 함께 "다음 층: 은빛 확률 +X%, 엘리트 출현"처럼 **다음 깊이에서 무엇이 좋아지고 무엇이 위험해지는지 한 줄로 예고**한다(StS 지도 선택의 축약판).
- **사역마 특성 = 리스크 도구**: 탐지(다음 3걸음 예고 범위 확대), 감정(저주 비용 미리 보기), 해체(미믹 무력화). 사역마 성장(집중 모드에서 키움)이 반반 탐험에서 **더 깊이 갈 수 있는 능력**으로 체감되게 하면, 반반이 집중 모드를 대체하지 않고 거기에 되먹임된다.
- **귀환 확률을 "빌드로 개선 가능"하게**: 기본 80%/50%를 사역마 특성이나 제단 축복으로 몇 %p 올릴 수 있게 하면, 깊이 들어갈 근거(안전망)를 플레이어가 스스로 만든다.

### Gaps
- 깊이별 보상 배율의 적정 기울기를 다룬 공개 데이터는 찾지 못했다(StS, Hades 모두 수치 비공개 또는 위키 수준).

---

## Q5. 함정: 단조로움, 인벤토리 잡일, 시간 낭비감, 도박 느낌

### Takeaway
주요 실패 유형은 네 가지다. ① 매 판이 달라질 거라는 확신을 못 줌(단조로움) ② 루트 홍수와 화면 난잡(잡일) ③ 손실이 너무 크거나 예고가 없음(좌절) ④ 슬롯머신 기법 차용에 대한 반감(도박 느낌). 반반 모드는 집중 모드로 가는 **급수관**이어야 하므로 ②와 ④를 특히 경계해야 한다.

### Cited Findings
- 단조로움: Halls of Torment는 "이번 판이 다르리라는 확신을 주지 못하고" 그라인드 때문에 세션을 시작하기 망설여진다는 리뷰. — [Xbox Hub](https://www.thexboxhub.com/halls-of-torment-review/)
- 진척 부재: Brotato는 판 간 진척이 없어 고리가 하나 적다는 리뷰. — [Digital Trends](https://digitaltrends.com/?p=3377739)
- 루트 홍수: PoE 맵 하나에 고유 몬스터 200+ → 아이템 홍수 "용납 불가". 3.28 바닥 루트 증가와 난잡함 위험. — [devtrackers](https://devtrackers.gg/pathofexile/p/e6c0fef3-what-happened-with-items); [FinalBoss](https://finalboss.io/path-of-exile-3-28-will-dump-more)
- 위험 대비 보상 불일치: 부패 맵 조합이 너무 가혹해 "루트가 위험을 반영하지 못한다". 아무도 짜증 나는 맵 수식어에 맞춰 빌드를 설계하지 않는다는 지적. — [PoE 포럼](https://www.pathofexile.com/forum/view-thread/3877347); [PoE 포럼](https://www.pathofexile.com/forum/view-thread/3651519)
- 좌절: 익스트랙션의 고긴장은 초보와 연패 중인 사람에게 좌절. 완화 변종(Duckov)이 등장. — [Acer](https://blog.acer.com/en/discussion/3097/best-extraction-shooter-to-play-in-2025); [PCGames.de](https://www.pcgames.de/Escape-from-Tarkov-Spiel-56471/Specials/Escape-from-Tarkov-Albtraum-Abenteuer-First-Person-Third-Person-1486744/2/)
- 도박 느낌: Kotaku는 Balatro, VS 등 로그라이크와 도박의 관계를 다뤘다. Galante 본인은 도박 경력이 상자 연출에만 영향을 줬다고 말한다. VS 제작자는 모바일 도박 게임 일을 하지 않게 된 것을 다행으로 여긴다는 보도. — [Kotaku](https://kotaku.com/enter-the-gungeon-balatro-vampire-survivors-roguelikes-gambling-dodge-roll-cash-grab-2000690804); [PC Gamer](https://pcgamer.com/vampire-survivors-saved-its-creator-from-working-on-mobile-gambling-games); [Portsmouth 대학 블로그](https://corporate-governance.docstore.port.ac.uk/news-events-and-blogs/blogs/popular-culture/vampire-survivors-how-developers-used-gambling-psychology-to-create-a-bafta-winning-game)
- 키우기 게임이 경쟁과 과금 부담으로 "가볍고 간편함"을 잃어 간다는 국내 칼럼(제목 수준). 무의미한 방대함이 피로를 키워 이탈로 이어진다는 일반론. — [다음 칼럼](https://v.daum.net/v/20260727160707467); [브런치](https://brunch.co.kr/@matthewkoo/128)
- Push-your-luck에서 "멈출지"만 고르는 것은 재미가 부족하고, 다 잃는 구조는 판이 짧아야 한다. — [Magpie Games](https://magpiegames.com/blogs/news/gametech-push-your-luck); [TV Tropes](https://tvtropes.org/pmwiki/pmwiki.php/Sandbox/DraftYourLuck)

### Inferences (방지 장치)
- **인벤토리 잡일 0**: 반반 모드에선 정리, 분해, 비교를 시키지 않는다. 촉매는 자동 스택하고, 판 한정 아이템은 판이 끝나면 자동 소멸 또는 자동 환산한다. 가방 칸은 "잃을 수 있는 것"을 보여 주는 용도로만 쓴다.
- **시간 낭비감 방지**: 쓰러져도 ① 도감·희귀 출현 기록 ② 사역마 경험치 ③ 최소 촉매 1개(안전 주머니)는 남긴다. 귀환 화면에 "이번 탐험으로 집중 모드에서 가능해진 것"을 1줄로 보여 준다.
- **변주**: 판 시작 때 "오늘의 지층" 수식어(예: 불 제단 2배, 미믹 다수, 영혼 상인 확정)를 하나 걸어 판마다 다른 기대를 만든다(Halls of Torment 비판 대응).
- **도박 느낌 억제**: 실제 돈과 연결하지 않는다. 확률을 공개한다(빛깔별 기대 내용). 조작된 근접 실패는 쓰지 않는다. 천장을 명시한다. 연출은 "개봉의 손맛"(VS 상자)으로만 쓰고, 연속 개봉을 강요하는 자동 반복 버튼은 두지 않는다.
- **세션 끝내기 좋은 지점**: 룬석이 자연스러운 휴식점이다(Dredge의 잠). 룬석에서 "여기서 쉬어도 100% 보존"을 명확히 보여 줘서, 몇 시간 그라인드가 강박이 아니라 **선택**으로 느껴지게 한다.

### Gaps
- 확률 공개와 천장이 도박 인식을 얼마나 줄이는지 정량 연구는 이번 조사에서 확보하지 못했다.
- 반쯤 보는(스트리밍 동시 시청) 플레이어의 세션 길이와 이탈 데이터는 공개 자료를 찾지 못했다. 세컨드 스크린 연구는 TV 동반 앱 위주다.
