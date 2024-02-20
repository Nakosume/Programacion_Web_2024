import './Main.css'
import { useState } from 'react'

export function Main () {
  const startNum = 5
  const [numVal, setNumVal] = useState(startNum)
  const [showImg1, setImagHandle1] = useState(false)
  const [showImg2, setImagHandle2] = useState(false)

  const addHandleClick = (event) => {
    setNumVal(numVal + 1)
  }
  const imgHandleClick1 = (event) => {
    setImagHandle1(!showImg1)
    console.log(showImg1)
  }

  const imgHandleClick2 = (event) => {
    setImagHandle2(!showImg2)
    console.log(showImg1)
  }

  const decreaseHandleClick = (event) => {
    setNumVal(numVal - 1)
  }

  const resetHandleClick = (event) => {
    setNumVal(startNum)
  }

  return (
    <main className={(showImg1 ? 'main-container-2' : showImg2 ? 'main-container-3' : 'main-container')}>
      <div className='counter-container'>
        {
                    numVal > 0
                      ? <button onClick={decreaseHandleClick} onMouseDown={imgHandleClick2} onMouseUp={imgHandleClick2}>-</button>
                      : <button style={{ backgroundColor: 'red' }}>-</button>
                }
        <h1 style={{
          margin: '0px'
        }}
        >{numVal}
        </h1>
        <button onClick={addHandleClick} onMouseDown={imgHandleClick1} onMouseUp={imgHandleClick1}>+</button>
      </div>

      <div>
        <button
          onClick={resetHandleClick} style={{
            backgroundColor: 'green'
          }}
        >Reset Counter
        </button>
      </div>
    </main>
  )
}
