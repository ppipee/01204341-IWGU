import React, { Component } from 'react'
import Slider from 'react-slick'
import '../assets/scss/explore.scss'
import { PaperAirplane } from './Icon'
import { img0, img1, img2, img3 } from './Demo'

const TopAttractions = [
    {
        image: img0,
        title: 'Bangkok, Thailand',
        subtitle: 'The Beautiful temple near Chao Phraya River',
    },
    {
        image: img1,
        title: 'Bangkok, Thailand',
        subtitle: 'The Beautiful temple near Chao Phraya River',
    },
    {
        image: img2,
        title: 'Bangkok, Thailand',
        subtitle: 'The Beautiful temple near Chao Phraya River',
    },
    {
        image: img3,
        title: 'Bangkok, Thailand',
        subtitle: 'The Beautiful temple near Chao Phraya River',
    },
]

export default class Explore extends Component {
    genPlace() {
        const card = []
        TopAttractions.forEach(place => {
            card.push(
                <div className='explore-card'>
                    <div>
                        <img src={place.image} alt='place-img' />
                    </div>
                    <div className='box-title'>
                        <p className='title'>{place.title}</p>
                        <p className='subtitle'>{place.subtitle}</p>
                    </div>
                </div>
            )
        })
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
            responsive: [
                {
                    breakpoint: 400,
                    settings: {
                        centerPadding: '30px',
                    },
                },
            ],
        }
        return (
            <div className='explore'>
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
                <div className='explore-title'>
                    <img src={PaperAirplane} alt='paper-airplane' />
                    <p> Explore </p>
                </div>
                <div>
                    <Slider {...settings}>
                        {this.genPlace()}
                    </Slider>
                </div>
            </div>
        )
    }
}
