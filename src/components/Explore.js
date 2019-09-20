import React, { Component } from 'react';
import Slider from 'react-slick'
import './../assets/scss/explore.scss'
import paper_airplane from '../assets/icon/paper-airplane.svg'

export default class Explore extends React.Component {
  render() {
    let settings = {
      dots: true,
      focusOnSelect: true,
      infinite: false,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      swipeToSlide: true,
      centerMode: true,
      centerPadding: '30px',
    };
    return (
      <div className='explore'>
        <link rel='stylesheet' type='text/css' charset='UTF-8' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' />
        <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' />
          <div className='explore-title'>
            <img src={paper_airplane} />
            <p > Explore </p>
          </div>
          <div>
            <div className='slider'> 
              <Slider {...settings}>
                <div className='explore-card'> 
                  <div className='image'></div>
                  <div className='box-title'>
                    <p className='title'> Bangkok, Thailand </p>
                    <p className='subtitle'> The Beautiful temple near Chao Phraya River </p>
                  </div>
                </div>
                <div className='explore-card'> 
                  <div className='image'></div>
                  <div className='box-title'>
                    <p className='title'> Bangkok, Thailand </p>
                    <p className='subtitle'> The Beautiful temple near Chao Phraya River </p>
                  </div>
                </div>
                <div className='explore-card'> 
                  <div className='image'></div>
                  <div className='box-title'>
                    <p className='title'> Bangkok, Thailand </p>
                    <p className='subtitle'> The Beautiful temple near Chao Phraya River </p>
                  </div>
                </div>
                <div className='explore-card'> 
                  <div className='image'></div>
                  <div className='box-title'>
                    <p className='title'> Bangkok, Thailand </p>
                    <p className='subtitle'> The Beautiful temple near Chao Phraya River </p>
                  </div>
                </div>
              </Slider>
            </div>  
          </div>
      </div>    
    )
  }
}
