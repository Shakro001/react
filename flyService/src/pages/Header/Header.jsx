

import React, { useEffect, useState } from 'react'

import useAuthStore from '../../store/authSlice';
import useStore from '../../store/flightSlice';
import { NavLink } from 'react-router-dom';



function Header() {
  const auth = useAuthStore((state) => state.auth)
  const setAuth = useAuthStore((state) => state.setAuth)


  const setFilter = useStore(state => state.setFilter)


  useEffect(() => {
    const user = localStorage.getItem('auth-user')
    setAuth(!!user)
  }, [setAuth])


  const handleLogOut = () => {
    localStorage.removeItem('auth-user')
    setAuth(false)
  }



  return (
    <header className="header">
      <div className="header__container">
        {auth ? (
          <button onClick={handleLogOut}>Log out</button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
        {auth ? <NavLink to={`/flights`} onClick={() => setFilter(null)}>flights</NavLink> : ''}
      </div>


    </header>
  )
}

export default Header
