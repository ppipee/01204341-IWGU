import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { compose } from 'redux'
import { getUsers, userRegister, userData } from '../queries/user'

class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            show: '',
        }
    }

    genUsers = () => {
        const { users } = this.props
        if (users.loading) return <div>Loading...</div>
        return users.users.map(user => (
            <li className='user' key={user.id}>
                <span>username: {user.username} </span>
                <span>password: {user.password}</span>
                <button id={user.id} onClick={this.fetchDetails}>
                    +
                </button>
                {this.genDetails(this.props.userData.user, user.username)}
            </li>
        ))
    }

    submit = () => {
        const { username, password } = this.state
        this.props.userRegister({
            variables: {
                username,
                password,
            },
            refetchQueries: [{ query: getUsers }],
        })
        this.setState({ username: '', password: '' })
    }

    genDetails = (data, name) => {
        if (
            this.props.userData.user &&
            this.state.show === this.props.userData.variables.id
        ) {
            if (this.props.userData.user.username === name) {
                if (this.props.userData.loading) {
                    return <div>Loading Data...</div>
                }
                return Object.keys(data).map(k => (
                    <div>
                        {k}
                        {data[k]}
                    </div>
                ))
            }
        }
    }

    fetchDetails = e => {
        const id = e.target.getAttribute('id')
        this.props.userData.refetch({ id })
        this.setState({ show: id })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Test Query</h1>
                <div>
                    <h3>Register</h3>
                    <span>
                        username:
                        <input
                            value={this.state.username}
                            onChange={e =>
                                this.setState({ username: e.target.value })
                            }
                        />
                    </span>
                    <span>
                        password:
                        <input
                            value={this.state.password}
                            onChange={e =>
                                this.setState({ password: e.target.value })
                            }
                        />
                    </span>
                    <button onClick={this.submit}>Submit</button>
                </div>
                <div>
                    <h3>Users</h3>
                    {this.genUsers()}
                </div>
            </div>
        )
    }
}
export default compose(
    graphql(getUsers, { name: 'users' }),
    graphql(userRegister, { name: 'userRegister' }),
    graphql(userData, { name: 'userData' })
)(Test)
