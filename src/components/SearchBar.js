import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { SearchAction } from '../action'
import './../assets/scss/searchbar.scss'
import { SearchIcon } from './Icon'

const Action = SearchAction
const tags = ['coffee shop', 'street food', 'folk villages', 'landmark', 'souvenir shop', 'park',]
// const tags =[]
class SearchBar extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.val)
        this.state = {
            search_word: this.props.val === undefined ? "" : this.props.val,
            show: false,
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside)
    }

    setWrapperRef = node => this.wrapperRef = node

    handleClickOutside = event => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ show: false })
        }
    }

    showSearch = () => this.setState({ show: true })

    handleChange = event => {
        let word = event.target.value
        let show = word.length !== 0 ? true : false
        this.setState({
            search_word: word
            , show
        })
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
        return (<div className='search-box' />)
    }

    genTag = () => tags.map((tag, i) => <div className="tag" key={`tag ${i}`}>{tag}</div>)

    swapPage = e => {
        if (e.target.value !== "" && e.charCode == 13) {
            this.props.setWord(e.target.value)
            this.props.history.push(`/search`)
        }
    }

    render() {
        return (
            <div className='search'>
                <div className='input'>
                    <img src={SearchIcon} />
                    <input placeholder='Search' onChange={this.handleChange} onClick={this.showSearch} value={this.state.search_word} onKeyPress={this.swapPage}/>
                </div>
                {this.searchArea()}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setWord: (word) => dispatch({ type: Action.WORDSEARCH, setWord: word })
    }
}

export default connect(null, mapDispatchToProps)(withRouter(SearchBar))
