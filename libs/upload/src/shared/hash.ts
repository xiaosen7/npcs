import SparkMD5 from "spark-md5";

export interface IHashCalculator {
  append(chunk: ArrayBuffer): void;
  end(): string;
}

export abstract class HashCalculator implements IHashCalculator {
  abstract append(chunk: ArrayBuffer): HashCalculator;
  abstract end(): string;
}

export class Md5HashCalculator extends HashCalculator {
  #spark: SparkMD5.ArrayBuffer;

  constructor() {
    super();
    this.#spark = new SparkMD5.ArrayBuffer();
  }

  append(chunk: ArrayBuffer) {
    this.#spark.append(chunk);
    return this;
  }

  end(): string {
    return this.#spark.end();
  }
}
