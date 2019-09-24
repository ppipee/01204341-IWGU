import React from 'react'
import NavBar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import Explore from '../components/Explore'
import NearBy from '../components/NearBy'

const Home = () => (
    <div className='home-page'>
        <NavBar />
        <SearchBar />
        <Explore />
        <NearBy />
    </div>
)
export default Home