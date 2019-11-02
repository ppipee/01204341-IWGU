import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { compose } from 'redux'
import { Link, withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'
import { GoogleApiWrapper } from 'google-maps-react'
import '../assets/scss/searchresult.scss'
import { SearchResultTab } from './Initial'
import { Time, PinkLocationIcon, Star, BlankStar } from './Icon'
import { searchPlace } from '../queries/place'

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
                                    {this.genStar(place.rate)}
                                    <span className='dot' />
                                    <span className='category'>
                                        {place.categoryCode}
                                    </span>
                                </div>
                                <div className='line3'>
                                    <img alt='time' src={Time} />
                                    <span className='time'>9.00-22.00</span>
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
        // console.log(
        //     'loading: ',
        //     this.state.loading,
        //     ' location: ',
        //     this.state.userLocation
        //     )
        // console.log(this.props.search.places)
        if (this.props.search.loading) {
            return <div className='search-result'>Loading</div>
        }
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
