import { FilterAction } from '../action'

const DefaultFilter = {
    tags: [],
    sortby: {
        near: true,
        rating: false,
        price: false,
    },
    time: [6, 29],
    rating: {
        star1: false,
        star2: false,
        star3: false,
        star4: false,
        star5: false,
    },
}
const Action = FilterAction

const filters = (state = DefaultFilter, action) => {
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
