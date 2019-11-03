import React, { Component } from 'react'
import { DateRangePicker } from 'react-dates'
import { connect } from 'react-redux'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { NewTripAction } from '../action'
import { LeftArrowColor, RightArrowColor } from './Icon'
import '../assets/scss/calendartrip.scss'

const Action = NewTripAction
class CalendarTrip extends Component {
    constructor(props) {
        super(props)
        this.state = {
            start_date: null,
            end_date: null,
            focused_input: 'startDate',
            auth: false,
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            this.state.start_date !== prevState.start_date ||
            this.state.end_date !== prevState.end_date ||
            this.props.getName !== prevProps.getName
        )
            this.setAuth()
    }

    setTrip = () => {
        const { start_date: start, end_date: end } = this.state
        const date = {
            start: start.toDate(),
            end: end.toDate(),
        }
        this.props.setDate(date)
        this.props.setAuth(true)
    }

    setAuth = () => {
        const { start_date: start, end_date: end } = this.state
        const name = this.props.getName
        const auth =
            name !== '' &&
            (start !== null && end !== null) &&
            (this.props.getStatus !== 'traveler' || this.calDay() <= 7)
        this.setState({ auth })
    }

    onFocusChange = focused_input => {
        if (!focused_input) return
        this.setState({ focused_input })
    }

    calDay = () =>
        this.state.start_date
            ? (this.state.end_date - this.state.start_date) /
                  (1000 * 60 * 60 * 24) +
              1
            : 0

    render() {
        const day = this.calDay() > 1 ? 's' : ' '
        return (
            <div className='calendar-trip'>
                <div className='calendar'>
                    <div className='calendar-arrow'>
                        <div className='calendar-arrow-left'>
                            <span className='calendar-line' />
                            <img src={LeftArrowColor} alt='left-arrow-color' />
                        </div>
                        <div className='calendar-arrow-right'>
                            <img
                                src={RightArrowColor}
                                alt='right-arrow-color'
                            />
                            <span className='calendar-line' />
                        </div>
                    </div>
                    <DateRangePicker
                        startDate={this.state.start_date}
                        endDate={this.state.end_date}
                        startDateId='startDate'
                        endDateId='endDate'
                        onDatesChange={({ startDate, endDate }) => {
                            if (endDate === null) endDate = startDate
                            if (startDate === null) startDate = endDate
                            this.setState({
                                start_date: startDate,
                                end_date: endDate,
                            })
                        }}
                        onFocusChange={focused_input =>
                            this.onFocusChange(focused_input)
                        }
                        focusedInput={this.state.focused_input}
                        displayFormat='D MMM'
                        monthFormat='MMM Y'
                        numberOfMonths={1}
                        minimumNights={0}
                        daySize={32}
                        enableOutsideDays
                        startDatePlaceholderText='start'
                        endDatePlaceholderText='end'
                        readOnly
                    />
                </div>
                <div className={`state ${this.calDay() <= 7 ? '' : 'disable'}`}>
                    <div className={`day ${this.state.day}`}>
                        <div className='days-count'>{this.calDay()}</div>
                        <div>{`Day${day}`}</div>
                    </div>
                    <div
                        className={`start-trip-btn ${
                            this.state.auth ? 'active' : 'inactive'
                        }`}
                        onClick={this.setTrip}
                    >
                        Start your trip
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setDate: date => dispatch({ type: Action.SETDATE, setDate: date }),
        setAuth: auth => dispatch({ type: Action.SETAUTH, setAuth: auth }),
    }
}
const mapStateToProps = state => {
    return {
        getName: state.newtrip.name,
        getStatus: state.userauth.status,
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalendarTrip)
