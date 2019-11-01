import React, { Component } from 'react'
import '../assets/scss/facilities.scss'
import {
    Service,
    Creditcard,
    Group,
    Handicap,
    Kid,
    Parking,
    Pet,
    Plug,
    Smoking,
    Wifi,
    ArrowDown,
    ArrowUp,
} from './Icon'

const FacilityList = [
    {
        icon_inactive: <Wifi fill='#B0B0B0' />,
        icon_active: <Wifi fill='#FCBBA4' />,
        title: 'WIFI available',
    },
    {
        icon_inactive: <Creditcard fill='#B0B0B0' />,
        icon_active: <Creditcard fill='#FCBBA4' />,
        title: 'Credit/Debit card',
    },
    {
        icon_inactive: <Parking fill='#B0B0B0' />,
        icon_active: <Parking fill='#FCBBA4' />,
        title: 'Car parks',
    },
    {
        icon_inactive: <Plug fill='#B0B0B0' />,
        icon_active: <Plug fill='#FCBBA4' />,
        title: 'Free charge',
    },
    {
        icon_inactive: <Group fill='#B0B0B0' />,
        icon_active: <Group fill='#FCBBA4' />,
        title: 'Group',
    },
    {
        icon_inactive: <Handicap fill='#B0B0B0' />,
        icon_active: <Handicap fill='#FCBBA4' />,
        title: 'Handicapped accessible',
    },
    {
        icon_inactive: <Kid fill='#B0B0B0' />,
        icon_active: <Kid fill='#FCBBA4' />,
        title: 'Kids',
    },
    {
        icon_inactive: <Service fill='#B0B0B0' />,
        icon_active: <Service fill='#FCBBA4' />,
        title: 'Service charge',
    },
    {
        icon_inactive: <Pet fill='#B0B0B0' />,
        icon_active: <Pet fill='#FCBBA4' />,
        title: 'Pet allowed',
    },
    {
        icon_inactive: <Smoking fill='#B0B0B0' />,
        icon_active: <Smoking fill='#FCBBA4' />,
        title: 'Smoking area',
    },
]

const ShowMore = {
    icon: ArrowDown,
    text: 'more',
}

const ShowLess = {
    icon: ArrowUp,
    text: 'less',
}

export default class Facilities extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show_more: false,
            all_icon: [],
        }
    }

    componentDidMount() {
        const { service } = this.props
        const all_icon = []
        if (service.facilities === null) {
            for (let i = 0; i < FacilityList.length; i++) {
                all_icon.push(false)
            }
        }
        if (service.payment !== null) {
            all_icon[1] = true
        }
        this.setState({ all_icon })
    }

    facilityDetail = () => {
        const facility_show = []
        const facility_hidden = []
        FacilityList.forEach((facility, i) => {
            if (i <= 5) {
                facility_show.push(
                    <div className='facility-box' key={facility.title}>
                        {this.state.all_icon[i]
                            ? facility.icon_active
                            : facility.icon_inactive}
                        <p
                            className={`facility-title ${
                                this.state.all_icon[i] ? '' : 'inactive'
                            }`}
                        >
                            {facility.title}
                        </p>
                    </div>
                )
            } else if (i > 5 && this.state.show_more) {
                facility_hidden.push(
                    <div className='facility-box' key={facility.title}>
                        {this.state.all_icon[i]
                            ? facility.icon_active
                            : facility.icon_inactive}
                        <p
                            className={`facility-title ${
                                this.state.all_icon[i] ? '' : 'inactive'
                            }`}
                        >
                            {facility.title}
                        </p>
                    </div>
                )
            }
        })
        return [facility_show, facility_hidden]
    }

    handleClick = () => {
        this.setState({ show_more: !this.state.show_more })
        console.log('click')
    }

    genButton() {
        const arrowIcon = this.state.show_more ? ShowLess : ShowMore
        const { show_more } = this.state
        return (
            <div
                className={`arrow-show ${show_more ? 'active' : ''}`}
                onClick={() => this.handleClick()}
            >
                <p>show {arrowIcon.text}</p>
                <img
                    className='arrow-down-icon'
                    src={arrowIcon.icon}
                    alt='arrow-dowm-icon'
                />
            </div>
        )
    }

    render() {
        const { show_more } = this.state
        return (
            <div className='facilities'>
                <div className='grid-facilities'>
                    <div className='subject'>More details</div>
                    <div className='facility-list'>{this.facilityDetail()}</div>
                </div>
                <div className={`background ${show_more ? 'show' : ''}`} />
                {this.genButton()}
            </div>
        )
    }
}
