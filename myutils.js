export function isInRange(coordinate) {
  return coordinate >= 0 && coordinate < 8;
}

export function calculateAllMoves(coordinate) {
  const moves = [
    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2],
    [2, 1],
    [-2, 1],
    [2, -1],
    [-2, -1],
  ];
  return moves.map((move) => [
    move[0] + coordinate[0],
    move[1] + coordinate[1],
  ]);
}
