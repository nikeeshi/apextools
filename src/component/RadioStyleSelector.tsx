/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react/macro";
import { action, IObservableValue } from "mobx";
import { Observer } from "mobx-react-lite";

export type RadioStyleSelectorProps<Item> = {
  label: string;
  list: readonly Item[];
  selected: IObservableValue<Item>;
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
          <Observer key={index}>
            {() => (
              <RadioStyleSelectorOption
                onClick={action(() => selected.set(item))}
                selected={selected.get() === item}
                label={itemLabel(item)}
              />
            )}
          </Observer>
        ))}
      </div>
    </label>
  );
}
