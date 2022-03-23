import { ValueSetterPair } from "../variable/valueSetterPair";

type Props<Candidates extends readonly (string | null)[]> =
  {
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
      style={{ borderWidth: selected ? 1 : 0 }}
    >
      {label}
    </button>
  );
}
export function RadioStyleSelector<
  Candidates extends readonly (string | null)[]
>({ label, selected, list }: Props<Candidates>) {
  const [selectedItem, select] = selected;
  return (
    <label>
      {label}{" "}
      <div>
        {list.map((item) => (
          <RadioStyleSelectorOption
            onClick={() => {
              if (selectedItem === item) select(null);
              else select(item);
            }}
            selected={selectedItem === item}
            label={item ?? "---"}
          />
        ))}
      </div>
    </label>
  );
}
