import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TripDetails from './TripDetails'
import TripCarousel from './TripCarousel'
import Calendar, { MonthView } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

export default function Itinerary() {

  // const [value, onChange] = useState(new Date())
  const [groupData, setGroupData] = useState([])
  const [groupActivities, setGroupActivities] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/groups/2`).then(res => res.json())
    .then((data) => {
      setGroupData(data)
      setGroupActivities(data.activities)
    })
  }, [])

  console.log(groupData)


  return (
    <div>
    <Link to='/'>back</Link>
    <TripDetails/>
    <h1>{groupData.name}</h1>
    <h2>{groupData.description}</h2>
    <h3>{groupData.start_date} - {groupData.end_date}</h3>
    <Calendar calendarType='US' view='month' onChange={(value) => console.log(value)}  minDate={new Date(2022, 9, 13)} maxDate={new Date(2022, 9, 22)}/>
    <TripCarousel groupActivities={groupActivities}/>
    {/* <MonthView tileContent={<p>maybe this can work?</p>} activeStartDate={new Date(2022, 9, 22)} minDate={new Date(new Date(2017, 9, 1))} maxDate={new Date(new Date(2022, 9, 22))} /> */}
    
    </div>
  )
}
