import { ZodEffectsDef } from "@lowcode-modou/zod";
import { JsonSchema7Type, parseDef } from "../parseDef";
import { References } from "../References";

export function parseEffectsDef(
  _def: ZodEffectsDef,
  refs: References
): JsonSchema7Type | undefined {
  return refs.effectStrategy === "input"
    ? parseDef(_def.schema._def, refs)
    : {};
}
