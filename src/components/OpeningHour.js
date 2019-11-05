import React, { Component } from 'react'
import '../assets/scss/openinghour.scss'
import { Clock } from './Icon'
import { Time, Days } from './Random'

class OpeningHour extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            days: Days(),
            time: Time,
            status: 'CLOSE',
            days_draft: {
                day1: 'mon',
                day2: 'tue',
                day3: 'wed',
                day4: 'thu',
                day5: 'fri',
                day6: 'sat',
                day7: 'sun',
            },
        }
        // this.props.days = this.props.days !== null ? this.props.days : Days
        // this.props.time = this.props.time !== null ? this.props.time : Time
    }

    componentDidMount() {
        const date = new Date()
        const weekday = date.getDay()
        const currentTime = date.getHours() * 60 + date.getMinutes()
        const time =
            this.props.time !== null ? this.props.time : this.state.time
        const hourOpen = +this.sliceTime(time.split(' ')[0].split(':')[0])
        const minOpen = +this.sliceTime(time.split(' ')[0].split(':')[1])
        const hourClose = +this.sliceTime(time.split(' ')[2].split(':')[0])
        const minClose = +this.sliceTime(time.split(' ')[2].split(':')[1])
        let box = []
        const days =
            this.props.days.day1 !== null ? this.props.days : this.state.days
        Object.keys(this.state.days_draft).map((day, i) => {
            i += 1
            if (days[day] === false) {
                if (i === weekday) {
                    box = [...box, i]
                }
            }
            return box
        })
        if (box.length === 0) {
            if (
                hourOpen * 60 + minOpen <= currentTime &&
                currentTime <= hourClose * 60 + minClose
            ) {
                this.setState({ status: 'OPEN' })
            }
        }
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }

    genDays = () => {
        const days =
            this.props.days.day1 !== null ? this.props.days : this.state.days

        return Object.keys(this.state.days_draft).map(day => (
            <p
                key={`getOpen${day}`}
                className={days[day] ? 'p-active' : 'p-inactive'}
            >
                {' '}
                {this.state.days_draft[day]}{' '}
            </p>
        ))
    }

    tConv24 = time24 => {
        let ts = time24
        const H = +ts.substr(0, 2)
        let h = H % 12 || 12
        h = h < 10 ? `0${h}` : h
        const ampm = H < 12 ? ' AM' : ' PM'
        ts = `${h}.${ts.substr(3, 2)}${ampm}`
        return ts
    }

    sliceTime = time => {
        if (time[0] === '0') {
            time = time.substr(1, 1)
        }
        return time
    }

    render() {
        const { status } = this.state
        const time =
            this.props.time !== null ? this.props.time : this.state.time
        return (
            <div className='opening-hour'>
                <div className='row'>
                    <img className='clock' src={Clock} alt='icon-clock' />
                    <span className='column'>
                        <div
                            className={`open-close ${
                                this.state.status === 'CLOSE' ? 'close' : 'open'
                            }`}
                        >
                            {' '}
                            {status} NOW
                        </div>
                        <p className='time'>
                            {this.tConv24(time.split(' ')[0])} -{' '}
                            {this.tConv24(time.split(' ')[2])}
                        </p>
                        <div className='days'>{this.genDays()}</div>
                    </span>
                </div>
            </div>
        )
    }
}
export default OpeningHour
