import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);
  // every function iterates over the entire array & for every element, it runs the callback fn. This CB funcn must return a boolean value
  // and if for every element, CB fn returns true, then the whole condition is asid to be true otherwise false
  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next player is{' '}
          <span className={current.isXNext ? 'text-green' : 'text-orange'}>
            {current.isXNext ? 'X' : 'O'}{' '}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X</span> and{' '}
          <span className="text-orange">O</span> tied
        </>
      )}
    </div>
  );
};

export default StatusMessage;
