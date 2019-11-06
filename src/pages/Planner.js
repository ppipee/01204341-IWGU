import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { NavBar } from '../components'
import '../assets/scss/planner.scss'
import PlannerDayCard from '../components/PlannerDayCard'
import { getDetailPlanner } from '../queries/planner'
import NotFoundPage from './NotFoundPage'

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
        if (
            this.props.getPlanner.error !== undefined ||
            new URLSearchParams(this.props.location.search).get('id') === null
        )
            return (
                <div className='planners-page'>
                    <NotFoundPage design='planners' />
                    {/* <NavBar back design='planners-page' mytrips={false} />
                    Not found */}
                </div>
            )
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
