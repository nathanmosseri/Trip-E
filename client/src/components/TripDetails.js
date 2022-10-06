import React, {useState, useEffect} from 'react'

export default function TripDetails({groupData}) {

  return (
    <div>
    <h4>Trip Details:</h4>
    <h1>{groupData.name}</h1>
    <h2>{groupData.description}</h2>
    <h3>{groupData.start_date} - {groupData.end_date}</h3>
    </div>
  )
}
