import { readBingoData } from "./utils";

const [numbers, boards] = readBingoData("day4.txt");

function checkIfLineWins(line: number[], pick: number[]): boolean {
  return (
    line.length ===
    line.map((number) => pick.includes(number)).filter((v) => !!v).length
  );
}

function flat2DArray<T>(array: T[][]): T[] {
  return array.reduce((acc, next) => [...acc, ...next]);
}

function calculateBoardScore(flattenBoard: number[], winningPick: number[]) {
  return (
    flattenBoard
      .filter((number) => !winningPick.includes(number))
      .reduce((acc, nextNumber) => acc + nextNumber, 0) * winningPick.pop()!
  );
}

const [winningBoard, winningPick] = ((): [number[][], number[]] => {
  for (let i = 0; i < numbers.length - 5; i++) {
    const currentPick = numbers.slice(0, i + 5);

    for (let j = 0; j < boards.length; j++) {
      const board = boards[j];
      const reversedBoard = board.map((_, r) => _.map((__, c) => board[c][r]));

      for (let k = 0; k < board.length; k++) {
        if (
          checkIfLineWins(board[k], currentPick) ||
          checkIfLineWins(reversedBoard[k], currentPick)
        ) {
          return [board, currentPick];
        }
      }
    }
  }
  return [[[]], []];
})();

const flattenBoard = flat2DArray(winningBoard);

console.log(calculateBoardScore(flattenBoard, winningPick));

// part 2

{
  const winners = new Set<number>();
  const winningPicks: number[][] = [];
  (function (): [number[][], number[]] {
    for (let i = 0; i < numbers.length - 5; i++) {
      const currentPick = numbers.slice(0, i + 5);

      for (let j = 0; j < boards.length; j++) {
        const board = boards[j];
        const reversedBoard = board.map((_, r) =>
          _.map((__, c) => board[c][r])
        );

        for (let k = 0; k < board.length; k++) {
          if (
            checkIfLineWins(board[k], currentPick) ||
            checkIfLineWins(reversedBoard[k], currentPick)
          ) {
            const lengthBefore = winners.size;
            winners.add(j);
            const lengthAfter = winners.size;
            if (lengthAfter !== lengthBefore) {
              winningPicks.push(currentPick);
            }
          }
        }
      }
    }
    return [[[]], []];
  })();

  const winningBoardIndex = Array.from(winners).pop()!;

  const winningPick = winningPicks.pop()!;

  const flattenBoard = flat2DArray(boards[winningBoardIndex]);

  console.log(calculateBoardScore(flattenBoard, winningPick));
}
