import { action } from "mobx";
import { Observer } from "mobx-react-lite";
import { PrimitiveState } from "../util/usePrimitiveState";

type Props = {
  label: string;
  state: PrimitiveState<boolean>;
};
export function OnOffToggle({ label, state }: Props) {
  return (
    <label>
      {label}{" "}
      <Observer>
        {() => (
          <input
            type="checkbox"
            checked={state.current}
            onChange={action(() => {
              state.current = !state.current;
            })}
          />
        )}
      </Observer>
    </label>
  );
}
