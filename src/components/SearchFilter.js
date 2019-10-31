import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import { FilterAction } from '../action'
import { DefaultFilter, PhotoCategory } from './Initial'
import TimeFilter from './TimeFilter'
import Category from './Category'
import '../assets/scss/searchfilter.scss'
import { Filter, FilterActive, Clear, Star, BlankStar, Close } from './Icon'

const Action = FilterAction
class SearchFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            tags_index: [],
            ...JSON.parse(JSON.stringify(DefaultFilter)),
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.show !== this.state.show) {
            const { state } = this
            this.setState({
                ...state,
                ...JSON.parse(JSON.stringify(this.props.load_filters)),
            })
        }
    }

    clickFilter = () => {
        this.setState(prevState => ({ show: !prevState.show }))
    }

    genSort = () => {
        const sort = ['nearby', 'rating', 'price']
        let block = []
        sort.forEach(sortby => {
            const name = this.state.sortby[sortby] ? 'active' : ''
            block = [
                ...block,
                <div
                    className={`head-sort ${name}`}
                    key={sortby}
                    sortby={sortby}
                    onClick={event =>
                        this.toggleButton(event, 'sortby', 'sortby', {}, false)
                    }
                >
                    {sortby}
                </div>,
            ]
        })
        return block
    }

    genFav = () => {
        let fav = []
        for (let i = 1; i <= 5; i++) {
            const [name, src] = this.state.rating[`star${i}`]
                ? ['active', BlankStar]
                : ['', Star]
            fav = [
                ...fav,
                <div
                    className={`fav ${name}`}
                    key={`star${i}`}
                    star={`star${i}`}
                    onClick={event =>
                        this.toggleButton(event, 'star', 'rating', false)
                    }
                >
                    <span>{i}</span>
                    <img src={src} alt='icon-star' />
                </div>,
            ]
        }
        return fav
    }

    genTag = () =>
        this.state.tags.map(tag => (
            <div className='tag' key={tag.id}>
                <div>{tag}</div>
                <img src={Close} alt='icon-close' />
            </div>
        ))

    handleTime = time => this.setState({ time })

    toggleButton = (
        event,
        attibute,
        key,
        allactive = true,
        multiactive = true
    ) => {
        const pointer = event.target.getAttribute(attibute)
        const state = this.state[key]
        const new_state = { ...state }
        let check = true
        if (multiactive) {
            new_state[pointer] = !new_state[pointer]
            if (!allactive) {
                check =
                    Object.values(new_state).reduce((prev, cur) => prev + cur) <
                    Object.keys(new_state).length
            } else if (new_state[pointer]) new_state[pointer] = false
        } else {
            Object.keys(new_state).forEach(point => {
                new_state[point] = false
            })
            new_state[pointer] = true
        }
        const set_state = check ? new_state : state
        this.setState({ [key]: set_state })
    }

    clearFilters = (event, show = false) => {
        this.setState({
            show,
            ...JSON.parse(JSON.stringify(DefaultFilter)),
        })
    }

    applyFilters = () => {
        const filter = JSON.parse(JSON.stringify(this.state))
        delete filter.show
        this.props.setFilter(filter)
        this.setState({ show: false })
    }

    setTag = index_tags => {
        this.setState({
            tags: index_tags.map(index => PhotoCategory[index].title),
            index_tags,
        })
    }

    actionFilter() {
        const [source, name, click] = this.state.show
            ? [FilterActive, '-active', this.clearFilters]
            : [Filter, '', this.clickFilter]
        return (
            <img
                className={`img-filter${name}`}
                src={source}
                alt='filter'
                onClick={click}
            />
        )
    }

    showFilter() {
        if (this.state.show) {
            return (
                <div className='filter-box open'>
                    <div className='filters'>
                        <div className='sort'>
                            <div className='head'>
                                <span>Sort by :</span>
                                <span
                                    onClick={event =>
                                        this.clearFilters(event, true)
                                    }
                                >
                                    <span>clear</span>
                                    <img src={Clear} alt='icon-clear' />
                                </span>
                            </div>
                            <div className='sortby'>{this.genSort()}</div>
                        </div>
                        <div className='category-tags'>
                            <div className='head'>Category :</div>
                            <div
                                className={`tags ${
                                    this.state.tags.length === 0 ? '' : 'show'
                                }`}
                            >
                                {this.genTag()}
                                <Category
                                    settag={this.setTag}
                                    tags={this.state.tags_index}
                                />
                            </div>
                        </div>
                        <div className='line' />
                        <TimeFilter
                            time={this.state.time}
                            handleTime={this.handleTime}
                        />
                        <div className='rating'>
                            <div className='head'>Rating:</div>
                            <div className='all-fav'>{this.genFav()}</div>
                        </div>
                    </div>
                    <div className='handle-filters'>
                        <div className='cancel' onClick={this.clearFilters}>
                            Cancel
                        </div>
                        <div className='apply' onClick={this.applyFilters}>
                            Apply
                        </div>
                    </div>
                </div>
            )
        }
        return <div className='filter-box' />
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
        load_filters: state.filters,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setFilter: filters =>
            dispatch({ type: Action.SAVEFILTERS, newState: filters }),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchFilter)
