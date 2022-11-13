// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<BEM<"btn", ["price"], []>, "btn__price">>,
  Expect<
    Equal<
      BEM<"btn", ["price"], ["warning", "success"]>,
      "btn__price--warning" | "btn__price--success"
    >
  >,
  Expect<
    Equal<
      BEM<"btn", [], ["small", "medium", "large"]>,
      "btn--small" | "btn--medium" | "btn--large"
    >
  >
];

type ElementBuilder<E extends string[]> = E["length"] extends 0
  ? ""
  : `__${E[number]}`;
type ModifierBuilder<M extends string[]> = M["length"] extends 0
  ? ""
  : `--${M[number]}`;

// ============= Your Code Here =============
type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${ElementBuilder<E>}${ModifierBuilder<M>}`;
