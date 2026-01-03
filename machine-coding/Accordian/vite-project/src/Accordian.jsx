import React, { useState } from 'react'

const Accordian = ({ items }) => {
  const [autoIndex, setAutoIndex] = useState(null)
  const handleToggle = (index) => {
    if (autoIndex === index) setAutoIndex(null)
    else setAutoIndex(index)
  }
  return (
    <div>
        {items.map((item, index) => {
            return (
                <div style={{ border: '2px solid black', margin: '1rem' }} key={index}>
                    <div className='card' style={{ border: '1px solid black', margin: '1rem', padding: '10px', display: 'flex', alignItems: 'center'}} onClick={() => handleToggle(index)}>
                        {item?.title}
                        <svg xmlns="http://www.w3.org/2000/svg" width='16' height='16' viewBox="0 0 500 512" style={{ marginLeft: 'auto' }}><path d="M169.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 306.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                    </div>
                    { index === autoIndex &&
                      <div style={{ margin: '1rem', padding: '10px', backgroundColor: 'beige' }}>
                        {item.content}
                    </div>}
                </div>
            )
        })}
    </div>
  )
}

export default Accordian