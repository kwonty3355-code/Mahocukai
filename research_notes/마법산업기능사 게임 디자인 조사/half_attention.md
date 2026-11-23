# 반반 라이브(Half-Attention) 모드 조사: 포켓로그 도주런과 세컨드 스크린 게임 루프

> 조사 환경 메모 (차단된 사이트): 이 세션에서는 **WebFetch가 시도한 모든 호스트에서 DNS 실패(ENOTFOUND)** 가 났다. 원문을 열지 못한 곳: `namu.moe`(나무위키 미러), `wiki.pokerogue.net`(공식 위키), `pol1.lr.ggtyler.dev`(r/pokerogue 미러), `www.fmkorea.com`, `gall.dcinside.com`(포켓로그 마이너 갤러리), `khousewares.co.kr`(공략 블로그). `arca.live`와 `bbs.ruliweb.com`은 검색 결과 제목만 확인했고 열어보지는 않았다. 따라서 아래 인용은 **검색엔진 스니펫과 요약에 기반한 것**이며, 원문 대조는 하지 못했다. 이 사이트들을 쓰려면 세션 네트워크 설정에서 허용해야 한다. 포켓로그 수치(확률, 웨이브 등)는 2024~2025년 커뮤니티 글 기준이므로 현재 패치와 다를 수 있다.

---

## Q1. 포켓로그 "도주런"이란 무엇이고, 왜 하며, 커뮤니티는 어떻게 보는가

### Takeaway
도주런은 **무한(Endless) 모드에서 "스펙을 다 갖춘 뒤", 도주(Run Away) 특성 포켓몬으로 야생 배틀을 계속 도망쳐 웨이브를 넘기며 이로치(색違い)·전설이 뜰 때까지 인카운터를 "넘겨보는" 파밍 방식**이다. 목적은 "잡는 행위"가 아니라 **메타 진행(알 바우처, 사탕, 이로치를 통한 행운(Luck) 상승, 스타터 해금)으로 다음 판의 팀을 강화하는 것**이다. 반복이 단조로워서 "틀어놓고 보기 좋은" 콘텐츠로도 소비된다. 이는 사용자의 가설("누르다가 → 슬쩍 보고 → '아니네' → 다른 걸 보는 리듬"으로 "내 팀을 채워 나가는 것")과 잘 맞는다.

### Cited Findings
**정의와 셋업**
- 커뮤니티 요약: 스펙 높은 초전설 "원툴"에 이로치를 데려가 행운을 높이고, **도주 특성 포켓몬으로 이로치가 뜰 때까지 도주**하는 것이 기본 공략이다. — [에펨코리아 "무한도주런 셋팅방법(매우간단)"](https://www.fmkorea.com/7141916670) (원문 차단, 검색 요약), [에펨코리아 "(장문)포케로그 뉴비들한테 알려주는 정보부터 무한모드하는이유까지"](https://www.fmkorea.com/7140801552) (원문 차단)
- 도주 특성 후보 예시: 지그제구리, 콜로솔트, 도롱마담, 데스니칸, 팬텀 등. **일반 바이옴은 도주할 수 있지만 보스전은 도주할 수 없다.** 보스전은 씨뿌리기, 저주, 소금절이, 물붓기 등으로 버티고 특성은 옹골참으로 맞추라는 조언. — [나르키소스 블로그 "포켓로그 무한 모드 도주런 공략"](https://khousewares.co.kr/%ED%8F%AC%EC%BC%93%EB%A1%9C%EA%B7%B8-%EB%AC%B4%ED%95%9C-%EB%AA%A8%EB%93%9C-%EB%8F%84%EC%A3%BC%EB%9F%B0-%EA%B3%B5%EB%9E%B5/) (원문 차단, 검색 요약)
- "도주 특성은 마지막에 맞추고, 이로치 포켓몬이면 좋다." 또도가스(Neutralizing Gas)를 만나면 특성이 지워질 수 있다는 주의. — [DC 포켓로그 마이너 갤러리 "(초보)무한모드 지금 막 시작하려는 사람한테 팁"](https://gall.dcinside.com/mgallery/board/view/?id=pokerogue&no=80341) (원문 차단, 검색 요약)
- 영어권 가이드도 같은 구조다. 팀이 갖춰지면 Run Away(가능하면 패시브) 포켓몬으로 바꾸고, Paradox 웨이브와 Neutralizing Gas를 빼면 거의 모든 야생 배틀에서 도주할 수 있다. 당시 최고의 러너는 Teddiursa(깜지곰)였다. 1000~2000 웨이브 즈음부터 달리기를 권하며, X0 웨이브는 phaze가 안 돼 더 어렵다. — [PokeRogue Endless Guide (zi-cong-tan, GitHub Pages)](https://zi-cong-tan.github.io/PokeRogue-Endless-Guide/)
- 무한 모드 종점은 **5850 웨이브**다. — [PokeRogue Endless Guide](https://zi-cong-tan.github.io/PokeRogue-Endless-Guide/); YouTube 공략 목차에도 "포켓로그 무한모드 5850층"이 나온다. — [YouTube "무조건 이해 가능! 도주런, 풀어서 설명해드립니다"](https://www.youtube.com/watch?v=vfFklAImSfM)
- 한계: 웨이브를 많이 달리면 "아무 이로치"에는 유리하지만 **특정 종을 마음대로 띄울 수는 없다.** 특정 종은 Classic에서 사탕을 모으는 편을 권한다. — [DexBattler PokéRogue Shiny Farming Guide](https://dexbattler.com/pokerogue-shiny-farming)
- 현실적인 어려움: 배틀 없이 도주만 하면 레벨업과 돈 모으기가 어려워 중도에 포기하는 사람도 있다는 후기. — [아카라이브 포켓몬스터 채널 "포케로그) 무한모드는 어케하는거임"](https://arca.live/b/pokemon/109386153) / 위 커뮤니티 글들의 검색 요약 (원문 미확인)

**도주런을 떠받치는 메타 시스템 (확률은 공식 위키와 Reddit FAQ 기준, 2024)**
- 알 가챠 머신은 3종이다. Move UP!(알 기술), Legendary UP!(특정 전설), Shiny UP!(이로치). — [PokéRogue Wiki: Eggs](https://wiki.pokerogue.net/gameplay:eggs) (원문 차단, 검색 요약)
- 알 이로치 확률은 기본 1/128(0.78%), Shiny UP! 머신은 1/64. — [PokéRogue Wiki: Eggs](https://wiki.pokerogue.net/gameplay:eggs); [r/pokerogue FAQ and Comprehensive Guide (2024-05)](https://pol1.lr.ggtyler.dev/r/pokerogue/comments/1czask1/faq_and_comprehensive_guide)
- Shiny Charm은 **런 안의 야생 포켓몬에만** 적용되고 가챠 알에는 적용되지 않는다. — [PokéRogue Wiki FAQ](https://wiki.pokerogue.net/gameplay:faq)
- **행운(Luck):** 파티의 이로치 하나마다 등급별로 가산된다(Common +1, Rare +2, Epic +3). 행운은 웨이브 종료 시 상점 아이템의 tier-up 확률도 올린다. — [PokéRogue Wiki FAQ](https://wiki.pokerogue.net/gameplay:faq) (검색 요약). 한국 커뮤니티 표현으로는 "럭 수치가 높을수록 전설이나 이로치가 뜰 확률이 올라가고, 낮으면 전설을 잡기 어렵다." — 위 에펨코리아·DC 글 검색 요약
- **사탕:** 포획 +1, 부화 +2. 이로치는 배수가 붙는다(Common x5, Rare x10, Epic x20). — [PokéRogue Wiki FAQ](https://wiki.pokerogue.net/gameplay:faq)
- 무한 모드는 알 바우처가 꾸준히 나오는 곳이고, Daily Run을 완주하면 Premium 바우처(10x 알)를 준다. Classic과 Daily는 무한보다 적은 처치 수로 사탕을 준다. — 같은 출처 묶음(공식 위키, Reddit FAQ의 검색 요약)
- 무한 모드에서 Shiny Charm을 최대로 쌓으면 이로치 확률이 1/64까지 올라간다는 주장이 있다(위키 페이지 기준 약 786일 전 내용). 다른 가이드는 일반 야생 기본 확률을 1/1024로 적는다. — [PokéRogue Wiki: Modes](https://wiki.pokerogue.net/gameplay:modes); [DexBattler](https://dexbattler.com/pokerogue-shiny-farming). 두 수치는 버전과 조건이 다르므로 그대로 비교하면 안 된다.
- ??? 바이옴과 보스 바이옴은 이로치가 잠겨 있다는 주장. — [DexBattler](https://dexbattler.com/pokerogue-shiny-farming) (단일 출처)
- 시스템 특성: 배틀 중 확률과 변수는 "고정값"으로 계산되고, 전멸하면 배틀 시작 시점으로 되돌아가 재시도할 수 있다. — [나무위키 PokéRogue](https://namu.moe/w/Pok%C3%A9Rogue) (원문 차단, 검색 요약)

**"틀어놓기"로서의 도주런 (반쯤 보는 콘텐츠라는 증거)**
- 무편집 풀영상으로 소비된다. "1251~3000층, 무편집 풀영상"이 있고, 업로더는 "5850층까지의 도주런 양상은 대동소이하다"며 구간을 나눠 올린다. — [YouTube "포케로그 무한모드 - 도주런 실전 1251~3000층, 무편집 풀영상"](https://www.youtube.com/watch?v=DUrrBSlLNZ4)
- 영상 제목: "**잔잔하게 틀어놓기 좋...을 지도 모르는** 포케로그 무한모드 - 도주런 (완)". — [YouTube](https://www.youtube.com/watch?v=Nv6ujlqpX5g)
- "포켓로그 도주런이 뭐길래 다들 하는걸까?" 같은 설명 영상이 따로 있을 만큼 현상 자체가 화제였다. — [YouTube](https://www.youtube.com/watch?v=Q-ZTygoljvU)
- "1층부터 시작하는 도주런 방법! **알 뽑기권 쓸어담기**… 레전더리 알에서 지가르데?!" 영상 제목을 보면 보상의 핵심은 알 바우처(=가챠 재료)다. — [YouTube](https://www.youtube.com/watch?v=TA9o_-QoMaQ)
- 루리웹에 "포켓로그무한모드 등반 끝" 후기가 있다(원문 미확인). — [루리웹](https://bbs.ruliweb.com/community/board/300143/read/66586867)

### Inferences
- 도주런의 "재미 단위"는 **(1) 스캔:** 인카운터가 뜬다 → **(2) 판정:** 이로치/전설인가, 0.5초 안에 판정 → **(3) 기각:** 도주 → 반복. 판정 기준이 **시각적으로 극단적**(이로치 반짝임과 색 차이, 전설 실루엣)이어서 화면을 계속 보지 않아도 된다. 바로 이 점이 "반반"을 가능하게 한다.
- 진짜 보상은 포획 그 자체보다 **메타 루프로의 환원**(이로치 → 행운↑ → 상점 tier-up↑ / 사탕 x5~x20 → 스타터 코스트 감소와 패시브 / 알 바우처 → 가챠 → 새 스타터)이다. 사용자 가설("잡는 게 아니라 팀을 채우는 것")과 일치한다. 이로치가 행운을 올리고, 행운이 다시 이로치와 전설 확률을 올리는 **자기강화 루프**도 있다.
- 도주런의 **준비 단계(최강 원툴, 도주 특성 배치, 보스전 대비 기술)는 고밀도 빌드 퍼즐**이고, 실제 달리기는 저밀도다. 즉 "한 번 깊게 설계 → 오래 얕게 수확"하는 2단 구조다. 이것을 마법진 설계 게임에 그대로 옮길 수 있다.
- 보스 웨이브(도주 불가)는 **강제 주의 복귀 포인트**로 작동한다. 반반 모드에도 "여기서는 봐야 한다"는 주기적 체크포인트를 설계하면 리듬이 생긴다.
- 약점: 도주만 하면 레벨과 돈이 막히는 "준비 부족 시 붕괴"(위 후기), 그리고 특정 종을 노릴 수 없는 비지향성. 우리 모드는 **"필요한 부품을 지향해서 찾는 필터와 타깃"** 을 넣어 이 약점을 정체성으로 바꿀 수 있다.

### Gaps
- DC 포켓로그 갤러리, 아카라이브 포켓로그 채널, 루리웹, r/pokerogue의 **원문 반응(재미/지루함/중독성에 대한 직접 인용)** 은 모두 원문이 차단돼 확보하지 못했다. 정성적 감정 데이터는 YouTube 제목과 검색 요약 수준에 그친다.
- 포켓로그의 게임 속도 배속, 대화 스킵 같은 "반반 편의 기능"이 정확히 어떻게 되어 있는지 출처를 찾지 못했다.
- 최신 패치 기준 이로치 확률, 행운 상한, 도주 특성 메타는 확인하지 못했다(소스는 2024~2025년 기준).

---

## Q2. 다른 반쯤 집중(세컨드 스크린, 힐끗 보기) 게임 루프들

### Takeaway
반반 플레이에 적합한 장르는 공통적으로 **(a) 무시해도 진행되거나 안전하게 멈추고, (b) 실패 상태 페널티가 약하며, (c) 멀리서도 읽히는 UI, (d) "숙련했으니 이제 안 봐도 된다"는 자동화를 해금 보상으로 준다.** 가챠의 auto와 sweep, 방치형, 서바이벌라이크, 오토배틀러 상점 리롤이 각각 이 축의 일부를 보여준다.

### Cited Findings
**방치형, 증분형(idle/incremental)**
- 학술 정의: idle game은 "일정 시간 플레이어 상호작용 없이도 진행되는 게임"이다. CHI 2018 "Playing to Wait"는 idle 게임 66개를 grounded theory로 분석해 분류 체계와 **상호작용 스펙트럼(interactivity spectrum)** 을 제시했고, idle 게임이 플레이어를 **"플레이(playing)에서 계획(planning)으로" 이동**시킨다고 논한다. — [Alharthi et al., CHI 2018, DOI 10.1145/3173574.3174195](https://doi.org/10.1145/3173574.3174195); [Monash 기록](https://research.monash.edu/en/publications/playing-to-wait-a-taxonomy-of-idle-games/). (NSF 저장소 기록은 "디자이너 6명 인터뷰"라고 적고 있어 서술이 충돌한다. [par.nsf.gov](https://par.nsf.gov/biblio/10061230))
- 세컨드 모니터용 게임의 조건: "안 보고 있어도 계속 진행되고, 한 시간 동안 무시당해도 버텨야 한다… 그래서 대부분의 게임, 특히 실패 상태가 있는 게임은 거의 다 탈락한다." — [Top Incremental Games: Best Second Monitor Games](https://www.topincrementalgames.com/guides/best-second-monitor-games)
- "벌주는 타이머가 없고, 즉시 멈추며, 당신을 기다려 준다." — [CGMagazine: Best Second-Screen Games to Play While Listening to Podcasts or Streams](https://www.cgmagonline.com/articles/best-second-screen-games-podcast/) (검색 요약 기준이며 정확한 출처 페이지는 리스트 기사 중 하나)
- 수동 플레이 게임(Melvor Idle 등)은 주의가 다른 곳에 있을 때 맞으면서도 결정에서 오는 성취감을 준다. — [lootandgrind: Mindless games to play on a second monitor](https://lootandgrind.com/mindless-games-to-play/) (리스티클)
- 이용 행태 수치: "미국인 87%가 TV를 보며 폰을 쓰고, 그 세컨드 스크린에서 게임과 앱이 1위 활동"이라는 주장(Reviews.org 2026, CivicScience 2023 인용, 원출처 미검증). — [idledistiller](https://www.idledistiller.com/best/games-to-play-while-watching-tv/)
- 게이머의 세컨드 스크린 활동 설문: YouTube 영상 39%, 채팅 31%, 시리즈와 영화 19%, 팟캐스트 7%(기고자 칼럼의 표). — [Galaxus "Second screens are ruining gaming"](https://www.galaxus.ch/en/page/second-screens-are-ruining-gaming-36447)

**가챠 auto/skip/sweep**
- "이미 마스터한 스테이지를 40번째 파밍하는 건 게임플레이가 아니라 세금이고, sweep은 그 환급이다." "사소하다고 느끼는 전투는 게임이 대신 하게 하고, 주의는 그렇지 않은 전투에 아껴라." — [hostedgg: gacha auto battle second screen culture](https://hostedgg.com/blog/gacha-auto-battle-second-screen-culture) (블로그 의견)
- 전형적인 반반 셋업: 데일리를 auto로 걸고, 폰을 모니터에 세워 두고, 다른 걸 보면서 알아서 클리어시킨다. **"auto 버튼은 트로피다. 그 콘텐츠를 너무 완벽히 풀어서 더는 거기 있을 필요가 없다는 뜻."** — 같은 출처
- 대부분의 게임은 옛 콘텐츠의 sweep과 쉬운 콘텐츠의 auto를 허용하지만, 가장 새롭고 어렵고 홍보되는 전투는 수동 플레이로 잠가 둔다. — [hostedgg: gacha QoL arms race](https://hostedgg.com/blog/gacha-quality-of-life-arms-race-culture)
- 구현 예: Reverse: 1999는 전투를 한 번 직접 클리어해야 auto를 켤 수 있고, 그 팀의 플레이를 "auto battle"로 저장한다. — [Gamezebo: Reverse 1999 auto battle](https://www.gamezebo.com/walkthroughs/reverse-1999-auto-battle/). 다른 게임은 "정직한 1회 승리" 뒤 해당 몬스터에 한해 100회 스킵을 해금한다. — [teletype.in 팬 Q&A](https://teletype.in/@theheavensgame/1KuT8KgV2eI)
- 비판: auto가 너무 빨리 보상을 주면 콘텐츠가 빨리 소진되므로 에너지 같은 제한 장치가 필요하다는 의견. — [Medium GGDigest: "Auto-Battling your Way to Victory is not a Good Design"](https://medium.com/ggdigest/auto-battling-your-way-to-victory-is-not-a-good-design-109937a1f236)

**서바이벌라이크 (Vampire Survivors)**
- "손쉬운 플레이 가능성"과 디자인 선택이 플레이어 심리를 건드려 "한 판만 더(just-one-more-go)" 공식을 증류했다는 분석. 개발자 Luca Galante의 도박 업계 경력이 연결된다. — [The Conversation: Vampire Survivors and gambling psychology](https://theconversation.com/vampire-survivors-how-developers-used-gambling-psychology-to-create-a-bafta-winning-game-203613); [PC Gamer](https://pcgamer.com/vampire-survivors-saved-its-creator-from-working-on-mobile-gambling-games)

**오토배틀러 상점 리롤**
- TFT slow roll: 이자 상한(50골드) 위의 잉여만 리롤에 쓴다("56골드면 3번 굴려 50으로"). 반대로 hyper roll은 경제를 팔아 빠른 파워 스파이크를 산다. — [TFT Ninja: Rolling Strategy](https://tft.ninja/guides/strategy/rolling-strategy); [metabot.gg](https://metabot.gg/en/TFT/guides/tft-slow-roll-vs-hyper-roll)
- "항상 명확한 목표를 갖고 굴려라." 커밋하기 전에 남은 카피 수를 센다. — [BunnyMuffins TFT Leveling Guide](https://bunnymuffins.lol/tft-leveling-guide/); [PivotTFT](https://www.pivottft.com/guides/tft-reroll-comps/)
- Super Auto Pets의 **Freeze:** 얼린 펫이나 음식은 리롤해도 상점 왼쪽 슬롯에 남는다. 패치 0.27에서 새로 추가되는 항목이 얼린 항목을 덮어쓰지 않도록 고쳤다. — [Super Auto Pets Wiki: The Basics](https://superautopets.wiki.gg/wiki/The_Basics); [Version 0.27](https://superautopets.wiki.gg/wiki/Version_0.27)
- Brotato의 Lock: 잠근 아이템은 다른 슬롯에 다시 나오지 않는다. — [Brotato Wiki: Shop](https://brotato.wiki.spellsandguns.com/Shop). Backpack Battles의 Customer Card는 리프레시할 때마다 상점 아이템 하나의 희귀도를 올린다(리롤에 누적 가치 부여). — [Backpack Battles 관련 검색 요약](https://gleetron.pages.dev/posts/what-does-the-present-do-in-backpack-battles) (출처 신뢰도 낮음)

**반례 (반쯤 보기의 위험)**
- 엔드리스 모드 비판: "같은 레벨을 계속 반복할 뿐", "가끔은 플레이라기보다 숫자 오르는 걸 구경하는 느낌". — [Steam 토론 (Gunfire Reborn 등)](https://steamcommunity.com/app/1217060/discussions/0/3823032344639424550)

### Inferences
- 반반 모드는 "idle(완전 방치)"이 아니라 Alharthi 스펙트럼의 **중간(semi-idle), 즉 저빈도 저비용 결정**이 맞다. 사용자가 원하는 "누르는 리듬"은 idle에는 없고 도주런, TFT 리롤, SAP 상점에는 있다.
- 가챠 auto의 "auto는 트로피" 원칙을 차용하자. **직접 설계하고 검증한 마법진만 반반 모드에 투입할 수 있게** 하면, 반반 모드가 본 게임(설계와 전술)의 *결과물*을 소비하는 장이 되고, 본 게임에 *재료*를 공급하는 순환이 생긴다.
- SAP의 freeze와 Brotato의 lock이 보여주듯 **"리롤하면서 일부를 붙잡아 두는" 장치**는 리롤을 순수 확률 게임에서 **조립 퍼즐**로 바꾼다. 사용자의 "부족한 것을 채운다"는 감각의 핵심 메커니즘이다.

### Gaps
- Stardew식 루틴 게임과 카드팩 개봉을 반반 맥락에서 분석한 자료는 이번에 찾지 못했다.
- YouTube를 보며 게임하는 행동에 대한 정량 연구(게임 장르별)는 찾지 못했다. Galaxus 표는 칼럼 수준이다.
- Backpack Battles의 lock 규칙은 공식 출처로 확인하지 못했다.

---

## Q3. 심리: 변동비율 강화, 저비용 반복 결정, 주의 복귀

### Takeaway
"누르고 → 확인 → 기각" 루프의 엔진은 **변동비율(VR) 강화 스케줄**이다. 이것은 강력한 지속성을 만드는 동시에 도박성 비판의 핵심이기도 하다. 반반 맥락에서는 **매 반응의 비용이 낮고**(한 번 누르기), **결과 판독이 즉각적**이며, **희귀 이벤트만 주의를 다시 끌어오는** 구조가 맞는다. 미디어 멀티태스킹은 주의력 저하와 상관관계가 있으므로 "깊은 판단"을 반반 구간에 넣으면 안 된다.

### Cited Findings
- 루트박스의 중심 메커니즘은 변동비율 강화 스케줄이고, 지출은 문제성 도박과 유의하게 연관된다. — [ResearchGate: An Overview of Gambling-Related Psychological Features of Loot Boxes](https://www.researchgate.net/publication/396700323_An_Overview_of_Gambling-Related_Psychological_Features_of_Loot_Boxes)
- Luke Clark: 일련의 반응에 보상이 예측 불가능하게 주어지는 구조이며, **현대 비디오게임은 여러 VR 스케줄을 겹쳐서 증폭한다.** 니어미스와 손실 추격도 함께 언급된다. — [PC Gamer: Behind the addictive psychology and seductive art of loot boxes](https://www.pcgamer.com/behind-the-addictive-psychology-and-seductive-art-of-loot-boxes/); [호주 상원 보고서 3장 Psychology and loot boxes](https://www.aph.gov.au/parliamentary_business/committees/senate/environment_and_communications/gamingmicro-transactions/~/media/Committees/ec_ctte/Gamingmicro-transactions/c03.pdf)
- "행동을 움직이는 것은 상품의 환금성이 아니라 변동비율 보상이다." — [onemanmmo: Random Rewards and the Machine They Borrowed Them From](https://onemanmmo.com/random-rewards-and-the-machine-they-borrowed-them-from/)
- Compulsion loop는 VR 스케줄을 더하면 강화되고, 드롭의 무작위성이 그 강도를 돕는다. — [Wikipedia: Compulsion loop](https://en.wikipedia.org/wiki/Compulsion_loop)
- 이로치 사냥의 매력은 희귀 수집물과 긴 확률을 이겼다는 만족이며, 무작위성이 희귀성 효과를 증폭한다(블로그 수준의 설명). Masuda method로도 수백~수천 개의 알이 걸린다(약 1/683, 빛나는부적 있으면 1/512). — [Ricky Spears blog](https://www.rickyspears.com/gaming/masuda-method-pokemon-scarlet-and-violet/); [Bulbapedia: Masuda method](https://bulbapedia.bulbagarden.net/wiki/Masuda_method)
- 미디어 멀티태스킹은 주의 통제력 저하, 산만함, 주의 실수와 연관된다(인과는 미확정). 반면 액션 게임 플레이는 더 나은 주의 통제와 연관된다. — [PMC8598050 review](https://pmc.ncbi.nlm.nih.gov/articles/PMC8598050/); [Science News Explores (Stanford 연구, 18~26세 80명)](https://www.snexplores.org/article/memory-multitasking-multiple-screens-attention-screentime)
- 플레이어 측 목소리(Melvor): 희귀하고 중요한 이벤트(기절, 큐 종료, 행동 중단)에만 소리를 달라. "3초마다 나오는 게 아니라, **탭을 다시 열고 싶어지는 중요한 알림**." — [Steam: Melvor Idle Sound Effects discussion](https://steamcommunity.com/app/1267910/discussions/0/3111394035956686323/)

### Inferences
- 사용자가 말한 "누르다 → 슬쩍 보고 → 아니네 → 다른 걸 봄"은 심리학적으로 **(저비용 반응) + (즉각 판독) + (높은 기각률) + (희귀 보상의 VR)** 이다. 기각이 고통스럽지 않으려면 ① 반응 비용이 거의 0이어야 하고, ② 기각된 결과도 소량의 가치(부스러기 재료)를 남겨야 한다.
- 도박 같은 느낌의 원천은 VR 자체보다 **비용 지불(돈/희소자원) + 무목적 + 손실 추격**에 가깝다. 따라서 (a) 리롤 비용을 시간이나 무료 자원으로 하고, (b) 무엇을 찾는지 플레이어가 *정의*하게 하고(필터와 타깃), (c) 실패가 누적 진행으로 환원되게 하면 "사냥"과 "조립"의 감각이 우세해진다.
- 반반 구간의 결정은 **인식형 결정(패턴 매칭: 이건 내 마법진의 빈칸에 맞나?)** 이어야 하고, **계산형 결정(전술 시뮬레이션)** 은 주의 복귀 시점(보스 웨이브에 해당하는 구간)으로 미뤄야 한다(멀티태스킹 연구 기반 추론).

### Gaps
- 오토배틀러 상점 리롤을 직접 다룬 학술 연구는 찾지 못했다.
- "기각의 쾌감"(빠르게 '아니네' 하고 넘기는 행위 자체의 즐거움)을 다룬 연구나 디자인 글은 찾지 못했다. 사용자의 핵심 통찰이지만 1차 근거가 없다.

---

## Q4. 힐끗 보고 결정할 수 있게 하는 디자인 패턴

### Takeaway
핵심은 **"평범한 것은 조용히 자동으로 넘기고, 플레이어가 정의한 '관심 조건'에 맞는 것만 크고 명확하게 멈춰 세우는 것"** 이다. 사례들을 보면 이벤트 로그(놓친 것 확인), 알림 큐와 그룹핑, 커스텀 조건 알림, 놓쳐도 안전한 정지가 반복해서 나온다.

### Cited Findings
- Melvor Idle 2는 **Event Log**를 추가했다. 중요한 이벤트와 알림을 추적해 놓친 이벤트를 보거나 문제가 생긴 스킬에 대응하게 한다. — [Steam: Melvor Idle news](https://steamcommunity.com/app/1267910/allnews/)
- 여러 행동이 동시에 끝날 때 알림이 안 뜨는 문제를 고치려고 알림 큐 상한을 20으로 올렸다. — 같은 출처
- 커뮤니티 모드: 게임 조건과 목표에 대한 **사용자 정의 알림**(커스텀 사운드, 반복, 팝업, 드래그 가능한 진행 트래커). — [mod.io Melvor Idle mods](https://mod.io/g/melvoridle)
- 그룹 알림 모드는 일정 간격으로 묶는 대신 그만큼 알림이 늦어진다는 트레이드오프를 경고한다. 기본 알림이 과도한 스팸이라는 리뷰도 있다. — [mod.io: QoL Grouped Notifications](https://mod.io/g/melvoridle/m/qol-grouped-notifications); [mod.io: Notification Toggle](https://mod.io/g/melvoridle/m/notification-toggle#description)
- 세컨드 스크린 게임 추천 기준: 멀리서 힐끗 봐도 읽히는 UI, 오프라인 진행, 자동화. — [Top Incremental Games](https://www.topincrementalgames.com/guides/best-second-monitor-games)
- 포켓로그 도주런은 보스 웨이브(도주 불가)와 Neutralizing Gas(특성 무효화) 같은 **예외 상황에서만 플레이어 개입**이 필요하다. — [PokeRogue Endless Guide](https://zi-cong-tan.github.io/PokeRogue-Endless-Guide/); [DC 포켓로그 갤 검색 요약](https://gall.dcinside.com/mgallery/board/view/?id=pokerogue&no=80341)
- SAP의 freeze 버튼과 Brotato의 lock은 "지금 판단 보류, 나중에"를 원터치로 할 수 있게 하는 저비용 결정 UI다. — [SAP Wiki](https://superautopets.wiki.gg/wiki/The_Basics); [Brotato Wiki](https://brotato.wiki.spellsandguns.com/Shop)

### Inferences (반반 라이브 UI 체크리스트, 근거는 위 사례)
1. **3단계 신호 위계:** ① 평범 = 자동 기각(소리 없음, 회색, 빠른 스크롤) / ② 내 필터에 부분 일치 = 작은 칩 소리와 테두리 색 / ③ 완전 일치나 희귀 = 화면 전체 색 변화, 고유 사운드, 진동(모바일), 자동 정지. 소리는 ③에만 쓴다(Melvor 요청 근거).
2. **"Stop when X" 규칙 편집기:** "빈칸 3번(속성: 불, 위상: 확산)에 맞는 각인 나오면 정지", "희귀도 ≥ Epic이면 정지", "보스 웨이브 직전 정지". 이 규칙 작성 자체가 설계 행위이므로 본 게임의 마법진 설계 언어를 재사용한다.
3. **이벤트 로그와 리플레이 카드:** 다른 화면을 보다가 놓쳐도 "방금 지나간 후보 10개"를 되짚을 수 있게(Melvor Event Log). 놓칠까 봐 불안한 마음을 없애야 진짜로 눈을 뗄 수 있다.
4. **Hold/Freeze 슬롯:** 원터치 보류. 큐가 리롤돼도 남는다(SAP).
5. **진척 막대는 '팀 완성도' 기준:** 확률 피티 막대(도박 느낌)보다 "내 마법진 7칸 중 5칸 충족" 같은 **조립 진척**을 보여준다.
6. **원핸드, 대형 단일 버튼, 키보드 단축키(Space/Enter):** 폰과 태블릿은 엄지 영역, PC는 다른 창 위에 띄울 수 있는 작은 PiP 모드(웹이므로 Document Picture-in-Picture와 탭 제목/파비콘 알림을 활용할 수 있다. 기술 가능성은 추론이며 브라우저 지원 확인 필요).
7. **안전한 무시:** 반반 모드에는 실패 상태 페널티를 두지 않거나, 위험 구간 전에 자동으로 정지한다(세컨드 모니터 게임 기준 근거).

### Gaps
- 웹 게임에서 탭 비활성 시 사운드와 타이머 스로틀링, PiP 지원 범위는 이번 조사 범위 밖이라 확인하지 않았다.
- 색약 접근성을 고려한 희귀도 색 코딩 연구는 찾지 못했다.

---

## Q5. "누를 때마다 리롤/스캔해서 빌드를 완성하는" 루프 아이디어와 도박 느낌 회피

### Takeaway
리롤 루프를 도박이 아닌 **조립과 사냥**으로 느끼게 하는 검증된 장치는 ① 플레이어가 정한 목표(TFT "명확한 타깃으로 굴려라"), ② 보류와 고정(SAP freeze, Brotato lock), ③ 누적 진척과 바닥 보장(pity, 하지만 '확률 막대'가 아니라 '조립 막대'로), ④ 기각물의 부분 가치, ⑤ 유료 화폐와 분리하는 것이다. 피티 시스템은 "낭비감"을 줄이지만, 진행 막대가 "멈추기 어렵게" 만든다는 비판도 있으므로 표현 방식이 중요하다.

### Cited Findings
- 피티 카운터는 일정 실패 후 희귀 결과를 보장해 불확실성을 "유한한 대기"로 바꾼다. soft pity(임계 근처에서 확률 상승)와 hard pity(확정)로 나뉜다. — [PulseGeek: What is a pity counter](https://pulsegeek.com/articles/what-is-a-pity-counter-in-gacha-how-it-works/)
- 카운터를 배너 간에 이월하면 실패한 뽑기의 "낭비감"이 덜 실감난다(Genshin은 최대 90회). — [GamerBraves: Pity or No Pity](https://www.gamerbraves.com/pity-or-no-pity-a-look-at-guarantee-systems-in-gacha/)
- 반론: 피티는 "진행 막대"여서 **가까워질수록 멈추기 어렵다**(다크 UX). — [Chesneau Ciccarelli: Dark Patterns in Gacha Games](https://chesneauciccarelli.com/blog/dark-ux-gacha-games)
- 확률 증가형은 약 90회, 스파크(교환)형은 약 350회 정도가 적정 피티라는 분석. 보상 빈도와 피티 설계도 확률 공개만큼 감시해야 한다는 주장. — [MDPI Information 16(10):890 "Inherent Addiction Mechanisms in Video Games' Gacha"](https://www.mdpi.com/2078-2489/16/10/890)
- Backpack Battles Customer Card: 리프레시할 때마다 상점 아이템 하나의 희귀도가 올라간다. 리롤 자체에 결정론적 누적 가치를 붙인 예. — [검색 요약](https://gleetron.pages.dev/posts/what-does-the-present-do-in-backpack-battles) (출처 신뢰도 낮음); TFT Loaded Dice(특정 특성 챔피언이 나오도록 리롤을 편향시키는 아이템) — [LoL Wiki: TFT Loaded Dice](https://wiki.leagueoflegends.com/en-us/TFT:Loaded_Dice)
- 포켓로그 자체도 순수 확률이 아니라 **행운(이로치 보유로 상승) → 확률 상승**이라는 플레이어 영향 레버, 그리고 **사탕(이로치 x5~x20)** 이라는 결정론적 환원을 갖고 있다. — [PokéRogue Wiki FAQ](https://wiki.pokerogue.net/gameplay:faq)
- auto와 sweep은 "직접 정복한 뒤에만" 해금하는 방식으로 숙련과 연결할 수 있다(Reverse: 1999). — [Gamezebo](https://www.gamezebo.com/walkthroughs/reverse-1999-auto-battle/)

### Inferences: 마법산업기능사용 반반 라이브 모드 후보 (도주런 리스킨이 아닌 고유 정체성)
아래는 위 근거를 조합한 **디자인 제안**이다(출처 없는 창작 아이디어이므로 검증 필요).

**A. "각인 흐름 검수(Glyph Stream QC)": 공장 라인 검수원 판타지**
- 컨베이어에 무작위 각인, 룬, 부품이 흘러온다. 플레이어는 [통과/폐기]가 기본 자동이고, 한 번 누르면 다음 로트로 넘어간다. 필터는 본 게임에서 설계한 마법진의 **빈 슬롯 사양**(속성, 위상, 출력 등급, 연결 포트 모양)에서 자동 생성된다. 맞는 것만 멈추고 빛난다.
- 정체성: "자격증(기능사)" 테마와 맞는 **품질 검사와 분류 작업**. 포켓로그의 "아니네"를 "불합격 판정 도장"으로 재해석한다. 폐기물은 분해되어 소량 재료(부스러기 → 일정량 모이면 지정 각인으로 교환 = 스파크형 결정론 바닥)가 된다.
- 주의 복귀 포인트: 주기적인 "감독관 점검"(=보스 웨이브)에서 쌓은 부품으로 즉석 마법진을 조립해 짧은 전술 전투를 한다. 여기서 반반 수확물이 전술 기둥으로 이어진다.

**B. "주문 공방 의뢰 게시판 리롤": 내 팀의 빈칸을 채우는 의뢰 낚시**
- 의뢰 카드(적 편성과 보상 부품)가 리롤된다. 플레이어의 현재 덱과 마법진 목록이 **커버하지 못하는 약점**(예: 결계 관통 부족)을 시스템이 태그로 표시하고, 그 약점을 채우는 보상을 가진 의뢰가 뜨면 강조한다. 수락하면 auto 전투가 진행되는데, 직접 검증한 마법진만 auto에 투입할 수 있다(Reverse 1999식).
- "부족한 걸 채운다"를 UI로 가시화: 팀 레이더 차트의 구멍이 메워지는 연출.

**C. "마나 광맥 탐사(스캔)": 탐지기 핑 리듬**
- 누를 때마다 지층 하나를 스캔한다. 대부분 "잡광"(자동으로 정련 재료가 된다). 사용자가 설정한 공명 주파수(=원하는 속성 조합)와 일치하면 탐지기 음이 점점 높아지는 핫/콜드 피드백을 준다. 완전 일치 시 고유 사운드. 이미 있는 "광석 정련 핸드워크" 프로토타입(태스크 #2)과 자연스럽게 연결된다.

**공통 안전장치 (도박 느낌 회피)**
- 리롤 비용은 **시간과 무료 자원**만 쓴다. 유료 화폐를 쓰는 리롤을 넣지 않는다.
- **목표를 플레이어가 정의**한다(필터 = 설계 언어). 무목적 뽑기를 만들지 않는다.
- 기각물을 **반드시 부분 가치로 환원**(분해 → 교환소)해 결정론적 상한을 둔다.
- 진척 표시는 "확률 피티"가 아니라 **"마법진 완성도"**.
- **Freeze 슬롯 2~3개**로 "보류"라는 저비용 결정을 허용한다.
- 세션 상한과 "오늘의 검수 할당량 완료" 같은 자연스러운 종료점을 둔다. 엔드리스의 "숫자 구경" 비판과 피티의 멈추기 어려움 비판에 대응하기 위해서다.
- 희귀 이벤트만 소리와 진동으로 알리고, 나머지는 무음으로 둔다. 이벤트 로그로 놓친 것을 확인할 수 있게 한다.

### Gaps
- 리롤 루프에서 "freeze/lock 유무"가 체감 도박성을 줄인다는 실증 연구는 찾지 못했다(디자인 관행 수준의 근거).
- 웹 플랫폼(폰, 태블릿, PC)에서 세션 길이와 반반 플레이 비율에 대한 데이터는 찾지 못했다.
- 위 A/B/C 아이디어는 출처 기반 조합 추론이며 플레이테스트 검증이 필요하다.
