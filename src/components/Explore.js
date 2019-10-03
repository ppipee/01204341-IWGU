import React, { Component } from 'react';
import Slider from 'react-slick'
import './../assets/scss/explore.scss'
import paper_airplane from '../assets/icon/paper-airplane.svg'
import img0 from '../assets/img/bangkok2.png'
import img1 from '../assets/img/bangkok3.jpg'
import img2 from '../assets/img/bangkok4.jpg'
import img3 from '../assets/img/yaowarach.jpg'

const TopAttractions = [
    {
      'image': img0,
      'title': 'Bangkok, Thailand',
      'subtitle': 'The Beautiful temple near Chao Phraya River',
    },
    {
      'image': img1,
      'title': 'Bangkok, Thailand',
      'subtitle': 'The Beautiful temple near Chao Phraya River',
    },
    {
      'image': img2,
      'title': 'Bangkok, Thailand',
      'subtitle': 'The Beautiful temple near Chao Phraya River',
    },
    {
      'image': img3,
      'title': 'Bangkok, Thailand',
      'subtitle': 'The Beautiful temple near Chao Phraya River',
    }
  ]

export default class Explore extends React.Component {
  genPlace () {
    let card = []
    TopAttractions.forEach(place => {
      card.push(
      <div className='explore-card'> 
        <div>
          <img src={place.image} />
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
    let settings = {
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
          }
        },
      ]
    };
    return (
      <div className='explore'>
        <link rel='stylesheet' type='text/css' charSet='UTF-8' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' />
        <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' />
          <div className='explore-title'>
            <img src={paper_airplane} />
            <p > Explore </p>
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
