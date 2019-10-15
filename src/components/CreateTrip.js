import React, { Component } from 'react'
import { Plus } from './Icon'
import '../assets/scss/createtrip.scss'

class CreateTrip extends Component {
    constructor() {
        super()
        this.state = {}
    }

    createPlanner = () => {
        const new_planner = {
            id: '2',
            name: 'plan2',
            days: [
                {
                    date: new Date('2019-6-14'),
                },
            ],
        }
        this.props.planner(new_planner)
    }

    render() {
        return (
            <div className='create-trip' onClick={this.createPlanner}>
                <img src={Plus} alt='plus-btn' />
            </div>
        )
    }
}
export default CreateTrip
