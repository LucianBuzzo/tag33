# Tag35: Not Your Grandma's ID System

Tag35 is a specialized identification system built on a base-35 alphanumeric scheme, utilizing the characters <code>123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ</code> for encoding. Each identifier consists of a 12-character string followed by a 2-character checksum, resulting in a 14-character overall length. The identifier's wide character set allows for 35<sup>12</sup> or approximately 2.02 &times; 10<sup>23</sup> unique IDs. The checksum is calculated by summing the numerical values of the 12 initial characters in base-35, a sum that is then also represented in base-35 and suffixed to the identifier. This dual-character checksum improves data integrity by offering an error-detection mechanism. Designed with a focus on high-capacity, error resistance, and straightforward validation, Tag35 aims to meet advanced identification needs in various domains.</p>

### Examples

```
391G244EL6453K
Y7Y3YZLUCT9S8W
YVDM8Z2NHIFR81
NYV1FPELVD7H7N

DMTL UO83 DQZZ 8F
└──┘ └──┘ └──┘ └┘
3 blocks of 4 characters, followed by a sum in base35
```