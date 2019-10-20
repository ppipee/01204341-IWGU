import { gql } from 'apollo-boost'

const searchPlace = gql`
    query($keyword: String, $category: String) {
        places(keyword: $keyword,$category: String) {
            placeID
            categoryCode
            name
            category
            rate
            thumbnail
            time
            location
            map
        }
    }
`

const nearBy = gql`
    query($radius: Int!, $geolocation: String!) {
        places(searchradius: $radius, geolocation: $geolocation) {
            placeID
            categoryCode
            name
            thumbnail
            map
        }
    }
`

const placeDetail = gql`
    query($id: String, $code: String) {
        placeDetail(placeID: $id, categoryCode: $code) {
            placeID
            name
            category
            description
            img
            rate
            days
            time
            howToTravel
            service
            location
            map
            tel
        }
    }
`

const randomPlaces = gql`
    {
        places {
            placeID
            categoryCode
            name
            category
            rate
            thumbnail
            time
            location
            map
        }
    }
`

export default { searchPlace, placeDetail, randomPlaces, nearBy }
