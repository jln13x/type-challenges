// ============= Test Cases =============
import type { Equal, Expect } from "../test-utils";

type cases = [
  Expect<Equal<"title", GetReadonlyKeys<Todo1>>>,
  Expect<Equal<"title" | "description", GetReadonlyKeys<Todo2>>>
];

interface Todo1 {
  readonly title: string;
  description: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  readonly description: string;
  completed?: boolean;
}

// ============= Your Code Here =============
type GetReadonlyKeys<T> = T extends object
  ? {
      [Property in keyof T as Property extends {
        -readonly [InnerProperty in keyof T]: T[InnerProperty];
      }
        ? never
        : Property]: T[Property];
    }
  : never;
