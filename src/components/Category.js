import React, { Component } from 'react'
import Slider from 'react-slick'
import { SearchIcon, PinkClose, 
        LandmarkCategoryInActive, CafeInActive, ParkInActive, StreetFoodInActive, ArtInActive, MuseumInActive, BarInActive, HotelInActive, SpaInActive,
        LandmarkCategoryActive, CafeActive, ParkActive, StreetFoodActive, ArtActive, MuseumActive, BarActive, HotelActive, SpaActive } from './Icon'
import '../assets/scss/category.scss'

const PhotoCategory = [
    {
        icon_inactive: LandmarkCategoryInActive,
        icon_active: LandmarkCategoryActive,
        title: 'Landmark'
    },
    {
        icon_inactive: CafeInActive,
        icon_active: CafeActive,
        title: 'Café'
    },
    {
        icon_inactive: ParkInActive,
        icon_active: ParkActive,
        title: 'Park'
    },
    {
        icon_inactive: StreetFoodInActive,
        icon_active: StreetFoodActive,
        title: 'Street Food'
    },
    {
        icon_inactive: ArtInActive,
        icon_active: ArtActive,
        title: 'Arts'
    },
    {
        icon_inactive: MuseumInActive,
        icon_active: MuseumActive,
        title: 'Museum'
    },
    {
        icon_inactive: BarInActive,
        icon_active: BarActive,
        title: 'Bar'
    },
    {
        icon_inactive: HotelInActive,
        icon_active: HotelActive,
        title: 'Hotel'
    },
    {
        icon_inactive: SpaInActive,
        icon_active: SpaActive,
        title: 'Spa'
    },
    {
        icon_inactive: SpaInActive,
        icon_active: SpaActive,
        title: 'Spā'
    },
]

class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            popup: false,
            card_click: false,
        }
    }

    handleClick = (state) => {
        this.setState({popup: state})
    }

    // categoryClick = () => {
    //     this.setState ({
    //         card_click: !this.state.card_click}) 
    // }
 
    categoryCard = () => {
        let box =[]
        let card = []
        PhotoCategory.forEach((category, i) => {
            if (i%9 === 0 && i !== 0) {
                box.push(<div className='category-card' key={`category-box-${box.length}`}>{card}</div>)
                card = []
            }
            card.push(
                <div className='card-loop' key={`category-inactive-${category.title}`} >
                    {/* <button className= {this.state.card_click ? "clickTrue": "clickFalse"} onClick={this.categoryClick}></button> */}
                    <div>
                        <img src={category.icon_inactive} alt='category-icon-inactive' />
                    </div>
                    <div>
                        <p className='category-title'> 
                            {category.title}
                        </p>
                    </div>
                </div>
            )
            // if (this.state.card_click === "clickTrue")
            //     return (
            //         <>
                    
            //         </>
            //     )
        })
        box.push(<div className='category-card' key={`category-box-${box.length}`}>{card}</div>)
        return box
    }
    
    categoryPopup = () => { 
        const settings = {
            dots: true,
            arrows: false,
            slidesToShow: 1,
            swipeToSlide: true,
            speed: 500,
        }
        if (this.state.popup)
            return (
                <>
                    <div className={`category-container ${this.state.popup}`}/>
                    <div>
                        <div className='category-modal'>
                            <div className='search-bar'>
                                <img className='search-icon' src={SearchIcon} />
                                <input width = '22px' placeholder='Search' />
                                <img className='close-icon' src={PinkClose} alt='close-icon' onClick = {() => this.handleClick(false)}/>
                            </div>
                            <hr/>
                            <Slider {...settings}>
                                    {this.categoryCard()}
                            </Slider>         
                        </div>
                    </div>
                </>
            )
        return (<div className='category-container'/>)
            
    }

    render() {
        return (
            <div className='category'>
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
                {this.categoryPopup()}
                <img src={SearchIcon} alt='search-icon' onClick = {() => this.handleClick(true)} />
            </div>
        )
    }
}
export default Category