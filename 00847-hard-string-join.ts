// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

// Edge cases
const noCharsOutput = join("-")();
const oneCharOutput = join("-")("a");
const noDelimiterOutput = join("")("a", "b", "c");

// Regular cases
const hyphenOutput = join("-")("a", "b", "c");
const hashOutput = join("#")("a", "b", "c");
const twoCharOutput = join("-")("a", "b");
const longOutput = join("-")("a", "b", "c", "d", "e", "f", "g", "h");

type cases = [
  Expect<Equal<typeof noCharsOutput, "">>,
  Expect<Equal<typeof oneCharOutput, "a">>,
  Expect<Equal<typeof noDelimiterOutput, "abc">>,
  Expect<Equal<typeof twoCharOutput, "a-b">>,
  Expect<Equal<typeof hyphenOutput, "a-b-c">>,
  Expect<Equal<typeof hashOutput, "a#b#c">>,
  Expect<Equal<typeof longOutput, "a-b-c-d-e-f-g-h">>
];

// Decides if the delimiter should be added
type WithDelimiter<
  TValue extends string,
  TDelimiter extends string,
  TLength
> = TLength extends 0 ? TValue : `${TValue}${TDelimiter}`;

// Recursively builds the string
type Builder<
  TBuilt extends string,
  TParts extends string[],
  TDelimiter extends string
> = TParts extends [
  infer TCurrent extends string,
  ...infer TRest extends string[]
]
  ? Builder<
      `${TBuilt}${WithDelimiter<TCurrent, TDelimiter, TRest["length"]>}`,
      TRest,
      TDelimiter
    >
  : TBuilt;

// ============= Your Code Here =============
declare function join<TDelimiter extends string>(
  delimiter: TDelimiter
): <TParts extends string[]>(
  ...parts: TParts
) => Builder<"", TParts, TDelimiter>;
