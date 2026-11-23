/**
 * 재료 보관함. 지금은 기기 안(localStorage)에만 저장한다.
 * 나중에 Supabase 동기화로 교체할 자리.
 */

export type Element = 'fire' | 'water' | 'wind' | 'earth';
export const ELEMENTS: Element[] = ['fire', 'water', 'wind', 'earth'];

export type Material =
  | 'powder_fire' | 'powder_water' | 'powder_wind' | 'powder_earth'
  | 'ink' | 'fiber' | 'crystal';

export const MATERIAL_INFO: Record<Material, { name: string; color: string; note: string }> = {
  powder_fire: { name: '불의 가루', color: '#d9773f', note: '불 문양 잉크의 재료' },
  powder_water: { name: '물의 가루', color: '#5a8fcf', note: '물 문양 잉크의 재료' },
  powder_wind: { name: '바람의 가루', color: '#7cbfa0', note: '바람 문양 잉크의 재료' },
  powder_earth: { name: '땅의 가루', color: '#ad8a55', note: '땅 문양 잉크의 재료' },
  ink: { name: '잉크 원액', color: '#7a6c9e', note: '모든 마법진을 그리는 바탕 잉크' },
  fiber: { name: '양피지 섬유', color: '#d8cba8', note: '스크롤 종이의 재료' },
  crystal: { name: '희귀 결정', color: '#b9a7f0', note: '마법봉 각인에 쓰는 귀한 재료' },
};

export type Inventory = Partial<Record<Material, number>>;

const KEY = 'mahocukai.inventory.v1';

export function loadInventory(): Inventory {
  try { return JSON.parse(localStorage.getItem(KEY) ?? '{}') as Inventory; } catch { return {}; }
}

export function addToInventory(gain: Inventory): Inventory {
  const inv = loadInventory();
  for (const [k, v] of Object.entries(gain) as [Material, number][]) inv[k] = (inv[k] ?? 0) + v;
  try { localStorage.setItem(KEY, JSON.stringify(inv)); } catch { /* 저장 불가 환경 */ }
  return inv;
}
