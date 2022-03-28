import { useTranslation } from "react-i18next";
import {
  calcRPFromPlacement,
  calcRPPerKill,
  ENTRY_COST,
  RP_FROM_KILL_CAP,
  Tier,
} from "../data";
import { calcRPFromKill } from "../rpCalculator";
type Props = {
  placement: number;
  killPoint: number;
  tier: Tier;
  lostForgiveness: boolean;
};
export default function Breakdown(props: Props) {
  const { t } = useTranslation();
  const rpFromPlacement = calcRPFromPlacement(
    props.placement
  );
  const rpFromKill = calcRPFromKill(props);
  const lostForgivenessRP = props.lostForgiveness
    ? -Math.min(
        0,
        rpFromKill +
          rpFromPlacement -
          ENTRY_COST[props.tier]
      )
    : 0;
  return (
    <details>
      <summary>{t("Breakdown")}</summary>
      <div>
        {t("Base RP from placement")}: {rpFromPlacement}
      </div>
      <KABreakDown {...props} />
      <div>
        {t("Entry cost")}: {-ENTRY_COST[props.tier]}
      </div>
      <div>
        {t("Lost Forgiveness")}:{" "}
        {lostForgivenessRP !== 0 ? lostForgivenessRP : "--"}
      </div>
    </details>
  );
}
function Formula(props: Props) {
  return (
    <>
      {calcRPPerKill(props.placement) * props.killPoint} ={" "}
      {calcRPPerKill(props.placement)} * {props.killPoint}{" "}
    </>
  );
}
function KABreakDown(props: Props) {
  const { t } = useTranslation();
  const rawKARP =
    calcRPPerKill(props.placement) * props.killPoint;
  return (
    <div>
      {t("Bonus RP from Kill/Assist")}:{" "}
      {rawKARP > RP_FROM_KILL_CAP ? (
        <>
          <del>
            <Formula {...props} />
          </del>
        </>
      ) : (
        <Formula {...props} />
      )}{" "}
      {rawKARP >= RP_FROM_KILL_CAP && (
        <>(Max: {RP_FROM_KILL_CAP})</>
      )}
    </div>
  );
}
