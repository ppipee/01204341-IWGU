import React, { Component } from 'react'
import { connect } from 'react-redux'
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
                    <SearchBar val={this.props.word}/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        word:state.searching.word
    }
}
const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter)