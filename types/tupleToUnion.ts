import { Equal, Expect } from "../utils";

type TupleToUnion<T extends readonly any[]> = T[number];

type cases = [
  Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>
];
