/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react/macro";
import styled from "@emotion/styled/macro";
import { useTranslation } from "react-i18next";
import { range } from "../util/range";
import { Tier } from "../data";
import { calcRP } from "../rpCalculator";
import { TwoDTableFormat } from "./TwoDTableFormat";
import { useContext } from "react";
import { PageStateContext } from "./App";
import { action } from "mobx";
import { observer, Observer } from "mobx-react-lite";
type ExtraThProps = {
  selected?: boolean;
};
const Th = styled.th`
  border: solid 2px lightgray;
  text-align: center;
  background-color: ${({ selected }: ExtraThProps) =>
    selected ? "dimgray" : undefined};
  color: ${({ selected }: ExtraThProps) =>
    selected ? "white" : undefined};
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
      <Th
        scope="col"
        onClick={handleClick}
        selected={placement == pageState.placement}
      >
        {placement}
      </Th>
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
      <Th
        scope="row"
        onClick={handleClick}
        selected={killPoint == pageState.killPoint}
      >
        {killPoint}
      </Th>
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
    <TwoDTableFormat
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
            <Th {...props}>{t("Placement")}</Th>
          ),
          values: range(20, 1),
          header: (a) => (
            <ColumnHeader placement={a.value} />
          ),
        },
        y: {
          label: (props) => (
            <Th {...props}>{t("Kill/Assist Points")}</Th>
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