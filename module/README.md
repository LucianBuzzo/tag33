# Tag33

https://tag33.lucianbuzzo.repl.co/

## API

The module exports the following functions:

- `fromBase33(char)`: Converts a character from the base-33 alphabet to its numerical value. The base-33 alphabet is "123456789ABCDEFGHJKLMNPQRSTUVWXYZ". The function returns the numerical value of the character.

- `toBase33(num)`: Converts a number to a character in the base-33 alphabet. The function returns the character in the base-33 alphabet that corresponds to the number.

- `calculateBase33Sum(id)`: Calculates the sum of the numerical values of the characters in the given ID. The function returns the sum.

- `generate()`: Generates a new ID. The function returns the generated ID.

- `verify(tag)`: Verifies the checksum of the given ID. The function returns `true` if the checksum is correct, and `false` otherwise.
