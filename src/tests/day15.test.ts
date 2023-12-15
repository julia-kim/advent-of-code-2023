import { part1 } from '../days/15/part1';
import { part2 } from '../days/15/part2';

describe('day 15 - part 1', () => {
  it('calculates the sum of running the HASH algorithm on each step of the sequence', () => {
    const input = ['rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7'];
    const result = part1(input);
    expect(result).toBe(1320);
  });
});

describe('day 15 - part 2', () => {
  it('calculates the total focusing power of the lens configuration', () => {
    const input = ['rn=1,cm-,qp=3,cm=2,qp-,pc=4,ot=9,ab=5,pc-,pc=6,ot=7'];
    const result = part2(input);
    expect(result).toBe(145);
  });
});
