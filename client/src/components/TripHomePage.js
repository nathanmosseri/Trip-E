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
  setTripCardData,
}) {
  const history = useHistory();
  const [createTripButton, setCreateTripButton] = useState(false);

  const handleClick = (e) => {
    setCreateTripButton((prev) => !prev);
  };

  return (
    <div className="personal-homepage">
      <div className="tan-background">
        {isLoggedIn ? (
          <>
            <Header user={user} />
            <button
              className="logout"
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
            <button onClick={handleClick} className="homepage-fonts">
              {createTripButton ? "Cancel" : "Create a Trip"}
            </button>
            <h1 className="my-trips">My Trips</h1>
            <div className="display-flex-styling">
            <div className="trip-cards-create">
              <div className="display-flex">
            <TripCards tripCardData={tripCardData} />
            </div>
            </div>
            {createTripButton ? (
              <TripForm
                tripCardData={tripCardData}
                setTripCardData={setTripCardData}
                createTripButton={createTripButton}
                setCreateTripButton={setCreateTripButton}
              />
            ) : null}
            </div>
          </>
        ) : (
          <h1>Please log in</h1>
        )}
      </div>
      <footer className="footer">Partner With Us</footer>
    </div>
  );
}
