import { sum } from '../../utils/array';
import { readInputFromFile } from '../../utils/io';

export function part1(input?: string[]) {
  const initializationSequence = input ?? readInputFromFile(__dirname);
  const steps = initializationSequence[0].split(',')
  return sum(steps.map(step => {
    let currentValue = 0;
    [...step].forEach(c => {
      currentValue += c.charCodeAt(0)
      currentValue *= 17
      currentValue %= 256
    })
    return currentValue
  }))
}
