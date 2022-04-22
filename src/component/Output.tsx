/** @jsxImportSource @emotion/react */
import { useMediaQuery } from "@react-hook/media-query";
import { useTranslation } from "react-i18next";
import { Tier } from "../data";
import { isLarge } from "../mediaQuery";
import { calcRP } from "../rpCalculator";
import Breakdown from "./Breakdown";
import { Report as FullReport } from "./FullReport";
import { SmallReport } from "./SmallReport";

export function Output(props: {
  placement: number;
  killPoint: number;
  tier: Tier;
  lostForgiveness: boolean;
}) {
  const { t } = useTranslation();
  const totalRP = calcRP(props);
  const Report = useMediaQuery(isLarge)
    ? FullReport
    : SmallReport;
  return (
    <div css={{ marginTop: 24 }}>
      <div>
        {t("Earned RP") + ": "}
        {totalRP}
      </div>
      <Breakdown {...props} />
      <div css={{ marginTop: 24 }}>
        <Report {...props} />
      </div>
    </div>
  );
}
