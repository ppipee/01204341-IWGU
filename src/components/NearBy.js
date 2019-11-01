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

    genPlace(places, id) {
        const box = []
        places.map(place =>
            box.push(
                <div key={place.name}>
                    <img className='picture' alt={place.name} src={place.src} />
                    <div className='name'>{place.name}</div>
                </div>
            )
        )
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
                    tabname={name}
                    onClick={this.openContents}
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
        // const {dis, map} = this.props
        // console.log(this.props)
        return (
            <div className='nearby'>
                <div className='head'>
                    <img
                        className='location-icon'
                        alt='location-icon'
                        src={LocationIcon}
                    />
                    <span className='nearby-you'>Nearby you</span>
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
