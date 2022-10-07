import React, {useState, useEffect} from 'react'

export default function TripDetails({groupData}) {

  return (
    <div className='trip-details'>
    <h1>Trip Details:</h1>
    <h1 className="trip-details-name">{groupData.name}</h1>
    <h2>{groupData.description}</h2>
    <h3>{groupData.start_date} - {groupData.end_date}</h3>
    </div>
  )
}
