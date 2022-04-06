import { ComponentType, Fragment, ReactNode } from "react";

export type HeaderCellConfig = {
  colSpan?: number;
  rowSpan?: number;
};
export type Axis<T> = {
  label: (config?: HeaderCellConfig) => ReactNode;
  values: T[];
  header: (props: { value: T }) => ReactNode;
};
export type TwoDTableFormatProps<X, Y> = {
  axises: { x: Axis<X>; y: Axis<Y> };
  cell: (props: { x: X; y: Y }) => ReactNode;
  caption: () => ReactNode;
  Table: ComponentType;
  Tr: ComponentType;
};

export function TwoDTableFormat<X, Y>({
  axises: { x: xAxis, y: yAxis },
  cell,
  caption,
  Table,
  Tr,
}: TwoDTableFormatProps<X, Y>) {
  return (
    <Table>
      {caption()}
      <thead>
        <Tr>
          {yAxis.label({ rowSpan: 2 })}
          {xAxis.label({ colSpan: xAxis.values.length })}
        </Tr>
        <Tr>
          {xAxis.values.map((x, i) => (
            <Fragment key={i}>
              {xAxis.header({ value: x })}
            </Fragment>
          ))}
        </Tr>
      </thead>
      <tbody>
        {yAxis.values.map((y, i) => (
          <Tr key={i}>
            {yAxis.header({ value: y })}
            {xAxis.values.map((x, j) => (
              <Fragment key={j}>{cell({ x, y })}</Fragment>
            ))}
          </Tr>
        ))}
      </tbody>
    </Table>
  );
}
