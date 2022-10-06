import React from 'react'

export default function TripCarousel({groupActivities, dateRange, setActivityDeleted}) {

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/activities/${id}` , {
      method: 'DELETE'
    }).then(res => res.json())
    .then((data) => {
      setActivityDeleted(prev => !prev)
    })
  }

  const activities = groupActivities.map((activity, i) => {
    for (let i = 0; i < dateRange.length; i++){
      if(dateRange[i] === activity.date){
    return (
      <div key={activity.datetime}>
        <h2 key={dateRange[i]}>{dateRange[i]}</h2>
        <h6 key={activity.id}>date: {activity.date}</h6>
        <h6 key={activity.time}>time: {activity.time}</h6>
        <h3 key={activity.name}>{activity.name}</h3>
        <h5 key={activity.description}>{activity.description}</h5>
        <button>✏️</button>
        <button onClick={handleDelete(activity.id)}>🗑</button>
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
