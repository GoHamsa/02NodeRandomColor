import { argv } from 'node:process';
import chalk from 'chalk';
// import randomColor from 'node-random-color';
import randomColor from 'randomcolor';

console.log(argv);

// Function for printing a hue and luminosity, set by user input
function printHue() {
  randomColor.luminosity = process.argv[2];
  randomColor.hue = process.argv[3];
  const color = randomColor({
    luminosity: 'light',
    hue: 'blue',
  });
  console.log('hue & luminosity');
  console.log(
    chalk.hex(color)(
      '#'.repeat(31) + '\n' + '#'.repeat(31) + '\n' + '#'.repeat(31),
    ),
  );
  console.log(chalk.hex(color)('#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5)));
  console.log(
    chalk.hex(color)(
      '#'.repeat(5) + ' '.repeat(7) + color + ' '.repeat(7) + '#'.repeat(5),
    ),
  );
  console.log(chalk.hex(color)('#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5)));
  console.log(
    chalk.hex(color)(
      '#'.repeat(31) + '\n' + '#'.repeat(31) + '\n' + '#'.repeat(31),
    ),
  );
}

// Function for printing printing figure in a color, set by user input
function printSetColor() {
  const color = process.argv[2];
  console.log('hue');
  console.log(
    chalk[color](
      '#'.repeat(31) + '\n' + '#'.repeat(31) + '\n' + '#'.repeat(31),
    ),
  );
  console.log(chalk[color]('#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5)));
  console.log(
    chalk[color](
      '#'.repeat(5) + ' '.repeat(7) + color + ' '.repeat(7) + '#'.repeat(5),
    ),
  );
  console.log(chalk[color]('#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5)));
  console.log(
    chalk[color](
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
  console.log(chalk.hex(color)('#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5)));
  console.log(
    chalk.hex(color)(
      '#'.repeat(5) + ' '.repeat(7) + color + ' '.repeat(7) + '#'.repeat(5),
    ),
  );
  console.log(chalk.hex(color)('#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5)));
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
  printSetColor();
}
// Condition, for random color, if no color was input by user
if (argv.length === 2) {
  hexColor();
}
