import React, {useContext, useState, useEffect} from 'react';
import { Tiles } from '../../Css/StyleComps.js'
import {UserCharContext} from '../Home.jsx'
import {BoardStateContext} from '../Game.jsx'

const Tile = ({val, row, col}) => {
  // onHover, show user's char projected on the square
  const {userChar} = useContext(UserCharContext);
  const {board, setBoard, cpuNext, setCpuNext, isOver} = useContext(BoardStateContext)
  const [curVal, setCurVal] = useState(val)
  const index = row*3 + col

  useEffect(() => {
    setCurVal(val)
  }, [val])

  const handleClick = () => {
    if (curVal === '-' && !cpuNext && !isOver) {
      setCurVal(userChar)
      board[index] = userChar
      setBoard(board)
      setCpuNext(true)
    }
  }
  return (
  <Tiles value={curVal} onClick={() => handleClick()}>{curVal}</Tiles>
  )
}

export default Tile