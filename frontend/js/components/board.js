import React, { useState } from "react";
import { Cell } from "../components/cell";
export const Board = () => {
  const [board, setBoard] = useState([
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ]);

  let newBoard = board.map((row, rowIndex) => {
    return row.map((col, colIndex) => {
      return (
        <Cell
          row={rowIndex}
          col={colIndex}
          value={col}
          board={board}
          setBoard={setBoard}
          key={`${rowIndex}-${colIndex}`}
        />
      );
    });
  });
  return <div className="board">{newBoard}</div>;
};
