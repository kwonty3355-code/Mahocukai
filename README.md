# 마호츠카이 (가제)

애니를 볼 때는 생각 없이 손만 움직여 재료를 모으고, 안 볼 때는 직접 그린 마법진으로 화려하게 싸우는 마법산업기능사 게임.

- 기획서: [`docs/GAME_DESIGN.md`](docs/GAME_DESIGN.md)
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

## 시제품

1. **원석 정제 작업대** (`refine.html`): 손가락·펜·마우스 문지르기, 컨트롤러 스틱·버튼, 마우스 휠, 키보드를 모두 "돌리기"로 받는다.
2. 전투 비교 (준비 중)
3. 공방 따라 그리기 (준비 중)
