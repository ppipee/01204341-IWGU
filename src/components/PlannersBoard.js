import React, { Component } from 'react'
import CreateTrip from './CreateTrip'
import { BlackAirplane, Calendar, CurveArrow, RightArrow } from './Icon'
import '../assets/scss/plannersboard.scss'
import { Planners } from './Demo'

class PlannersBoard extends Component {
    constructor() {
        super()
        this.state = {
            planners: [],
        }
    }

    componentDidMount() {
        this.setState({ planners: Planners })
    }

    formatDate = date => {
        const new_date = date.split(' ')
        return `${new_date[2]} ${new_date[1]}`
    }

    genDate = days => {
        const d_start = days[0].date
        const d_end = days[days.length - 1].date
        if (days.length === 1) return this.formatDate(d_start.toString())
        return `${this.formatDate(d_start.toString())} - ${this.formatDate(
            d_end.toString()
        )}`
    }

    genPlanner = () =>
        this.state.planners.map(planner => (
            <div className='planner' key={planner.id}>
                <div className='content'>
                    <div className='name'>{planner.name}</div>
                    <div className='date'>
                        <img src={Calendar} alt='calendar-icon' />
                        <span>{this.genDate(planner.days)}</span>
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
        if (this.state.planners[0]) return this.genPlanner()
        return this.blankBoard()
    }

    newPlanner = new_planner => {
        this.setState({
            planners: [...this.state.planners, new_planner],
        })
    }

    render() {
        return (
            <div className='planners-board'>
                <div className='title'>
                    <img src={BlackAirplane} alt='black-airplane-icon' />
                    <span>Manage your trip</span>
                </div>
                <div className='planners'>{this.plannersBoard()}</div>
                <CreateTrip planner={this.newPlanner} />
            </div>
        )
    }
}
export default PlannersBoard
