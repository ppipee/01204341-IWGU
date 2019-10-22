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
        Images.map((img, i) => (
            <img
                className={`img${
                    i === +this.state.image_show ? ' active' : ''
                }`}
                src={Images[this.state.image_show]}
                alt='img-focus'
            />
        ))

    genImages = () => (
        <div className='images-container'>
            {Images.map((img, index) => (
                <div>
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
