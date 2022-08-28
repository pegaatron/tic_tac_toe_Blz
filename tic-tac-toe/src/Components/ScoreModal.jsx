import React, {useContext, useState, useEffect} from "react";
import {
  ModalContainer,
  ScoreHeader,
  ScoreContent,
  ScoreDiv,
  ExitBtn,
  ExitContainer,
  RestartBtn,
  ButtonDiv
}
 from '../Css/StyleComps.js'
import {BoardStateContext} from './Game.jsx'

const ScoreModal = ({restart}) => {
  const {setOpenModal, winner} = useContext(BoardStateContext)
  // useEffect(() => {
  //   // axios.get score,, display
  // })
  const closeModal = () => {
    console.log('clicked')
    setOpenModal(false)
  }
  return (
    <ModalContainer>
      <ExitContainer>
        <ExitBtn onClick={() => closeModal()}>X</ExitBtn>
      </ExitContainer>
      <ScoreHeader>SCORE:</ScoreHeader>
      <ScoreDiv>
        <ScoreContent>Wins:</ScoreContent>
        <ScoreContent>1</ScoreContent>
      </ScoreDiv>
      <ScoreDiv>
        <ScoreContent>Ties:</ScoreContent>
        <ScoreContent>1</ScoreContent>
      </ScoreDiv>
      <ScoreDiv>
        <ScoreContent>Losses:</ScoreContent>
        <ScoreContent>1</ScoreContent>
      </ScoreDiv>
      <ButtonDiv>
        <RestartBtn onClick={() => {restart()}}>Play Again?</RestartBtn>
      </ButtonDiv>

    </ModalContainer>
  )
}

export default ScoreModal;
// position: absolute;
// top: 50%;
// left: 50%;
// transform: translate(-50%, -50%);

// background: white;
// border: 1px solid #ccc;