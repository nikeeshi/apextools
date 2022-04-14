/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react/macro";
import { useEffect, RefObject, useRef } from "react";

// Need to set
// position: absolute;
// top: 0;
// left: 0;
export function useFakeSticky(
  ref: RefObject<HTMLElement>,
  left: [number, "sticky" | "absolute"],
  top: [number, "sticky" | "absolute"]
) {
  useEffect(() => {
    const updatePosition = () => {
      const x =
        left[0] +
        (left[1] == "sticky"
          ? ref.current?.offsetParent?.scrollLeft ?? 0
          : 0);
      const y =
        top[0] +
        (top[1] == "sticky"
          ? ref.current?.offsetParent?.scrollTop ?? 0
          : 0);

      if (ref.current) {
        ref.current.style.transform = `translate(${x}px,${y}px)`;
      }
    };
    updatePosition();
    ref.current?.offsetParent?.addEventListener(
      "scroll",
      updatePosition
    );
    return () => {
      ref.current?.offsetParent?.removeEventListener(
        "scroll",
        updatePosition
      );
    };
  }, []);
}

export function FakeStickyDiv({
  left,
  top,
  ...rest
}: {
  left: [number, "sticky" | "absolute"];
  top: [number, "sticky" | "absolute"];
} & Record<string, any>) {
  const ref = useRef<HTMLDivElement>(null);
  useFakeSticky(ref, left, top);
  return (
    <div
      css={css`
        position: absolute;
        left: 0;
        top: 0;
      `}
      ref={ref}
      {...rest}
    />
  );
}
