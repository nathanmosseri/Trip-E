import React, { useState } from 'react'

export default function TripCarousel({groupActivities, dateRange, setActivityDeleted, setDateEdited, setTimeEdited}) {

  const [editDate, setEditDate] = useState(false)
  const [editTime, setEditTime] = useState(false)
  const [dateFormData, setDateFormData] = useState({date: '', datetime: ''})
  const [timeFormData, setTimeFormData] = useState({time: '', datetime: ''})

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/activities/${id}` , {
      method: 'DELETE'
    }).then(res => setActivityDeleted(prev => !prev))
  }

  const handleEditDate =() => {
    setEditDate(prev => !prev)
  }

  const handleEditTime = () => {
    setEditTime(prev => !prev)
  }

  const handleDateChange = (e, time) => {
    setDateFormData({
      ...dateFormData,
      [e.target.name]: e.target.value,
      datetime: `${time}` + ` ` + `${e.target.value}`
    })
  }
  
  const handleTimeChange = (e, date) => {
    setTimeFormData({
      ...timeFormData,
      [e.target.name]: e.target.value,
      datetime: `${e.target.value}` + ` ` + `${date}`
    })
  }

  const submitDateChange = (e, id) => {
    e.preventDefault()
    fetch(`http://localhost:3000/activities/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dateFormData)
    }).then(res => res.json())
    .then((data) => {
      setDateEdited(prev => !prev)
      setEditDate(false)
    })
  }

  const submitTimeChange = (e, id) => {
    e.preventDefault()
    fetch(`http://localhost:3000/activities/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(timeFormData)
    }).then(res => res.json())
    .then((data) => {
      setTimeEdited(prev => !prev)
      setEditTime(false)
    })
  }

  const activities = groupActivities.map((activity, i) => {
    for (let i = 0; i < dateRange.length; i++){
      if(dateRange[i] === activity.date){
    return (
      <div key={activity.datetime}>
        {editDate ? <form onSubmit={(e) => submitDateChange(e, activity.id)}><select name='date' onChange={(e) => handleDateChange(e, activity.time)}><option>Select New Date</option>{dateRange.map((date) => <option value={date} key={date}>{date}</option>)}</select><button type='submit'>Save</button></form> : <h2 key={dateRange[i]}>{dateRange[i]}</h2>}
        <button onClick={handleEditDate} >Change Date</button>
        {editTime ? <form onSubmit={(e) => submitTimeChange(e, activity.id)}><input value={timeFormData.time} type='time' name='time' onChange={(e) => handleTimeChange(e, dateRange[i])} placeholder={activity.time} /><button type='submit'>Save</button></form> : <h6 key={activity.time}>time: {activity.time}</h6>}
        <button onClick={handleEditTime} >Change Time</button>
        <h3 key={activity.name}>{activity.name}</h3>
        <h5 key={activity.description}>{activity.description}</h5>
        <button onClick={() => handleDelete(activity.id)}>🗑</button>
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
