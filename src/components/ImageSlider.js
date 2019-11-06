import React, { Component } from 'react'
import '../assets/scss/imageslider.scss'
import { Images } from './Initial'
import Background from '../assets/img/img-slider-bg.svg'

class ImageSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image_show: 0,
        }
    }

    handleImage = async e => {
        const index = e.target.getAttribute('index')
        this.sliceAnimation(index)
        // console.log(this.focusRef.offsetLeft)
        this.setState({ image_show: index })
    }

    focusImage = images =>
        images.map((img, i) => {
            const check = i === +this.state.image_show
            return (
                <img
                    className={`img${check ? ' active' : ''}`}
                    src={check ? images[this.state.image_show] : ''}
                    key={`img-foucus-${i + 1}`}
                    alt='img-focus'
                />
            )
        })

    genImages = images => {
        // let padding = 58
        // if (this.focusRef)
        //     padding = this.focusRef.offsetLeft
        return (
            <div
                className='images-container'
                ref={node => {
                    this.scrollRef = node
                }}
                // style={{ paddingLeft: `${padding}px` }}
            >
                {images.map((img, index) => (
                    <div
                        className={`image-border ${
                            index === +this.state.image_show ? 'focus' : ''
                        }`}
                        key={`img-contain-${index + 1}`}
                    >
                        <img
                            src={img}
                            index={index}
                            alt={`img-storage-${index}`}
                            onClick={this.handleImage}
                        />
                    </div>
                ))}
            </div>
        )
    }

    sliceAnimation = index => {
        const position = 91 * index - this.scrollRef.scrollLeft
        for (let i = 0; i < Math.abs(position); i++) {
            setTimeout(() => {
                if (position >= 0) this.scrollRef.scrollBy(1, 0)
                else this.scrollRef.scrollBy(-1, 0)
            }, 1)
        }
    }

    render() {
        const images = this.props.img ? this.props.img : Images
        return (
            <div className='image-slider'>
                <img
                    className='slider-bg'
                    src={Background}
                    alt='img-slider-bg'
                />
                <div>
                    <div
                        className='image-focus'
                        ref={node => {
                            this.focusRef = node
                        }}
                    >
                        {this.focusImage(images)}
                    </div>
                    {this.genImages(images)}
                </div>
            </div>
        )
    }
}
export default ImageSlider
