import Slider from 'react-slick'
import React from 'react'
import './../assets/scss/explore.scss'
import paper_airplane from '../assets/icon/paper-airplane.svg'
import bangkok from '../assets/img/bangkok.jpg'

class Explore extends React.Component {
  render() {
    var settings = {
      dots: true,
      // infinite: true,
      // speed: 500,
      // slidesToShow: 1,
      // slidesToScroll: 1
    };
    return (
      <div className='explore'>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <div className='explore-title'>
            <img src={paper_airplane} />
            <p > Explore </p>
          </div>
          <div className='explore-card'>
            
              <Slider {...settings}>
                <div> 
                  <img src={bangkok} />
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
                <div>
                  <h3>5</h3>
                </div>
                <div>
                  <h3>6</h3>
                </div>
              </Slider>
            
          </div>
        </div>    
    )
  }
}
export default Explore