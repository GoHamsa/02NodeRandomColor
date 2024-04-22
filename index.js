import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'node-random-color';

// const color = randomColor();

const color = process.argv[2];

console.log(
  chalk[color]('#'.repeat(31) + '\n' + '#'.repeat(31) + '\n' + '#'.repeat(31)),
);
console.log(chalk[color]('#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5)));
console.log(
  chalk[color](
    '#'.repeat(5) + ' '.repeat(7) + color + ' '.repeat(7) + '#'.repeat(5),
  ),
);
console.log(chalk[color]('#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5)));
console.log(
  chalk[color]('#'.repeat(31) + '\n' + '#'.repeat(31) + '\n' + '#'.repeat(31)),
);
