import React, { Component } from 'react'
import { NavBar, CountDown, PlannerBoard } from '../components'
import '../assets/scss/mytripspage.scss'

class MyTrips extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className='my-trips'>
                <NavBar design='planners' />
                <CountDown />
                <PlannerBoard />
            </div>
        )
    }
}
export default MyTrips
