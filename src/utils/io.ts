import fs from 'fs';
import path from 'path';

export function readFromFile(filename: string, dir: string = __dirname): string[] {
  const data = fs.readFileSync(path.join(dir, filename), 'utf8');
  const lines = data.split(/\n/);
  return lines;
}

export function readInputFromFile(dir: string): string[] {
  return readFromFile('input.txt', dir);
}
