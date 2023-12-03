export function sum<T>(arr: T[]): number {
    return arr.map((x) => +x).reduce((a, b) => a + b);
  }