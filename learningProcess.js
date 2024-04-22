/*
1. create index.js, contains code, creates table of 31x9 # with a random color.
   Thus, typing node index.js in console, should trigger it!
  a) lines 1-3 just 31x#
  b) 1 line 5x#, 21x[empty], 5x#
     or line 4 1-5 #, 6-26 [empty], 27-31 #
  c) 1 line 5x#, 7x[empty], HexCode (= 7 characters), 7x[empty], 5x#
     or line 5 1-5 #, 6-12[empty], HexCode (= 7 characters), 7x[empty], 5x#
  d) = b)
  e) = a)
*/
// prettier-ignore
// import * as randomColor from 'randomColor';
// import randomColor from 'randomcolor';
// import randomHexColor from 'random-hex-color';

//randomHexColor();
// console.log(randomHexColor());

import chalk from 'chalk';
import randomColor from 'node-random-color';

// const color = randomColor();
// console.log(randomColor());
console.log(chalk.hex(randomColor())('####'));

//randomColor();
// console.log(randomColor);
/*
console.log('#'.repeat(31) + '\n' + '#'.repeat(31) + '\n' + '#'.repeat(31));
console.log('#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5));
console.log(
  '#'.repeat(5) + ' '.repeat(7) + 'HexColo' + ' '.repeat(7) + '#'.repeat(5),
);
console.log('#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5));
console.log('#'.repeat(31) + '\n' + '#'.repeat(31) + '\n' + '#'.repeat(31));
*/
