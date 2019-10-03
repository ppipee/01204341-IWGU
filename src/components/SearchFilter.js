import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import { FilterAction } from '../action'
import '../assets/scss/searchfilter.scss'
import { SearchIcon, Filter, FilterActive, Clear, Star, BlankStar, Close } from './Icon'
import TimeFilter from './TimeFilter'

const Action = FilterAction
const DefaultFilter = {
    tags: [],
    sortby: {
        "near": false,
        "rating": false,
        "price": false,
    },
    time: [6, 29],
    rating: {
        "star1": false,
        "star2": false,
        "star3": false,
        "star4": false,
        "star5": false,
    },
}
class SearchFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            ...JSON.parse(JSON.stringify(this.props.load_filters)),
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside)
    }

    setWrapperRefFilter = node => { this.wrapperRefFilter = node }

    clearFilters = (event, show = false) => {
        // console.log(this.state)
        this.setState({
            show,
            ...JSON.parse(JSON.stringify(DefaultFilter)),
        })
    }

    applyFilters = () => {
        const filter = JSON.parse(JSON.stringify(this.state))
        delete filter.show
        // console.log(filter)
        this.props.setFilter(filter)
        this.setState({ show: false })
    }

    handleClickOutside = event => {
        const altName = event.target.getAttribute("alt")
        if (this.wrapperRefFilter && !this.wrapperRefFilter.contains(event.target) && altName !== "filter") {
            this.setState({ show: false })
        }
    }

    clickFilter = () => {
        this.setState(prevState => ({ show: !prevState.show }))
    }




    genSort = () => {
        const sort = ["nearby", "rating", "price"]
        let block = []
        sort.forEach((sortby) => {
            const name = this.state.sortby[sortby] ? "active" : ""
            block = [...block,
            <div className={`head-sort ${name}`} key={sortby.id} sortby={sortby} onClick={(event) => this.toggleButton(event, "sortby", this.state.sortby)}>
                {sortby}
            </div>]
        })
        return block
    }

    genFav = () => {
        let fav = []
        for (let i = 1; i <= 5; i++) {
            const [name, src] = this.state.rating[`star${i}`] ? ["active", BlankStar] : ["", Star]
            fav = [...fav,
            <div className={`fav ${name}`} key={`star${i}`} star={`star${i}`} onClick={(event) => this.toggleButton(event, "star", this.state.rating, false)}>
                <span>{i}</span>
                <img src={src} alt="icon-star" />
            </div>
            ]
        }
        return fav
    }

    genTag = () => this.state.tags.map(tag => <div className="tag" key={tag.id} > <div>{tag}</div> <img src={Close} alt="icon-close" /></ div>)

    handleTime = (time) => this.setState({ time })

    toggleButton = (event, attibute, state, allactive = true, multiactive = true) => {
        const pointer = event.target.getAttribute(attibute)
        let check = true
        if (multiactive) {
            state[pointer] = !state[pointer]
        }
        else {
            Object.keys(state).forEach(key => { state[key] = false })
            state[pointer] = true
        }
        if (!allactive) {
            let count = 0
            Object.keys(state).forEach(key => {
                count += state[key]
            })
            check = count < Object.keys(state).length
        }
        if (check)
            this.setState({ state })

    }

    showFilter() {
        if (this.state.show) {
            return (
                <div className="filter-box open" ref={this.setWrapperRefFilter}>
                    <div className="filters">
                        <div className="sort">
                            <div className="head">
                                <span>Sort by :</span>
                                <span onClick={(event) => this.clearFilters(event, true)}>
                                    <span>clear</span>
                                    <img src={Clear} alt="icon-clear" />
                                </span>
                            </div>
                            <div className="sortby">
                                {this.genSort()}
                            </div>
                        </div>
                        <div className="category">
                            <div className="head">Category:</div>
                            <div className="tags">{this.genTag()}
                                <div className="search">
                                    <img src={SearchIcon} alt="icon-search" />
                                </div>
                            </div>
                        </div>
                        <div className="line" />
                        <TimeFilter time={this.state.time} handleTime={this.handleTime} />
                        <div className="rating">
                            <div className="head">Rating:</div>
                            <div className="all-fav">
                                {this.genFav()}
                            </div>
                        </div>
                    </div>
                    <div className="handle-filters">
                        <div className="cancel" onClick={this.clearFilters}>Cancel</div>
                        <div className="apply" onClick={this.applyFilters}>Apply</div>
                    </div>
                </div >
            )
        }
        return (<div className="filter-box" ref={this.setWrapperRefFilter} />)
    }

    actionFilter() {
        const [source, name] = this.state.show ? [FilterActive, "-active"] : [Filter, ""]
        return (<img className={`img-filter${name}`} src={source} alt="filter" onClick={this.clickFilter} />)
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
        load_filters: state.filters
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setFilter: (filters) => dispatch({ type: Action.SAVEFILTERS, newState: filters })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchFilter)
