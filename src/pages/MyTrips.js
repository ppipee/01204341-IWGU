import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { NavBar, CountDown, PlannerBoard } from '../components'
import { NewTripAction } from '../action'
import '../assets/scss/mytripspage.scss'
import { getUserPlanners, createPlanner } from '../queries/planner'

class MyTrips extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        if (this.props.getUserID === '') this.props.history.push('/auth')
        const { getUserID: id, getPlanners } = this.props
        getPlanners.refetch({ id })
    }

    async UNSAFE_componentWillUpdate(nextProps, nextState) {
        // console.log("get planner: ", this.props.getPlanners)
        if (
            nextProps.getNewTrip !== this.props.getNewTrip &&
            nextProps.getNewTrip !== null
        ) {
            const { userID, name, days } = nextProps.getNewTrip
            await this.props.createPlanner({
                variables: {
                    userID,
                    name,
                    days,
                },
            })
            this.props.clear()
        }
    }

    componentDidUpdate(prevProps) {
        const { getUserID: id, getPlanners } = this.props
        getPlanners.refetch({ id })
    }

    render() {
        const { loading } = this.props.getPlanners
        return (
            <div className='my-trips'>
                <NavBar back design='planners' mytrips={false} />
                <CountDown
                    trips={this.props.getPlanners.userPlanner}
                    loading={loading}
                />
                <PlannerBoard
                    planners={this.props.getPlanners.userPlanner}
                    loading={loading}
                />
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        clear: () => dispatch({ type: NewTripAction.CLEARNEWTRIP }),
    }
}
const mapStateToProps = state => {
    return {
        getUserID: state.userauth.userid,
        getNewTrip: state.newtrip.trip,
    }
}
export default compose(
    graphql(getUserPlanners, {
        name: 'getPlanners',
        options: { refetchQueries: [''] },
    }),
    graphql(createPlanner, { name: 'createPlanner' }),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(MyTrips)
