import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Users from './Users'
import Home from './Home'
import Error from './Error';
import User from './User';

function App() {
  return (
    <>
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/users" component = {Users}/>
        <Route path = {"/users/:id"} component = {User}/>
        <Route component = {Error}/>
        

      </Switch>
    </>
  );
}

export default App;
