import React from "react";

export const Cell = ({ row, col, value, board, setBoard }) => {
  let handleChange = (e) => {
    let newBoard = structuredClone(board);
    newBoard[row][col] = e.currentTarget.value;
    setBoard(newBoard);
  };

  return (
    <div className="cell" id={`${row}-${col}`}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        maxLength="1"
        size="1"
      />
    </div>
  );
};
