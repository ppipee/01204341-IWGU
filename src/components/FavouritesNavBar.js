import React, { Component } from 'react'
import NavBar from './NavBar'
import '../assets/scss/favouritesnavbar.scss'
import FavouritesBG from '../assets/img/favourites-navbar.svg'
import SubFavouritesBG from '../assets/img/sub-favourites-navbar.svg'
import SubSecFavouritesBG from '../assets/img/sub2-favourites-navbar.svg'
import { HeartWhite } from './Icon'

class FavouritesNavBar extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
                <NavBar back design='favourites' mytrips={false} />
                <img
                    className='sub-fav-bg'
                    src={SubFavouritesBG}
                    alt='sub-favourites'
                />
                <img
                    className='sub-sec-fav-bg'
                    src={SubSecFavouritesBG}
                    alt='sub-sec-favourites'
                />
                <img
                    className='fav-bg'
                    src={FavouritesBG}
                    alt='favourites-navbar'
                />
                <div className='favourites-navbar'>
                    <img src={HeartWhite} alt='heart-white' />
                    <span>Favourties</span>
                    <img src={HeartWhite} alt='heart-white' />
                </div>
            </div>
        )
    }
}
export default FavouritesNavBar
