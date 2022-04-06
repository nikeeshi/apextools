/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react/macro";
import { createContext, useMemo } from "react";
import { Tier, Tiers } from "../data";
import { Header } from "./Header";
import { Inputs } from "./Inputs";
import { Output } from "./Output";
import { Observer } from "mobx-react-lite";
import { observable } from "mobx";
import { useSyncedBox } from "../util/useConvertedObservable";
export type PageState = {
  placement: number;
  killPoint: number;
  tier: Tier;
  lostForgiveness: boolean;
};
export const PageStateContext = createContext(
  null as any as PageState
);

export default function App() {
  const pageState = useMemo<PageState>(
    () =>
      observable({
        placement: 20,
        killPoint: 0,
        tier: Tiers[0],
        lostForgiveness: false,
      }),
    []
  );
  const placement = useSyncedBox(pageState, "placement");
  const killPoint = useSyncedBox(pageState, "killPoint");
  const tier = useSyncedBox(pageState, "tier");
  const lostForgiveness = useSyncedBox(
    pageState,
    "lostForgiveness"
  );

  return (
    <PageStateContext.Provider value={pageState}>
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
            placement={placement.get()}
            killPoint={killPoint.get()}
            tier={tier.get()}
            lostForgiveness={lostForgiveness.get()}
          />
        )}
      </Observer>
    </PageStateContext.Provider>
  );
}
