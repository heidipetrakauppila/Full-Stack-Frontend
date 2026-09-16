import { greeting } from "../src/lib/greeting.ts";

Deno.test("greeting trims a supplied name", () => {
  const actual = greeting("  Deno  ");

  if (actual !== "Hello, Deno!") {
    throw new Error(`Expected a normalized greeting, received: ${actual}`);
  }
});

Deno.test("greeting falls back when the name is blank", () => {
  const actual = greeting("   ");

  if (actual !== "Hello, world!") {
    throw new Error(`Expected the fallback greeting, received: ${actual}`);
  }
});
