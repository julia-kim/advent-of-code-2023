export function sum<T>(arr: T[]): number {
  return arr.map((x) => +x).reduce((a, b) => a + b);
}

export function groupBy<T>(arr: T[], getKey: (item: T) => any) {
  return arr.reduce<Record<any, T[]>>((prev, curr) => {
    const group = getKey(curr);
    if (!prev[group]) prev[group] = [];
    prev[group].push(curr);
    return prev;
  }, {});
}