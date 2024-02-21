// import React from "react"
import './Header.css'
import { useState } from 'react'

export function Header (props) {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    setShowMenu(!showMenu)
  }

  const { color } = props
  const options = ['News', 'Overview', 'Community', 'Support']

  return (
    <header
      style={{
        color
        /* display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flexWrap: 'wrap', */
      }}
    >
      <img
        className='hambur-ico'
        onClick={handleClick}
        src='https://static-00.iconduck.com/assets.00/burger-menu-5-icon-2048x1536-qq497e5y.png'
      />
      <img
        className='icon'
        src='https://pso2.com/players/update/ver2/img/logo_ngs_ver2.png'
      />

      <div className={!showMenu ? 'opt-container hidden' : 'opt-container'}>
        {options.map((option) => (
          <div className='dropdown' key={option}>
            <button className='opts'>{option}</button>
            <div className='dropdown-content'>
              <a href='#'>Link 1</a>
              <a href='#'>Link 2</a>
              <a href='#'>Link 3</a>
            </div>
          </div>
        ))}
      </div>
    </header>
  )
}
