import { gql } from 'apollo-boost'

const placeData = gql`
    query($id: ID!) {
        place(id: $id) {
            name
            category
            description
            img
            rate
            days
            time
            address
            tel
        }
    }
`
const getPlaces = gql`
    {
        places {
            name
            category
            description
            img
            rate
            days
            time
            address
            tel
        }
    }
`

const serchPlace = gql`
    query($word: String!) {
        places(word: $word) {
            id
            name
            rate
            img
            time
            location
        }
    }
`

export default { serchPlace, getPlaces, placeData }
