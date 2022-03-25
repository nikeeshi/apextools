import { useState } from "react";
import { OnOffToggle } from "./component/OnOffToggle";
import { RadioStyleSelector } from "./component/RadioStyleSelector";
import { Tiers } from "./data";
import { calcRP, Tier } from "./rpCalculator";
import { range } from "./util/range";
import {
  applyFnToVSPair,
  ValueSetterPair,
} from "./variable/valueSetterPair";
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
  const placementStr = applyFnToVSPair(
    placement,
    (v) => String(v),
    (str) => parseInt(str, 10)
  );

  const killPointStr = applyFnToVSPair(
    killPoint,
    (v) => String(v),
    (str) => parseInt(str, 10)
  );
  return (
    <div>
      <div>
        <RadioStyleSelector
          selected={placementStr}
          label="Placement"
          list={range(1, 20).map((v) => String(v))}
        />
      </div>
      <div>
        <RadioStyleSelector
          selected={killPointStr}
          label="Kill/Assist Point"
          list={range(0, 20).map((v) => String(v))}
        />
      </div>
      <div>
        <RadioStyleSelector
          selected={tier}
          label="Tier"
          list={Tiers}
        />
      </div>
      <div>
        <OnOffToggle
          current={lostForgiveness}
          label="Lost Forgiveness"
        />
      </div>
    </div>
  );
}

function Output({
  placement,
  killPoint,
  tier,
  lostForgiveness,
}: {
  placement: number;
  killPoint: number;
  tier: Tier;
  lostForgiveness: boolean;
}) {
  const totalRP = calcRP({
    placement,
    killPoint,
    tier,
    lostForgiveness,
  });
  return (
    <div>
      <label>Total RP: {totalRP}</label>
    </div>
  );
}
function App() {
  const placement = useState<number>(1);
  const killPoint = useState<number>(0);
  const tier = useState<Tier>(Tiers[0]);
  const lostForgiveness = useState<boolean>(false);
  return (
    <div>
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

export default App;
