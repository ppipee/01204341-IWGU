import React from 'react'
import { Slider } from 'antd'
import '../assets/scss/timefilter.scss'

const rePresentTime = (time) => {
    let unit = time <= 12 || time > 24 ? "AM" : "PM"
    let new_time
    if (time <= 24)
        new_time = time <= 12 ? time : time - 12
    else
        new_time = time - 24
    return `${new_time} ${unit}`
}

const TimeFilter = (props) => {
    const time = props.time
    const handleTime = (time) => {
        if (time[0] - time[1] !== 0)
            props.handleTime(time)
    }
    return (
        <div className="open-hour">
            <div className="head">Opening hours</div>
            <div className="feature">
                <Slider
                    min={6}
                    max={29}
                    range
                    value={time}
                    tooltipVisible={false}
                    onChange={handleTime} />
                <div className="time">
                    <div className="time-start">{rePresentTime(time[0])}</div>
                    <div className="time-end">{rePresentTime(time[1])}</div>
                </div>
            </div>
        </div>)
}
export default TimeFilter 