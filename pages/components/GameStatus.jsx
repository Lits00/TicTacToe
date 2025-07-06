import React from "react";

const GameStatus = ({ status = 'string' }) => {
    const winner = status.startsWith("Winner:");

  return <h2 className={`text-xl font-bold text-red-700 transition-all
        ${winner ? "animate-bounce !text-green-500" : ""}
      `}
    >{status}</h2>;
};

export default GameStatus;
