import React, { Component } from 'react'
import { Plus } from './Icon'
import '../assets/scss/addtrip.scss'

class CreateTrip extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return <img src={Plus} alt='plus-btn' className='add-trip' />
    }
}
export default CreateTrip
