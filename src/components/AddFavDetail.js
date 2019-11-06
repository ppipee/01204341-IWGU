import React, { Component } from 'react'
import { compose } from 'redux'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { PlannersAction } from '../action'
import { Add, Fav } from './Icon'
import { removeItemFromList } from './main'
import {
    userFavourites,
    updateFavourites,
    userDrafts,
    updateDrafts,
} from '../queries/user'
import '../assets/scss/addfavdetail.scss'

class AddFavDetail extends Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        if (!this.props.getLoadDrafts && this.props.userID !== '')
            this.props.userDrafts.refetch({ id: this.props.userID })
        if (!this.props.getLoadFavs && this.props.userID !== '')
            this.props.userFavourites.refetch({ id: this.props.userID })
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.userFavourites.loading &&
            !this.props.userFavourites.loading &&
            !this.props.getLoadFavs &&
            this.props.userFavourites.variables.id !== undefined
        ) {
            const fav_places = this.props.userFavourites.user.favourite
            this.props.setfavs(fav_places)
            this.props.setloadfavs(true)
        }
        if (
            prevProps.userDrafts.loading &&
            !this.props.userDrafts.loading &&
            !this.props.getLoadDrafts &&
            this.props.userDrafts.variables.id !== undefined
        ) {
            const draft_places = this.props.userDrafts.user.draft
            this.props.setdrafts(draft_places)
            this.props.setloaddrafts(true)
        }
    }

    setDrafts = place => {
        const { placeID, categoryCode, name } = place
        const draft = {
            placeID,
            categoryCode: categoryCode.toLowerCase(),
            name,
        }
        const places = this.props.getDrafts.map(place => place.placeID)
        let new_drafts
        // ADD
        if (!places.includes(placeID)) {
            new_drafts = [...this.props.getDrafts, draft]
            this.props.adddraft(draft)
        }
        // REMOVE
        else {
            new_drafts = removeItemFromList(
                this.props.getDrafts,
                placeID,
                places
            )
            this.props.setdrafts(new_drafts)
        }

        this.props.updateDrafts({
            variables: {
                id: this.props.userID,
                draft: new_drafts.map(place => {
                    return {
                        placeID: place.placeID,
                        categoryCode: place.categoryCode,
                    }
                }),
            },
        })
    }

    setFavs = place => {
        const { placeID, categoryCode, rate, thumbnail, name, location } = place
        const draft = {
            placeID,
            categoryCode: categoryCode.toLowerCase(),
            name,
            thumbnail,
            rate,
            location,
        }
        // console.log("draft:", draft)
        const favs_id = this.props.getFavs.map(place => place.placeID)
        let new_favs
        // ADD
        if (!favs_id.includes(placeID)) {
            new_favs = [...this.props.getFavs, draft]
            this.props.addfav(draft)
        }
        // REMOVE
        else {
            new_favs = removeItemFromList(this.props.getFavs, placeID, favs_id)
            this.props.setfavs(new_favs)
        }

        this.props.updateFavourites({
            variables: {
                id: this.props.userID,
                favourite: new_favs.map(place => {
                    return {
                        placeID: place.placeID,
                        categoryCode: place.categoryCode,
                    }
                }),
            },
        })
    }

    render() {
        if (
            this.props.userFavourites.loading ||
            this.props.userDrafts.loading
        ) {
            return (
                <>
                    <span className='add-btn-detail'>
                        <Add stroke='#fff' />
                    </span>
                    <span className='fav-btn-detail'>
                        <Fav fill='#fff' />
                    </span>
                </>
            )
        }
        let add =
            !this.props.getLoadDrafts && this.props.userDrafts.user
                ? this.props.userDrafts.user.draft
                : this.props.getDrafts
        add = add.map(key => key.placeID)
        let fav =
            !this.props.getLoadFavs && this.props.userFavourites.user
                ? this.props.userFavourites.user.favourite
                : this.props.getFavs
        fav = fav.map(key => key.placeID)
        return (
            <>
                <span
                    className={`add-btn-detail ${
                        add.includes(this.props.places.placeID) ? 'active' : ''
                    }`}
                    onClick={() => this.setDrafts(this.props.places)}
                >
                    <Add stroke='#fff' />
                </span>
                <span
                    className={`fav-btn-detail ${
                        fav.includes(this.props.places.placeID) ? 'active' : ''
                    }`}
                    onClick={() => this.setFavs(this.props.places)}
                >
                    <Fav fill='#fff' />
                </span>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        userID: state.userauth.userid,
        getDrafts: state.planner.drafts,
        getFavs: state.planner.favourites,
        getLoadFavs: state.planner.load_favs,
        getLoadDrafts: state.planner.load_drafts,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        adddraft: draft =>
            dispatch({
                type: PlannersAction.ADDDRAFT,
                add_draft: draft,
            }),
        setdrafts: drafts =>
            dispatch({
                type: PlannersAction.SETDRAFTS,
                new_drafts: drafts,
            }),
        setloaddrafts: status =>
            dispatch({ type: PlannersAction.LOADDRAFTS, load: status }),
        addfav: fav =>
            dispatch({ type: PlannersAction.ADDFAV, add_favourites: fav }),
        setfavs: favs =>
            dispatch({ type: PlannersAction.SETFAVS, new_favourites: favs }),
        setloadfavs: status =>
            dispatch({ type: PlannersAction.LOADFAVS, load: status }),
    }
}
export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    graphql(userFavourites, { name: 'userFavourites' }),
    graphql(updateFavourites, { name: 'updateFavourites' }),
    graphql(userDrafts, { name: 'userDrafts' }),
    graphql(updateDrafts, { name: 'updateDrafts' })
)(AddFavDetail)
