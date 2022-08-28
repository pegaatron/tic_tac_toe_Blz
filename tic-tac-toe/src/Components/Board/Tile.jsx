import React, {useContext, useState, useEffect} from 'react';
import { Squares } from '../../Css/StyleComps.js'
import {UserCharContext} from '../Home.jsx'
import {BoardStateContext} from '../Game.jsx'

const Tile = ({val, row, col}) => {
  // onHover, show user's char projected on the square
  // only let users click on squares that are unclaimed
  // onClick, set tile val to curUser's char and display that val on the board
  // update turn to next players
  const {userChar} = useContext(UserCharContext);
  const {board, setBoard, setCpuNext} = useContext(BoardStateContext)
  const [curVal, setCurVal] = useState(val)
  const index = row*3 + col

  useEffect(() => {
    setCurVal(val)
  }, [val])

  const handleClick = () => {
    if (!curVal) {
      setCurVal(userChar)
      board[index] = userChar
      setBoard(board)
      setCpuNext(true)
    }
  }
  return (
    <Squares value={curVal} onClick={() => handleClick()}>{curVal}</Squares>
  )
}

export default Tile