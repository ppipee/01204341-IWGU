import React, { Component } from 'react'
import AddTrip from './AddTrip'
import { BlackAirplane, Calendar, CurveArrow, RightArrow } from './Icon'
import '../assets/scss/plannersboard.scss'
import { Planners } from './Demo'

class PlannersBoard extends Component {
    constructor() {
        super()
        this.state = {}
    }

    genPlanner = () =>
        Planners.map(planner => (
            <div className='planner' key={planner.id}>
                <div className='content'>
                    <div className='name'>{planner.name}</div>
                    <div className='date'>
                        <img src={Calendar} alt='calendar-icon' />
                        <span>
                            {planner.days[0].date} -{' '}
                            {planner.days[planner.days.length - 1].date}
                        </span>
                    </div>
                </div>
                <div className='btn-detail'>
                    <img src={RightArrow} alt='arrow-icon' />
                </div>
            </div>
        ))

    blankBoard = () => (
        <div className='blank-board'>
            <div className='text'>Let’s start your new trips!</div>
            <img src={CurveArrow} alt='curve-arrow' />
        </div>
    )

    plannersBoard = () => {
        if (Planners[0]) return this.genPlanner()
        return this.blankBoard()
    }

    render() {
        return (
            <div className='planners-board'>
                <div className='title'>
                    <img src={BlackAirplane} alt='black-airplane-icon' />
                    <span className='planners'>Manage your trip</span>
                </div>
                {this.plannersBoard()}
                {/* <AddTrip /> */}
            </div>
        )
    }
}
export default PlannersBoard
