import React from 'react'

export default function TripCarousel({groupActivities, dateRange}) {

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

  const dates = dateRange.map((date) => {
    return <h4>{date}</h4>
  })

  return (
    <div>
      {dates}
      {activities}
    </div>
  )
}
