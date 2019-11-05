import React from 'react'
import { NavBar, SearchBar, Explore, NearBy, Insurance } from '../components'

const Home = () => (
    <div className='home-page'>
        <NavBar design='default' />
        <SearchBar />
        <Explore />
        <NearBy />
        <Insurance />
    </div>
)
export default Home
