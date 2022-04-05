/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react/macro";
import styled from "@emotion/styled/macro";
import { ReactNode } from "react";

const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
`;
const Tr = styled.tr``;
const Th = styled.th`
  border: solid 2px lightgray;
  text-align: center;
`;
const Td = styled.td`
  border: solid 2px lightgray;
  text-align: end;
`;
export type Axis<T> = {
  label: ReactNode;
  values: T[];
  header(value: T): ReactNode;
};
export type TableProps<X, Y> = {
  axises: [Axis<X>, Axis<Y>];
  cell: (...value: [X, Y]) => ReactNode;
};
export function TwoDTable<X, Y>({
  axises: [xAxis, yAxis],
  cell,
}: TableProps<X, Y>): JSX.Element {
  return (
    <Table>
      <Tr>
        <Th scope="col" rowSpan={2}>
          {yAxis.label}
        </Th>
        <Th scope="col" colSpan={xAxis.values.length}>
          {xAxis.label}
        </Th>
      </Tr>
      <Tr>
        {/* An extended row here */}
        {xAxis.values.map((x) => (
          <Th scope="col">{xAxis.header(x)}</Th>
        ))}
      </Tr>
      {yAxis.values.map((y) => (
        <Tr>
          <Th scope="row">{yAxis.header(y)}</Th>
          {xAxis.values.map((x) => (
            <Td>{cell(x, y)}</Td>
          ))}
        </Tr>
      ))}
    </Table>
  );
}
