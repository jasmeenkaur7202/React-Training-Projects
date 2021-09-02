import React, { useState } from 'react';
import Square from './Square';

const Board = ({ board, handleSquareClick, winningSquares }) => {
  const renderSqaure = position => {

    const isWinningSqaure = winningSquares.includes(position);
    return (
      <Square
        value={board[position]}
        onClick={() => handleSquareClick(position)}
        isWinningSqaure={isWinningSqaure}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSqaure(0)}
        {renderSqaure(1)}
        {renderSqaure(2)}
      </div>

      <div className="board-row">
        {renderSqaure(3)}
        {renderSqaure(4)}
        {renderSqaure(5)}
      </div>

      <div className="board-row">
        {renderSqaure(6)}
        {renderSqaure(7)}
        {renderSqaure(8)}
      </div>
    </div>
  );
};

export default Board;
