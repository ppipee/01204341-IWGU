import React from 'react'
import { NavBar, SearchFilter, SearchResult } from '../components'
import Background from '../assets/img/fixed-background.svg'
import '../assets/scss/searchpage.scss'

const Search = () => {
    return (
        <div className='search-page'>
            <NavBar back />
            <div className='search-background'>
                <SearchFilter />
                <SearchResult />
            </div>
        </div>
    )
}

export default Search
