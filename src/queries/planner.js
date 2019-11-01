import { gql } from 'apollo-boost'

const createPlanner = gql`
    mutation($userID: ID!, $name: String!, $days: [InputDayDetail]) {
        createPlanner(userID: $userID, name: $name, days: $days) {
            name
        }
    }
`

const updatePlanner = gql`
    mutation(
        $userID: ID!
        $name: String
        $days: InputDayDetail
        $share: Boolean
    ) {
        updatePlanner(
            userID: $userID
            name: $name
            days: $days
            share: $share
        ) {
            name
        }
    }
`

const getDetailPlanners = gql`
    query($id: ID!) {
        planner(id: $id) {
            author {
                username
            }
            name
            days {
                day
                date
                places {
                    place {
                        placeID
                        categoryCode
                    }
                    time {
                        start
                        end
                    }
                }
                note
            }
            share
        }
    }
`

const getUserPlanners = gql`
    query($id: ID!) {
        userPlanner(id: $id) {
            id
            name
            days {
                date
                places {
                    time {
                        start
                        end
                    }
                }
            }
            share
        }
    }
`

const removePlanner = gql`
    mutation($id: ID!) {
        removePlanner(id: $id) {
            name
        }
    }
`

export {
    getUserPlanners,
    getDetailPlanners,
    removePlanner,
    createPlanner,
    updatePlanner,
}
