export function sleep(ms: number) {
  // @ts-ignore
  return new Promise((resolve) => setTimeout(resolve, ms));
}
