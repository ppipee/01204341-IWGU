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

// eslint-disable-next-line no-lone-blocks
{
    /* <h2>SignUp</h2>
<button>Sign up</button>
<Link to='/auth'>
    <button>Sign in</button>
</Link> */
}

export default SignUp
