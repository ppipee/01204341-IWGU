import { SearchAction } from '../action'

const InitialState = {
    word: '',
}
const Action = SearchAction

const searching = (state = InitialState, action) => {
    switch (action.type) {
        case Action.WORDSEARCH:
            return {
                ...state,
                word: action.setWord,
            }
        case Action.CLEAR:
            return {
                word: '',
            }
        default:
            return state
    }
}
export default searching
