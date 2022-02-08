type Props<Item extends string> = {
  label: string;
  list: readonly Item[];
  setter: (item: Item) => void;
};
export function DropDownMenu<Item extends string>({
  label,
  setter,
  list,
}: Props<Item>) {
  return (
    <label>
      {label}
      <select
        onChange={(e) => setter(e.target.value as Item)}
      >
        {list.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </label>
  );
}
