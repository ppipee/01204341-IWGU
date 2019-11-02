import React, { Component } from 'react'
import { FavouritesNavBar, FavouritesCard } from '../components'

class Favourites extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className='favourite-page'>
                <FavouritesNavBar />
                <FavouritesCard />
            </div>
        )
    }
}
export default Favourites
