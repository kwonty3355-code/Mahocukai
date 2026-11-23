# 다중 모드 경제 설계: 모드별 고유 보상, 소스/싱크, 모드 중복과 보상 인플레이션 방지

> 조사 메모 (2026-11-23). 이 세션의 네트워크 제한으로 다음 호스트는 본문 fetch가 막혀 **검색 스니펫만** 사용했다: bungie.net, gamedeveloper.com, medium.com, unity.com, pocketgamer.biz, machinations.gitbook.io, wiki.pokerogue.net. 따라서 아래 인용은 대부분 검색 결과 요약/스니펫 기반이며, 정확한 수치는 원문 확인이 필요하다. 출처 상당수가 팬 위키, 공략 사이트, 포럼이라는 점도 감안할 것.

## 1. 활동이 많은 게임은 활동마다 어떻게 서로 다른 보상을 배정하는가 (Genshin, Destiny 2, Monster Hunter, Warframe, PoE, Stardew, PokeRogue, Hades, FFXIV)

### Takeaway
성공 사례의 공통 패턴은 "활동 = 특정 성장 축의 독점 공급원"이고, 그 위에 (a) 모든 활동이 조금씩 주는 공용 화폐, (b) 활동 간 교차를 강제하는 레시피/번들 싱크를 얹는 3층 구조다. 실패 사례(Destiny 2 스트라이크, Stardew 후반 골드)는 "그 활동만 주는 것"이 사라지거나 공용 화폐의 싱크가 고갈될 때 생긴다.

### Cited Findings
**Genshin Impact: 축별 분리 + 공유 스태미나**
- 성유물(Artifact) 비경은 매일 같은 성유물을, 특성/무기 비경은 요일별로 다른 재료를 드롭한다. 무기 돌파 재료는 Domains of Forgery, 캐릭터 돌파 재료는 Domains of Mastery로 분리되며, 일요일엔 모든 재료가 열린다 — [Prima Games](https://primagames.com/gaming/genshin-impact-abyssal-domains-guide-artifacts-materials/2), [Fextralife Wiki](https://genshinimpact.wiki.fextralife.com/Domains)
- 지역마다 무기 비경 1개, 특성 비경 1개, 별도의 성유물 비경이 있다(예: 몬드 Cecilia Garden=무기, Forsaken Rift=특성) — [Fextralife Wiki](https://genshinimpact.wiki.fextralife.com/Domains)
- 요일 배정은 출처마다 다르게 기술됨(3일 주기 설명 vs 수/토 예시) — [bittopup](https://news.bittopup.com/news/genshin-impact-domain-schedule-complete-3-day-rotation); [ggrecon](https://cms.ggrecon.com/guides/genshin-impact-talent-books-how-to-get/)
- 모든 비경, 지맥(Ley Line), 보스가 **하나의 Original Resin 예산**을 공유한다. 지맥/비경 20, 보스 40(출처 간 수치 상이), 주간 보스는 처음 3회 30, 이후 60으로 비용이 증가한다. 지맥은 보상을 받지 않고 클리어만 할 수도 있다 — [Sportskeeda](https://www.sportskeeda.com/esports/genshin-impact-resin-types-regeneration-time-use-guide), [Prima Games](https://primagames.com/gaming/genshin-impact-guide-ley-line-outcrops-elites-domains-resin)
- 레진 상한은 160(이전 120으로 기술한 구버전 출처 존재) — [Sportskeeda](https://www.sportskeeda.com/esports/how-use-original-resin-genshin-impact)

**Destiny 2: 공유 풀 + 활동 독점 루트, 그리고 중복 실패**
- 활동별로 레전더리 / 파워풀 Tier1 / Tier2 / 피너클 중 하나를 준다 — [Game Rant](https://gamerant.com/destiny-2-pinnacle-reward-lightfall-light-level-powerful-engram-duplicate/)
- Bungie 개발자 글: "Pinnacle PVE"(던전 등 고난도 PvE)와 "Pinnacle PVP"(Trials 등) 공유 풀을 두되, 이벤트 등 일부 활동에는 개별 무기/방어구 세트 같은 독점 추가물을 둔다 — [Bungie Developer Insight: Core Game Rewards](https://www.bungie.net/7/en/News/article/coregame_rewards) (본문 차단, 스니펫)
- 비판: 스트라이크는 "3회 완료 시 주간 피너클 1개 외에는 플레이할 동기가 없다" — [Twinfinite](https://twinfinite.net/2022/09/destiny-2-strikes-are-pointless-heres-how-to-fix-them/)
- 고난도 활동에서 중복 보상이 나오기 시작할 때 문제가 생김 — [Game Rant](https://gamerant.com/destiny-2-pinnacle-reward-lightfall-light-level-powerful-engram-duplicate/)
- Year 4 변경: Trials, 레이드, 스트라이크 등 코어 플레이리스트, 시즌 활동 등 거의 모든 활동에 새 보상(플레이리스트 독점 포함) 추가 — [GamesRadar](https://gamesradar.com/massive-destiny-2-loot-changes-include-trials-adept-weapons-pinnacle-cosmetics-and-playlist-exclusives)

**Monster Hunter: 대상별 고유 소재**
- 코어 루프: 몬스터를 잡고 소재를 갈무리해 장비를 만들고 더 강한 몬스터(또는 같은 몬스터를 더 잘)로 — [PC Gamer](https://www.pcgamer.com/how-monster-hunter-world-makes-grinding-fun)
- 희귀 소재는 부위 파괴/절단, 포획 vs 토벌 등 "어떻게 싸웠는가"에 따라 달라진다 — [PC Gamer beginner's guide](https://www.pcgamer.com/au/monster-hunter-world-beginners-guide-to-weapons-armor-hunting-and-more)
- 거의 모든 몬스터의 소재가 장비 외에도 장식주/호석 등 최소한의 부가 용도를 갖도록 노력함 — [PC Gamer review](https://pcgamer.com/monster-hunter-world-review)
- 반론: Wilds에서 "한두 번 잡으면 과한 장비가 나와 도전이 없다" — 고유 보상이라도 너무 빨리 포화되면 동기 소멸 — [Steam Community](https://steamcommunity.com/app/2246340/discussions/0/599646660884169288)

**Warframe: 장소/미션 유형/적 세력별 자원**
- Orokin Cell 외 대부분의 자원은 특정 행성에서만 나온다 — [Warframe Wiki: Resources](https://wiki.warframe.com/Resources)
- 일부 고유 자원은 일반 적이 아니라 특정 미션 유형의 보상(예: Cryotic은 어느 행성이든 Excavation 미션 보상) — [Warframe Wiki](https://wiki.warframe.com/Resources)
- 세력 기반 예외: Oxium은 Corpus와 싸우는 미션 어디서나 — [Warframe Wiki](https://wiki.warframe.com/Resources)

**Path of Exile: 리그 메카닉마다 고유 제작 화폐**
- Delve = 화석/공명기(fossil/resonator), Harvest = Lifeforce, Expedition = 전용 화폐 + Logbook. 각 메카닉이 자체 제작 축을 가진다 — [pathofexile.com/delve](https://pathofexile.com/delve), [pathofexile.com/harvest](https://pathofexile.com/harvest), [PoE Wiki: Expedition](https://www.poewiki.net/wiki/Expedition)
- Delve는 Voltaxic Sulphite를 소모해 더 깊이 들어가 Azurite와 화석을 얻는 구조(입장 연료 = 별도 자원) — [timesaver.gg](https://timesaver.gg/blog/poe-3-29-delve-farming-guide) (상업 공략, 신뢰도 낮음)
- 각 리그 메카닉에는 연관 피너클 보스가 있어 고유 아이템을 준다; Atlas 패시브로 플레이어가 선호 메카닉을 특화한다 — [Sportskeeda: PoE2 Atlas](https://sportskeeda.com/mmo/path-exile-2-atlas-system-explained), [Sportskeeda: 3.26 Atlas strategies](https://www.sportskeeda.com/mmo/top-3-atlas-strategies-currency-farming-path-exile-3-26)

**Stardew Valley: 번들이 모든 활동을 강제 교차**
- 커뮤니티 센터 6개 방, 30개 번들. 방별 주제: Pantry=작물/가공품, Crafts Room=채집, Fish Tank=낚시, Boiler Room=광물, Bulletin Board=선물/요리, Vault=골드 — [Stardew Valley Wiki: Bundles](https://stardewvalleywiki.com/Bundles), [Game Rant](https://gamerant.com/stardew-valley-community-center-guide/)
- 일부 번들은 특정 장소/시간/계절 조건(예: 철갑상어는 여름·겨울 산 호수 6am–7pm) — [Dot Esports](https://dotesports.com/stardew-valley/news/stardew-valley-community-center-how-to-complete-all-bundles-and-rewards)
- 방은 번들 완료 수에 따라 단계적으로 열린다(Vault는 4개 완료 후, 마지막) — [Stardew Valley Wiki](https://stardewvalleywiki.com/Bundles)

**PokeRogue: 런 결과 → 메타 화폐 3종**
- 바우처 4종: Regular(알 1), Plus(5), Premium(10 + 레어 확정), Gold(25 + 에픽 확정). Regular 10장 = 레어 확정 — [PokeRogue Wiki: Eggs](https://wiki.pokerogue.net/gameplay:eggs) (스니펫)
- 체육관 관장/사천왕 첫 격파 시 Plus, 이후 Regular; Gold는 Classic 첫 클리어 — [win.gg](https://win.gg/news/how-to-get-vouchers-and-hatch-eggs-in-pokerogue/), [pokemoncoders](https://www.pokemoncoders.com/how-to-use-egg-vouchers-in-pokerogue/) (출처 간 상이)
- 알 천장(pity) 시스템이 있어 운이 나쁠 때 미보유 포켓몬/희귀도 확률을 높인다 — [PokeRogue Wiki](https://wiki.pokerogue.net/gameplay:eggs)
- Luck 스탯: 파티 내 이로치 등급에 따라 +1/+2/+3, 희귀 포켓몬 조우와 아이템 보상 품질에 영향 — [PokeRogue FAQ](https://wiki.pokerogue.net/gameplay:faq), [GameLeap](https://gameleap.com/articles/best-pok-rogue-tips-and-tricks-candies-shinies-and-rare-pok-mon)
- 이로치 포획/부화 시 사탕 5x/10x/20x, 일반 부화 2개 — [PokeRogue FAQ](https://wiki.pokerogue.net/gameplay:faq), [digistatement](https://digistatement.com/pokerogue-how-to-get-candies/)

**Hades: 싱글플레이 로그라이트의 화폐 = 싱크 1:1 대응**
- Chthonic Key → 무기 해금/거울 슬롯; Darkness → Mirror of Night 재능; Gemstones → 하우스 리노베이션; Nectar → NPC 호감도/Keepsake; Titan Blood → 무기 Aspect — [Prima Games](https://primagames.com/gaming/hades-items-guide-nectars-keys-ambrosia-titan-blood-and-more/2), [Hades Fandom: Chthonic Key](https://hades.fandom.com/wiki/Chthonic_Key)
- 키 사용 가능 총량: 거울 65 + 무기 24 = 89 (유한 싱크) — [Prima Games](https://primagames.com/gaming/hades-items-guide-nectars-keys-ambrosia-titan-blood-and-more/2)
- Titan Blood의 주 공급원은 보스(난이도 높은 콘텐츠 = 최상위 화폐). Wretched Broker에서 하위 화폐 → 상위 화폐 교환 가능(비율은 출처마다 상이) — [Prima Games](https://primagames.com/gaming/hades-items-guide-nectars-keys-ambrosia-titan-blood-and-more/2), [gamepressure](https://www.gamepressure.com/hades/charons-obol-nectar-and-darkness/z6d9c6)

**FFXIV: 공용 화폐(Tomestone) 모델**
- 거의 모든 듀티 룰렛에서 공용 토큰을 주되 주 450 상한, 보유 2,000 상한. 새 토큰이 나오면 기존 상한 토큰은 무상한으로 바뀌고 옛 무상한 토큰은 퇴역 — [FFXIV Console Games Wiki](https://ffxiv.consolegameswiki.com/wiki/Allagan_Tomestones), [Game8](https://game8.co/games/Final-Fantasy-XIV/archives/463176)

### Inferences
- 고유 보상의 단위는 "자원 종류"보다 **"성장 축(axis)"**이 더 견고하다. Genshin은 성유물(랜덤 옵션 장비 축)/특성/무기 축을 분리했고, Hades는 화폐마다 해당 축 하나만 판다. Mahocukai에서 축 = {마력 연료, 주문 튜닝, 주문 설계 재료(문자/글리프), 자격 등급, 사역마}로 1:1 대응시키면 된다.
- PoE/Delve의 "입장 연료(Sulphite) ≠ 보상(화석)" 구조는 손 작업 마나를 **다른 모드의 연료**로 쓰는 설계에 직접 대응된다. 연료 모드가 보상 모드를 대체하지 않으므로 중복이 원천 차단된다.
- Monster Hunter / Warframe처럼 "어떻게/어디서/누구와 싸웠는가"에 따라 드롭을 바꾸면 한 모드 안에서도 하위 목표가 생긴다(탐험 지역 × 촉매 속성 등).
- Destiny 2 스트라이크 교훈: 모드에 **주간 체크박스형 보상만** 있고 고유 아이템이 없으면 "체크 후 이탈"이 된다.

### Gaps
- Bungie 원문(보상 철학 글)과 Game Developer 원문은 네트워크 차단으로 직접 확인 못 함.
- Genshin 요일 배정 정확한 표는 출처 간 불일치. Capcom의 공식 설계 의도 자료는 찾지 못함.
- PokeRogue 바우처 획득처는 버전별로 바뀌어 출처 간 불일치.

## 2. 소스/싱크 프레임워크와 화폐 개수 모범 사례 (Faucets & Drains, Machinations, 화폐 난립 방지)

### Takeaway
경제는 Source(생성) → Pool(보관) → Converter(변환) → Drain(소멸)의 흐름으로 모델링하고, 화폐는 "고유한 결정을 만드는가"를 기준으로 최소화한다. 화폐마다 보이는 공급처 1+와 소진처 1+가 없으면 제거 대상이다.

### Cited Findings
- Machinations 노드: Source는 자원을 생성(위쪽 삼각형), Drain은 자원을 소비/파괴, Converter는 한 자원을 다른 자원으로 변환(예: 풍차가 밀→밀가루). Pool, Trader, Gate도 있음. Joris Dormans의 작업이 기반이며 Ernest Adams의 경제 어휘(resources, sources, drains, converters, traders)를 계승 — [Machinations Docs: Framework Basics](https://machinations.gitbook.io/docs/getting-started/framework-basics) (스니펫), [Game Mechanics: Advanced Game Design ch.5 sample (Pearson)](https://ptgmedia.pearsoncmg.com/imprint_downloads/peachpit/peachpit/samplechapters/0321820274/0321820274_gamemechanics_ch05section.pdf), [O'Reilly ch.9 Building Economies](https://www.oreilly.com/library/view/game-mechanics-advanced/9780132946728/ch09.html)
- Faucet = 가치가 경제에 들어오는 지점, 생성 속도를 결정(고블린 골드 드롭, 퀘스트 XP, 출석 보상). 소스 > 싱크면 인플레이션, 싱크 > 소스면 디플레이션 — [DEV Community: sources, sinks, loops](https://dev.to/hiroshi_takamura_c851fe71/how-to-design-a-game-economy-sources-sinks-loops-and-balance-j05), [Unity economy guide](https://unity.com/resources/game-economy-design-guide) (스니펫)
- 싱크가 부족하면 잉여 화폐가 쌓여 화폐가 무의미해진다; 반대로 너무 인색하면 진행이 막힌다 — [Unity guide](https://unity.com/resources/game-economy-design-guide), [Sandbox forum](https://forum.sandbox.game/t/game-economy-faucets-and-sinks/141)
- 플레이어는 최소 저항 경로로 최적화한다: 최고 효율 faucet을 과용하고 싱크는 최소화 — [DEV Community](https://dev.to/hiroshi_takamura_c851fe71/how-to-design-a-game-economy-sources-sinks-loops-and-balance-j05)
- 가장 흔한 싱크는 진행(progression)에 묶인 것 — [Sandbox forum](https://forum.sandbox.game/t/game-economy-faucets-and-sinks/141)
- 한정 이벤트가 큰 화폐를 싱크 없이 주입하면 이벤트보다 오래 지속되는 인플레이션 스파이크 — [DEV Community](https://dev.to/hiroshi_takamura_c851fe71/how-to-design-a-game-economy-sources-sinks-loops-and-balance-j05)
- 모니터링 지표: 인플레이션율, 화폐 회전 속도, sink-to-faucet 비율, days-of-currency-on-hand 등 — [Unity guide part 3](https://unity.com/how-to/design-balanced-in-game-economy-guide-part-3) (스니펫)
- 관련 GDC: "Economic Balancing and Improved Monetization through Clever Sink Design" (GDC 2014 F2P Summit) — [GDC Vault](https://gdcvault.com/play/1020524/Economic-Balancing-and-Improved-Monetization), [Slides](https://fr2.slideshare.net/vlehdonv/economic-balancing-and-improved-monetization-through-clever-sink-design-gdc-2014-f2p-summit) (제목/설명만 확인)
- Simon Ludgate, "The F-Words of MMOs: Faucets" (Game Developer) — [Game Developer](https://gamedeveloper.com/design/the-f-words-of-mmos-faucets) (본문 차단)

**화폐 개수**
- WoW: Wowhead 기준 1,203종 화폐(퇴역/단일 용도 포함) — 정리하지 않는 누적의 상징 — [PC Gamer](https://pcgamer.com/games/world-of-warcraft/world-of-warcraft-has-a-currency-problem-more-than-500-kinds-of-tender-can-currently-be-used-in-the-20-year-old-game)
- 단일 화폐는 오히려 플레이어 자유도를 높인다(모아두면 무엇이든 살 수 있음); 다중 화폐는 추적이 어렵고 혼란. 또한 엔드게임 화폐가 결정론적 보상 쪽으로 너무 기울게 만들 수 있다 — [Giant Bomb blog: Money Troubles](https://www.giantbomb.com/profile/gamer_152/blog/money-troubles-multiple-currencies-in-mmos/254259/)
- 추가 화폐는 하드 화폐를 뿌리는 것보다 원하는 행동을 더 통제된 방식으로 보상할 수 있으나 접근성과 균형 필요. "잘 설계된 화폐는 흥미로운 상호작용이나 결정을 만든다"(Ikariam 소프트 화폐 6종 예) — [Pocketgamer.biz Mobile Mavens](https://www.pocketgamer.biz/mobile-mavens/59105/is-the-rise-of-engagement-focused-in-game-currencies-confusing-player/) (스니펫)
- 최소한의 화폐 복잡도(획득형 1 + 구매형 1)가 이해하기 쉽다 — [Singular: in praise of simplicity](https://www.singular.net/?p=49166)
- 포켓몬 유나이트: 트레이너용/포켓몬용 코스메틱 화폐 분리가 중복이라는 비판 — [Yahoo/Malaysia](https://malaysia.news.yahoo.com/comment-pokemon-unite-has-too-many-currencies-071252064.html); GW2 포럼은 화폐 통합 요구 — [GW2 forum](https://en-forum.guildwars2.com/topic/98344-unify-excess-for-currency-suggestion)
- 딜레마: "장비와 코스메틱에 같은 화폐를 쓰면 불평, 분리하면 화폐가 너무 많다고 불평" — [Blizzard forums](https://us.forums.blizzard.com/en/wow/t/somanycurrencys/1954096)

### Inferences
- 실무 체크리스트(화폐 1종당): ① 고유한 소스(모드) ② 고유한 싱크(성장 축) ③ 그 화폐로만 할 수 있는 결정 ④ 상한/소진 경로(포화 대비). 하나라도 없으면 기존 화폐에 합치거나 "아이템"으로 강등.
- "화폐"와 "아이템"을 구분하라: 등급/랜덤 옵션이 있는 촉매(Catalyst)와 주문 스크롤은 화폐가 아니라 **인벤토리 아이템**이므로 상단 HUD 화폐 수를 늘리지 않는다. HUD에 상시 노출할 화폐는 마나, 계약서(contracts), 소환인장(seals) 정도로 3종 이내가 적당.
- Converter를 적극 활용: 스크롤 → 분해 → 글리프, 중복 촉매 → 분해 → 정수(또는 계약서 소량) 같은 변환기가 "남는 보상"을 다른 축으로 흘려 인플레이션을 흡수한다.
- Hades의 "하위 → 상위 교환소(Wretched Broker)"는 막힌 축을 풀어주는 안전밸브. 단, 비율은 의도적으로 나쁘게(직접 모드 플레이가 항상 효율적이도록).

### Gaps
- Machinations 공식 문서, Unity 가이드, Pocketgamer 원문은 차단되어 스니펫으로만 확인.
- "싱글플레이 무과금 게임의 적정 화폐 수"에 대한 정량 연구는 찾지 못함(대부분 F2P/MMO 맥락).

## 3. 함정: 지배적 활동이 다른 모드를 무의미하게 만듦, 보상 인플레이션, 일일 상한의 숙제화, 무과금 싱글플레이 페이싱

### Takeaway
플레이어는 반드시 가장 효율적인 루트로 수렴하므로(“optimize the fun out”), 모드 간 보상이 **대체 가능(fungible)**하면 하나만 남는다. 해법은 비대체성(고유 축) + 공유 화폐에는 체감/상한 + 상한은 '강제 출석'이 아닌 '누적 가능한 여유'로 설계하는 것.

### Cited Findings
- Soren Johnson, "Water Finds a Crack"(2011): 기회가 주어지면 플레이어는 게임에서 재미를 최적화해 없애버린다; 위험은 하나의 지배 전략이 다른 모든 전략을 밀어내는 것. 다만 모든 익스플로잇을 제거하려는 과잉 교정도 경계 — 그 전략이 다른 플레이 스타일을 밀어내는지, 재미있는 대안인지로 판단 — [Designer Notes](https://www.designer-notes.com/game-developer-column-17-water-finds-a-crack/)
- 최선의 플레이 방법이 명확해지면 게임 자체로서의 흥미가 사라진다; 선택지 확대와 무작위성이 대응책 — [Game Developer: The Psychology of Choice](https://gamedeveloper.com/design/the-psychology-of-choice) (스니펫)
- 과잉정당화 효과: 외적 보상이 연결되면 내적 동기가 감소 — [Game Developer: Reward Fatigue](https://gamedeveloper.com/business/reward-fatigue) (스니펫); 보상 추구가 재미 추구를 대체 — [Massively OP](https://massivelyop.com/2019/03/21/vague-patch-notes-finding-motivation-within-mmos/)
- Stardew 후반: 어느 시점 이후 돈은 목표가 아니게 되고, 수입이 흐르기 시작하면 할 게 없다고 느낌 — [PC Gamer](https://www.pcgamer.com/what-to-do-in-stardew-valleys-endgame); 플레이어들이 후반 골드 싱크를 요구, 후반 콘텐츠가 Qi Gem 등 다른 화폐로 가격 책정되어 골드가 무용 — [Steam discussion](https://steamcommunity.com/app/413150/discussions/0/3059619574654262497); 고가 싱크(2,000,000g Return Scepter, 1,000,000g 오벨리스크)는 존재 — [TheGamer](https://www.thegamer.com/stardew-valley-most-expensive-items/)
- 스태미나 상한은 고정 콘텐츠를 더 많은 날로 늘리는 장치이자, 동시에 플레이어의 과몰입 방지 장치로 평가되기도 함 — [hostedgg](https://hostedgg.com/blog/gacha-stamina-energy-daily-cap-culture)
- "하루 10분 레진 쓰고 일일 숙제" 식 엔드게임에 대한 불만 — [Steam Community](https://steamcommunity.com/app/2668080/discussions/0/4036979087648160420); "넘치지 않게 스태미나 소비, 출석 수령, 앱 종료" 루틴 = 죄책감/의무 — [hostedgg: daily login guilt](https://hostedgg.com/blog/gacha-daily-login-guilt-culture)
- 강제 플레이는 윤리적 설계가 아니며 일일 자원 수집 의무 제거를 주장 — [Game Developer: concerns of covering gacha games](https://www.gamedeveloper.com/design/the-concerns-of-covering-gacha-games) (스니펫)
- DiGRA 논문: 일일 로그인/스태미나가 플레이어의 일상 시간 구조를 형성(하루 계획을 그에 맞춤) — [DiGRA](https://dl.digra.org/index.php/dl/article/download/2743/2729/2789)
- Dragalia Lost 한정 이벤트 번아웃 — [Destructoid](https://www.destructoid.com/dragalia-losts-limited-time-events-burned-me-out-hard/)
- 방치 vs 능동: 능동 플레이가 항상 방치보다 더 보상받아야 하며 방치 진행은 계수로 감속 — [Eric Guan, Idle Game Design Principles](https://ericguan.substack.com/p/idle-game-design-principles); Egg, Inc.은 오프라인 2시간 상한, Clicker Heroes는 무상한이지만 오프라인 계산에 능동 스킬 미반영 — [Game Developer: Math of Idle Games III](https://gamedeveloper.com/design/the-math-of-idle-games-part-iii), [Clicker Heroes blog](https://blog.clickerheroes.com/offline-progression-in-clicker-heroes/embed/); 오프라인 시간을 최대 52시간까지 업그레이드 가능하게 한 사례 — [Four Divine Abidings devlog](https://fourda.itch.io/four-divine-abidings-full/devlog/981439/active-or-idle)
- 생산 타이머를 엇갈리게(예: 소 20분 상한) 해 복귀 빈도를 점차 줄이고, 일부를 방치해도 다른 것을 최적화할 수 있게 — [Eric Guan](https://ericguan.substack.com/p/idle-game-design-principles)
- FFXIV: 공용 토큰 주간 상한 450을 "며칠 룰렛만 해도 쉽게 채움" — 상한이 낮은 부담의 주간 목표로 작동 — [Siliconera](https://www.siliconera.com/?p=1045277)

### Inferences
- **지배 모드 위험 진단**: 각 모드의 "공용 화폐(계약서)/분" 효율을 표로 만들어, 어느 한 모드가 계약서 효율 1위이면서 고유 보상도 가진다면 그 모드가 다른 모드를 흡수한다. 계약서는 모드별 **첫 N회/주간 목표 보너스** 위주로 주고 반복 파밍 효율은 평탄화.
- **방치 모드는 절대 다른 모드의 고유 축을 생산하지 않는다**(능동 > 방치 원칙). 방치는 마나 소량 + 저장 상한(예: 8–12시간)으로 "돌아올 이유"만 만든다.
- **숙제화 회피(무과금 싱글)**: 과금 압박이 없으므로 일일 상한은 수익 목적이 아니라 페이싱 목적뿐이다. 따라서 (a) 일일 대신 주간/누적형 상한(놓쳐도 이월), (b) 상한 초과분은 0이 아니라 체감(예: 50%), (c) 출석 보상 대신 "휴식 보너스(rested XP)형" 누적이 적합.
- **보상 인플레이션**: Stardew 골드처럼 공용 화폐가 후반에 무의미해지지 않도록 계약서/마나에 **무한 확장형 싱크**(사역마 돌파 5단계, 주문 각인 재굴림, 고난도 집중 전투 입장 연료 등)를 연결. 동시에 이벤트성 대량 지급은 피한다.
- 로테이션 픽업(2주)은 FFXIV 토큰 교체처럼 "이전 것은 상시 풀로 이관"하면 FOMO 압력을 낮출 수 있다.

### Gaps
- 무과금 싱글플레이 게임에서 일일 상한 유무에 따른 리텐션/만족도 정량 데이터는 찾지 못함.
- Game Developer "Math of Idle Games", "Reward Fatigue" 원문 미확인(차단).

## 4. 구체 권고: 5개 모드 각각의 고유 1차 산출물, 공용 2차 산출물(계약서), 모드 간 이동을 끌어내는 싱크를 담은 경제 표

### Takeaway
Mahocukai의 각 모드를 "하나의 성장 축의 독점 공급자"로 고정하고, 계약서(공용)는 모든 모드에서 소량·체감형으로, 핵심 싱크(주문진 제작/강화)는 반드시 2개 이상 모드의 산출물을 요구하는 레시피로 만들면 Genshin식 축 분리 + Stardew식 교차 번들 + PoE식 연료/보상 분리를 동시에 얻는다.

### Cited Findings
(이 섹션의 근거는 1–3절의 사례에 기반한다.)
- 연료와 보상 분리: Delve의 Sulphite(입장 연료) vs 화석(보상) — [timesaver.gg](https://timesaver.gg/blog/poe-3-29-delve-farming-guide), [pathofexile.com/delve](https://pathofexile.com/delve)
- 교차 강제 싱크: Stardew 커뮤니티 센터 번들이 농사/채집/낚시/광물/요리/골드를 모두 요구 — [Stardew Valley Wiki](https://stardewvalleywiki.com/Bundles)
- 고유 축 분리 + 공유 예산: Genshin 성유물/특성/무기 비경과 공유 Resin — [Fextralife](https://genshinimpact.wiki.fextralife.com/Domains), [Prima Games](https://primagames.com/gaming/genshin-impact-guide-ley-line-outcrops-elites-domains-resin)
- 화폐 ↔ 싱크 1:1 + 최상위 화폐는 최고 난도에서: Hades Titan Blood(보스) — [Prima Games](https://primagames.com/gaming/hades-items-guide-nectars-keys-ambrosia-titan-blood-and-more/2)
- 공용 토큰 + 주간 상한: FFXIV Tomestone — [FFXIV Wiki](https://ffxiv.consolegameswiki.com/wiki/Allagan_Tomestones)
- 천장(pity) + 런 결과 → 메타 화폐: PokeRogue 바우처/알 천장/사탕 — [PokeRogue Wiki](https://wiki.pokerogue.net/gameplay:eggs), [PokeRogue FAQ](https://wiki.pokerogue.net/gameplay:faq)
- 능동 > 방치 — [Eric Guan](https://ericguan.substack.com/p/idle-game-design-principles)

### Inferences

**경제 표 초안 (Mahocukai)**

| 모드 (주의력) | 고유 1차 산출물 (이 모드만 생산) | 성장 축 / 주 싱크 | 공용 2차 (계약서) | 이 모드가 소비하는 타 모드 산출물 (교차 싱크) |
|---|---|---|---|---|
| 방치 (최소) | 소량 마나 + "잔향"(저장 상한 8–12h, 체감) | 없음(보조 연료) | 극소량, 일일 아님 | 사역마 배치(가챠 산출) → 방치 효율/종류 변경 |
| 손 작업 (애니 시청) | **마나** (범용 연료) | 모든 모드 입장/제작 연료 | 소량, 세션 목표 달성 시 | 촉매 슬롯(탐험) → 손 작업 결과 품질 변화 |
| 반집중 탐험 | **촉매(Catalyst)**: 등급 보석 + 랜덤 옵션, 주문 튜닝 | 주문진 튜닝 축(Genshin 성유물 대응) | 소량, 지역 첫 발견 보너스 | 마나(탐험 랜턴/스텝 연료), 사역마(탐험 동행 → 지역/속성별 드롭 편향) |
| 집중 9x9 로그라이크 | **주문 스크롤 → 분해 → 글리프**, **자격 등급 승급** | 주문진 설계 축(글리프 = 설계 어휘) + 콘텐츠 해금 | 중간, 주간 목표/첫 클리어 | 마나(입장/재도전), 촉매(빌드 튜닝), 사역마(전투 편성) |
| 사역마 가챠 | **사역마**(기사~왕 5등급, 돌파 5단계) | 전투/탐험/방치 보조 축 | 계약서 소비(싱크), 소환인장 누적(천장 교환) | 계약서(모든 모드), 중복 → 돌파 재료 |

**설계 규칙**
1. **One mode, one axis**: 위 표 1차 산출물은 다른 모드에서 절대 드롭하지 않는다(교환소 예외는 비효율 비율로만, Hades Broker 식).
2. **핵심 싱크는 다중 모드 레시피**: 주문진(마법진) 각인/강화 = 글리프(집중) + 촉매(탐험) + 마나(손 작업). 기둥 "마법진 설계"가 세 모드를 동시에 소비하므로 어느 모드도 중복이 아니다(Stardew 번들 원리).
3. **연료/보상 분리**: 마나는 보상이 아니라 연료. 손 작업이 지배 모드가 되지 않도록 마나만으로 살 수 있는 "최종 파워"는 두지 않는다(PoE Sulphite 원리). 반대로 마나 싱크는 무한형(재도전, 촉매 재굴림, 탐험 연장)으로 두어 후반에도 가치 유지(Stardew 골드 교훈).
4. **계약서 효율 평탄화**: 모드별 계약서는 "첫 클리어/주간 목표/마일스톤" 중심, 반복 파밍 효율은 체감. 계약서/분이 어느 한 모드에서 압도적이면 그 모드가 가챠 경로를 독점한다. 주간 누적 상한(이월 가능) 권장(FFXIV식이되 놓쳐도 손해 적게).
5. **가챠는 싱크이자 교차 동력**: 사역마가 각 모드에 서로 다른 보너스를 주도록(예: 기사 계열 = 집중 전투, 백작 계열 = 탐험 드롭 편향, 왕 계열 = 방치 효율) 설계하면 가챠 결과가 다시 다른 모드를 당긴다. 소환인장 천장 교환은 PokeRogue/알 천장처럼 운 보정 장치로.
6. **모드 내 하위 다양성**: 탐험 드롭은 지역/몬스터 종류/처치 방식에 따라 촉매 속성 편향(Warframe 행성, MH 부위 파괴 원리) → 같은 모드 안에서도 목표가 갈린다. 집중 모드 스크롤은 클리어 방식(무피해/턴 수 등)에 따라 희귀 글리프 확률 변화.
7. **방치 모드는 다른 축을 대체하지 않는다**: 능동 > 방치. 방치는 "돌아올 이유"(소량 마나, 사역마 파견 결과 알림)만 제공.
8. **포화 대비 변환기**: 중복 촉매 → 분해(촉매 정수) → 옵션 재굴림; 남는 스크롤 → 글리프; 중복 사역마 → 돌파. 모든 변환기는 "같은 축 안에서" 혹은 "비효율적 교환"으로만 축을 넘는다.
9. **로테이션 픽업 압박 완화**: 2주 픽업이 지난 사역마는 상시 풀/인장 교환 목록으로 이관하면 무과금 싱글 게임에서 FOMO 숙제화를 줄인다(FFXIV 토큰 교체 원리 응용).
10. **검증 방법**: Machinations 스타일로 각 모드를 Source, 주문진 제작을 Converter/Drain으로 두고, (a) 각 화폐의 sink-to-faucet 비율, (b) 모드별 계약서/분, (c) 플레이어가 한 모드만 할 때 막히는 지점(반드시 존재해야 함)을 시뮬레이션.

### Gaps
- "주의력 수준별(방치/반집중/집중) 모드에 보상을 배분하는" 직접 사례 연구는 찾지 못함 — 위 표는 사례 원리를 조합한 추론이다.
- 무과금 싱글플레이 가챠의 적정 천장/계약서 수급량 수치 근거는 미조사(다른 조사 범위일 가능성).
