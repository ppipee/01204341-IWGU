import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../assets/scss/signup.scss'

class SignUp extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className='signup'>
                <div className='head'>
                    <div className='Rectangle' />
                    <p className='welcome'>WELCOME TO []</p>
                </div>
            </div>
        )
    }
}

export default SignUp
