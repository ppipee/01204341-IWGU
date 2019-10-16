import React, { Component } from 'react'
import '../assets/scss/calendartrip.scss'

class CalendarTrip extends Component {
    constructor() {
        super()
        this.state = {
            day: 0,
        }
    }

    render() {
        const day = this.state.day ? 's' : ''
        return (
            <div className='calendar-trip'>
                <div className='state'>
                    <div className={`day ${this.state.day}`}>
                        <span className='days-count'>{this.state.day}</span>
                        <span>{`Day${day}`}</span>
                    </div>
                    <div className='start-trip-btn'>Start your trip</div>
                </div>
            </div>
        )
    }
}
export default CalendarTrip
