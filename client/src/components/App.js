import '../App.css';
import Login from './Login';
import Signup from './Signup';
import TripHomePage from './TripHomePage';
import Itinerary from './Itinerary';
import { Route, Switch } from 'react-router-dom';

function App() {


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
          <Login/>
        </Route>
        <Route path='/signup'>
          <Signup/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
