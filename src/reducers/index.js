import { combineReducers } from 'redux'
import searching from './SearchReducer'
import filters from './FilterReducer'

export default combineReducers({
    searching,
    filters,
})
