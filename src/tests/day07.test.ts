import { part1 } from '../days/07/part1';
import { part2 } from '../days/07/part2';

describe('day 07 - part 1', () => {
  it('determines the total winnings of a list of hands', () => {
    const input = ['32T3K 765', 'T55J5 684', 'KK677 28', 'KTJJT 220', 'QQQJA 483'];
    const result = part1(input);
    expect(result).toBe(6440);
  });
});

describe('day 07 - part 2', () => {
  it('determines total winnings in a game with jokers as wildcards', () => {
    const input = ['32T3K 765', 'T55J5 684', 'KK677 28', 'KTJJT 220', 'QQQJA 483'];
    const result = part2(input);
    expect(result).toBe(5905);
  });
});
