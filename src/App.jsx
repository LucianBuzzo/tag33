import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { customAlphabet } from "nanoid";

const alphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZ";

function fromBase33(char) {
  const value = alphabet.indexOf(char) + 1; // +1 because index starts from 0
  return value;
}

function toBase33(num) {
  let result = "";

  while (num > 0) {
    const remainder = num % 33;
    result = alphabet.charAt(remainder) + result;
    num = Math.floor(num / 33);
  }

  return result || "1"; // Return '1' if input is zero
}

function calculateBase33Sum(id) {
  let sum = 0;

  for (let i = 0; i < id.length; i++) {
    const char = id[i];
    sum += fromBase33(char);
  }

  return sum;
}

const generate = () => {
  const nanoid = customAlphabet(alphabet, 12);
  const baseId = nanoid();
  console.log("baseId", baseId);
  const sum = calculateBase33Sum(baseId);
  console.log("sum", sum);
  const b33Sum = toBase33(sum);
  console.log("b33sum", b33Sum);
  return baseId + b33Sum;
};

export default function App() {
  const [id, setId] = useState(generate());

  const handleSubmit = () => {
    setId(generate());
  };

  return (
    <main>
      <h1>Tag33: Not Your Grandma's ID System</h1>
      <p>
        Tag33 is a specialized identification system built on a base-33
        alphanumeric scheme, utilizing a curated character set of{" "}
        <code>123456789ABCDEFGHJKLMNPQRSTUVWXYZ</code> for encoding. By
        excluding the letters 'I' and 'O,' the scheme minimizes the chance of
        human error, enhancing readability and ease of use. Additionally, the
        scheme avoids lowercase characters for further simplicity. Each
        identifier consists of a 12-character string followed by a 2-character
        checksum, resulting in a 14-character overall length. The identifier's
        character set allows for 33<sup>12</sup> or approximately 7.4 &times; 10
        <sup>18</sup> unique IDs, optimized for both high-capacity and human
        readability. The checksum is calculated by summing the numerical values
        of the 12 initial characters in base-33, a sum that is then also
        represented in base-33 and suffixed to the identifier. This
        dual-character checksum improves data integrity by offering an
        error-detection mechanism. Designed with a focus on ease-of-use,
        high-capacity, error resistance, and straightforward validation, Tag33
        aims to meet advanced identification needs in various domains.
      </p>
      <div id="form">
        <div>
          <TextField
            fullWidth
            required
            id="outlined-basic"
            variant="outlined"
            inputProps={{ style: { textAlign: "center" } }}
            value={id}
          />
        </div>

        <div>
          <Button variant="contained" onClick={handleSubmit}>
            Generate
          </Button>
        </div>
      </div>
    </main>
  );
}
