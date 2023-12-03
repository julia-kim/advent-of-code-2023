import { readInputFromFile } from '../../utils/io';

export function part1(input?: string[]) {
  const lines = input ?? readInputFromFile(__dirname);
  const calibrationValues = lines.map((line) => {
    const digitsOnly = line.replace(/\D/g, '');
    return +(digitsOnly.slice(0, 1) + digitsOnly.slice(-1));
  });
  return calibrationValues.reduce((partialSum, x) => partialSum + x, 0);
}
