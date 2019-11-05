import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { FavouritesNavBar, FavouritesCard } from '../components'

class Favourites extends Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        if (this.props.getUser === '') this.props.history.push('/auth')
    }

    render = () => (
        <div className='favourite-page'>
            <FavouritesNavBar />
            <FavouritesCard />
        </div>
    )
}
export default compose(
    withRouter,
    connect(state => {
        return { getUser: state.userauth.username }
    })
)(Favourites)
