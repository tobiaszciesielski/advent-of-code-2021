import { SubmarineStep } from "./types";
import { readTextNumberPairs } from "./utils";

const steps: SubmarineStep[] = readTextNumberPairs("day2.txt");

const position = [0, 0];

for (const step of steps) {
  const { direction, unit } = step;

  switch (direction) {
    case "up":
      position[0] = position[0] - unit;
      break;
    case "down":
      position[0] = position[0] + unit;
      break;
    case "forward":
      position[1] = position[1] + unit;
      break;
  }
}

console.log(position[0] * position[1]);
