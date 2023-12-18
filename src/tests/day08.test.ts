import { part1 } from '../days/08/part1';
import { part2 } from '../days/08/part2';

describe('day 08 - part 1', () => {
  it('finds number of steps required to reach ZZZ', () => {
    const input = [
      'RL',
      '',
      'AAA = (BBB, CCC)',
      'BBB = (DDD, EEE)',
      'CCC = (ZZZ, GGG)',
      'DDD = (DDD, DDD)',
      'EEE = (EEE, EEE)',
      'GGG = (GGG, GGG)',
      'ZZZ = (ZZZ, ZZZ)'
    ];
    const result = part1(input);
    expect(result).toBe(2);
  });
});

describe('day 08 - part 2', () => {
  it('finds number of steps required to simultaneously reach nodes ending in Z', () => {
    const input = [
      'LR',
      '',
      '11A = (11B, XXX)',
      '11B = (XXX, 11Z)',
      '11Z = (11B, XXX)',
      '22A = (22B, XXX)',
      '22B = (22C, 22C)',
      '22C = (22Z, 22Z)',
      '22Z = (22B, 22B)',
      'XXX = (XXX, XXX)'
    ];
    const result = part2(input);
    expect(result).toBe(6);
  });
});
