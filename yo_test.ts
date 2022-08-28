import yo from "./yo.ts"
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts"

Deno.test("yo test", () => {
  assertEquals<string>(yo(), "a:undefined undefined b:undefined undefined")
  assertEquals<string>(yo(1), "a:number 1 b:undefined undefined")
  assertEquals<string>(yo(1, 1), "a:number 1 b:number 1")
});
