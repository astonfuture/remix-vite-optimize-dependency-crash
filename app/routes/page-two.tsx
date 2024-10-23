import { sumBy } from "lodash-es";

export default function PageB() {
  const x = sumBy([1, 1, 1], (x) => x);
  return <>{x}</>;
}
