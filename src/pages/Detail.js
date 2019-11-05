import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Skeleton } from 'antd'
import {
    NavBar,
    ImageSlider,
    InfoPlace,
    RoutePlace,
    Facilities,
    NearBy,
    Contact,
    AddFavDetail,
} from '../components'
import { placeDetail } from '../queries/place'
import '../assets/scss/detail.scss'

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
        if (loading) {
            return (
                <div className='detail-page'>
                    <NavBar back design='default' />
                    <div>
                        <div className='image-slider'>
                            <div className='image-keleton' />
                            <div className='group'>
                                <div className='container1' />
                                <div className='container2' />
                            </div>
                            <div className='info-place'>
                                <div className='info-border'>
                                    <span className='title'>
                                        <Skeleton active paragraph={false} />
                                    </span>
                                    <div className='detail'>
                                        <Skeleton active paragraph={false} />
                                        <Skeleton active paragraph={false} />
                                        <Skeleton active paragraph={false} />
                                        <Skeleton active paragraph={false} />
                                        <Skeleton active paragraph={false} />
                                        <Skeleton active paragraph={false} />
                                        <Skeleton active paragraph={false} />
                                        <Skeleton active paragraph={false} />
                                        <Skeleton active paragraph={false} />
                                        <Skeleton active paragraph={false} />
                                        <Skeleton active paragraph={false} />
                                        <Skeleton active paragraph={false} />
                                        <Skeleton active paragraph={false} />
                                        <Skeleton active paragraph={false} />
                                        <Skeleton active paragraph={false} />
                                        <Skeleton active paragraph={false} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <NearBy this />
                    </div>
                </div>
            )
        }
        if (
            error !== undefined ||
            search.get('place') === null ||
            search.get('code') === null
        ) {
            return (
                <div className='detail-page'>
                    <NavBar back design='default' />
                    NotFound
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
                <NearBy this location={data.map} />
                <AddFavDetail
                    places={{
                        placeID: data.placeID,
                        categoryCode: data.categoryCode,
                        name: data.name,
                        rate: data.rate,
                        thumbnail: data.thumbnail,
                        location: data.location,
                    }}
                />
            </div>
        )
    }
}

export default graphql(placeDetail)(DetailPage)
