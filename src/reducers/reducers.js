import { combineReducers } from 'redux'
import dashboard from './dashboard'
import locations from './locations'
import episodes from './episodes'

export default combineReducers({
    dashboard,
    locations,
    episodes
})