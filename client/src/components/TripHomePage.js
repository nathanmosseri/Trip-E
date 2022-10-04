import React, { useState } from "react";
import Header from "./Header";
import TripCards from "./TripCards";
import TripForm from "./TripForm";
import { useHistory } from "react-router-dom";

export default function TripHomePage({
  isLoggedIn,
  user,
  tripCardData,
  setUser,
}) {
  const history = useHistory();
  const [createTripButton, setCreateTripButton] = useState(false);

  const handleClick = (e) => {
    setCreateTripButton((prev) => !prev);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <Header user={user} />
          <button
            onClick={() => {
              localStorage.clear();
              setUser({
                username: "",
                password: "",
              });
              history.push("/login");
            }}
          >
            LOG OUT
          </button>
          <button onClick={handleClick}>
            {createTripButton ? "Cancel" : "Create a Trip"}
          </button>
          {createTripButton ? (
            <TripForm
              createTripButton={createTripButton}
              setCreateTripButton={setCreateTripButton}
            />
          ) : null}
          <h1>My Trips</h1>
          <TripCards tripCardData={tripCardData} />
        </>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
  );
}
