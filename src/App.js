import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helpers';
import './styles/root.scss';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(false);

  const winner = calculateWinner(board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${isNext ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    // Inorder to handle more than one click
    if (board[position] || winner) {
      return;
    }

    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isNext ? 'X' : 'O';
        }
        return square;
      });
    });
    setIsNext(prev => !prev);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};
export default App;
