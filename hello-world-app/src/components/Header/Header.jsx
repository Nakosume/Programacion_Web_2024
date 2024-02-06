import React from "react"
import background from './title_top.png'

export function Header(props) {
    const { content, color } = props
    return (
        <header style={{
            color: color,
            width: '100%',
            height:'auto',
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "fill",
            backgroundPosition: 'left',
            marginBottom: 'auto',
            fontSize:'0.9rem'
        }}>
            <h1 style={{
                margin: '0',
                height: 'auto',
                paddingLeft: '55px',
                paddingTop: '16px',
                paddingBottom: '16px'
            }}>{content}</h1>
        </header>
    )
}