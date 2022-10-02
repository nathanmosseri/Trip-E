import React, { useState } from 'react'
import Header from './Header'
import TripCards from './TripCards'
import TripForm from './TripForm'

export default function TripHomePage() {

  const [createTripButton, setCreateTripButton] = useState(false)

  const handleClick = (e) => {
    setCreateTripButton(prev => !prev)
  }

  return (
    <div>
      <Header />
      <button onClick={handleClick}>{createTripButton ? 'Cancel' : 'Create a Trip'}</button>
      {createTripButton ? <TripForm /> : null}
      <h1>My Trips</h1>
      <TripCards/>
    </div>
  )
}
