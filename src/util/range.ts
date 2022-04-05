export function range(from: number, to: number) {
  const arr = [];
  if (from <= to)
    for (let i = from; i <= to; i++) arr.push(i);
  else for (let i = from; i >= to; i--) arr.push(i);
  return arr;
}
