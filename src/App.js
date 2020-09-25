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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';




export const TourContext = createContext();
export const UserContext = createContext();

function App() {
  const [place, setPlace] = useState(fakeData);
  const [googleUser, setGoogleUser] = useState({
      isSignedIn: false,
      name: '',
      email: '',
      photo: '',
      password: '',
      error: '',
      success: '',
  });
  return (
    <div className="body body-color">
      
        <TourContext.Provider value={{place, setPlace}}>
          <UserContext.Provider value= {[googleUser, setGoogleUser]}>
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
              <PrivateRoute path="/hotel">
                <Hotel/>
              </PrivateRoute>
              <Route path="*">
                <NotFound/>
              </Route>
              
            </Switch>
        </Router>
        </UserContext.Provider>
      </TourContext.Provider>
      
    </div>
  );
}

export default App;
