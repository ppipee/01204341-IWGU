import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../assets/scss/signin.scss'

class SignIn extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div className='signin'>
                <h2>SignIn</h2>
                <button>Sign in</button>
                <Link to='/auth?signup'>
                    <button>Sign up</button>
                </Link>
            </div>
        )
    }
}
export default SignIn
