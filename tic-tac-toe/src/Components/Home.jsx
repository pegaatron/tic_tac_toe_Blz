import React, {useState, createContext, useEffect} from 'react';
import Game from './Game.jsx';
import Login from './Login.jsx';
import { Header,
   AppContainer,
   GameDiv,
   SettingsDiv,
   CenterDiv,
  GameContainer,
  RestartBtn,
} from '../Css/StyleComps.js';
import { useAuth } from '../Contexts/AuthContext.js';
import axios from 'axios';
import Settings from './Settings.jsx';
import {FiSettings} from 'react-icons/fi'

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

  const [wins, setWins] = useState(0)
  const [ties, setTies] = useState(0)
  const [losses, setL] = useState(0)

  useEffect(() => {
    if (curUser){
      setStatus(true)
      setShowSet(false);
      if (curUser !== 'guest') {
        getUserHistory();
      }
    }
  }, [curUser])

  const toggleSetting = () => {
    setShowSet(!showSetting)
  }


  const getUserHistory = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}/user`,
      { params: {email: curUser.email}});
      console.log(res.data)
      if (res.data.length === 0) {
        try {
          const res = await axios.post(`${process.env.REACT_APP_URL}/user`,
          {email: curUser.email, password: "gmail"});
        } catch (err) {
          console.log('err creating new acc')
        }
      } else {
        setWins(res.data[0].win);
        setTies(res.data[0].tie);
        setL(res.data[0].loss);
      }
    } catch (err) {
      console.log('err while getting user info:', err)
    }
  }

  const startGame = () => {
    setIsStarted(true)
    setShowSet(false)
  }

  return (
    <AppContainer>
      <Header>
        <div>
          <h1>Tic Tac Toe</h1>
        </div>
        <SettingsContext.Provider value={{setUserChar, setCompChar, userChar, setEasy, isEasy, setStatus, setShowSet}}>
          { isSignedIn && !isStarted?
          <SettingsDiv>
            {showSetting ?
            <CenterDiv>
              <Settings/>
            </CenterDiv>
            :<h5 onClick={toggleSetting}>
              <FiSettings/> Settings
              </h5>}
          </SettingsDiv>
          : null
          }
        </SettingsContext.Provider>
      </Header>
      {isSignedIn ?
      isStarted ?
        <UserCharContext.Provider value ={{userChar, compChar, isEasy, wins, losses, ties, setWins, setTies, setL, setIsStarted}}>
          <GameDiv>
            <Game/>
          </GameDiv>
        </UserCharContext.Provider>
      :
      <GameContainer>
        <RestartBtn
        style={{
          width: '20%',
          height:'100%',
          }}
        onClick={startGame}
        >Start Game?</RestartBtn>
      </GameContainer>

      : <Login/>}
    </AppContainer>
  )

}

export default Home;
