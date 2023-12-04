import { timeExec } from '../../utils/perf';
import chalk from 'chalk';
import { part1 } from './part1';
import { part2 } from './part2';

export function day03() {
  console.log(chalk.greenBright(`  Day 03 - Part 1: ${timeExec(part1)}`));
  console.log(chalk.redBright(`  Day 03 - Part 2: ${timeExec(part2)}`));
}
