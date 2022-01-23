import React, {lazy, Suspense, useContext, useEffect} from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import NavBar from './../../components/NavBar/NavBar'
import DashboardLayout from '../dashboard/DashboardLayout'
import CharactersLayout from '../characters/CharactersLayout'
import CharacterLayout from '../characters/CharacterLayout'
import EpisodesLayout from '../episodes/EpisodesLayout'
import LocationsLayout from '../locations/LocationsLayout'
import ErrorBoundry from '../../components/ErrorBoundry/ErrorBoundry'
import {ThemeContext} from './../../contexts/ThemeContext'

const GameLayout = React.lazy(()=>import ('../game/GameLayout'))

function Home(props) {
  const themeContext = useContext(ThemeContext);
  const { theme, setTheme } = themeContext


  return (
    <div className='Home-page' style={{height:'100%', width:'100vw', background:(theme=='light'?'white':'black')}}>
      <ErrorBoundry>
      <NavBar />
        <br />
          <div style={{padding:'3% 6%'}}>
          <Route exact path='/characters' component={CharactersLayout} />
          <Route exact path='/character/:id' component={CharacterLayout} />
          <Route exact path='/episodes' component={EpisodesLayout} />
          <Route exact path='/locations' component={LocationsLayout} />
          <Suspense fallback={<><p>Please wait.. Page is lazy loading...</p></>}>
            <Route exact path='/game' component={GameLayout} />
          </Suspense>
          <Route exact path='/' component={DashboardLayout} />
        </div>
      </ErrorBoundry>
    </div>
  )
}

export default Home