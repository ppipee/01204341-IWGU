import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CreateTrip from './CreateTrip'
import { BlackAirplane, Calendar, CurveArrow, RightArrow } from './Icon'
import '../assets/scss/plannersboard.scss'

class PlannersBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            planners: [],
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (this.props.planners !== nextProps.planners) {
            this.setState({ planners: nextProps.planners })
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.planners !== this.props.planners
    }

    formatDate = date => {
        const new_date = date.split(' ')
        return `${new_date[2]} ${new_date[1]}`
    }

    genDate = days => {
        const d_start = new Date(days[0].date)
        const d_end = new Date(days[days.length - 1].date)
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
                <Link
                    className='btn-detail'
                    to={`/planners?id=${planner.id}&share=${planner.share}`}
                >
                    <img src={RightArrow} alt='arrow-icon' />
                </Link>
            </div>
        ))

    plannersBoard = () => {
        if (this.state.planners[0]) return this.genPlanner()
        return (
            <div className='blank-board'>
                <div className='text'>Let’s start your new trips!</div>
                <img src={CurveArrow} alt='curve-arrow' />
            </div>
        )
    }

    render() {
        return (
            <div className='planners-board'>
                <div className='title'>
                    <img src={BlackAirplane} alt='black-airplane-icon' />
                    <span>Manage your trip</span>
                </div>
                <div className='planners'>{this.plannersBoard()}</div>
                <CreateTrip />
            </div>
        )
    }
}
export default PlannersBoard
