import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../components'
import { PaperAirplane } from '../components/Icon'
import NotFound from '../assets/img/404.svg'
import '../assets/scss/notfoundpage.scss'

const NotFoundPage = props => (
    <div>
        <NavBar
            back
            design={props.design === undefined ? 'default' : 'planners'}
            mytrips={!props.design === 'planners'}
        />
        <div className='not-found-page'>
            <img className='background' src={NotFound} alt='404-img' />
            <div className='title'>
                <p className='title1'> Something went wrong </p>
                <p className='title2'> Please try again later </p>
            </div>
            <div className='button'>
                <Link to='/'>
                    <button className='explore-button'>
                        <div className='button'>
                            <span className='paperairplane-icon'>
                                <PaperAirplane fill='#fff' />
                            </span>
                            <p className='explore-title'> Explore </p>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    </div>
)
export default NotFoundPage
