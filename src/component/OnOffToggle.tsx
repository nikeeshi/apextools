import { ValueSetterPair } from "../variable/valueSetterPair";

type Props = {
  label: string;
  current: ValueSetterPair<boolean>;
};
export function OnOffToggle({
  label,
  current: [value, setter],
}: Props) {
  return (
    <label>
      {label}{" "}
      <input
        type="checkbox"
        checked={value}
        onChange={() => setter(!value)}
      />
    </label>
  );
}
