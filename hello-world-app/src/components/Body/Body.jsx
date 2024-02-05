import React from "react"
export function Body(props) {
    const { content, color } = props
    return (
        <main style={{
            color: color,
            width: '100%',
            fontSize: '20px',
            backgroundColor: '#2e4362d0',
            border: '1px solid #132032',
        }}>
            <p style={{
                height: 'auto',
                margin: '0',
                paddingLeft: '50px',
                paddingRight: '50px',
                paddingTop: '6px',
                paddingBottom: '6px',
                textWrap: 'normal',
                textAlign: 'justify'
            }}>{content}</p>
        </main>
    )
}