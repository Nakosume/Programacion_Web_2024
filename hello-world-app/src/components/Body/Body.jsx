import React from "react"
export function Body(props) {
    const { content, color } = props
    return (
        <main style={{ color: color }}>
            <h1>{content}</h1>
        </main>
    )
}