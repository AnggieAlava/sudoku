import React, { useMemo, useState, useEffect } from "react";
import { Cell } from "./cell";
import { Solution } from "./solution";
import { GenerateSudoku } from "./generateSudoku";

export const Board = () => {
  const [board, setBoard] = useState([
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
  ]);
  const numOfGiven = useMemo(() => {
    let total = 0;
    board.forEach((row) => {
      row.forEach((cell) => {
        if (cell !== "0") total += 1;
      });
    });
    return total;
  }, [board]);
  let newBoard = board.map((row, rowIndex) =>
    row.map((col, colIndex) => (
      <Cell
        row={rowIndex}
        col={colIndex}
        value={col}
        board={board}
        setBoard={setBoard}
        key={`${rowIndex}-${colIndex}`}
      />
    ))
  );
  return (
    <>
      <div className="stats">Number of given: {numOfGiven}</div>
      <div className="board">{newBoard}</div>
      <div className="btn-container">
        <Solution board={board} setBoard={setBoard} />
        <GenerateSudoku board={board} setBoard={setBoard} />
      </div>
    </>
  );
};
