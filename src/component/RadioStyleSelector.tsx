/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react/macro";
import { ValueSetterPair } from "../variable/valueSetterPair";

export type RadioStyleSelectorProps<Item> = {
  label: string;
  list: readonly Item[];
  selected: ValueSetterPair<Item>;
  itemLabel: (i: Item) => string;
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
export function RadioStyleSelector<Item extends any>({
  label,
  selected,
  list,
  itemLabel,
}: RadioStyleSelectorProps<Item>) {
  const [selectedItem, select] = selected;
  return (
    <label>
      {label}{" "}
      <div>
        {list.map((item, index) => (
          <RadioStyleSelectorOption
            onClick={() => {
              select(item);
            }}
            selected={selectedItem === item}
            label={itemLabel(item)}
            key={index}
          />
        ))}
      </div>
    </label>
  );
}
