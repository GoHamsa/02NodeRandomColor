import { argv } from 'node:process';
import chalk from 'chalk';
// import randomColor from 'node-random-color';
import randomColor from 'randomcolor';

// console.log(argv);
let x = process.argv[2][0];
console.log('x =', x);
let y = +x;
console.log('y = ', y);

/*
if (x === '0') {
  console.log('x is a number');
} else {
  console.log('x is a string');
}
*/
if (y !== 'NaN') {
  console.log('WWxHH');
} else {
  // Function for printing a hue and luminosity, set by user input
  function printHue() {
    const color = randomColor({
      luminosity: process.argv[3],
      hue: process.argv[2],
    });
    1;
    console.log('hue & luminosity');
    console.log(
      chalk.hex(color)(
        '#'.repeat(31) + '\n' + '#'.repeat(31) + '\n' + '#'.repeat(31),
      ),
    );
    console.log(
      chalk.hex(color)('#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5)),
    );
    console.log(
      chalk.hex(color)(
        '#'.repeat(5) + ' '.repeat(7) + color + ' '.repeat(7) + '#'.repeat(5),
      ),
    );
    console.log(
      chalk.hex(color)('#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5)),
    );
    console.log(
      chalk.hex(color)(
        '#'.repeat(31) + '\n' + '#'.repeat(31) + '\n' + '#'.repeat(31),
      ),
    );
  }

  // Function for printing printing figure in a color, set by user input
  function printSetColor() {
    const color = randomColor({
      hue: process.argv[2],
    });
    console.log('hue');
    console.log(
      chalk.hex(color)(
        '#'.repeat(31) + '\n' + '#'.repeat(31) + '\n' + '#'.repeat(31),
      ),
    );
    console.log(
      chalk.hex(color)('#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5)),
    );
    console.log(
      chalk.hex(color)(
        '#'.repeat(5) + ' '.repeat(7) + color + ' '.repeat(7) + '#'.repeat(5),
      ),
    );
    console.log(
      chalk.hex(color)('#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5)),
    );
    console.log(
      chalk.hex(color)(
        '#'.repeat(31) + '\n' + '#'.repeat(31) + '\n' + '#'.repeat(31),
      ),
    );
  }
  // Function for printing figure in a random color, in case user did not input a color
  function hexColor() {
    const color = randomColor();
    console.log('RANDOM');
    console.log(
      chalk.hex(color)(
        '#'.repeat(31) + '\n' + '#'.repeat(31) + '\n' + '#'.repeat(31),
      ),
    );
    console.log(
      chalk.hex(color)('#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5)),
    );
    console.log(
      chalk.hex(color)(
        '#'.repeat(5) + ' '.repeat(7) + color + ' '.repeat(7) + '#'.repeat(5),
      ),
    );
    console.log(
      chalk.hex(color)('#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5)),
    );
    console.log(
      chalk.hex(color)(
        '#'.repeat(31) + '\n' + '#'.repeat(31) + '\n' + '#'.repeat(31),
      ),
    );
  }
  if (argv.length === 4) {
    printHue();
  }
  // Condition, if user inputs a color
  if (argv.length === 3) {
    if (process.argv[2] === 'ask') {
      console.log('Which color (hue and luminosity) do you wish?');
    } else {
      printSetColor();
    }
  }
  // Condition, for random color, if no color was input by user
  if (argv.length === 2) {
    hexColor();
  }
}

/*
console.log('x = ', x, '=', typeof x);
// console.log('argv =', process.argv[2], typeof process.argv[2]);
let y = +x;
console.log('y = ', y, '=', typeof y);
let z = typeof y;
if (z == 'NaN') {
  console.log('NaN');
}
/*
if (typeof process.argv[2] === 'number') {
  console.log('number');
} else {
  console.log('string');
}

/*



*/
