import "../App.css";
import Login from "./Login";
import Signup from "./Signup";
import TripHomePage from "./TripHomePage";
import Itinerary from "./Itinerary";

import { Redirect, Route, Switch, useParams } from "react-router-dom";

import { useEffect, useState } from "react";

function App() {
  let { tripid } = useParams();

  const [user, setUser] = useState({});

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signUpSubmitted, setSignUpSubmitted] = useState(false);

  const [userData, setUserData] = useState([]);
  const [tripCardData, setTripCardData] = useState([]);

  // useEffect(() => {

  //   fetch(`http://localhost:3000/users/44`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUserData(data);
  //       setTripCardData(data.groups);
  //     });
  // }, [isLoggedIn]);

  useEffect(() => {
    let token = localStorage.getItem("jwt");
    if (token && !isLoggedIn) {
      fetch("http://localhost:3000/profile", {
        headers: {
          token: token,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data["error"]) {
            localStorage.clear();
          } else {
            setIsLoggedIn(true);
            setUser(data);
            setTripCardData(data.groups);
          }
        });
    }
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {/* {isLoggedIn ? <TripHomePage tripCardData={tripCardData} /> : <Redirect to='/login'/>} */}
          <TripHomePage
            isLoggedIn={isLoggedIn}
            user={user}
            tripCardData={tripCardData}
            setUser={setUser}
            setTripCardData={setTripCardData}
          />
        </Route>
        <Route path={`/itinerary/:tripid`}>
          {/* {isLoggedIn ?  <Itinerary /> : <Redirect to='/login'/> } */}
          <Itinerary />
        </Route>
        <Route path="/login">
          <Login
            setUser={setUser}
            setIsLoggedIn={setIsLoggedIn}
            setTripCardData={setTripCardData}
          />
        </Route>
        <Route path="/signup">
          <Signup
            setUser={setUser}
            setIsLoggedIn={setIsLoggedIn}
            setTripCardData={setTripCardData}
            setSignUpSubmitted={setSignUpSubmitted}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
