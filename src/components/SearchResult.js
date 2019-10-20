import React, { Component } from 'react'
import '../assets/scss/searchresult.scss'
import { SearchPlaces } from './Demo'
import {
    AddActive,
    AddInActive,
    FavActive,
    FavInActive,
    Time,
    PinkLocationIcon,
    Star,
    BlankStar,
} from './Icon'

const tabs = [['add', AddActive, AddInActive], ['fav', FavActive, FavInActive]]
class SearchResult extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    genStar(ratting) {
        const container = []
        let i
        for (i = 0; i < ratting; i++) {
            container.push(<img alt='star' src={Star} />)
        }
        for (i = 0; i < 5 - ratting; i++) {
            container.push(<img alt='blank-star' src={BlankStar} />)
        }
        return <span>{container}</span>
    }

    genCards(places) {
        const box = []
        places.map(place =>
            box.push(
                <div className='card'>
                    <img
                        className='picture'
                        alt={place.name}
                        src={place.thumbnail}
                    />
                    <div className='content'>
                        <div className='line1'>{place.name}</div>
                        <div className='line-group'>
                            <div className='line2'>
                                <span className='rating'>
                                    {this.genStar(place.rate)}
                                </span>
                                <span className='dot' />
                                <span className='category'>
                                    {place.categoryCode}
                                </span>
                            </div>
                            <div className='line3'>
                                <img alt='time' src={Time} />
                                <span className='time'>{place.time}</span>
                            </div>
                            <div className='line4'>
                                <img alt='location' src={PinkLocationIcon} />
                                <span className='map'>e</span>
                                <span className='dot' />
                                <span className='location'>
                                    {place.location.district},
                                    {place.location.province}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='add-fav'>
                        <div className='add'>ew</div>
                        <div className='fav'>we</div>
                    </div>
                </div>
            )
        )
        return <div>{box}</div>
    }

    render() {
        return <div className='SearchResult'>{this.genCards(SearchPlaces)}</div>
    }
}
export default SearchResult
