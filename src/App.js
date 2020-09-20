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


export const TourContext = createContext();

function App() {
  const [place, setPlace] = useState(fakeData);
  return (
    <div className="body body-color">
      
        <TourContext.Provider value={{place, setPlace}}>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
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
              
            </Switch>
        </Router>
        </TourContext.Provider>
      
    </div>
  );
}

export default App;
