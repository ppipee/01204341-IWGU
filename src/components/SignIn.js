import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Lock, User } from './Icon'
import '../assets/scss/signin.scss'

export default class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            lineUser: false,
            linePass: false,
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside)
    }

    setWrapperRef = node => {
        this.wrapperRef = node
    }

    handleClickOutside = event => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ lineUser: false })
            this.setState({ linePass: false })
        }
    }

    getLine = (user, notuse) => {
        this.setState({ [user]: true })
        this.setState({ [notuse]: false })
    }

    render() {
        return (
            <div className='signin'>
                <div className='user-display' />
                <p className='title'> Hello, Traveler </p>
                <div className='signin-box'>
                    <div className='input-username' ref={this.setWrapperRef}>
                        <img alt='user-icon' src={User} />
                        <input
                            placeholder='Username'
                            value={this.state.username}
                            onChange={e =>
                                this.setState({ username: e.target.value })
                            }
                            onClick={() => this.getLine('lineUser', 'linePass')}
                        />
                    </div>
                    <div
                        className={`line ${
                            this.state.lineUser ? 'active' : ''
                        }`}
                    />
                    <div className='input-password' ref={this.setWrapperRef}>
                        <img alt='lock-icon' src={Lock} />
                        <input
                            placeholder='Password'
                            value={this.state.password}
                            onChange={e =>
                                this.setState({ password: e.target.value })
                            }
                            onClick={() => this.getLine('linePass', 'lineUser')}
                        />
                    </div>
                    <div
                        className={`line ${
                            this.state.linePass ? 'active' : ''
                        }`}
                    />
                    <Link to='/'>
                        <button className='signin-button'> Sign in </button>
                    </Link>
                    <p> Don’t have an account? </p>
                    <Link to='/auth?signup'>
                        <button className='signup-button'>Sign up</button>
                    </Link>
                </div>
            </div>
        )
    }
}
