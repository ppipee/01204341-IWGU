import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../assets/scss/searchresult.scss'
import { SearchPlaces } from './Demo'
import { Time, PinkLocationIcon, Star, BlankStar } from './Icon'

import { SearchResultTab } from './Initial'

class SearchResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            add: [],
            fav: [],
        }
    }

    toggle = event => {
        const id = event.target.getAttribute('place_id')
        const code = event.target.getAttribute('code')
        const name = event.target.getAttribute('name')
        let target = this.state[name]
        const object = { placeID: id, category: name }
        let check = false
        let index
        this.state[name].forEach((item, i) => {
            if (object.placeID === item.placeID) {
                check = true
                index = i
            }
        })
        if (check) target.splice(index, 1)
        else target = [...target, object]
        this.setState({
            [name]: target,
        })
    }

    genStar(ratting) {
        const container = []
        let i
        for (i = 0; i < ratting; i++) {
            container.push(<img alt='star' className='star' src={Star} />)
        }
        for (i = 0; i < 5 - ratting; i++) {
            container.push(
                <img alt='blank-star' className='star' src={BlankStar} />
            )
        }
        return <span className='rating'>{container}</span>
    }

    genTabs(id, code) {
        const tabbar = []
        SearchResultTab.forEach(tab => {
            const { name, icon_active, icon_inactive } = tab
            const object = { placeID: id, category: name }
            let check
            this.state[name].forEach(item => {
                if (object.placeID === item.placeID) check = true
            })
            tabbar.push(
                <div
                    id={`${name}`}
                    className={`${check ? 'active' : ''}`}
                    key={`${name}`}
                    onClick={this.toggle}
                    name={name}
                    place_id={id}
                    code={code}
                >
                    <img
                        alt='icon'
                        className='icon'
                        src={check ? icon_active : icon_inactive}
                    />
                </div>
            )
        })
        return <div className='add-fav'>{tabbar}</div>
    }

    genCards(places) {
        const box = []
        places.map(place =>
            box.push(
                <div className='card' key={`${place.placeID}`}>
                    <Link
                        to={`/detail?place=${place.placeID}, ?code=${place.categoryCode}`}
                    >
                        <img
                            className='picture'
                            alt={place.name}
                            src={place.thumbnail}
                        />
                    </Link>
                    <Link
                        className='go-to-detail'
                        to={`/detail?place=${place.placeID}&code=${place.categoryCode}`}
                    >
                        <div className='content'>
                            <div className='line1'>{place.name}</div>
                            <div className='line-group'>
                                <div className='line2'>
                                    {this.genStar(place.rate)}
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
                                    <img
                                        alt='location'
                                        src={PinkLocationIcon}
                                    />
                                    <div className='information'>
                                        <span className='map'>0.7 km</span>
                                        <span className='dot' />
                                        <span className='location'>
                                            {place.location.district},{' '}
                                            {place.location.province}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    {this.genTabs(place.placeID, place.categoryCode)}
                </div>
            )
        )
        return <div className='card-container'>{box}</div>
    }

    render() {
        return <div className='SearchResult'>{this.genCards(SearchPlaces)}</div>
    }
}
export default SearchResult
