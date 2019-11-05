import { combineReducers } from 'redux'
import newtrip from './NewTripReducer'
import userauth from './UserAuth'
import planner from './Planners'

export default combineReducers({
    newtrip,
    userauth,
    planner,
})
