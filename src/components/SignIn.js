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
            // crtuser: true,
            // crtpass: true,
            // passDontMacth: true,
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

    // checkCharacter = e => {
    //     if (
    //         (e.charCode === 13 || e.target.nodeName === 'BUTTON') &&
    //         this.state.password !== '' &&
    //         this.state.confirmPass !== ''
    //     ) {
    //         if (this.state.username.length < 5) {
    //             this.setState({ crtuser: false })
    //         } else {
    //             this.setState({ crtuser: true })
    //         }
    //         if (this.state.password.length < 5) {
    //             this.setState({ crtpass: false })
    //         } else {
    //             this.setState({ crtpass: true })
    //         }
    //         if (this.state.password !== this.state.confirmPass) {
    //             this.setState({ passDontMacth: false })
    //         }
    //         if (
    //             this.state.username.length >= 5 &&
    //             this.state.password.length >= 5
    //         ) {
    //             this.checkPass()
    //         }
    //     }
    // }

    // checkPass = () => {
    //     if (this.state.password === this.state.confirmPass) {
    //         this.submit()
    //     } else {
    //         this.setState({ passDontMacth: false })
    //     }
    // }

    render() {
        return (
            <div className='signin'>
                <div className='anything'>
                    <div className='user-display' />
                    <p className='title'> Hello, Traveler </p>
                </div>
                <div className='signin-box'>
                    <div className='input-username' ref={this.setWrapperRef}>
                        <User fill='#FDC1AA' />
                        <input
                            onKeyPress={this.checkCharacter}
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
                        <Lock fill='#FDC1AA' />
                        <input
                            onKeyPress={this.checkCharacter}
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
                    {/* <div
                        className={`dontMatch ${
                            this.state.crtuser ? 'match' : ''
                        }`}
                    >
                        must be at least 5 characters
                    </div> */}
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
