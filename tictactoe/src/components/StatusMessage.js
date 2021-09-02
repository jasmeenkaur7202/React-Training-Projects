import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);
  // every function iterates over the entire array & for every element, it runs the callback fn. This CB funcn must return a boolean value
  // and if for every element, CB fn returns true, then the whole condition is asid to be true otherwise false
  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next player is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && 'X and O tied'}
    </h2>
  );
};

export default StatusMessage;
