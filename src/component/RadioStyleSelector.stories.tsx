import React, { useState } from "react";
import {
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";

import {
  RadioStyleSelector,
  RadioStyleSelectorProps,
} from "./RadioStyleSelector";

export default {
  component: RadioStyleSelector,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    label: "RadioStyleSelector",
  },
} as ComponentMeta<typeof RadioStyleSelector>;

const Template: any = (
  args: RadioStyleSelectorProps<string>
) => {
  const selected = useState<string>(args.list[0]);
  return (
    <div>
      <div>{"" + selected[0]}</div>
      {/* <RadioStyleSelector {...args} selected={selected} /> */}
    </div>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Button",
  list: ["1", "2", "3"],
  itemLabel: (a: string) => a,
};
