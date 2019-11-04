import React, { Component } from 'react'
import Slider from 'react-slick'
import moment from 'moment'
import PlannerPlaceCard from './PlannerPlaceCard'
import '../assets/scss/plannerdaycard.scss'

class PlannerDayCard extends Component {
    constructor() {
        super()
        this.state = {}
    }

    componentWillMount() {
        document.body.style.overflow = 'hidden'
    }

    componentWillUnmount() {
        document.body.style.overflow = ''
    }

    genDayCard(planner) {
        const day = planner.days.length
        const card = []
        const dayRange = planner.days
        for (let i = 0; i < day + 1; i++) {
            let head = 'Draft'
            let places = []
            if (i !== 0) {
                const { date } = planner.days[i - 1]
                places = planner.days[i - 1].places
                head = moment(date, 'YYYY-MM-DD').format('D MMM')
            }
            card.push(
                <div key={`day-${i + 1}`} className='day-card'>
                    <div className='top'>
                        <p>{head}</p>
                    </div>
                    <div className='content'>
                        <PlannerPlaceCard
                            day={i}
                            range={dayRange}
                            places={places}
                        />
                    </div>
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
        const planner = this.props
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
                    <Slider {...settings}>
                        {this.genDayCard(planner.planner)}
                    </Slider>
                </div>
            </div>
        )
    }
}
export default PlannerDayCard
