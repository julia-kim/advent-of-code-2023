import { readInputFromFile } from '../../utils/io';

export function part2(input?: string[]) {
  const maps = input ?? readInputFromFile(__dirname);
  const instructions = maps[0].trim();
  var network: Record<any, string[]> = {};
  for (let i = 2; i < maps.length; i++) {
    const removeBrackets = maps[i]
      .trim()
      .replace('(', '')
      .replace(')', '')
      .replace(',', ' =');
    const node = removeBrackets.split(' = ');
    network[node[0]] = [node[1], node[2]];
  }
  var startingNodes = Object.keys(network).filter((v) => v.endsWith('A'));
  const map = startingNodes.map((node) => {
    let element = node;
    let steps = 0;
    while (!element.endsWith('Z')) {
      [...instructions].forEach((relativeDir) => {
        const lookup = network[element];
        if (relativeDir == 'L') {
          element = lookup[0];
          steps++;
        }
        if (relativeDir == 'R') {
          element = lookup[1];
          steps++;
        }
      });
    }
    return steps;
  });
  const lcm = (...arr: number[]) => {
    const gcd: any = (x: number, y: number) => (!y ? x : gcd(y, x % y));
    const _lcm = (x: number, y: number) => (x * y) / gcd(x, y);
    return [...arr].reduce((a, b) => _lcm(a, b));
  };
  return lcm(...map);
}
