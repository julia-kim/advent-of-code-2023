import { sum } from '../../utils/array';
import { readInputFromFile } from '../../utils/io';

export function part1(input?: string[]) {
  const lines = input ?? readInputFromFile(__dirname);
  const scratchcards = lines.map((line) => {
    let matches = 0;
    const [winningNumbers, playableNumbers] = line
      .trim()
      .replace(/Card \d+: /, '')
      .split(' | ')
      .map((numbers) => {
        return numbers.split(/\s+/).map((x) => +x);
      });
    playableNumbers.forEach((number) => {
      if (winningNumbers.includes(number)) {
        matches++;
      }
    });
    if (matches > 0) return Math.pow(2, matches - 1);
    else return 0;
  });
  return sum(scratchcards);
}
