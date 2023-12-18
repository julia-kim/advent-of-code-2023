import { part1 } from '../days/09/part1';
import { part2 } from '../days/09/part2';

describe('day 09 - part 1', () => {
  it('calculates the sum of extrapolated value', () => {
    const input = ['0 3 6 9 12 15', '1 3 6 10 15 21', '10 13 16 21 30 45'];
    const result = part1(input);
    expect(result).toBe(114);
  });
});

describe('day 09 - part 2', () => {
  it('calculates the sum of extrapolated previous values', () => {
    const input = ['0 3 6 9 12 15', '1 3 6 10 15 21', '10 13 16 21 30 45'];
    const result = part2(input);
    expect(result).toBe(2);
  });
});
