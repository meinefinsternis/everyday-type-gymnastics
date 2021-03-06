import { Equal, Expect } from "../utils";

type Pop<T extends any[]> = T extends [...infer Head, infer Tail] ? Head : [];

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<["a", "b", "c", "d"]>, ["a", "b", "c"]>>
];
