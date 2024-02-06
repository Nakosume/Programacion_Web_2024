import React from "react"
import background from './title_top.png'

export function Header(props) {
    const { content, color } = props
    return (
        <header style={{
            color: color,
            width: '100%',
            height:'auto',
            /*backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "fill",
            backgroundPosition: 'left',*/
            background: 'linear-gradient(90deg, rgba(48,46,73,1) 18%, rgba(50,50,130,1) 60%, rgba(96,123,184,1) 100%)',
            marginBottom: '2vh',
            fontSize:'0.9rem',
            /* borderTopLeftRadius: '2vh',
            borderTopRightRadius: '2vh', */
        }}>
            <h1 style={{
                margin: '0',
                height: 'auto',
                paddingLeft: '5vh',
                paddingRight: '5vh',
                paddingTop: '1.5vh',
                paddingBottom: '1.5vh'
            }}>{content}</h1>
        </header>
    )
}