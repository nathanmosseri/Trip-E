import React, { useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import TripDetails from './TripDetails'
import TripCarousel from './TripCarousel'
import ActivityForm from './ActivityForm'

export default function Itinerary() {
    const match = useRouteMatch()

  // const [value, onChange] = useState(new Date())
  const [groupData, setGroupData] = useState([])
  const [groupActivities, setGroupActivities] = useState([])
  const [dateRange, setDateRange] = useState([])
  const [activitySubmitted, setActivitySubmitted] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:3000/groups/${match.params.tripid}`).then(res => res.json())
    .then((data) => {
      setGroupData(data)
      setGroupActivities(data.activities)
      setDateRange(data.date_range)
    })
  }, [activitySubmitted])


  return (
    <div>
    <Link to='/'>back</Link>
    <TripDetails groupData={groupData}/>
    <ActivityForm dateRange={dateRange} tripId={match.params.tripid} setActivitySubmitted={setActivitySubmitted} />
    <TripCarousel groupActivities={groupActivities} dateRange={dateRange} groupData={groupData}/>
    {/* <MonthView tileContent={<p>maybe this can work?</p>} activeStartDate={new Date(2022, 9, 22)} minDate={new Date(new Date(2017, 9, 1))} maxDate={new Date(new Date(2022, 9, 22))} /> */}
    
    </div>
  )
}
