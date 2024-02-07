import React from "react"
import './Body.css'

export function Body(props) {
    const { content, color } = props
    return (
        <main className="textContainer" style={{
            color: color,
            backgroundColor: '#2e4362d0',
            border: '1px solid #132032',
        }}>
            <p className="text" style={{
                
            }}>{content}</p>
        </main>
    )
}