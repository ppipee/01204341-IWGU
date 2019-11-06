import { PlannersAction } from '../action'

const InitialState = {
    drafts: [],
    favourites: [],
    load_favs: false,
    load_drafts: false,
    planner: null,
}

const Action = PlannersAction

const planner = (state = InitialState, action) => {
    switch (action.type) {
        case Action.ADDDRAFT:
            return {
                ...state,
                drafts: [...state.drafts, action.add_draft],
            }
        case Action.SETDRAFTS:
            return {
                ...state,
                drafts: [...action.new_drafts],
            }
        case Action.ADDFAV:
            return {
                ...state,
                favourites: [...state.favourites, action.add_favourites],
            }
        case Action.SETFAVS:
            return {
                ...state,
                favourites: [...action.new_favourites],
            }
        case Action.CLEARDRAFTS:
            return {
                ...state,
                drafts: [],
            }
        case Action.CLEARFAVS:
            return {
                ...state,
                favourites: [],
            }
        case Action.LOADFAVS:
            return {
                ...state,
                load_favs: action.load,
            }
        case Action.LOADDRAFTS:
            return {
                ...state,
                load_drafts: action.load,
            }
        case Action.SETPLANNERS:
            return {
                ...state,
                planner: { ...action.new_planner },
            }
        case Action.CLEARPLANNER:
            return {
                drafts: [],
                favourites: [],
                load_favs: false,
                load_drafts: false,
                planner: null,
            }
        default:
            return state
    }
}
export default planner
