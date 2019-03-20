import React, { useState } from 'react';
import './Toggle.scss'


const Toggle = () => {
  const changeTheme = val => {
    
  }
  return (
    <div className="theme-navigation">
      <p onClick={() => changeTheme('dark')}>Dark</p>
      <span>|</span>
      <p onClick={() => changeTheme('light')}>Light</p>
    </div>
  )
}

export default Toggle