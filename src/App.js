import { useState } from 'react';
import './App.css';



function App() {
  const initialState = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  const [gameBoard, setGameBoard] = useState(initialState)
  const [chance, setChance] = useState("X")

  function handleReset() {
    let elements = document.getElementsByClassName("square")
    for (let i = 0; i < 9; i++) {
      elements[i].classList.remove("winner")
    }
    setChance("X")
    setGameBoard(initialState)
  }

  function handleWin(type, num) {
    let elements = document.getElementsByClassName("square")
    if (type === "horizontal") {
      if (num === 1) {
        num = 3;
      }
      else if (num === 2) {
        num = 6
      }
      for (let i = num; i < num + 3; i++) {
        elements[i].classList.add("winner")
      }
    }
    else if (type === "vertical") {
      for (let i = 0; i < 3; i++) {
        elements[num].classList.add("winner")
        num += 3
      }
    }
    else {
      if (num === 1) {
        elements[0].classList.add("winner")
        elements[4].classList.add("winner")
        elements[8].classList.add("winner")
      }
      else {
        elements[6].classList.add("winner")
        elements[4].classList.add("winner")
        elements[2].classList.add("winner")
      }
    }
  }




  function checkBoard() {


    let variance = 3;
    for (let i = 0; i < 3; i++) {
      if ((gameBoard[(variance * i)] === gameBoard[(variance * i) + 1] && gameBoard[(variance * i) + 1] === gameBoard[(variance * i) + 2]) && gameBoard[variance * i] !== " ") {
        handleWin("horizontal", i);
        // console.log(gameBoard[variance * i]);
        alert("The winner is " + gameBoard[variance * i])
        // handleReset()
        return
      }
      if ((gameBoard[i] === gameBoard[variance + i] && gameBoard[variance + i] === gameBoard[variance + variance + i]) && gameBoard[i] !== " ") {
        handleWin("vertical", i);
        alert("The winner is " + gameBoard[i])
        // handleReset()
        return
      }
    }
    if ((gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) && gameBoard[4] !== " ") {
      handleWin("diag", 1)
      alert("The winner is " + gameBoard[4])
      // handleReset()
      return
    }
    if ((gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) && gameBoard[4] !== " ") {
      handleWin("diag", 2)
      alert("The winner is " + gameBoard[4])
      // handleReset()
      return
    }


    if (gameBoard.toString().includes(" ") === false) {
      alert("Draw Match")
      // handleReset()
    }
  }

  function handleClick(index) {

    if (gameBoard[index] === " ") {

      gameBoard[index] = chance;
      setGameBoard(gameBoard)
      if (chance === "X") {
        setChance("O")
      }
      else {
        setChance("X")
      }
      setTimeout(checkBoard, 100)
    }
  }

  return (
    <div className='outerDiv'>
      <h1 className='heading'>Tic Tac Toe Game</h1>
      <div className='gameSquare'>
        <div className='rows'>
          <div onClick={() => handleClick(0)} className='borderRight borderBottom square'>{gameBoard[0]}</div>
          <div onClick={() => handleClick(1)} className='borderRight borderBottom square'>{gameBoard[1]}</div>
          <div onClick={() => handleClick(2)} className='borderBottom square'>{gameBoard[2]}</div>
        </div>
        <div className='rows'>
          <div onClick={() => handleClick(3)} className='borderRight borderBottom square'>{gameBoard[3]}</div>
          <div onClick={() => handleClick(4)} className='borderRight borderBottom square'>{gameBoard[4]}</div>
          <div onClick={() => handleClick(5)} className='borderBottom square'>{gameBoard[5]}</div>
        </div>
        <div className='rows'>
          <div onClick={() => handleClick(6)} className='borderRight square'>{gameBoard[6]}</div>
          <div onClick={() => handleClick(7)} className='borderRight square'>{gameBoard[7]}</div>
          <div onClick={() => handleClick(8)} className='square'>{gameBoard[8]}</div>
        </div>
      </div>
      <div >
        <button className='btn' onClick={() => handleReset()}>Reset Game</button>
      </div>
      <div>
        <h3 className='subheading'>Created by Yash Kumar Chandrakar</h3>
      </div>
    </div>
  );
}

export default App;
