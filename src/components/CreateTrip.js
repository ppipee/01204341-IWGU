import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Plus } from './Icon'
import { NewTripAction } from '../action'
import HeadCreateTrip from './HeadCreateTrip'
import Calendar from './CalendarTrip'
import '../assets/scss/createtrip.scss'

const Action = NewTripAction
class CreateTrip extends Component {
    constructor(props) {
        super(props)
        this.state = {
            plan_maker: false,
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            prevProps.getCreateAuth !== this.props.getCreateAuth &&
            this.props.getCreateAuth
        ) {
            this.createTrip()
        }
    }

    calDay = (start, end) =>
        start ? (end - start) / (1000 * 60 * 60 * 24) + 1 : 0

    formatDate = date => {
        const year = date.getFullYear()
        const month =
            date.getMonth() + 1 > 9
                ? date.getMonth() + 1
                : `0${date.getMonth() + 1}`
        const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`
        return `${year}-${month}-${day}`
    }

    createTrip = () => {
        const userid = this.props.getUserID
        const { name, date } = this.props.getNewTrip
        const day = this.calDay(date.start, date.end)
        const current_date = date.start
        let new_date = new Date(
            current_date.setDate(current_date.getDate() - 1)
        )
        const days = [...Array(day).keys()].map(i => {
            new_date = new Date(
                current_date.setDate(current_date.getDate() + 1)
            )
            return {
                day: i + 1,
                date: this.formatDate(new_date),
                places: [],
                note: '',
            }
        })
        const trip = {
            userID: userid,
            name,
            days,
        }
        this.props.setNewTrip(trip)
        this.setState({
            plan_maker: false,
        })
    }

    handleClick = () => {
        this.setState({ plan_maker: !this.state.plan_maker })
    }

    showMaker = () => {
        document.body.style.overflow = 'hidden'
        if (this.state.plan_maker) {
            return (
                <div className='plan-maker popup'>
                    <div className='create-trip popup'>
                        <HeadCreateTrip click={this.handleClick} />
                        <Calendar />
                    </div>
                </div>
            )
        }
        document.body.style.overflow = 'unset'
        return (
            <div className='plan-maker'>
                <div className='create-trip' />
            </div>
        )
    }

    render() {
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
const mapDispatchToProps = dispatch => {
    return {
        setNewTrip: trip =>
            dispatch({ type: Action.SETNEWTRIP, setTrip: trip }),
    }
}
const mapStateToProps = state => {
    return {
        getNewTrip: state.newtrip,
        getCreateAuth: state.newtrip.auth,
        getUserID: state.userauth.userid,
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateTrip)
