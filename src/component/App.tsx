/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react/macro";
import { useState } from "react";
import { Tier, Tiers } from "../data";
import { Header } from "./Header";
import { Inputs } from "./Inputs";
import { Output } from "./Output";
export default function App() {
  const placement = useState<number>(1);
  const killPoint = useState<number>(0);
  const tier = useState<Tier>(Tiers[0]);
  const lostForgiveness = useState<boolean>(false);
  return (
    <>
      <Header />
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
    </>
  );
}
