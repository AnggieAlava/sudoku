import React, { useMemo, useState } from "react";
import { Cell } from "../components/cell";
export const Board = () => {
  const [board, setBoard] = useState(
    [
      ["0","0","0","0","0","0","0","0","0"],
      ["0","0","0","0","0","0","0","0","0"],
      ["0","0","0","0","0","0","0","0","0"],
      ["0","0","0","0","0","0","0","0","0"],
      ["0","0","0","0","0","0","0","0","0"],
      ["0","0","0","0","0","0","0","0","0"],
      ["0","0","0","0","0","0","0","0","0"],
      ["0","0","0","0","0","0","0","0","0"],
      ["0","0","0","0","0","0","0","0","0"]
    ]
  );
  const num_of_given = useMemo(()=>{
    let total = 0;
    board.forEach(row => {
      row.forEach(cell => {
        if(cell != '0') total+=1
      })
    });
    return total
  }, [board])
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
  return <><div className="stats">Number of given: {num_of_given}</div><div className="board">{newBoard}</div>;</>
};
