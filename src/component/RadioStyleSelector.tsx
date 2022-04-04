/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react/macro";
import { action } from "mobx";
import { Observer } from "mobx-react-lite";
import { PrimitiveState } from "../util/usePrimitiveState";

export type RadioStyleSelectorProps<Item> = {
  label: string;
  list: readonly Item[];
  selected: PrimitiveState<Item>;
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
  return (
    <label>
      {label}{" "}
      <div>
        {list.map((item, index) => (
          <Observer>
            {() => (
              <RadioStyleSelectorOption
                onClick={action(() => {
                  selected.current = item;
                })}
                selected={selected.current === item}
                label={itemLabel(item)}
                key={index}
              />
            )}
          </Observer>
        ))}
      </div>
    </label>
  );
}
