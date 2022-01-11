import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import LoginLayout from './layouts/login/LoginLayout'
import HomeLayout from './layouts/home/HomeLayout'
import './App.css';

function App() {
  return (
    <div className='App-root'>
      <Router>
        <Switch>
          <Route exact path='/login' component={LoginLayout} />
          <Route path='/' component={HomeLayout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
