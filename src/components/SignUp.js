import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import { compose } from 'redux'
import '../assets/scss/signup.scss'
import { user, vector, lock } from './Icon'
import { getUsers, userRegister, userData } from '../queries/user'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            confirmPass: '',
            crtuser: true,
            crtpass: true,
            passDontMacth: true,
            lineUser: false,
            linePass: false,
            lineConfirm: false,
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
            this.setState({ lineConfirm: false })
        }
    }

    getLine = (user, notuse1, notuse2) => {
        this.setState({ [user]: true })
        this.setState({ [notuse1]: false })
        this.setState({ [notuse2]: false })
    }

    submit = () => {
        const { username, password } = this.state
        this.props.userRegister({
            variables: {
                username,
                password,
            },
        })
        this.props.history.push('/')
        this.setState({
            username: '',
            password: '',
            confirmPass: '',
            passDontMacth: true,
        })
    }

    checkcrt = e => {
        if (
            (e.charCode === 13 || e.target.nodeName === 'BUTTON') &&
            this.state.password !== '' &&
            this.state.confirmPass !== ''
        ) {
            if (this.state.username.length < 5) {
                this.setState({ crtuser: false })
            } else {
                this.setState({ crtuser: true })
            }
            if (this.state.password.length < 5) {
                this.setState({ crtpass: false })
            } else {
                this.setState({ crtpass: true })
            }
            if (this.state.password !== this.state.confirmPass) {
                this.setState({ passDontMacth: false })
            }
            if (
                this.state.username.length >= 5 &&
                this.state.password.length >= 5
            ) {
                this.checkPass()
            }
        }
    }

    checkPass = () => {
        if (this.state.password === this.state.confirmPass) {
            this.submit()
        } else {
            this.setState({ passDontMacth: false })
        }
    }

    render() {
        return (
            <div className='signup'>
                <div className='head'>
                    <div className='Rectangle' />
                    <p className='welcome'>WELCOME TO []</p>
                </div>
                <div className='body'>
                    <div className='box'>
                        <span className='box-user'>
                            <img
                                src={user}
                                alt='icon-user'
                                className='icon-user'
                            />
                            <input
                                onKeyPress={this.checkcrt}
                                ref={this.setWrapperRef}
                                className='input'
                                placeholder='Username'
                                value={this.state.username}
                                onChange={e =>
                                    this.setState({ username: e.target.value })
                                }
                                onClick={() =>
                                    this.getLine(
                                        'lineUser',
                                        'linePass',
                                        'lineConfirm'
                                    )
                                }
                            />
                        </span>
                        <div
                            className={`line ${
                                this.state.lineUser ? 'select' : 'not-select'
                            }`}
                        />
                        <div
                            className={`dontMatch ${
                                this.state.crtuser ? 'match' : ''
                            }`}
                        >
                            must be at least 5 characters
                        </div>
                    </div>
                    <div className='box'>
                        <span
                            className={`box-vector ${
                                this.state.crtuser ? 'default' : 'down'
                            }`}
                        >
                            <img
                                src={vector}
                                alt='icon-vector'
                                className='icon-vector'
                            />
                            <input
                                onKeyPress={this.checkcrt}
                                ref={this.setWrapperRef}
                                type='password'
                                className='input'
                                placeholder='Password'
                                value={this.state.password}
                                onChange={e =>
                                    this.setState({ password: e.target.value })
                                }
                                onClick={() =>
                                    this.getLine(
                                        'linePass',
                                        'lineUser',
                                        'lineConfirm'
                                    )
                                }
                            />
                        </span>
                        <div
                            className={`line ${
                                this.state.linePass ? 'select' : 'not-select'
                            }`}
                        />
                        <div
                            className={`dontMatch ${
                                this.state.crtpass ? 'match' : ''
                            }`}
                        >
                            must be at least 5 characters
                        </div>
                    </div>
                    <div className='box'>
                        <span
                            className={`box-vector ${
                                this.state.crtpass ? 'default' : 'down'
                            }`}
                        >
                            <img
                                src={lock}
                                alt='icon-vector'
                                className='icon-vector'
                            />
                            <input
                                onKeyPress={this.checkcrt}
                                ref={this.setWrapperRef}
                                type='password'
                                className='input'
                                placeholder='Confirm Password'
                                value={this.state.confirmPass}
                                onChange={e =>
                                    this.setState({
                                        confirmPass: e.target.value,
                                    })
                                }
                                onClick={() =>
                                    this.getLine(
                                        'lineConfirm',
                                        'linePass',
                                        'lineUser'
                                    )
                                }
                            />
                        </span>
                        <div
                            className={`line ${
                                this.state.lineConfirm ? 'select' : 'not-select'
                            }`}
                        />
                        <div
                            className={`dontMatch ${
                                this.state.passDontMacth ? 'match' : ''
                            }`}
                        >
                            Password confirmation doesn’t match
                        </div>
                    </div>
                </div>
                <div
                    className={`bottom ${
                        this.state.passDontMacth ? 'default' : 'down'
                    }`}
                >
                    <button className='submit' onClick={this.checkcrt}>
                        Sign up
                    </button>
                    <p className='text-have-account'>
                        Already have an account?
                    </p>
                    <Link to='/auth'>
                        <button className='sing-in'>Sign in</button>
                    </Link>
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

export default compose(
    withRouter,
    graphql(getUsers, { name: 'users' }),
    graphql(userRegister, { name: 'userRegister' }),
    graphql(userData, { name: 'userData' })
)(SignUp)
