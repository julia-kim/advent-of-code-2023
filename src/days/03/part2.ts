import { readInputFromFile } from '../../utils/io';
import { Point } from '../../utils/point';
import { sum } from '../../utils/array';

export function part2(input?: string[]) {
  const engineSchematic = input ?? readInputFromFile(__dirname);
  let numbers = new Map<string, string>();

  engineSchematic.forEach((row, y) => {
    const regex = /(\d+)/g;
    var match = regex.exec(row);
    while (match != null) {
      const range = Array.from(
        { length: match[0].length },
        (_, i) => i + match.index
      ).map((x) => {
        const point = new Point(x, -y);
        numbers.set(JSON.stringify(point), match[0] + '+' + match.index + y);
      });
      match = regex.exec(row);
    }
  });
  var partNumbers: number[] = [];
  engineSchematic.forEach((row, y) => {
    var match = [...row].forEach((c, x) => {
      if (c == '*') {
        let touchingParts = new Set<string>();
        const point = new Point(x, -y);
        const directions = [
          [-1, 0],
          [1, 0],
          [0, -1],
          [0, 1],
          [1, 1],
          [1, -1],
          [-1, 1],
          [-1, -1],
        ];
        directions.map(([pos1, pos2]) => {
          const newPoint = new Point(x + pos1, -y + pos2);
          if (numbers.has(JSON.stringify(newPoint))) {
            touchingParts.add(numbers.get(JSON.stringify(newPoint))!);
          }
        });
        if (touchingParts.size == 2) {
          partNumbers.push(
            +[...touchingParts][0].split('+')[0] *
              +[...touchingParts][1].split('+')[0]
          );
        }
      }
    });
  });
  console.log(partNumbers);
  return sum(partNumbers);
}
