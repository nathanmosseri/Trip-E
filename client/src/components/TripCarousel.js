import React from 'react'

export default function TripCarousel({groupActivities, dateRange}) {

  const activities = groupActivities.map((activity, i) => {
    for (let i = 0; i < dateRange.length; i++){
      if(dateRange[i] === activity.date){
    return (
      <div key={i}>
        <h2 key={dateRange[i]}>{dateRange[i]}</h2>
        <h6 key={activity.date_parser}>date: {activity.date_parser}</h6>
        <h6 key={activity.time}>time: {activity.time}</h6>
        <h3 key={activity.name}>{activity.name}</h3>
        <h5 key={activity.description}>{activity.description}</h5>
      </div>
    )
      }
    }
  })

  // const dates = dateRange.map((date) => {
  //    return <h4 key={date}>{date}</h4> 
  // })


  return (
    <div>
      {activities}
    </div>
  )
}
