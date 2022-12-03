import * as fs from 'fs/promises';

const input = await fs.readFile('./input.txt', 'utf8');
console.log(input);
