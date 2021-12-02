import { readColumnOfNumbers } from "./utils";

const numbers = readColumnOfNumbers("day1.txt");

let increasedCount = 0;

numbers.reduce((currentValue, nextValue) => {
  currentValue < nextValue && increasedCount++;
  return nextValue;
});

console.log(increasedCount);
