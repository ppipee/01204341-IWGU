import React, { Component } from 'react'
import { NavBar } from '../components'
import '../assets/scss/planner.scss'
import PlannerDayCard from '../components/PlannerDayCard'

class Planner extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className='planners-page'>
                <NavBar back design='planners-page' mytrips={false} />
                <PlannerDayCard />
            </div>
        )
    }
}
export default Planner
