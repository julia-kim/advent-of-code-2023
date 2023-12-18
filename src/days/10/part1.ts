import { readInputFromFile } from '../../utils/io';

export function part1(input?: string[]) {
  const lines = input ?? readInputFromFile(__dirname);
  const grid = lines.map((row) => {
    return row.trim().split('');
  });
  const startingPipe = 'S';
  const startingY = grid.findIndex((arr) => arr.includes(startingPipe));
  const startingX = grid[startingY].findIndex((c) => c == startingPipe);
  console.log(grid);
  let pipe = 'F';
  let y = startingY;
  let x = startingX;
  let loopClosed = false;
  let i = 1;
  while (!loopClosed) {
    const south = grid[y + i][x];
    const north = grid[y - i][x];
    const east = grid[y][x + 1];
    const west = grid[y][x - 1];
    switch (pipe) {
      case '|':
        if (['|', 'L', 'J'].includes(south) && ['|', '7', 'F'].includes(north)) {
          pipe = north;
          y = y - i;
          x = x;
        }
        break;
      case '-':
        if (['L', '-', 'F'].includes(west) && ['J', '-', '7'].includes(east)) {
          pipe = east;
          y = y;
          x = x +1;
        }
        break;
      case 'L':
        if (['7', '-', 'J'].includes(east) && ['|', '7', 'F'].includes(north)){
          pipe = east;
          y = y;
          x = x +1;
        } break;
      case 'J':
        if (['|', '7', 'F'].includes(north) && ['L', '-', 'F'].includes(west)) {
          pipe = east;
          y = y;
          x = x +1;
        }break;
      case '7':
        if (['L', '-', 'F'].includes(west) && ['|', 'L', 'J'].includes(south)) break;
      case 'F':
        if (['|', 'L', 'J'].includes(south) && ['7', '-', 'J'].includes(east)) break;
      case 'S':
        loopClosed = true;
        break;
      default:
      // code block
    }
  }
  // | is a vertical pipe connecting north and south.
  // - is a horizontal pipe connecting east and west.
  // L is a 90-degree bend connecting north and east.
  // J is a 90-degree bend connecting north and west.
  // 7 is a 90-degree bend connecting south and west.
  // F is a 90-degree bend connecting south and east.
  // . is ground; there is no pipe in this tile.
  // S is the starting position of the animal; there is a pipe on this tile, but your sketch doesn't show what shape the pipe has.
  return lines[0];
}
