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
      style={{
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: selected ? "#000000" : "#efefef",
        backgroundColor: "#efefef",
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
          />
        ))}
      </div>
    </label>
  );
}
