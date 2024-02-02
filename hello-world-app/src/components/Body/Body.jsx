import React from "react"
export function Body(props) {
    const { content, color } = props
    return (
        <main style={{ color: color,
            width: '609px',}}>
            <p style={{
                fontSize: '20px',
                backgroundColor: '#2e4362d0',
                height: 'auto',
                margin: '0',
                paddingLeft: '50px',
                paddingRight: '50px',
                paddingTop: '6px',
                paddingBottom: '6px',
                border: '1px solid #132032',
                textWrap:'normal'
            }}>{content}</p>
        </main>
    )
}