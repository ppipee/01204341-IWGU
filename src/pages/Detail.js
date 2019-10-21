import React, { Component } from 'react'
import {
    NavBar,
    ImageSlider,
    InfoPlace,
    RoutePlace,
    Facilities,
    NearBy,
} from '../components'

class DetailPage extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className='detail-page'>
                <NavBar back />
                <ImageSlider />
                <InfoPlace />
                <RoutePlace />
                <Facilities />
                <NearBy />
            </div>
        )
    }
}
export default DetailPage
