import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import { compose } from 'redux'
import { authSignin } from '../queries/auth'
import { getUser } from '../queries/user'
import { UserAuthAction } from '../action'
import { Lock, User } from './Icon'
import '../assets/scss/signin.scss'

class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            match: true,
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

    submit = async () => {
        await this.props.getUser
            .refetch({ username: this.state.username })
            .then(data => console.log(data))
        const { id, name, status } = this.props.getUser.user
        this.props.signup(id, name, status)
        this.props.history.push('/')
    }

    checkCharacter = async e => {
        if (
            (e.charCode === 13 || e.target.nodeName === 'BUTTON') &&
            this.state.password !== ''
        ) {
            const { username, password } = this.state
            await this.props.auth.refetch({ username, password })
            const auth = this.props.auth.authSignin
            console.log(auth)
            if (!auth) {
                this.setState({ match: false })
            } else this.submit()
        }
    }

    render() {
        return (
            <div className='signin'>
                <div className='anything'>
                    <div className='user-display' />
                    <p className='title'> Hello, Traveler </p>
                </div>
                <div className='signin-box'>
                    <div className='input-username' ref={this.setWrapperRef}>
                        <span className='user-icon'>
                            <User fill='#FDC1AA' />
                        </span>
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
                        <span className='lock-icon'>
                            <Lock fill='#FDC1AA' />
                        </span>
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
                    <div
                        className={`match-signin ${
                            this.state.match ? '' : 'inactive'
                        }`}
                    >
                        invalid username/password
                    </div>
                    <button
                        className='signin-button'
                        onClick={this.checkCharacter}
                    >
                         
                        Sign in 
                    </button>
                    <p> Don’t have an account? </p>
                    <Link to='/auth?signup'>
                        <button className='signup-button'>Sign up</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default compose(
    withRouter,
    graphql(authSignin, { name: 'auth' }),
    graphql(getUser, { name: 'getUser' }),
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
)(SignIn)
