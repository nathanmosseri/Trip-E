import React from 'react'
import { Link } from 'react-router-dom'

export default function TripCards({tripCardData}) {

  const tripCard = tripCardData.map((trip, i) => {
    return (
      <div key={i}>
      <h1 key={trip.name}>{trip.name}</h1>
      <img key={trip.end_date} src='' alt='' />
      <h2 key={trip.start_date}>{trip.start_date} - {trip.end_date}</h2>
      <h2 key={trip.location}>{trip.location}</h2>
      <Link key={trip.id} to={`/itinerary/${trip.id}`} >View Trip Details</Link>
      </div>
    )
  })

  return (
    <div>
        {tripCard}
    </div>
  )
}
