/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled/macro";
import { ComponentMeta } from "@storybook/react";
import {
  HeaderCellConfig,
  TwoDTableLayout,
  TwoDTableLayoutProps,
} from "./TwoDTableLayout";

export default {
  component: TwoDTableLayout,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {},
} as ComponentMeta<typeof TwoDTableLayout>;

const Template: any = (
  args: TwoDTableLayoutProps<number, number>
) => <TwoDTableLayout {...args} />;

export const Primary = Template.bind({});
const Th = styled.th`
  border: solid 2px lightgray;
  text-align: center;
`;
const Td = styled.td`
  border: solid 2px lightgray;
  text-align: end;
`;
const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
`;
const Tr = styled.tr``;
Primary.args = {
  axises: {
    x: {
      label: (props: HeaderCellConfig) => (
        <Th {...props}>x</Th>
      ),
      values: [0, 1, 2],
      header: ({ value }) => <Th scope="col">{value}</Th>,
    },
    y: {
      label: (props) => <Th {...props}>y</Th>,
      values: [3, 4, 5],
      header: ({ value }) => <Th scope="row">{value}</Th>,
    },
  },
  caption: () => <caption>caption</caption>,
  cell: ({ x, y }: { x: number; y: number }) => (
    <Td>{"" + x + y}</Td>
  ),
  Table: (props: any) => <Table {...props} />,
  Tr: (props: any) => <Tr {...props} />,
} as TwoDTableLayoutProps<number, number>;
