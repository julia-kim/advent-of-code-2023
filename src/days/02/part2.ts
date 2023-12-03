import { readInputFromFile } from '../../utils/io';

export function part2(input?: string[]) {
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
    return (
      Math.max(...sets.map((cubes) => cubes.red)) *
      Math.max(...sets.map((cubes) => cubes.green)) *
      Math.max(...sets.map((cubes) => cubes.blue))
    );
  });
  return games.reduce((a, c) => a + c, 0);
}
