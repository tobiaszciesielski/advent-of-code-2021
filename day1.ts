import { readColumnOfNumbers } from "./utils";

const numbers = readColumnOfNumbers("day1.txt");

let increasedCount = 0;

numbers.reduce((currentValue, nextValue) => {
  currentValue < nextValue && increasedCount++;
  return nextValue;
});

console.log(increasedCount);

// part 2

let increasedWindowSumCount = 0;

let index = 3;
numbers.reduce((_, __) => {
  const currentWindowSum = numbers
    .slice(index - 3, index)
    .reduce((number, nextNumber) => number + nextNumber);

  const nextWindowSum = numbers
    .slice(index - 2, index + 1)
    .reduce((number, nextNumber) => number + nextNumber);

  currentWindowSum < nextWindowSum && increasedWindowSumCount++;
  return index++;
});

console.log(increasedWindowSumCount);
