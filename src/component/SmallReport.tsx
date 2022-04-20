/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react/macro";
import styled from "@emotion/styled/macro";
import { useTranslation } from "react-i18next";
import { range } from "../util/range";
import { Tier } from "../data";
import { calcRP } from "../rpCalculator";
import { useContext } from "react";
import { PageStateContext } from "./App";
import { action } from "mobx";
import { observer } from "mobx-react-lite";
import { ScrollableTable } from "./ScrollableTable";
type ExtraThProps = {
  selected?: boolean;
};

const XCaption = styled.div`
  text-align: center;
  cursor: default;
  background-color: white;
  font-weight: bold;
  width: 100%;
  height: 100%;
`;
const YCaption = styled.div`
  text-align: center;
  cursor: default;
  background-color: white;
  font-weight: bold;
  width: 100%;
  height: 100%;
`;
const SubXTh = styled.div`
  text-align: center;
  background-color: ${({ selected }: ExtraThProps) =>
    selected ? "dimgray" : "white"};
  color: ${({ selected }: ExtraThProps) =>
    selected ? "white" : undefined};
  cursor: pointer;
  :hover {
    background-color: lightgray;
  }
  font-weight: bold;
  width: 100%;
  height: 100%;
`;
const SubYTh = styled.div`
  text-align: center;
  background-color: ${({ selected }: ExtraThProps) =>
    selected ? "dimgray" : "white"};
  color: ${({ selected }: ExtraThProps) =>
    selected ? "white" : undefined};
  cursor: pointer;
  :hover {
    background-color: lightgray;
  }
  font-weight: bold;
  width: 100%;
  height: 100%;
`;
type ExtraTdProps = {
  selected?: boolean;
};
const CellStyled = styled.div`
  text-align: end;
  background-color: ${({ selected }: ExtraTdProps) =>
    selected ? "dimgray" : "white"};
  color: ${({ selected }: ExtraThProps) =>
    selected ? "white" : undefined};
  cursor: pointer;
  :hover {
    background-color: lightgray;
  }
  width: 100%;
  height: 100%;
`;

export const Cell = observer(
  ({
    placement,
    killPoint,
  }: {
    placement: number;
    killPoint: number;
  }) => {
    const pageState = useContext(PageStateContext);
    const rp = calcRP({
      placement,
      killPoint,
      tier: pageState.tier,
      lostForgiveness: pageState.lostForgiveness,
    });
    const handleClick = action(() => {
      pageState.placement = placement;
      pageState.killPoint = killPoint;
    });

    return (
      <CellStyled
        selected={
          placement == pageState.placement &&
          killPoint == pageState.killPoint
        }
        onClick={handleClick}
      >
        {rp}
      </CellStyled>
    );
  }
);

export const XHeader = observer(
  ({ placement }: { placement: number }) => {
    const pageState = useContext(PageStateContext);

    const handleClick = action(() => {
      pageState.placement = placement;
    });

    return (
      <SubXTh
        onClick={handleClick}
        selected={placement == pageState.placement}
      >
        {placement}
      </SubXTh>
    );
  }
);
export const YHeader = observer(
  ({ killPoint }: { killPoint: number }) => {
    const pageState = useContext(PageStateContext);

    const handleClick = action(() => {
      pageState.killPoint = killPoint;
    });

    return (
      <SubYTh
        onClick={handleClick}
        selected={killPoint == pageState.killPoint}
      >
        {killPoint}
      </SubYTh>
    );
  }
);
type Props = {
  tier: Tier;
  lostForgiveness: boolean;
};
export function SmallReport({}: Props) {
  const { t } = useTranslation();
  const vw = document.body.clientWidth;
  return (
    <ScrollableTable 
      viewport={[vw, 532]}
      borderColor="lightgray"
      xs={range(20, 1)}
      ys={range(13, 0)}
      xCaption={(props) => (
        <XCaption {...props}>{t("Placement")}</XCaption>
      )}
      yCaption={(props) => (
        <YCaption {...props}>
          {t("Kill/Assist Points")}
        </YCaption>
      )}
      xHeader={(x) => <XHeader placement={x} />}
      yHeader={(y) => <YHeader killPoint={y} />}
      cell={(x, y) => <Cell placement={x} killPoint={y} />}
    />
  );
}
