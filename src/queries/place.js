import { gql } from 'apollo-boost'

const searchPlace = gql`
    query($keyword: String, $category: String) {
        places(keyword: $keyword, category: $category) {
            placeID
            categoryCode
            name
            category
            rate
            thumbnail
            time
            location {
                district
                province
            }
            map {
                latitude
                longitude
            }
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
            map {
                latitude
                longitude
            }
        }
    }
`

const placeDetail = gql`
    query($id: String!, $code: String!) {
        placeDetail(placeID: $id, categoryCode: $code) {
            placeID
            name
            category
            description
            img
            rate
            time
            days {
                day1
                day2
                day3
                day4
                day5
                day6
                day7
            }
            howToTravel
            service {
                payment
                facilities {
                    code
                    description
                }
            }
            location {
                address
                district
                sub_district
                province
                postcode
            }
            map {
                latitude
                longitude
            }
            contact {
                phone
                mobiles
                emails
                urls
            }
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
            location {
                district
                province
            }
            map {
                latitude
                longitude
            }
        }
    }
`

export { searchPlace, placeDetail, randomPlaces, nearBy }
