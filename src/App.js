import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return(
    <div>
      <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/portfolio' compontent={Portfolio} />
        </Switch>
      <Footer />
    </div>
  )
}

export default App;