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
  display: flex;
  justify-content: center
`;

export const RowDiv = styled.div`

`;

export const Squares = styled.button`
  padding: 70px;
  width: 10%;
  max-height: 10%;
  background-color: white;
  cursor: pointer
`