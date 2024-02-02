import React from "react"
import background from './title_top.png'

export function Header(props) {
    const { content, color } = props
    return (
        <header style={{
            color: color,
            width: '609px'
        }}>
            <h1 style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "auto",
                margin: '0',
                height: '50px',
                paddingLeft: '55px',
                paddingTop: '16px'
            }}>{content}</h1>
        </header>
    )
}