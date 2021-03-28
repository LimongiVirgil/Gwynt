
import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Class from './Class';
import Game from './Game';

export default function Routes() {

  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/class" exact component={Class}/>
      <Route path="/game" exact component={Game}/>
    </Switch>
    </BrowserRouter>
  )
};