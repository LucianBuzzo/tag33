# Tag33: Not Your Grandma's ID System

Tag33 is a specialized identification system built on a base-33 alphanumeric scheme, utilizing the characters <code>123456789ABCDEFGHJKLMNPQRSTUVWXYZ</code> for encoding. Each identifier consists of a 12-character string followed by a 2-character checksum, resulting in a 14-character overall length. The identifier's wide character set allows for 33<sup>12</sup> or approximately 1.67 &times; 10<sup>23</sup> unique IDs. The checksum is calculated by summing the numerical values of the 12 initial characters in base-33, a sum that is then also represented in base-33 and suffixed to the identifier. This dual-character checksum improves data integrity by offering an error-detection mechanism. Designed with a focus on high-capacity, error resistance, and straightforward validation, Tag33 aims to meet advanced identification needs in various domains.</p>

### Examples

```
9WCLWL7X2HQH7N
A3YPS9T1EQN872
KKERRF16E42D5S
KPQGGDQWZLUJ91

1MEB 1CK2 QP4G 59
└──┘ └──┘ └──┘ └┘
3 blocks of 4 characters, followed by a sum in base33
```

### Usage

You can get started with Tag33 by installing the package from npm:

```bash
npm i tag33
```

Then, import the package into your project:

```javascript
const tag33 = require("tag33");

// Generate an ID
const id = tag33.generate(); // 7B9YYGB58CNM6N

// Verify an ID
const isValid = tag33.verify(id); // true
```
