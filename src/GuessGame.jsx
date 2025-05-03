
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { guessedNumber } from './guessSlice'

function GuessGame() {
  const dispatch = useDispatch()
  const [guessNum, setGuessNum] = useState('')
  const [msg, setMsg] = useState('')
  const [realNum, setRealNum] = useState(Math.floor(Math.random() * 100) + 1)

  const { num } = useSelector((state) => state.guessedNum)

  useEffect(() => {
    dispatch(guessedNumber(realNum))
  }, [realNum]) 

  const inputhandle = () => {
    const guessed = Number(guessNum)
    if (guessed === num) {
      setMsg('Success')
    } else if (guessed < num) {
      setMsg('Too low')
    } else {
      setMsg('Too high')
    }
  }

  const resetGame = () => {
    const newNum = Math.floor(Math.random() * 100) + 1
    setRealNum(newNum)
  }

  return (
    <div>
      <input value={guessNum} onChange={(e) => setGuessNum(e.target.value)} type="number"/>
      <button onClick={inputhandle}>Check guess</button>
      <button onClick={resetGame}>Reset number</button>
      <h1>Message == {msg}</h1>
    </div>
  )
}

export default GuessGame
