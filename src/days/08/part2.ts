import { readInputFromFile } from '../../utils/io';

export function part2(input?: string[]) {
  const maps = input ?? readInputFromFile(__dirname);
  const instructions = maps[0].trim()
  var network: Record<any, string[]> = {}
  for (let i = 2; i < maps.length - 1; i++) {
    const removeBrackets = maps[i].trim().replace('(', '').replace(')', '').replace(',', ' =')
    const node = removeBrackets.split(' = ')
    network[node[0]] = [node[1], node[2]]
  }
  var startingNodes = Object.keys(network).filter((v) => v.endsWith('A'))
  var steps = 0
  let endReached = false
  while (!endReached) {
    [...instructions].forEach(relativeDir => {
      startingNodes.forEach((element, i) => {
        const lookup = network[element]
        if (relativeDir == 'L') { startingNodes[i] = lookup[0] }
        if (relativeDir == 'R') { startingNodes[i] = lookup[1] }
      })
      steps++
      if (startingNodes.every((v) => v.endsWith('Z'))) {endReached = true; return}
    })
    
  }
  return steps;
}
