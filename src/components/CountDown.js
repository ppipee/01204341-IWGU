import React, { Component } from 'react'
import '../assets/scss/countdown.scss'
import { Trip } from './Demo'

class CountDown extends Component {
    constructor() {
        super()
        this.state = {}
    }
    // sourceTime = () => {
    //     let new_day = Trip[0].days[0].date - new Date
    //     let new_time = Trip[0].days[0].places[0].time.start - new Date
    //     return [new_time,new_day]
    // }
    // setDayHourMin= ()=>{
    //     const [new_time,new_day] = this.sourceTime()
    //     let day = parseInt((new_day)/(1000*60*60*24))
    //     let hour = parseInt((new_time)/(1000*60*60));
    //     let min = parseInt((new_time)/(1000*60));

    //     console.log(day)
    //     console.log(hour)
    //     console.log(min)
    // }
    render() {
        return (
            <div className='count-down'>
                <p className='head'>Your next trip within</p>
                <div className='defaultText'>
                    <p className='column'>
                        <span className='time'>02</span>
                        <span className='text'>DAYS</span>
                    </p>
                    <span className='colon'>:</span>
                    <p className='column'>
                        <span className='time'>09</span>
                        <span className='text'>HOURS</span>
                    </p>
                    <span className='colon'>
                        :<span className='space' />
                    </span>
                    <p className='column'>
                        <span className='time'>12</span>
                        <span className='text'>MINUTES</span>
                    </p>
                </div>
                {/* <button onClick={this.setDayHourMin}>start</button> */}
            </div>
        )
    }
}
export default CountDown
