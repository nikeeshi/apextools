let count = 0;
export function debug(...messages: any[]) {
  console.log(...messages, count / 2); //TODO I don't know why count is doubled.
  count++;
}
