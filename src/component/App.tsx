/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react/macro";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { OnOffToggle } from "./OnOffToggle";
import { RadioStyleSelector } from "./RadioStyleSelector";
import { Tier, Tiers } from "../data";
import { calcRP } from "../rpCalculator";
import { range } from "../util/range";
import { ValueSetterPair } from "../variable/valueSetterPair";
import LanguageSwitch from "./LanguageSwitch";
import Breakdown from "./Breakdown";
function Inputs({
  placement,
  killPoint,
  tier,
  lostForgiveness,
}: {
  placement: ValueSetterPair<number>;
  killPoint: ValueSetterPair<number>;
  tier: ValueSetterPair<Tier>;
  lostForgiveness: ValueSetterPair<boolean>;
}) {
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <RadioStyleSelector
          selected={placement}
          label={t("Placement")}
          list={range(1, 20)}
          itemLabel={(a) => String(a)}
        />
      </div>
      <div>
        <RadioStyleSelector
          selected={killPoint}
          label={t("Kill/Assist Points")}
          list={range(0, 20)}
          itemLabel={(a) => String(a)}
        />
      </div>
      <div>
        <RadioStyleSelector
          selected={tier}
          label={t("Tier")}
          list={Tiers}
          itemLabel={(a) => t(a)}
        />
      </div>
      <div>
        <OnOffToggle
          current={lostForgiveness}
          label={t("Lost Forgiveness")}
        />
      </div>
    </div>
  );
}

function Output(props: {
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
    </div>
  );
}
export default function App() {
  const placement = useState<number>(1);
  const killPoint = useState<number>(0);
  const tier = useState<Tier>(Tiers[0]);
  const lostForgiveness = useState<boolean>(false);
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("Apex Legends RP calculator")}</h1>
      <LanguageSwitch />
      <Inputs
        placement={placement}
        killPoint={killPoint}
        tier={tier}
        lostForgiveness={lostForgiveness}
      />
      <Output
        placement={placement[0]}
        killPoint={killPoint[0]}
        tier={tier[0]}
        lostForgiveness={lostForgiveness[0]}
      />
    </div>
  );
}
