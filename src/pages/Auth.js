import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { SignIn, SignUp } from '../components'
import { UserAuthAction } from '../action'

class Auth extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        if (this.props.getUser === '') {
            const location = new URLSearchParams(this.props.location.search)
            if (location.get('signup') === '')
                return <SignUp login={this.props.login} />
            return <SignIn login={this.props.login} />
        }
        return <>{this.props.history.push('/')}</>
    }
}

export default compose(
    withRouter,
    connect(
        state => {
            return {
                getUser: state.userauth.username,
            }
        },
        dispatch => {
            return {
                login: (userid, name, status) =>
                    dispatch({
                        type: UserAuthAction.LOGIN,
                        userid,
                        name,
                        status,
                    }),
            }
        }
    )
)(Auth)
