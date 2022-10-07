import React from 'react'
import { Link } from 'react-router-dom'

export default function TripCards({tripCardData}) {

  const tripCard = tripCardData.map((trip, i) => {
    return (
      <div key={i} className="trip-cards">
        <div className='text-styling'>
      <img src="https://wallpaperaccess.com/full/1131585.jpg" width="100%" height="70%" className='image'/><br />
      <div className='card-details'>
      <h1 key={trip.name} className="trip-name">{trip.name}</h1> <br />
      <h2 key={trip.location} className="location-width">{trip.location}</h2>
      <h2 key={trip.start_date} >{trip.start_date} - {trip.end_date}</h2> 
      <Link key={trip.id} to={`/itinerary/${trip.id}`} >View Trip Details</Link>
      </div>
      </div>
      </div>
    )
  })

  return (
    <div>
        {tripCard}
    </div>
  )
}
