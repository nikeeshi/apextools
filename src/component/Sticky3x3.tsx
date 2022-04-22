/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react/macro";
import { forwardRef, ReactNode, Ref } from "react";

type Vec3<T> = [T, T, T];
export const Sticky3x3 = forwardRef(
  (
    {
      width,
      height,
      innerWidth,
      innerHeight,
      cells,
      fakeBackground = false,
    }: {
      width: number;
      height: number;
      innerWidth: Vec3<number>;
      innerHeight: Vec3<number>;
      cells: Vec3<Vec3<ReactNode>>;
      fakeBackground?: boolean;
    },
    ref: Ref<HTMLDivElement>
  ) => {
    const totalInnerWidth =
      innerWidth[0] + innerWidth[1] + innerWidth[2];
    const totalInnerHeight =
      innerHeight[0] + innerHeight[1] + innerHeight[2];
    const cell = (x: 0 | 1 | 2, y: 0 | 1 | 2) => (
      <div
        css={css`
          width: ${innerWidth[x]}px;
          height: ${innerHeight[y]}px;
          ${fakeBackground
            ? `background-color: rgba(
          ${x * 127},
          ${y * 127},
          ${255 - y * 127},
          1
        );`
            : ""}
          order: ${x + y * 3};
          position: sticky;
          ${y === 0 ? "top: 0;" : ""}
          ${y === 2 ? "bottom: 0;" : ""}
        ${x === 0 ? "left: 0;" : ""}
        ${x === 2 ? "right: 0;" : ""}
        `}
      >
        {cells[y][x]}
      </div>
    );
    return (
      <div
        css={css`
          overflow: auto;
          width: ${width}px;
          height: ${height}px;
          resize: both;
        `}
        ref={ref}
      >
        <div
          css={css`
            position: relative;
            display: flex;
            flex-wrap: wrap;
            width: ${totalInnerWidth}px;
            height: ${totalInnerHeight}px;
          `}
        >
          {/* center */}
          {cell(1, 1)}
          {/* edges */}
          {cell(1, 0)}
          {cell(0, 1)}
          {cell(2, 1)}
          {cell(1, 2)}
          {/* corners */}
          {cell(0, 0)}
          {cell(2, 0)}
          {cell(0, 2)}
          {cell(2, 2)}
        </div>
      </div>
    );
  }
);
