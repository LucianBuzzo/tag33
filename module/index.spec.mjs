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
