import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(e1 => e1 !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next Player is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && `X and O tied`}
    </h2>
  );
};

export default StatusMessage;
