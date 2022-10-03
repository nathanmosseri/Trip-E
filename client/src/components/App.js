import '../App.css';
import Login from './Login';
import Signup from './Signup';
import TripHomePage from './TripHomePage';
import Itinerary from './Itinerary';

import {Route, Switch, useParams} from 'react-router-dom';

import { useEffect, useState } from 'react';

function App() {
  
  let {tripid} = useParams()

  const [user, setUser] = useState(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signUpSubmitted, setSignUpSubmitted] = useState(false);

  const [userData, setUserData] = useState([])
  const [tripCardData, setTripCardData] = useState([])


  console.log(userData)


  useEffect(() => {
    fetch(`http://localhost:3000/users/3`).then(res => res.json())
    .then((data) => {
      setUserData(data)
      setTripCardData(data.groups)
    })
  }, [])

  // useEffect(() => {
  //   fetch("/me").then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  // function handleLogin(user) {
  //   setUser(user);
  // }

  // function handleLogout() {
  //   setUser(null);
  // }
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>

          <TripHomePage tripCardData={tripCardData} />

        </Route>
        <Route path={`/itinerary/:tripid`}>
          <Itinerary />
        </Route>
        <Route path='/login'>
          <Login setUser={setUser} setIsLoggedIn={setIsLoggedIn}/>
        </Route>
        <Route path='/signup'>
          <Signup setSignUpSubmitted={setSignUpSubmitted}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
