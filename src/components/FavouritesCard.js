import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Skeleton } from 'antd'
// import { userFavourite, updateFavourite } from '../queries/user'
import { UserAuthAction } from '../action'
import { SearchPlaces } from './Demo'
import { Close, Star, Add } from './Icon'
import '../assets/scss/favouritescard.scss'

class FavouritesCard extends Component {
    constructor() {
        super()
        this.state = {}
    }

    genStar = rate =>
        [...Array(rate).keys()].map(index => (
            <div className='rate-star' key={`rate-${index}`}>
                <Star star='full' size='14' />
            </div>
        ))

    genCardFav = () =>
        SearchPlaces.map(place => (
            <div className='fav-card' key={place.placeID}>
                <div className='thumbnail-card'>
                    <img src={place.thumbnail} alt='img-card' />
                </div>
                <div className='remove-card'>
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
                <div className='add-card'>
                    <Add size='17.5' stroke='#FCB7A0' />
                </div>
            </div>
        ))

    render() {
        return <div className='favourites-cards'>{this.genCardFav()}</div>
    }
}

const mapStateToProps = state => {
    return {
        id: state.userauth.userid,
        username: state.userauth.username,
    }
}
export default compose(
    // graphql(userFavourite, { name: 'userFavourite' }),
    // graphql(updateFavourite, { name: 'updateFavourite' }),
    connect(
        mapStateToProps,
        null
    )
)(FavouritesCard)
