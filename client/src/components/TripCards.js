import React from 'react'
import { Link } from 'react-router-dom'

export default function TripCards() {
  return (
    <div>
        <h1>Group Name</h1>
        <img src="" alt='' />
        <h2>Start/End Date</h2>
        <h2>Location</h2>
        <Link to='/itinerary'>View Trip Details</Link>
    </div>
  )
}
