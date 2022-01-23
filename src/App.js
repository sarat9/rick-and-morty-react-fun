import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import LoginLayout from './layouts/login/LoginLayout'
import HomeLayout from './layouts/home/HomeLayout'
import './App.css';
import {ThemeContextProvider, ThemeContext} from './contexts/ThemeContext'

function App() {

  return (
    <div className='app-root' style={{height:'100%', width:'100%'}}>
      <ThemeContextProvider>
      <Router>
        <Switch>
          <Route exact path='/login' component={LoginLayout} />
          <Route path='/rick-and-morty-react-fun' component={HomeLayout} />
          <Route path='/' component={HomeLayout} />
        </Switch>
      </Router>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
