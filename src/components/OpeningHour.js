import React, { Component } from 'react'
import '../assets/scss/openinghour.scss'
import { Clock } from './Icon'
import { Detail } from './Demo'

class OpeningHour extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            status: 'CLOSE',
            days: {
                day1: 'mon',
                day2: 'tue',
                day3: 'wed',
                day4: 'thu',
                day5: 'fri',
                day6: 'sat',
                day7: 'sun',
            },
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            const date = new Date()
            const weekday = date.getDay()
            const currentTime = date.getHours() * 60 + date.getMinutes()
            const hourOpen = +this.sliceTime(
                Detail.placeDetail.time.split(' ')[0].split(':')[0]
            )
            const minOpen = +this.sliceTime(
                Detail.placeDetail.time.split(' ')[0].split(':')[1]
            )
            const hourClose = +this.sliceTime(
                Detail.placeDetail.time.split(' ')[2].split(':')[0]
            )
            const minClose = +this.sliceTime(
                Detail.placeDetail.time.split(' ')[2].split(':')[1]
            )
            let box = []
            Object.keys(this.state.days).map((day, i) => {
                i += 1
                if (Detail.placeDetail.days[day] === false) {
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
        }, 30000)
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }

    genDays = () =>
        Object.keys(this.state.days).map(day => (
            <p
                key={`getOpen${day}`}
                className={Detail.placeDetail.days[day] ? 'active' : 'inactive'}
            >
                {' '}
                {this.state.days[day]}{' '}
            </p>
        ))

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
        return (
            <div className='opening-hour'>
                <div className='row'>
                    <img className='clock' src={Clock} alt='icon-clock' />
                    <span className='column'>
                        <div className='open-close'> {status} NOW</div>
                        <p className='time'>
                            {this.tConv24(
                                Detail.placeDetail.time.split(' ')[0]
                            )}{' '}
                            -{' '}
                            {this.tConv24(
                                Detail.placeDetail.time.split(' ')[2]
                            )}
                        </p>
                        <div className='days'>{this.genDays()}</div>
                    </span>
                </div>
            </div>
        )
    }
}
export default OpeningHour
