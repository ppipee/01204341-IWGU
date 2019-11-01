import React, { Component } from 'react'
import NavBar from '../components/NavBar'

class Planner extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className='planners-page'>
                Planner
                <NavBar />
            </div>
        )
    }
}
export default Planner
