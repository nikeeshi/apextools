export function calcRPFromPlacement(
  placement: number
): number {
  const RP: { [p: number]: number } = {
    1: 125,
    2: 95,
    3: 70,
    4: 55,
    5: 45,
    6: 30,
    7: 20,
    8: 20,
    9: 10,
    10: 10,
    11: 5,
    12: 5,
    13: 5,
  };
  return RP[placement] ?? 0;
}
export function calcRPPerKill(placement: number): number {
  const RP: { [p: number]: number } = {
    1: 15,
    2: 11,
    3: 8,
    4: 5,
    5: 5,
    6: 1,
    7: 1,
    8: 1,
    9: 1,
    10: 1,
  };
  return (RP[placement] ?? 0) + 10;
}
export const RP_FROM_KILL_CAP = 125;
export const Tiers = [
  "Bronze",
  "Silver",
  "Gold",
  "Platinum",
  "Diamond",
  "Master",
  "Apex Predator",
] as const;
export type Tier = typeof Tiers[number];
export const ENTRY_COST = {
  Bronze: 0,
  Silver: 12,
  Gold: 24,
  Platinum: 36,
  Diamond: 48,
  Master: 60,
  "Apex Predator": 60,
};
