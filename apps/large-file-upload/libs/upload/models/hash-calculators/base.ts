export interface IHashCalculator {
  append(chunk: ArrayBuffer): void;
  end(): string;
}

export abstract class HashCalculator implements IHashCalculator {
  abstract append(chunk: ArrayBuffer): HashCalculator;
  abstract end(): string;
}
