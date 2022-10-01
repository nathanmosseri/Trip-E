import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TripDetails from './TripDetails'
import TripCarousel from './TripCarousel'
import Calendar, { MonthView } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

export default function Itinerary() {

  // const [value, onChange] = useState(new Date())

  

  return (
    <>
    <div>itinerary</div>
    <Link to='/'>back</Link>
    <TripDetails/>
    <TripCarousel/>
    <Calendar calendarType='US' view='month' selectRange onClickDay={(value) => console.log(value)}  minDate={new Date(2022, 9, 13)} maxDate={new Date(2022, 9, 22)}/>
    <MonthView tileContent={<p>maybe this can work?</p>} activeStartDate={new Date(2022, 9, 22)} minDate={new Date(new Date(2017, 9, 1))} maxDate={new Date(new Date(2022, 9, 22))} />
    </>
  )
}
