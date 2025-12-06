import React, { useState, useEffect } from 'react'
import RegisterForm from '../Auth/Registration.jsx'
import LoginForm from './login.jsx'
const Authmodal = ({ open, handleClose }) => {
const [isLogin,setLogin]=useState(true)

//Mount/Demount
 useEffect(() => {
        return () => {
        }
    }, [])

    // Debug: Track Islogin StateChange
    useEffect(() => {
    }, [isLogin])

     // Debug: Track Islogin StateChange
    useEffect(() => {
    }, [open])

    const handleSwitchToRegister=()=>{
      setLogin(false)
    }
    
    const handleSwitchLogin=()=>{
      setLogin(true)
    }

  return isLogin ? (
    <LoginForm
    open={open}
    handleClose={handleClose}
    onSwitchToRegister={handleSwitchToRegister}
     />
  ):(
    <RegisterForm
      open={open}
      handleClose={handleClose}
      onSwitchToLogin={handleSwitchLogin}
    />
  )
}

export default Authmodal