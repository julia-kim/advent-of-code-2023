import { readInputFromFile } from '../../utils/io';
import { sum } from '../../utils/array';
import { Point } from '../../utils/point';

export function part1(input?: string[]) {
  const engineSchematic = input ?? readInputFromFile(__dirname);
  let numbers = new Map<string, string>();
  let partNumbers =new Set<string>();
  engineSchematic.forEach((row, y) => {
    const regex = /(\d+)/g;
    var match = regex.exec(row);
    while (match != null) {
      const range = Array.from(
        { length: match[0].length },
        (_, i) => i + match.index
      ).map((x) => {
        const point = new Point(x, -y);
        numbers.set(JSON.stringify(point), match[0]+'+'+match.index+y);
      });
      match = regex.exec(row);
    }
  });
  engineSchematic.forEach((row, y) => {
    var match = [...row].forEach((c, x) => {
      if (isNaN(Number(c)) && c != '.') {
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
        directions.forEach(([pos1, pos2]) => {
          const newPoint = new Point(x + pos1, -y + pos2);
          if (numbers.has(JSON.stringify(newPoint)))
            partNumbers.add(numbers.get(JSON.stringify(newPoint))!);
        });
      }
    });
  });
  var actualNumbers = [...partNumbers].map(n => {return +n.split('+')[0]})
  return sum(actualNumbers);
}
