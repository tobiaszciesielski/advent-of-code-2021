import { readFileSync } from "fs";

export function readColumnOfNumbers(fileName: string): number[] {
  const file = readFileSync(`inputs/${fileName}`, "utf8");
  return file.split("\n").map((number) => +number);
}
