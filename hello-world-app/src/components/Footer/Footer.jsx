import React from "react"
export function Footer(props) {
    const { content, color } = props
    return (
        <footer style={{
            color: color,
            width: '100%',
            background: 'linear-gradient(90deg, rgba(48,46,73,1) 18%, rgba(50,50,130,1) 60%, rgba(96,123,184,1) 100%)',
            /* borderBottomLeftRadius: '2vh',
            borderBottomRightRadius: '2vh', */
            marginTop:'0',
            fontSize:'0.9rem'
        }}>
            <h1 style={{
                paddingLeft: '5vh',
                paddingRight: '5vh',
                paddingTop: '1.5vh',
                paddingBottom: '1.5vh',
                height: 'auto',
                margin: '0'
            }}>{content}</h1>
        </footer>
    )
}