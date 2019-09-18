import React, { Component } from 'react'
import './../asset/scss/serchbar.scss'
import SearchIcon from '../asset/icon/search-icon.svg'

const tags = ['coffee shop', 'street food', 'folk villages', 'landmark', 'souvenir shop', 'park']
class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search_word: "",
            show: false,
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef = node => {
        console.log(node)
        this.wrapperRef = node
    }

    handleClickOutside = event => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ show: false })
        }
    }

    showSearch = () => {
        let show = false
        if (this.state.search_word.length !== 0)
            show = true
        this.setState({ show: show })
    }

    handleChange = event => {
        let word = event.target.value
        // console.log(word)
        let show = word.length !== 0 ? true : false
        // console.log(show)
        this.setState({
            search_word: word
            , show
        })
    }

    genTag = () => tags.map((tag, i) => <div className="tag" key={`tag ${i}`}>{tag}</div>)

    render() {
        return (
            <div className='search'>
                <div className='input'>
                    <img src={SearchIcon} />
                    <input placeholder='Search' onChange={this.handleChange} onClick={this.showSearch} value={this.state.search_word} />
                </div>
                {this.state.show &&
                    <div className='search-box' ref={this.setWrapperRef}>
                        <div className='search-area'>
                            <div className='search-category'>
                                <span>Popular category</span>
                                <div className='search-tag'>{this.genTag()}</div>
                            </div>
                            <div className='search-history'>Search History</div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
export default SearchBar
