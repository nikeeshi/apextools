/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react/macro";
import { ReactNode } from "react";
import { Sticky3x3 } from "./Sticky3x3";

export type Config = {
  height: number;
  width: number;
};
type Vec2<T> = [T, T];
type Vec3<T> = [T, T, T];

// x * y
// w * h
export function ScrollableTable<X, Y>({
  viewport = [500, 500],
  headerSize = [80, 60],
  cellSize = [46, 30], // content-box
  colCaptionHeight = 30,
  gap = 2,
  headerGap = 5,
  borderColor = "pink",
  xs = [],
  ys = [],
  xCaption = (config: Config) => "X",
  yCaption = (config: Config) => "Y",
  xHeader = (x, config: Config) => x,
  yHeader = (y, config: Config) => y,
  cell = (x, y, config: Config) => `${x} ${y}`,
}: {
  viewport?: Vec2<number>;
  headerSize?: Vec2<number>;
  cellSize?: Vec2<number>;
  colCaptionHeight?: number;
  borderColor?: string;
  gap?: number;
  headerGap?: number;
  xs?: X[];
  ys?: Y[];
  xCaption?: (config: Config) => ReactNode;
  yCaption?: (config: Config) => ReactNode;
  xHeader?: (x: X, config: Config) => ReactNode;
  yHeader?: (y: Y, config: Config) => ReactNode;
  cell?: (x: X, y: Y, config: Config) => ReactNode;
}) {
  const width = [
    gap + headerSize[0] + headerGap,
    cellSize[0] * xs.length + gap * (xs.length - 1),
    gap,
  ] as Vec3<number>;
  const height = [
    gap + headerSize[1] + headerGap,
    cellSize[1] * ys.length + gap * (ys.length - 1),
    gap,
  ] as Vec3<number>;

  return (
    <Sticky3x3
      width={viewport[0]}
      height={viewport[1]}
      innerWidth={width}
      innerHeight={height}
      cells={[
        [
          <div
            css={css`
              border-style: solid;
              border-color: ${borderColor};
              border-width: ${gap}px ${headerGap}px
                ${headerGap}px ${gap}px;
              width: ${headerSize[0]}px;
              height: ${headerSize[1]}px;
              position: relative;
            `}
          >
            {yCaption({
              width: headerSize[0],
              height: headerSize[1],
            })}
            <div
              css={css`
                border-style: solid;
                border-color: ${borderColor};
                border-width: ${gap}px 0 ${headerGap}px 0;
                width: ${width[1]}px;
                height: ${colCaptionHeight}px;
                position: absolute;
                top: ${-gap}px;
                left: ${headerSize[0] + headerGap}px;
              `}
            >
              {xCaption({
                width: width[1],
                height: colCaptionHeight,
              })}
            </div>
          </div>,
          <div
            css={css`
              border-style: solid;
              border-color: ${borderColor};
              border-width: 0 0 ${headerGap}px 0;
              margin-top: ${gap +
              colCaptionHeight +
              headerGap}px;
            `}
          >
            <div
              css={css`
                display: flex;
                height: ${headerSize[1] -
                colCaptionHeight -
                headerGap}px;
              `}
            >
              {xs.map((x) => (
                <div
                  css={css`
                    :not(:last-child) {
                      border-style: solid;
                      border-color: ${borderColor};
                      border-width: 0 ${gap}px 0 0;
                    }
                    width: ${cellSize[0]}px;
                    height: ${headerSize[1] -
                    colCaptionHeight -
                    headerGap}px;
                  `}
                >
                  {xHeader(x, {
                    width: cellSize[0],
                    height:
                      headerSize[1] -
                      colCaptionHeight -
                      headerGap,
                  })}
                </div>
              ))}
            </div>
          </div>,
          <div
            css={css`
              border-style: solid;
              border-color: ${borderColor};
              border-width: 0 ${gap}px 0 0;
              height: ${height[0]}px;
            `}
          />,
        ],
        [
          <div
            css={css`
              border-style: solid;
              border-color: ${borderColor};
              border-width: 0 ${headerGap}px 0 ${gap}px;
              width: ${headerSize[0]}px;
              height: ${cellSize[1] * ys.length +
              gap * (ys.length - 1)}px;
            `}
          >
            {ys.map((y) => (
              <div
                css={css`
                  :not(:last-child) {
                    border-style: solid;
                    border-color: ${borderColor};
                    border-width: 0 0 ${gap}px 0;
                  }
                  width: ${headerSize[0]}px;
                  height: ${cellSize[1]}px;
                `}
              >
                {yHeader(y, {
                  width: headerSize[0],
                  height: cellSize[1],
                })}
              </div>
            ))}
          </div>,
          <div>
            {ys.map((y) => (
              <div
                css={css`
                  display: flex;
                `}
              >
                {xs.map((x) => (
                  <div
                    css={css`
                      border-style: solid;
                      border-color: ${borderColor};
                      border-width: 0;
                      :not(:last-child) {
                        border-right-width: ${gap}px;
                      }
                      div:not(:last-child) > & {
                        border-bottom-width: ${gap}px;
                      }
                      width: ${cellSize[0]}px;
                      height: ${cellSize[1]}px;
                    `}
                  >
                    {cell(x, y, {
                      width: cellSize[0],
                      height: cellSize[0],
                    })}
                  </div>
                ))}
              </div>
            ))}
          </div>,
          <div
            css={css`
              border-style: solid;
              border-color: ${borderColor};
              border-width: 0 ${gap}px 0 0;
              height: ${height[1]}px;
            `}
          />,
        ],
        [
          <div
            css={css`
              border-style: solid;
              border-color: ${borderColor};
              border-width: 0 0 ${gap}px 0;
              width: ${width[0]}px;
            `}
          />,
          <div
            css={css`
              border-style: solid;
              border-color: ${borderColor};
              border-width: 0 0 ${gap}px 0;
              width: ${width[1]}px;
            `}
          />,
          <div
            css={css`
              border-style: solid;
              border-color: ${borderColor};
              border-width: 0 0 ${gap}px 0;
              width: ${width[2]}px;
            `}
          />,
        ],
      ]}
      cellBackgroundColors={[
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ]}
    />
  );
}
