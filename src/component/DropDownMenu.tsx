/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react/macro";
import { action, IObservableValue } from "mobx";
import { observer } from "mobx-react-lite";

type Props<Item> = {
  label: string;
  list: readonly Item[];
  selected: IObservableValue<Item>;
  itemLabel: (i: Item) => string;
};
export const DropDownMenu = observer(
  <Item,>({
    label,
    selected,
    list,
    itemLabel,
  }: Props<Item>) => {
    return (
      <label>
        {label}{" "}
        <select
          onChange={action((e) => {
            selected.set(
              list[parseInt(e.target.value, 10)]
            );
          })}
          value={list.findIndex(
            (item) => item === selected.get()
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
);
