import React, { Component } from 'react'
import { compose } from 'redux'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import { GoogleApiWrapper } from 'google-maps-react'
import { nearBy } from '../queries/place'
import '../assets/scss/nearby.scss'
import {
    LocationIcon,
    RestaurantActive,
    RestaurantInActive,
    LandmarkActive,
    LandmarkInActive,
    TreeActive,
    TreeInActive,
    SleepActive,
    SleepInActive,
} from './Icon'
import ImageNotFound from '../assets/img/image-not-found.svg'

const tabs = [
    ['RESTAURANT', RestaurantActive, RestaurantInActive],
    ['ATTRACTION', LandmarkActive, LandmarkInActive],
    ['SHOP', TreeActive, TreeInActive],
    ['ACCOMMODATION', SleepActive, SleepInActive],
]
class NearBy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            radius: 7000,
            no: 15,
            cur_state: 'RESTAURANT',
            tab_state: {
                RESTAURANT: true,
                ATTRACTION: false,
                SHOP: false,
                ACCOMMODATION: false,
            },
            location: {
                latitude: 32,
                longitude: 32,
            },
            loading: true,
            places: {
                RESTAURANT: [],
                ATTRACTION: [],
                SHOP: [],
                ACCOMMODATION: [],
            },
        }
    }

    componentDidMount() {
        if (this.props.location === undefined) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords
                    this.setState({
                        location: { latitude, longitude },
                        loading: false,
                    })
                    this.props.nearby
                        .refetch({
                            categoryCode: 'RESTAURANT',
                            radius: this.state.radius,
                            geolocation: `${latitude},${longitude}`,
                            no: this.state.no,
                        })
                        .then(res => {
                            this.setState({
                                places: {
                                    ...this.state.places,
                                    RESTAURANT: res.data.places,
                                },
                            })
                        })
                },
                () => {
                    this.setState({ loading: false })
                }
            )
        } else {
            const { latitude, longitude } = this.props.location
            this.props.nearby
                .refetch({
                    categoryCode: 'RESTAURANT',
                    radius: this.state.radius,
                    geolocation: `${latitude},${longitude}`,
                    no: this.state.no,
                })
                .then(res => {
                    this.setState({
                        location: { latitude, longitude },
                        loading: false,
                        places: {
                            ...this.state.places,
                            RESTAURANT: res.data.places,
                        },
                    })
                })
        }
    }

    componentDidUpdate(prevProp) {
        if (prevProp.nearby.loading && !this.props.nearby.loading) {
            const cur = this.state.cur_state
            this.setState({
                places: {
                    ...this.state.places,
                    [cur]: this.props.nearby.places,
                },
            })
        }
    }

    openContents = async category => {
        const new_state = { ...this.state.tab_state }
        Object.keys(new_state).forEach(key => {
            new_state[key] = false
        })
        const { latitude, longitude } = this.state.location
        new_state[category] = true
        this.setState({
            tab_state: new_state,
            cur_state: category,
        })

        const target = this.state.places[category]
        if (target.length === 0)
            await this.props.nearby.refetch({
                categoryCode: category,
                radius: this.state.radius,
                geolocation: `${latitude},${longitude}`,
                no: this.state.no,
            })
    }

    genPlace(places) {
        const box = []
        places.forEach(place => {
            box.push(
                <div key={place.placeID}>
                    <Link
                        to={`/detail?place=${place.placeID}&code=${place.categoryCode}`}
                    >
                        <img
                            className='picture'
                            alt={place.name}
                            src={
                                place.thumbnail === ''
                                    ? ImageNotFound
                                    : place.thumbnail
                            }
                        />
                        <div className='name'>{place.name}</div>
                    </Link>
                </div>
            )
        })
        return <div className='tab-content'>{box}</div>
    }

    genTabs() {
        const tabbar = []
        tabs.forEach(tab => {
            let tabInActive = tab[2]
            const [category, tabActive] = tab
            let active = ''
            if (this.state.tab_state[category]) {
                active = ' active'
                tabInActive = tabActive
            }
            tabbar.push(
                <div
                    className={`icon${active}`}
                    key={`tab-${category}`}
                    onClick={() => this.openContents(category)}
                >
                    <img alt='icon-tab' src={tabInActive} />
                </div>
            )
        })
        return <div className='wave'>{tabbar}</div>
    }

    render() {
        if (this.state.loading || this.props.nearby.loading)
            return (
                <div className='nearby'>
                    <div className='head'>
                        <img
                            className='location-icon'
                            alt='location-icon'
                            src={LocationIcon}
                        />
                        <span className='nearby-you'>
                            {this.props.this ? 'Nearby this' : 'Nearby you'}
                        </span>
                    </div>
                    <div className='body'>
                        {this.genTabs()}
                        <div className='picture-container'>Loading</div>
                    </div>
                </div>
            )
        return (
            <div className='nearby'>
                <div className='head'>
                    <img
                        className='location-icon'
                        alt='location-icon'
                        src={LocationIcon}
                    />
                    <span className='nearby-you'>
                        {this.props.this ? 'Nearby this' : 'Nearby you'}
                    </span>
                </div>
                <div className='body'>
                    {this.genTabs()}
                    <div className='picture-container'>
                        {this.state.tab_state[this.state.cur_state] &&
                            this.genPlace(
                                this.state.places[this.state.cur_state]
                            )}
                    </div>
                </div>
            </div>
        )
    }
}
export default compose(
    GoogleApiWrapper({
        apiKey: process.env.MAP_KEY,
    }),
    graphql(nearBy, { name: 'nearby' })
)(NearBy)
