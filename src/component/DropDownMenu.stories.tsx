import React, { useState } from "react";
import {
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";

import { DropDownMenu } from "./DropDownMenu";

export default {
  component: DropDownMenu,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    label: "RadioStyleSelector",
  },
} as ComponentMeta<typeof DropDownMenu>;

const Template: ComponentStory<typeof DropDownMenu> = (
  args
) => {
  const selected = useState<string>("1");
  return (
    <div>
      <div>{"" + selected[0]}</div>
      <DropDownMenu {...args} selected={selected as any} />
    </div>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Button",
  list: [1, 2, 3],
  itemLabel: (a) => a + "",
};
