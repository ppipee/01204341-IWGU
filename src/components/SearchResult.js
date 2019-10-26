import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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

const tabs = [
    {
        name: 'add',
        icon_active: AddActive,
        icon_inactive: AddInActive,
    },
    {
        name: 'fav',
        icon_active: FavActive,
        icon_inactive: FavInActive,
    },
]
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
        const object = { placeID: id, chut: name }
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
        console.log(this.state)
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

    genTabs(id, code) {
        const tabbar = []
        tabs.forEach(tab => {
            const { name, icon_active, icon_inactive } = tab
            const object = { placeID: id, chut: name }
            let check
            this.state[name].forEach(item => {
                if (object.placeID === item.placeID) check = true
            })
            tabbar.push(
                <div
                    id={`${name}`}
                    className={`${check ? 'active' : ''}`}
                    onClick={this.toggle}
                    name={name}
                    place_id={id}
                    code={code}
                >
                    <img alt='' src={check ? icon_active : icon_inactive} />
                </div>
            )
        })
        return <div className='add-fav'>{tabbar}</div>
    }

    genCards(places) {
        const box = []
        places.map(place =>
            box.push(
                <div className='card'>
                    <Link to='/detail?sort={place.placeID, place.categoryCode}'>
                        <img
                            className='picture'
                            alt={place.name}
                            src={place.thumbnail}
                        />
                    </Link>
                    <Link
                        className='go-to-detail'
                        to='/detail?sort={place.placeID, place.categoryCode}'
                    >
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
                                    <img
                                        alt='location'
                                        src={PinkLocationIcon}
                                    />
                                    <span className='map'>e</span>
                                    <span className='dot' />
                                    <span className='location'>
                                        {place.location.district},
                                        {place.location.province}
                                    </span>
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
