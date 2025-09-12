import React from 'react'

const Profile = ({ data, setData, errors }) => {
  const {name, email, age} = data
  const handleDataChange = (e, item) => {
    setData(prevState => ({
      ...prevState,
      [item]: e.target.value
    }))
  }
  return (
    <div>
      <div className='card'>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name_input" value={name} onChange={(e) => handleDataChange(e, 'name')} />
        {errors.name && <span className='error'>{errors.name}</span>}
        <label htmlFor="age">Age:</label>
        <input type="number" name="age" id="age_input" value={age} onChange={(e) => handleDataChange(e, 'age')} />
        {errors.age && <span className='error'>{errors.age}</span>}
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email_input" value={email} onChange={(e) => handleDataChange(e, 'email')} />
        {errors.email && <span className='error'>{errors.email}</span>}
      </div>
    </div>
  )
}

export default Profile