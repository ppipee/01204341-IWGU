import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Plus } from './Icon'
import { NewTripAction } from '../action'
import HeadCreateTrip from './HeadCreateTrip'
import CalendarTrip from './CalendarTrip'
import '../assets/scss/createtrip.scss'

class CreateTrip extends Component {
    constructor() {
        super()
        this.state = {
            plan_maker: false,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.nextProps.getAuth) {
            this.createTrip()
        }
    }

    calDay = (start, end) =>
        start ? (end - start) / (1000 * 60 * 60 * 24) + 1 : 0

    createTrip = () => {
        if (this.props.getAuth) {
            const userid = this.props.getUserID
            const { name, date } = this.props
            const day = this.calDay(date.start, date.end)
            let days = []
            for (let i = 0; i < day; i++) {
                const current_date = date.start
                days = [
                    ...days,
                    {
                        day: i,
                        date: new Date(
                            current_date.setDate(current_date.getDate() + i)
                        ),
                        places: [],
                        note: '',
                    },
                ]
            }
            console.log(days)
            const trip = {
                userID: userid,
                name,
                days,
            }
        }
    }

    handleClick = () => {
        this.setState({ plan_maker: !this.state.plan_maker })
    }

    showMaker = () => {
        if (this.state.plan_maker) {
            return (
                <div className='plan-maker popup'>
                    <div className='create-trip popup'>
                        <HeadCreateTrip click={this.handleClick} />
                        <CalendarTrip />
                    </div>
                </div>
            )
        }
        return (
            <div className='plan-maker'>
                <div className='create-trip' />
            </div>
        )
    }

    render() {
        this.createTrip()
        return (
            <>
                <img
                    src={Plus}
                    alt='plus-btn'
                    className='add-btn'
                    onClick={this.handleClick}
                />
                {this.showMaker()}
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        getName: state.newtrip.name,
        getDate: state.newtrip.date,
        getCreateAuth: state.newtrip.auth,
        getUserID: state.userauth.userid,
    }
}
export default connect(
    mapStateToProps,
    null
)(CreateTrip)
