import React, { Component } from 'react'
import '../assets/scss/routeplace.scss'
import { Bus, Train, Ferry, Bts, Mrt } from './Icon'
import { Routes } from './Demo'

class RoutePlace extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    genBus() {
        return Routes.bus.map((no, i) => (
            <div key={`bus-no-${i + 1}`} className='bus-no'>
                {no}
            </div>
        ))
    }

    genTrain() {
        let img
        return Routes.train.map((item, i) => {
            img = item.name === 'bts' ? Bts : Mrt
            return (
                <div key={`train-${i + 1}`} className='train'>
                    <img alt={img} src={img} />
                    <div className={`station ${item.name}`}>{item.station}</div>
                </div>
            )
        })
    }

    genFerry() {
        return Routes.ferry.map((pier, i) => (
            <div className='pier' key={`pier-${i + 1}`}>
                {pier}
            </div>
        ))
    }

    render() {
        const { map, location } = this.props
        return (
            <div className='route-place'>
                <div className='left-content'>
                    <div className='map' />
                    <p className='address'>
                        {location.address} {location.sub_district}{' '}
                        {location.district} {location.province}
                    </p>
                </div>
                <div className='right-content'>
                    <div className='transportation'>
                        <img alt='bus' src={Bus} />
                        <div className='container bus'>{this.genBus()}</div>
                    </div>
                    <div className='transportation'>
                        <img alt='train' src={Train} />
                        <div className='container'>{this.genTrain()}</div>
                    </div>
                    <div className='transportation'>
                        <img alt='ferry' src={Ferry} />
                        <div className='container'>{this.genFerry()}</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default RoutePlace
