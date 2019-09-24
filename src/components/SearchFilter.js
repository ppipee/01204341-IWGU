import React, { Component } from 'react'
import SearchBar from './SearchBar'
import '../assets/scss/searchfilter.scss'
class SearchFilter extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div className="search-filter">
                <div className="search-bar">
                    <SearchBar />
                </div>
            </div>
        )
    }
}
export default SearchFilter