import React, { useContext, createContext, useState} from "react";
import logo from './logo.svg';
import './App.css';
import Session    from './components/Session';
import LoginState from './components/LoginState/LoginState';
import Home       from './pages/Home';
import Articles   from './pages/Articles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Nav from "./components/Nav/Nav";


function App() {
  
  console.log('App', Session.isLoggedIn);
  return (
    <div className="App">
      <LoginState 
      isLoggedIn={Session.isLoggedIn} // Juilo is very clever 
      toLogin={Session.login} 
      toLogout={Session.logout}
      />
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/articles">
              <Articles />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
