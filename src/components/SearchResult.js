import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'
import { GoogleApiWrapper } from 'google-maps-react'
import '../assets/scss/searchresult.scss'
import { PlannersAction } from '../action'
import { Time, PinkLocationIcon, Star, NoResult, Add, Fav } from './Icon'
import { searchPlace } from '../queries/place'
import { userAllFavourites, updateFavourites } from '../queries/user'
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

    async componentDidMount() {
        const search = new URLSearchParams(this.props.location.search)
        const keyword = search.get('q')
        await this.props.search.refetch({ keyword })
        await this.props.userFavourites.refetch({ id: this.props.id })
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

    setDrafts = (id, code) => {
        const draft = {
            placeID: id,
            categoryCode: code,
        }
        const places = this.props.getDrafts.map(place => place.placeID)
        console.log(places)
        if (!places.includes(draft.placeID)) this.props.adddraft(draft)
        else {
            const new_draft = this.props.getDrafts
            console.log(places.indexOf(id))
            new_draft.splice(places.indexOf(id), 1)
            this.props.setdraft(new_draft)
        }
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
        const add = this.props.getDrafts.map(key => key.placeID)
        const fav = this.state.fav.map(key => key.placeID)
        return (
            <div className='add-fav'>
                <div
                    className={`add ${add.includes(id) ? 'active' : ''}`}
                    onClick={() => this.setDrafts(id, code)}
                >
                    <span className='icon'>
                        {add.includes(id) ? (
                            <Add stroke='#fff' />
                        ) : (
                            <Add stroke='#B0B0B0' />
                        )}
                    </span>
                </div>
                <div
                    className={`fav ${fav.includes(id) ? 'active' : ''}`}
                    onClick={this.toggle}
                    name='fav'
                    place_id={id}
                    code={code}
                >
                    <span className='icon'>
                        {fav.includes(id) ? (
                            <Fav fill='#fff' />
                        ) : (
                            <Fav fill='#B0B0B0' />
                        )}
                    </span>
                </div>
            </div>
        )
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
    connect(
        state => {
            return {
                getDrafts: state.planner.drafts,
            }
        },
        dispatch => {
            return {
                adddraft: draft =>
                    dispatch({
                        type: PlannersAction.ADDDRAFT,
                        add_draft: draft,
                    }),
                setdraft: drafts =>
                    dispatch({
                        type: PlannersAction.SETDRAFT,
                        new_draft: drafts,
                    }),
            }
        }
    ),
    withRouter,
    GoogleApiWrapper({
        apiKey: process.env.MAP_KEY,
    }),
    graphql(searchPlace, { name: 'search' }),
    graphql(userAllFavourites, { name: 'userFavourites' }),
    graphql(updateFavourites, { name: 'updateFavourites' })
)(SearchResult)
