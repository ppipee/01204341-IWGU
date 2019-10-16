import React, { Component } from 'react'
import '../assets/scss/searchresult.scss'
import { Places } from './Demo'
import { AddActive, AddInActive, FavActive, FavInActive } from './Icon'

const tabs = [['add', AddActive, AddInActive], ['fav', FavActive, FavInActive]]
class SearchResult extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    genTabs() {}

    genCards(places) {
        const box = []
        places.map(place =>
            box.push(
                <div key={place.name} className='card'>
                    <img className='picture' alt={place.name} src={place.src} />
                    <div className='content'>{place.name}</div>
                    <div className='add-fav'>
                        <div className='add'>ew</div>
                        <div className='fav'>we</div>
                    </div>
                </div>
            )
        )
        return <div>{box}</div>
    }

    render() {
        return <div className='SearchResult'>{this.genCards(Places.res)}</div>
    }
}
export default SearchResult
