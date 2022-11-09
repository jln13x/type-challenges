// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

// ============= Your Code Here =============
type MyPick<T, K> = T extends object
  ? {
      [Property in keyof T as Property extends K
        ? Property
        : never]: T[Property];
    }
  : never;

// Unrelated
type MyOtherPick<T extends object, K extends keyof T> = {
  [Property in keyof T as Property extends K ? Property : never]: T[Property];
};

type Foo = MyOtherPick<Todo, "completed" | "description">;
