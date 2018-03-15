import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './homepage/HomePage';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Product from './components/Product';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return(
    <div>
      <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/product' component={Product} />
          <Route exact path='/portfolio' compontent={Portfolio} />
          <Route exact path='/contact' compontent={Contact} />
        </Switch>
      <Footer />
    </div>
  )
}

export default App;