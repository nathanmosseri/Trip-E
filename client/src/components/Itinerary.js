import React, { useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import TripDetails from './TripDetails'
import TripCarousel from './TripCarousel'

export default function Itinerary() {
    const match = useRouteMatch()
  console.log(match)
  console.log(match.params)
  // const params = useParams()
  // console.log(params)

  // const [value, onChange] = useState(new Date())
  const [groupData, setGroupData] = useState([])
  const [groupActivities, setGroupActivities] = useState([])
  const [dateRange, setDateRange] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/groups/${match.params.tripid}`).then(res => res.json())
    .then((data) => {
      setGroupData(data)
      setGroupActivities(data.activities)
      setDateRange(data.date_range)
    })
  }, [])

  console.log(groupData)
  console.log(dateRange)


  return (
    <div>
    <Link to='/'>back</Link>
    <TripDetails/>
    <TripCarousel groupActivities={groupActivities} dateRange={dateRange} groupData={groupData}/>
    {/* <MonthView tileContent={<p>maybe this can work?</p>} activeStartDate={new Date(2022, 9, 22)} minDate={new Date(new Date(2017, 9, 1))} maxDate={new Date(new Date(2022, 9, 22))} /> */}
    
    </div>
  )
}
