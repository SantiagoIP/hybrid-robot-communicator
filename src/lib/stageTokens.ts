export const STAGE_HEX = [
  '#94a3b8',
  '#0ea5e9',
  '#f59e0b',
  '#14b8a6',
  '#10b981',
  '#8b5cf6',
] as const;

export const STAGE_HEX_SOFT = [
  'rgba(148, 163, 184, 0.18)',
  'rgba(14, 165, 233, 0.18)',
  'rgba(245, 158, 11, 0.18)',
  'rgba(20, 184, 166, 0.18)',
  'rgba(16, 185, 129, 0.18)',
  'rgba(139, 92, 246, 0.18)',
] as const;

export const stageColor = (index: number): string =>
  STAGE_HEX[Math.max(0, Math.min(STAGE_HEX.length - 1, index))];

export const stageColorSoft = (index: number): string =>
  STAGE_HEX_SOFT[Math.max(0, Math.min(STAGE_HEX_SOFT.length - 1, index))];
