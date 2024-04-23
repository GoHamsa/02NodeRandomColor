import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'node-random-color';

// import randomColor from 'randomcolor';

if (process.argv > 1) {
  const color = process.argv[2];
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
} else {
  const color = randomColor();
  console.log(color);
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
