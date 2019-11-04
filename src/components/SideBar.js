import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Link } from 'react-router-dom'
import Swipe from 'react-easy-swipe'
import { Skeleton } from 'antd'
import '../assets/scss/sidebar.scss'
import { userDrafts, updateDrafts } from '../queries/user'
import { UserAuthAction, PlannersAction } from '../action'
import { Airplane, Search, Fav, Back, Trash, Info } from './Icon'

class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            block_swipe: false,
            index: [],
        }
    }

    async componentDidMount() {
        if (!this.props.getLoadDrafts)
            await this.props.userDrafts.refetch({ id: this.props.id })
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.userDrafts.loading &&
            !this.props.userDrafts.loading &&
            !this.props.getLoadDrafts
        ) {
            const fav_places = this.props.userDrafts.user.draft
            this.props.setfavs(fav_places)
            this.props.setloaddrafts(true)
        }
    }

    sliceAnimation = (direction, target) => {
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                if (direction === 'left') target.scrollBy(1, 0)
                else target.scrollBy(-2, 0)
            }, 200)
        }
    }

    onSwipeMove = (position, event) => {
        if (this.state.block_swipe) {
            const index = event.target.getAttribute('index')
            const target = event.target.parentElement
            if (position.x <= -30) {
                this.sliceAnimation('left', target)
                if (!this.state.index.includes(index))
                    this.setState({ index: [...this.state.index, index] })
            } else if (position.x >= 30 && this.state.index.includes(index)) {
                this.sliceAnimation('right', target)
                const pos = this.state.index.indexOf(index)
                const new_index = this.state.index
                new_index.splice(pos, 1)
                this.setState({ index: new_index })
            }
        }
    }

    removeFav = e => {
        const pointer = e.target.getAttribute('index')
        const new_drafts = this.props.getDrafts
        new_drafts.splice(pointer, 1)
        this.props.updateDrafts({
            variables: {
                id: this.props.id,
                draft: new_drafts.map(place => {
                    return {
                        placeID: place.placeID,
                        categoryCode: place.categoryCode,
                    }
                }),
            },
        })
        this.props.setfavs(new_favs)
        this.setState({ block_swipe: false })
    }

    genAddToDraft = () => {
        let container = []
        if (this.props.username === '')
            container = (
                <div className='signin-sidebar'>
                    Please <Link to='/auth'>Sign in</Link> <br /> to create a
                    new trip
                </div>
            )
        else if (
            this.props.userDrafts.loading ||
            this.props.userDrafts.error !== undefined
        ) {
            console.log('loading')
            container = [...Array(5).keys()].map(index => (
                <div className='loading' key={`skeleton-fav-${index}`}>
                    <div className='draft-container'>
                        <div className='draft'>
                            <Skeleton active paragraph={false} />
                        </div>
                        <div className='draft-line' />
                    </div>
                </div>
            ))
        } else {
            const places = !this.props.getLoadDrafts
                ? this.props.userDrafts.user.draft
                : this.props.getDrafts
            if (places.length > 0) {
                places.forEach((place, index) => {
                    if (places.length <= 5 || +index >= places.length - 5) {
                        container = [
                            ...container,
                            <div key={place.placeID}>
                                <div className='draft-container'>
                                    <Swipe
                                        className='draft'
                                        index={index}
                                        onSwipeStart={() =>
                                            this.setState({ block_swipe: true })
                                        }
                                        onSwipeMove={this.onSwipeMove}
                                        onSwipeEnd={() =>
                                            this.setState({
                                                block_swipe: false,
                                            })
                                        }
                                    >
                                        <div className='draft-fav'>
                                            <div
                                                className={`name-fav ${
                                                    place.name.length > 40
                                                        ? 'overflow'
                                                        : ''
                                                }`}
                                            >
                                                {place.name}
                                            </div>
                                        </div>
                                        <div className='manage-fav'>
                                            <div
                                                className='rm-fav'
                                                index={index}
                                                onClick={this.removeFav}
                                            >
                                                <Trash fill='#fff' />
                                            </div>
                                            <Link
                                                to={`/detail?place=${place.placeID}&code=${place.categoryCode}`}
                                            >
                                                <div className='info-fav'>
                                                    <Info fill='#fff' />
                                                </div>
                                            </Link>
                                        </div>
                                    </Swipe>
                                    <div className='draft-line' />
                                </div>
                                <div
                                    className={`overflow ${
                                        place.name.length > 35
                                            ? 'active'
                                            : 'inactive'
                                    }`}
                                />
                            </div>,
                        ]
                    }
                })
            }
        }
        return (
            <div className='add-to-draft'>
                <div className='head-add-to-draft'>
                    <div className='line' />
                    <div className='head-title'>Added to draft</div>
                    <div className='line right' />
                </div>
                <div
                    className={`add-draft ${
                        this.props.username === '' ? 'blank' : ''
                    }`}
                >
                    {container}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className='sidebar'>
                <div className='head-sidebar'>
                    <div className='hello-user'>
                        <div className='img-profile' />
                        Hello,&nbsp;
                        <div
                            className={`user-sidebar ${
                                this.props.username !== '' ? 'user' : ''
                            }`}
                        >
                            {this.props.username !== ''
                                ? this.props.username
                                : 'Traveler'}
                        </div>
                    </div>
                    <div className='close-navbar' onClick={this.props.close}>
                        <Back
                            width='13'
                            height='21'
                            fill='#F2B099'
                            stroke='none'
                        />
                    </div>
                </div>
                {this.genAddToDraft()}
                <div className='manage-sidebar'>
                    <Link to='/mytrips'>
                        <div>
                            <Airplane fill='#F2B099' size='15' />
                            <span>My trips</span>
                        </div>
                    </Link>
                    <Link to='/favourites'>
                        <div>
                            <Fav fill='#F2B099' width='15' height='15' />
                            <span>Favourite</span>
                        </div>
                    </Link>
                    <Link to='/search'>
                        <div className='search-sidebar'>
                            <Search fill='#F2B099' size='15' />
                            <span>Search</span>
                        </div>
                    </Link>
                    <span
                        className={`signout ${
                            this.props.username === '' ? 'hide' : ''
                        }`}
                        onClick={this.props.signout}
                    >
                        Sign out
                    </span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        id: state.userauth.userid,
        username: state.userauth.username,
        getDrafts: state.planner.drafts,
        getLoadDrafts: state.planner.load_drafts,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signout: () => dispatch({ type: UserAuthAction.SIGNOUT }),
        setfavs: drafts =>
            dispatch({ type: PlannersAction.SETDRAFTS, new_drafts: drafts }),
        setloaddrafts: status =>
            dispatch({ type: PlannersAction.LOADDRAFTS, load: status }),
    }
}
export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    graphql(userDrafts, {
        name: 'userDrafts',
        options: props => {
            return {
                variables: {
                    id: props.id,
                },
            }
        },
    }),
    graphql(updateDrafts, { name: 'updateDrafts' })
)(SideBar)
