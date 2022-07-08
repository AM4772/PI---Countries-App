import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/Landing';
import Home from './components/Home/Home';
import CreateActivity from './components/Form/FormActivity';
import CountryDetails from './components/CountryDetails/CountryDetails';
// import About from './components/About/About';
// import NavBar from './components/Nav/NavBar';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path = '/' component = { LandingPage } />
          <Route path = '/home' component = { Home } />
          <Route path='/countries/:id' component = { CountryDetails } />
          <Route path='/activity' component = { CreateActivity } />       

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
