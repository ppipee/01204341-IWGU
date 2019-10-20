import React, { Component } from 'react'
import '../assets/scss/headcreatetrip.scss'

class HeadCreateTrip extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className='head-create-trip'>
                title
                <button onClick={this.props.click}>X</button>
            </div>
        )
    }
}
export default HeadCreateTrip
