import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase_config.js'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
 } from 'firebase/auth';

const AuthContext = createContext({
  currentUser: null,
  signInWithGoogle: () => Promise,
  signInWithFacebook: () => Promise,
  login: () => Promise,
  register: () => Promise,
  logout: () => Promise
})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children }) {
  const [curUser, setCurUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurUser(user ? user : null)
    })
    return () => {
      unsubscribe()
    }
  }, [])


  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return signOut(auth)
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
  }

  const value = {
    curUser,
    setCurUser,
    signInWithGoogle,
    login,
    register,
    logout,
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}