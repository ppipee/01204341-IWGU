import { gql } from 'apollo-boost'

const userRegister = gql`
    mutation($username: ID!, $password: String!) {
        register(username: $username, password: $password) {
            id
            username
            status
        }
    }
`

const userData = gql`
    query($id: ID) {
        user(id: $id) {
            username
            password
            name
            status
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

const userFavourites = gql`
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

const userAllFavourites = gql`
    query($id: ID) {
        user(id: $id) {
            favourite {
                placeID
                name
                categoryCode
                location {
                    district
                    province
                }
                thumbnail
                rate
            }
        }
    }
`

const getUser = gql`
    query($id: ID) {
        user(id: $id) {
            id
            username
        }
    }
`

const userUpdate = gql`
    mutation(
        $id: ID!
        $password: String
        $name: String
        $status: String
        $favourite: [InputFav]
    ) {
        updateUser(
            id: $id
            password: $password
            name: $name
            status: $status
            favourite: $favourite
        ) {
            username
            password
            name
            status
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

const updateFavourites = gql`
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
    userFavourites,
    updateFavourites,
    userAllFavourites,
}
