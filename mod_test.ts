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
