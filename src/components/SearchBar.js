import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import '../assets/scss/searchbar.scss'
import { Search } from './Icon'

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

    setWrapperRef = node => {
        this.wrapperRef = node
    }

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

    genTag = () =>
        tags.map(tag => (
            <div className='tag' key={tag}>
                {tag}
            </div>
        ))

    swapPage = e => {
        const { value } = e.target
        if (value !== '' && e.charCode === 13) {
            this.setState({ show: false })
            this.props.history.push(`/search?q=${value}`)
        }
    }

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
                    <Search fill='#B0B0B0' size='16' alt='search-icon' />
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

export default withRouter(SearchBar)
