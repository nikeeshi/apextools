/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react/macro";
import { range } from "../../util/range";
import { ScrollableTable } from "./ScrollableTablePoweredByJs";

export default {};
export const A = () => {
  return (
    <ScrollableTable xs={range(1, 25)} ys={range(1, 25)} />
  );
};
