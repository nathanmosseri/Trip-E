
import React, { useState } from 'react'

import Calendar, { MonthView } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useHistory } from 'react-router-dom';

export default function TripForm({ createTripButton, setCreateTripButton }) {
    const [tripFormData, setTripFormData] = useState({name: '', location: '', description: ''})
    const [startDate, setStartDate] = useState({start_date: []})
    const [endDate, setEndDate] = useState({end_date: ''})

    const history = useHistory()

    function handleChange(e){
        setTripFormData({...tripFormData, [e.target.name]: e.target.value});
    }
    
    function handleCalendarChange(value){
        setStartDate({...startDate, start_date: value[0]})
        setEndDate({...endDate, end_date: value[1]})
        console.log(startDate, endDate)
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch("http://localhost:3000/groups", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(tripFormData),
        })
        .then((r) => r.json())
        setCreateTripButton(prev => !prev)
    }
    
  return (
    <div>
        <h1>Plan a Trip!</h1>
        <form onSubmit={handleSubmit}>
        <label>
            Trip Name:
            <input type="text" name="name" onChange={handleChange} value={tripFormData.name}/>
        </label>
        <br />
        <label>
            Destination:
            <input type="text" name="location" onChange={handleChange} value={tripFormData.location}/>
        </label>
        <br />
        <Calendar calendarType='US' view='month' selectRange onChange={(value) => handleCalendarChange(value)} />
        <br />
        <label>
            Description:
            <input type="text" name="description" onChange={handleChange} value={tripFormData.description}/>
        </label>
        <br />
        <input type="submit"/>
        </form>
    </div>
  )
}
