import React from "react";
import Home from './Components/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContextProvider from './Contexts/AuthContext.js';

function App() {

  return (
    <AuthContextProvider>
      <Home/>
    </AuthContextProvider>
  )
}

export default App;
