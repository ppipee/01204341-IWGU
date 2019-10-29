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
                <h2>SignUp</h2>
                <button>Sign up</button>
                <Link to='/auth'>
                    <button>Sign in</button>
                </Link>
            </div>
        )
    }
}
export default SignUp
