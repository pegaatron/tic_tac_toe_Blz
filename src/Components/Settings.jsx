import React, {useState, useContext} from "react";
import {useAuth} from '../Contexts/AuthContext'
import {SettingsContext} from './Home.jsx';
import {
  ModalContainer,
  ScoreHeader,
  SettingContent,
  ScoreDiv,
  ExitBtn,
  ExitContainer,
  RestartBtn,
  ButtonDiv
}
 from '../Css/StyleComps.js';
 import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
 import ToggleButton from 'react-bootstrap/ToggleButton';

const Settings = ({status}) => {
  const { logout } = useAuth();
  const {setUserChar, setCompChar, userChar, setEasy, isEasy, setStatus, setShowSet} = useContext(SettingsContext);
  const [charRadio, setCharRadio] = useState(userChar === 'x' ? '1' : '2');
  const [diffLevel, setDiff] = useState(isEasy ? '1' : '2');

  const charRadios = [
    {name: 'X', value: '1'},
    {name: 'O', value: '2'}
  ]

  const diffRadios = [
    {name: 'easy', value: '1'},
    {name: 'hard', value: '2'}
  ]

  const handleLogOut = async () => {
    await logout()
    .then(() => {
      localStorage.clear();
      setStatus(false)
    })
    .catch((err) => console.log('err logging out:',err))
  }

  const handleCharChange = (e) => {
    if (e.target.value === '1') {
      setCharRadio('1')
      setUserChar('x')
      setCompChar('o')
    } else {
      setCharRadio('2')
      setUserChar('o')
      setCompChar('x')
    }
  }

  const handleDiffChange = (e) => {
    if (e.target.value === '1') {
      setDiff('1')
      setEasy(true)
    } else {
      setDiff('2')
      setEasy(false)
    }
  }

  const closeModal = () => {
    setShowSet(false)
  }

  return (
  <ModalContainer>
    <ExitContainer>
      <ExitBtn onClick={closeModal}>X</ExitBtn>
    </ExitContainer>
    <ScoreHeader>SETTINGS:</ScoreHeader>
    <ScoreDiv>
      <SettingContent>Change Marker:</SettingContent>
      <ToggleButtonGroup name="chars" className="mb-2">
        {charRadios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`char-${idx}`}
            type="radio"
            variant="secondary"
            name="chars"
            value={radio.value}
            checked={charRadio === radio.value}
            onChange={handleCharChange}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </ScoreDiv>
    <ScoreDiv>
      <SettingContent>Change Difficulty:</SettingContent>
      <ToggleButtonGroup name="diff" className="mb-2">
        {diffRadios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`diff-${idx}`}
            type="radio"
            variant="secondary"
            name="diff"
            value={radio.value}
            checked={diffLevel === radio.value}
            onChange={handleDiffChange}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </ScoreDiv>
    <ButtonDiv style={{marginTop:'10px'}}>
      <RestartBtn
      onClick={closeModal}
      >Make Changes</RestartBtn>
    </ButtonDiv>
    <ButtonDiv>
      <RestartBtn onClick={handleLogOut}>Log Out</RestartBtn>
    </ButtonDiv>
  </ModalContainer>
  )
}

export default Settings;
