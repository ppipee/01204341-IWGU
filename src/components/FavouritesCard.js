import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Skeleton } from 'antd'
import { userAllFavourites, updateFavourites } from '../queries/user'
import { Close, Star, Add } from './Icon'
import { PlannersAction } from '../action'
import '../assets/scss/favouritescard.scss'

class FavouritesCard extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    async componentDidMount() {
        if (!this.props.getLoadFavs)
            await this.props.userFavourites.refetch({ id: this.props.id })
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.userFavourites.loading &&
            !this.props.userFavourites.loading &&
            !this.props.getLoadFavs
        ) {
            const fav_places = this.props.userFavourites.user.favourite
            this.props.setfavs(fav_places)
            this.props.setloadfavs(true)
        }
    }

    removeFav = e => {
        console.log('click')
        const pointer = e.target.getAttribute('index')
        const new_favs = this.props.getFavs
        console.log(new_favs)
        new_favs.splice(pointer, 1)
        this.props.updateFavourites({
            variables: {
                id: this.props.id,
                favourite: new_favs.map(place => {
                    return {
                        placeID: place.placeID,
                        categoryCode: place.categoryCode,
                    }
                }),
            },
        })
        this.props.setfavs(new_favs)
    }

    genStar = rate => {
        const [rating, star] = rate === -1 ? [5, 'blank'] : [rate, 'full']

        return [...Array(rating).keys()].map(index => (
            <div className='rate-star' key={`rate-${index}`}>
                <Star star={star} size='14' />
            </div>
        ))
    }

    genCardFav = () => {
        const places = !this.props.getLoadFavs
            ? this.props.userFavourites.user.favourite
            : this.props.getFavs
        return places.map((place, index) => (
            <div className='fav-card' key={place.placeID}>
                <div className='thumbnail-card'>
                    <img src={place.thumbnail} alt='img-card' />
                </div>
                <div
                    className='remove-card'
                    index={+index}
                    onClick={this.removeFav}
                >
                    <Close fill='#fff' size='9' />
                </div>
                <div className='detail-card'>
                    <div className='title-card'>{place.name}</div>
                    <div className='sub-detail'>
                        <span className='category-card'>
                            {place.categoryCode}
                        </span>
                        <span className='location-card'>
                            {`${place.location.district}, ${place.location.province}`}
                        </span>
                        <div className='rate-card'>
                            {this.genStar(place.rate)}
                        </div>
                    </div>
                </div>
                <div
                    className='add-card'
                    onClick={() =>
                        this.setDraft(place.placeID, place.categoryCode)
                    }
                >
                    <Add size='17.5' stroke='#FCB7A0' />
                </div>
            </div>
        ))
    }

    genSkeleton = num =>
        [...Array(num).keys()].map(key => (
            <div className='fav-card' key={`skeleton-fav-${key}`}>
                <div className='thumbnail-card skeleton' />
                <div className='detail-card'>
                    <div className='title-card'>
                        <Skeleton active paragraph={false} />
                    </div>
                    <div className='sub-detail'>
                        <span className='category-card'>
                            <Skeleton active paragraph={false} />
                        </span>
                        <span className='location-card'>
                            <Skeleton active paragraph={false} />
                        </span>
                        <div className='rate-card'>{this.genStar(-1)}</div>
                    </div>
                </div>
            </div>
        ))

    setDraft = (id, code) => {
        const draft = {
            placeID: id,
            categoryCode: code,
        }
        const places = this.props.getDraft.map(place => place.placeID)
        if (!places.includes(draft.placeID)) this.props.adddraft(draft)
    }

    render() {
        if (
            this.props.userFavourites.loading ||
            this.props.userFavourites.error !== undefined ||
            !this.props.getLoadFavs
        )
            return <div className='favourites-cards'>{this.genSkeleton(4)}</div>
        return <div className='favourites-cards'>{this.genCardFav()}</div>
    }
}

const mapStateToProps = state => {
    return {
        id: state.userauth.userid,
        getDraft: state.planner.drafts,
        getFavs: state.planner.favourites,
        getLoadFavs: state.planner.load_favs,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setfavs: favs =>
            dispatch({ type: PlannersAction.SETFAVS, new_favourites: favs }),
        setloadfavs: status =>
            dispatch({ type: PlannersAction.LOADFAVS, load: status }),
        adddraft: draft =>
            dispatch({ type: PlannersAction.ADDDRAFT, add_draft: draft }),
    }
}

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    graphql(userAllFavourites, {
        name: 'userFavourites',
        // options: props => {
        //     return {
        //         variables: {
        //             id: props.id
        //         }
        //     }
        // }
    }),
    graphql(updateFavourites, { name: 'updateFavourites' })
)(FavouritesCard)
