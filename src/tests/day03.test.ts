import { part1 } from '../days/03/part1';
import { part2 } from '../days/03/part2';

describe('day 03 - part 1', () => {
  it('adds up all the part numbers in the engine schematic', () => {
    const input = [
      '467..114..',
      '...*......',
      '..35..633.',
      '......#...',
      '617*......',
      '.....+.58.',
      '..592.....',
      '......755.',
      '...$.*....',
      '.664.598..',
    ];
    const result = part1(input);
    expect(result).toBe(4361);
  });
});

describe('day 03 - part 2', () => {
  it('calculates the sum of all the gear ratios', () => {
    const input = [
      '467..114..',
      '...*......',
      '..35..633.',
      '......#...',
      '617*......',
      '.....+.58.',
      '..592.....',
      '......755.',
      '...$.*....',
      '.664.598..',
    ];
    const result = part2(input);
    expect(result).toBe(467835);
  });
});
