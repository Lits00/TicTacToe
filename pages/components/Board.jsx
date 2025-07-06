import { useState } from "react";
import Box from "./Box";
import GameStatus from "./GameStatus";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Board() {
  const [box, setBox] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(box);
  //   console.log(box)

  function handleClick(i) {
    if (box[i] || winner) return;
    // console.log(i)
    const nextBox = box.slice();
    nextBox[i] = isXNext ? "😺" : "🐭";
    // console.log(nextBox)
    setBox(nextBox);
    setIsXNext(!isXNext);
  }

  function resetGame() {
    setBox(Array(9).fill(null));
    setIsXNext(true);
  }

  const status = winner
    ? `Winner: ${winner}`
    : box.every(Boolean)
    ? "Draw!"
    : `Player ${isXNext ? "Tom" : "Jerry"}'s turn`;

  return (
    <div className="flex flex-col items-center gap-5 text-slate-700">
      <h1 className="text-6xl text-red-700 font-extrabold">
        TicTacTom & Jerry!
      </h1>
      <Card className="bg-neutral-900 p-6 space-y-4 text-center">
        <GameStatus status={status} />
        <div className="grid grid-cols-3 gap-2">
          {box.map((box, i) => (
            <Box
              className="bg-stone-200 hover:bg-neutral-400 hover:cursor-pointer"
              key={i}
              value={box}
              onClick={() => handleClick(i)}
            />
          ))}
        </div>
        <Button
          onClick={resetGame}
          className="mt-4 bg-stone-200 text-slate-900 hover:cursor-pointer hover:bg-neutral-50 hover:text-red-500"
        >
          Restart
        </Button>
      </Card>
    </div>
  );
}

function calculateWinner(box) {
  const lines = [
    // rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (box[a] && box[a] === box[b] && box[a] === box[c]) {
      return box[a];
    }
  }
  return null;
}
