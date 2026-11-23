# 손 작업(반반 모드) 동기 설계 조사: 단순한 행위를 "하고 싶게" 만드는 외부 구조

> 범위: 애니 시청에 몰입한 채 손만 움직이는(손가락 원 그리기, 스틱 돌리기, 휠 굴리기) 마나 생산 모드. 세션 중 화면은 시선을 끌면 안 되고, 선택·실패·팝업이 없으며, 결과는 세션 끝에 보여 준다.
> 조사 메모: ludusnovus.net, oreilly.com, dspace.rpi.edu 는 이 세션 네트워크에서 차단되어 본문을 못 읽었다. 해당 출처는 검색 스니펫으로만 인용했다. 앱스토어 리뷰와 기업 자료는 홍보성이므로 일화 수준으로 다뤘다.

## Q1. 수동적이거나 화면 밖에서 쌓이는 노력은 무엇 때문에 보람 있게 느껴지는가 (Forest, Finch, Habitica, Tamagotchi, 동물의 숲, 네코 아츠메, 포켓몬 슬립, 포켓몬 GO 알 부화)

### Takeaway
보람은 행위 자체가 아니라 "노력이 남는 곳"에서 생긴다. 성공 사례는 모두 (1) 노력이 세션이 끝난 뒤에도 남는 무언가로 바뀌고, (2) 결과를 행위 중이 아니라 돌아왔을 때나 아침에 공개하며, (3) 그 결과가 수집하거나 꾸미는 "내 것"으로 쌓인다. 스킨만 바꿔서는 이 세 요소가 생기지 않으므로 "가볍다"는 느낌이 남는다.

### Cited Findings
- **포켓몬 슬립**: 수면(완전히 수동적인 행위)이 스코어로 바뀌어 잠만보를 키운다. 등급이 오를 때마다 보상(Dream Shards)이 나오고 찾아오는 포켓몬 종류가 늘어난다. "잠을 더 잘수록 잠만보가 커지고, 더 많은 포켓몬이 섬에 오고, 더 많은 수면 스타일을 발견한다." — [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Pokémon_Sleep), [Pokémon 공식](https://www.pokemon.com/uk/app/pokemon-sleep)
- 포켓몬 슬립은 수면 세션이 기록된 다음 날 아침마다 잠만보 주변에 포켓몬이 최대 5마리 나타난다. 행위가 끝난 뒤 한 번에 공개하는 구조다. — [iMore 프리뷰](https://imore.com/gaming/pokemon-sleep-hands-on-preview-this-might-actually-be-what-gets-me-into-a-healthy-sleep-pattern)
- 포켓몬 슬립 개발진은 '아침형/저녁형' 같은 특정 일정을 보상하지 않도록 일부러 설계했다. 수면을 줄이거나 늦게 자는 왜곡을 막으려는 의도다(행위의 질을 해치는 보상을 피함). 또 하루에 한 번밖에 테스트할 수 없어 개발이 지연됐다고 한다. — [Pokémon Corporate](https://corporate.pokemon.co.jp/en/topics/detail/t-9/), [Automaton](https://automaton-media.com/en/news/20230726-20283/), [GamesRadar](https://www.gamesradar.com/pokemon-sleep-took-so-long-to-come-out-because-you-cant-playtest-sleep)
- **포켓몬 GO 알 부화**: 2/5/10km처럼 거리별로 알이 나뉘고 거리가 길수록 희귀한 포켓몬이 나온다. 무엇이 나올지 모르는 불확실성이 걷기를 보람 있게 만든다는 분석이 있지만, 이는 실무자 블로그의 가설이다. — [UX Collective](https://uxdesign.cc/pokémon-go-psychology-f2b6a20b01c)
- 124명 설문에서 Pokémon GO의 설득 요소로 '도감 완성·다양한 포켓몬 수집'이 '전투·경쟁'보다 더 효과적이었다. — [Springer chapter (2017)](https://link.springer.com/chapter/10.1007%252F978-3-319-55134-0_19)
- **Adventure Sync**: 앱을 닫은 상태에서도 걸음을 추적해 알을 부화시킨다. 주간 요약은 월요일 9시에 초기화되고, 5/25/50/100km 단계별 보상을 다음 실행 때 받는다. 수동 누적을 주 단위 계단형 보상으로 받는 구조다. — [Niantic 공식](https://pokemongo.com/en/news/adventure-sync), [Pokémon GO Wiki](https://pokemongo.fandom.com/wiki/Adventure_Sync), [Dexerto](https://www.dexerto.com/pokemon/pokemon-go-adventure-sync-walking-rewards-details-220462/)
- **네코 아츠메**: 고양이는 앱을 닫았다가 다시 와야만 나타난다. 돌아와서 놓아둔 장난감에서 노는 고양이를 보고 사진을 찍고, 떠난 고양이가 멸치나 금멸치를 남긴다. 부재 시간이 곧 보상 생성 시간이다. — [Wikipedia](https://en.wikipedia.org/wiki/Neko_Atsume), [Boing Boing](https://boingboing.net/2015/12/15/homecoming-games.html)
- Ludus Novus는 네코 아츠메가 주는 교훈을 "게임은 플레이어가 떠나 있는 것을 용서해야 한다"로 요약했다(본문 차단, 스니펫 인용). — [Ludus Novus](https://ludusnovus.net/2015/07/30/the-feline-grace-of-neko-atsume)
- **Forest**: 집중 세션 동안 나무가 자라고, 중간에 앱을 나가면 시든다. 세션마다 만든 나무가 숲으로 쌓인다. 현실의 나무 심기와도 연결된다(코인 사용, 회사 주장 200만 그루 이상, 독립 검증은 확인 못 함). — [App Store](https://apps.apple.com/us/app/id866450515), [forestapp.cc](https://forestapp.cc/llms-full.txt)
- Forest의 효과를 다룬 동료 검토 연구는 찾지 못했다. 리뷰들은 매력의 원천으로 "성취감"과 "보살피려는 내적 동기"를 꼽는다. — [Bustle](https://www.bustle.com/wellness/forest-focus-screen-time-app-review)
- **Finch**: 짧은 자기돌봄 과제를 끝내면 새가 자라고, 새는 "모험"을 떠났다 돌아온다. Engadget 리뷰어는 오래 쓴 첫 앱이라고 했다. 137일 연속 사용자는 시간이 지나자 "디지털 보상이 더는 필요 없고 자기돌봄 자체가 보상이 됐다"고 말했다(일화). — [Engadget](https://www.engadget.com/apps/this-self-care-virtual-pet-is-helping-me-get-my-act-together-160027169.html), [App Store](https://apps.apple.com/app/1528595748)
- **Viridi**(다육식물 키우기): 실시간으로 자라며 앱을 닫아도 성장한다. 개발사는 주 2~3회만 돌보면 되게 설계했다. 리뷰어는 "거의 전부가 기다림"이라고 평했다. 개발사는 유료 판매 모델이 게임을 "또 하나의 잡일"로 만들까 걱정해 F2P로 바꾸었다. — [Mel Magazine](https://melmagazine.com/en-us/story/app-ed-the-slow-grow), [Gamezebo](https://www.gamezebo.com/reviews/viridi-review-wait-for-it/), [Wikipedia](https://en.wikipedia.org/wiki/Viridi)
- **동물의 숲(ACNH)**: 이길 방법이 없는 개방형 게임이라 플레이어가 스스로 목표를 정한다. 플레이가 자율성·유능감·관계성(SDT) 욕구를 충족했고, 이 욕구가 좌절되거나 다른 활동으로 더 잘 충족되면 플레이를 그만뒀다. — [Frontiers in Psychology 2022](https://frontiersin.org/articles/10.3389/fpsyg.2022.800683/full)
- **IKEA 효과**(소유감의 근거): 직접 조립한 물건을 같은 기성품보다 더 높게 평가한다. 단, **완성했을 때만** 생긴다. 만들다가 부수거나 끝내지 못하면 효과가 사라진다. — [Norton, Mochon & Ariely 2012 (Harvard DASH)](https://dash.harvard.edu/handle/1/12136084), [NPR](https://www.npr.org/2013/02/06/171177695/why-you-love-that-ikea-table-even-if-its-crooked)

### Inferences
- 기존 컨셉(물레, 염주, 가마솥 젓기)이 "가볍게" 느껴진 이유는 행위의 피드백만 있고 **세션 너머로 남는 대상, 기다리는 공개, 내 것이 된 결과**가 없기 때문으로 보인다. 그래서 스킨을 바꿔도 해결되지 않는다.
- 포켓몬 슬립은 이 모드와 구조가 가장 비슷하다. 행위 중에는 화면을 보지 않고(잠), 결과는 끝난 뒤 한 번에 공개되며(아침), 누적은 계속 자라는 대상(잠만보)에 쌓이고, 공개는 수집(수면 도감)으로 이어진다. "손을 돌린 시간 = 수면 시간"으로 치환하면 그대로 적용할 수 있다.
- IKEA 효과는 완성이 있어야 생긴다. 몇 주짜리 장기 목표 하나만 두면 중간에 효과가 없으므로 "작은 완성"(층 하나, 시설 하나, 마법진의 원 하나)을 자주 주어야 한다.

### Gaps
- 포켓몬 슬립 Famitsu 인터뷰 원문, 네코 아츠메 개발자의 설계 의도 발언은 확보하지 못했다(2차 요약만 있음).
- 포켓몬 GO의 알 부화만 따로 떼어 걷기 효과를 측정한 연구는 찾지 못했다.

## Q2. 충전 후 큰 이벤트, 세션 종료 공개, 기대와 즉시 보상 중 무엇이 효과적인가 (goal-gradient 등)

### Takeaway
목표에 가까워질수록 노력이 빨라지고(goal-gradient), 시작부터 진행이 일부 찬 것처럼 보이면 완주가 빨라진다(endowed/illusionary progress). 사람은 확실한 즐거움을 며칠 미루는 데서 오히려 가치를 느끼고(savoring), 결과가 불확실할 때 기대 구간의 보상 신호가 가장 오래 지속된다. 따라서 "며칠에 걸쳐 차오르는 게이지 + 세션 끝의 불확실한 공개 + 큰 완성 이벤트"는 근거가 있는 구조다.

### Cited Findings
- **Goal-gradient**: 카페 적립 쿠폰 현장 연구에서 고객은 무료 커피에 가까워질수록 구매 간격을 좁혔다. — [Kivetz, Urminsky & Zheng 2006 (Columbia)](https://business.columbia.edu/sites/default/files-efs/pubfiles/1200/goalgradient.pdf)
- **착시성 진행(illusionary progress)**: 칸 12개에 보너스 도장 2개를 미리 찍은 카드가 도장 10개짜리 빈 카드보다 10회 구매를 더 빨리 완료하게 했다(중앙값 10일 대 15일). 매몰비용 같은 대안 설명으로는 설명되지 않았다. — [Columbia Business School 요약](https://business.columbia.edu/insights/chazen-global-insights/goal-gradient-hypothesis-resurrected-purchase-acceleration), [Chicago Booth Review](https://www.chicagobooth.edu/review/going-goal)
- **기대(savoring)**: 피험자는 좋아하는 유명인과의 키스를 즉시나 3시간 뒤보다 **3일 뒤**로 받는 데 더 많이 지불하려 했다. 전기 충격(부정적 사건)이나 돈은 반대 패턴이었다. Loewenstein은 기대가 짧은 소비의 효용을 늘려 준다고 설명했다. — [Loewenstein 1987 (CMU PDF)](https://www.cmu.edu/dietrich/sds/docs/loewenstein/AnticipationDelayed.pdf), [Kumar, Killingsworth & Gilovich 2014](https://bpb-us-e1.wpmucdn.com/blogs.cornell.edu/dist/b/6819/files/2019/12/KumarKillingswothGilovich.14.pdf)
- **불확실성과 기대 신호**: 원숭이 실험에서 단서와 보상 사이의 도파민 지속 활성은 보상 확률 0.5일 때 가장 컸고, 0.25와 0.75에서는 약했으며, 확실할 때(0 또는 1)는 나타나지 않았다. 다만 이것이 TD 오차의 산물이라는 반론(Niv, Duff & Dayan 2005)도 있다. — [Fiorillo, Tobler & Schultz 2003 (PubMed)](https://pubmed.ncbi.nlm.nih.gov/12649484/), [Cambridge PDF](https://www.pdn.cam.ac.uk/system/files/documents/2003-fiorillo-science.pdf)
- **Bongo Cat**(입력 횟수를 세는 방치 게임): 키보드와 마우스 입력마다 점수가 쌓이고 일정 시간이나 점수마다 상자(모자, 스킨)가 나온다. 공식 드롭률은 Common 90%, Uncommon 9.5%, Rare 0.49%, Epic 0.01%, Legendary 1/500,000이다. 받지 않으면 타이머가 멈춘다는 가이드도 있다(가이드마다 세부 규칙이 다름). — [Steam](https://store.steampowered.com/app/3419430), [bo3.gg](https://bo3.gg/games/articles/bongo-cat-all-items-and-item-drop-chances)
- 2024년 연구에서 호흡 운동 알림을 idle 게임으로 바꾸자 프로그램 준수율과 심호흡 빈도, 참여도가 모두 올랐다(검색 스니펫, 원문 미확인). — [escholarship 등 검색 결과](https://escholarship.org/content/qt0b07v51w/qt0b07v51w_noSplash_5f2385afebb49ef3e458511f62e2af5f.pdf)

### Inferences
- **세션 종료 공개 + 불확실성**: 세션 끝에 "무엇이 나왔나"를 공개하되, 일부를 확률적으로 만든다(희귀 두루마리 조각, 방문한 사역마, 마나 결정의 색). 세션 중 신호를 줄 수 없으므로 기대는 "끝나면 볼 수 있다"는 사실 자체에서 생겨야 한다. 확정 수치(마나 n)와 불확실한 보너스를 함께 주는 구성이 적합해 보인다.
- **다일 충전 게이지**: 큰 이벤트(마법진 발동, 새 층 완공)를 3~7일 정도 거리에 두면 savoring 연구와 맞는다. 첫 게이지는 일부를 미리 채워 두고(endowed progress), 끝이 가까워지면 "다음 세션이면 발동" 같은 근접 표시를 세션 **시작 전과 끝난 뒤**에 보여 준다.
- **단위**: 애니 한 화(약 24분)를 충전 한 칸으로 삼으면 자연스럽다. Bongo Cat의 30분 주기와도 비슷하다. "한 화 보면 한 칸"은 생각할 필요가 없는 규칙이다(추론).

### Gaps
- "세션 종료 공개"와 "실시간 피드백"을 직접 비교한 게임 실험은 찾지 못했다.
- 착시성 진행 효과가 수일~수주짜리 게임 게이지에서도 그대로 나타나는지 직접 검증한 연구는 확인하지 못했다.

## Q3. 애착과 "내 공간": idle 게임의 탑/집 짓기, Rusty's Retirement, 데스크톱 펫, Bongo Cat

### Takeaway
주변부에 머무는 idle 게임은 "다른 일을 하는 동안 내 것이 자란다"는 감각으로 성공했다. 애착은 꾸밀 수 있는 공간(농장, 집)과 수집품(모자, 고양이)에서 생긴다. 다만 성공 사례들도 화면 한구석을 차지하므로, 애니를 보는 동안에는 이보다 훨씬 더 조용해야 한다.

### Cited Findings
- **Rusty's Retirement**: 화면 하단에 좁은 가로 띠로 떠 있으면서 다른 작업을 하는 동안 농장을 돌보는 idle 농장 게임이다. 리뷰는 데스크톱 통합과 수동적 설계를 칭찬했고, idle 장르를 되살렸다는 평을 받는다. — [Steam](https://store.steampowered.com/app/2666510), [Wikipedia](https://en.wikipedia.org/wiki/Rusty%27s_Retirement), [PC Gamer](https://www.pcgamer.com/games/sim/idle-farming-sim-rustys-retirement-allows-you-to-pour-hours-into-farmwork-whilst-still-doing-other-things)
- 한 리뷰는 화면 공간 자체가 관리 대상 자원이라고 평했고, 다른 리뷰는 "생산성을 위협한다"(즉 시선을 끈다)는 제목을 달았다. — [Sidequesting](https://sidequesting.com/2024/05/rustys-retirement-review), [GamesRadar](https://www.gamesradar.com/like-an-idle-stardew-valley-this-cute-farm-sim-sits-at-the-bottom-of-your-screen-while-you-do-other-things-and-already-threatens-my-productivity)
- **Bongo Cat**: 작업표시줄에 앉아 입력을 세는 무료 게임으로, 동시접속 상위권에 올랐다. 매력으로는 "켜 두면 끌 이유가 없음", 희귀 모자에 대한 기대, "일하는 동안 곁에 있는 작은 친구"가 꼽힌다. 수익은 적자이며 후속작 마케팅 수단이다. — [PC Gamer](https://www.pcgamer.com/games/life-sim/one-of-the-biggest-games-on-steam-right-now-is-bongo-cat-a-cat-with-a-hat-who-smacks-your-windows-taskbar-like-a-bongo-drum-when-you-type), [Windows Central](https://www.windowscentral.com/gaming/this-free-steam-game-is-being-played-more-than-stellar-blade-and-elden-ring-nightreign-even-though-its-just-a-cat), [Automaton JP](https://automaton-media.com/articles/newsjp/bongo-cat-20250627-346431/)
- **Idle 게임 연구**: idle 게임은 숙련, 도전, 실패 없이도 오랜 플레이를 만들어 기존 참여 이론에 반한다. RPI 학위논문(2025)은 이것이 유능감과 자율성 욕구를 충족하는지 실증하려 했다(본문 차단, 스니펫). CHI 2018 논문은 idle 게임 66종의 상호작용 스펙트럼을 분류했고, CHI PLAY 2019 논문은 디자이너 6명을 인터뷰해 "중단되는 참여"를 위한 설계를 다뤘다. — [RPI dspace](https://dspace.rpi.edu/items/64643720-6def-468e-a497-754e607c4941), [ProQuest](https://www.proquest.com/docview/3258810217), [NSF PAR (CHI 2018)](https://par.nsf.gov/servlets/purl/10061230), [NSF PAR (CHI PLAY 2019)](https://par.nsf.gov/servlets/purl/10174274)
- **한국 방치형 '키우기'**: 조작 부담이 적고, 캐릭터가 빨리 성장하며, 경쟁 부담이 없는 점이 장점으로 꼽힌다. 핵심은 "목적의식"으로, 영지 건설, 전용 무기, 스킬 조합 같은 장치가 성장의 재미를 더한다. 성장 속도, 보상 타이밍, 다음 목표를 보여 주는 방식이 중요하다는 분석도 있다. 반면 최근에는 과금과 플레이 부담이 커졌다는 비판이 있다. — [디지털투데이 리뷰](https://www.digitaltoday.co.kr/review/amp/521918/gran-saga-killing-review-ip-collaboration), [위키독스: 방치형 성장 게임 기획](https://wikidocs.net/366938), [다음/김영욱 칼럼](https://v.daum.net/v/20260727160707467), [KOCCA 산업 동향](https://kocca.kr/global/2026_9+10/sub03_06.html)
- KOCCA 자료는 '키우기'(캐릭터 성장과 수집 중심)와 인크리멘탈(숫자 성장 자체가 재미)을 구분한다. — [KOCCA](https://kocca.kr/global/2026_9+10/sub03_06.html)
- **Tamagotchi 효과**: 기계나 소프트웨어 에이전트에 대한 정서적 애착을 가리킨다. 몇 시간만 방치해도 죽는 펫, 돌봄 실수 누적에 따른 외형과 행동 변화가 강한 죄책감을 낳았고, 이후 모델은 일시정지 기능을 넣었다. — [Wellcome Collection](https://wellcomecollection.org/stories/digital-pets), [Wikipedia](https://en.wikipedia.org/wiki/Tamagotchi_effect), [Vice](https://vice.com/en/article/in-praise-of-tamagotchi-683)

### Inferences
- **탑(b)은 "내 공간" 애착을 가장 잘 만든다.** 영지 건설은 한국 키우기 게임에서 목적의식 장치로 꼽히고, IKEA 효과(직접 쌓은 것), 동물의 숲식 자기 목표, 시설이 다른 시스템(두루마리 작성, 해부, 탐험)을 강화하는 실용적 연결까지 갖춘다.
- 다만 Rusty's Retirement조차 "생산성을 위협"할 만큼 시선을 끈다. 이 게임에서는 세션 중 탑을 보여 주지 말고 **세션 전후**에만 보여 줘야 한다. 세션 중 화면은 거의 정지된 어두운 상태로 두는 편이 맞다.
- 사역마(d)는 Bongo Cat처럼 "곁에 있는 친구" 가치가 있지만 움직이는 캐릭터는 시선을 끈다. 네코 아츠메처럼 **없는 동안(세션 중) 찾아와 있고, 끝난 뒤에 발견하는** 방식으로 바꾸면 애착은 남기고 시선은 빼앗지 않는다. 방치 죽음, 호감도 감소 같은 Tamagotchi식 처벌은 금지한다.

### Gaps
- idle 게임에서 "기지/탑 꾸미기"가 리텐션에 주는 효과를 정량화한 공개 데이터는 찾지 못했다.
- 한국 커뮤니티(루리웹, 인벤 등)의 "켜두기 게임" 원문 반응은 이번 검색에서 확보하지 못했다.

## Q4. 위험: 강박 루프, 스트릭 불안, 주의 포획 / 캄 테크(calm tech)·앰비언트 디스플레이 권고

### Takeaway
연속일(streak)이나 방치 처벌은 손실회피로 참여를 끌어올리지만 불안과 이탈 후 반감을 남긴다. 부적절하다고 느낀 처벌은 동기를 해친다. 동시에, 시청 중 무관한 두 번째 화면 활동은 몰입(transportation)과 감정, 즐거움을 실제로 떨어뜨린다. 따라서 이 모드는 "주변부에서만, 잃는 것 없이"가 필수다.

### Cited Findings
- **시청 몰입 훼손**: 대학생 230명 실험에서 시트콤을 보며 트윗한 집단은 시청만 한 집단보다 몰입(narrative transportation)이 낮았다. 이것이 감정 반응을 줄이고, 결국 즐거움을 떨어뜨렸다. — [Park et al. 2019, J. of Broadcasting & Electronic Media (UConn Today)](https://today.uconn.edu/?p=151293), [ScienceDaily](https://www.sciencedaily.com/releases/2019/07/190702112706.htm)
- 단, 슈퍼볼 시청자 연구에서는 두 번째 화면 사용 빈도 일반은 즐거움과 부적 관계였고, **프로그램과 관련된** 두 번째 화면 사용은 즐거움을 정적으로 예측했다. — [UMN Conservancy](https://conservancy.umn.edu/server/api/core/bitstreams/b58dcfc8-6092-4f59-ad48-02301ace9248/content)
- **캄 테크**: Weiser와 Brown(1995, Xerox PARC)은 기술이 주의의 중심이 아니라 가장자리(periphery)에서 정보를 주고 중심과 주변을 오가야 한다고 했다. Amber Case의 원칙은 주의를 최소한만 요구하고, 스트레스 없이 알리며, 주변부를 활용하라는 내용으로 시작한다(본문 차단, 스니펫). — [Wikipedia: Calm technology](https://en.wikipedia.org/wiki/Calm_technology), [O'Reilly (Case)](https://oreilly.com/content/principles-calm-technology-we-are-not-bad-at-technology-technology-is-bad-at-us), [CMU 강의 슬라이드](https://www.cs.cmu.edu/~jasonh/courses/ubicomp-sp2007/slides/09-calm-computing.pdf), [Adobe blog](https://blog.adobe.com/en/publish/2016/10/12/calm-technology-in-the-era-of-experience-design)
- **스트릭**: Duolingo는 손실회피를 의도적으로 쓴다고 밝혔고, 스트릭 프리즈(하루 건너뛰어도 유지)를 도입했다. 프리즈 2개 장착을 허용하자 일일 활성 학습자가 0.38% 늘었다(회사 발표, 독립 검증 없음). — [Duolingo blog](https://blog.duolingo.com/how-duolingo-streak-builds-habit)
- 859개 스트릭 디자인을 분석한 글은 "스트릭은 결국 잃는 것에 관한 것"이라고 정리했다. 깨진 스트릭이 이후 참여를 지속적으로 떨어뜨린다는 연구(Silverman & Barasch 2023, JCR)는 2차 인용으로만 확인했다. — [Mobbin](https://mobbin.com/blog/streaks-are-about-losing-a-study-of-859-streak-designs), [Smashing Magazine](https://smashingmagazine.com/2026/02/designing-streak-system-ux-psychology/)
- **Habitica 처벌**: Diefenbach(2019) 인터뷰와 사용자 45명의 2주 현장연구에서 보상·처벌 체계의 역효과가 나타났다. 역효과의 정도는 사용자가 느낀 보상 체계의 부적절함과 상관이 있었고, 시간에 따른 동기 변화의 핵심 예측 변인이었다. — [IJHCS 2019, DOI 10.1016/j.ijhcs.2018.09.004 (peeref 요약)](https://peeref.com/works/10698835)
- 가장 열심인 사용자가 따라가려다 소진되어, 더 강한 부정적 감정을 안고 떠난다는 게이미피케이션 비판도 있다(에세이). — [Mind the Product](https://www.mindtheproduct.com/why-gamification-kills-the-products-its-supposed-to-save/)
- 수면을 줄이게 만드는 보상을 피한 포켓몬 슬립의 결정(Q1 참조)도 "행위를 왜곡하는 보상 금지"의 사례다. — [Automaton](https://automaton-media.com/en/news/20230726-20283/)

### Inferences
- **금지 목록**: 연속일, 일일 출석 압박, 방치 감쇠(나무 시듦, 사역마 호감도 하락), 세션 중 드롭 알림, 움직이는 캐릭터, 세션 중 소리 효과(애니 오디오와 겹침). Forest의 "나가면 시든다"는 집중 앱에는 맞지만, 이 모드에서는 애니 일시정지나 화장실 같은 정상 행동을 처벌하게 된다.
- **허용 목록**: 주간 누적 계단형 보상(Adventure Sync처럼 놓쳐도 잃는 것 없음), 쉬었다 돌아오면 주는 "휴식 보너스", 세션 중 화면은 거의 정지(손가락 아래 아주 느린 빛 정도). 손 동작이 인식되고 있다는 확인은 화면보다 **햅틱이나 컨트롤러 진동**으로 주변부에서 주는 편이 낫다(추론).
- 슈퍼볼 연구에 비추어 보면, 손 작업이 "애니를 보며 하는 것"이라는 맥락과 연결되면(예: 그 화를 본 기념으로 남는 기록) 몰입을 덜 해칠 수 있다. 세션 결과에 "오늘 본 화 수"나 "함께 본 작품명"을 남기는 정도가 적당해 보인다(추론, 시선 요구는 없음).

### Gaps
- 반복적 손 운동(피젯)이 영상 몰입에 주는 영향을 직접 측정한 연구는 이번 조사에서 찾지 못했다.
- Amber Case 원칙 8개의 정확한 원문은 차단 때문에 확보하지 못했다.

## Q5. (a)~(d) 중 무엇이 가장 적합한가, 또는 더 나은 대안

### Takeaway
단독안으로는 **(b) 마법사 탑**이 가장 강하다(소유감, 실용 연결, 작은 완성의 반복). 다만 단기 충전과 공개의 쾌감은 **(a) 의식 마법진**이 더 잘 만든다. 권장안은 **"탑의 각 층을 마법진 충전으로 올리는" 결합형**이다. (c)는 탑의 시설 하나로 흡수하고, (d)는 "세션 중 찾아와 있다가 끝나고 발견하는" 네코 아츠메식으로만 쓴다.

### Cited Findings (판단 근거 요약)
- 완성이 있어야 애착이 생긴다(IKEA 효과) → 층과 시설 단위로 완성을 자주 준다. — [Norton et al. 2012](https://dash.harvard.edu/handle/1/12136084)
- 다일 거리의 확실한 큰 보상은 기대 자체가 가치다(savoring) → 마법진 발동을 3~7일 뒤에 둔다. — [Loewenstein 1987](https://www.cmu.edu/dietrich/sds/docs/loewenstein/AnticipationDelayed.pdf)
- 끝이 가까울수록 가속하고, 미리 채운 진행은 완주를 앞당긴다 → 새 층의 마법진은 일부 각인된 상태로 시작한다. — [Kivetz et al. 2006](https://business.columbia.edu/sites/default/files-efs/pubfiles/1200/goalgradient.pdf)
- 아침(세션 끝) 공개와 자라는 대상, 찾아오는 존재, 수집을 결합한 포켓몬 슬립 구조. — [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Pokémon_Sleep)
- 부재 중 방문, 복귀 시 발견하는 네코 아츠메 구조. — [Wikipedia](https://en.wikipedia.org/wiki/Neko_Atsume)
- 영지 건설이 방치형의 목적의식 장치다. — [디지털투데이](https://www.digitaltoday.co.kr/review/amp/521918/gran-saga-killing-review-ip-collaboration)
- 무관한 동시 화면 활동은 몰입과 즐거움을 떨어뜨린다. — [Park et al. 2019](https://www.sciencedaily.com/releases/2019/07/190702112706.htm)

### Inferences (평가와 설계 제안)
**후보별 평가 (애니 몰입 원칙을 1순위로 둠)**

| 안 | 장점 | 위험 | 판정 |
|---|---|---|---|
| (a) 거대 의식 마법진 | 다일 충전과 큰 발동 이벤트(savoring, goal-gradient), 공개 연출이 화려함 | 발동한 뒤 남는 것이 없으면 다시 "가벼워짐". 매번 같은 연출은 금방 질림 | 단독으로는 부족. 결과가 영구 자산으로 남아야 함 |
| (b) 개인 마법사 탑 | 내 공간 애착(IKEA), 시설이 두루마리 작성·해부·탐험을 강화하는 실용적 이유, 끝없는 확장 | 세션 중 보여 주면 시선을 끔. 건설에 선택이 끼면 "생각"이 필요해짐 | **핵심 축으로 채택**. 선택은 세션 밖에서만 |
| (c) 마나 나무·정원 | Forest와 Viridi처럼 느린 성장, 조용함 | 기능적 보상이 약함. 시듦 같은 처벌을 넣고 싶어짐 | 탑의 한 시설(옥상 정원)로 흡수 |
| (d) 곁에서 쉬는 사역마 | 동반감(Bongo Cat), 애착 | 움직이는 캐릭터는 시선을 끎. 호감도 감소는 Tamagotchi식 죄책감 | 세션 중에는 보이지 않고, 끝난 뒤 "와 있던" 사역마를 발견하는 방식으로만 |

**권장 구조: "탑을 한 층씩 올리는 의식"**
1. **세션 전(3초, 선택 없음)**: 탑 단면과 현재 층의 마법진 각인도(예: 62%)를 보여 주고 "이번 화를 보면 ~78%"처럼 다음 목표를 미리 보여 준다(goal-gradient). 시작은 터치 한 번.
2. **세션 중**: 화면을 어둡게 해서 거의 정지 상태로 둔다(손가락 아래 아주 희미한 빛만). 손 동작 인식은 진동이나 햅틱으로만 확인시킨다. 알림, 소리, 드롭은 없다.
3. **세션 끝(자동 공개)**: ① 확정 마나량, ② 마법진 각인 진행 애니메이션(여기서만 화려하게), ③ 불확실한 보너스 1개(희귀 잉크, 두루마리 조각, "찾아온 사역마"; 확률적이어서 기대를 만든다), ④ "본 작품과 화 수" 기록 스탬프.
4. **마법진 완성(약 3~7일, 애니 6~10화)**: 큰 발동 연출 후 새 층이 완공되고 시설 슬롯이 열린다. 다음 층의 마법진은 일부 각인된 상태로 시작한다(endowed progress).
5. **시설 효과**: 서고(두루마리 작성 효율), 해부실, 탐험 대기실(스태미나 상한), 옥상 정원(c안 흡수), 사역마 둥지(d안 흡수; 둥지가 생기면 세션 끝에 방문자 등장). 시설 배치와 선택은 세션 밖에서 원할 때만 한다.
6. **처벌 없음**: 연속일 없음. 주간 누적 계단 보상(Adventure Sync식)은 놓쳐도 아무것도 잃지 않는다. 오래 쉬었다 오면 "탑이 기다렸다"는 휴식 보너스를 준다.

**"하고 싶은 이유"를 세 층으로 쌓기**
- 이번 세션: 끝나면 무엇이 나왔는지 볼 수 있다(불확실한 공개).
- 이번 주: 마법진이 발동해 탑이 한 층 오른다(savoring과 goal-gradient).
- 장기: 내가 쌓은 나만의 탑이 다른 모든 시스템을 강하게 만든다(IKEA 효과와 실용성).
- 이 구조에서는 마나가 "연료"이면서 동시에 "탑의 재료"이기도 하다. 소비하는 자원만으로는 동기가 약하므로, 세션 결과의 일부가 **항상 영구 자산(각인)** 으로 남도록 이중 산출을 권장한다.

**대안 아이디어(참고)**
- "애니 기록 탑": 각 층의 장식이 그 층을 쌓는 동안 본 작품에서 영감을 받은 모티프(예: 색이나 문양)로 각인된다. 시청 경험과 관련된 두 번째 화면 활동이 즐거움을 높였다는 슈퍼볼 연구와 맞는다. 단, 저작권상 작품명이나 텍스트 기록 수준으로 제한한다.
- 포켓몬 슬립식 "수면 도감"의 변형으로 "세션 끝 방문자 도감"(사역마나 정령)을 둔다. 수집이 경쟁보다 강력하다는 Pokémon GO 연구 결과를 활용한다.

### Gaps
- 결합형(마법진 충전 → 층 완공)의 적정 주기(3일, 7일, 애니 몇 화)는 문헌으로 정할 수 없으므로 플레이테스트가 필요하다.
- 햅틱만으로 "인식되고 있다"는 피드백이 충분한지, 아이패드 손가락 원 그리기에서 햅틱이 가능한지(아이패드는 탭틱 엔진이 제한적)는 별도 기술 검증이 필요하다.
- 확률적 보너스가 가챠식 강박으로 흐르지 않는 상한(희귀도 분포, 천장)은 이번 조사 범위 밖이다.
