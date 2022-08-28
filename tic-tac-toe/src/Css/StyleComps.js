import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5%;
  padding-top: 2%
`;

export const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
`;

export const BoardDiv = styled.div`
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
  margin: auto;
  width: 50%;
`;

export const RowDiv = styled.div`

`;

export const RestartBtn = styled.button`
  height: 50%;
  padding: 20px;
  background-color: yellow;
  border: 1px solid #ccc;
`;

export const EndDiv = styled.div`
  display: block;
`;
export const TurnDiv = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 15px;
  margin-right: 75px;
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
`

export const ModalContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 35vw;
  height: 50vh;

  background: #fff;
  border: 1px solid #000;
  padding: 20px;
  min-height: 200px;

  transition: 1.1s ease-out;
  box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
  filter: blur(0);
  transform: scale(1);
  opacity: 1;
  visibility: visible;
`
export const ScoreHeader = styled.h1`

  margin-bottom: 5%;
  text-align: center;
  font-weight: bolder;
`;

export const ScoreDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

`
export const ScoreContent = styled.h3`
  text-align: center;
  font-weight: bold;
`

export const ExitContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 16px;
`
export const ExitBtn = styled.button`
  background-color: transparent;
  border: none;
  &:hover{
    cursor: pointer;
    opacity: 80%;
  }
`

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

`