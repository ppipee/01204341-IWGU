import { combineReducers } from 'redux'
import newtrip from './NewTripReducer'
import userauth from './UserAuth'

export default combineReducers({
    newtrip,
    userauth,
})
