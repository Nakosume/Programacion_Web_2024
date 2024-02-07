import React from "react"
import './Header.css'

export function Header(props) {
    const { content, color } = props
    const options =["News","Overview","Community","Support"]

    return (
        <header style={{
            color: color,
        }}>
            <img src={'https://pso2.com/players/update/ver2/img/logo_ngs_ver2.png'} style={{
                height:'9vh',
                width: 'auto'
            }}></img>

            <div className="optContainer" style={{
                
            }}>
            {
                options.map((option)=>
                <h3 className="opts" key={{option}} style={{
                    
                }}>{option}</h3>
                )
            }
            </div>

            
        </header>
    )
}