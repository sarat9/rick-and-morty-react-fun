import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import NavBar from './../../components/NavBar/NavBar'
import DashboardLayout from '../dashboard/DashboardLayout'
import CharactersLayout from '../characters/CharactersLayout'
import EpisodesLayout from '../episodes/EpisodesLayout'
import LocationsLayout from '../locations/LocationsLayout'

function Home(props) {
  return (
    <div className='Home-page'>
     <NavBar />
      <br />
      <div style={{padding:'3% 6%'}}>
      <Route exact path='/characters' component={CharactersLayout} />
      <Route exact path='/episodes' component={EpisodesLayout} />
      <Route exact path='/locations' component={LocationsLayout} />
        <Route exact path='/' component={DashboardLayout} />
      </div>
    </div>
  )
}

export default Home