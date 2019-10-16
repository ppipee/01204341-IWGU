import React, { Component } from 'react'
import { Plus } from './Icon'
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
                        <div className='head'>
                            title
                            <button onClick={this.handleClick}>X</button>
                        </div>
                        <div className='calendar'>calendar</div>
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
