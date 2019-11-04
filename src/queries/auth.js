import { gql } from 'apollo-boost'

const authSignin = gql`
    query($username: ID!, $password: String!) {
        authSignin(username: $username, password: $password)
    }
`
const authRegister = gql`
    query($username: ID!) {
        authRegister(username: $username)
    }
`
const authPlanner = gql`
    query($id: ID!) {
        userRegister(plannerID: $plannerID)
    }
`
const checkDays = gql`
    query($userID: ID!, $plannerID: ID!) {
        checkCreateDay(userID: $userID, plannerID: $plannerID)
    }
`
const checkTrips = gql`
    query($userID: ID!) {
        checkCreatePlanner(userID: $userID)
    }
`

export { authRegister, authSignin, authPlanner, checkDays, checkTrips }
