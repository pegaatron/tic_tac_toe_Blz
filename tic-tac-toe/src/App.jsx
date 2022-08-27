import React from "react";
import { createContext, useEffect, useState } from "react";
import Login from './Components/Login.jsx';
import Home from './Components/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
// import styled, {createGlobalStyle} from 'styled-components';
// import { useAuth } from './Contexts/AuthContext.js'

function App() {
  // if user is null, display login screen
  // else display Home
  const [curUser, setCurUser] = useState('null');

  return (
    curUser ?
    <Home/>
    : <Login/>
  )
}

export default App;
