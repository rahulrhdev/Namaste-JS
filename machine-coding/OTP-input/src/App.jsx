import React, { useEffect, useRef, useState } from 'react'

const OTP_DIGITS_COUNT = 5

const App = () => {
  // Ask the interviewer no. of digits in the otp dont assume
  // Make the components dynamic the digits make it scalable and modular

  const [inputArr, setInputArr] = useState(new Array(OTP_DIGITS_COUNT).fill(''))
  const otpRef = useRef([])

  useEffect(() => {
    otpRef?.current[0]?.focus()  
  }, [])

  const handleOnChange = (e, index) => {
    const value = e.target.value.trim() // handles empty space
    if (isNaN(value)) return // validation check on letters
    const newArr = [...inputArr]
    newArr[index] = value.slice(-1) // validation on multiple entries on single input
    setInputArr(newArr)
    value && otpRef?.current[index + 1]?.focus() 
  }

  const handleKeyDown = (e, index) => {
    if (!e.target.value && e.key === 'Backspace') { // if my input box is empty then only move to previous one
      otpRef?.current[index - 1]?.focus() 
    }
  }

  return (
    <div className='App'>
      <h1>Validate OTP</h1>
      {inputArr.map((node, index) => {
        return (
          <>
            <input ref={(node) => {otpRef.current[index] = node}} className='otp-input' key={index} type="text" value={inputArr[index]} onChange={(e) => handleOnChange(e, index)} onKeyDown={(e) => handleKeyDown(e, index)} />
          </>
        )
      })}
    </div>
  )
}

export default App