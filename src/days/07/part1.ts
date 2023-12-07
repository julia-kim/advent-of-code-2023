import { readInputFromFile } from '../../utils/io';
import { sum, groupBy } from '../../utils/array';

export function part1(input?: string[]) {
  const lines = input ?? readInputFromFile(__dirname);
  var camelCards = lines.map(line => {
    line = line.replace(/A/g, 'E').replace(/T/g, 'A').replace(/J/g, 'B').replace(/Q/g, 'C').replace(/K/g, 'D')
    const [hand, bid] = line.trim().split(' ')
    const cardCounts = groupBy([...hand], (c) => c)
    let handType
    if (Object.keys(cardCounts).length == 1) handType = 6
    if (Object.keys(cardCounts).length == 2 && Object.values(cardCounts).find(c => c.length == 4)) handType = 5
    if (Object.keys(cardCounts).length == 2 && Object.values(cardCounts).find(c => c.length == 3)) handType = 4
    if (Object.keys(cardCounts).length == 3 && Object.values(cardCounts).find(c => c.length == 3)) handType = 3
    if (Object.keys(cardCounts).length == 3 && !Object.values(cardCounts).find(c => c.length == 3)) handType = 2
    if (Object.keys(cardCounts).length == 4) handType = 1
    if (Object.keys(cardCounts).length == 5) handType = 0
    return {
      hand: hand,
      bid: +bid,
      handType: handType
    }
  })
  camelCards = camelCards.sort((a, b) => { return a.handType! - b.handType! || a.hand.localeCompare(b.hand) })
  return sum(camelCards.map((o, i) => { return o.bid * (i + 1)}));
}
