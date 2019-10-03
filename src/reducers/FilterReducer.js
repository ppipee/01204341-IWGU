import { FilterAction } from '../action'

let default_filters = {
    tags: [],
    sortby: {
        "near": false,
        "rating": false,
        "price": false,
    },
    time: [6, 29],
    rating: {
        "star1": false,
        "star2": false,
        "star3": false,
        "star4": false,
        "star5": false,
    }
}
const Action = FilterAction

const filters = (state = default_filters, action) => {
    switch (action.type) {
        case Action.SAVEFILTERS:
            return {
                ...action.newState,
            }
        default:
            return state
    }
}
export default filters