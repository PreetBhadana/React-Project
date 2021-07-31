import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Users from './Users'
import Home from './Home'
import Error from './Error';

function App() {
  return (
    <>
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route path = "/users" component = {Users}/>
        <Route component = {Error}/>
        

      </Switch>
    </>
  );
}

export default App;
