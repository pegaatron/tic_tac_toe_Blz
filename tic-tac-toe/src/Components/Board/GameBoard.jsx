import React, {useContext} from "react";
import Tile from './Tile.jsx'
import { BoardDiv } from '../../Css/StyleComps.js'
import {BoardStateContext} from '../Game.jsx'

const GameBoard = () => {
  const rowColSize = 3
  const {board} = useContext(BoardStateContext)

  return (
    <BoardDiv>
      {[...new Array(rowColSize)].map((boardRow, i) => {
        return (
          <div key={i}>
            {[...new Array(rowColSize)].map((boardCol,j) => {
              let index = i*3 + j;
              return (
                <Tile key={j} val={board[index]} col={j} row={i}/>
              )
            })}
          </div>
        )
      })}
    </BoardDiv>
  )
}
export default GameBoard;