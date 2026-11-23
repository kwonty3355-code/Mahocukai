# 사역마 가챠 조사: 연출 문법, 수집 동기, 천장·돌파 인식, 등급 체계, 크리처 디자인

> 범위: 현질 없는 싱글플레이 웹게임의 사역마(familiar) 가챠. 게임 내 재화만 쓰고, 천장과 등급, 중복 돌파, 변성체(이로치/샤이니), 신수(해태·불가사리·삼족오·구미호), 개그 "산업형" 사역마를 다룬다.
>
> **조사 환경 메모 (차단 사이트)**: 이 세션에서는 WebFetch가 다음 호스트에서 DNS 실패(네트워크 허용 목록 밖)했다: **medium.com, pcgamer.com, brunch.co.kr, arca.live**. 그래서 본문 전체를 읽지 못했고, 아래 인용 중 상당수는 **검색 결과 요약/스니펫 기반**이다. 디시인사이드·루리웹·인벤도 본문 fetch는 시도하지 않았고 스니펫만 확보했다(arca.live 차단 이후 지침상 추가 호스트 시도를 중단). 원문 검증이 필요한 항목은 각 Gaps에 표시했다.
> 출처 없이 디자이너 사전지식으로 적은 내용은 Inferences에 **[사전지식·미검증]** 태그를 달았다.

---

## Q1. 뽑기 연출 문법: tell → escalation → 침묵 → burst → 등급별 오디오, 그리고 왜 먹히는가

### Takeaway
서브컬처 가챠 연출은 장르 공통의 **색 문법**(낮은 등급은 차갑고 탁한 색, 중간은 따뜻한 색, 최고 등급은 금색/무지개/섬광)을 공유한다. 핵심 기법은 (1) 결과를 미리 암시하는 **텔**, (2) 가끔만 쓰는 **승급 페이크아웃**, (3) 공개 직전의 **정적 한 박자**, (4) 등급별 **사운드스케이프 전환**이다. 심리학 연구에서 확인된 사실은 두 가지다. 공개 직전에 **예기 각성**이 오르고, **희귀 보상**일수록 각성과 보상감이 크며 "한 번 더" 충동도 강해진다.

### Cited Findings
**장르 공통 색 문법**
- 장르에는 꽤 일관된 색 코드가 있다. 저등급은 cool/muted, 중등급은 warm, 최상위는 gold·rainbow·밝은 섬광이다. 이 색 문법은 다른 공통점이 없는 게임들 사이에서도 유지된다 — [hostedgg: gacha pull reveal color culture](https://hostedgg.com/blog/gacha-pull-reveal-color-culture)
- 유성형 연출에서는 유성 꼬리 색이 등급을 알린다(보라=4성, 금=5성). 그리고 캐릭터 공개 직전에 극적인 정지가 들어간다 — 게임화 블로그 스니펫. 게임명이 스니펫에 명시되지 않았고, [Yu-kai Chou: Anticipation Parade](https://yukaichou.com/advanced-gamification/anticipation-parade-gamification-design-technique/)일 가능성이 있으나 본문 미확인.

**페이크아웃과 그 한계**
- 페이크아웃은 중간 등급 섬광이 "한 박자 너무 길게" 머물다가 금색으로 바뀌는 연출이다. "공개가 잠깐 거짓말을 할 수 있을 때 더 강력하다" — [hostedgg](https://hostedgg.com/blog/gacha-pull-reveal-color-culture)
- 페이크아웃이 너무 길거나 너무 잦으면 효과가 없어진다(예: 세 번에 한 번꼴로 "잠깐, 더 있어!"). 한 UX 저자는 전체 뽑기의 1% 미만으로 제한하라고 권한다. 이는 그 저자 개인의 경험칙이다 — 검색 스니펫. 출처는 [Roblox DevForum: What makes a good loot box opening animation?](https://devforum.roblox.com/t/what-makes-a-good-loot-box-opening-animation/1999029) 또는 N3TWORK 글 중 하나로, 본문을 확인하지 못했다.
- **FGO** 2018년 커뮤니티 데이터마인(r/grandorder)에 따르면 소환 연출은 두 종류다. 하나는 은→금 **랭크업 연출**, 다른 하나는 금색/무지개 **구슬(orb) 연출**이다. 은→금 랭크업은 SR 서번트 40%, SSR 서번트 20% 확률로 나온다. SSR의 구슬 연출 비율은 60% 없음, 20% 금 구슬, 20% 무지개 구슬이다. SR에도 무지개 구슬이 20% 확률로 나온다. 즉 **좋은 텔이 확정이 아니고, 확정 등급이 반드시 텔을 보여주지도 않는다**. 오래된 데이터라 현행과 다를 수 있다 — [r/grandorder datamine (mirror)](https://nyc1.lr.ggtyler.dev/r/grandorder/comments/9pmta4/the_truth_in_code_summoning_gold_orbs_rainbow)
- FGO의 기대감 연출(聖晶石 소환 시 '기대치가 오르는 연출') 목록을 정리한 일본 공략이 있다. 스니펫에 구체 목록은 없었다 — [appmedia.jp](https://appmedia.jp/?p=85218)

**블루 아카이브**
- 모집 연출에 특정 효과가 나오면 **★3이 확정**이다. 다만 픽업 캐릭터 확정은 아니다. 배경색보다 **반짝임 색**이 중요하다. 아로나/프라나 인트로 배경이 파란색이어도 승인 순간 **핑크 반짝임**이 나오면 ★3이 확정된다 — [game8.jp Blue Archive](https://game8.jp/blue-archive/780848)
- 200 모집 포인트로 픽업 캐릭터를 교환할 수 있다(사실상 200뽑 천장) — [Gfinity](https://www.gfinity.net/blue-archive/banner/)

**포켓몬 TCG 포켓**
- 레어 확정 연출에서는 팩을 열 때 **금이 가는 소리(crack)**가 나고 팩 안에서 빛이 새어 나온다. 배경색도 바뀐다. 소리는 음소거 상태에서 놓치기 쉽다 — [GameWith](https://gamewith.net/pokemon-tcg-pocket/49002)
- 다섯 장을 본 뒤 "위로 스와이프"해서 도감에 등록한다 — [Nintendo Wire](https://nintendowire.com/guides/pokemon-tcg-pocket/introduction/)
- **God Pack**은 다섯 장 모두가 홀로/EX/풀아트/금관인 팩으로, 숨겨진 초희귀 이벤트다. 레어는 보통 마지막 슬롯에 나오지만 어느 슬롯에서든 나올 수 있다 — [Insider Gaming](https://insider-gaming.com/?p=67918); [Dexerto](https://dexerto.com/pokemon/pokemon-tcg-pocket-player-pulls-god-pack-of-all-illustration-rares-2971956); [Kotaku](https://kotaku.com/best-video-game-moment-2024-astro-bot-marvel-dragon-age-1851733392/7). 확률 0.050%라는 수치는 서드파티 시뮬레이터의 주장이라 미검증이다 — [pocketcards.net](https://pocketcards.net/pack-opening-simulator)

**붕괴: 스타레일**
- PC Gamer 기사 제목은 "Honkai: Star Rail's gacha animations have no right to go this hard"이다. 워프 연출이 업계에서도 과하게 공들인 수준이라는 평가로 보인다. 본문은 fetch 차단으로 읽지 못했다 — [PC Gamer](https://www.pcgamer.com/uk/honkai-star-rails-gacha-animations-have-no-right-to-go-this-hard/)

**보조 원리**
- 움직임은 원초적 생존 기술을 건드리므로 주의를 끄는 가장 좋은 수단 중 하나다. 고등급 뽑기에서는 **사운드스케이프 자체가 전환되어야** 한다 — [hostedgg](https://hostedgg.com/blog/gacha-pull-reveal-color-culture) 외 검색 스니펫

**심리학 근거**
- 루트박스는 슬롯머신과 같은 **변동비율 강화 스케줄**로 자주 비교된다. 무작위화는 행동 습득과 반복을 촉진하는 피드백 메커니즘이다 — [Scientific Reports 2022 (s41598-022-21222-3)](https://www.nature.com/articles/s41598-022-21222-3.pdf)
- Larche et al. 2021 (Journal of Gambling Studies): **희귀 보상**일수록 각성과 보상 반응이 크고, 다음 상자를 열고 싶은 충동도 커진다. 보상 공개 전에 **예기 각성(anticipatory arousal)**이 증가한다 — [UWSpace (Waterloo)](https://uwspace.uwaterloo.ca/items/f3df3e42-ecb1-4cf9-89cf-87626dbfbaf1/full); [Springer](https://link.springer.com/article/10.1007/s10899-019-09913-5)
- 슬롯머신 연구에서는 **니어미스**가 깨끗한 패배보다 각성을 더 일으킨다. 계속 플레이하려는 충동은 승리보다도 강했다. 다만 fMRI는 혈중 산소를 재므로 "도파민 분비"를 직접 보여준 것은 아니다. 대중 기사의 도파민 주장은 조심해서 다뤄야 한다 — [YourStory 2026](https://yourstory.com/2026/07/slot-machines-near-miss-psychology-gambling-games)
- 루트박스 오픈이 "크리스마스 같은" 이유를 다룬 기사도 있다(본문 미확인) — [Kotaku](https://kotaku.com/why-opening-loot-boxes-feels-like-christmas-according-1793446800)

### Inferences
- **[사전지식·미검증] 게임별 연출 단계 요약.** 이번 세션에서 fetch로 확인하지 못했으니, 구현 전에 영상으로 재확인할 것.
  - **원신**: 유성이 하늘을 가로지르고 꼬리 색이 텔이 된다(파랑 3성, 보라 4성, 금 5성). 이어 화면 전환, 등급색 섬광, 실루엣 공개, 이름 카드 순이다. 10연차에서는 가장 높은 등급 색의 유성이 대표로 날아온다.
  - **붕괴: 스타레일**: 열차 패스 같은 티켓이 날아가고, 등급색 광선과 성운 연출이 나온다. 5성은 별도의 고유 연출 컷이 있다.
  - **우마무스메**: 문/게이트가 열리는 연출이다. 무지개가 3성 확정 텔이고, 페이크아웃 계열 승급 연출이 존재한다.
  - **명일방주**: 헤드헌팅 카드 뒤집기다. 6성은 주황/금색 섬광이 난다.
  - **NIKKE**: 금색 SSR 텔이 있다.
  - **하스스톤**: 카드 5장 위에 마우스를 올리면 등급색 글로우와 효과음이 나오고(전설=주황), 플레이어가 **직접 뒤집는 순서를 고른다**.
- **연출 5단계 문법 정리**(위 출처 종합):
  - ① **트리거 의식**: 플레이어의 물리적 입력. 당기기/찢기/스와이프 같은 동작으로 "내가 했다"는 감각을 준다.
  - ② **텔**: 색과 소리로 최고 등급 결과를 미리 알린다. 10연에서는 최고 등급 기준.
  - ③ **승급**: 낮은 색에서 높은 색으로 오른다. 드물게만 쓴다.
  - ④ **정적**: 0.3~0.8초 정도 소리가 빠지거나 낮게 웅웅거린다.
  - ⑤ **폭발**: 섬광, 등급 전용 음악, 실루엣에서 본체 공개, 이름 카드.
- **FGO 데이터가 주는 교훈**: 텔을 "가끔 확정, 가끔 침묵"으로 확률화하면, 연출을 이미 알고 있는 숙련자도 매번 긴장한다. 무조건 금색인 텔은 금방 예측된다.
- **TCG 포켓의 '금 가는 소리'**: 색보다 먼저 오는 **청각 텔**은 화면을 보지 않던 플레이어도 붙잡는다. 웹게임에서는 첫 클릭 이후 오디오가 해금되므로, 소환 버튼 클릭 자체를 오디오 언락 제스처로 쓰면 된다.
- **이 게임에 적용할 안(安)**: 사역마 소환을 '산업 공정'으로 연출한다. 예를 들어 소환로/용광로의 레버를 당긴다.
  - **텔**: 쇳물 색이다(회색 슬래그 → 주황 쇳물 → 백열 → 신수는 **청록/오방색 불꽃**).
  - **승급**: 압력계 바늘이 튀어 오르거나 경보등이 울린다.
  - **정적**: 기계가 멈추는 "탁" 소리 후 0.5초 무음.
  - **폭발**: 증기 분출과 함께 실루엣이 공개된다. 신수 전용으로 국악기(대금/꽹과리) 스팅을 쓴다.
  - **변성체**: 공개 **이후에** 2차 반짝임과 별도 효과음을 넣는다. 포켓몬 샤이니처럼 "다 끝난 줄 알았는데 한 번 더".
  - 이 안은 "기대를 쌓고 터뜨린다"는 사용자 요구와 산업 테마를 같이 충족한다.
- **스킵 옵션은 필수**다. 연출 피로를 막기 위해 첫 공개 이후 같은 사역마는 짧은 연출로 처리하고, 신규나 고등급만 풀 연출로 보여준다.

### Gaps
- 원신·스타레일·우마무스메·명일방주·NIKKE·하스스톤 연출 단계를 **1차 출처로 확인하지 못했다**. PC Gamer와 Medium(N3TWORK "Choreographed Emotion: 6 steps to a great card reveal UX")이 fetch 차단됐다. 구현 전에 영상 참고가 필요하다.
- 개발자가 직접 쓴 연출 설계 문서(GDC 강연 등)는 찾지 못했다.
- 루트박스 니어미스를 직접 다룬 실험 연구는 찾지 못했다. 니어미스 근거는 슬롯머신 연구다.

---

## Q2. 현금 없는 수집 동기: 도감, 변형, 샤이니, 싱글 게임의 가챠

### Takeaway
현금이 없으면 가챠의 동력은 **수집 완성(도감)**, **희귀 변형(샤이니)의 사냥 서사**, 그리고 **가챠 재화를 게임 진행으로 버는 루프**에서 나온다. PokeRogue는 보스 첫 격파와 일일 런으로 바우처를 지급한다. 변형 확률을 올리는 '머신 선택'과 "새 포켓몬 보장" 천장도 갖춘, 싱글 친화 가챠의 좋은 레퍼런스다.

### Cited Findings
**PokeRogue 에그 가챠**
- 알은 **에그 바우처**로 얻는다. 바우처는 클래식 모드에서 짐 리더/사천왕을 **처음 격파**할 때 Egg Voucher Plus로 받고, Daily Run에서 **50웨이브를 완료**하면 Premium Egg Voucher(10연)로 받는다 — [PokeRogue Wiki: Eggs](https://wiki.pokerogue.net/gameplay:eggs)
- 가챠 머신은 세 대다. **Move UP!**(왼쪽), **Legendary UP!**(가운데), **Shiny UP!**(오른쪽)이다. 플레이어가 무엇을 노릴지 고른다 — [PokeRogue Wiki](https://wiki.pokerogue.net/gameplay:eggs)
- 2024년 5월 팬 FAQ 기준 샤이니 확률은 기본 1/128(0.78%), Shiny UP! 머신 1/64(1.56%)다. 샤이니 안에도 단계가 있어 Common(노란 반짝임) 60%, Rare(파란 반짝임) 30%, Epic(빨간 반짝임) 10%이고, 모든 포켓몬에 다중 변형이 있지는 않다. 팬 자료라 구버전일 수 있다 — [r/pokerogue FAQ (mirror)](https://pol1.lr.ggtyler.dev/r/pokerogue/comments/1czask1/faq_and_comprehensive_guide)
- **신규 보장 천장**: 어떤 등급에서 알 9개를 연속으로 부화했는데 새 포켓몬이 없으면, 10번째 알은 그 등급의 새 포켓몬이 나오도록 강제를 시도한다 — [PokeRogue Wiki](https://wiki.pokerogue.net/gameplay:eggs)
- 에그 RNG는 시드를 없애 예측 불가로 바뀌었다(세이브 스커밍/예측 방지) — [PokeRogue release 2024-09-07](https://newreleases.io/project/github/pagefaultgames/pokerogue/release/2024-09-07-egg-summary)

**샤이니 헌팅 동기**
- 본가 포켓몬의 샤이니 확률은 여러 세대 동안 **1/8192**였다 — [TechRaptor](https://techraptor.net/gaming/features/why-do-people-hunt-for-shiny-pokemon) 외. 참고: [Bulbapedia: Shiny Pokémon](https://bulbapedia.bulbagarden.net/wiki/Shiny_Pok%C3%A9mon)
- 동기는 여러 갈래다.
  - **개인적 의미**: "해킹 샤이니와 몇 달 사냥한 샤이니는 똑같아 보이지만, 그 차이는 내 추억과 노력이다"
  - **아드레날린**
  - **샤이니 도감 완성**
  - **과시와 거래 가치**
  - **반복 작업에서의 기분 전환**
  - **최애에 대한 애착**: 샤이니 라프라스가 채널 마스코트가 된 사례
  - 출처 — [TechRaptor](https://techraptor.net/gaming/features/why-do-people-hunt-for-shiny-pokemon); [Super Jump](https://superjumpmagazine.com/why-people-hunt-shiny-pokemon); [PokéBase](https://pokemondb.net/pokebase/245961/why-do-people-shiny-hunt)
- "Shiny Bidoof is literally a normal Bidoof but a tiny bit lighter". 색 차이가 미미한 샤이니도 있다는 점이 오히려 밈이 된다 — [Game Developer](https://www.gamedeveloper.com/design/shiny-bidoof-is-literally-a-normal-bidoof-but-a-tiny-bit-lighter)

**무과금 재화 공급 규모(참고)**
- NIKKE 3.5주년 업데이트는 160회 이상의 무료 모집과 플레이로 얻는 SSR을 제공했다 — [Inven Global](https://labs.invenglobal.com/articles/21221/anis-star-and-tt-star-return-in-goddess-of-victory-nikke-35th-anniversary-update)
- 블루 아카이브 5주년에는 200회 무료 모집 이벤트가 있었다 — [Playday](https://playday.one/2026/11/11/blue-archive-5th-anniversary-update-kicks-off-200-free-recruitments/?currency=USD)

### Inferences
- **변성체 설계**: PokeRogue처럼 **변성체 안에도 등급**(예: 녹슨 변성 / 도금 변성 / 순금·결정 변성)을 둔다. 변성체는 **능력치 차이 없이 외형·이펙트·도감 칸**만 다르게 한다. 그래야 "강해지려고 강박적으로 뽑는" 루프 없이 수집 욕구만 남는다. "약간 밝아진 비도래" 밈처럼, 개그 사역마의 변성체는 **일부러 애매한 변화**(예: 용접 도롱뇽의 마스크만 형광 핑크)도 웃음 포인트가 된다.
- **'머신 선택형' 배너**: 신수 UP / 변성 UP / 신규 UP를 둔다. 현금 없이 플레이어가 노림수를 정하는 전략적 선택을 주고, '픽업'의 긴장감도 재현한다.
- **"신규 보장" 천장**(PokeRogue식)은 도감 완성 동기와 곧바로 맞물린다. 중복만 계속 나오는 좌절을 차단하는 장치다.
- **재화 획득처**는 진행 이정표(첫 격파, 자격증 시험 합격 등 게임 내 '기능사' 테마), 일일·주간 도전, 도감 등록 보상에 둔다. 도감을 채울수록 재화가 들어오는 선순환이 된다.
- **[사전지식·미검증]** 몬스터헌터 호석(護石)은 강화 재료 RNG지만 "언젠가 신호석" 서사로 장기 동기를 만든다. 이번 세션에서 출처는 확보하지 못했다.
- **소유 확인 의식**: TCG 포켓의 "스와이프로 도감 등록"처럼 손으로 하는 짧은 확정 동작이 수집감을 강화한다. 사역마를 '사역마 장부/자격증 서류'에 도장 찍는 연출로 바꾸면 산업·관료 테마와 맞는다.

### Gaps
- PokeRogue의 비수익(무과금) 정책은 이번 검색으로 확인하지 못했다. 팬 게임이라 무과금으로 알려져 있으나 출처는 미확보다.
- 오프라인/싱글 상용 게임 중 가챠를 넣은 사례(예: 원신풍 싱글 게임)에 대한 체계적 자료는 찾지 못했다.
- 몬스터헌터 호석 RNG 관련 출처는 미확보다.

---

## Q3. 한국 커뮤니티 인식: 천장, 확정·반천장, 픽뚫, 돌파·명함·풀돌, 중복 보상

### Takeaway
한국 유저 사이에서는 **"하드 천장 + 반천장(50/50) + 확정 승계"**가 사실상 표준 기대치다(원신·스타레일·ZZZ 90뽑, 명조 80뽑). 분노는 **픽뚫이 연속될 때** 폭발한다. HoYoverse는 연속 픽뚫을 완화하는 'Capturing Radiance'를 도입했다. 돌파 쪽에서는 **명함과 풀돌의 격차**, **풀돌에 필요한 장수가 불명확하거나 과도한 점**, **중복 보상이 랜덤인 점**이 불만 포인트다. 반대로 "무료 재화로 풀돌이 가능해졌다"는 반응은 호의적이다.

### Cited Findings
**천장 표준 수치**
- 원신/붕괴: 스타레일/ZZZ는 최고 등급 0.6%, **74뽑부터 소프트 천장, 90뽑 하드 천장**에 **50/50 반천장과 확정 승계**를 쓴다. 명조는 0.8%, 65뽑 소프트, 80뽑 하드다 — [mimmi.co.kr 서브컬처 가챠 천장 계산기](https://mimmi.co.kr/%EA%B0%80%EC%B1%A0-%EC%B2%9C%EC%9E%A5-%EA%B3%84%EC%82%B0%EA%B8%B0/). 단, "소프트 천장"은 유저가 만든 용어이고 HoYoverse는 수치를 공식 발표하지 않았다 — [timesaver.gg](https://timesaver.gg/blog/genshin-pity-system-explained)
- **확정 천장(하드 천장)**: 픽뚫 이후 다음 최고 등급은 100% 픽업으로 확정된다 — [mimmi.co.kr](https://mimmi.co.kr/%EA%B0%80%EC%B1%A0-%EC%B2%9C%EC%9E%A5-%EA%B3%84%EC%82%B0%EA%B8%B0/); [miniwebtool](https://miniwebtool.com/ko/%EA%B0%80%EC%B1%A0-%EC%B2%9C%EC%9E%A5-%EA%B3%84%EC%82%B0%EA%B8%B0/)
- 블루 아카이브는 200 모집 포인트로 픽업 교환이 가능하다(교환형 천장) — [Gfinity](https://www.gfinity.net/blue-archive/banner/)

**픽뚫과 연속 손실**
- 다모앙 글에서는 반천장 이후 픽뚫이 연속되자 작성자가 확률 불만을 표하며 접을 생각을 밝혔다 — [damoang.net](https://damoang.net/socialgame/12196)
- 클리앙에는 픽뚫 한 번이 커뮤니티 분위기를 크게 달군다는 글이 있다 — [clien.net](https://www.clien.net/service/board/cm_werule/19015287)
- 리버스: 1999 디시 갤러리 글은 **이중 픽업**이 확률을 나눠 원하는 캐릭터를 노리기 어렵게 만든다며 "쓰레기 픽업"이라고 비판했다 — [DC Inside reverse1999 갤](https://gall.dcinside.com/m/reverse1999/299590)
- 브런치 칼럼("확률이 재미가 되거나 분노가 되는 이유")은 비슷한 확률도 재미와 분노로 반응이 갈린다고 분석한다. 우마무스메에서 천장 직전에 뽑은 경험은 안도와 만족으로 이어진다는 사례도 든다 — [brunch @bgm/284](https://brunch.co.kr/@bgm/284) (**본문 fetch 차단**, 검색 요약 기반)
- **원신 Capturing Radiance(2024년 8월 도입)**: 연속 50/50 손실 뒤 픽업을 끌어오는 보정 장치다. 공식 설명은 "기존 소프트/하드 천장을 바꾸지 않는다"는 것이다. 정확한 확률은 미공개이고, 커뮤니티 추정끼리도 충돌한다. 한 가이드는 3연속 손실 전에 보장된다고 하고, 다른 가이드는 4연속 손실을 막고 두 번째 손실 뒤 55/45라고 한다 — [r/Genshin_Impact 분석 (mirror)](https://cal1.lr.ggtyler.dev/r/Genshin_Impact/comments/1eu3hbs/how_capturing_radiance_actually_works_its); [buffget](https://buffget.com/news/genshin-impact-60-capturing-radiance-5050-guide); 상충: [bittopup](https://news.bittopup.com/news/capturing-radiance-50-50-22.5-double-loss-explained). 커뮤니티는 "손실이 쌓이면 승리로 간다"는 데는 대체로 수용적이다.

**돌파·명함·풀돌**
- '명함'은 돌파가 거의 없는 상태(1장 보유), '풀돌'은 최대 돌파를 뜻한다. 원신 커뮤니티 글에서 6돌, 5돌… '명함'으로 보유 현황을 나열한 사례가 있다 — [damoang.net](https://damoang.net/socialgame/9801)
- 아우터플레인 커뮤니티에는 3성→6성에 필요한 중복 장수 질문이 있었다. 3장 뽑고 "멘탈이 흔들렸다"는 반응도 있었다. 다른 답변은 이벤트 통상 뽑기권이 많이 풀려 과거 과금 캐릭터도 **조각으로 무료 풀돌**이 가능해졌다고 했다. 2026년 7월에는 "풀돌에 명함 포함 몇 장인지 정리가 안 돼 헷갈린다"는 질문에 "명함 포함 7장"이라는 답변이 달렸다 — [arca.live outerplane 157407468](https://arca.live/b/outerplane/157407468); [arca.live outerplane 177143355](https://arca.live/b/outerplane/177143355) (**arca.live fetch 차단**, 검색 스니펫 기반)
- 인벤에는 명조 캐릭터의 돌파 단계별(2돌/3돌/풀돌) 효율을 정리한 글이 있다. 단계별 효율 비교가 커뮤니티의 중요한 판단 기준이라는 뜻이다 — [inven.co.kr](https://www.inven.co.kr/board/party/6553/182)
- 붕괴: 스타레일의 '상시 캐릭터 풀돌 시 교환권' 루머(교환권 2장으로 한정캐 교환)에 원신 유저들은 "4년 된 게임보다 붕스를 먼저 챙긴다"고 반발했다. **중복 초과분의 보상**이 형평성 이슈가 된다는 뜻이다 — [damoang.net](https://damoang.net/socialgame/13940); 해외 반응: [Push Square](https://www.pushsquare.com/news/2024/03/genshin-impact-and-honkai-star-rail-fans-are-at-war)
- 에픽세븐 공식 커뮤니티에서는 중복 보유가 막히고 중복 시 상점 재화가 **확률적으로** 주어져 불만이 나왔다. 중복 보상이 예측 불가능하면 불만이 생긴다 — [STOVE Epic Seven](https://page.onstove.com/epicseven/global/view/12898014)
- 무료로 최상위 전투력을 얻을 수는 있지만 그렇게 하도록 **강한 압박**을 느낀다는 역설(Duet Night Abyss 분석) — [blog analysis](https://gq-game-mods.blogspot.com/2026/02/dna-unlimited-grind-gacha-expectations.html)
- **'꽝카드'**: 성능이 낮고 확률은 높아 원하는 카드를 방해하는 카드다. 다만 밈이 되면 부정적 이미지가 덜 생긴다 — [thewiki.kr 꽝카드](https://thewiki.kr/w/꽝카드)

**규제·현금 맥락(이 게임과는 무관, 참고)**
- 미국 FTC가 HoYoverse에 2000만 달러 제재를 내리고 비용·확률 표시 변경을 명령했다. 캐릭터 1명에 최대 약 475달러가 들 수 있음이 공개됐다 — [GamesRadar](https://www.gamesradar.com/games/open-world/thanks-to-the-ftc-genshin-impact-has-to-say-the-quiet-part-out-loud-obtaining-a-single-character-can-cost-up-to-usd475)

### Inferences
- **공정하다고 느끼는 요소**: (1) 공개된 확률과 천장, (2) 천장 카운트의 배너 간 **승계**, (3) 픽뚫 후 확정, (4) 연속 손실 보정(Capturing Radiance류), (5) 교환형 천장(블아 200포인트)처럼 **"결국 내가 고를 수 있다"는 탈출구**, (6) 중복이 **확정적이고 쓸모 있는** 재화로 변환되는 것.
- **약탈적이라고 느끼는 요소**: 이중 픽업으로 확률이 쪼개지는 것, 랜덤한 중복 보상, 풀돌 장수 불명확, 명함과 풀돌의 극단적 성능 격차, 연속 픽뚫.
- **이 게임 권장안**(현금 없음 전제라 관대하게):
  - 최고 등급(신수) 하드 천장은 **50~80회**. 진행 속도에 맞춰 조정한다.
  - 천장 카운터를 **UI에 항상 표시**한다.
  - 50/50을 쓴다면 픽뚫 후 확정에 연속 손실 보정까지 넣거나, **아예 50/50을 없애고 교환형 천장**(소환 1회당 '계약 도장' 1개, N개 모이면 원하는 신수와 교환)을 둔다.
  - 개그 사역마 '꽝'은 **밈화**한다. 꽝카드 문서가 말하듯 밈이 되면 미움받지 않는다. 배터리 장어가 나올 때마다 "또 너냐" 대사를 넣는 식이다.
- 현금이 없으면 픽뚫의 실질 피해는 '시간'뿐이다. 그래도 **연속 불운은 이탈을 부른다**(다모앙 사례). 연속 손실 보정은 무과금이어도 넣는 게 좋다.

### Gaps
- **디시인사이드·루리웹·인벤·아카라이브 본문은 직접 읽지 못했다.** arca.live, brunch.co.kr은 fetch가 차단됐고, 지침상 이후 커뮤니티 사이트 fetch 시도를 중단했다. 인용은 검색 스니펫 수준이고, 정량적 여론(추천 수, 다수 의견)은 확인하지 못했다.
- 루리웹 관련 스레드는 검색 결과에서 찾지 못했다.
- 국내 확률형 아이템 정보공개 의무화(2024년 시행) 관련 출처는 이번 세션에서 확보하지 못했다. 이 게임은 현금이 없으므로 직접 관련은 낮다.
- '성혼'(스타레일 돌파 용어)의 공식 정의 출처는 미확보다.

---

## Q4. 파워크립 피로 없이 기분 좋은 등급·돌파 체계

### Takeaway
업계 표준은 "명함 + 최대 6회 돌파(총 7장)"다. 아우터플레인 커뮤니티 답변 "명함 포함 7장"과 원신 운명의 자리 0~6이 그 예다. 그러나 명함과 풀돌의 격차가 크면 "풀돌 강요" 압박이 생긴다. 현금 없는 싱글 게임에서는 **돌파 횟수를 줄이고(예: 명함 + 3~4회)**, **돌파는 스탯 폭증 대신 '새 동작·외형·편의'를 해금**하게 하며, **중복 초과분은 확정 재화로 변환**하는 것이 합리적이다.

### Cited Findings
- 풀돌에 필요한 장수가 "명함 포함 7장"인데도 정리가 되지 않아 혼란스럽다는 유저 질문이 있었다 — [arca.live outerplane](https://arca.live/b/outerplane/177143355) (스니펫)
- 무료 뽑기권과 조각 지급이 늘자 "과거 과금 캐릭터도 무료 풀돌 가능"이라는 반응이 나왔고, 개발진이 밸런스 조정을 언급했다 — [arca.live outerplane](https://arca.live/b/outerplane/157407468) (스니펫)
- 커뮤니티는 돌파 단계별 효율(2돌/3돌/풀돌)을 따로 정리할 만큼 중시한다 — [inven.co.kr](https://www.inven.co.kr/board/party/6553/182)
- "무료로 얻을 수는 있으나 강한 압박을 느낀다"는 그라인드의 역설 — [blog analysis](https://gq-game-mods.blogspot.com/2026/02/dna-unlimited-grind-gacha-expectations.html)
- 중복 보상이 확률적이면 불만이 생긴다 — [STOVE Epic Seven](https://page.onstove.com/epicseven/global/view/12898014)
- PokeRogue의 알 등급과 '신규 보장'은 등급별 풀 안에서 중복 피로를 완화하는 장치다 — [PokeRogue Wiki](https://wiki.pokerogue.net/gameplay:eggs)
- 한계돌파는 중복 당첨을 소비처로 만드는 구조이고, 과금 구조와 맞물린다는 분석 — [ppss.kr](https://ppss.kr/archives/174711)

### Inferences
- **"가챠 레벨" 게이팅 금지(사용자 요구)**: 신수를 포함한 전 등급이 **첫 소환부터** 확률상 등장해야 한다. 플레이어 레벨이나 진행에 따라 풀을 해금하지 않는다. 진행에 따른 보상은 **재화 획득량 증가**나 **배너 종류 추가**로 주고, 풀 자체를 잠그지 않는다. PokeRogue처럼 첫 보스 격파는 '바우처를 더 주는 이벤트'일 뿐 풀 해금이 아니다.
- **권장 등급 구조**(예시):
  - 일반(산업 잡역 사역마)
  - 숙련(특수 공정)
  - 명장(희귀)
  - 신수(최상위)
  - 변성체 플래그: 등급과 **직교**하는 별도 축이다. 신수 변성체 같은 이중 잭팟이 가능해진다.
- **돌파 권장**: 명함 + 3~4회(총 4~5장). 각 돌파는 스탯 +α보다 다음 중 하나를 준다.
  1. 새 작업 동작/스킬(예: 용접 도롱뇽 2돌 → 불꽃 절단)
  2. 외형 변화(작업복 → 숙련공 장비)
  3. 편의(작업 속도, 자동화 슬롯)
  - 풀돌에는 **도감 금테두리와 칭호**를 붙인다.
  - **명함만으로도 고유 기믹이 완성되게** 해서 명함 박탈감을 막는다.
- **중복 초과(풀돌 이후)**는 '부품/코어' 같은 **확정 재화**로 바꾼다. 이 재화로 교환형 천장이나 원하는 사역마 돌파에 쓴다. 랜덤 변환은 금지(에픽세븐 불만 사례).
- **파워크립 회피**: 싱글 게임은 새 배너 경쟁이 필요 없으니, 신수도 '압도적 DPS'보다 **판도를 바꾸는 독특한 능력**으로 차별화한다. 예: 불가사리 = 고철을 먹고 성장, 해태 = 불량품 판별/정화. 일반 사역마도 특정 공정에서 최적이 되도록 **용도 분화**한다. 그래야 일반 등급도 쓸모가 있다.

### Gaps
- 돌파 횟수와 만족도의 관계를 정량적으로 다룬 연구는 찾지 못했다.
- "새 스킬 vs 스탯" 돌파 보상 선호를 다룬 체계적 조사(설문 등)는 찾지 못했다. 위 권장안은 추론이다.

---

## Q5. 기억에 남는 크리처 로스터: 실루엣, 개념 유머, 한국 신화

### Takeaway
포켓몬 디자인의 핵심은 **"멋짐보다 기억에 남음"**과 **"의도적 불완전함"**이다. 너무 멋지면 덜어내고, 너무 진지하면 우스운 요소를 더한다. 검은 실루엣만으로 알아볼 수 있어야 하고, 작은 크기에서도 읽혀야 한다. 한국 신화 크리처는 게임에서 아직 덜 쓰인 소재다. 불가사리(쇠를 먹고 자람)는 산업 테마와 직결된다.

### Cited Findings
**포켓몬 디자인 원칙**
- 스기모리 켄: 너무 멋진 포켓몬에는 **멋없는 요소를 더하고**, 너무 진지한 포켓몬에는 **명랑한 요소를 더한다** — [Siliconera](https://www.siliconera.com/pokmon-designer-on-balancing-cool-or-cute-pokmon-by-adding-uncool-or-uncute-features/); [Nintendo Everything](https://nintendoeverything.com/ken-sugimori-on-balancing-pokemon-designs/)
- "너무 멋진 디자인에서 덜어내라." 렌트라를 더 날카롭게 만들지 않은 예가 있고, **기억에 남는 디자인이 '멋진' 디자인을 이긴다** — [Destructoid](https://destructoid.com/pokemons-art-director-talks-how-memorable-designs-trump-cool-ones); [Nintendo Life](https://www.nintendolife.com/news/2018/07/ken_sugimori_wants_pokemon_designs_to_be_as_memorable_as_possible)
- 너무 귀여운 캐릭터에는 의도적 결함을, 너무 진지한 캐릭터에는 긴장을 푸는 요소를 넣는다("불완전함의 미학") — [SoraNews24](https://soranews24.com/2018/08/03/is-the-beauty-of-imperfection-the-secret-behind-the-popularity-of-pokemon-character-designs/)
- 실루엣 테스트: 검게 칠해도 즉시 알아볼 수 있어야 한다(피카츄의 귀와 꼬리). 고라파덕은 불완전함의 예다 — [Creative Bloq](https://www.creativebloq.com/art/digital-art/what-artists-can-learn-from-30-years-of-pokemon-character-design)
- 1세대는 "구별될 만큼의 디테일"과 "스프라이트 크기에서의 가독성" 사이에서 균형을 잡아야 했다 — [Game Developer: Evolution of Pokemon Designs Gen 1](https://www.gamedeveloper.com/design/evolution-of-pokemon-designs-gen-1)
- 게임프리크의 크리처 디자인 과정 — [Game Informer](https://gameinformer.com/b/features/archive/2017/08/10/heres-how-game-freak-designs-pokemon-creatures) (본문 미확인)

**한국 신화 크리처**
- **불가사리**: 쇠를 먹고 자라는 신화 생물이다. 곰·코끼리·코뿔소·호랑이·소 등이 섞인 형상이고, 전승에 따라 승려가 밥알로 빚은 형상에 바늘을 먹여 탄생했다. 쇠를 먹을수록 커지며 불에도 잘 죽지 않는다 — [Wikipedia: Pulgasari (creature)](https://Www.Wikipedia.org/wiki/Bulgasari_(creature))
- **해태**: 「해태: 가디언즈」(조선 배경 탑뷰 액션)에서 해태의 능력은 **정화**다 — [STOVE store](https://store.onstove.com/en/games/2415). MMORPG 캐릭터 재해석 연구에서는 사자 형상에 물고기 비늘 같은 피부, 기린 같은 두 뿔로 묘사된다 — [KoreaScience](https://koreascience.kr/article/CFKO201328660926804.pdf)
- 한국 게임 몬스터는 대부분 **반인반수·이종 결합형**이다. 애니메이션·영화·게임의 몬스터 캐릭터는 중국·서양 소재에 의존하는 경향이 있어 한국 신화 활용의 필요성이 제기된다 — [KoreaScience](https://koreascience.kr/article/CFKO201014258943975.pdf)
- 동아시아 신화 생물을 RPG 판타지 캐릭터로 재창조한 연구 — [RIT Digital Archive](https://digitalarchive.rit.edu/xmlui/handle/1850/16945)
- '꽝카드'도 밈이 되면 미움받지 않는다. 개그 사역마 전략의 근거 — [thewiki.kr 꽝카드](https://thewiki.kr/w/꽝카드)

### Inferences
- **개그 산업 사역마 공식**: [동물/요괴] × [산업 공정] × [하나의 과장된 불완전함]. 스기모리의 '반대 요소 더하기'를 적용한 것이다.
  - 용접 도롱뇽은 용접 마스크가 머리보다 크다.
  - 배터리 장어는 꼬리에 +/− 단자가 있고, 방전되면 축 늘어진다.
  - 실루엣 하나만으로 공정을 읽을 수 있어야 한다(마스크, 단자, 컨베이어 다리 등 **도구가 실루엣의 핵심**).
- **신수**도 '너무 멋지면 덜어낸다'. 예를 들어 불가사리는 위압적이지만 너트·볼트를 우물거리는 볼이 있다. 해태는 위엄 있지만 품질검사 도장을 이마 뿔에 꽂고 있다. 삼족오는 세 번째 발로 공구를 쥐고 있다. 구미호는 꼬리 아홉 개가 각각 다른 작업 도구다. 이렇게 하면 "과하게 예쁜 AI풍 그림"을 피하고(사용자 비선호) 캐릭터성을 만든다.
- **불가사리는 산업 테마와 신화가 완벽히 맞물린다**(쇠를 먹고 성장). 성장형 신수로 설계하면 좋다. 돌파 대신 '먹인 고철량'으로 외형이 커지는 식이다.
- **AI풍 회피**: 제한 팔레트, 굵은 외곽선, 판화나 오방색 같은 민화 질감, 의도적 비대칭. 이는 실루엣과 가독성 원칙과도 맞는다. 이 항목은 추론이다.

### Gaps
- 삼족오·구미호의 게임 내 디자인 사례 출처는 이번 세션에서 확보하지 못했다.
- "과하게 예쁜 AI 아트" 비선호에 대한 커뮤니티 정서 출처는 조사 범위 밖이라 미확보다.
- Game Informer, Creative Bloq 등 본문은 fetch 차단 우려로 직접 확인하지 못했다(스니펫 기반).
