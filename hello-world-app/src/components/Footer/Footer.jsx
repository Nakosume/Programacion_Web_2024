import React from "react"
export function Footer(props) {
    const { content, color } = props
    return (
        <footer style={{ color: color }}>
            <h1>{content}</h1>
        </footer>
    )
}