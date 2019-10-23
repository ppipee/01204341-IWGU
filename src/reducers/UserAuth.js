import { UserAuthAction } from '../action'

const InitialState = {
    userid: '5d9ef72333c4410004eca446',
    username: 'iwgu',
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
        default:
            return state
    }
}
export default userauth
