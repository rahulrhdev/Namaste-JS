import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [input, setInput] = useState((''))
  const [results, setResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [cache, setCache] = useState({})

  const fetchData = async function () {
    if (cache[input]) {
      console.log('cached', input)
      setResults(cache[input])
      return
    }
    const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`)
    console.log('API Call', input)
    const json = await data.json()
    setResults(json?.recipes)
    setCache(prev => ({...prev, [input]: json?.recipes}))
  }
  useEffect(() => {
    // Debouncing when user types on autocomplete input
    const timer  = setTimeout(fetchData, 350)
    // Dont forget to write return while doing debouncing
    return () => {
      clearTimeout(timer)
    }
  }, [input])

  return (
    <div>
      <h1>Autocomplete Search</h1>
      <div>
        <input type="text" name="search-input" id="search-input" value={input} onChange={(e) => setInput(e.target.value)} onFocus={() => setShowResults(true)} onBlur={() => setShowResults(false)}/>
      </div>
      {showResults && <div>
        <ul className='results-container'>
          {results.map((recipe) => {
            return (
              <li key={recipe.id}>{recipe.name}</li>
            )
          })} 
        </ul>
      </div>}
    </div>
  )
}

export default App