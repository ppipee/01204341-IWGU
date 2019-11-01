import React, { Component } from 'react'
import '../assets/scss/favouritescard.scss'
import { SearchPlaces } from './Demo'

class FavouritesCard extends Component {
    constructor() {
        super()
        this.state = {}
    }

    genCardFav = () =>
        SearchPlaces.map(place => (
            <div className='fav-card' key={place.placeID}>
                <div className='thumbnail-card'>
                    <img src={place.thumbnail} alt='img-card' />
                </div>
                <div className='remove-card'>x</div>
                <div className='detail-card'>
                    <div className='title-card'>{place.name}</div>
                    <div className='sub-detail'>
                        <span className='category-card'>
                            {place.categoryCode}
                        </span>
                        <span className='location-card'>
                            {`${place.location.province} ${place.location.district}`}
                        </span>
                        <div className='rate-card'>{place.rate}</div>
                    </div>
                </div>
                <div className='add-card'>+</div>
            </div>
        ))

    render() {
        return <div className='favourites-card'>{this.genCardFav()}</div>
    }
}
export default FavouritesCard
