import * as tag33 from "./index.mjs";
import { strict as assert } from "assert";

console.log("test: verify");
console.log("it should return true for valid tag");
const validTag = tag33.generate();
const result = tag33.verify(validTag);
assert(result === true);

console.log("it should return false for an invalid tag");
const invalidTag = "1234556789011DD";
const result2 = tag33.verify(invalidTag);
assert(result2 === false);

console.log("it should support low checksums as two characters");
const baseId = "111111111111";
const lowChecksumTag = baseId + tag33.toTwoCharBase33(tag33.calculateBase33Sum(baseId));
const result3 = tag33.verify(lowChecksumTag);
assert(result3 === true);

console.log("it should reject invalid length");
assert(tag33.verify("111111111111C") === false);
