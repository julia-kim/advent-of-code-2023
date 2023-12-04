import { existsSync, copyFileSync, mkdirSync, writeFileSync } from 'fs';

/**
 * Creates the boilerplate code for a new puzzle
 * Usage: npm run init-day {dayNumber} i.e npm run 01
 * It will create a new folder under src/days/{dayNumber}
 * along with the boilerplate code to build the solution, and an empty input.txt file.
 */

const args = process.argv.slice(2);
const day = args[0];
if (!day) {
  console.log('please run with the day to bootstrap, i.e. npm run init-day 1');
}
console.log(`creating template for day ${day}`);
const basePath = 'src/days';

if (existsSync(`src/days/${day}`)) {
  console.log(`day ${day} already exists`);
  process.exit(0);
}
const newDayPath = `${basePath}/${day}`;
mkdirSync(newDayPath);
const path = require('path');
const templatePath = path.join(__dirname, '..', 'template');
copyFileSync(`${templatePath}/dayXX.ts.tpl`, `${newDayPath}/day${day}.ts`);
copyFileSync(`${templatePath}/part1.ts.tpl`, `${newDayPath}/part1.ts`);
copyFileSync(`${templatePath}/part2.ts.tpl`, `${newDayPath}/part2.ts`);
copyFileSync(`${templatePath}/dayXX.test.ts.tpl`, `src/tests/day${day}.test.ts`);
writeFileSync(`${newDayPath}/input.txt`, '');
