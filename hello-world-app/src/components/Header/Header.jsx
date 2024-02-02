import React from "react"

export function Header(props) {
    const { content, color } = props
    return (
        <header style={{ color: color }}>
            <h1>{content}</h1>
        </header>
    )
}