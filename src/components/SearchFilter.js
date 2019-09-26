import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import '../assets/scss/searchfilter.scss'
import { SearchIcon, Filter, FilterActive, Clear, Star, BlankStar, Close } from './Icon'
import { Slider } from 'antd'

// const tags = ['coffee shop', 'street food', 'landmark']
const tags = []

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

    setWrapperRef = node => this.wrapperRef = node

    handleClickOutside = event => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target) && !this.state.filter) {
            this.setState({ filter: false })
        }
    }

    clickFilter = () => this.setState(prevState => ({ filter: !prevState.filter }))

    actionFilter() {
        let [source, name] = this.state.filter ? [FilterActive, "-active"] : [Filter, ""]
        return (<img className={`img-filter${name}`} src={source} onClick={this.clickFilter} />)
    }

    showFilter() {
        if (this.state.filter) {
            return (
                <div className="filter-box open" ref={this.setWrapperRef}>
                    <div className="sort">
                        <div className="head">
                            <span>Sort by :</span>
                            <span>
                                <span>clear</span>
                                <img src={Clear} />
                            </span>
                        </div>
                        <div className="sortby">
                            <div>nearby</div>
                            <div>rating</div>
                            <div>price</div>
                        </div>
                    </div>
                    <div className="category">
                        <div className="head">Category:</div>
                        <div className="tags">{this.genTag()}
                            <div className="search">
                                <img src={SearchIcon} />
                            </div>
                        </div>
                    </div>
                    <div className="line" />
                    <div className="hour">
                        <div className="head">Opening hours</div>
                        <div className="options">
                            <Slider range defaultValue={[20, 50]} />
                        </div>
                    </div>
                    <div className="rating">
                        <div className="head">Rating:</div>
                        <div className="favs">
                            {this.genFav()}
                        </div>
                    </div>
                </div>
            )
        }
        return (<div className="filter-box" ref={this.setWrapperRef} />)
    }

    genFav = () => {
        let fav = []
        for (let i = 1; i <= 5; i++) {
            fav = [...fav,
            <div className="fav" key={`fav-${i}`}>
                <span>{i}</span>
                <img src={Star} />
            </div>
            ]
        }
        return fav
    }

    genTag = () => tags.map((tag, i) => <div className="tag" key={`tag-${i}`}><div>{tag}</div><img src={Close} /></div>)

    render() {
        return (
            <div className="search-filter">
                <div className="search-bar">
                    <SearchBar val={this.props.word} />
                    {this.actionFilter()}
                </div>
                {this.showFilter()}
            </div >
        )
    }
}
const mapStateToProps = state => {
    return {
        word: state.searching.word
    }
}
const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter)