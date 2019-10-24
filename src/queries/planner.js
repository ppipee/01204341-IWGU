import { gql } from 'apollo-boost'

// const createPlanner = gql`
//     mutation(
//         $userID:ID!,
//         $name:String,
//         $days:[{
//             $day:Int,
//             $date:Date,
//             $places:[{
//                 $placeID:ID!,
//                 $time:{
//                     $start:Date,
//                     $end:Date
//                 }
//             }],
//             $note:String
//         }],
//         $share:Boolean
//     ){
//         createPlanner(userID:$userID, name:$name, days:$days, share:$share){
//             name
//         }
//     }
// `

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
    query($id: ID) {
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
        }
    }
`

// const updatePlanner = gql`
//     mutation(
//         $id:ID!,
//         $name:String,
//         $days:[Object],
//         $share:Boolean
//     ){
//         updatePlanner(id:$id, name:$name, days:$days, share:$share){
//             name
//         }
//     }
// `

const removePlanner = gql`
    mutation($id: ID!) {
        removePlanner(id: $id) {
            name
        }
    }
`

export { getUserPlanners, getDetailPlanners, removePlanner } // ,createPlanner, updatePlanner }
