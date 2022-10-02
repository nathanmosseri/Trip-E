import React from 'react'

export default function TripForm() {
    function handleChange(e){
        
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
        <label>
            Trip Dates:
            <input type="text" name="tripdates" onChange={handleChange}/>
        </label>
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
