import { readInputFromFile } from '../../utils/io';

export function part2(input?: string[]) {
  const lines = input ?? readInputFromFile(__dirname);
  let seeds: number[] = [];
  var almanac: any = {};
  var almanacKey: string[][] = [];
  var next = false;
  var description: string;
  let chunkedArray: any[][] = []
  lines.forEach((line, index) => {
    if (!line || line.length === 1) {
      next = true;
      return;
    }
    if (index == 0) {
      const seedRanges = line
        .replace('seeds: ', '')
        .trim()
        .split(' ')
        .map((s) => {
          return +s;
        });
      let i = 0;
      while (i < seedRanges.length) {
        chunkedArray.push(seedRanges.slice(i, i + 2));
        i += 2;
      }
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
  let lowestLocationNumber = Number.MAX_VALUE
  chunkedArray.forEach(range => {
    const [start, length] = range
    const end = start + (length-1)
    var number = start
    while (number < end) {
      const location =  findDest(number, 'seed');
      if (location < lowestLocationNumber) lowestLocationNumber = location
      number++
    }
  })
  function findDest(val: number, cat: string) {
    const found = almanacKey.find((e) => e[0] == cat);
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
  return lowestLocationNumber;
}
