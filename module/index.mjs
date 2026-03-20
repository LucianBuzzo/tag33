import { customAlphabet } from "nanoid";

const alphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZ";

export function fromBase33(char) {
  const value = alphabet.indexOf(char) + 1; // +1 because index starts from 0
  return value;
}

export function toBase33(num) {
  let result = "";

  while (num > 0) {
    const remainder = num % 33;
    result = alphabet.charAt(remainder) + result;
    num = Math.floor(num / 33);
  }

  return result || "1"; // Return '1' if input is zero
}

export function toTwoCharBase33(num) {
  return toBase33(num).padStart(2, "1");
}

export function calculateBase33Sum(id) {
  let sum = 0;

  for (let i = 0; i < id.length; i++) {
    const char = id[i];
    sum += fromBase33(char);
  }

  return sum;
}

export const generate = () => {
  const nanoid = customAlphabet(alphabet, 12);
  const baseId = nanoid();
  const sum = calculateBase33Sum(baseId);
  const b33Sum = toTwoCharBase33(sum);

  return baseId + b33Sum;
};

export const verify = (tag) => {
  if (!/^[1-9A-HJ-NP-Z]{14}$/.test(tag)) {
    return false;
  }

  const baseId = tag.slice(0, -2);
  const sum = calculateBase33Sum(baseId);
  const b33Sum = tag.slice(-2);

  return toTwoCharBase33(sum) === b33Sum;
};
