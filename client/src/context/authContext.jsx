import React from 'react'
import { createContext, useContext, useState, useEffect } from "react";
import { postRegister, logout, login, getUserInfo } from "../api/auth";

export const authContext = createContext()


export const useAuth = () => {
  const context = useContext(authContext)
  return context
}


export function AuthContext({children}) {

  const [session, setSession] = useState(false)

  useEffect(() => {
    setSession(getData)
  }, [])

  const getData = () => {
    return localStorage.getItem('isAuthenticated')
  }



  const signup = async (name, lastname, email, password, confirmPassword, rol) => {
    const userr = [{name: name, lastname: lastname, email:email, password: password, confirmPassword: confirmPassword, rol: rol}]
    return await postRegister(userr)
  }

  const singnins = async (email, password) => {
    const userInfo = [{email: email, password: password}]
    const res = await login(userInfo)
    localStorage.setItem('user', JSON.stringify(res.data))
    localStorage.setItem('isAuthenticated', true)
    console.log(res.data.rol)
  }

  const logouts = async () => {
    localStorage.removeItem('user')
    localStorage.removeItem('isAuthenticated')
    return await logout()
  }


  return (
    <authContext.Provider value={{ 
      signup,  
      logouts,  //* <- functions
      singnins,
      session //* <- Session Info
    }}>
        {children}
    </authContext.Provider>
  )
}
