import React from "react";
import Tile from './Tile.jsx'
import { BoardDiv, RowDiv } from '../../Css/StyleComps.js'
// import chunk from 'lodash/chunk';

const GameBoard = ({tiles, onClick}) => {
  const rowColSize = 3
  return (
    <BoardDiv>
      {[...new Array(rowColSize)].map((boardRow, i) => {
        return (
          <RowDiv key={i}>
            {[...new Array(rowColSize)].map((boardCol,j) => {
              return (
                <Tile key={j}/>
              )
            })}
          </RowDiv>

        )
      })}
    </BoardDiv>
  )
}
export default GameBoard;