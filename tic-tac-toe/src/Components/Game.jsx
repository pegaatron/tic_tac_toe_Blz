import React, { useState, useContext, useEffect, createContext } from 'react';
import GameBoard from './Board/GameBoard.jsx';
import { EndDiv, TurnDiv, RestartBtn, CenterDiv } from '../Css/StyleComps.js'
import {UserCharContext} from './Home.jsx'
import ScoreModal from './ScoreModal.jsx'

export const BoardStateContext = createContext()
const Game = () => {

  const [board, setBoard] = useState(Array(9).fill('-'))
  const [cpuNext, setCpuNext] = useState(Math.floor(Math.random()*2))
  const [winner, setWinner] = useState(null)
  const {userChar, compChar, isEasy} = useContext(UserCharContext)
  const [isOver, setIsOver] = useState(false)
  const [openModal, setOpenModal] = useState(false)
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
    if (winner) {
      setIsOver(true)
      setOpenModal(true)
    } else {
      if (cpuNext) {
        setTimeout(computerMove, 1500)
        checkForWin()
      }
    }
  }, [cpuNext, winner])

  const computerMove = () => {
    if (isEasy) {
      easyCompMove()
    } else {
      hardCompMove()
    }
    setCpuNext(false);
  }

  const easyCompMove = () => {
    let availMoves = []
    for (let i = 0; i < board.length; i++) {
      if (board[i] === '-') {
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

  const checkForWin = () => {
    for (let i = 0; i < winPositions.length; i++) {
      const [a,b,c] = winPositions[i];
      if (board[a] === board[b] && board[b] === board[c] && board[a]!=='-') {
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
      if (board[i] ==='-') {
        return false
      }
    }
    return true
  }

  const restartGame = () => {
    setBoard(Array(9).fill('-'));
    setCpuNext(Math.floor(Math.random()*2))
    setWinner(null)
    setIsOver(false)
    setOpenModal(false)
  }

  return (
    <BoardStateContext.Provider value={{board, setBoard, cpuNext, setCpuNext, isOver, winner, setOpenModal}}>
      <GameBoard/>
      <TurnDiv>
        {openModal ?
        <CenterDiv>
          <ScoreModal restart={restartGame}/>
        </CenterDiv>
         :null}
        {isOver ?
        <EndDiv>
          <RestartBtn onClick={() => restartGame()}>Play Again?</RestartBtn>
          <h2>{winner === 'tie' ? 'Tie!'
          : winner === 'comp' ? 'You Lost!' : "You Won!"}</h2>
        </EndDiv>
        : <h2>{cpuNext ? 'Computer\'s Turn': 'Your Turn'}</h2>
        }
      </TurnDiv>
    </BoardStateContext.Provider>

  )
}

export default Game;