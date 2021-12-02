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

// part 2

const positionWithAim = [0, 0, 0];

for (const step of steps) {
  const { direction, unit } = step;

  switch (direction) {
    case "up":
      positionWithAim[2] = positionWithAim[2] - unit;
      break;
    case "down":
      positionWithAim[2] = positionWithAim[2] + unit;
      break;
    case "forward":
      positionWithAim[1] = positionWithAim[1] + unit;
      positionWithAim[0] += positionWithAim[2] * unit;
      break;
  }
}

console.log(positionWithAim[0] * positionWithAim[1]);
