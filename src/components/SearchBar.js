import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { SearchAction } from '../action'
import "../assets/scss/searchbar.scss"
import { SearchIcon } from './Icon'

const Action = SearchAction
const tags = [
    'coffee shop',
    'street food',
    'folk villages',
    'landmark',
    'souvenir shop',
    'park',
]
// const tags =[]
class SearchBar extends Component {
    constructor(props) {
        super(props)
        const { val } = this.props
        this.state = {
            search_word: val === undefined ? '' : val,
            show: false,
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
            this.setState({ show: false })
        }
    }

    showSearch = () => this.setState({ show: true })

    handleChange = event => {
        const word = event.target.value
        const show = word.length !== 0
        this.setState({
            search_word: word,
            show,
        })
    }

    swapPage = e => {
        if (e.target.value !== '' && e.charCode === 13) {
            const { setWord, history } = this.props
            setWord(e.target.value)
            history.push(`/search`)
        }
    }

    genTag = () =>
        tags.map((tag) => (
            <div className='tag' key={tag.id}>
                {tag}
            </ div>
        ))

    searchArea() {
        if (this.state.show) {
            return (
                <div className='search-box open' ref={this.setWrapperRef}>
                    <div className='search-area'>
                        <div className='search-category'>
                            <span>Popular category</span>
                            <div className='search-tag'>{this.genTag()}</div>
                        </div>
                        <div className='search-history'>Search History</div>
                    </div>
                </div>
            )
        }
        return <div className='search-box' />
    }


    render() {
        return (
            <div className='search'>
                <div className='input'>
                    <img src={SearchIcon} alt='search-icon' />
                    <input
                        placeholder='Search'
                        onChange={this.handleChange}
                        onClick={this.showSearch}
                        value={this.state.search_word}
                        onKeyPress={this.swapPage}
                    />
                </div>
                {this.searchArea()}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setWord: word => dispatch({ type: Action.WORDSEARCH, setWord: word }),
    }
}

export default compose(
    withRouter,
    connect(
        null,
        mapDispatchToProps
    )
)(SearchBar)
