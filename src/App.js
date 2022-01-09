import Preview from './PDF/Preview'
import React, { useState } from 'react'
function App() {
  const [profile, setProfile] = useState({
    type: 'Profile',
    name: 'John Doe',
    profession: 'Junior Developer',
    profileImageURL: 'https://i.imgur.com/f6L6Y57.png',
    display: true,
    about: 'About...',
  })

  const handleChange = (name, value) => {
    setProfile({ ...profile, [name]: value })
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
      }}
    >
      <div style={{ width: '50%' }}>
        <div>
          <label>Name</label>

          <input
            name='name'
            defaultValue={profile.name}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value)
            }}
          />
        </div>
        <div>
          <label>Profession</label>
          <input
            name='profession'
            defaultValue={profile.profession}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value)
            }}
          />
        </div>
        <div>
          <label>ImageURL</label>
          <input
            name='profileImageURL'
            defaultValue={profile.profileImageURL}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value)
            }}
          />
        </div>
        <div>
          <label>About</label>
          <input
            name='about'
            defaultValue={profile.about}
            onChange={(e) => {
              handleChange(e.target.name, e.target.value)
            }}
          />
        </div>
      </div>
      <Preview profile={profile} />
    </div>
  )
}

export default App
