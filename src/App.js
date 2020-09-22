import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import fakeData from './components/fakeData/fakeData';
import News from './components/Header/NavItems/News/News';
import Destination from './components/Header/NavItems/Destination/Destination';
import Blog from './components/Header/NavItems/Blog/Blog';
import Contact from './components/Header/NavItems/Contact/Contact';
import Login from './components/Header/NavItems/Login/Login';
import Booking from './components/Booking/Booking';
import NotFound from './components/NotFound/NotFound';
import Hotel from './components/Hotel/Hotel';


export const TourContext = createContext();

function App() {
  const [place, setPlace] = useState(fakeData);
  return (
    <div className="body body-color">
      
        <TourContext.Provider value={{place, setPlace}}>
          <Router>
            <Header/>
            <Switch>
              <Route exact path="/"> 
                <Home/>
              </Route>
              <Route path="/home">
                <Home/>
              </Route>
              <Route path="/news">
                <News/>
              </Route>
              <Route path="/destination">
                <Destination/>
              </Route>
              <Route path="/blog">
                <Blog/>
              </Route>
              <Route path="/contact">
                <Contact/>
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/booking/:name && :description">
                <Booking/>
              </Route>
              <Route path="/hotel">
                <Hotel/>
              </Route>
              <Route path="*">
                <NotFound/>
              </Route>
              
            </Switch>
        </Router>
        </TourContext.Provider>
      
    </div>
  );
}

export default App;
