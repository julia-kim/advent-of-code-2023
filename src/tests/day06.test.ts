import { part1 } from '../days/06/part1';
import { part2 } from '../days/06/part2';

describe('day 06 - part 1', () => {
  it('determines the number of ways to beat each record and multiplies them together', () => {
    const input = ['Time:      7  15   30', 'Distance:  9  40  200'];
    const result = part1(input);
    expect(result).toBe(288);
  });
});

describe('day 06 - part 2', () => {
  it('determines the number of ways to beat one long race', () => {
    const input = ['Time:      7  15   30', 'Distance:  9  40  200'];
    const result = part2(input);
    expect(result).toBe(71503);
  });
});
