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
            if(data["description"]) {
                setActivitySubmitted(prev => !prev)
            } else {
                alert(JSON.stringify(data))
            } 
        })
        setActivityFormData({
            name: '',
            description: '',
            time: '',
            date: '',
            group_id: tripId,
            datetime: ''
        })
    }

    return (
        <div className="activity-form">
            <form onSubmit={handleSubmit}>
            <input name="name" value={activityFormData.name} placeholder="Activity name" onChange={handleChange} className="activity-form-styling"/>
            <input name="description" value={activityFormData.description} placeholder="Activity description" onChange={handleChange} className="activity-form-styling"/>
            {/* <input name="location" placeholder="Location" onChange={handleChange}/> */}
            <select name="date" onChange={handleChange} className="activity-form-styling">
                <option className="activity-form-styling">Select a date</option>
                {dateDropdown}
            </select>
            <input name="time" value={activityFormData.time} type='time' placeholder="Time" onChange={handleChange} className="activity-form-styling"/>
            <input type='submit' className="activity-form-styling"/>
            </form>
        </div>
    )

}

export default ActivityForm