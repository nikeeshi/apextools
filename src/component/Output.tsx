/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react/macro";
import { useTranslation } from "react-i18next";
import { Tier } from "../data";
import { calcRP } from "../rpCalculator";
import Breakdown from "./Breakdown";
import { Report } from "./Report";

export function Output(props: {
  placement: number;
  killPoint: number;
  tier: Tier;
  lostForgiveness: boolean;
}) {
  const { t } = useTranslation();
  const totalRP = calcRP(props);
  return (
    <div css={{ marginTop: 24 }}>
      <div>
        {t("Earned RP") + ": "}
        {totalRP}
      </div>
      <Breakdown {...props} />
      <div css={{ marginTop: 24 }}>
        <Report tier={props.tier} />
      </div>
    </div>
  );
}
