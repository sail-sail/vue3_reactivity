# vue3_reactivity

vue3_reactivity is forck by @vue/reactivity for deno.

## Usage Note

```ts
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { effect, ref } from "./mod.ts";

Deno.test("ref", function() {
  const a = ref(1);
  let dummy = 0;
  let calls = 0;
  effect(() => {
    calls++
    dummy = a.value
  });
  assertEquals(calls, 1);
  assertEquals(dummy, 1);
  a.value = 2;
  assertEquals(calls, 2);
  assertEquals(dummy, 2);
});
```

For full exposed APIs, see `mod.ts`. 

## Credits

The implementation of this module is inspired by the following prior art in the JavaScript ecosystem:

- [Meteor Tracker](https://docs.meteor.com/api/tracker.html)
- [nx-js/observer-util](https://github.com/nx-js/observer-util)
- [salesforce/observable-membrane](https://github.com/salesforce/observable-membrane)

## Caveats

- Built-in objects are not observed except for `Array`, `Map`, `WeakMap`, `Set` and `WeakSet`.
