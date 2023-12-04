import chalk from 'chalk';
import { day01 } from './days/01/day01';
import { day03 } from './days/03/day03';
import { day04 } from './days/04/day04';

const BORDER_TOP = '╔═══════════════════════════════════════════════════════════╗';
const BORDER_BTM = '╚═══════════════════════════════════════════════════════════╝';
const title = `${chalk.greenBright('Advent')} of ${chalk.redBright('Code')} 2023`;
const header = `║                 🎄 ${title} 🎄                 ║`;
console.log('');
console.log(BORDER_TOP);
console.log(header);
console.log(BORDER_BTM);

console.log(BORDER_TOP);
console.log('');

day04();

console.log('');
console.log(BORDER_BTM);
console.log('');
