import React, {useState, createContext, useEffect} from 'react';
import Game from './Game.jsx';
import Login from './Login.jsx';
import { Header, AppContainer, GameDiv, SettingsDiv, CenterDiv } from '../Css/StyleComps.js';
import { useAuth } from '../Contexts/AuthContext.js';
import axios from 'axios';
import Settings from './Settings.jsx'

export const UserCharContext = createContext()
export const SettingsContext = createContext()

const Home = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [userChar, setUserChar] = useState('x');
  const [compChar, setCompChar] = useState('o');
  const [isEasy, setEasy] = useState(true);
  const [isSignedIn, setStatus] = useState(false);
  const {curUser} = useAuth();
  const [showSetting, setShowSet] = useState(false);

  useEffect(() => {
    if (curUser){
      setStatus(true)
    }
    console.log('isEasy:',isEasy)
  }, [curUser, isEasy])

  const toggleSetting = () => {
    setShowSet(!showSetting)
  }

  const getUserHistory = async () => {

  }

  return (
    <AppContainer>
      <Header>
        <div>
          <h1>Tic Tac Toe</h1>
        </div>
        <SettingsContext.Provider value={{setUserChar, setCompChar, userChar, setEasy, isEasy, setStatus, setShowSet}}>
          { isSignedIn ?
          <SettingsDiv>
            {showSetting ?
            <CenterDiv>
              <Settings/>
            </CenterDiv>
            :<h5 onClick={toggleSetting}>Settings</h5>}
          </SettingsDiv>
          : null
          }
        </SettingsContext.Provider>
      </Header>
      {isSignedIn ?
      isStarted ?
        <UserCharContext.Provider value ={{userChar, compChar, isEasy}}>
          <GameDiv>
            <Game/>
          </GameDiv>
        </UserCharContext.Provider>
      : null
      : <Login/>}
    </AppContainer>
  )

}

export default Home;
