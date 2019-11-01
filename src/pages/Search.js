import React from 'react'
import { NavBar, SearchFilter, SearchResult } from '../components'
import '../assets/scss/searchpage.scss'
import SearchBackground from '../assets/img/fixed-background.svg'

const Search = () => {
    return (
        <div className='search-page'>
            <img
                className='search-background'
                alt='search-bg'
                src={SearchBackground}
            />
            <NavBar back />
            <SearchFilter />
            <SearchResult />
        </div>
    )
}

export default Search
