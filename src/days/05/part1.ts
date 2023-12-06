import { readInputFromFile } from '../../utils/io';

export function part1(input?: string[]) {
  const lines = input ?? readInputFromFile(__dirname);
  let seeds: number[] = [];
  var almanac: { [key: string]: number[][] } = {};
  var almanacKey: string[][] = [];
  var next = false;
  var description: string;
  lines.forEach((line, index) => {
    if (!line || line.length === 1) {
      next = true;
      return;
    }
    if (index == 0) {
      seeds = line
        .replace('seeds: ', '')
        .trim()
        .split(' ')
        .map((s) => {
          return +s;
        });
      return;
    }
    if (next == true) {
      description = line.split(' ')[0];
      almanac[description] = [];
      almanacKey.push(description.split('-to-'));
      next = false;
      return;
    }
    if (next == false) {
      const [dest, source, length] = line.split(' ').map((value) => {
        return +value;
      });
      almanac[description].push([dest, source, length]);
    }
  });
  const locationNumbers = seeds.map((seed) => {
    return findDest(seed, 'seed');
  });
  function findDest(val: number, cat: string) {
    const found = almanacKey.find((e) => e[0] == cat);
    if (found === undefined)
      throw new TypeError(`No key was found containing ${cat}!`);
    const map = `${found[0]}-to-${found[1]}`;
    const range = almanac[map].find((e) => {
      const [dest, source, length] = e;
      if (val >= source && val < source + length) {
        return dest + (val - source);
      }
    });
    let value;
    if (range) value = range[0] + (val - range[1]);
    else value = val;
    if (found[1] == 'location') return value;
    return findDest(value, found[1]);
  }
  return Math.min(...locationNumbers);
}
