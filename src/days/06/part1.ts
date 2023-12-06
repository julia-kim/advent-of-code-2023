import { readInputFromFile } from '../../utils/io';

export function part1(input?: string[]) {
  const lines = input ?? readInputFromFile(__dirname);
  const times = lines[0].replace(/Time:\s*/, '').trim().split(/ \s*/).map(v => +v)
  const distances = lines[1].replace(/Distance:\s*/, '').trim().split(/ \s*/).map(v => +v)
  const marginOfError = times.map((time, i) => {
    const record = distances[i]
    var speed = 0
    return [...Array(time).keys()].map((ms => {
      const totalDistance = (time - ms) * speed
      speed++
      return totalDistance;
    })).filter((v) => v > record).length
  })
  return marginOfError.reduce((a, b) => a * b);
}
