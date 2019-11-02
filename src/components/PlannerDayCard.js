import React, { Component } from 'react'
import Slider from 'react-slick'
import { Trip } from './Demo'
import '../assets/scss/plannerdaycard.scss'

const Months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
]
const TripPlan = Trip[0]

class PlannerDayCard extends Component {
    constructor() {
        super()
        this.state = {}
    }

    genDayCard() {
        const day = TripPlan.days.length
        const card = []
        for (let i = 0; i < day + 1; i++) {
            let head = 'Draft'
            if (i !== 0) {
                const { date } = TripPlan.days[i - 1]
                head = `${date.getDate()} ${Months[date.getMonth()]}`
            }
            card.push(
                <div className='day-card'>
                    <div className='top'>
                        <p>{head}</p>
                    </div>
                    <div className='content' />
                </div>
            )
        }
        return card
    }

    render() {
        const settings = {
            dots: true,
            infinite: false,
            arrows: false,
            slidesToShow: 1,
            swipeToSlide: true,
            focusOnSelect: true,
            speed: 500,
            centerMode: true,
            centerPadding: '45px',
            customPaging(i) {
                if (i === 0) i = 'D'
                return <span className='dot'>{i}</span>
            },
        }
        return (
            <div className='planner-day'>
                <link
                    rel='stylesheet'
                    type='text/css'
                    charSet='UTF-8'
                    href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
                />
                <link
                    rel='stylesheet'
                    type='text/css'
                    href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
                />
                <div>
                    <Slider {...settings}>{this.genDayCard()}</Slider>
                </div>
            </div>
        )
    }
}
export default PlannerDayCard
