import React from "react"
export function Body(props) {
    const { content, color } = props
    return (
        <main style={{
            color: color,
            width: '100%',
            fontSize: '1rem', //new
            backgroundColor: '#2e4362d0',
            border: '1px solid #132032',
        }}>
            <p style={{
                height: 'auto',
                margin: '0',
                paddingLeft: '5vh',
                paddingRight: '5vh',
                paddingTop: '2vh',
                paddingBottom: '2vh',
                textWrap: 'normal',
                textAlign: 'left'
            }}>{content}</p>
        </main>
    )
}