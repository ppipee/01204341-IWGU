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
import { placeDetail } from '../queries/place'
import NotFoundPage from './NotFoundPage'

class DetailPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        const search = new URLSearchParams(this.props.location.search)
        const id = search.get('place')
        let code
        if (search.get('code')) code = search.get('code').toLowerCase()
        this.props.data.refetch({ id, code })
    }

    render() {
        // const { placeDetail: data, loading } = Detail
        const { placeDetail: data, loading, error } = this.props.data
        const search = new URLSearchParams(this.props.location.search)
        console.log(this.props.data)
        // console.log(this.props.data)
        if (
            error !== undefined ||
            search.get('place') === null ||
            search.get('code') === null
        ) {
            return <NotFoundPage />
        }
        if (loading) {
            return (
                <div className='detail-page'>
                    <NavBar back design='default' />
                    <div>Loading...</div>
                    <NearBy this />
                </div>
            )
        }
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
                <NearBy this map={data.map} />
            </div>
        )
    }
}

export default graphql(placeDetail)(DetailPage)
