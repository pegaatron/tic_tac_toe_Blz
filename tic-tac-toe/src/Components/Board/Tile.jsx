import React from 'react';
import { Squares } from '../../Css/StyleComps.js'

const Tile = ({ val, onClick }) => {
  const style = val ? `squares ${val}` : `squares`;
  return (
    <Squares>{val}</Squares>
  )
}

export default Tile