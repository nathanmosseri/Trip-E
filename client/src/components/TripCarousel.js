import React, { useState } from "react";

export default function TripCarousel({
  groupActivities,
  dateRange,
  setActivityDeleted,
  setDateEdited,
  setTimeEdited,
}) {
  const [editDate, setEditDate] = useState(false);
  const [editTime, setEditTime] = useState(false);
  const [dateFormData, setDateFormData] = useState({ date: "", datetime: "" });
  const [timeFormData, setTimeFormData] = useState({ time: "", datetime: "" });

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/activities/${id}`, {
      method: "DELETE",
    }).then((res) => setActivityDeleted((prev) => !prev));
  };

  const handleEditDate = () => {
    setEditDate((prev) => !prev);
  };

  const handleEditTime = () => {
    setEditTime((prev) => !prev);
  };

  const handleDateChange = (e, time) => {
    setDateFormData({
      ...dateFormData,
      [e.target.name]: e.target.value,
      datetime: `${time}` + ` ` + `${e.target.value}`,
    });
  };

  const handleTimeChange = (e, date) => {
    setTimeFormData({
      ...timeFormData,
      [e.target.name]: e.target.value,
      datetime: `${e.target.value}` + ` ` + `${date}`,
    });
  };

  const submitDateChange = (e, id) => {
    e.preventDefault();
    fetch(`http://localhost:3000/activities/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dateFormData),
    })
      .then((res) => res.json())
      .then((data) => {
        setDateEdited((prev) => !prev);
        setEditDate(false);
      });
  };

  const submitTimeChange = (e, id) => {
    e.preventDefault();
    fetch(`http://localhost:3000/activities/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(timeFormData),
    })
      .then((res) => res.json())
      .then((data) => {
        setTimeEdited((prev) => !prev);
        setEditTime(false);
      });
  };

  const activities = groupActivities.map((activity, i) => {
    for (let i = 0; i < dateRange.length; i++) {
      if (dateRange[i] === activity.date) {
        return (
          <div key={activity.datetime} className="activity-cards">
            <p key={activity.name} className="activity-title">{activity.name}</p>
            <img
              src="https://en.unesco.org/creativity/sites/creativity/files/desert.jpg"
              width="10%"
              height="70%"
              className="image"
              />
            <div className="activity-cards-text-container">
              {editDate ? (
                <form onSubmit={(e) => submitDateChange(e, activity.id)}>
                  <select
                    name="date"
                    onChange={(e) => handleDateChange(e, activity.time)}
                  >
                    <option>Select New Date</option>
                    {dateRange.map((date) => (
                      <option value={date} key={date}>
                        {date}
                      </option>
                    ))}
                  </select>
                  <button type="submit">Save</button>
                </form>
              ) : (
                <p key={dateRange[i]} className="each-activity-card"><strong>{dateRange[i]}</strong></p>
                )}
                <button onClick={handleEditDate} className="activity-buttons">Change Date</button>
              {editTime ? (
                <form onSubmit={(e) => submitTimeChange(e, activity.id)}>
                  <input
                    value={timeFormData.time}
                    type="time"
                    name="time"
                    onChange={(e) => handleTimeChange(e, dateRange[i])}
                    placeholder={activity.time}
                  />
                  <button type="submit">Save</button>
                </form>
              ) : (
                <p key={activity.time} className="each-activity-card">time: {activity.time}</p>
                )}
              <button onClick={handleEditTime} className="activity-buttons">Change Time</button>
              <p key={activity.description} className="each-activity-card-description">{activity.description}</p>
            </div>
            <button onClick={() => handleDelete(activity.id)} className="delete-activity-button">🗑</button>
          </div>
        );
      }
    }
  });

  // const dates = dateRange.map((date) => {
  //    return <h4 key={date}>{date}</h4>
  // })

  return <div className="activity-cards-container">{activities}</div>;
}
