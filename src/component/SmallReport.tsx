/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react/macro";
import styled from "@emotion/styled/macro";
import { useTranslation } from "react-i18next";
import { range } from "../util/range";
import { Tier } from "../data";
import { calcRP } from "../rpCalculator";
import { TwoDTableFormat } from "./TwoDTableFormat";
import { useContext } from "react";
import { PageStateContext } from "./App";
import { action } from "mobx";
import { observer } from "mobx-react-lite";
type ExtraThProps = {
  selected?: boolean;
};

const XTitleTh = styled.th`
  border: solid 2px lightgray;
  text-align: center;
  cursor: default;
`;
const YTitleTh = styled.th`
  width: 80px;
  border: solid 2px lightgray;
  text-align: center;
  cursor: default;
`;
const SubXTh = styled.th`
  border: solid 2px lightgray;
  text-align: center;
  background-color: ${({ selected }: ExtraThProps) =>
    selected ? "dimgray" : undefined};
  color: ${({ selected }: ExtraThProps) =>
    selected ? "white" : undefined};
  cursor: pointer;
  width: 36px;
  :hover {
    background-color: lightgray;
  }
`;
const SubYTh = styled.th`
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
const Table = (props: any) => (
  <div
    css={css`
      overflow-x: scroll;
      width: 100%;
      height: 50vh;
    `}
  >
    <table
      css={css`
  position: relative;
  width: 800px;
  border-collapse: collapse;
      `}
      {...props}
    >
      {props.children}
    </table>
  </div>
);
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
      <SubXTh
        scope="col"
        onClick={handleClick}
        selected={placement == pageState.placement}
      >
        {placement}
      </SubXTh>
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
      <SubYTh
        scope="row"
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
export function SmallReport({
  tier,
  lostForgiveness,
}: Props) {
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
            <XTitleTh {...props}>{t("Placement")}</XTitleTh>
          ),
          values: range(20, 1),
          header: (a) => (
            <ColumnHeader placement={a.value} />
          ),
        },
        y: {
          label: (props) => (
            <YTitleTh {...props}>
              {t("Kill/Assist Points")}
            </YTitleTh>
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
