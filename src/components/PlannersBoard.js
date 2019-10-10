import React, { Component } from 'react'
import AddTrip from './AddTrip'
import '../assets/scss/plannersboard.scss'

class PlannersBoard extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className='planners-board'>
                <div className='planners'>Planner</div>
                <AddTrip />
            </div>
        )
    }
}
export default PlannersBoard
