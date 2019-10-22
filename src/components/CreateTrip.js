import React, { Component } from 'react'
import { Plus } from './Icon'
import HeadCreateTrip from './HeadCreateTrip'
import Calendar from './CalendarTrip'
import '../assets/scss/createtrip.scss'

class CreateTrip extends Component {
    constructor() {
        super()
        this.state = {
            plan_maker: false,
        }
    }

    handleClick = () => {
        this.setState({ plan_maker: !this.state.plan_maker })
    }

    showMaker = () => {
        if (this.state.plan_maker) {
            return (
                <div className='plan-maker popup'>
                    <div className='create-trip popup'>
                        <HeadCreateTrip click={this.handleClick} />
                        <Calendar />
                    </div>
                </div>
            )
        }
        return (
            <div className='plan-maker'>
                <div className='create-trip' />
            </div>
        )
    }

    render() {
        return (
            <>
                <img
                    src={Plus}
                    alt='plus-btn'
                    className='add-btn'
                    onClick={this.handleClick}
                />
                {this.showMaker()}
            </>
        )
    }
}
export default CreateTrip
