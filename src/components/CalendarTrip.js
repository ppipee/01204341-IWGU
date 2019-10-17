import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import { DateRangePicker } from 'react-dates'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import '../assets/scss/calendartrip.scss'

class CalendarTrip extends Component {
    constructor() {
        super()
        this.state = {
            day: 0,
            start_date: null,
            end_date: null,
            focused_input: 'startDate',
        }
    }

    onFocusChange = focused_input => {
        if (!focused_input) return
        this.setState({ focused_input })
    }

    render() {
        const day = this.state.day ? 's' : ''
        console.log(this.state.focused_input)
        return (
            <div className='calendar-trip'>
                <div className='calendar'>
                    <DateRangePicker
                        startDate={this.state.start_date}
                        endDate={this.state.end_date}
                        startDateId='startDate'
                        endDateId='endDate'
                        onDatesChange={({ startDate, endDate }) =>
                            this.setState({
                                start_date: startDate,
                                end_date: endDate,
                            })
                        }
                        onFocusChange={focused_input =>
                            this.onFocusChange(focused_input)
                        }
                        focusedInput={this.state.focused_input}
                        displayFormat='D MMM'
                        numberOfMonths={1}
                        small
                        minimumNights={0}
                        daySize={32}
                    />
                </div>
                {/* <div className='state'>
                    <div className={`day ${this.state.day}`}>
                        <span className='days-count'>{this.state.day}</span>
                        <span>{`Day${day}`}</span>
                    </div>
                    <div className='start-trip-btn'>Start your trip</div>
                </div> */}
            </div>
        )
    }
}
export default CalendarTrip
