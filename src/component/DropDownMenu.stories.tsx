import React, { useMemo, useState } from "react";
import {
  ComponentStory,
  ComponentMeta,
} from "@storybook/react";

import { DropDownMenu } from "./DropDownMenu";
import { observable } from "mobx";
import { Observer } from "mobx-react-lite";

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
  const selected = useMemo(() => observable.box(1), []);
  return (
    <div>
      <Observer>
        {() => <div>{"" + selected.get()}</div>}
      </Observer>
      <DropDownMenu {...args} selected={selected} />
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
