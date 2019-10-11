import React from 'react'
import { NavBar, SearchBar, Explore, NearBy } from '../components'

const Home = () => (
    <div className='home-page'>
        <NavBar />
        <SearchBar />
        <Explore />
        <NearBy />
    </div>
)
export default Home
