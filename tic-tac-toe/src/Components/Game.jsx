import React, { useState, useContext, useEffect, createContext } from 'react';
import GameBoard from './Board/GameBoard.jsx';
import {GameDiv } from '../Css/StyleComps.js'
import {UserCharContext} from './Home.jsx'

export const BoardStateContext = createContext()
const Game = () => {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [cpuNext, setCpuNext] = useState(false)
  const [winner, setWinner] = useState(null)
  const {userChar, compChar, isEasy} = useContext(UserCharContext)
  const [isOver, setIsOver] = useState(false)
  const winPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    checkForWin()
    if (cpuNext) {
      setTimeout(computerMove, 1000)
      checkForWin()
    }
  }, [cpuNext])

  useEffect(() => {
    if (winner) {
      console.log(`${winner} won!`)
      setIsOver(true)
    }
  }, [winner])

  const computerMove = () => {
    if (isEasy) {
      easyCompMove()
    } else {
        hardCompMove()
        // easyCompMove()
    }
    setCpuNext(false);
  }



  const stopUserFromWin = (forComp) => {
    let next_move = null
    let checkingFor = forComp ? compChar : userChar;
    let checkingAgainst = forComp ? userChar : compChar;
    for (let i = 0; i < winPositions.length; i++) {
      let count = 0;
      for (let j = 0; j < winPositions[i].length; j++) {
        if (board[winPositions[i][j]] === checkingFor) {
          count++
        } else if (board[winPositions[i][j]] === checkingAgainst) {
          count = 0
          break
        } else {
          next_move = winPositions[i][j]
        }
      }
      if (count === 2) {
        return next_move
      }
    }

    return null
  }


  const easyCompMove = () => {
    let availMoves = []
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        availMoves.push(i)
      }
    }
    let next_move = Math.floor(Math.random()* availMoves.length)
    board[availMoves[next_move]] = compChar
    setBoard(board)
  }

  const hardCompMove = () => {
    let next_move = stopUserFromWin(true) || stopUserFromWin(false);
    if (!next_move) {
      easyCompMove()
    }
    board[next_move] = compChar
    setBoard(board)

    // look for a move that will win
    // find all curPositions of compChar
    // find all winning solutions with that index, check each pos for userChar, if there is no userChar, place char there
  }

  const checkForWin = () => {
    for (let i = 0; i < winPositions.length; i++) {
      const [a,b,c] = winPositions[i];
      if (board[a] === board[b] && board[b] === board[c] && board[a]) {
        if (board[a] === userChar) {
          setWinner('player')
        } else {
          setWinner('comp')
        }
        return
      }
    }
    if (checkForTie()) {
      setWinner('tie')
    }
  }

  const checkForTie = () => {
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        return false
      }
    }
    return true
  }


  return (isOver ?
    <div>
      <h2>play again?</h2>
    </div>
    :
    <BoardStateContext.Provider value={{board, setBoard, setCpuNext}}>
      <GameDiv>
        <GameBoard/>
      </GameDiv>
    </BoardStateContext.Provider>

  )
}

export default Game;