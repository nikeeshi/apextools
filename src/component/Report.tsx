import { ReactNode } from "react";
import { TwoDTable } from "./TwoDTable";
import { useTranslation } from "react-i18next";
import { range } from "../util/range";
import { Tier } from "../data";
import { calcRP } from "../rpCalculator";

export function Cell({
  placement,
  killPoint,
  tier,
}: {
  placement: number;
  killPoint: number;
  tier: Tier;
}) {
  const rp = calcRP({
    placement,
    killPoint,
    tier,
    lostForgiveness: false,
  });
  return <>{rp}</>;
}

type Props = { tier: Tier };
export function Report({ tier }: Props) {
  const { t } = useTranslation();
  return (
    <TwoDTable
      axises={[
        {
          label: t("Placement"),
          values: range(20, 1),
          header: (a) => String(a),
        },
        {
          label: t("Kill/Assist Points"),
          values: range(13, 0),
          header: (a) => String(a),
        },
      ]}
      cell={(placement, killPoint) => (
        <Cell
          placement={placement}
          killPoint={killPoint}
          tier={tier}
        />
      )}
    />
  );
}
