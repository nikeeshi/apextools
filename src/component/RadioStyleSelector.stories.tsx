import React, { useState } from "react";
import {
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";

import { RadioStyleSelector } from "./RadioStyleSelector";

export default {
  component: RadioStyleSelector,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    label: "RadioStyleSelector",
  },
} as ComponentMeta<typeof RadioStyleSelector>;

const Template: ComponentStory<
  typeof RadioStyleSelector
> = (args) => {
  const selected = useState<string | null>(null);
  return (
    <div>
      <div>{"" + selected[0]}</div>
      <RadioStyleSelector {...args} selected={selected} />
    </div>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Button",
  list: ["1", "2", "3"],
};
