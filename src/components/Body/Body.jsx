//import React from "react"
import './Body.css'

export function Body(props) {
    const { content, color,bgColor,border } = props
    return (
        <main className="text-container" style={{
            color: color,
            backgroundColor: bgColor,
            border: border,
        }}>
            <p className="text" style={{
                
            }}>{content}</p>
        </main>
    )
}