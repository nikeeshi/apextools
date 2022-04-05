/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react/macro";
import styled from "@emotion/styled/macro";
import { ReactNode } from "react";

const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
`;
const FirstRow = styled.tr``;
const SecondRow = styled.tr``;
const BodyRow = styled.tr``;
const RowLabel = styled.th`
  border: solid 2px lightgray;
  text-align: center;
`;
const ColumnLabel = styled.th`
  border: solid 2px lightgray;
  text-align: center;
`;
const ColumnHeader = styled.th`
  border: solid 2px lightgray;
  text-align: center;
`;
const RowHeader = styled.th`
  border: solid 2px lightgray;
  text-align: center;
`;
const Cell = styled.td`
  border: solid 2px lightgray;
  text-align: end;
`;
export type Axis<T> = {
  label: ReactNode;
  values: T[];
  header(value: T): ReactNode;
};
export type TwoDTableProps<X, Y> = {
  axises: [Axis<X>, Axis<Y>];
  cell: (x: X, y: Y) => ReactNode;
};
export function TwoDTable<X, Y>({
  axises: [xAxis, yAxis],
  cell,
}: TwoDTableProps<X, Y>): JSX.Element {
  return (
    <Table>
      <thead>
        <FirstRow>
          <RowLabel scope="col" rowSpan={2}>
            {yAxis.label}
          </RowLabel>
          <ColumnLabel
            scope="col"
            colSpan={xAxis.values.length}
          >
            {xAxis.label}
          </ColumnLabel>
        </FirstRow>
        <SecondRow>
          {/* An extended row here */}
          {xAxis.values.map((x) => (
            <ColumnHeader scope="col">
              {xAxis.header(x)}
            </ColumnHeader>
          ))}
        </SecondRow>
      </thead>
      <tbody>
        {yAxis.values.map((y) => (
          <BodyRow>
            <RowHeader scope="row">
              {yAxis.header(y)}
            </RowHeader>
            {xAxis.values.map((x) => (
              <Cell>{cell(x, y)}</Cell>
            ))}
          </BodyRow>
        ))}
      </tbody>
    </Table>
  );
}
