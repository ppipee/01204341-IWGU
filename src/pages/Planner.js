import React, { Component } from 'react'
import { NavBar } from '../components'
import '../assets/scss/planner.scss'

class Planner extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className='planners-page'>
                <NavBar back design='planners-page' />
            </div>
        )
    }
}
export default Planner
