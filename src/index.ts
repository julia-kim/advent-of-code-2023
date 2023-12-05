import chalk from 'chalk';

const BORDER_TOP = '╔═══════════════════════════════════════════════════════════╗';
const BORDER_BTM = '╚═══════════════════════════════════════════════════════════╝';
const title = `${chalk.greenBright('Advent')} of ${chalk.redBright('Code')} 2023`;
const header = `║                 🎄 ${title} 🎄                 ║`;

const args = process.argv.slice(2);
const day = args[0];
if (!day) {
  console.error('No day specified run with npm run dev {day}');
  process.exit(1);
}

async function main() {
  console.log('');
  console.log(BORDER_TOP);
  console.log(header);
  console.log(BORDER_BTM);
  console.log(BORDER_TOP);
  console.log('');

  const { default: puzzle } = await import(`./days/${day}/day${day}.js`);
  puzzle();

  console.log('');
  console.log(BORDER_BTM);
  console.log('');
}

main();
