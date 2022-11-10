// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Trim<"str">, "str">>,
  Expect<Equal<Trim<" str">, "str">>,
  Expect<Equal<Trim<"     str">, "str">>,
  Expect<Equal<Trim<"str   ">, "str">>,
  Expect<Equal<Trim<"     str     ">, "str">>,
  Expect<Equal<Trim<"   \n\t foo bar \t">, "foo bar">>,
  Expect<Equal<Trim<"">, "">>,
  Expect<Equal<Trim<" \n\t ">, "">>
];

// ============= Your Code Here =============

type Whitespace = " " | "\n" | "\t";

type TrimLeft<S> = S extends `${Whitespace}${infer TrimmedValue}`
  ? TrimLeft<TrimmedValue>
  : S;
type TrimRight<S> = S extends `${infer TrimmedValue}${Whitespace}`
  ? TrimRight<TrimmedValue>
  : S;

type Trim<S extends string> = TrimRight<TrimLeft<S>>;
