import React, {useState, createContext} from 'react'
import GameBoard from './Board/GameBoard.jsx'
import { Header, AppContainer, GameDiv } from '../Css/StyleComps.js'


const Home = () => {
  const [isStarted, setIsStarted] = useState(true)


  return (
    <AppContainer>
      <Header>
        <div>
          <h1>Tic Tac Toe</h1>
        </div>
        <div>
          <h1>Hello, </h1>
        </div>
      </Header>
      {isStarted ?
      <GameDiv>
        <GameBoard/>
      </GameDiv>
      : null
      }

    </AppContainer>
  )
  // isStarted is false, just display board, and start button
}

export default Home;
