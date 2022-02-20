import { useMemo, useState } from "react";

export function useRerender() {
  const [, setCounter] = useState(0);
  const rerender = useMemo(() => {
    setCounter((c) => c + 1);
  }, []);
  return rerender;
}
