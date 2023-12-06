import { sum } from '../../utils/array';
import { readInputFromFile } from '../../utils/io';

export function part1(input?: string[]) {
  const lines = input ?? readInputFromFile(__dirname);
  const scratchcards = lines.map((line, i) => {
    const [winningNumbers, playableNumbers] = line
      .replace(/Card\s*\d+: /, '')
      .trim()
      .split(' | ')
      .map((numbers) => {
        return numbers.split(/\s+/).map((x) => +x);
      });
    let matches = playableNumbers.filter((number) =>
      winningNumbers.includes(number)
    );
    if (matches.length > 0) return Math.pow(2, matches.length - 1);
    else return 0;
  });
  return sum(scratchcards);
}
