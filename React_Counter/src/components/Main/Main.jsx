import './Main.css'
import { useState } from 'react'

export function Main() {
    const startNum = 5
    let [numVal, setNumVal] = useState(startNum)

    const addHandleClick = (event) => {
        setNumVal(numVal + 1)
    }

    const decreaseHandleClick = (event) => {
        setNumVal(numVal - 1)
    }

    const resetHandleClick = (event) => {
        setNumVal(startNum)
    }

    return (
        <main className='main-container'>
            <div className='counter-container'>
                {
                    numVal > 0 ?
                        <button onClick={decreaseHandleClick}>-</button>
                        : <button style={{ backgroundColor: 'red' }}>-</button>
                }
                <h1 style={{
                    margin: '0px'
                }}>{numVal}</h1>
                <button onClick={addHandleClick}>+</button>
            </div>

            <div>
                <button onClick={resetHandleClick} style={{
                    backgroundColor: 'green'
                }}>Reset Counter</button>
            </div>
        </main>
    )
}