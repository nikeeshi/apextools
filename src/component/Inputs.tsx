import { useTranslation } from "react-i18next";
import { OnOffToggle } from "./OnOffToggle";
import { RadioStyleSelector } from "./RadioStyleSelector";
import { Tier, Tiers } from "../data";
import { range } from "../util/range";
import { isLarge } from "../mediaQuery";
import { DropDownMenu } from "./DropDownMenu";
import { useMediaQuery } from "@react-hook/media-query";
import { PrimitiveState } from "../util/usePrimitiveState";

export function Inputs({
  placement,
  killPoint,
  tier,
  lostForgiveness,
}: {
  placement: PrimitiveState<number>;
  killPoint: PrimitiveState<number>;
  tier: PrimitiveState<Tier>;
  lostForgiveness: PrimitiveState<boolean>;
}) {
  const { t } = useTranslation();
  const Selector = useMediaQuery(isLarge)
    ? RadioStyleSelector
    : DropDownMenu;
  return (
    <div>
      <div>
        <Selector
          selected={placement}
          label={t("Placement")}
          list={range(1, 20)}
          itemLabel={(a) => String(a)}
        />
      </div>
      <div>
        <Selector
          selected={killPoint}
          label={t("Kill/Assist Points")}
          list={range(0, 20)}
          itemLabel={(a) => String(a)}
        />
      </div>
      <div>
        <Selector
          selected={tier}
          label={t("Tier")}
          list={Tiers}
          itemLabel={(a) => t(a)}
        />
      </div>
      <div>
        <OnOffToggle
          state={lostForgiveness}
          label={t("Lost Forgiveness")}
        />
      </div>
    </div>
  );
}
