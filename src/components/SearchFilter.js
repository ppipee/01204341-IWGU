import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import SearchBar from './SearchBar'
import { DefaultFilter, PhotoCategory } from './Initial'
import TimeFilter from './TimeFilter'
import Category from './Category'
import '../assets/scss/searchfilter.scss'
import { Filter, Clear, Star, BlankStar, Close } from './Icon'

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
        const { state } = this
        const search = new URLSearchParams(this.props.location.search)
        if (prevState.show !== state.show && search.has('time')) {
            const tags = search.has('tags') ? search.get('tags').split(' ') : []
            const rating = {
                star1: true,
                star2: true,
                star3: true,
                star4: true,
                star5: true,
            }
            search
                .get('rate')
                .split(' ')
                .forEach(star => {
                    rating[`star${star}`] = false
                })
            const time = search
                .get('time')
                .split(' ')
                .map(t => +t)
            const sortby = {
                nearby: false,
                rating: false,
                price: false,
            }
            sortby[search.get('sortby')] = true
            console.log(this.state)
            this.setState({
                ...state,
                time,
                tags,
                sortby,
                rating,
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

    removeTag = event => {
        const new_index = this.state.tags_index
        new_index.splice(event.target.getAttribute('index'), 1)
        this.setTag(new_index)
    }

    genTag = () =>
        this.state.tags_index.map((tag_index, i) => {
            return (
                <div className='tag' key={`tag-${tag_index}`}>
                    <div>{PhotoCategory[tag_index].title}</div>
                    <Close
                        color='#fff'
                        index={i}
                        alt='icon-close'
                        onClick={this.removeTag}
                    />
                </div>
            )
        })

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
            tags_index: [],
            ...JSON.parse(JSON.stringify(DefaultFilter)),
        })
    }

    applyFilters = () => {
        const filter = JSON.parse(JSON.stringify(this.state))
        delete filter.show
        const word = new URLSearchParams(this.props.location.search).get('q')
        let path = [word]
        if (filter.tags.length !== 0) {
            const tag = filter.tags.join(' ')
            path = [...path, `tags=${tag}`]
        }
        const sortby = Object.keys(filter.sortby).filter(
            sort => filter.sortby[sort] === true
        )
        const time = filter.time.join(' ')
        const rate = Object.keys(
            Object.values(filter.rating).filter(star => star === false)
        )
            .map(index => +index + 1)
            .join(' ')
        path = [
            ...path,
            `sortby=${sortby[0]}`,
            `time=${time}`,
            `rate=${rate}`,
        ].join('&')
        this.props.history.push(`/search?q=${path}`)
        this.setState({ show: false })
    }

    setTag = tags_index => {
        this.setState({
            tags: tags_index.map(index => PhotoCategory[index].title),
            tags_index,
        })
    }

    actionFilter() {
        const [status, name, click] = this.state.show
            ? ['inactive', 'active', this.clearFilters]
            : ['active', '', this.clickFilter]
        return (
            <span className={`img-filters ${name}`} onClick={click}>
                <Filter status={status} />
            </span>
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
                    <SearchBar
                        val={new URLSearchParams(
                            this.props.location.search
                        ).get('q')}
                    />
                    {this.actionFilter()}
                </div>
                {this.showFilter()}
            </div>
        )
    }
}

export default withRouter(SearchFilter)
