import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import {
    NavBar,
    ImageSlider,
    InfoPlace,
    RoutePlace,
    Facilities,
    NearBy,
} from '../components'
import { placeDetail } from '../queries/place'

class DetailPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        const search = new URLSearchParams(this.props.location.search)
        // const id = search.get('place')
        // const code = search.get('code')
        const id = 'P08000001'
        const code = 'restaurant'
        console.log(this.props.placeDetail)
        this.props.placeDetail.refetch({ id, code })
    }

    render() {
        return (
            <div className='detail-page'>
                <NavBar back />
                <ImageSlider />
                <InfoPlace />
                <RoutePlace />
                <Facilities />
                <NearBy />
            </div>
        )
    }
}

export default graphql(placeDetail, { name: 'placeDetail' })(DetailPage)
