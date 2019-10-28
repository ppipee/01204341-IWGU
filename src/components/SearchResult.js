import React, { Component } from 'react'
import { GoogleApiWrapper } from 'google-maps-react'

class SearchResult extends Component {
    constructor() {
        super()
        this.state = {
            userLocation: {
                latitude: 32,
                longitude: 32,
            },
            loading: true,
        }
    }

    componentDidMount(props) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords

                this.setState({
                    userLocation: { latitude, longitude },
                    loading: false,
                })
            },
            () => {
                this.setState({ loading: false })
            }
        )
    }

    render() {
        console.log(this.state.loading, this.state.userLocation)
        return <div className='search-result'>Result</div>
    }
}
export default GoogleApiWrapper({
    apiKey: process.env.MAP_KEY,
})(SearchResult)
