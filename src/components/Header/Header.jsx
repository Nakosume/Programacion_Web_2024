// import React from "react"
import './Header.css'
import { useState } from 'react'
import { LINKS } from '../../const/links.js'

export function Header (props) {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    setShowMenu(!showMenu)
  }

  const { color } = props

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

      <Menu
        options={LINKS}
        showMenu={showMenu}
      />

    </header>
  )
}

function Menu ({ options, showMenu }) {
  return (
    <div className={!showMenu ? 'opt-container hidden' : 'opt-container'}>
      {options.map((option) => (

        <MenuItem item={option} key={option.id}>{option}</MenuItem>

      ))}
    </div>
  )
}

function MenuItem ({ item }) {
  const { text } = item
  return (
    <div className='dropdown'>
      <button className='opts'>
        {text}
      </button>
      <div className='dropdown-content'>
        <a href='#'>Link 1</a>
        <a href='#'>Link 2</a>
        <a href='#'>Link 3</a>
      </div>

    </div>
  )
}
