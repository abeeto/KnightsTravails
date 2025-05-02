import readline from "readline/promises";
import {
  isInRange,
  calculateAllMoves,
  coordToIndex,
  indexToCoord,
} from "./myutils.js";
import QueueBFS from "./QueueBFS.js";

const { stdin: input, stdout: output } = process;

const rl = readline.createInterface({ input, output });
const currPosStr = await rl.question("Enter the start position: ");
const [currPosX, currPosY] = currPosStr.split(",").map((s) => Number(s));
const endPosStr = await rl.question("Enter the end position: ");
const [endPosX, endPosY] = endPosStr.split(",").map((s) => Number(s));

let costs = new Array(64);
let paths = new Array(64).fill(false);
let precedings = new Array(64);
const startIndex = coordToIndex(currPosX, currPosY);
const targetIndex = coordToIndex(endPosX, endPosY);

costs[startIndex] = 0;
const traversalQueue = new QueueBFS();
const validMoves = calculateAllMoves(indexToCoord(startIndex)).filter(
  (move) => isInRange(move[0]) && isInRange(move[1])
);

validMoves.forEach((move, i) => {
  const currentIndex = coordToIndex(move[0], move[1]);
  traversalQueue.enqueue(startIndex, currentIndex, costs[startIndex] + 1);
});

while (!paths[targetIndex] && traversalQueue.size() > 0) {
  const {
    origin: precedingIndex,
    current: currentIndex,
    cost,
  } = traversalQueue.dequeue();
  if (!paths[currentIndex]) {
    paths[currentIndex] = true;
    costs[currentIndex] = cost;
    precedings[currentIndex] = precedingIndex;

    const validMoves = calculateAllMoves(indexToCoord(currentIndex)).filter(
      (move) => isInRange(move[0]) && isInRange(move[1])
    );

    validMoves.forEach((move, i) => {
      const nextNodeIndex = coordToIndex(move[0], move[1]);
      traversalQueue.enqueue(
        currentIndex,
        nextNodeIndex,
        costs[currentIndex] + 1
      );
    });
  }
}

let currentNodeIndex = precedings[targetIndex];
let completePath = [indexToCoord(targetIndex)];
for (let i = 0; i < costs[targetIndex]; i++) {
  completePath.push(indexToCoord(currentNodeIndex));
  currentNodeIndex = precedings[currentNodeIndex];
}
console.log(costs[targetIndex]);
completePath.reverse().forEach((path) => console.log(path));
rl.close();
