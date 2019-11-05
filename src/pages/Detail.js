import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import {
    NavBar,
    ImageSlider,
    InfoPlace,
    RoutePlace,
    Facilities,
    NearBy,
    Contact,
} from '../components'
import { Detail } from '../components/Demo'
import { placeDetail } from '../queries/place'

class DetailPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        const search = new URLSearchParams(this.props.location.search)
        const id = search.get('place')
        const code = search.get('code').toLowerCase()
        this.props.data.refetch({ id, code })
    }

    render() {
        // const { placeDetail: data, loading } = Detail
        const { placeDetail: data, loading } = this.props.data
        console.log(this.props.data)
        // console.log(this.props.data)
        if (loading || this.props.data.error !== undefined)
            return (
                <div className='detail-page'>
                    <NavBar back design='default' />
                    <div>Loading...</div>
                    <NearBy this />
                </div>
            )
        return (
            <div className='detail-page'>
                <NavBar back design='default' />
                <ImageSlider img={data.img} />
                <InfoPlace
                    info={{
                        name: data.name,
                        category: data.category,
                        categoryCode: data.categoryCode,
                        description: data.description,
                        time: data.time,
                        days: data.days,
                        rate: data.rate,
                    }}
                />
                <RoutePlace map={data.map} location={data.location} />
                <Facilities service={data.service} />
                <Contact contact={data.contact} />
                <NearBy this location={data.map} />
            </div>
        )
    }
}

export default graphql(placeDetail)(DetailPage)
