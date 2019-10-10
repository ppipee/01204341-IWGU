import { gql } from 'apollo-boost'

const createPlanner = gql`
    mutation(
        $userID:ID!, 
        $name:String, 
        $days:[{
            $day:Int,
            $date:Date,
            $places:[{
                $placeID:ID!,
                $time:{
                    $start:Date,
                    $end:Date
                }
            }],
            $note:String
        }],
        $share:Boolean
    ){
        createPlanner(userID:$userID, name:$name, days:$days, share:$share){
            name
        }
    } 
`

const getUserPlanner = gql`
    query($id: ID!) {
        planner(id: $id) {
            author
            name
            days {
                day
                date
                places {
                    place
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

const updatePlanner = gql`
    mutation(
        $id:ID!,
        $name:String,
        $days:[{
            $day:Int,
            $date:Date,
            $places:[{
                $placeID:ID!,
                $time:{
                    $start:Date,
                    $end:Date
                }
            }],
            $note:String
        }],
        $share:Boolean
    ){
        updatePlanner(id:$id, name:$name, days:$days, place:$place, share:$share){
            name
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

export { createPlanner, getUserPlanner, updatePlanner, removePlanner }
