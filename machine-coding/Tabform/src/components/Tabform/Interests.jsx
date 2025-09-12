import React from 'react'

const Interests = ({ data, setData, errors }) => {
  const { interests } = data
  const handleData = (e, name) => {
    setData(prevState => (
      {
      ...prevState,
      interests: e.target.checked ? [...prevState.interests, e.target.name] : prevState.interests.filter((interest) => interest !== e.target.name)
    }))
  }
  return (
    <div>
      <div className="card">
        <label htmlFor="coding">
          <input type="checkbox" name="coding" checked={interests.includes('coding')} onChange={handleData}/>Coding
        </label>
        <label htmlFor="coding">
          <input type="checkbox" name="gym" checked={interests.includes('gym')} onChange={handleData} />Gym
        </label>
        <label htmlFor="coding">
          <input type="checkbox" name="cooking" checked={interests.includes('cooking')} onChange={handleData} />Cooking
        </label>
        {errors.interests && <span className='error'>{errors.interests}</span>}
      </div>
    </div>
  )
}

export default Interests