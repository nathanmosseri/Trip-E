import React from 'react'

export default function TripCarousel({groupActivities}) {

  const activities = groupActivities.map((activity, i) => {
    return (
      <div key={i}>
        <h6 key={activity.date}>date: {activity.date}</h6>
        <h6 key={activity.time}>time: {activity.time}</h6>
        <h3 key={activity.name}>{activity.name}</h3>
        <h5 key={activity.description}>{activity.description}</h5>
      </div>
    )
  })

  return (
    <div>
      {activities}
    </div>
  )
}
