import React, { Component } from 'react'
import '../assets/scss/addtrip.scss'

class AddTrip extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return <button className='add-trip'>+</button>
    }
}
export default AddTrip
