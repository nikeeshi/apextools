import { calcRPFromPlacement, calcRPPerKill, RP_FROM_KILL_CAP } from "./data";

export type Tier =
  | "Bronze"
  | "Silver"
  | "Gold"
  | "Platinum"
  | "Diamond"
  | "Master"
  | "Apex Predator";
export const ENTRY_COST = {
  Bronze: 0,
  Silver: 12,
  Gold: 24,
  Platinum: 36,
  Diamond: 48,
  Master: 60,
  "Apex Predator": 60,
};
type Result = {
  placement: number;
  killPoint: number;
  tier: Tier;
  lostForgiveness: boolean;
};
export function calcRP(result: Result): number {
  const rp =
    calcRPFromKill(result) +
    calcRPFromPlacement(result.placement) -
    ENTRY_COST[result.tier];
  return result.lostForgiveness ? Math.max(0, rp) : rp;
}

export function calcRPFromKill({
  placement,
  killPoint,
}: Result): number {
  const rpPerKill = calcRPPerKill(placement);
  return Math.min(rpPerKill * killPoint, RP_FROM_KILL_CAP);
}
