# Variable-Shape Compact Battlefields for a 7x7 Focus-Mode Board (가변 7x7 전장 설계 조사)

> 조사 방법 메모: WebFetch가 이 세션 네트워크에서 차단됨 (`www.gamedeveloper.com`, `docs.google.com` → ENOTFOUND). 그래서 모든 인용은 **검색 결과 스니펫**에 근거한다. 원문 전문을 확인하지 못했으므로 인용 문구는 "스니펫 기준"으로 읽을 것. 검색은 약 17회 사용.
> 출처 등급: (P) 개발자 본인 발언/개발자 글, (R) 리뷰·프리뷰, (W) 팬 위키·가이드·비공식 노트.

---

## Q1. Board sizes and shapes in reference games — how size affects pace and readability

### Takeaway
레퍼런스 게임들은 일관되게 **"작을수록 상호작용 밀도↑, 읽기 쉬움↑"** 쪽으로 수렴했다. Into the Breach는 8x8 + 5턴, Fights in Tight Spaces 개발진은 "8x8조차 너무 크다"고 판단했고, Shogun Showdown은 4~12칸 1차원, Wildfrost는 3칸×2레인, Duelyst는 9x5. 7x7(49칸)은 ITB(64칸)와 FiTS의 "8x8보다 작게" 사이의 적정 구간이다.

### Cited Findings
- **Into the Breach**: 각 레벨은 "8x8 그리드에서 단 5턴" 동안 진행 — [PC Gamer preview (R)](https://www.pcgamer.com/uk/into-the-breach-preview)
- ITB: "환경 상호작용을 항상 보장하려면?" → **"Make the maps small."** 그리고 불가능하게 느껴지지 않게 한 것은 "AI보다 맵 디자인 덕분"이라는 개발자 발언 — [Kicktraq: The making of Into the Breach (P 인용)](https://kicktraq.com/articles/redirect/35147)
- ITB: Justin Ma — 대안(보드를 적과 위험지대로 채우는 방식)은 "needlessly complex and hard to parse" — [Game Developer (P 인용, 스니펫)](https://www.gamedeveloper.com/design/reimagining-failure-in-strategy-game-design-in-i-into-the-breach-i-)
- **Fights in Tight Spaces**: 개발진 "환경을 더 크게 하려 했지만 **고전적인 8×8 그리드조차 우리가 연출하려는 싸움에는 너무 컸다**" — [Filmstories preview (P 인용)](https://filmstories.co.uk/gaming/fights-in-tight-spaces-fights-in-spaces-which-are-tight/); 전투는 종종 "작은 방의 한 구석" — [Destructoid (R)](https://www.destructoid.com/reviews/review-knights-in-tight-spaces/); 바/교도소 샤워실/주방/차고 같은 테마 방 — [TheGamer (W)](https://www.thegamer.com/fights-in-tight-spaces-how-not-to-get-hit/)
- **Shogun Showdown**: 1차원 트랙 **4~12칸**; 적은 앞뒤에서 일렬로 옴; 적이 다음 공격을 예고(telegraph)하고 플레이어가 그 레인에서 벗어나면 빗나감; 이동·방향전환·공격 대기열·발동 모두 각각 1턴 소모; 최대 3개 타일을 대기열에 올려 한 턴에 연속 발동 — [GOG interview (P)](https://www.gog.com/news/gog_interview_learn_more_about_shogun_showdown_from_its_creator), [PC Gamer review (R)](https://pcgamer.com/games/roguelike/shogun-showdown-review)
- Shogun Showdown은 런 소요시간, 전투당 턴 수, 피격 횟수로 플레이어를 "평가"함 → 빠른 처리 자체가 보상 축 — [PC Gamer review (R)](https://pcgamer.com/games/roguelike/shogun-showdown-review)
- **Tactical Breach Wizards**: 넓은 스테이지보다 **작은 방**을 선호, "economy over all else"; 지역마다 여러 개의 작은 퍼즐박스 스테이지, 어디로 돌입(breach)하느냐가 이후 전투를 좌우 — [godisageek review (R)](https://godisageek.com/reviews/tactical-breach-wizards-review/), [Shacknews review (R)](https://shacknews.com/article/141015/tactical-breach-wizards-review-score)
- TBW: Tom Francis는 XCOM 2 전투가 "단순하고 평평한 전투 공간"에서라면 훨씬 명료할 것이라 주장하며 출발; 되감기(rewind)를 핵심 기능으로 두어 실험 장려 — [PC Gamer interview (P)](https://www.pcgamer.com/uk/tactical-breach-wizards-interview/)
- TBW: 창문이 전술의 핵심이라 후반엔 창문을 "소환"하는 캐릭터까지 등장; 레벨마다 창밖 투척 횟수 집계; 100+ 레벨 제작 과정은 GDC 2025 Level Design Summit 강연 — [PC Gamer review (R)](https://www.pcgamer.com/games/strategy/tactical-breach-wizards-review), [GDC Vault (P)](https://gdcvault.com/play/1035595/Level-Design-Summit-The-Unusual)
- **Wildfrost**: 아군·적 각각 **3칸×2레인** (진영당 6칸); 전열이 대부분의 공격을 받음; 유닛마다 카운트다운 타이머 → 언제 공격할지 보임 — [GamesRadar (R)](https://www.gamesradar.com/wildfrost-is-a-deceptively-cute-utterly-coldhearted-take-on-monster-train), [PC Gamer (R)](https://www.pcgamer.com/wildfrosts-cute-art-disguises-a-deckbuilder-thats-cold-as-ice)
- **Duelyst**: **9x5** 보드, 장군이 보드 위에 있음; 미니언 배치로 적 장군 접근 차단·이동 봉쇄; "포지셔닝이 가장 중요"; Vanar 진영은 움직이지 않는 벽 미니언으로 상대 선택지를 제한 — [PC Gamer primer (R)](https://pcgamer.com/duelyst-primer-six-things-new-players-need-to-know)
- **Darkest Dungeon**: 4개의 랭크(위치)로 스킬 사용 가능 위치/대상 위치가 결정; 일부 스킬은 앞뒤로 이동시킴; 전투 시작 시 대열이 섞일 확률 — [PC Gamer DD2 tips (R)](https://pcgamer.com/darkest-dungeon-2-tips), [Cephalofair blog](https://cephalofair.com/blogs/blog/lets-talk-darkest-dungeon)
- **Hoplite**: 작은 맵에서 전술적 이동에 집중하는 턴제 전략, 절차적 레벨 — [thinkygames (W)](https://thinkygames.com/games/hoplite/); 인디 개발자가 "작은 헥스 그리드 설계"의 영향으로 Hoplite를 언급 — [itch.io post (W)](https://itch.io/post/9697986)
- **Minichess (체스 변형)**: 5x5 Gardner 미니체스는 2013년 약해결(무승부); 약 9×10^18 합법 국면(체커급) — 보드가 작아도 깊이는 충분히 유지됨 — [Wikipedia: Minichess](https://en.wikipedia.org/wiki/Minichess)
- **Mario + Rabbids**: 반엄폐/완전엄폐가 명확히 표시되고 파괴 가능 여부가 시각적으로 명확 (가독성) — [GameSpot review (R)](https://gamespot.com/reviews/mario-rabbids-kingdom-battle-review/1900-6416743/); 대시(적을 통과하며 피해)+팀점프 이동이 "맵을 크게 확장시키는" 효과 — [AV Club (R)](https://www.avclub.com/how-movement-makes-mario-rabbids-kingdom-battle-a)

### Inferences
- 공통 패턴: **작은 보드 + 완전 정보(텔레그래프) + 짧은 전투 턴 수**가 빠릿빠릿함과 퍼즐성을 동시에 만든다. 큰 보드는 "이동 입력" 비중을 늘려 템포를 늦춘다.
- 7x7은 ITB(64칸)보다 23% 작다. 1 마법사 + 1~3 패밀리어 + 3~5 적이면 유닛 밀도는 ITB와 비슷하거나 높아 "매 턴 무언가와 상호작용"이 거의 보장된다. 홀/절단으로 실제 바닥은 37~45칸이 되므로 밀도는 더 높아짐 → 적 수는 ITB보다 적게 잡는 것이 안전.
- 우리 게임의 "적이 선(先)확정 후 플레이어 행동" 구조는 ITB/Shogun Showdown의 텔레그래프 모델과 동일 계열. 두 게임 모두 "빠져나가면 빗나간다"를 핵심 해법으로 삼으므로, 보드 모양은 **"빠져나갈 수 있는 출구가 몇 개인가"**를 조절하는 장치로 생각하면 된다.
- Darkest Dungeon/Wildfrost/Shogun은 차원을 줄여(랭크·레인·1D) 속도를 얻었다. 7x7 맵 중 일부를 "사실상 레인/복도"로 깎는 템플릿(아래 T6, T8)은 이 장점을 국소적으로 빌려오는 방법.

### Gaps
- Hoplite의 정확한 맵 크기/헥스 수, 레벨 생성 방식에 대한 1차 출처를 찾지 못함 (검색 2회 무관한 결과).
- Pokémon Mystery Dungeon 방/통로 크기에 대해서는 조사하지 못함 (검색 예산).
- Hearthstone은 그리드가 아니라 7칸 일렬 보드로 알려져 있으나 이번 조사에서 출처 미확보.
- Mario + Rabbids 맵 크기 수치 없음.

---

## Q2. Terrain/shape features that create decisions; how Into the Breach makes maps

### Takeaway
결정을 만드는 지형은 **(1) 밀어 넣어 즉사시키는 곳(구멍·물), (2) 이동/시야를 막아 충돌 피해를 주는 곳(산·기둥), (3) 지켜야 하는 곳(목표물), (4) 스폰을 막을 수 있는 곳**으로 정리된다. ITB는 8x8이라 **절차 생성보다 맵 100개를 손으로 만드는 게 싸다**고 판단했고, 랜덤은 숲 위치 같은 소수 요소에만 둠. 특히 **막힌 구석(closed-off corners)**은 해법 없는 상황을 만들기 쉬워 맵 단계에서 제거했다.

### Cited Findings
- ITB: Matthew Davis — 8x8이므로 **"절차 시스템을 설계하는 것보다 맵 100개를 손으로 디자인하는 편이 훨씬 싸다"**; 재미없는 맵이 생성되지 않도록 맵을 통제하는 것이 중요 — [Game Developer (P, 스니펫)](https://www.gamedeveloper.com/design/reimagining-failure-in-strategy-game-design-in-i-into-the-breach-i-)
- ITB: 모든 맵은 수작업, 일부 랜덤 요소(예: 숲 위치); 맵 레이아웃은 "풀 수 있는(solvable)" 문제를 만드는 데 매우 중요; **막힌 구석은 위험 — "AI가 그걸 피하도록 가르치는 것보다 맵이 그걸 갖지 않게 디자인하는 게 쉽다"** — [GDC 2019 talk 비공식 노트 (W, 신뢰도 중)](https://docs.google.com/document/d/1OPRNzAVQNgPtP35HzhV2ZzEqE1eCdXbWA7lEZXDdMHQ/mobilebasic)
- ITB: Justin Ma — "가장 짜증나는 건 해결할 선택지가 전혀 없는 상황" — [Game Developer (P, 스니펫)](https://www.gamedeveloper.com/design/reimagining-failure-in-strategy-game-design-in-i-into-the-breach-i-)
- 상충: PCWorld 리뷰는 "맵이 매번 랜덤"이라고 서술 — 수작업+소수 랜덤 요소 설명과 충돌. 개발자 발언 쪽이 더 신뢰도 높음 — [PCWorld (R)](https://www.pcworld.com/article/3260205/into-the-breach-review.html)
- ITB 타일 규칙: **물** — 대부분의 비비행 적 익사, 얼린 적을 밀어 넣어도 익사, 비행 유닛 무시, 물 위 메크는 공격 불가; **협곡(chasm)** — 지상 유닛 밀면 즉사, 비행은 통과, 떨어진 메크는 부활 불가; **산** — 이동/공격 차단, 2번 맞아야 파괴; 유닛/산에 밀어 부딪히면 소량 충돌 피해 — [Gamepressure combat guide (W)](https://www.gamepressure.com/into-the-breach/combat/z1aa78), [ITB Wiki: Chasm Tile (W)](https://intothebreach.fandom.com/wiki/Chasm_Tile)
- ITB 스폰 타일: 다음 턴 Vek 등장 위치를 예고; 위에 서면 1 피해 대신 스폰 차단 — [Gamepressure (W)](https://www.gamepressure.com/into-the-breach/combat/z1aa78)
- ITB 목표: 미션당 1~3개 목표 — 특정 건물/유닛 보호, 파괴, 수집, 처치 수, 스폰 차단 수, 기차 호위 등; 건물은 대개 한 방에 무너짐 — [ITB Wiki: Missions (W)](https://intothebreach.fandom.com/wiki/Missions?oldid=4691), [Digital Trends review (R)](https://digitaltrends.com/gaming/into-the-breach-review), [PC Gamer preview (R)](https://www.pcgamer.com/into-the-breach-preview/)
- TBW: 창문 = 밀어내기 즉사 지점 (ITB의 협곡과 같은 역할); 레벨마다 새로운 디자인 변수를 넣어 같은 리듬에 기대지 못하게 함 — [Shacknews (R)](https://shacknews.com/article/141015/tactical-breach-wizards-review-score)
- Fights in Tight Spaces: 높은 HP 적을 난간 너머로 차서 처리하는 식의 밀어내기가 핵심; "공간 통제가 힘이다… 방이 당신의 무기가 된다" — [Magic Game World guide (W)](https://guides.magicgameworld.com/?p=22570), [Special Attacks (W)](https://guides.magicgameworld.com/?p=22563)
- Duelyst: 벽 미니언으로 상대 선택지 제한 = 동적인 장애물 — [PC Gamer primer (R)](https://pcgamer.com/duelyst-primer-six-things-new-players-need-to-know)
- Mario + Rabbids: 반엄폐는 50/50으로 엄폐물이나 대상 중 하나에 맞음, 완전엄폐는 명중 불가 — [GameSpot guide (W)](https://Gamespot.com/gallery/mario-rabbids-kingdom-battle-guides-9-tips-to-get-/2900-1424/). (참고: 우리 게임은 명중이 결정적이므로 확률 엄폐보다 "시야 차단/경로 차단"형 엄폐가 맞음.)

### Inferences
- **우리 게임의 "구멍/잘린 칸" = ITB 협곡 + TBW 창문.** 밀기/당기기 스킬이나 패밀리어 넉백이 있다면 구멍은 즉시 "처치 수단"이 된다. 넉백이 없다면 구멍은 단지 "벽"이므로 의미가 반감됨 → 구멍을 넣는 맵에는 넉백 수단(스킬·원소 반응·패밀리어)이 반드시 존재해야 한다.
- **둥근 모서리(rounded corners)는 ITB의 '막힌 구석 제거' 원칙을 그대로 구현한다.** 구석에서 마법사가 포위되면 출구가 없고, 반대로 구석에 몰린 적은 AI가 이상한 행동을 한다. 7x7에서 각 구석 1~3칸을 깎는 것은 가독성과 공정성을 위한 저비용 장치.
- 원소 타일(물·기름·얼음 등)은 ITB의 물/산과 같은 "지형 규칙"이지만, 우리는 **반응**(젖음→감전 등)이 있으므로 같은 타일이 "적에게도 나에게도" 작동하는 양날의 칼로 만들어야 결정이 생긴다 (마법사가 물 위에 서면 감전 위험).
- ITB의 "스폰 타일에 서서 차단" 규칙은 "도달 가능한 적 하이라이트"와 결합하기 좋다: 다음 증원 위치를 보여주고, 마법사/패밀리어가 막을지 결정.
- 목표 다양화(보호/도달/N턴 생존/파괴)는 같은 보드 모양을 재사용하면서 전투 느낌을 바꾸는 가장 싼 방법.

### Gaps
- ITB의 맵당 정확한 적 수, 섬별 지형 비율은 1차 출처로 확인 못함.
- 고저차(elevation)에 대한 소형 그리드 게임 사례는 이번 조사에서 확보하지 못함 (Mario+Rabbids/TBW 모두 평면 중심). 7x7 웹 게임에는 고저차보다 타일 상태가 더 읽기 쉬울 것으로 추정 (출처 없음).
- 파괴 가능한 벽에 대해서는 ITB 산(2타 파괴)과 Mario+Rabbids의 파괴 가능 엄폐 표시 외에 구체 출처 없음.

---

## Q3. Procedural vs handcrafted small maps; templates + modifiers; how many shapes for a 20–30 min run

### Takeaway
작은 전술 맵은 **수작업 템플릿 + 소수의 랜덤 수정자(modifier)**가 정답에 가깝다. ITB는 100여 개 수작업 맵, Keith Burgun은 랜덤 맵을 버리고 수작업으로 돌아섰으며, Rift Wizard는 "mutator" 조합 + 재미도 검사로 생성한다. 20~30분 런(전투 약 8~12회 추정)에는 **템플릿 8~12개 × 대칭 변환 × 수정자 2~4종**이면 한 런 안에서 반복이 거의 느껴지지 않을 것.

### Cited Findings
- ITB: 맵 100개 수작업이 절차 시스템보다 싸다(8x8이기 때문) — [Game Developer (P, 스니펫)](https://www.gamedeveloper.com/design/reimagining-failure-in-strategy-game-design-in-i-into-the-breach-i-)
- ITB: 수작업 + 숲 위치 같은 일부 랜덤 — [GDC 노트 (W)](https://docs.google.com/document/d/1OPRNzAVQNgPtP35HzhV2ZzEqE1eCdXbWA7lEZXDdMHQ/mobilebasic)
- Keith Burgun (Gem Wizards Tactics): 2008년부터 랜덤 맵 게임을 만들었지만 랜덤 맵이 "anti-value"를 가져온다는 데 놀람; 맵에는 플레이어 행동에 의미를 주는 **서사적 일관성**이 필요; 랜덤 생성기(숲 군집, 산 무작위 배치, 도로·강 관통)는 작동했지만 "게임에 랜덤 맵이 필요 없고 수작업 맵으로 크게 나아질 것" — [Keith Burgun: Space Narratives (P)](https://keithburgun.net/space-narratives/), [Game Developer 재게재](https://www.gamedeveloper.com/game-platforms/space-narratives-a-map-generator-denounces-map-generation)
- Burgun: 승리 전략을 찾으면 맵이 "풀려버린다(solved)" → 새 맵 필요; 서사가 강한 맵은 지배 전략이 형성될 수 있음 — [Keith Burgun (P)](https://keithburgun.net/space-narratives/)
- Rift Wizard (Dylan White): 꽉 찬 맵에서 시작 → 흥미로운 결과를 내는 "seed mutator" 몇 개 적용 → 재미도 검사를 통과할 때까지 랜덤 mutator 반복 → 분리된 영역 연결; **소수의 수정자로도 조합 수가 폭발**하며 **적용 순서가 결과를 바꿈** — [Game Developer: Generating cool levels for Rift Wizard (P, 스니펫)](https://gamedeveloper.com/design/generating-cool-levels-for-rift-wizard)
- 배치가 지나치게 랜덤이면 판마다 난이도 편차가 커져 너무 쉽거나 불가능한 판이 생김 — [Game Developer roguelike overview (스니펫)](https://www.gamedeveloper.com/design/special-game-modes-in-a-roguelike-context)
- Golemancer devlog: 무작위 배치 특수방이 고르지 않게 뭉쳐 "좋은 시스템이 아님" — [itch.io devlog (P)](https://brian-nether.itch.io/golemancer/devlog/779633/making-a-better-map)
- TBW: 100+ 레벨을 수작업 제작 (GDC 2025 강연 주제) — [GDC Vault (P)](https://gdcvault.com/play/1035595/Level-Design-Summit-The-Unusual)
- Hoplite: 절차 생성 레벨 — [thinkygames (W)](https://thinkygames.com/games/hoplite/) (생성 방식 상세는 미확인)

### Inferences
- **권장 파이프라인 (7x7)**:
  1. 수작업 **형태 템플릿(shape)** 8~12개 (아래 Q5의 T1~T8 + 막별 추가분).
  2. 대칭 변환: 7x7 정사각은 회전/반사 8가지(D4). 비대칭 템플릿(T8 L자 등)은 8가지 변형이 모두 다르게 보이고, 대칭 템플릿은 변형이 1~2가지로 줄어든다 → 비대칭 템플릿이 "공짜 다양성"을 더 준다.
  3. **수정자(modifier)** 레이어 2~4종: 원소 타일 패치(물/기름/풀/얼음), 파괴 가능 기둥, 증원 스폰 타일, 목표물(보호할 결계석 등). Rift Wizard처럼 "적용 순서"를 고정해 결과를 안정화.
  4. **검증기(validator)**: ITB 원칙을 자동 검사 — (a) 마법사 시작칸에서 모든 바닥이 연결되는가, (b) 막다른 구석(이웃 바닥 ≤1)이 마법사 시작 2칸 이내에 없는가, (c) 첫 턴에 마법사에게 도달 가능한 적 수 ≤ N, (d) 큰 채널링 원(반경 2)이 들어갈 자리가 최소 1곳 있는가(막에 따라).
- **수량 추정**: 런 20~30분, 3막. 전투 1회 2~3분 + 보상/이동 30초라면 런당 전투 약 8~10회. 막당 3~4개 템플릿 풀(공유 2 + 막 전용 1~2)을 두고 같은 런 내 동일 템플릿 연속 출현 금지만 걸어도 반복감은 낮을 것. 총 템플릿 10~12개 + 수정자 3~4종이면 충분하고, 보스 전용 맵은 막당 1개 수작업.
- Burgun의 "풀려버린 맵" 문제는 우리 게임에서 **적 구성 + 수정자 + 목표**의 랜덤화로 상쇄된다 (형태는 고정이라도 해법이 매번 달라짐). 형태 자체를 완전 절차 생성할 필요는 낮다.

### Gaps
- 20~30분 런 기준 "필요한 맵 수"에 대한 직접적 개발자 수치는 찾지 못함 (위 수량은 추정).
- Rift Wizard 원문 전문(구체 mutator 목록)은 fetch 차단으로 미확인.

---

## Q4. Enemy count and turn length for snappy pace (target turn time, inputs per turn)

### Takeaway
"빠릿함"의 레퍼런스는 **ITB의 5턴 전투**, **Shogun Showdown의 턴 수/런 시간 평가**, **Wildfrost의 즉발 카드 + 타이머 예고**다. 공개 출처에서 "목표 턴 시간(초)"이나 "턴당 입력 수" 수치는 찾지 못했다. 설계 원칙으로는: 적 수를 늘리는 대신 맵/지형으로 난이도를 만들 것(Ma의 '적과 위험지대를 채우면 읽기 어려워진다'), 전투를 고정된 짧은 턴 수로 끝낼 것.

### Cited Findings
- ITB: 레벨당 **5턴**, 8x8 — [PC Gamer preview (R)](https://www.pcgamer.com/uk/into-the-breach-preview); 정해진 턴 수 생존 후 Vek 철수, 매 턴 Vek이 이동·공격 예고, 턴 끝에 새로 등장 — [Digital Trends review (R)](https://digitaltrends.com/gaming/into-the-breach-review)
- ITB: 난이도를 위해 보드를 적과 위험지대로 채우면 "needlessly complex and hard to parse" — [Game Developer (P, 스니펫)](https://www.gamedeveloper.com/design/reimagining-failure-in-strategy-game-design-in-i-into-the-breach-i-)
- Shogun Showdown: 런 시간, 전투당 턴 수, 피격 수로 평가; 한 턴에 최대 3개 대기열 발동 — [PC Gamer review (R)](https://pcgamer.com/games/roguelike/shogun-showdown-review)
- Wildfrost: 카드 대부분 즉발; 리더를 보드 위에서 행동 소모 없이 이동 가능; 전투는 웨이브 + 최종 강적 — [GamesRadar (R)](https://www.gamesradar.com/wildfrost-is-a-deceptively-cute-utterly-coldhearted-take-on-monster-train)
- TBW: 되감기로 실험 비용을 낮춤(“less stakes to each action”) — 사고 시간이 줄어드는 효과 — [PC Gamer interview (P)](https://www.pcgamer.com/uk/tactical-breach-wizards-interview/)
- Fights in Tight Spaces: 작은 그리드가 "연출 가능한" 짧은 싸움을 위해 선택됨 — [Filmstories (P 인용)](https://filmstories.co.uk/gaming/fights-in-tight-spaces-fights-in-spaces-which-are-tight/)

### Inferences (수치는 모두 제안값, 출처 없음)
- **적 수**: 7x7(실바닥 37~45칸)에서 동시 3~4체 + 증원 1~2체가 상한. 4체 초과 시 "이번 턴 마법사에게 도달 가능한 적" 하이라이트가 화면을 덮어 정보 가치가 떨어짐. 엘리트/보스전은 보스 1 + 졸개 2.
- **전투 길이**: 4~6턴 목표(ITB 5턴 기준). 채널링 대마법이 2~3턴 걸린다면 "전투 중 대마법 1~2회"가 자연스러운 리듬 → 5턴 전투에서 채널링 2턴 = 전투의 40%가 "원이 완성되는 긴장" 구간.
- **턴당 입력**: 마법사 이동 1 + 행동 1 + 패밀리어(전투형) 1~2 = 턴당 3~4입력이 상한. 패덕형(passive) 패밀리어는 입력 0. Shogun처럼 "대기열 확정 → 일괄 해결" 버튼 1회로 끝내면 체감 속도가 크게 오른다.
- **목표 턴 시간**: 숙련자 10~20초/턴, 런 20~30분이면 전투당 2~3분 → 5턴 × 20초 + 연출 ≈ 2분 내외. 적 행동 애니메이션은 동시 재생(동시 턴 구조이므로 순차 재생 불필요) + 빨리감기 옵션.
- 난이도는 적 수가 아니라 **모양(출구 수)·수정자·목표**로 올릴 것 (Ma 원칙).

### Gaps
- 레퍼런스 게임들의 실제 평균 턴 시간/입력 수 데이터는 공개 출처에서 발견 못함.
- ITB 미션당 Vek 수(대략적인 수치는 알려져 있으나) 1차 출처 미확보.

---

## Q5. Board shape × area spells / channeling — and 8 proposed 7x7 templates

### Takeaway
7x7에서는 원 크기 정의가 결정적이다: 체비셰프 반경 2(5x5=25칸)는 보드의 51%로 지나치게 크고, **맨해튼 반경 2(마름모 13칸)** 또는 **유클리드 r≈2.3(21칸)**이 "큰 마법" 상한으로 적당하다. 보드 모양은 "원이 들어갈 자리"와 "적이 원 안에 머무를 이유"를 조절하는 장치다. 아래 근거는 레퍼런스에서 간접 추출한 것이며, 채널링×보드 형태를 직접 다룬 출처는 찾지 못했다.

### Cited Findings
- 텔레그래프된 범위에서 "레인/칸을 벗어나면 빗나감"이 핵심 해법 — 범위 공격의 가치는 대상이 빠져나갈 출구 수에 반비례 — [PC Gamer: Shogun Showdown review (R)](https://pcgamer.com/games/roguelike/shogun-showdown-review)
- 작은 맵은 환경 상호작용을 보장 ("Make the maps small") — [Kicktraq (P 인용)](https://kicktraq.com/articles/redirect/35147)
- 막힌 구석은 해법 없는 상황을 만듦 → 맵 설계로 제거 — [GDC 노트 (W)](https://docs.google.com/document/d/1OPRNzAVQNgPtP35HzhV2ZzEqE1eCdXbWA7lEZXDdMHQ/mobilebasic)
- Duelyst의 Frenzy(인접 모든 적 타격), 벽 미니언 등 위치 의존 효과는 9x5에서도 충분히 결정적 — [PC Gamer primer (R)](https://pcgamer.com/duelyst-primer-six-things-new-players-need-to-know)
- Rift Wizard: 주문 선택과 등장하는 마법진(magic circles)이 빌드 다양성을 만듦 — [Kotaku (R)](https://kotaku.com/true-roguelikes-like-this-are-for-sick-people-drink-fr-1847655177)

### Inferences — 원 크기 수학 (7x7 = 49칸)
| 원 정의 | 칸 수 | 보드 대비 |
|---|---|---|
| 반경 1 맨해튼 (+자) | 5 | 10% |
| 반경 1 체비셰프 (3x3) | 9 | 18% |
| 반경 2 맨해튼 (마름모) | 13 | 27% |
| 유클리드 r≤2.3 (5x5−구석4) | 21 | 43% |
| 반경 2 체비셰프 (5x5) | 25 | 51% |
- 채널링이 "원이 점점 형성"된다면: 1턴차 반경1(+자 5칸) → 2턴차 3x3(9) → 3턴차 마름모 13 또는 21칸 원으로 커지는 식이 7x7에 맞는 스케일. 최종 원이 보드 절반을 넘으면 적의 "탈출" 결정이 사라져 퍼즐성이 죽는다.
- **보드 모양이 만드는 트레이드오프**:
  - 구멍/절단이 원 안에 있으면 원의 유효 칸이 줄어듦 → "넓은 곳에 원을 그릴까(적이 빠져나가기 쉬움) vs 좁은 길목에 그릴까(적은 갇히지만 원이 작아짐)".
  - 둥근 모서리는 원이 가장자리에 걸칠 때 손실을 늘려 **중앙 쟁탈**을 유도.
  - 채널링 중 마법사는 움직이기 어렵다 → "도달 가능한 적" 하이라이트가 중요. 길목 맵은 접근 경로가 적어 채널링을 지키기 쉽지만, 그만큼 원 안에 적이 적다.
  - 원소 타일(물)을 원 안에 포함하면 반응 증폭, 단 마법사도 젖은 칸에 서면 감전 위험.

### Inferences — 제안 템플릿 8종 (ASCII)

범례: `.` 바닥 / `X` 잘린 칸(보드 밖, 이동·시야 없음, 넉백 시 낙사) / `O` 구덩이(보드 안 구멍, 비행만 통과, 넉백 낙사) / `#` 기둥(이동·투사체 차단, 충돌 피해, 2타 파괴 옵션) / `~` 물(젖음) / `M` 마법사 시작 후보 / `E` 적 시작·증원 구역 / `*` 목표물

**T1. 열린 광장 (Open Square) — 49칸, 1막 튜토리얼/기준선**
```
E . . . . . E
. . . . . . .
. . . . . . .
. . . . . . .
. . . . . . .
. . . M . . .
. . . . . . .
```
- 목적: 채널링·원 형성·도달 하이라이트를 배우는 기준 맵. 원(21칸)을 어디에든 그릴 수 있음. 적 2~3체.
- 주의: 구석이 살아 있음 → 1막 초반 1~2회만. 이후엔 T2로 대체.

**T2. 둥근 아레나 (Rounded Arena) — 37칸, 범용 기본형**
```
X X E . E X X
X . . . . . X
. . . . . . .
. . . . . . .
. . . . . . .
X . . M . . X
X X . . . X X
```
- 목적: ITB "막힌 구석 제거" 원칙의 직접 구현. 구석 포위/구석 캠핑 금지, 중앙 쟁탈. 가장자리에서 넉백하면 낙사 가능.
- 원 트레이드오프: 가장자리 원은 손실이 크므로 중앙에서 채널링 → 적이 사방에서 접근 → 실드/패밀리어 배치가 중요.

**T3. 갈라진 강 (Split River / Middle Cut) — 44칸, 길목 2개**
```
E . . . . . E
. . . . . . .
. . . . . . .
O . O O O . O
. . . . . . .
. . . M . . .
. . . . . . .
```
- 목적: 가운데 행을 끊고 다리 2개(열 1, 5). 근접 적은 다리로 몰림 → 다리 앞 원 하나로 다수 포착. 원거리 적은 건너편에서 공격 → "다리를 막을까, 원거리를 먼저 칠까".
- 변형 수정자: `O` 대신 `~`(깊은 물) → 건널 수는 있으나 젖음 → 번개 연쇄 맵. 다리 1개로 줄이면 난이도↑.

**T4. 기둥 홀 (Pillar Hall) — 45칸, 시야·충돌**
```
E . . . . . E
. . . . . . .
. . # . # . .
. . . . . . .
. . # . # . .
. . . M . . .
. . . . . . .
```
- 목적: 직선/투사체 스킬의 시야 차단, 넉백 충돌 피해 대상, 원거리 적에게서 숨는 엄폐. 기둥을 원 안에 넣으면 원 효과 칸이 줄어듦.
- 수정자: 기둥 1~2개를 파괴 가능(번개/폭발로 파괴 → 잔해가 다음 턴 구덩이가 되는 식의 반응도 가능).

**T5. 고리 (Ring / Central Pit) — 44칸, 카이팅·중앙 넉백**
```
. . . E . . .
. . . . . . .
. . . O . . .
E . O O O . E
. . . O . . .
. . . . . . .
. . . M . . .
```
- 목적: 중앙 + 자 구덩이(5칸). 적과 마법사가 구덩이 주위를 돌며 거리 싸움. 넉백 스킬이 있으면 중앙으로 밀어 처치.
- 원 트레이드오프: 보드 중앙에 원을 그리면 구덩이 5칸이 낭비됨 → 원은 가장자리 띠에 그려야 하고, 고리 형태 경로상 적이 반드시 지나가는 곳을 예측해야 함.

**T6. 모래시계 (Hourglass / Waist Choke) — 41칸, 원을 위한 맵**
```
E . . . . . E
. . . . . . .
X . . . . . X
X X . . . X X
X . . . . . X
. . . M . . .
. . . . . . .
```
- 목적: 가운데가 3칸 폭 허리. 적이 마법사에게 오려면 허리를 통과 → 허리에 반경1(3x3) 원을 걸면 통과하는 모든 적 포착. "적이 원 안에 머물 이유"를 지형이 만들어 줌.
- 대마법(채널링) 학습/보상 맵. 적 원거리 비율을 높이면 허리를 안 건너고 버티므로 균형 조절 가능.

**T7. 네 섬 (Four Islands / Cross Cut) — 40칸, 구역 분할**
```
E . . O . . E
. . . . . . .
. . . O . . .
O . O O O . O
. . . O . . .
. . . . . . .
. . . O M . .
```
- 목적: 십자 구덩이로 3x3 섬 4개, 다리 4개((1,3),(5,3),(3,1),(3,5)). 적이 어느 섬에 있는지와 다리 거리로 "이번 턴 도달 가능" 여부가 크게 바뀜 → 하이라이트 정보가 가장 의미 있는 맵. 비행 적·패밀리어의 가치↑.
- 원 트레이드오프: 섬 하나(9칸) 전체를 원으로 덮는 것이 자연스러운 목표 → "적을 한 섬에 몰아넣기" 퍼즐. 2~3막용.

**T8. L자 복도 (Elbow / Asymmetric Corridor) — 33칸, 레인형 압박**
```
E . . X X X X
. . . X X X X
. . . X X X X
. . . . . . .
. . . . . . .
. . . . . . M
X X X . . . E
```
- 목적: 3칸 폭 L자. 적이 긴 팔 끝에서 레인처럼 밀려옴(Shogun/Wildfrost의 1D 압박을 국소 차용). 모서리(팔꿈치)에 원을 그리면 두 팔 모두 압박하지만, 마법사도 팔꿈치 근처에 있어야 해서 위험.
- 비대칭이므로 D4 변환 8종이 모두 달라 보임 → 다양성 효율 최고. 증원이 한쪽 끝에서만 온다는 점을 시각적으로 명확히.

**목표/수정자 (형태와 독립적으로 얹기)**
- `*` 결계석 보호(N턴 생존): T2/T4 중앙에 배치 → 채널링과 보호를 동시에 → "원을 그리면 결계석을 못 지킨다" 긴장.
- 도달 목표(탈출 룬까지 이동): T7/T8에서 강함.
- 원소 패치: 물 2x2 × 1~2, 기름 띠, 풀(화염 확산). 같은 맵에 원소 반응 1종만 강조 → 가독성 유지.
- 증원 스폰 타일 예고(ITB식): 위에 서면 차단, 대신 피해.

**막별 배치 제안**: 1막 T1·T2·T3·T4 / 2막 T2·T3·T5·T6 (+물 수정자) / 3막 T5·T6·T7·T8 (+목표·증원). 보스 맵은 막당 1개 수작업(예: T2 변형 + 보스 전용 지형).

**자동 검증 규칙(제안)**: (1) 모든 바닥 연결, (2) 마법사 시작 2칸 이내 막다른 칸(이웃 바닥 ≤1) 없음, (3) 첫 턴 도달 가능 적 ≤2, (4) 해당 막의 최대 원(13 또는 21칸)이 바닥 ≥60%로 들어갈 위치 ≥2곳, (5) 적 시작칸에서 마법사까지 최단경로 ≥3.

### Gaps
- 채널링(다턴 시전) + 보드 형태를 직접 다룬 개발자 글은 찾지 못함 — 위 템플릿 분석은 ITB/Shogun/FiTS 원칙에서 추론한 것.
- Into the Breach의 맵당 지형 비율, 실제 맵 다이어그램은 fetch 차단으로 미확인 (wiki/gamedeveloper 원문 필요).
- 제안 칸 수/검증 수치는 플레이테스트로 보정해야 함.
