import React, { useState } from "react";
import { useAuth } from '../Contexts/AuthContext';
import {
  LoginContainer,
  LoginDiv,
  LoginInput,
  LoginBtn,
  LoginText,
  LoginTextDiv,
  ErrMsg
} from '../Css/StyleComps';
import GoogleButton from 'react-google-button';
import axios from 'axios';

const Login = () => {
  const { setCurUser, signInWithGoogle } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsReg] = useState(false);
  const [isErr, setIsErr] = useState(false);

  const handleLogin = async (e) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}/user`,
      { params: {email, password}});
      if (res.data.length === 0) {
        setIsErr(true)
      } else {
        setCurUser({email,password})

      }
    } catch (err) {
      console.log('err while getting user info:', err)
    }
  }

  const switchRegLog = () => {
    setIsErr(false)
    setIsReg(!isRegistering)
  }

  const handleGuest = () => {
    console.log('clicking guest')
    setCurUser('guest')
  }

  const checkAcc = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_URL}/user`,
      { params: {email, password}});
      if (res.data.length === 0) {
        return false
      } else {
        setIsErr(true)
        return true
      }
    } catch (err) {
      console.log('err while getting user info:', err)
    }
  }

  const registerNewAcc = async () => {
    const isMade = await checkAcc();
    if (!isMade) {
      try {
        const res = await axios.post(`${process.env.REACT_APP_URL}/user`,
        {email, password});
      } catch (err) {
        console.log('err creating acc', err)
      }
    }
  }


  return (
    <LoginContainer>
      <h3 style={{margin: '25px'}}>Login to Play</h3>
      <LoginDiv>
        <LoginInput
        name='email'
        type='text'
        placeholder='Email'
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        ></LoginInput>
      </LoginDiv>
      <LoginDiv>
        <LoginInput
        name='pass'
        type='password'
        placeholder='Password'
        required
        value={password}
        onChange={e => setPassword(e.target.value)}></LoginInput>
      </LoginDiv>
      {isRegistering ?
      <LoginDiv>
        {isErr ? <ErrMsg>Account already registered</ErrMsg> : null}
        <LoginBtn name='register' type='submit' value='Register' onClick={registerNewAcc}></LoginBtn>
        <LoginTextDiv>
          <LoginText onClick={switchRegLog}>Login Here</LoginText>
          <LoginText onClick={handleGuest}>Play as Guest</LoginText>
        </LoginTextDiv>
      </LoginDiv>
      :
      <LoginDiv>
        {isErr ? <ErrMsg>Error logging in, try entering again</ErrMsg> : null}
        <LoginBtn name='login' type='submit' value='Login' onClick={handleLogin}></LoginBtn>
        <GoogleButton style={{width: '100%', marginBottom:'10px'}} onClick={signInWithGoogle}></GoogleButton>
        <LoginTextDiv>
          <LoginText onClick={switchRegLog}>Register Here</LoginText>
          <LoginText onClick={handleGuest}>Play as Guest</LoginText>
        </LoginTextDiv>
      </LoginDiv>
      }
    </LoginContainer>
  )
}
export default Login;