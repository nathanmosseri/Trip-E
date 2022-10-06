import React, { useState } from "react";

const ActivityForm = ({dateRange, tripId, setActivitySubmitted}) => {

    const [activityFormData, setActivityFormData] = useState({
        name: '',
        description: '',
        time: '',
        date: '',
        group_id: tripId,
        datetime: ''
    })

    const dateDropdown = dateRange.map((date) => {
        return <option value={date} key={date}>{date}</option>
    })

    const handleChange = (e) => {
        if (e.target.name === "time") {
            setActivityFormData({
                ...activityFormData,
                [e.target.name]: e.target.value,
                datetime: `${activityFormData.date}` + ' ' + `${e.target.value}`
            })
        } else {
            setActivityFormData({
                ...activityFormData,
                [e.target.name]: e.target.value,
            })
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/activities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(activityFormData)
        }).then(res => res.json())
        .then((data) => {
            console.log(data)
            setActivitySubmitted(prev => !prev)
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input name="name" value={activityFormData.name} placeholder="Activity name" onChange={handleChange}/>
            <input name="description" value={activityFormData.description} placeholder="Activity description" onChange={handleChange}/>
            <input name="location" placeholder="Location" onChange={handleChange}/>
            <select name="date" onChange={handleChange}>
                <option>Select a date</option>
                {dateDropdown}
            </select>
            <input name="time" value={activityFormData.time} type='time' placeholder="Time" onChange={handleChange}/>
            <input type='submit' />
            </form>
        </div>
    )

}

export default ActivityForm