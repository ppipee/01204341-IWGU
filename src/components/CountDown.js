import React, { Component } from 'react'
import '../assets/scss/countdown.scss'
import { Trip } from './Demo'

class CountDown extends Component {
    constructor() {
        super()
        this.state = {
            day: 0,
            hour: 0,
            min: 0,
        }
    }

    componentDidMount() {
        if (Trip.length > 0) {
            const i = this.sortDay()
            if (i >= 0) {
                let time = Trip[i].days[0].places[0].time.start - new Date()
                let day = parseInt(time / 86400000, 10)
                let hour = parseInt(time / 3600000 - day * 24, 10)
                let min = parseInt(time / 60000 - day * 1440 - hour * 60, 10)
                this.setState({ day, hour, min })
                this.timer = setInterval(() => {
                    time = Trip[i].days[0].places[0].time.start - new Date()
                    day = parseInt(time / 86400000, 10)
                    hour = parseInt(time / 3600000 - day * 24, 10)
                    min = parseInt(time / 60000 - day * 1440 - hour * 60, 10)
                    this.setState({ day, hour, min })
                }, 5000)
                return null
            }
        }
        this.setState({ day: 0, hour: 0, min: 0 })
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }

    sortDay = () => {
        const get_all_date = Trip.map(plan => {
            const date = plan.days[0].date
                .toString()
                .split(' ')
                .splice(1, 3)
                .map(item => +item)
            const time = plan.days[0].places[0].time.start
                .toString()
                .split(' ')[4]
                .split(':')
                .map(item => +item)
            return new Date(
                date[2],
                plan.days[0].date.getMonth(),
                date[1],
                time[0],
                time[1],
                time[2]
            )
        })
        const all_date = get_all_date.map(date => date - new Date())
        const clear_day = all_date.filter(value => value > 0).sort()
        const index = all_date.indexOf(clear_day[0])
        return index
    }

    render() {
        const { day, hour, min } = this.state
        return (
            <div className='count-down'>
                <p className='head'>Your next trip within</p>
                <div className='defaultText'>
                    <p className='column'>
                        <span className='time'>{day}</span>
                        <span className='text'>DAYS</span>
                    </p>
                    <span className='colon'>:</span>
                    <p className='column'>
                        <span className='time'>{hour}</span>
                        <span className='text'>HOURS</span>
                    </p>
                    <span className='colon'>
                        :<span className='space' />
                    </span>
                    <p className='column'>
                        <span className='time'>{min}</span>
                        <span className='text'>MINUTES</span>
                    </p>
                </div>
            </div>
        )
    }
}
export default CountDown
