import React, { Component } from 'react'
import '../assets/scss/imageslider.scss'
import { Images } from './Demo'

class ImageSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image_show: 0,
        }
    }

    handleImage = e => {
        const index = e.target.getAttribute('index')
        this.setState({ image_show: index })
    }

    focusImage = () =>
        Images.map((img, i) => {
            const check = i === +this.state.image_show
            return (
                <img
                    className={`img${check ? ' active' : ''}`}
                    src={check ? Images[this.state.image_show] : ''}
                    key={`img-foucus-${i + 1}`}
                    alt='img-focus'
                    style={
                        check ? { transform: translateX(`-${20 * i} px`) } : {}
                    }
                />
            )
        })

    genImages = () => (
        <div className='images-container'>
            {Images.map((img, index) => (
                <div
                    className={`image-contain ${
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

    render() {
        return (
            <div className='image-slider'>
                <div className='image-focus'>{this.focusImage()}</div>
                {this.genImages()}
            </div>
        )
    }
}
export default ImageSlider
