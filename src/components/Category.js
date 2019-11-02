import React, { Component } from 'react'
import Slider from 'react-slick'
import { Search, Close } from './Icon'
import { PhotoCategory } from './Initial'
import '../assets/scss/category.scss'

class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            popup: false,
            card_state: this.props.tags,
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.tags !== this.props.tags)
            this.setState({ card_state: this.props.tags })
    }

    handleClick = state => {
        this.setState({ popup: state })
    }

    toggleCard = e => {
        const index = +e.target.getAttribute('index')
        let current_state = this.state.card_state
        const check = current_state.includes(index)
        if (check) current_state.splice(current_state.indexOf(index), 1)
        else current_state = [...current_state, index]
        this.setState({ card_state: current_state })
        this.props.settag(current_state)
    }

    categoryCard = () => {
        const box = []
        let card = []
        PhotoCategory.forEach((category, i) => {
            if (i % 9 === 0 && i !== 0) {
                box.push(
                    <div
                        className='category-card'
                        key={`category-box-${box.length}`}
                    >
                        {card}
                    </div>
                )
                card = []
            }
            const check = this.state.card_state.includes(i)
            card.push(
                <div
                    className={`card-loop ${check ? 'active' : ''}`}
                    key={`category-inactive-${category.title}`}
                    index={i}
                    onClick={this.toggleCard}
                >
                    <span className='icon-tag'>
                        {check ? category.icon_active : category.icon_inactive}
                    </span>
                    <div>
                        <p
                            className={`category-title ${
                                check ? 'active' : 'inactive'
                            }`}
                        >
                            {category.title}
                        </p>
                    </div>
                </div>
            )
        })
        box.push(
            <div className='category-card' key={`category-box-${box.length}`}>
                {card}
            </div>
        )
        return box
    }

    categoryPopup = () => {
        const settings = {
            dots: true,
            arrows: false,
            slidesToShow: 1,
            swipeToSlide: true,
            speed: 500,
            responsive: [
                {
                    breakpoint: 400,
                    // settings: {
                    //     centerPadding: '30px',
                    // },
                },
            ],
        }

        if (this.state.popup)
            return (
                <>
                    <div className={`category-container ${this.state.popup}`} />
                    <div>
                        <div className='category-modal'>
                            <div className='search-bar'>
                                <span className='search-icon'>
                                    <Search
                                        fill='#B0B0B0'
                                        size='16'
                                        alt='search-icon'
                                    />
                                </span>
                                <input width='22px' placeholder='Search' />
                                <span
                                    className='close-icon'
                                    onClick={() => this.handleClick(false)}
                                >
                                    <Close fill='#F2B099' size='14' />
                                </span>
                            </div>
                            <hr />
                            <Slider {...settings}>{this.categoryCard()}</Slider>
                        </div>
                    </div>
                </>
            )
        return <div className='category-container' />
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
                <span onClick={() => this.handleClick(true)}>
                    <Search fill='#B0B0B0' size='16' alt='search-icon' />
                </span>
            </div>
        )
    }
}
export default Category
