import { readInputFromFile } from '../../utils/io';

export function part1(input?: string[]) {
  const maps = input ?? readInputFromFile(__dirname);
  const instructions = maps[0]
  var network: Record<any, string[]> = {}
  for (let i = 2; i < maps.length - 1; i++) {
    const removeBrackets = maps[i].trim().replace('(', '').replace(')', '').replace(',', ' =')
    const node = removeBrackets.split(' = ')
    network[node[0]] = [node[1], node[2]]
  }
  var element = 'AAA'
  var steps = 0
  while (element != 'ZZZ') {
    [...instructions].forEach(relativeDir => {
      const lookup = network[element]
    
      if (relativeDir == 'L') { element = lookup[0]; steps++ }
      if (relativeDir == 'R') { element = lookup[1]; steps++ }
    })
  }
  return steps;
}
