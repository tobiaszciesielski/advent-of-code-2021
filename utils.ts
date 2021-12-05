import { readFileSync } from "fs";
import { SubmarineDirection, SubmarineStep } from "./types";

export function readColumnOfNumbers(fileName: string): number[] {
  const file = readFileSync(`inputs/${fileName}`, "utf8");
  return file.split("\n").map((number) => +number);
}

export function readColumn(fileName: string): string[] {
  const file = readFileSync(`inputs/${fileName}`, "utf8");
  return file.split("\n");
}

export function readTextNumberPairs(fileName: string): SubmarineStep[] {
  const file = readFileSync(`inputs/${fileName}`, "utf8");
  return file.split("\n").map((line) => {
    let [direction, unit] = line.split(" ");
    return { direction: direction as SubmarineDirection, unit: +unit };
  });
}

export function readBingoData(fileName: string): [number[], number[][][]] {
  const file = readFileSync(`inputs/${fileName}`, "utf8");
  const [numbers, ...boards] = file.split("\n\n");
  const formattedBoards = boards.map((board) =>
    board.split("\n").map((line) =>
      line
        .split(" ")
        .filter((number) => !!number)
        .map((number) => +number)
    )
  );
  return [numbers.split(",").map((number) => +number), formattedBoards];
}
