import { readInputFromFile } from '../../utils/io';

export function part2(input?: string[]) {
  const lines = input ?? readInputFromFile(__dirname);
  const time = +lines[0].replace(/Time:\s*/, '').replace(/ \s*/g, '')
  const recordDistance = +lines[1].replace(/Distance:\s*/, '').replace(/ \s*/g, '')
  var speed = 0
  var waysToWin = 0
  const race = [...Array(time).keys()].forEach((ms => {
      const totalDistance = (time - ms) * speed
      speed++
      if (totalDistance > recordDistance) waysToWin++
    }));
  return waysToWin;
}
