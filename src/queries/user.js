import { gql } from 'apollo-boost'

const userRegister = gql`
    mutation($username: ID!, $password: String!) {
        register(username: $username, password: $password) {
            username
            password
        }
    }
`
const userData = gql`
    query($id: ID!) {
        user(id: $id) {
            username
            password
            favourite {
                name
            }
            planner {
                name
            }
            share {
                name
            }
        }
    }
`

const getUser = gql`
    query($name: ID!) {
        user(name: $name) {
            id
            username
            password
        }
    }
`

const userUpdate = gql`
    mutation($id: ID!, $password: String!, $favourite: [String]!) {
        updateUser(id: $id, password: $password, favourite: $favourite) {
            username
            password
            favourite {
                name
            }
            planner {
                name
            }
            share {
                name
            }
        }
    }
`

const getUsers = gql`
    {
        users {
            id
            username
            password
        }
    }
`

export { userRegister, userData, getUser, getUsers, userUpdate }