import { Dispatch, SetStateAction } from "react";

export type ValueSetterPair<T> = [
  T,
  Dispatch<SetStateAction<T>>
];