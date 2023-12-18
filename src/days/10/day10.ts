import { timeExec } from '../../utils/perf';
import chalk from 'chalk';
import { part1 } from './part1';
import { part2 } from './part2';

export default function day10() {
  console.log(chalk.greenBright(`  Day 10 - Part 1: ${timeExec(part1)}`));
  console.log(chalk.redBright(`  Day 10 - Part 2: ${timeExec(part2)}`));
}
