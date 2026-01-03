import React from 'react'
import Accordian from './Accordian'

const App = () => {
  const items = [
    {title: 'Javascript basics', content: 'Learn es6, loops and statements'},
    {title: 'React course', content: 'Learn about components, props and redux'},
    {title: 'Node.js basics', content: 'Learn about server-side development on Node.js'},
    {title: 'Full stack development', content: 'React.js and Node.js development for full stack'}
  ]
  return (
    <Accordian items={items} />
  )
}

export default App