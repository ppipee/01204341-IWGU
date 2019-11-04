import { gql } from 'apollo-boost'

const userRegister = gql`
    mutation($username: ID!, $password: String!) {
        register(username: $username, password: $password) {
            id
            name
            status
        }
    }
`

const userData = gql`
    query($id: ID) {
        user(id: $id) {
            username
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

const userDrafts = gql`
    query($id: ID) {
        user(id: $id) {
            draft {
                placeID
                name
                categoryCode
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
    query($username: ID) {
        user(username: $username) {
            id
            name
            status
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

const updateDrafts = gql`
    mutation($id: ID!, $draft: [InputFav]) {
        updateUser(id: $id, draft: $draft) {
            username
        }
    }
`

const getUsers = gql`
    {
        users {
            id
            username
            status
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
    userDrafts,
    updateDrafts,
}
