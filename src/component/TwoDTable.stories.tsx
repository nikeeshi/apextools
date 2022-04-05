import {
  ComponentMeta,
} from "@storybook/react";

import { TwoDTable, TwoDTableProps } from "./TwoDTable";

export default {
  component: TwoDTable,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {},
} as ComponentMeta<typeof TwoDTable>;

const Template: any = (
  args: TwoDTableProps<number, number>
) => <TwoDTable {...args} />;

export const Primary = Template.bind({});
const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
Primary.args = {
  axises: [
    {
      label: "x",
      values: [0, 1, 2],
      header: (value: number) => value,
    },
    {
      label: "y",
      values: [0, 1, 2],
      header: (value: number) => value,
    },
  ],
  cell: (x: number, y: number) => data[x][y],
};
