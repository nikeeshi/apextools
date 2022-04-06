import { IObservableValue } from "mobx";
import { useMemo } from "react";

export function useSyncedBox<T, Key extends keyof T>(
  state: T,
  accessor: Key
) {
  const newObservable = useMemo(
    () =>
      ({
        get() {
          return state[accessor];
        },
        set(value: T[Key]) {
          state[accessor] = value;
        },
      } as any as IObservableValue<T[Key]>),
    []
  );
  return newObservable;
}
