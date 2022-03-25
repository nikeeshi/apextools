/** @jsxImportSource @emotion/react */
import {
  jsx,
  css,
  Global,
  keyframes,
} from "@emotion/react/macro";
import { ValueSetterPair } from "../variable/valueSetterPair";

type Props<Candidates extends readonly string[]> = {
  label: string;
  list: Candidates;
  selected: ValueSetterPair<Candidates[number]>;
};
type RadioStyleSelectorOptionProps = {
  onClick: () => void;
  selected: boolean;
  label: string;
};

export function RadioStyleSelectorOption({
  onClick,
  selected,
  label,
}: RadioStyleSelectorOptionProps) {
  return (
    <button
      onClick={onClick}
      css={{
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: selected ? "#000000" : "#efefef",
        backgroundColor: "#efefef",
        marginLeft: 0,
      }}
    >
      {label}
    </button>
  );
}
export function RadioStyleSelector<
  Candidates extends readonly string[]
>({ label, selected, list }: Props<Candidates>) {
  const [selectedItem, select] = selected;
  return (
    <label>
      {label}{" "}
      <div>
        {list.map((item) => (
          <RadioStyleSelectorOption
            onClick={() => {
              select(item);
            }}
            selected={selectedItem === item}
            label={item}
            key={item}
          />
        ))}
      </div>
    </label>
  );
}
