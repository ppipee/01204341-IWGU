import React, { Component } from 'react'
import './../assets/scss/nearby.scss'
import { LocationIcon, RestaurantActive, RestaurantInActive, LandmarkActive, LandmarkInActive, TreeActive, TreeInActive, SleepActive, SleepInActive } from './Icon'
import { places } from './Demo'

const tabs = [[RestaurantInActive, "res", RestaurantActive], [LandmarkInActive, "land", LandmarkActive], [TreeInActive, "tree", TreeActive], [SleepInActive, "sleep", SleepActive]]
class NearBy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tab_state: {
                "res": true,
                "land": false,
                "tree": false,
                "sleep": false,
            }
        }
    }

    genPlace(places, id) {
        let box = []
        places.map(place => box.push(
            <div key={place.name}>
                <img className='picture' src={place.src} />
                <div className='name'>{place.name}</div>
            </div>
        ))
        return (
            <div id={id} className='tab-content'>
                {box}
            </div>
        )
    }

    openContents = (event) => {
        let target_state = event.target.getAttribute("tabName")
        let new_state = this.state.tab_state
        Object.keys(new_state).forEach(key => {
            new_state[key] = false
        })
        new_state[target_state] = true
        this.setState({
            tab_state: new_state
        })
    }

    genTabs() {
        let tabbar = []
        tabs.map(tab => {
            let [tabInActive, name, tabActive] = tab
            let active = ""
            if (this.state.tab_state[name]) {
                active = " active"
                tabInActive = tabActive
            }
            tabbar.push(
                <div className={`icon${active}`} key={`tab-${name}`}>
                    <img className='tab-links' tabname={name} onClick={this.openContents} src={tabInActive} />
                </div>
            )
        }
        )
        return (
            <div className='wave'>
                <div className='wave-background'>
                    {tabbar}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className='NearBy'  >
                <div className='head'>
                    <img className='location-icon' src={LocationIcon} />
                    <span className='nearby-you'>Nearby-you</span>
                </div>
                <div className='body'>
                    {this.genTabs()}
                    <div className='picture-container'>
                        <div className='container'>
                            {(this.state.tab_state['res']) && this.genPlace(places.res, "pic_res")}
                            {(this.state.tab_state['land']) && this.genPlace(places.land, "pic_land")}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default NearBy
