export type IBetterOmit<T, K extends string | number | symbol> = T extends {}
  ? Omit<T, K>
  : T;
