import React, { Component } from 'react'
import { CloseColor } from './Icon'
import '../assets/scss/headcreatetrip.scss'

class HeadCreateTrip extends Component {
    constructor() {
        super()
        this.state = {
            value_inp: '',
        }
    }

    handleChange = e => {
        this.setState({ value_inp: e.target.value })
    }

    lengthCheck = () => {
        let name = ''
        const len = this.state.value_inp.length
        if (len !== 0) {
            name = len > 20 ? 'alert' : 'active'
        }
        return [
            <span className={`size-input ${name}`}>{len}/20</span>,
            <div className={`line ${name}`} />,
        ]
    }

    render() {
        return (
            <div className='head-create-trip'>
                <div className='title'>
                    <span>Create your new trip</span>

                    <img
                        src={CloseColor}
                        onClick={this.props.click}
                        alt='close-color-icon'
                    />
                </div>
                <div className='input'>
                    <div>
                        <input
                            placeholder='Name your trip'
                            value={this.state.value_inp}
                            onChange={this.handleChange}
                        />
                        {this.lengthCheck()[0]}
                    </div>
                    {this.lengthCheck()[1]}
                </div>
            </div>
        )
    }
}
export default HeadCreateTrip
