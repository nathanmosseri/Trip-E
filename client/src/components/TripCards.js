import {Link} from 'react-router-dom'
import {Link} from 'react'

export default function TripCards() {
  // getting this information from the user activities show route or from groups show route?
  return (
    <div>
        <h1>Group Name</h1>
        <img src="" />
        <h2>Start/End Date</h2>
        <h2>Location</h2>
        <Link to='/itinerary'>View Trip Details</Link>
    </div>
  )
}
