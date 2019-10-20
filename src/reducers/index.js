import { combineReducers } from 'redux'
import searching from './SearchReducer'
import filters from './FilterReducer'
import newtrip from './NewTripReducer'
import userauth from './UserAuth'

export default combineReducers({
    searching,
    filters,
    newtrip,
    userauth,
})
