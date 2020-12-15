import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
 
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink exact activeClassName="active" to="/">Sign Up</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink>
            <NavLink activeClassName="active" to="/home">Home</NavLink>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Signup} />
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/home" component={Home} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;
