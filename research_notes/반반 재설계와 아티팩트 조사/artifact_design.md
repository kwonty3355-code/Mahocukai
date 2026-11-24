# 아티팩트(영구 수집 도구) 시스템 설계 조사

> 조사일 2026-11-24. 검색 약 19회.
> **네트워크 제한**: 다음 호스트는 이 세션에서 열 수 없어서 **검색 결과 요약(snippet)으로만** 인용했다. hades.fandom.com, slaythespire.wiki.gg, www.gamedeveloper.com, www.pcgamer.com, www.escapistmagazine.com, soulbound.game, www.wayline.io. 원문을 직접 확인하지 못했으므로 수치는 "출처가 그렇게 요약됨" 수준으로 본다.
> **표기**: "(기억)"이라고 붙은 항목은 내가 이미 알던 내용이다. 이번 세션에서 원문을 확인하지 못했으니 검증하기 전에는 사실로 쓰지 말 것.
> 게임 맥락은 /home/user/Mahocukai/docs/GAME_DESIGN.md(§4 공방, §5 집중 전투, §9 장비)를 읽고 맞췄다.

---

## 1. 참고 시스템: 무엇이 효과를 "특별하게" 만들고, 무엇이 "스탯 막대"로 만드는가

### Takeaway
기억에 남는 아이템은 수치를 올리지 않는다. **규칙 하나를 바꾸거나, 대가를 붙이거나, 특정 상황(트리거)에서만 켜진다.** 같은 시스템 안에서도 "+체력 25" 같은 스탯형(Hades의 Old Spiked Collar)과 "피격 없이 방을 깨면 피해 증가" 같은 행동 유도형(Pierced Butterfly)이 섞여 있다. 플레이 방식을 바꾸는 쪽은 후자다.

### Cited Findings
- **Balatro 조커**: 다수의 조커가 포커 규칙 자체를 깬다. 예: 플러시와 스트레이트를 5장이 아니라 4장으로 만들 수 있게 한다. — [PC Gamer (snippet)](https://www.pcgamer.com/i-dont-play-poker-at-all-says-solo-developer-who-made-the-poker-roguelike-i-cant-stop-playing/)
- LocalThunk: 디자인 대부분이 "시행착오(trial and error)"에서 나왔다. 밸런스는 "어려운 게 아니라 계속하는 과정"이다. — [TouchArcade](https://toucharcade.com/2024/03/18/balatro-interview-mobile-port-localthunk-dlc-plans-updates-new-jokers-demo-feedback/), [Rogueliker](https://rogueliker.com/balatro-interview/)
- 조커 수는 처음에 120개 계획이었다. 퍼블리셔가 "150개"라고 잘못 말하자 고치지 않고 30개를 더 만들었다. 수가 고정된 목표가 아니었다는 뜻이다. — [GamesRadar](https://gamesradar.com/games/roguelike/balatro-creator-added-extra-jokers-to-the-hit-roguelike-because-someone-at-its-publisher-mentioned-something-about-150-jokers-and-instead-of-correcting-them-i-just-made-30-more)
- **Hades 키프세이크(Keepsake)**: 스탯형과 조건형이 섞여 있다. Old Spiked Collar는 체력 +25/38/50, Pierced Butterfly는 피격 없이 방을 클리어할 때마다 피해가 오른다(1%/1.5%/2%), Lucky Tooth는 치명상을 입으면 1회 부활한다(50/75/100 체력). 출처끼리 수치가 다르다(Lucky Tooth를 50/100/150으로 쓴 가이드도 있다). — [Dot Esports](https://dotesports.com/hades/news/hades-all-keepsakes-nectar-rewards-and-how-to-get-them), [Prima Games](https://primagames.com/tips/hades-keepsake-list)
- Hades 키프세이크는 NPC에게 넥타를 선물해서 얻는다. 관계를 쌓은 결과로 받는 수집품이다. — [RPG Site](https://www.rpgsite.net/feature/10266-hades-nectar-guide-who-to-gift-nectar-to-for-keepsakes)
- **Slay the Spire 보스 유물**: "강한 효과 + 실제 대가" 구조다. 에너지 유물은 모두 턴마다 에너지 +1을 주고 벌칙을 단다. Ectoplasm은 골드 획득 불가, Sozu는 포션 획득 불가, Cursed Key는 상자를 열 때마다 저주를 받는다. Runic Cube는 최대 체력이 20% 줄지만 체력을 잃을 때마다 1장을 뽑는다. Calling Bell은 저주 3장과 유물 3개를 맞바꾼다. — [wiki.gg Relics List (검색 요약)](https://slaythespire.wiki.gg/wiki/Relics_List)
- 플레이어 사이의 논쟁: "대가 없는 에너지 유물(Happy Flower)은 너무 공짜 같다", "에너지 1은 미쳤으니 대가가 필요하다". Runic Pyramid는 "대부분의 덱에서 단점이 장점보다 크다"는 평을 받았다. — [Steam 토론](https://steamcommunity.com/app/646570/discussions/0/1742232339939829970), [Steam 토론 2](https://steamcommunity.com/app/646570/discussions/0/2650805212058485290)
- **Risk of Rain 2 루나 아이템**: 모두 대가가 붙는다. Shaped Glass는 기본 피해 +100%, 최대 체력 -50%이고, 겹치면 양쪽이 모두 강해진다. Gesture of the Drowned는 장비 쿨다운이 -50%이지만 쿨이 차면 **자동 발동**한다. 장비에 따라 단점이 사라진다("적만 다치게 하는 장비면 공짜 가치"). — [Pocket Tactics](https://www.pockettactics.com/risk-of-rain-2/lunar-items), [SegmentNext](https://segmentnext.com/risk-of-rain-2/lunar-items)
- **Binding of Isaac**: McMillen은 아이템 시스템을 전통적인 레벨업을 대신하는 것으로 설명했다(젤다처럼 층마다 아이템 하나). 처음에는 일부러 아이템 설명을 숨겨 실험하게 했지만, 나중에 "700개가 넘으면 이 아이디어는 전혀 통하지 않는다"며 후회했다. MTG의 "끝없이 확장되는 설계"에서 영향을 받았다. — [Game Developer 포스트모템 (검색 요약)](https://www.gamedeveloper.com/business/postmortem-mcmillen-and-himsl-s-i-the-binding-of-isaac-i-), [GameGrin 인터뷰](https://gamegrin.com/articles/edmund-mcmillen-interview)
- **Isaac 변신(Transformation)**: 같은 세트(테마 태그)의 서로 다른 아이템 3개를 모으면 변신이 일어난다. 세트는 15개다. 게임이 설명을 가장 안 해주는 시스템 중 하나라는 평이 있다. — [Isaac wiki.gg](https://bindingofisaacrebirth.wiki.gg/wiki/Transformations), [Playnews](https://www.playnews.gg/en/guides/the-binding-of-isaac-rebirth-the-guide-to-the-15-transformations-required-items-effects-and-tips)
- **Noita 퍼크**: 개발 초기 버전에 있던 메커닉(흡혈, 어디서나 지팡이 편집)을 퍼크로 옮겼다. 무작위로 나오니까 플레이어가 그걸 전제로 메타를 굳히지 못한다. (TV Tropes 요약이고 개발자 발언은 아니다.) — [TV Tropes](https://tvtropes.org/pmwiki/pmwiki.php/VideoGame/Noita)
- **Destiny "이그조틱 1개" 규칙**: Bungie의 철학으로 "이그조틱은 강해 보여야 하지만 실제로 OP여서는 안 된다"가 팬 스레드에서 인용된다. 1개 제한과 직접 연결한 공식 발언은 찾지 못했다. — [destiny.bungie.org 포럼](https://destiny.bungie.org/forum/index.php?id=57286)
- **"규모 차이가 의미 있으려면 플레이 방식이 바뀌어야 한다"**: Escapist 칼럼, Vampire Survivors 등 로그라이트 아이템 파워 스케일 논의. — [The Escapist (snippet)](https://www.escapistmagazine.com/roguelites-items-power-scale-game-development-vampire-survivors/)
- Soulbound 개발 블로그(한국어): 가장 많았던 피드백은 "빌드 다양성 확대와 유물 간 시너지 강화"였다. 스킬과 유물 선택의 연계를 강화하겠다고 했다. — [Soulbound 개발자 블로그 (snippet)](https://soulbound.game/ko/blog/dev-blog-150-new-relics-for-early-access/)

### Inferences
- "특별함"을 만드는 요소는 다섯 가지다. ① **규칙을 고친다**(Balatro 4장 플러시) ② **대가가 있는 맞교환**(StS 보스 유물, RoR2 루나) ③ **조건이 있는 트리거**(Pierced Butterfly) ④ **통제권을 넘긴다**(Gesture의 자동 발동) ⑤ **다른 시스템과 맞물리는 지점이 있다**(Isaac 변신, 시너지). 이 게임의 아티팩트는 ①~④에서 나와야 한다. 단순 스탯(보호막량, 영창 중 이동)은 이미 모자·로브의 몫이다.
- Gesture of the Drowned 모델이 특히 중요하다. **대가가 조합에 따라 0이 되는 아이템**이 플레이어가 발견하는 사기 조합의 씨앗이다. 이 게임의 "사기 조합은 미리 정하지 않는다" 원칙과 맞는다.
- Isaac의 교훈: 효과를 숨기면 아이템 수가 적을 때만 재미있다. 수집품이 수십 개를 넘으면 **정확한 효과 문구**가 필요하다.

### Gaps
- Hades 키프세이크와 StS 유물에 대한 **공식 개발자 설계 발언**은 찾지 못했다(검색된 인터뷰는 모두 일반론이었다).
- Monster Hunter 부적은 RNG를 둘러싼 논쟁만 확인했다(§3). Magic Survival 아티팩트, Wizard of Legend 1의 일반 유물 목록은 신뢰할 만한 자료를 못 찾았다.
- (기억) StS의 Snecko Eye(뽑기 +2, 카드 비용 무작위), Runic Dome(적 의도를 숨기는 대신 에너지 +1), Ice Cream(남은 에너지 보존)은 "정보를 대가로 거는" 좋은 사례다. 이번 세션에서 위키 원문은 확인하지 못했다.

---

## 2. 로드아웃 제약: 슬롯 수, "이그조틱 1개", 비용 예산, 단점, 상호 배타

### Takeaway
참고 게임들은 대부분 **동시에 끼울 수 있는 수를 아주 적게** 잡는다. Hades 키프세이크 1개, Wizard of Legend 출발 유물 1개, Dead Cells 변이 3개, Destiny 이그조틱 1개다. 대신 **중간 교체를 제한**하고(Hades는 지역 사이에서만, 같은 판에 되돌리기 불가), **강한 것에는 대가를 붙인다.** 슬롯이 적고 대가가 있으니 "최적 1세트"가 생기지 않는다.

### Cited Findings
- **Hades II 키프세이크**: 1개만 낀다. 교체는 지역 사이에서만 되고, 한 번 뺀 키프세이크는 그 판에 다시 낄 수 없다. 'Kindred Keepsakes' 주문을 쓰면 지역 보스 뒤 샘 방에서 교체할 수 있다. — [Maxroll 키프세이크 가이드](https://maxroll.gg/hades-2/guides/hades-2-keepsake-guide), [GameSpot](https://gamespot.com/gallery/hades-2-keepsakes-unlock-guide/2900-5377/)
- **Wizard of Legend**: 마을 상점에서 골드로 유물을 사고, **유물 1개**를 시련에 들고 들어간다. 저주 유물은 판 도중 Nox에게서 무료로 하나 고르는데, 한번 끼면 던전이 끝날 때까지 뺄 수 없다. — [Wizard of Legend Steam 토론](https://steamcommunity.com/app/445980/discussions/0/1696048426808545423), [Wizard of Legend Wiki (검색 요약)](https://wizardoflegend.fandom.com/wiki/Relics)
- Wizard of Legend의 비판: "저주 유물의 단점을 **고르기 전에** 볼 수 없다", "대가를 모르면 집을 가치가 없다". 반론으로 "모든 판에서 하나는 집는다"는 사람도 있다. — [Steam 토론](https://steamcommunity.com/app/445980/discussions/0/1696048426808545423)
- **Dead Cells 변이**: 동시에 최대 3개다. 바이옴마다 하나씩 고르니 첫 보스 전에 3개가 찬다. 재설정은 골드로 하며, 1,000에서 시작해 할 때마다 2배, 8,000에서 멈춘다. — [Dead Cells wiki.gg (검색 요약)](https://deadcells.wiki.gg/wiki/Mutation), [Gamers Decide](https://gamersdecide.com/articles/dead-cells-best-mutations-2)
- **Destiny**: 이그조틱 무기 1개, 이그조틱 방어구 1개. 커뮤니티 해석은 "빌드 하나를 고르게 하려는 것"(Steam), "쌓으면 각각이 약해져야 하니까"(저신뢰 해설 사이트)다. 반대로 "많이 모아도 하나밖에 못 쓰면 이상하다"는 비판도 있다. — [Steam](https://steamcommunity.com/app/1085660/discussions/3/1693843461184134763), [destiny.bungie.org](https://destiny.bungie.org/forum/index.php?id=57293)
- **StS 보스 유물**: 3개 중 1개를 고른다. 같은 등급 안에서 대가의 종류(골드, 포션, 저주, 카드 선택)를 다르게 해서, 덱마다 "덜 아픈 대가"가 다르다. — [wiki.gg Relics List (검색 요약)](https://slaythespire.wiki.gg/wiki/Relics_List)
- **RoR2 루나**: 대가는 대개 겹칠수록 커진다. Gesture of the Drowned는 겹쳐도 단점이 커지지 않게 패치되었다고 한다(2019 패치, 2차 출처). — [SegmentNext](https://segmentnext.com/risk-of-rain-2/lunar-items)
- **MTG 복잡도**: Rosewater의 New World Order는 복잡도를 표면(카드 문구), 판(동시에 추적할 것), 전략으로 나눈다. 커먼 카드에는 "전장에서 다른 카드 하나 이상에 영향을 주지 않는다" 같은 상한을 둔다. — [MTG Wiki: New World Order](https://mtg.wiki/page/New_World_Order), [Wizards 원문](https://magic.wizards.com/en/news/making-magic/new-world-order-2011-12-05)

### Inferences
- 이 게임에 맞는 권장안: **기본 2칸 + 자격 급수로 최대 3칸**. 촉매 칸이 3급 1칸, 2급 2칸, 1급 3칸이므로 같은 리듬을 쓰면 배우기 쉽다. 다만 **"주(主) 아티팩트" 칸 1개를 따로 둔다**(Destiny의 이그조틱 규칙). 규칙을 크게 바꾸는 것(예: 영창 2개 동시)은 주 칸에만 끼울 수 있게 한다.
- 비용 예산(무게) 방식도 가능하다. 그러나 7×7 집중 전투가 이미 머리를 많이 쓰게 하므로, 출발 화면에서까지 합산을 시키면 **판 복잡도**가 늘어난다(MTG NWO). 슬롯 + 등급 구분이 더 읽기 쉽다.
- **판 중 교체 불가**를 기본으로 한다(Hades 방식). 보스가 주는 새 아티팩트는 "이번 판에는 이것과 바꿀 수 있다, 단 뺀 것은 이번 판에 다시 못 낀다"로 처리한다. 선택에 무게가 생긴다.
- 대가가 있는 아티팩트는 **고르기 전에 대가를 전부 보여 준다**(Wizard of Legend에 대한 비판에 대응).
- 상호 배타는 태그로 처리한다. 예를 들어 [영창 규칙] 태그가 있는 아티팩트는 하나만 낄 수 있게 한다. 개별 조합을 금지하는 목록을 만들지 않는다. 이 게임의 "일반 규칙으로만 조절한다" 원칙과 맞는다.

### Gaps
- 슬롯 수에 따른 빌드 다양성을 정량적으로 비교한 연구나 GDC 자료는 찾지 못했다.
- Destiny 1개 제한에 대한 Bungie 공식 이유는 확인하지 못했다(커뮤니티 해석만 있다).

---

## 3. 획득과 수집 속도, 중복, 강화

### Takeaway
영구 수집품의 획득 경로는 세 갈래다. **관계나 진행에 묶인 확정 해금**(Hades: 넥타 선물), **상점 구매**(Wizard of Legend: 골드로 사서 출발 전 1개), **드롭 + 보관함**(Diablo IV: 분해하면 코덱스에 영구 등록). 중복은 **코덱스 방식**(한 번 얻으면 영구 등록, 중복은 재화로 전환)이 가장 덜 괴롭다. 순수 RNG 드롭(Monster Hunter 부적)은 원하는 빌드를 끝내 완성하지 못하게 만들어서 큰 불만을 낳았다.

### Cited Findings
- **Hades 키프세이크 강화**: 끼고 있으면 자동으로 오른다. 2랭크는 조우 25회, 3랭크는 추가 50회(합계 75)다. 'Quickening' 주문이 이를 13/25로 절반으로 줄인다. 4랭크(Heroic)는 특정 듀오 은혜로만 도달한다. 원작 Hades는 "방 25개를 깨면 오른다"는 서술도 있다. — [Shacknews](https://www.shacknews.com/article/146098/slayer-seal-mortal-shell-2), [Maxroll](https://maxroll.gg/hades-2/guides/hades-2-keepsake-guide), [Steam 토론](https://steamcommunity.com/app/1145360/discussions/0/1753520467360345649)
- **Diablo IV 코덱스 오브 파워**: 전설 아이템을 분해하면 그 위상(Aspect)이 코덱스에 저장되고 무한히 재사용된다(시즌 4부터 대장장이 분해로 자동 추출). 각인할 때 골드와 베일드 크리스탈이 든다. 드롭 위상과 코덱스 위상의 강도 차이에 대해서는 출처가 엇갈린다. — [Icy Veins](https://www.icy-veins.com/d4/guides/legendary-aspects-codex-of-power-guide/), [Icy Veins S4 뉴스](https://www.icy-veins.com/d4/news/all-legendary-aspects-extract-directly-to-codex-in-diablo-4-season-4/), [GamesRadar](https://gamesradar.com/diablo-4-aspects)
- **Monster Hunter 부적/장식주 RNG**: Rise의 연금(멜딩)은 "가장 짜증나는 메커닉 중 하나"로 불렸다. Wilds 디렉터도 World의 장식주 RNG 때문에 "빌드를 완성하지 못하고 게임을 끝냈다"고 말했다. Wilds는 핵심 스킬 장식주를 제작으로 보장한다. 플레이어 사이에는 "장식주는 제작, 부적은 RNG가 그 반대보다 낫다"는 의견이 있다. — [GamesRadar](https://gamesradar.com/games/monster-hunter/monster-hunter-wilds-lead-was-also-crushed-by-monster-hunter-worlds-brutal-decoration-rng-i-ended-up-finishing-the-game-without-having-completed-my-build), [Steam (World)](https://steamcommunity.com/app/582010/discussions/0/3124911622550666137/?ctp=4), [Automaton "Gout table"](https://automaton-media.com/en/news/20210416-740/)
- 메타 진행의 두 가지 입장: "힘을 더하지 않고 선택지만 넓힌다"(StS형)와 "선택지 + 영구 힘"(Hades형). 둘 다 통하니 하나를 골라 지키라는 주장이다(비공식 디자인 위키). — [meta as variety not power](https://saschb2b.github.io/game-mechanics/concepts/meta-as-variety-not-power)
- 영구 강화가 커지면 판이 시시해지고 실력 중심의 핵심이 무너진다는 주장(블로그). 플레이어 쪽에서는 "스탯 해금보다 옆으로 넓히는 해금이 좋다"는 의견이 반복된다. — [bugnet.io](https://bugnet.io/blog/how-to-design-a-roguelite-meta-progression), [Steam 토론](https://steamcommunity.com/app/1315610/discussions/0/4814903332727851503)
- Dead Cells 변이 재설정은 비용이 기하급수로 오른다(1,000부터 2배씩, 상한 8,000). "바꿀 수는 있지만 공짜는 아니다"의 예다. — [Dead Cells wiki.gg (검색 요약)](https://deadcells.wiki.gg/wiki/Mutation)

### Inferences
- 권장안: **"도감(코덱스)형 영구 수집 + 확정 경로 다수 + 보스 드롭은 덤"**.
  - 얻는 경로를 셋으로 둔다. ① **자격 승급 확정 보상**(급수마다 정해진 1~2개) ② **보스 처치 시 가끔**(이미 제안된 "판 안 보상 칸"과 같다. 아직 없는 것을 우선 준다) ③ **소환 인장 등 천장 재화로 교환**(뽑기 천장과 같은 경제를 써서 RNG 불만을 막는다).
  - **중복**은 "아티팩트 조각(가루)"으로 바꾼다. 조각은 ③의 교환 재화로 쓰거나 **각성**(아래)에 쓴다. 직접 수치를 올리는 데는 쓰지 않는다.
- **강화는 Hades식 "사용으로 숙련"을 따르되 옆으로 넓힌다.** 예: 그 아티팩트를 끼고 보스를 3회 이기면 **각성 문구**(대가가 조금 줄거나 트리거 조건이 하나 늘어나는 것)가 열린다. 수치 2배가 아니다. 공방에 이미 있는 "숙련도"(같은 마법을 쓸수록 익숙해짐)와 결이 같아서 세계관에도 맞다.
- 반반(탐사) 모드의 촉매 경제와 섞지 않는다. 아티팩트는 **집중 전투 + 승급**에서만 나오게 해야 "집중이 파밍처럼 느껴지는" 문제를 피할 수 있다(GAME_DESIGN §8의 우려).

### Gaps
- 로그라이트 영구 수집품의 "개수 대비 해금 속도" 수치 기준(몇 시간에 몇 개)은 신뢰할 만한 출처를 찾지 못했다. 시제품에서 재야 한다.

---

## 4. 효과 분류와 한눈에 읽히는 문구

### Takeaway
효과는 **트리거 → 효과 → (대가)**의 세 덩어리로 쓰면 한눈에 읽힌다. 트리거 종류를 소수의 **고정 키워드**로 묶는다(MTG식 키워드와 생략 가능한 보충 설명). 다음 글자는 다음 중 하나여야 한다. 행동을 바꾸는 트리거, 규칙 변경, 자원 전환, 정보 공개, 이동 변경.

### Cited Findings
- MTG의 복잡도 관리: 카드 문구 표면 복잡도와 판 위에서 추적해야 하는 것의 복잡도를 따로 관리한다. 키워드의 보충 설명(reminder text)은 "처음 한두 번만 읽으면 되므로" 비용이 낮다고 본다(팬 문서). "능력 단어는 키워드보다 비싸다. 매번 풀어 써야 하니까"(Rosewater 예시). 비공식 기준으로 "규칙 문구 4줄 이상이면 경고"가 있다. — [MTG Wiki: New World Order](https://mtg.wiki/page/New_World_Order), [MTG Salvation NWO 레드플래그 입문](https://www.mtgsalvation.com/forums/creativity/custom-card-creation/578926-primer-nwo-redflagging), [MTG Wiki: Complexity creep](https://mtg.wiki/page/Complexity_creep)
- Isaac은 설명을 숨겼다가 아이템이 수백 개로 늘자 실패를 인정했다. — [Game Developer 포스트모템 (검색 요약)](https://www.gamedeveloper.com/business/postmortem-mcmillen-and-himsl-s-i-the-binding-of-isaac-i-)
- Balatro는 "1.1 업데이트에서 정말 헷갈리는 기존 조커 하나를 개편"했다. 문구가 헷갈리면 효과가 좋아도 손봐야 한다는 사례다. — [PC Gamer (제목/snippet)](https://pcgamer.com/games/roguelike/balatro-1-1-will-include-new-jokers-plus-a-revamp-of-a-really-confusing-existing-one)
- RoR2의 프록 연쇄(적중 시 → 다른 적중 시 효과)는 모더들이 "연쇄 길이 상한, 연쇄 계수"를 따로 만들 만큼 폭주하기 쉽다. 예: ProcSolver는 기본값으로 스킬 기점 연쇄를 3단계, 아이템 기점 연쇄를 1단계로 묶는다. — [Thunderstore ProcSolver](https://thunderstore.io/c/riskofrain2/p/RiskOfBrainrot/ProcSolver/), [ProcChainNerf](https://thunderstore.io/c/riskofrain2/p/Def/ProcChainNerf/)
- Gesture of the Drowned처럼 "언제 발동할지 늘 알 수 있다"는 점이 대가를 전략으로 바꾼다(가이드 서술). — [SegmentNext](https://segmentnext.com/risk-of-rain-2/lunar-items)

### Inferences
- **이 게임용 트리거 키워드(고정 10개 안팎)**. 집중 전투 규칙(동시 턴, 보호막, 영창, 원소 반응, 사거리 그림자)에서 바로 뽑았다.
  - 【막이 깨질 때】 보호막이 0이 되는 순간
  - 【영창 완성】 여러 턴 영창한 마법진이 발동할 때
  - 【영창 중 매 턴】
  - 【반응】 원소 반응이 일어날 때(칸, 이동, 마법 어디서든)
  - 【그림자 밖】 턴이 끝날 때 빛나는 적(나를 칠 수 있는 적)이 없을 때
  - 【되감기】 되돌리는 마법을 쓸 때
  - 【스크롤 소모】 스크롤을 쓸 때
  - 【처치】 적이 쓰러질 때
  - 【전투 시작/끝】
- **분류 다섯 가지**(아티팩트마다 하나만 주 분류로 단다)
  1. **트리거형**: 【키워드】 → 작은 효과. 사기 조합의 기본 재료다.
  2. **규칙 변경형**: 시스템 규칙 하나를 고친다(예: 영창 2개 동시, 보호막이 영창 대신 깨짐). 주 칸에만 낀다.
  3. **자원 전환형**: A를 B로 바꾼다(보호막 ↔ 체력, 이동 ↔ 영창 턴, 스크롤 ↔ 보호막).
  4. **정보형**: 숨긴 정보 하나를 연다(적이 이번 턴에 쓸 스킬, 연쇄 2단계). 동시 턴 심리전의 핵심을 건드리니 반드시 대가와 함께 준다.
  5. **이동·위치형**: 7×7 판의 위치 규칙을 바꾼다(밀기, 자리 바꾸기, 칸 성질 남기기).
- **문구 규칙**
  - 형식: `【트리거】 효과. ⟨대가⟩`. 2줄을 넘기지 않는다. 숫자는 최대 2개다.
  - 대가는 항상 다른 색 한 줄로 쓴다(고르기 전에도 보인다).
  - "~할 수 있다"(선택)와 "~한다"(강제)를 구별한다. 강제 효과는 Gesture처럼 그 자체가 대가가 된다.
  - 연쇄 폭주를 막는 일반 규칙: **아티팩트가 일으킨 효과는 다른 아티팩트의 트리거를 한 번만 더 일으킨다**(연쇄 깊이 1, RoR2 모드 상한과 같은 발상). 특정 조합을 금지하지 않고 깊이만 제한한다.

### Gaps
- 한국어 게임 커뮤니티(인벤, 나무위키 등)의 "효과 문구 가독성" 논의는 이번에 찾지 못했다. 검색 결과가 다른 게임으로 흩어졌다.

---

## 5. 영구 파워 크립을 억제하면서 창발적 사기 조합 허용하기

### Takeaway
영구 수집품의 **수직 상승(수치)을 막고 수평 확장(선택지)만** 늘린다. 강한 규칙 변경에는 **대가 + 슬롯 등급**을 붙인다. 폭주는 **일반 규칙**(연쇄 깊이, 칸 수, 판 중 교체 불가)으로만 막는다. 사기 조합은 "대가가 특정 빌드에서 0이 되는 순간"에 생기게 둔다.

### Cited Findings
- StS 팀은 메트릭 기반으로 균형을 잡았다. Giovannetti: "모든 카드는 자기 자리가 있어야 하고, 이는 유물, 이벤트, 몬스터에도 확장된다". "수백 장의 카드에 모든 것과 상호작용하는 유물"이 있어서 데이터가 필요했다. Yano: 처음 그래프 3개에서 90개 이상으로 늘었다. — [GDC 뉴스](https://gdconf.com/news/learn-slay-spires-successful-metrics-driven-approach-game-balancing-gdc-2019), [Game Developer (검색 요약)](https://gamedeveloper.com/design/how-i-slay-the-spire-i-s-devs-use-data-to-balance-their-roguelike-deck-builder)
- "변화 없는 영구 힘 vs 선택지" 두 입장 모두 성립하지만 하나를 고르라는 주장. — [meta as variety not power](https://saschb2b.github.io/game-mechanics/concepts/meta-as-variety-not-power)
- Noita: 강력한 메커닉을 **무작위 퍼크**로 두어 메타 고착을 막았다(위키 요약). 숙련자는 최상위 퍼크와 경로로 게임을 쉽게 만든다(PC Gamer 리뷰). 사기 조합의 발견이 오히려 재미로 받아들여지는 사례다. — [TV Tropes](https://tvtropes.org/pmwiki/pmwiki.php/VideoGame/Noita), [PC Gamer 리뷰 (snippet)](https://pcgamer.com/noita-review)
- Wayline 블로그: "통제가 지나치면 단조로움이 생긴다"(매번 같은 최적화 공식). — [Wayline (snippet)](https://www.wayline.io/blog/roguelike-itemization-balancing-randomness-player-agency)
- Destiny "OP처럼 느껴지되 실제 OP는 아님"(팬 인용). — [destiny.bungie.org](https://destiny.bungie.org/forum/index.php?id=57286)

### Inferences
- **이 게임의 특수 장치를 이용한 억제책**
  - 집중 전투는 출발 전에 아티팩트를 고정하고, 판 안 임시 문양이 무작위로 나온다. 그래서 **출발 로드아웃(확정)과 판 안 보상(무작위)이 만나야** 사기 조합이 완성된다. Noita 퍼크와 같은 효과가 나서 "매판 같은 최적 빌드"를 막는다.
  - 아티팩트는 **수치형 성장 없음 + 각성 1회(옆으로)**. 모자·로브가 수직 성장을 맡고 아티팩트는 수평을 맡는다.
  - 도전 조건 메뉴(GAME_DESIGN §5 패배)와 연결한다. 슬롯을 하나 비우고 출발하면 보상이 오른다. 사기 로드아웃을 쓰는 사람은 보상 배율로 스스로 균형을 잡는다.
  - 출시 후 메트릭: 아티팩트별 **장착률, 동반 장착 쌍, 클리어율**을 기록한다(StS 방식). 너무 강한 것은 수치 대신 **대가를 조정**한다.
- **사기 조합을 막지 않는 기준**: 하나의 아티팩트가 단독으로 모든 빌드에서 최선이면 고친다. 두세 개 + 특정 마법진 + 특정 판 안 문양이 맞물려야 폭주한다면 그대로 둔다("발견된 사기").

### Gaps
- 창발적 조합을 의도적으로 허용한 게임의 공식 "허용 기준" 문서는 찾지 못했다. 위의 기준은 추론이다.

---

## 6. 구체 시스템 초안: 아티팩트 "비전 도구" 12종

### Takeaway
**슬롯**: 보조 칸 1~2개 + 주(主) 칸 최대 1개, 급수에 연동(아래 표). **획득**: 승급 확정, 보스 드롭(미보유 우선), 천장 재화 교환. **중복**: 조각. **성장**: 사용 각성 1회. **문구**: 【트리거】 효과 ⟨대가⟩. 아래 12종은 전통 마법 테마이고, 각각이 촉매(마법 하나), 모자·로브(기본 능력), 마법(문양)과 겹치지 않게 했다.

### Cited Findings
- 구조 근거는 위 §1~§5의 출처를 따른다. Hades 1개 장착, 판 중 교체 제한, 사용 랭크([Maxroll](https://maxroll.gg/hades-2/guides/hades-2-keepsake-guide)). StS 보스 유물의 맞교환([wiki.gg 요약](https://slaythespire.wiki.gg/wiki/Relics_List)). RoR2 Gesture의 "통제권 대가"([SegmentNext](https://segmentnext.com/risk-of-rain-2/lunar-items)). Diablo IV 코덱스의 영구 등록([Icy Veins](https://www.icy-veins.com/d4/guides/legendary-aspects-codex-of-power-guide/)). Isaac의 세트 3개 변신([Isaac wiki.gg](https://bindingofisaacrebirth.wiki.gg/wiki/Transformations)). MTG의 키워드와 문구 상한([MTG Wiki](https://mtg.wiki/page/New_World_Order)).

### Inferences
**시스템 규칙 요약**
| 항목 | 초안 |
|---|---|
| 칸 | 보조 칸: 3급 1, 2급 2, 1급 2. **주 칸**: 2급부터 1칸. 【규칙 변경】 태그는 주 칸에만 낀다. |
| 교체 | 출발 전에만 바꾼다. 보스가 새 아티팩트를 주면 그 판에 한해 교체할 수 있고, 뺀 것은 그 판에 다시 낄 수 없다. |
| 획득 | ① 자격 승급 확정 ② 보스 처치 시 가끔(미보유 우선) ③ 아티팩트 조각 + 소환 인장으로 지정 교환 |
| 중복 | 아티팩트 조각으로 바뀐다. |
| 성장 | 끼고 보스 3회 승리하면 **각성**(대가 완화나 트리거 확장 중 하나. 수치 배증 없음) |
| 공명(세트) | 같은 계열(마도서, 반지·부적, 오브, 받침, 등불·종 등) 3개를 낄 수 없으므로(최대 3칸), 2개를 끼면 작은 공명 효과를 준다. Isaac 변신을 작게 만든 것이다. [제안] |
| 연쇄 상한 | 아티팩트가 일으킨 효과는 다른 아티팩트를 1단계까지만 다시 트리거한다. |
| 표기 | `【트리거】 효과.` 다음 줄에 `⟨대가⟩`. 2줄, 숫자 2개 이내. |

**예시 12종** (분류 / 칸 / 효과 / 대가 / 노리는 플레이)

1. **반쯤 탄 마도서** (트리거형, 보조)
   【막이 깨질 때】 이번 영창이 1턴 앞당겨진다.
   ⟨보호막 최대치 -20%⟩
   → 일부러 막을 얇게 해서 맞아 주는 플레이를 만든다. "막이 영창을 지킨다"는 기본 규칙을 뒤집어 쓴다.

2. **쌍둥이 은반지** (규칙 변경형, 주)
   마법진을 **두 개 동시에** 영창할 수 있다.
   ⟨두 영창의 턴 수가 모두 +1. 하나라도 깨지면 둘 다 깨진다⟩
   → 영창이 하나라는 전제를 깬다. 보호막 빌드와 만나면 폭주할 여지가 있다.

3. **떠도는 수정 오브** (이동·위치형, 보조)
   마법사 주위를 도는 오브. 매 턴 마법사 옆 칸 하나에 머문다. 오브가 있는 칸으로 들어오는 적의 근접 공격은 오브가 대신 맞고 1턴 동안 사라진다.
   ⟨오브가 있는 칸으로는 마법사도 이동할 수 없다⟩
   → 동시 턴에서 적이 미리 정한 행동을 위치로 비껴가게 하는 퍼즐을 만든다.

4. **예언자의 깨진 수정구** (정보형, 보조)
   【전투 시작】 그리고 3턴마다: 무작위 적 하나가 **이번 턴에 쓸 스킬**이 드러난다.
   ⟨드러난 적은 그 턴에 피해 +30%⟩
   → 숨겨진 정보를 일부 열되 그 적이 더 아프게 만든다. 심리전을 지우지 않는다.

5. **역류의 모래시계 부적** (자원 전환형, 보조)
   【되감기】 되돌리는 마법을 쓰면 그만큼 보호막을 얻는다(되돌린 턴 수 × 막 1칸).
   ⟨되돌리는 마법의 횟수 제한 -1⟩
   → 원래 강한 되돌리기에 대가와 보상을 함께 붙인다. 적은 횟수로 크게 되돌리게 유도한다.

6. **스승의 분필 받침** (규칙 변경형, 주)
   마법진 받침. 영창 중인 마법진을 **한 칸 옮길 수 있다**(이동 대신).
   ⟨이 마법진의 위력 -15%⟩
   → 지정 범위가 고정이라는 전제를 깬다. 적의 사전 확정 행동에 대응하는 수단이 된다.

7. **물 먹은 양피지 두루마리통** (트리거형, 보조)
   【스크롤 소모】 그 스크롤의 주 원소가 마법사 발밑 3×3에 남는다(젖은 칸, 불붙은 칸 등).
   ⟨이 칸들의 원소 반응은 마법사도 받는다⟩
   → 이동이 곧 원소 반응이라는 규칙과 맞물린다. 스스로 위험을 깔고 쓰는 빌드를 만든다.

8. **고요의 은종** (트리거형, 보조)
   【그림자 밖】 턴이 끝날 때 나를 칠 수 있는 적이 없으면 다음 영창 턴 수가 -1이 된다.
   ⟨빛나는 적이 셋 이상이면 영창 중 이동 불가⟩
   → 사거리 그림자 정보를 "숨는 플레이"의 보상으로 바꾼다.

9. **피로 쓴 계약서 문장(紋章)** (자원 전환형, 주)
   보호막이 없을 때 실제 체력을 잃어도 **영창이 깨지지 않는다**.
   ⟨잃는 체력 2배, 전투 중 회복 불가⟩
   → 핵심 규칙(체력이 닳으면 깨진다)을 정면으로 바꾸는 맞교환. StS 보스 유물급이다.

10. **원소 순례자의 묵주** (트리거형, 보조)
    【반응】 원소 반응이 일어날 때마다 묵주 알 1개(최대 4). 4개가 되면 다음 마법진에 **반응에 쓰인 두 원소 중 하나**의 문양이 이번 전투 동안 덧붙는다.
    ⟨묵주 알은 피격 시 모두 흩어진다⟩
    → 판 안 임시 문양 보상과 겹쳐 연쇄 빌드의 씨앗이 된다(연쇄 상한 1단계가 적용된다).

11. **거꾸로 꿰맨 견습생 마도서** (규칙 변경형, 주)
    전투가 시작될 때 행동 순서를 **뒤집는다**. 원래 마지막이던 쪽이 먼저 움직인다.
    ⟨매 전투 첫 턴에는 영창을 시작할 수 없다⟩
    → 순서 정보와 사전 확정 행동의 관계를 바꾼다. 빠른 적이 많은 판에서 빛난다.

12. **이끼 낀 수호 석상(작은 소환 받침)** (이동·위치형, 보조)
    【전투 시작】 판의 무작위 빈칸에 깨지지 않는 석상을 세운다. 석상 뒤 칸은 사거리 그림자가 끊긴다(엄폐).
    ⟨석상은 내 투사 마법도 막는다⟩
    → 7×7 가변 판에 지형 하나를 더해 위치 싸움의 축을 만든다.

**공명 예시 [제안]** (같은 계열 2개)
- 마도서 2개(1, 11): 첫 영창의 컷신이 끝나면 영창 1턴 단축.
- 오브·석상 계열 2개(3, 12): 오브가 석상 칸에 겹치면 석상 주위 1칸에 막.

**의도적으로 빈 자리(사기 조합 씨앗)**: 9(체력이 닳아도 안 깨짐)는 2(동시 영창) 및 1(막이 깨지면 가속)과 만나면 "막 없이 두 대마법을 밀어붙이는" 극단 빌드가 된다. 7과 10은 스크롤 하나로 반응판을 깔고 묵주를 채우는 순환을 만든다. 이 조합들을 금지 목록에 넣지 않는다. 주 칸 1개 규칙(2와 9가 둘 다 주 칸)이 첫 번째 일반 제한이 된다. 2와 9를 함께 쓰는 길은 막혀 있고, 1+9, 2+1, 7+10처럼 보조 칸끼리 이어지는 우회로를 플레이어가 찾는 것은 허용한다.

### Gaps
- 칸 수, 각성 조건(보스 3회), 각종 % 수치는 **모두 추정값**이다. 시제품 플레이테스트로 정해야 한다.
- 원소 반응표가 아직 [미정]이라 7, 10의 실제 위력은 반응표가 정해진 뒤에 맞춰야 한다.
- 5(되감기)는 "되돌리는 마법"의 횟수와 비용이 [미정]인 상태에서 설계했다.
- 마법봉의 역할이 [미정]이다(GAME_DESIGN §4). 아티팩트의 "받침" 계열(6, 12)과 겹칠 수 있으니 함께 정할 것.
