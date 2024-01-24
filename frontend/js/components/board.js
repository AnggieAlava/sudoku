import React, { useMemo, useState, useEffect } from "react";
import { Cell } from "./cell";
import { Button } from "./button";

export const Board = () => {
  const [board, setBoard] = useState([]);

  const getPuzzle = useEffect(async () => {
    let response = await fetch(
      "https://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:1){grids{value}}}"
    );
    let data = await response.json();
    setBoard(data.newboard.grids[0].value);
  }, []);
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
      <Button board={board} setBoard={setBoard} />
    </>
  );
};
