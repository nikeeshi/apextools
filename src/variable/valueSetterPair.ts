import { Dispatch, SetStateAction } from "react";

export type ValueSetterPair<T> = [
  T,
  Dispatch<SetStateAction<T>>
];
export function applyFnToVSPair<T, S>(
  [value, setValue]: ValueSetterPair<T>,
  fn: (a: T) => S,
  reverseFn: (a: S) => T
): ValueSetterPair<S> {
  return [
    fn(value),
    (a: SetStateAction<S>) => {
      if (a instanceof Function)
        setValue((b) => reverseFn(a(fn(b))));
      else setValue(reverseFn(a));
    },
  ];
}