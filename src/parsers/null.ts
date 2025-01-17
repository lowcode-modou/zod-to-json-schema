import { References } from "../References";

export type JsonSchema7NullType = {
  type: "null";
};

export function parseNullDef(refs: References): JsonSchema7NullType {
  return refs.target === "openApi3"
    ? ({
        enum: ["null"],
        nullable: true,
      } as any)
    : {
        type: "null",
      };
}
