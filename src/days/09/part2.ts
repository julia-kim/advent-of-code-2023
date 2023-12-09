import { readInputFromFile } from '../../utils/io';
import { sum } from '../../utils/array';

export function part2(input?: string[]) {
  const oasis = input ?? readInputFromFile(__dirname);
  const extrapolatedValues = oasis.map((history) => {
    var sequence = history
      .trim()
      .split(' ')
      .map((n) => +n);
    const firstValue = sequence[0];
    var increaseValues: number[] = [];
    let allZero = false;
    while (!allZero) {
      let previous = sequence[0];
      const nextSequence = sequence.slice(1).map((n, i) => {
        const diff = n - previous;
        previous = n;
        return diff;
      });
      increaseValues.push(nextSequence[0]);
      if (nextSequence.every((num) => num === 0)) allZero = true;
      sequence = nextSequence;
    }
    return firstValue -
      increaseValues.reverse().map(
        (
          (sum) => (value) =>
            (sum = value - sum)
        )(0)
      ).pop()!
  });
  return sum(extrapolatedValues);
}
