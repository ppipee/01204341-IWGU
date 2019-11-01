import { NewTripAction } from '../action'

const InitialState = {
    trip: null,
    name: '',
    date: {
        start: '',
        end: '',
    },
    auth: false,
}
const Action = NewTripAction

const newtrip = (state = InitialState, action) => {
    switch (action.type) {
        case Action.SETNAMETRIP:
            return {
                ...state,
                name: action.setName,
            }
        case Action.SETDATE:
            return {
                ...state,
                date: action.setDate,
            }
        case Action.SETAUTH:
            return {
                ...state,
                auth: action.setAuth,
            }
        case Action.SETNEWTRIP:
            return {
                ...state,
                trip: action.setTrip,
            }
        case Action.CLEARNEWTRIP:
            return {
                trip: null,
                name: '',
                date: {
                    start: '',
                    end: '',
                },
                auth: false,
            }
        default:
            return state
    }
}
export default newtrip
