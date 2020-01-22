
import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Class from './Class';

function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/class" exact component={Class}/>
    </Switch>
    </BrowserRouter>
  )
}

export default Routes