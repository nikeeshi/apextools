import React, { Dispatch, SetStateAction, useState } from "react";
function Inputs({
  rank,
  setRank,
  kp,
  setKP,
  tier,
  setTier,
}: {
  rank: number | null;
  setRank: Dispatch<SetStateAction<number | null>>;
  kp: number | null;
  setKP: Dispatch<SetStateAction<number | null>>;
  tier: number | null;
  setTier: Dispatch<SetStateAction<number | null>>;
}) {
  return (
    <div>
      <label>
        Rank
        <input
          type="number"
          min="1"
          max="20"
          step="1"
          value={rank ?? ""}
          onChange={(e) =>
            setRank(
              e.target.value === null ? null : parseInt(e.target.value, 10)
            )
          }
        />
      </label>
      <label>
        Kill/Assist Point
        <input
          type="number"
          min="0"
          max="20"
          step="1"
          value={kp ?? ""}
          onChange={(e) =>
            setKP(e.target.value === null ? null : parseInt(e.target.value, 10))
          }
        />
      </label>
      <label>
        Tier
        <input
          type="number"
          min="0"
          max="4"
          step="1"
          value={tier ?? ""}
          onChange={(e) =>
            setTier(
              e.target.value === null ? null : parseInt(e.target.value, 10)
            )
          }
        />
      </label>
    </div>
  );
}

function Output({
  rank,
  kp,
  tier,
}: {
  rank: number | null;
  kp: number | null;
  tier: number | null;
}) {
  if (rank !== null && kp !== null && tier !== null) {
    const rpFromPlacement =
      rank > 13
        ? 0
        : rank > 10
        ? 5
        : rank > 8
        ? 10
        : rank > 6
        ? 20
        : rank > 4
        ? 30
        : rank > 2
        ? 40
        : rank > 1
        ? 60
        : 100;
    const rpPerKill =
      rank > 10 ? 10 : rank > 5 ? 12 : rank > 3 ? 15 : rank > 1 ? 20 : 25;
    const totalRP = rpFromPlacement + Math.min(rpPerKill * kp, 175);
    return (
      <div>
        <label>Total RP: {totalRP}</label>
      </div>
    );
  }
  return null;
}
function App() {
  const [rank, setRank] = useState<number | null>(null);
  const [kp, setKP] = useState<number | null>(null);
  const [tier, setTier] = useState<number | null>(null);
  return (
    <div>
      <Inputs
        rank={rank}
        setRank={setRank}
        kp={kp}
        setKP={setKP}
        tier={tier}
        setTier={setTier}
      />
      <Output rank={rank} kp={kp} tier={tier} />
    </div>
  );
}

export default App;
