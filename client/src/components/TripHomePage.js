import React, { useState } from 'react'
import Header from './Header'
import TripCards from './TripCards'
import TripForm from './TripForm'
import { useHistory } from "react-router-dom";

export default function TripHomePage({user,tripCardData, setUser}) {
  const history = useHistory();
  const [createTripButton, setCreateTripButton] = useState(false)

  const handleClick = (e) => {
    setCreateTripButton(prev => !prev)
  }

  return (
    <div>
      <Header user={user}/>
      <button
          onClick={() => {
            localStorage.clear();
            setUser({
              username: "",
              password: ''
            });
            history.push("/login");
          }}
        >
          LOG OUT
        </button>
      <button onClick={handleClick}>{createTripButton ? 'Cancel' : 'Create a Trip'}</button>
      {createTripButton ? <TripForm  /> : null}
      <h1>My Trips</h1>
      <TripCards tripCardData={tripCardData} />
    </div>
  )
}
