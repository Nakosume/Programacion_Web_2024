import React from "react"
import { useState } from "react"


export default function App() {
    const [showMenu, setShowMenu] = useState(false)

    const handleClick = (event) => {
        setShowMenu(!showMenu)
    }

    return (

        <div className="appContainer">
            <h1>bye bye</h1>
        </div>
    )
}