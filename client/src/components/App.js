import '../App.css';
import Login from './Login';
import Signup from './Signup';
import TripHomePage from './TripHomePage';
import Itinerary from './Itinerary';
import {Route, Switch} from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <TripHomePage />
        </Route>
        <Route path='/itinerary'>
          <Itinerary />
        </Route>
        <Route path='/login'>
          <Login onLogin={handleLogin}/>
        </Route>
        <Route path='/signup'>
          <Signup/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
