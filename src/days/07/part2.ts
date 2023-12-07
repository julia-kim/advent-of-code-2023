import { readInputFromFile } from '../../utils/io';
import { sum, groupBy } from '../../utils/array';

export function part2(input?: string[]) {
  const lines = input ?? readInputFromFile(__dirname);
  var camelCards = lines.map(line => {
    line = line.replace(/A/g, 'E').replace(/T/g, 'A').replace(/J/g, '1').replace(/Q/g, 'C').replace(/K/g, 'D')
    const [hand, bid] = line.trim().split(' ')
    const cardCounts = groupBy([...hand], (c) => c)
    var newHand = hand
    const sortedCards = Object.entries(cardCounts).sort((a, b) => { return a[1].length - b[1].length || a[0].localeCompare(b[0]) }).reverse().filter(v => v[0] != '1')
    if (sortedCards.length > 0) newHand = hand.replace(/1/g, sortedCards.at(0)![0])
    const updatedCardCount = groupBy([...newHand], (c) => c)
    let handType
    if (Object.keys(updatedCardCount).length == 1) handType = 6
    if (Object.keys(updatedCardCount).length == 2 && Object.values(updatedCardCount).find(c => c.length == 4)) handType = 5
    if (Object.keys(updatedCardCount).length == 2 && Object.values(updatedCardCount).find(c => c.length == 3)) handType = 4
    if (Object.keys(updatedCardCount).length == 3 && Object.values(updatedCardCount).find(c => c.length == 3)) handType = 3
    if (Object.keys(updatedCardCount).length == 3 && !Object.values(updatedCardCount).find(c => c.length == 3)) handType = 2
    if (Object.keys(updatedCardCount).length == 4) handType = 1
    if (Object.keys(updatedCardCount).length == 5) handType = 0
    return {
      hand: hand,
      bid: +bid,
      handType: handType
    }
  })
  camelCards = camelCards.sort((a, b) => { return a.handType! - b.handType! || a.hand.localeCompare(b.hand) })
  return sum(camelCards.map((o, i) => { return o.bid * (i + 1) }));
}
