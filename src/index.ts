import chalk from 'chalk';
import { day01 } from './days/01/day01';
import { day03 } from './days/03/day03';

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

day03();

console.log('');
console.log(BORDER_BTM);
console.log('');
