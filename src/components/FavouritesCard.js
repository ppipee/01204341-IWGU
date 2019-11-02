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
    constructor() {
        super()
        this.state = {
            favourites: [],
        }
    }

    async componentDidMount() {
        await this.props.userFavourites.refetch({ id: this.props.id })
        this.setState({ favourites: this.props.userFavourites.user.favourite })
    }

    removeFavs = e => {
        const pointer = e.target.getAttribute('index')
        const new_fav = this.props.userFavourites.user.favourite
        new_fav.splice(pointer, 1)
        console.log(new_fav)
        this.props.updateFavourites({
            variables: {
                id: this.props.id,
                favourite: new_fav.map(place => {
                    return {
                        placeID: place.placeID,
                        categoryCode: place.categoryCode,
                    }
                }),
            },
            refetchQueries: [
                {
                    query: userAllFavourites,
                },
            ],
        })
        this.setState({ favourites: this.props.userFavourites.user.favourite })
    }

    genStar = rate => {
        const [rating, star] = rate === -1 ? [5, 'blank'] : [rate, 'full']

        return [...Array(rating).keys()].map(index => (
            <div className='rate-star' key={`rate-${index}`}>
                <Star star={star} size='14' />
            </div>
        ))
    }

    genCardFav = () =>
        this.state.favourites.map((place, index) => (
            <div className='fav-card' key={place.placeID}>
                <div className='thumbnail-card'>
                    <img src={place.thumbnail} alt='img-card' />
                </div>
                <div
                    className='remove-card'
                    index={+index}
                    onClick={this.removeFavs}
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
            this.props.userFavourites.error !== undefined
        )
            return <div className='favourites-cards'>{this.genSkeleton(4)}</div>
        return <div className='favourites-cards'>{this.genCardFav()}</div>
    }
}

export default compose(
    graphql(userAllFavourites, { name: 'userFavourites' }),
    graphql(updateFavourites, { name: 'updateFavourites' }),
    connect(
        state => {
            return {
                id: state.userauth.userid,
                getDraft: state.planner.drafts,
            }
        },
        dispatch => {
            return {
                adddraft: draft =>
                    dispatch({
                        type: PlannersAction.ADDDRAFT,
                        add_draft: draft,
                    }),
            }
        }
    )
)(FavouritesCard)
