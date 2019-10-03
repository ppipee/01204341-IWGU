import React from 'react'
import NavBar from '../components/Navbar'
import SearchFilter from '../components/SearchFilter'
import SearchResult from '../components/SearchResult'
import Background from '../assets/img/fixed-background.svg'
import '../assets/scss/searchpage.scss'

const Search = () => {
    return (
        <div className='search-page'>
            <NavBar back />
            <div
                className='search-background'
                style={{ backgroundImage: `url(${Background})` }}
            >
                <SearchFilter />
                <SearchResult />
            </div>
        </div>
    )
}

export default Search
