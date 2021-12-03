import { Bit } from "./types";
import { readColumn } from "./utils";

const bitArray2Decimal = (bitArray: Bit[]): number => {
  return parseInt(bitArray.join(""), 2);
};

const bits = readColumn("day3.txt");
const gammaRate = Array.from({ length: bits[0].length }).map(
  (_: any, index: number) => {
    const bitCount = bits.reduce(
      (acc, bit) => {
        const digit = bit[index] as Bit;
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

// part 2

const bits2Decimal = (bitArray: string): number => {
  return parseInt(bitArray, 2);
};

let i = 0;

function findRating(
  arrayOfBits: string[],
  ratingType: "oxygen" | "co2"
): string {
  const zeros: string[] = [];
  const ones: string[] = [];

  const bitCount = arrayOfBits.reduce(
    (acc, bits) => {
      const digit = bits[i] as Bit;
      digit === "0" ? zeros.push(bits) : ones.push(bits);
      acc[digit]++;
      return acc;
    },
    { "0": 0, "1": 0 }
  );

  const ratingCondition =
    ratingType === "co2"
      ? bitCount["1"] < bitCount["0"]
      : bitCount["1"] >= bitCount["0"];

  const nextBits = ratingCondition ? ones : zeros;

  if (nextBits.length === 1) {
    return nextBits[0];
  } else {
    i++;
    return findRating(nextBits, ratingType);
  }
}

const oxygenGeneratorRating = bits2Decimal(findRating(bits, "oxygen"));

i = 0;

const CO2ScrubberRating = bits2Decimal(findRating(bits, "co2"));

console.log(oxygenGeneratorRating * CO2ScrubberRating);
