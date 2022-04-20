/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react/macro";
import { Sticky3x3 } from "./Sticky3x3";

export default {};
export const A = () => {
  return (
    <Sticky3x3
      width={700}
      height={700}
      innerWidth={[200, 300, 400]}
      innerHeight={[250, 350, 450]}
      cells={[
        ["top-left", "top", "top-right"],
        ["left", "center", "right"],
        ["bottom-left", "bottom", "bottom-right"],
      ]}
      cellBackgroundColors={[
        [null, null, null],
        [null, "lightgray", null],
        [null, null, null],
      ]}
    />
  );
};
