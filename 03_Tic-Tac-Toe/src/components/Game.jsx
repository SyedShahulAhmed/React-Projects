import React, { useRef, useState } from 'react';
import cross from '../assests/X.png';
import circle from '../assests/O.png';

export const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null)); 
  const [isXTurn, setIsXTurn] = useState(true); 
  const [gameOver, setGameOver] = useState(false);
  let msg = useRef(null)

  const handleClick = (index) => {
    if (board[index] !== null || gameOver) return; 
    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'X' : 'O';
    setBoard(newBoard);
    setIsXTurn(!isXTurn);

    checkwin(newBoard); 
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null)); 
    setIsXTurn(true);
    setGameOver(false); 
    msg.current.innerHTML = ``
  };

  const checkwin = (data) => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== null) {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== null) {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== null) {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== null) {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== null) {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== null) {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== null) {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== null) {
      won(data[6]);
    }
  };

  const won = (winner) => {
    setGameOver(true); 
    if(winner === "X"){
      msg.current.innerHTML = `Congratulations X wins`
    }
    else{
      msg.current.innerHTML = `Congratulations O wins`
    }
    setTimeout(()=>{
      msg.current.innerHTML = ``
      handleReset()
    },10000)
  };

  return (
    <div className='flex flex-col justify-center items-center '>
      <h1 className='text-5xl font-bold font-mono mb-8 text-blue-200 '>Tic-Tac-Toe</h1>
      <div className='grid grid-cols-3 gap-2 w-[450px] h-[450px]'>
        {board.map((cell, index) => (
          <div
            key={index}
            className='flex justify-center items-center h-[150px] w-[150px] bg-transparent shadow-lg rounded-lg border-2 border-black
             cursor-pointer'
            onClick={() => handleClick(index)}
          >
            {cell === 'X' ? (
              <img src={cross} alt="cross" className='w-[100%] h-[80%]' />
            ) : cell === 'O' ? (
              <img src={circle} alt="circle" className='w-[100%] h-[80%]' />
            ) : null}
          </div>
        ))}
      </div>
      <p className='mt-7 text-2xl font-bold text-yellow-300' ref={msg} ></p>
      <button
        onClick={handleReset}
        className='w-[150px] h-[50px] border-none outline-none cursor-pointer rounded-3xl text-lg shadow-lg bg-blue-900 text-white mt-8'
      >
        Reset
      </button>
    </div>
  );
};

export default Game;
