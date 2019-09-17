import React from 'react'
import '../asset/scss/home.scss'
import NavBar from '../components/Navbar'
import SerchBar from '../components/SerchBar'
import Explore from '../components/Explore'
import NearBy from '../components/NearBy'

const Home = () => (
    <div className='home-page'>
        <NavBar />
        <SerchBar />
        <Explore />
        <NearBy />
    </div>
)
export default Home