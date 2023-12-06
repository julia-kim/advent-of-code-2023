import {
  existsSync,
  copyFileSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from 'fs';

/**
 * Creates the boilerplate code for a new puzzle
 * Usage: npm run init-day {dayNumber} i.e npm run 1
 * It will create a new folder under src/days/{dayNumber}
 * along with the boilerplate code to build the solution, and an empty input.txt file.
 */

const argv = +process.argv.slice(2)[0];

if (isNaN(argv)) {
  console.log('please run with the day to bootstrap, i.e. npm run init-day 1');
  process.exit(0);
}

const day = (argv < 10 ? '0' : '') + argv;

console.log(`creating template for day ${day}`);

const basePath = 'src/days';

if (existsSync(`${basePath}/${day}`)) {
  console.log(`day ${day} already exists`);
  process.exit(0);
}

const newDayPath = `${basePath}/${day}`;
const templatePath = `${__dirname}/template`;

mkdirSync(newDayPath);

writeFileSync(
  `${newDayPath}/day${day}.ts`,
  readFileSync(`${templatePath}/dayXX.ts.tpl`).toString().replace(/XX/g, day)
);
writeFileSync(
  `src/tests/day${day}.test.ts`,
  readFileSync(`${templatePath}/dayXX.test.ts.tpl`).toString().replace(/XX/g, day)
);
copyFileSync(`${templatePath}/part1.ts.tpl`, `${newDayPath}/part1.ts`);
copyFileSync(`${templatePath}/part2.ts.tpl`, `${newDayPath}/part2.ts`);
writeFileSync(`${newDayPath}/input.txt`, '');
