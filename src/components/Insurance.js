import React, { Component } from 'react'
import '../assets/scss/insurance.scss'
import { Shield, Standard, Snow, Water, Air, Land, Sport } from './Icon'
import { Coverage } from './Demo'

const tabs = [
    ['standard', Standard],
    ['snow', Snow],
    ['water', Water],
    ['air', Air],
    ['land', Land],
    ['sport', Sport],
]

class Insurance extends Component {
    constructor() {
        super()
        this.state = {
            tab_state: {
                standard: true,
                snow: false,
                water: false,
                air: false,
                land: false,
                sport: false,
            },
        }
    }

    openContents(name) {
        const target_state = name
        const new_state = { ...this.state.tab_state }
        Object.keys(new_state).forEach(key => {
            new_state[key] = false
        })
        new_state[target_state] = true
        this.setState({
            tab_state: new_state,
        })
    }

    genTabs() {
        const tab_bar = []
        tabs.forEach(tab => {
            const [name, Icon] = tab
            let active = ''
            let color = '#fcb7a0'
            if (this.state.tab_state[name]) {
                active = ' active'
                color = '#fff'
            }
            tab_bar.push(
                <div
                    onClick={() => this.openContents(name)}
                    className={`tab-box ${active}`}
                    key={`tab-${name}`}
                >
                    <Icon color={color} />
                </div>
            )
        })
        return <div className='tabbar-container'>{tab_bar}</div>
    }

    render() {
        return (
            <div className='insurance'>
                <div className='title'>
                    <img alt='insurance' src={Shield} />
                    <p>Travel Safe</p>
                    <p>Available soon</p>
                </div>
                {this.genTabs()}
            </div>
        )
    }
}
export default Insurance
