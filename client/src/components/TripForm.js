import React, { useState, useRef } from "react";
import Calendar, { MonthView } from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import { useHistory } from "react-router-dom";

export default function TripForm({
  setTripCardData,
  tripCardData,
  setCreateTripButton,
}) {
  const [tripFormData, setTripFormData] = useState({
    name: "",
    location: "",
    description: "",
  });
  const calanderRef = useRef(null);
  // const history = useHistory();

  function handleChange(e) {
    setTripFormData({ ...tripFormData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/groups", {
      method: "POST",
      headers: {
        token: localStorage.getItem("jwt"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...tripFormData,
        start_date: calanderRef.current.value[0],
        end_date: calanderRef.current.value[1],
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data["group"]) {
          setTripCardData([...tripCardData, data.group]);
        } else {
          alert(data["errors"])
          ;
        }
      });

    setCreateTripButton((prev) => !prev);
    setTripFormData({
      name: "",
      location: "",
      description: "",
    });
    console.log(tripFormData);
  }

  return (
    <div>
      <h1>Plan a Trip!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Trip Name:
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={tripFormData.name}
          />
        </label>
        <br />
        <label>
          Destination:
          <input
            type="text"
            name="location"
            onChange={handleChange}
            value={tripFormData.location}
          />
        </label>
        <br />
        <Calendar
          ref={calanderRef}
          calendarType="US"
          view="month"
          selectRange
        />
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={tripFormData.description}
          />
        </label>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
