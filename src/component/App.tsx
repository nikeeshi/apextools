/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react/macro";
import { useState } from "react";
import { Tier, Tiers } from "../data";
import { Header } from "./Header";
import { Inputs } from "./Inputs";
import { Output } from "./Output";
import { usePrimitiveState } from "../util/usePrimitiveState";
import { Observer } from "mobx-react-lite";

export default function App() {
  const placement = usePrimitiveState(1);
  const killPoint = usePrimitiveState(0);
  const tier = usePrimitiveState<Tier>(Tiers[0]);
  const lostForgiveness = usePrimitiveState(false);

  return (
    <>
      <Header />
      <Inputs
        placement={placement}
        killPoint={killPoint}
        tier={tier}
        lostForgiveness={lostForgiveness}
      />
      <Observer>
        {() => (
          <Output
            placement={placement.current}
            killPoint={killPoint.current}
            tier={tier.current}
            lostForgiveness={lostForgiveness.current}
          />
        )}
      </Observer>
    </>
  );
}
