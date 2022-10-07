import React, { useState, useRef } from "react";
// import Calendar, { MonthView } from "react-calendar";
// import "react-calendar/dist/Calendar.css";
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
    start_date: "",
    end_date: ""
  });
  // const calanderRef = useRef(null);
  // const history = useHistory();

  // start_date: calanderRef.current.value[0],
  // end_date: calanderRef.current.value[1],

  function handleChange(e) {

  console.log(e.target.value)
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
        ...tripFormData
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
    <div className="create-trip">
      <form onSubmit={handleSubmit} className="trip-form">
      <h1 className="plan-a-trip">Plan a Trip!</h1>
        <label className="label-names">
          Trip Name:
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={tripFormData.name}
            className="form-inputs"
          />
        </label>
        <br />
        <label className="label-names">
          Destination:
          <input
            type="text"
            name="location"
            onChange={handleChange}
            value={tripFormData.location}
            className="form-inputs"
          />
        </label>
        <br />
        <label className="label-names">
          Arrival:
          <input
            type="date"
            name="start_date"
            onChange={handleChange}
            value={tripFormData.start_date}
            className="form-inputs"
          />
        </label>
        {/* <Calendar
          ref={calanderRef}
          calendarType="US"
          view="month"
          selectRange
        /> */}
        <br />
        <label className="label-names">
          Departure:
          <input
            type="date"
            name="end_date"
            onChange={handleChange}
            value={tripFormData.end_date}
            className="form-inputs"
          />
        </label>
        <br />
        <label className="label-names">
          Description:
          <input
            type="text"
            name="description"
            onChange={handleChange}
            value={tripFormData.description}
            className="form-inputs"
          />
        </label>
        <br />
        <input type="submit" className="form-inputs"/>
      </form>
    </div>
  );
}
