import { Button } from '../Button/Button'
import './Main.css'
import { useState } from 'react'

export function Main () {
  const startNum = 5
  const [numVal, setNumVal] = useState(startNum)
  const [showImg1, setImagHandle1] = useState(false)
  const [showImg2, setImagHandle2] = useState(false)
  const [showImg3, setImagHandle3] = useState(false)

  const addHandleClick = (event) => {
    setNumVal(numVal + 1)
  }
  const imgHandleClick1 = (event) => {
    setImagHandle1(!showImg1)
    console.log(showImg1)
  }

  const decreaseHandleClick = (event) => {
    setNumVal(numVal - 1)
  }

  const imgHandleClick2 = (event) => {
    setImagHandle2(!showImg2)
    console.log(showImg1)
  }

  const resetHandleClick = (event) => {
    setNumVal(startNum)
  }

  const imgHandleClick3 = (event) => {
    setImagHandle3(!showImg3)
    console.log(showImg1)
  }

  return (
    <main className={(showImg1 ? 'main-container-1' : showImg2 ? 'main-container-2' : showImg3 ? 'main-container-3' : 'main-container')}>
      <div className='counter-container'>
        {
                    numVal > 0
                      ? <Button content='-' clickAction={decreaseHandleClick} downAction={imgHandleClick2} upAction={imgHandleClick2} />
                      : <Button content='-' name='no-button' />
                }
        <h1 style={{
          margin: '0px'
        }}
        >{numVal}
        </h1>
        <Button content='+' clickAction={addHandleClick} downAction={imgHandleClick1} upAction={imgHandleClick1} />
      </div>

      <div>
        <Button content='Reset Counter' clickAction={resetHandleClick} downAction={imgHandleClick3} upAction={imgHandleClick3} />
      </div>
    </main>
  )
}
