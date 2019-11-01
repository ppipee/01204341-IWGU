import React, { Component } from 'react'
import { SignIn, SignUp } from '../components'

class Auth extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        const location = new URLSearchParams(this.props.location.search)
        if (location.get('signup') === '') return <SignUp />
        return <SignIn />
    }
}
export default Auth
