# Tag35: Not Your Grandma's ID System

Tag35 is a specialized identification system built on a base-35 alphanumeric scheme, utilizing the characters <code>123456789ABCDEFGHJKLMNPQRSTUVWXYZ</code> for encoding. Each identifier consists of a 12-character string followed by a 2-character checksum, resulting in a 14-character overall length. The identifier's wide character set allows for 35<sup>12</sup> or approximately 2.02 &times; 10<sup>23</sup> unique IDs. The checksum is calculated by summing the numerical values of the 12 initial characters in base-35, a sum that is then also represented in base-35 and suffixed to the identifier. This dual-character checksum improves data integrity by offering an error-detection mechanism. Designed with a focus on high-capacity, error resistance, and straightforward validation, Tag35 aims to meet advanced identification needs in various domains.</p>

### Examples

```
9WCLWL7X2HQH7N
A3YPS9T1EQN872
KKERRF16E42D5S
KPQGGDQWZLUJ91

1MEB 1CK2 QP4G 59
└──┘ └──┘ └──┘ └┘
3 blocks of 4 characters, followed by a sum in base35
```