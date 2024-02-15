//import React from "react"
import './Header.css'
import { useState } from 'react'

export function Header(props) {
    const [showMenu, setShowMenu] = useState(false)

    const handleClick = (event) => {
        setShowMenu(!showMenu)
    }

    const { content, color } = props
    const options = ["News", "Overview", "Community", "Support"]

    return (
        <header style={{
            color: color,
            /*display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flexWrap: 'wrap',*/
        }}>
            <img className='icon' onClick={handleClick} src={'https://pso2.com/players/update/ver2/img/logo_ngs_ver2.png'} style={{
                height: '9vh',
                width: 'auto'
            }}></img>

            {
                showMenu ?
                <div className="opt-container" style={{

                }}>
                    {
                        options.map((option) =>
                            <div className='dropdown'>
                                <button className="opts" key={{ option }}>{option}</button>
                                <div class="dropdown-content">
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>
                            </div>
                        )
                    }
                </div> :
                null
            }


        </header>
    )
}