/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react/macro";
import { useState } from "react";
import { ReactNode } from "react";
import { FakeStickyDiv } from "../useFakeSticky";
type Vec2 = [number, number];

function Container({
  viewport,
  children,
}: {
  viewport: Vec2;
  children: (innerSize: Vec2) => ReactNode;
}) {
  const [divElement, setDivElement] =
    useState<HTMLDivElement | null>(null);
  return (
    <div
      css={css`
        position: relative;
        width: ${viewport[0]}px;
        height: ${viewport[1]}px;
        border: 2px solid lightgray;
        overflow: scroll;
        box-sizing: border-box;
      `}
      ref={(div) => div && setDivElement(div)}
    >
      {divElement &&
        children([
          divElement.clientWidth ?? 0,
          divElement.clientHeight ?? 0,
        ])}
    </div>
  );
}

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
  xCaption = () => "X",
  yCaption = () => "Y",
  xHeader = (x) => x,
  yHeader = (y) => y,
  cell = (x, y) => `${x} ${y}`,
}: {
  viewport?: Vec2;
  headerSize?: Vec2;
  cellSize?: Vec2;
  colCaptionHeight?: number;
  borderColor?: string;
  gap?: number;
  headerGap?: number;
  xs?: X[];
  ys?: Y[];
  xCaption?: () => ReactNode;
  yCaption?: () => ReactNode;
  xHeader?: (x: X) => ReactNode;
  yHeader?: (y: Y) => ReactNode;
  cell?: (x: X, y: Y) => ReactNode;
}) {
  const xHeaderSize = [
    cellSize[0],
    headerSize[1] - colCaptionHeight - headerGap,
  ];
  return (
    <Container viewport={viewport}>
      {(innerSize) => (
        <>
          <FakeStickyDiv
            left={[0, "sticky"]}
            top={[0, "sticky"]}
            css={css`
              z-index: 3;
            `}
          >
            <div
              css={css`
                position: absolute;
                left: 0;
                top: 0;
                width: ${headerSize[0]}px;
                height: ${headerSize[1]}px;
                border-style: solid;
                border-width: ${gap}px ${headerGap}px
                  ${headerGap}px ${gap}px;
                border-color: ${borderColor};
                background-color: white;
              `}
            >
              {yCaption()}
            </div>
            <div
              css={css`
                position: absolute;
                left: ${headerSize[0] + gap}px;
                top: 0;
                width: ${innerSize[0] -
                headerSize[0] -
                headerGap -
                gap * 2}px;
                height: ${colCaptionHeight}px;
                border-style: solid;
                border-width: ${gap}px ${gap}px
                  ${headerGap}px ${headerGap}px;
                border-color: ${borderColor};
                background-color: white;
              `}
            >
              {xCaption()}
            </div>
          </FakeStickyDiv>
          <FakeStickyDiv
            left={[headerSize[0] + headerGap, "absolute"]}
            top={[colCaptionHeight, "sticky"]}
            css={css`
              z-index: 2;
            `}
          >
            {xs.map((x, index) => (
              <div
                css={css`
                  position: absolute;
                  left: ${(xHeaderSize[0] + gap) * index}px;
                  top: 0;
                  width: ${xHeaderSize[0]}px;
                  height: ${headerSize[1] -
                  colCaptionHeight -
                  headerGap +
                  gap}px;
                  border-style: solid;
                  border-width: ${headerGap}px ${gap}px;
                  border-color: ${borderColor};
                  background-color: white;
                `}
              >
                {xHeader(x)}
              </div>
            ))}
          </FakeStickyDiv>
          <FakeStickyDiv
            left={[0, "sticky"]}
            top={[headerSize[1] + headerGap, "absolute"]}
            css={css`
              z-index: 2;
            `}
          >
            {ys.map((y, index) => (
              <div
                css={css`
                  position: absolute;
                  left: 0;
                  top: ${(cellSize[1] + gap) * index}px;
                  width: ${headerSize[0]}px;
                  height: ${cellSize[1]}px;
                  border-style: solid;
                  border-width: ${gap}px ${headerGap}px
                    ${gap}px ${gap}px;
                  border-color: ${borderColor};
                  background-color: white;
                `}
              >
                {yHeader(y)}
              </div>
            ))}
          </FakeStickyDiv>
          <div
            css={css`
              position: absolute;
              left: ${headerSize[0] + headerGap}px;
              top: ${headerSize[1] + headerGap}px;
              z-index: 1;
            `}
          >
            {xs.map((x, xIndex) =>
              ys.map((y, yIndex) => (
                <div
                  css={css`
                    position: absolute;
                    left: ${(cellSize[0] + gap) * xIndex}px;
                    top: ${(cellSize[1] + gap) * yIndex}px;
                    width: ${cellSize[0]}px;
                    height: ${cellSize[1]}px;
                    border: ${gap}px solid ${borderColor};
                    background-color: white;
                    overflow: hidden;
                  `}
                >
                  {cell(x, y)}
                </div>
              ))
            )}
          </div>
        </>
      )}
    </Container>
  );
}
