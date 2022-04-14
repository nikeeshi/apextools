/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react/macro";
import styled from "@emotion/styled/macro";
import { useTranslation } from "react-i18next";
import { range } from "../util/range";
import { Tier } from "../data";
import { calcRP } from "../rpCalculator";
import { TwoDTableLayout } from "./TwoDTableLayout";
import { useContext } from "react";
import { PageStateContext } from "./App";
import { action } from "mobx";
import { observer } from "mobx-react-lite";
type ExtraThProps = {
  selected?: boolean;
};

const TopTh = styled.th`
  border: solid 2px lightgray;
  text-align: center;
  cursor: default;
`;
const SubTh = styled.th`
  border: solid 2px lightgray;
  text-align: center;
  background-color: ${({ selected }: ExtraThProps) =>
    selected ? "dimgray" : undefined};
  color: ${({ selected }: ExtraThProps) =>
    selected ? "white" : undefined};
  cursor: pointer;
  :hover {
    background-color: lightgray;
  }
`;
type ExtraTdProps = {
  selected?: boolean;
};
const Td = styled.td`
  border: solid 2px lightgray;
  text-align: end;
  background-color: ${({ selected }: ExtraTdProps) =>
    selected ? "dimgray" : undefined};
  color: ${({ selected }: ExtraThProps) =>
    selected ? "white" : undefined};
  cursor: pointer;
  :hover {
    background-color: lightgray;
  }
`; 
const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
`;
const Tr = styled.tr``;

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
      <Td
        selected={
          placement == pageState.placement &&
          killPoint == pageState.killPoint
        }
        onClick={handleClick}
      >
        {rp}
      </Td>
    );
  }
);

export const ColumnHeader = observer(
  ({ placement }: { placement: number }) => {
    const pageState = useContext(PageStateContext);

    const handleClick = action(() => {
      pageState.placement = placement;
    });

    return (
      <SubTh
        scope="col"
        onClick={handleClick}
        selected={placement == pageState.placement}
      >
        {placement}
      </SubTh>
    );
  }
);
export const RowHeader = observer(
  ({ killPoint }: { killPoint: number }) => {
    const pageState = useContext(PageStateContext);

    const handleClick = action(() => {
      pageState.killPoint = killPoint;
    });

    return (
      <SubTh
        scope="row"
        onClick={handleClick}
        selected={killPoint == pageState.killPoint}
      >
        {killPoint}
      </SubTh>
    );
  }
);
type Props = {
  tier: Tier;
  lostForgiveness: boolean;
};
export function Report({ tier, lostForgiveness }: Props) {
  const { t } = useTranslation();

  return (
    <TwoDTableLayout
      caption={() => (
        <caption>
          {lostForgiveness
            ? t("RP for {{tier}} with lost forgiveness", {
                tier: t(tier),
              })
            : t("RP for {{tier}}", { tier: t(tier) })}
        </caption>
      )}
      axises={{
        x: {
          label: (props) => (
            <TopTh {...props}>{t("Placement")}</TopTh>
          ),
          values: range(20, 1),
          header: (a) => (
            <ColumnHeader placement={a.value} />
          ),
        },
        y: {
          label: (props) => (
            <TopTh {...props}>
              {t("Kill/Assist Points")}
            </TopTh>
          ),
          values: range(13, 0),
          header: (a) => <RowHeader killPoint={a.value} />,
        },
      }}
      cell={({ x, y }) => {
        return <Cell placement={x} killPoint={y} />;
      }}
      Table={(props: any) => <Table {...props} />}
      Tr={(props: any) => <Tr {...props} />}
    />
  );
}
