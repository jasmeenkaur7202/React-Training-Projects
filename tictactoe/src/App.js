import React, { useState }from "react";
import Board from './components/Board';
import { calculateWinner } from "./helpers";

import './styles/root.scss';

const App = () => {
  const [board, setBoard] = useState( Array(9).fill(null));

    // console.log(board);

    const [isXNext, setIsXNext] = useState(false);

    const winner = calculateWinner(board);
    
    const message = winner ? `Winner is ${winner}` : `Next player is ${isXNext ? 'X' : 'O'}`;
    const handleSquareClick = (position) => {
        // setBoard(5);

        if( board[position] || winner){ // if the board has some position, then it will not be changed
          // if there is a winner, then we can't play further.
            return;
        }
        setBoard( (prev) => {
            return prev.map((square, pos) => {
                if(pos === position) {
                    return isXNext ? 'X' : 'O';
                }
                return square;
            })
        });
        setIsXNext( (prev) => !prev); // negation will be printed in the next move
    };
  return(
    <div className="app">
      <h1> TIC TAC TOE </h1>
      <h2>  {message} </h2>
      <Board board={board} handleSquareClick={handleSquareClick}/>
    </div>
  )
}
export default App;
