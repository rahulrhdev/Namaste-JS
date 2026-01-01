import React, { useState } from 'react'

const ChipsInput = () => {
  
  const [inputText, setInputText] = useState('')

  const handleKeyDown = () => {
    if (e.key === 'Enter') {
      
    }
  }

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '40px 0'
    }}>
        <h2>Chips input</h2>
        <input type="text" placeholder='type a chip and press tag' style={{ padding: 0, width: '200px' }} value={inputText} 
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
        />
        {inputText}
    </div>
  )
}

export default ChipsInput