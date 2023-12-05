import { readInputFromFile } from '../../utils/io';
import { sum } from '../../utils/array';

export function part2(input?: string[]) {
  const lines = input ?? readInputFromFile(__dirname);
  var copies = new Array(lines.length).fill(undefined).map((v, i) => 1);
  const scratchcards = lines.map((line, i) => {
    const cardIndex = +line.match(/Card\s*(\d+):/)![1] - 1;
    const [winningNumbers, playableNumbers] = line
      .replace(/Card\s*\d+: /, '')
      .trim()
      .split(' | ')
      .map((numbers) => {
        return numbers.split(/\s+/).map((x) => +x);
      });
    let noOfMatches = playableNumbers.filter((number) =>
      winningNumbers.includes(number)
    ).length;
    while (noOfMatches > 0) {
      const newIndex = cardIndex + noOfMatches;
      copies[newIndex] = copies[cardIndex] + copies[newIndex];
      noOfMatches--;
    }
  });
  return sum(copies);
}
