import { SearchAction } from '../action'

let initialState = {
    word: "",
}
const Action = SearchAction

const searching = (state = initialState, action) => {
    switch (action.type) {
        case Action.WORDSEARCH:
            return {
                ...state,
                word: action.setWord
            }
        case Action.CLEAR:
            return {
                word: "",
            }
        default:
            return state
    }
}
export default searching