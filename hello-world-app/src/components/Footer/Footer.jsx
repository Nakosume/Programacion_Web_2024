import React from "react"
export function Footer(props) {
    const { content, color } = props
    return (
        <footer style={{ color: color,
            width: '609px' }}>
            <h1 style={{
                margin:'0',
                paddingLeft: '55px',
                paddingTop: '16px',
                backgroundColor: '#2a2f36',
                height: '50px',
                borderBottomLeftRadius:'10px',
                borderBottomRightRadius:'10px'
            }}>{content}</h1>
        </footer>
    )
}