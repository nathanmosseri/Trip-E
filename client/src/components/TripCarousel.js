import React from 'react'

export default function TripCarousel({groupActivities}) {

  const activities = groupActivities.map((activity) => {
    return (
      <div>
        <h6>date: {activity.date}</h6>
        <h7>time: {activity.time}</h7>
        <h3>{activity.name}</h3>
        <h5>{activity.description}</h5>
      </div>
    )
  })

  return (
    <div>
      {activities}
    </div>
  )
}
