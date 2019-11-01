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
    query($id: ID) {
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

const userFavourite = gql`
    query($id: ID) {
        user(id: $id) {
            favourite {
                placeID
                name
                categoryCode
            }
        }
    }
`

const getUser = gql`
    query($id: ID) {
        user(id: $id) {
            id
            username
            password
        }
    }
`

const userUpdate = gql`
    mutation($id: ID!, $password: String, $favourite: [InputFav]) {
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

const updateFavourite = gql`
    mutation($id: ID!, $favourite: [InputFav]) {
        updateUser(id: $id, favourite: $favourite) {
            username
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

export {
    userRegister,
    userData,
    getUser,
    getUsers,
    userUpdate,
    userFavourite,
    updateFavourite,
}
