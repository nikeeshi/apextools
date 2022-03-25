import { ValueSetterPair } from "../../variable/valueSetterPair";

type Props<Item extends string> = {
  label: string;
  list: readonly Item[];
  selected: ValueSetterPair<Item>;
};
export function DropDownMenu<Item extends string>({
  label,
  selected,
  list,
}: Props<Item>) {
  const [selectedItem, select] = selected;
  return (
    <label>
      {label}{" "}
      <select
        onChange={(e) => {
          select(e.target.value as Item);
        }}
      >
        {list.map((item) => (
          <option
            value={item}
            selected={item === selectedItem}
          >
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}
