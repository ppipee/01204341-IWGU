import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import { compose } from 'redux'
import { User, Lock } from './Icon'
import { UserAuthAction } from '../action'
import { userRegister } from '../queries/user'
import { authRegister } from '../queries/auth'
import '../assets/scss/signup.scss'

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
            user_duplicate: true,
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

    handleClickOutside = async event => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            if (event.target.placeholder !== 'Username') {
                await this.props.auth.refetch({ username: this.state.username })
                const auth = this.props.auth.authRegister
                const crtuser = this.state.username.length >= 5
                this.setState({ crtuser, user_duplicate: auth })
            }
            this.setState({
                lineUser: false,
                linePass: false,
                lineConfirm: false,
            })
        }
    }

    getLine = (user, notuse1, notuse2) =>
        this.setState({ [user]: true, [notuse1]: false, [notuse2]: false })

    submit = () => {
        const { username, password } = this.state
        this.props
            .userRegister({
                variables: {
                    username,
                    password,
                },
            })
            .then(data => {
                const { name, status } = data.data.register
                const key = Object.keys(data.data.register)[0]
                this.props.signup(data.data.register[key], name, status)
                this.props.history.push('/')
            })
    }

    checkcrt = e => {
        if (
            (e.charCode === 13 || e.target.nodeName === 'BUTTON') &&
            this.state.password !== '' &&
            this.state.confirmPass !== ''
        ) {
            const crtpass = this.state.password.length >= 5
            const pass_match = this.state.password === this.state.confirmPass
            this.setState({
                crtpass,
                passDontMacth: pass_match,
                confirmPass: '',
            })
            if (
                this.state.username.length >= 5 &&
                this.state.password.length >= 5 &&
                this.state.confirmPass.length >= 5
            ) {
                this.checkData()
            }
        }
    }

    checkData = () => {
        if (
            this.state.password === this.state.confirmPass &&
            this.state.user_duplicate
        ) {
            this.submit()
        } else {
            this.setState({ passDontMacth: false, confirmPass: '' })
        }
    }

    render() {
        return (
            <div className='signup'>
                <div className='head'>
                    <div className='Rectangle' />
                    <p className='welcome'>Welcome to []</p>
                </div>
                <div className='manage'>
                    <div className='body'>
                        <div className='box'>
                            <span className='box-user'>
                                <span>
                                    <User fill='#FDC1AA' />
                                </span>
                                <input
                                    onKeyPress={this.checkcrt}
                                    ref={this.setWrapperRef}
                                    className='input'
                                    placeholder='Username'
                                    value={this.state.username}
                                    onChange={e =>
                                        this.setState({
                                            username: e.target.value,
                                        })
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
                                    this.state.lineUser
                                        ? 'select'
                                        : 'not-select'
                                }`}
                            />
                            <div
                                className={`dontMatch ${
                                    this.state.crtuser ? 'match' : ''
                                }`}
                            >
                                must be at least 5 characters
                            </div>
                            <div
                                className={`dontMatch ${
                                    this.state.user_duplicate ? 'match' : ''
                                }`}
                            >
                                username duplicated
                            </div>
                        </div>
                        <div className='box'>
                            <span className='box-vector password'>
                                <span>
                                    <Lock fill='#FDC1AA' />
                                </span>
                                <input
                                    onKeyPress={this.checkcrt}
                                    ref={this.setWrapperRef}
                                    type='password'
                                    className='input'
                                    placeholder='Password'
                                    value={this.state.password}
                                    onChange={e =>
                                        this.setState({
                                            password: e.target.value,
                                        })
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
                                    this.state.linePass
                                        ? 'select'
                                        : 'not-select'
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
                            <span className='box-vector'>
                                <span>
                                    <Lock fill='#FEDEC4' />
                                </span>
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
                                    this.state.lineConfirm
                                        ? 'select'
                                        : 'not-select'
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
            </div>
        )
    }
}

export default compose(
    withRouter,
    graphql(userRegister, { name: 'userRegister' }),
    graphql(authRegister, { name: 'auth' }),
    connect(
        null,
        dispatch => {
            return {
                signup: (userid, name, status) =>
                    dispatch({
                        type: UserAuthAction.LOGIN,
                        userid,
                        name,
                        status,
                    }),
            }
        }
    )
)(SignUp)
