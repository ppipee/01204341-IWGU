import React, { Component } from 'react'
import './../assets/scss/nearby.scss'
import { LocationIcon, Restaurant, Restaurant2, Landmark, Landmark2, Tree, Tree2, Sleep, Sleep2 } from './Icon'
import { places } from './Demo'

const tabs = [[Restaurant, "res", Restaurant2], [Landmark, "land", Landmark2], [Tree, "tree", Tree2], [Sleep, "sleep", Sleep2]]
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
            <div id={id} className='tabcontent'>
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
            let [src, name, src2] = tab
            let active = ""
            if (this.state.tab_state[name]) {
                active = " active"
                src = src2
            }
            tabbar.push(
                <div className={`icon${active}`} key={`tab-${name}`}>
                    <img className='tablinks' tabname={name} onClick={this.openContents} src={src} />
                </div>
            )
        }
        )
        return (
            <div className='wave'>
                <div className='wave_background'>
                    {tabbar}
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className='nearby'  >
                <div className='head'>
                    <img className='location_icon' src={LocationIcon} />
                    <span className='nearby_you'>Nearby-you</span>
                </div>
                {this.genTabs()}
                <div className='pictures'>
                    <div className='container'>
                        {(this.state.tab_state['res']) && this.genPlace(places.res, "pic_res")}
                        {(this.state.tab_state['land']) && this.genPlace(places.land, "pic_land")}
                    </div>
                </div>
            </div>
        )
    }
}
export default NearBy
