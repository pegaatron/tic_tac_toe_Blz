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
 from '../Css/StyleComps.js';
import {BoardStateContext} from './Game.jsx';
import {UserCharContext} from './Home.jsx';
import axios from 'axios';
import {useAuth} from '../Contexts/AuthContext';

const ScoreModal = ({restart}) => {
  const {setOpenModal, winner} = useContext(BoardStateContext);
  const {wins, ties, losses, setTies, setWins, setL, setIsStarted} = useContext(UserCharContext);
  const {curUser} = useAuth();

  useEffect(() => {
    console.log(wins)
    console.log(ties)
    console.log(losses)
    if (winner === 'tie') {
      setTies(ties+1);
    } else if (winner === 'player') {
      setWins(wins+1);
    } else {
      setL(losses+1)
    }
  }, [winner])

  const closeModal = () => {
    setOpenModal(false)
  }

  const goBack = () => {
    setIsStarted(false);
  }

  const updateScores = async () => {
    if (curUser !== 'guest') {
      try {
        const res = await axios.put(`${process.env.REACT_APP_URL}/score/wins`,
        {email: curUser.email, win: wins});
      } catch (err) {
        console.log('err in updating wins')
      }
      try {
        const res = await axios.put(`${process.env.REACT_APP_URL}/score/losses`,
        {email: curUser.email, loss: losses});
      } catch (err) {
        console.log('err updating l\'s')
      }
      try {
        const res = await axios.put(`${process.env.REACT_APP_URL}/score/ties`,
        {email: curUser.email, tie: ties});
      } catch (err) {
        console.log('err updating ties')
      }
    }
    goBack();
  }

  return (
    <ModalContainer>
      <ExitContainer>
        <ExitBtn onClick={() => closeModal()}>X</ExitBtn>
      </ExitContainer>
      <ScoreHeader>SCORE:</ScoreHeader>
      <ScoreDiv>
        <ScoreContent>Wins:</ScoreContent>
        <ScoreContent>{wins}</ScoreContent>
      </ScoreDiv>
      <ScoreDiv>
        <ScoreContent>Ties:</ScoreContent>
        <ScoreContent>{ties}</ScoreContent>
      </ScoreDiv>
      <ScoreDiv>
        <ScoreContent>Losses:</ScoreContent>
        <ScoreContent>{losses}</ScoreContent>
      </ScoreDiv>
      <ButtonDiv>
        <RestartBtn onClick={() => {restart()}}>Play Again?</RestartBtn>
      </ButtonDiv>
      <ButtonDiv>
        <RestartBtn onClick={updateScores}>Back To Home</RestartBtn>
      </ButtonDiv>
    </ModalContainer>
  )
}

export default ScoreModal;
