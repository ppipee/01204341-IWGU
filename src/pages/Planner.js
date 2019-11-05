import React, { Component } from 'react'
import { compose } from 'redux'
import { graphql } from 'react-apollo'
import { NavBar } from '../components'
import '../assets/scss/planner.scss'
import PlannerDayCard from '../components/PlannerDayCard'
import { getDetailPlanner } from '../queries/planner'

class Planner extends Component {
    constructor() {
        super()
        this.state = {}
    }

    async componentDidMount() {
        const plannerID = new URLSearchParams(this.props.location.search).get(
            'id'
        )
        await this.props.getPlanner.refetch({ id: plannerID })
    }

    render() {
        // console.log(this.props.getPlanner)
        if (this.props.getPlanner.loading)
            return (
                <div className='planners-page'>
                    <NavBar back design='planners-page' mytrips={false} />
                    Loading
                </div>
            )
        return (
            <div className='planners-page'>
                <NavBar back design='planners-page' mytrips={false} />
                <PlannerDayCard planner={this.props.getPlanner.planner} />
            </div>
        )
    }
}

export default graphql(getDetailPlanner, { name: 'getPlanner' })(Planner)
