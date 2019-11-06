import { UserAuthAction } from '../action'

const InitialState = {
    userid: '',
    username: '',
    status: '',
}
const Action = UserAuthAction

const userauth = (state = InitialState, action) => {
    switch (action.type) {
        case Action.SETID:
            return {
                ...state,
                userid: action.setID,
            }
        case Action.SETUSERNAME:
            return {
                ...state,
                username: action.setUserName,
            }
        case Action.LOGIN:
            return {
                ...state,
                userid: action.userid,
                username: action.name,
                status: action.status,
            }
        case Action.SIGNOUT:
            return {
                ...state,
                userid: '',
                username: '',
                status: '',
            }
        default:
            return state
    }
}
export default userauth
