import './App.css'
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { customAlphabet } from 'nanoid';

const alphabet = '123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function fromBase35(char) {
  const value = alphabet.indexOf(char) + 1;  // +1 because index starts from 0
  return value;
}

function toBase35(num) {
  const base35Chars = '123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';

  while (num > 0) {
    const remainder = num % 35;
    result = base35Chars.charAt(remainder) + result;
    num = Math.floor(num / 35);
  }

  return result || '1';  // Return '1' if input is zero
}

function calculateBase35Sum(id) {
  let sum = 0;

  for (let i = 0; i < id.length; i++) {
    const char = id[i];
    sum += fromBase35(char)
  }

  return sum;
}

const generate = () => {
  const nanoid = customAlphabet(alphabet, 12);
  const baseId = nanoid()
  console.log('baseId', baseId)
  const sum = calculateBase35Sum(baseId)
  console.log('sum', sum)
  const b35Sum = toBase35(sum)
  console.log('b35sum', b35Sum)
  return baseId + b35Sum
}

export default function App() {
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(generate());

  const handleSubmit = () => {
    setId(generate())
  }
  
  return (
    <main>
      <h1>Tag35: Not Your Grandma's ID System</h1>
      <p>Tag35 is a specialized identification system built on a base-35 alphanumeric scheme, utilizing the characters <code>123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ</code> for encoding. Each identifier consists of a 12-character string followed by a 2-character checksum, resulting in a 14-character overall length. The identifier's wide character set allows for 35<sup>12</sup> or approximately 2.02 &times; 10<sup>23</sup> unique IDs. The checksum is calculated by summing the numerical values of the 12 initial characters in base-35, a sum that is then also represented in base-35 and suffixed to the identifier. This dual-character checksum improves data integrity by offering an error-detection mechanism. Designed with a focus on high-capacity, error resistance, and straightforward validation, Tag35 aims to meet advanced identification needs in various domains.</p>
      <div id="form">
      <div> 
        <TextField fullWidth required id="outlined-basic" variant="outlined" inputProps={{ style: { textAlign: 'center'}}} value={id} />
      </div>
    
      <div>
        <Button variant="contained" onClick={handleSubmit}>Generate</Button>
      </div>
      </div>
    </main>
  )
}
