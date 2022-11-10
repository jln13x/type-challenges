// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<CamelCase<"foobar">, "foobar">>,
  Expect<Equal<CamelCase<"FOOBAR">, "foobar">>,
  Expect<Equal<CamelCase<"foo_bar">, "fooBar">>,
  Expect<Equal<CamelCase<"foo_bar_hello_world">, "fooBarHelloWorld">>,
  Expect<Equal<CamelCase<"HELLO_WORLD_WITH_TYPES">, "helloWorldWithTypes">>,
  Expect<Equal<CamelCase<"-">, "-">>,
  Expect<Equal<CamelCase<"">, "">>,
  Expect<Equal<CamelCase<"😎">, "😎">>
];

type Underscore = "_";

// ============= Your Code Here =============
type CamelCase<S extends string> =
  S extends `${infer Left}${Underscore}${infer RightFirstCharacter}${infer Right}`
    ? `${Lowercase<Left>}${InnerCamelCase<`${Uppercase<RightFirstCharacter>}${Lowercase<Right>}`>}`
    : Lowercase<S>;

type InnerCamelCase<S extends string> =
  S extends `${infer LeftFirstCharacter}${infer Left}${Underscore}${infer RightFirstCharacter}${infer Right}`
    ? `${Uppercase<LeftFirstCharacter>}${Left}${InnerCamelCase<`${Uppercase<RightFirstCharacter>}${Right}`>}`
    : S;
