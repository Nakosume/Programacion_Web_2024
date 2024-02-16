import './Main.css'
import { useState } from 'react'

export function Main() {
    let [numVal, setNumVal] = useState(5)

    const addHandleClick = (event) => {
        setNumVal(numVal + 1)
    }

    const decreaseHandleClick = (event) => {
        setNumVal(numVal - 1)
    }

    return (
        <main style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {   
                numVal>0?
                <button onClick={decreaseHandleClick}>-</button>
                :null
            }
            <h1>{numVal}</h1>
            <button onClick={addHandleClick}>+</button>
        </main>
    )
}