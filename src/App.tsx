import { Dispatch, SetStateAction, useState } from "react";
import { DropDownMenu } from "./component/dropdownmenu";
import { Tiers } from "./data";
import { calcRP, Tier } from "./rpCalculator";
import { range } from "./util/range";
function Inputs({
  placement,
  setPlacement,
  killpoint,
  setKP,
  tier,
  setTier,
}: {
  placement: number | null;
  setPlacement: Dispatch<SetStateAction<number | null>>;
  killpoint: number | null;
  setKP: Dispatch<SetStateAction<number | null>>;
  tier: Tier | null;
  setTier: Dispatch<SetStateAction<Tier | null>>;
}) {
  return (
    <div>
      <div>
        <DropDownMenu
          label="Placement"
          setter={(placement) =>
            setPlacement(parseInt(placement, 10))
          }
          list={range(1, 20).map((v) => String(v))}
        />
      </div>
      <div>
        
      <DropDownMenu
          label="Kill/Assist Point"
          setter={(killpoint) =>
            setKP(parseInt(killpoint, 10))
          }
          list={range(0, 20).map((v) => String(v))}
        />
      </div>
      <div>
        <DropDownMenu
          label="Tier"
          setter={(tier) => setTier(tier)}
          list={Tiers}
        />
      </div>
    </div>
  );
}

function Output({
  placement,
  killpoint: killPoint,
  tier,
}: {
  placement: number | null;
  killpoint: number | null;
  tier: Tier | null;
}) {
  if (
    placement !== null &&
    killPoint !== null &&
    tier !== null
  ) {
    const totalRP = calcRP({
      placement,
      killPoint,
      tier,
      lostForgiveness: false, //TODO 後でなおす
    });
    return (
      <div>
        <label>Total RP: {totalRP}</label>
      </div>
    );
  }
  return null;
}
function App() {
  const [placement, setRank] = useState<number | null>(
    null
  );
  const [killpoint, setKP] = useState<number | null>(null);
  const [tier, setTier] = useState<Tier | null>(null);
  return (
    <div>
      <Inputs
        placement={placement}
        setPlacement={setRank}
        killpoint={killpoint}
        setKP={setKP}
        tier={tier}
        setTier={setTier}
      />
      <Output
        placement={placement}
        killpoint={killpoint}
        tier={tier}
      />
    </div>
  );
}

export default App;
