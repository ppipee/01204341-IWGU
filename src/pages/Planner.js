import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import { withRouter } from 'react-router-dom'
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
        if (this.props.user === '') this.props.history.push('/auth')
        if (this.props.getPlanner.loading)
            return (
                <div className='planners-page'>
                    <NavBar back design='planners-page' mytrips={false} />
                </div>
            )
        return (
            <div className='planners-page'>
                <NavBar back design='planners-page' mytrips={false} />
                <PlannerDayCard
                    planner={
                        this.props.getPlannerStore === null
                            ? this.props.getPlanner.planner
                            : this.props.getPlannerStore
                    }
                />
            </div>
        )
    }
}

export default compose(
    withRouter,
    connect(state => {
        return {
            getPlannerStore: state.planner.planner,
            user: state.userauth.username,
        }
    }),
    graphql(getDetailPlanner, { name: 'getPlanner' })
)(Planner)
