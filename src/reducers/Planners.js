import { PlannersAction } from '../action'

const InitialState = {
    drafts: [],
}

const Action = PlannersAction

const planner = (state = InitialState, action) => {
    switch (action.type) {
        case Action.ADDDRAFT:
            return {
                drafts: [...state.drafts, action.add_draft],
            }
        case Action.SETDRAFT:
            return {
                drafts: [...action.new_draft],
            }
        case Action.CLEARDRAFT:
            return {
                drafts: [],
            }
        default:
            return state
    }
}
export default planner
