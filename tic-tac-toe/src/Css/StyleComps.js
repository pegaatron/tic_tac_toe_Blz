import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5%;
  padding-top: 2%
`;

export const SettingsDiv = styled.div`
  margin: 10px;
  &:hover{
    cursor:pointer
  }
`;

export const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const BoardDiv = styled.div`
  align-items: center;
  width: 100%;
  height: 70%
`;

export const BoardContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: blue
`;

export const GameDiv = styled.div`
display: block;
margin-left: auto;
margin-right: auto;
width: 40%;
`;


export const RestartBtn = styled.button`
  height: 80%;
  width: 60%;
  background-color: yellow;
  text-align: center;
  margin-right: 10px;
`;

export const EndDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const TurnDiv = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 15px;
  margin-right: 10%;
  font-size: small;
  font-family: "Courier New", monospace;
`;

export const Tiles = styled.button`
  padding: 70px;
  width: 10%;
  max-height: 10%;
  background-color: white;
  cursor: pointer;
  font-size: 1.5em;
  fontWeight: 600;
  color: ${(props) => {
    return props.value === '-' ? 'white' : 'black'
  }}
`;

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 35vw;
  height: 50vh;
  padding: 20px;
  min-height: 200px;
  background: #fff;
  border: 1px solid #000;
  transition: 1.1s ease-out;
  box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
  filter: blur(0);
  transform: scale(1);
  opacity: 1;
  visibility: visible;
`;
export const ScoreHeader = styled.h1`

  margin-bottom: 5%;
  text-align: center;
  font-weight: bolder;
`;

export const ScoreDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

`;
export const ScoreContent = styled.h3`
  text-align: center;
  font-weight: bold;
`;

export const ExitContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 16px;
`;
export const ExitBtn = styled.button`
  background-color: transparent;
  border: none;
  &:hover{
    cursor: pointer;
    opacity: 80%;
  }
`;
export const CenterDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 20%;
  width: 100%;
  align-items: end;

`;
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F7F7F7;
  margin: 0 auto;
  border-radius: 2px;
  box-shadow: 0px 2px 2px;
  width: 30%;
  height: 80%;
  overflow: hidden;
`;

export const ErrMsg = styled.h6`
  color: #D8000C;
  background-color: #FFBABA;
  border: 1px solid;
  margin-bottom: 20px;
  padding: 15px;
`;


export const LoginDiv = styled.div`
  display: block;
  align-items:center;
  width: 60%;
  height: 100%;
`;

export const LoginInput = styled.input`
  height: 44px;
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;
  -webkit-appearance: none;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-top: 1px solid #c0c0c0;
  padding: 0 8px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
`;

export const LoginBtn = styled.input`
  border: 0px;
  color: #fff;
  width: 100%;
  text-shadow: 0 1px rgba(0,0,0,0.1);
  background-color: #4d90fe;
  padding: 12px 0px;
  font-size: 16px;
  margin-bottom: 10px;
  margin-top: 10px;
  &:hover {
    border: 0px;
    text-shadow: 0 1px rgba(0,0,0,0.3);
    background-color: #357ae8;
  }
`;

export const LoginTextDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
`;
export const LoginText = styled.button`
  border: none;
  background-color: transparent;
  font-size: 12px;
  color: gray;
  margin: 15px;
  &:hover {
    border: 0px;
    text-shadow: 0 1px rgba(0,0,0,0.3);
    color: dark-gray
  }
`;

export const RadioBtn = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
`


export const SettingContent = styled.h4`
  margin-right: 10px;
`
export const GameContainer= styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
`

