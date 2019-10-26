import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { compose } from 'redux'
import CreateTrip from './CreateTrip'
import { BlackAirplane, Calendar, CurveArrow, RightArrow } from './Icon'
import '../assets/scss/plannersboard.scss'
import { getUserPlanners } from '../queries/planner'

class PlannersBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            planners: [],
        }
    }

    componentDidMount() {
        const id = this.props.getUserID
        this.props.data.refetch({ id })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.data !== prevProps.data) {
            console.log(this.props.data.userPlanner)
            this.setState({ planners: this.props.data.userPlanner })
        }
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
            d_start.toString()
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
                <div className='btn-detail' id={planner.id}>
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
const mapStateToProps = state => {
    return {
        getUserID: state.userauth.userid,
    }
}
export default compose(
    connect(
        mapStateToProps,
        null
    ),
    graphql(getUserPlanners)
)(PlannersBoard)
