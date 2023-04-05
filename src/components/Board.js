import React from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      <div>
        <div className="board-row">
        <Square value={squares[0]} handleClick={() => handleClick(0)} />
        <Square value={squares[1]} handleClick={() => handleClick(1)} />
        <Square value={squares[2]} handleClick={() => handleClick(2)} />
        <Square value={squares[3]} handleClick={() => handleClick(3)} />
        </div>
        <div className="board-row">
        <Square value={squares[4]} handleClick={() => handleClick(4)} />
        <Square value={squares[5]} handleClick={() => handleClick(5)} />
        <Square value={squares[6]} handleClick={() => handleClick(6)} />
        <Square value={squares[7]} handleClick={() => handleClick(7)} />
        </div>
        <div className="board-row">
        <Square value={squares[8]} handleClick={() => handleClick(8)} />
        <Square value={squares[9]} handleClick={() => handleClick(9)} />
        <Square value={squares[10]} handleClick={() => handleClick(10)} />
        <Square value={squares[11]} handleClick={() => handleClick(11)} />
        </div>
        <div className="board-row">
        <Square value={squares[12]} handleClick={() => handleClick(12)} />
        <Square value={squares[13]} handleClick={() => handleClick(13)} />
        <Square value={squares[14]} handleClick={() => handleClick(14)} />
        <Square value={squares[15]} handleClick={() => handleClick(15)} />
        </div>
      </div>
    </div>
  );
}
