// Обновленный тип TableKind с всеми необходимыми значениями
export type TableKind = 
  | 'little' 
  | 'big' 
  | 'mid' 
  | 'home-roster' 
  | 'away-roster' 
  | 'roster' 
  | 'scoreboard' 
  | 'scoreboard-top' 
  | 'person' 
  | 'replace' 
  | 'off';

export const table_kinds = [
  'big', 
  'little', 
  'mid', 
  'home-roster', 
  'away-roster', 
  'roster', 
  'scoreboard', 
  'scoreboard-top', 
  'person', 
  'replace', 
  'off'
] as const;

export const person_kinds = ['goal', 'yellow', 'red', 'judge', 'coach'] as const;
export type PersonKind = (typeof person_kinds)[number]; 