import React, { Component } from 'react'
import { compose } from 'redux'
import { Link, withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'
import { GoogleApiWrapper } from 'google-maps-react'
import '../assets/scss/searchresult.scss'
import { SearchResultTab } from './Initial'
import { Time, PinkLocationIcon, Star, NoResult } from './Icon'
import { searchPlace } from '../queries/place'
import { Rate } from './Random'

class SearchResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            add: [],
            fav: [],
            userLocation: {
                latitude: 32,
                longitude: 32,
            },
            loading: true,
        }
    }

    componentDidMount() {
        const search = new URLSearchParams(this.props.location.search)
        const keyword = search.get('q')
        this.props.search.refetch({ keyword })
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords

                this.setState({
                    userLocation: { latitude, longitude },
                    loading: false,
                })
            },
            () => {
                this.setState({ loading: false })
            }
        )
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location.search !== this.props.location.search) {
            const search = new URLSearchParams(this.props.location.search)
            const keyword = search.get('q')
            let filters
            if (search.has('time')) {
                filters = {
                    time: search.get('time').split(' '),
                    sortby: search.get('sortby'),
                    rate: search.get('rate').split(' '),
                }
                if (search.has('tag'))
                    filters.tags = search.get('tags').split(' ')
            }
            this.props.search.refetch({ keyword })
        }
    }

    noneResult = () => {
        return (
            <div className='none-result'>
                <img src={NoResult} alt='none-result' />
                <div className='msg-title'>No result found</div>
                <div className='msg-alert'>
                    We can&rsquo;t find any items
                    <br />
                    matching your search
                </div>
            </div>
        )
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
            container.push(
                <span className='star'>
                    <Star star='full' size='12' />
                </span>
            )
        }
        for (i = 0; i < 5 - ratting; i++) {
            container.push(
                <span className='star'>
                    <Star star='blank' size='12' />
                </span>
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
                    <span className='icon'>
                        {check ? icon_active : icon_inactive}
                    </span>
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
                        className='link'
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
                                    {/* {this.genStar(place.rate)} */}
                                    {this.genStar(Rate())}
                                    <span className='dot' />
                                    <span className='category'>
                                        {place.categoryCode}
                                    </span>
                                </div>
                                <div className='line3'>
                                    <img alt='time' src={Time} />
                                    <span className='time'>
                                        8.00 AM - 4.00 PM
                                    </span>
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
        if (this.props.search.loading)
            return <div className='search-result'>Loading</div>
        if (this.props.search.error !== undefined)
            return <div className='search-result'>{this.noneResult()}</div>
        return (
            <div className='search-result'>
                {this.genCards(this.props.search.places)}
            </div>
        )
    }
}

export default compose(
    withRouter,
    GoogleApiWrapper({
        apiKey: process.env.MAP_KEY,
    }),
    graphql(searchPlace, { name: 'search' })
)(SearchResult)
