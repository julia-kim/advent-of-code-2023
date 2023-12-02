import { readInputFromFile } from '../../utils/io';

export function part1(input?: string[]) {
  const lines = input ?? readInputFromFile(__dirname);
  const games = lines.map((line) => {
    const id = +line.match(/^Game (\d+):/)![1];
    const sets = line
      .replace(/Game \d+: /, '')
      .split('; ')
      .map((set) => {
        return {
          red: [...set.matchAll(/(\d+) red/g)].reduce((a, c) => a + +c[1], 0),
          green: [...set.matchAll(/(\d+) green/g)].reduce((a, c) => a + +c[1], 0),
          blue: [...set.matchAll(/(\d+) blue/g)].reduce((a, c) => a + +c[1], 0),
        };
      });
    if (
      sets.every((cubes) => cubes.red <= 12 && cubes.green <= 13 && cubes.blue <= 14)
    ) {
      return id;
    } else return 0;
  });
  return games.reduce((a, c) => a + c, 0);
}
