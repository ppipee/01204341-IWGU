import React, { Component } from 'react'
import OpeningHour from './OpeningHour'
import Review from './Review'
import '../assets/scss/infoplace.scss'

class InfoPlace extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className='info-place'>
                <div className='info-border'>
                    InfoPlace
                    <OpeningHour />
                    <Review rate={this.props.info.rate} />
                </div>
            </div>
        )
    }
}
export default InfoPlace
