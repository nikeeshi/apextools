/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react/macro";
import { ValueSetterPair } from "../variable/valueSetterPair";

type Props<Item> = {
  label: string;
  list: readonly Item[];
  selected: ValueSetterPair<Item>;
  itemLabel: (i: Item) => string;
};
export function DropDownMenu<Item>({
  label,
  selected,
  list,
  itemLabel,
}: Props<Item>) {
  const [selectedItem, select] = selected;
  return (
    <label>
      {label}{" "}
      <select
        onChange={(e) => {
          select(list[parseInt(e.target.value, 10)]);
        }}
        value={list.findIndex(
          (item) => item === selectedItem
        )}
      >
        {list.map((item, index) => (
          <option value={index} key={index}>
            {itemLabel(item)}
          </option>
        ))}
      </select>
    </label>
  );
}
