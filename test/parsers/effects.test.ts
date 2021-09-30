import { JSONSchema7Type } from "json-schema";
import { z } from "zod";
import { parseEffectsDef } from "../../src/parsers/effects";

describe("promise", () => {
  it("should be possible to use default", () => {
    const parsedSchema = parseEffectsDef(
      z.number().refine((x) => x + 1)._def,
      [],
      []
    );
    const jsonSchema: JSONSchema7Type = {
      type: "number",
    };
    expect(parsedSchema).toStrictEqual(jsonSchema);
  });
});