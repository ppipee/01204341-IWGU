import React, { Component } from 'react'
import '../assets/scss/nearby.scss'
import {
    LocationIcon,
    RestaurantActive,
    RestaurantInActive,
    LandmarkActive,
    LandmarkInActive,
    TreeActive,
    TreeInActive,
    SleepActive,
    SleepInActive,
} from './Icon'
import { Places } from './Demo'

const tabs = [
    ['res', RestaurantActive, RestaurantInActive],
    ['land', LandmarkActive, LandmarkInActive],
    ['tree', TreeActive, TreeInActive],
    ['sleep', SleepActive, SleepInActive],
]
class NearBy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tab_state: {
                res: true,
                land: false,
                tree: false,
                sleep: false,
            },
        }
    }

    openContents = event => {
        const target_state = event.target.getAttribute('tabname')
        const new_state = { ...this.state.tab_state }
        Object.keys(new_state).forEach(key => {
            new_state[key] = false
        })
        new_state[target_state] = true
        this.setState({
            tab_state: new_state,
        })
    }

    // https://www.geodatasource.com/developers/javascript =============
    checkplace(lat2, lon2) {
        const { map } = this.props
        const lat1 = map.latitude
        const lon1 = map.longitude
        let check = false
        let dist
        if (lat1 === lat2 && lon1 === lon2) {
            check = true
        } else {
            const radlat1 = (Math.PI * lat1) / 180
            const radlat2 = (Math.PI * lat2) / 180
            const theta = lon1 - lon2
            const radtheta = (Math.PI * theta) / 180
            dist =
                Math.sin(radlat1) * Math.sin(radlat2) +
                Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
            if (dist > 1) {
                dist = 1
            }
            dist = Math.acos(dist)
            dist = (dist * 180) / Math.PI
            dist = dist * 60 * 1.1515 * 1.609344
            if (dist < 10) {
                check = true
            }
        }
        return check
    }
    // ===============================================================

    genPlace(places, id) {
        const box = []
        places.forEach((place, i) => {
            if (this.checkplace(place.map.latitude, place.map.longitude)) {
                box.push(
                    <div key={`${place.name}-${i + 1}`}>
                        <img
                            className='picture'
                            alt={place.name}
                            src={place.thumbnail}
                        />
                        <div className='name'>{place.name}</div>
                    </div>
                )
            }
        })
        return (
            <div id={id} className='tab-content'>
                {box}
            </div>
        )
    }

    genTabs() {
        const tabbar = []
        tabs.forEach(tab => {
            let tabInActive = tab[2]
            const [name, tabActive] = tab
            let active = ''
            if (this.state.tab_state[name]) {
                active = ' active'
                tabInActive = tabActive
            }
            tabbar.push(
                <div
                    className={`icon${active}`}
                    key={`tab-${name}`}
                    onClick={this.openContents}
                    tabname={name}
                >
                    <img
                        className='tab-links'
                        tabname={name}
                        alt='icon-tab'
                        onClick={this.openContents}
                        src={tabInActive}
                    />
                </div>
            )
        })
        return <div className='wave'>{tabbar}</div>
    }

    render() {
        const status = this.props.this

        return (
            <div className='nearby'>
                <div className='head'>
                    <img
                        className='location-icon'
                        alt='location-icon'
                        src={LocationIcon}
                    />
                    <span className='nearby-you'>
                        {status ? 'Nearby this' : 'Nearby you'}
                    </span>
                </div>
                <div className='body'>
                    {this.genTabs()}
                    <div className='picture-container'>
                        {this.state.tab_state.res &&
                            this.genPlace(Places.res, 'pic_res')}
                        {this.state.tab_state.land &&
                            this.genPlace(Places.land, 'pic_land')}
                        {this.state.tab_state.tree &&
                            this.genPlace(Places.tree, 'pic_tree')}
                        {this.state.tab_state.sleep &&
                            this.genPlace(Places.sleep, 'pic_sleep')}
                    </div>
                </div>
            </div>
        )
    }
}
export default NearBy
