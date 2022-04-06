import { action, IObservableValue } from "mobx";
import { Observer } from "mobx-react-lite";

type Props = {
  label: string;
  state: IObservableValue<boolean>;
};
export function OnOffToggle({ label, state }: Props) {
  return (
    <label>
      {label}{" "}
      <Observer>
        {() => (
          <input
            type="checkbox"
            checked={state.get()}
            onChange={action(() => state.set(!state.get()))}
          />
        )}
      </Observer>
    </label>
  );
}
