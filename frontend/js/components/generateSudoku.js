import React from "react";

export const GenerateSudoku = ({ setBoard }) => {
  const getPuzzle = async () => {
    let response = await fetch(
      "https://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:1){grids{value}}}"
    );
    let data = await response.json();
    setBoard(data.newboard.grids[0].value);
  };
  return (
    <button className="btn" onClick={getPuzzle}>
      Generate sudoku
    </button>
  );
};

//este es un get no necesita body por eso no usa el board, solo el setboard que es donde pondra los valores
