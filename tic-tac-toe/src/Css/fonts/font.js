import { createGlobalStyle } from 'styled-components';

import ArcadeFont from './Silkscreen-Regular.ttf';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Silkscreen', cursive;
  src: url(${ArcadeFont}) format('ttf'),
}
`;

export default GlobalStyle;