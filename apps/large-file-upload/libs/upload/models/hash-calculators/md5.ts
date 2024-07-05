import SparkMD5 from "spark-md5";
import { HashCalculator } from "./base";

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
