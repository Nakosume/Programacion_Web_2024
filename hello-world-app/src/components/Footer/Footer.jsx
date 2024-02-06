import React from "react"
export function Footer(props) {
    const { content, color } = props
    return (
        <footer style={{
            color: color,
            width: '100%',
            backgroundColor: '#2a2f36',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            marginTop:'auto',
            fontSize:'0.9rem'
        }}>
            <h1 style={{
                paddingLeft: '55px',
                paddingTop: '16px',
                paddingBottom: '16px',
                height: 'auto',
                margin: '0'
            }}>{content}</h1>
        </footer>
    )
}