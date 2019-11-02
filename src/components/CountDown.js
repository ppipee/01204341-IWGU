import React, { Component } from 'react'
import '../assets/scss/countdown.scss'
import { Trip } from './Demo'

class CountDown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            day: 0,
            hour: 0,
            min: 0,
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.loading && !this.props.loading) {
            const { trips } = this.props
            if (trips.length > 0) {
                const i = this.sortDay(trips)
                if (i >= 0) {
                    let time =
                        new Date(
                            `${trips[i].days[0].date}T${trips[i].days[0].places[0].time.start}`
                        ) - new Date()
                    let day = parseInt(time / 86400000, 10)
                    let hour = parseInt(time / 3600000 - day * 24, 10)
                    let min = parseInt(
                        time / 60000 - day * 1440 - hour * 60,
                        10
                    )
                    this.setState({ day, hour, min })
                    this.timer = setInterval(() => {
                        time =
                            new Date(
                                `${trips[i].days[0].date}T${trips[i].days[0].places[0].time.start}`
                            ) - new Date()
                        day = parseInt(time / 86400000, 10)
                        hour = parseInt(time / 3600000 - day * 24, 10)
                        min = parseInt(
                            time / 60000 - day * 1440 - hour * 60,
                            10
                        )
                        this.setState({ day, hour, min })
                    }, 5000)
                    return null
                }
            }
            this.setState({ day: 0, hour: 0, min: 0 })
        }
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }

    sortDay = trips => {
        const get_all_date = trips.map(plan => {
            if (plan.days[0].places[0]) {
                const { date } = plan.days[0]
                const time = plan.days[0].places[0].time.start
                return new Date(`${date}T${time}`)
            }
            return -1
        })
        const all_date = get_all_date.map(date =>
            date === -1 ? -1 : date - new Date()
        )
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
