import React, { Component } from 'react'
import { Plus } from './Icon'
import '../assets/scss/addtrip.scss'

class CreateTrip extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className='add-trip'>
                <img src={Plus} alt='plus-btn' />
            </div>
        )
    }
}
export default CreateTrip
