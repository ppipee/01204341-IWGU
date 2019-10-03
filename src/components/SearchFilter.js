/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import '../assets/scss/searchfilter.scss'
import Filter from '../assets/icon/filter.svg'
import FilterActive from '../assets/icon/filter-active.svg'

class SearchFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: false,
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside)
    }

    setWrapperRef = node => { this.wrapperRef = node }

    handleClickOutside = event => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ filter: false })
        }
    }

    clickFilter = () =>
        this.setState(prevState => ({ filter: !prevState.filter }))

    actionFilter() {
        const source = this.state.filter ? FilterActive : Filter
        return <img src={source} alt="source" onClick={this.clickFilter} />
    }

    showFilter() {
        if (this.state.filter) {
            return (
                <div
                    className="filter-box open"
                    ref={this.setWrapperRef}
                />
            )
        }
        return <div className="filter-box" ref={this.setWrapperRef} />
    }

    render() {
        return (
            <div className='search-filter'>
                <div className='search-bar'>
                    <SearchBar val={this.props.word} />
                    {this.actionFilter()}
                </div>
                {this.showFilter()}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        word: state.searching.word,
    }
}
const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchFilter)
