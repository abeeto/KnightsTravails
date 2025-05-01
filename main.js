import readline from "readline/promises";
import { isInRange, calculateAllMoves } from "./myutils.js";

const { stdin: input, stdout: output } = process;

const rl = readline.createInterface({ input, output });
const currPosStr = await rl.question("Enter the start position: ");
const [currPosX, currPosY] = currPosStr.split(",").map((s) => Number(s));
const endPosStr = await rl.question("Enter the end position: ");
const [endPosX, endPosY] = endPosStr.split(",").map((s) => Number(s));

const validMoves = calculateAllMoves([currPosX, currPosY]).filter(
  (move) => isInRange(move[0]) && isInRange(move[1])
);

validMoves.forEach((move, i) => console.log(`${move[0]}, ${move[1]}`));
rl.close();
