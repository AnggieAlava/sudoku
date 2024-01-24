import React from "react";

export const Solution = ({ board, setBoard }) => {
  const btnClick = async () => {
    const response = await fetch("/solve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(board),
    });
    if (!response.ok) {
      throw new Error(`Error : ${response.statusText}`);
    }
    const data = await response.json();
    console.log(data);
    setBoard(data);
  };
  return (
    <button className="btn" onClick={btnClick}>
      Solution
    </button>
  );
};

// este es un post que necesita los valores del board y el setBoard para que los cambie
