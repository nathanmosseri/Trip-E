import React, {useState} from 'react'
import Calendar, { MonthView } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

export default function TripForm() {
    const [tripFormData, setTripFormData] = useState({full_name: '', username: '', password: ''})
    function handleChange(e){

    }
    
    function handleCalendarChange(e){

    }
    function handleSubmit(e){
        e.preventDefault();
        fetch("/groups", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(),
        })
        .then((r) => r.json())
        .then((data) => console.log(data))
    }
    
  return (
    <div>
        <h1>Plan a Trip!</h1>
        <form onSubmit={handleSubmit}>
        <label>
            Trip Name:
            <input type="text" name="tripname" onChange={handleChange}/>
        </label>
        <br />
        <label>
            Destination:
            <input type="text" name="destination"onChange={handleChange}/>
        </label>
        <br />
        <Calendar calendarType='US' view='month' selectRange onChange={handleCalendarChange} />
        <br />
        <label>
            Description:
            <input type="text" name="description" onChange={handleChange}/>
        </label>
        <br />
        <input type="submit"/>
        </form>
    </div>
  )
}
