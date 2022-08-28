import React, {useState, createContext} from 'react'
import Game from './Game.jsx'
import { Header, AppContainer, GameDiv } from '../Css/StyleComps.js'

export const UserCharContext = createContext()
const Home = () => {
  const [isStarted, setIsStarted] = useState(true)
  const [userChar, setUserChar] = useState('x')
  const [compChar, setCompChar] = useState('o')
  const [isEasy, setEasy] = useState(false)

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
      <UserCharContext.Provider value ={{userChar, compChar, isEasy}}>
        <GameDiv>
          <Game/>
        </GameDiv>
      </UserCharContext.Provider>
      : null
      }

    </AppContainer>
  )
  // isStarted is false, just display board, and start button
}

export default Home;
