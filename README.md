# 마호츠카이 (가제)

애니를 볼 때는 생각 없이 손만 움직여 마나를 모으고, 그 밖의 시간에는 스크롤을 뜯어 얻은 문양으로 나만의 마법진을 설계해서 화려한 턴제 전투를 벌이는 정통 마법 게임.

- 이펙트 스타일 비교 시연: [`prototypes/effect-demo.html`](prototypes/effect-demo.html)

## 실행

```bash
npm install
npm run dev      # 개발 서버 (같은 와이파이의 아이패드에서도 접속 가능)
npm run build    # 타입 검사 + 배포용 빌드 (dist/)
```

## 기술 구성

| 용도 | 도구 |
|---|---|
| 빌드 | Vite, TypeScript |
| 렌더링·이펙트 | PixiJS v8, pixi-filters |
| 세이브 동기화 (예정) | Supabase |
| 아이패드 설치 (예정) | vite-plugin-pwa |

## 문서

- **기획서 (현재 기준)**: [`docs/GAME_DESIGN.md`](docs/GAME_DESIGN.md)
- 결정 기록 (보관용): [`docs/DECISION_LOG.md`](docs/DECISION_LOG.md)
- 조사 보고서: [`reports/`](reports/)

## 시제품

- 이펙트 비교 (`prototypes/effect-demo.html`): 혼합 스타일 채택
- 그림체 시안 19종 (`prototypes/style-board.html`): 같은 뼈대에 칠하는 법만 바꾼 것. 전부 못생겼다는 평가로 폐기
- 캐릭터 방향 시안 8종 (`prototypes/character-directions.html`): 뼈대(비율·실루엣·얼굴·사역마 개념)가 다른 방향 비교
- 대마법 연출 시연 "낙성" (`prototypes/meteor.html`): 3턴 영창 → 컷인 → 하늘 마법진 → 정적 → 낙하 → 충격. 효과음 포함
- 원석 정제 작업대 (`refine.html`): 폐기. 손 작업은 마탑 + 대의식으로 바뀜. 입력 처리 코드(`src/shared/rotation-input.ts`)는 재사용 예정
- 종이 사역마 (`prototypes/paper-familiars.html`): 폐기
