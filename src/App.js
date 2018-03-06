import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import { Homepage } from './components/HomePage';
import { Portfolio } from './components/Portfolio';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className='app'>
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/portfolio' component={Portfolio} />
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;