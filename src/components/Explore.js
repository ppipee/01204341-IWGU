import Slider from 'react-slick'
import React from 'react'
import './../assets/scss/explore.scss'
import paper_airplane from '../assets/icon/paper-airplane.svg'
const Explore = () => {
    return (
        <div className='explore'>
            <div className='explore-title'>
              <img src={paper_airplane} />
              <p > Explore </p>
            </div>
            <div className='explore-card'>

            </div>
        </div>
    )
}
export default Explore

// class Explore extends React.Component {
//   render() {
//     var settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <Slider {...settings}>
//         <div>
//           Explore
//         </div>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     );
//   }
// }

// export default Explore