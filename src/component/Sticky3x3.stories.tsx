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
        [
          <div
            css={css`
              height: 100%;
              width: 100%;
              background-color: orange;
            `}
          >
            bottom-left
          </div>,
          "bottom",
          "bottom-right",
        ],
      ]}
      fakeBackground
    />
  );
};
