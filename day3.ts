import { readColumn } from "./utils";

const bitArray2Decimal = (bitArray: Array<"1" | "0">): number => {
  return parseInt(bitArray.join(""), 2);
};

const bits = readColumn("day3.txt");
const gammaRate = Array.from({ length: bits[0].length }).map(
  (_: any, index: number) => {
    const bitCount = bits.reduce(
      (acc, bit) => {
        const digit = bit[index] as "1" | "0";
        acc[digit]++;
        return acc;
      },
      { "0": 0, "1": 0 }
    );

    return bitCount["0"] > bitCount["1"] ? "0" : "1";
  }
);

const epsilonRate = gammaRate.map((digit) => (digit === "0" ? "1" : "0"));

console.log(bitArray2Decimal(gammaRate) * bitArray2Decimal(epsilonRate));
