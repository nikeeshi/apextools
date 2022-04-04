import { useLocalObservable } from "mobx-react-lite";

export type PrimitiveState<T> = {
  current: T;
};
export function usePrimitiveState<T>(
  initialValue: T
): PrimitiveState<T> {
  return useLocalObservable(() => ({
    current: initialValue,
  }));
}
