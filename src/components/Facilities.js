import React, { Component } from 'react'
import '../assets/scss/facilities.scss'
import {
    CoinInactive,
    CoinActive,
    CreditcardInactive,
    CreditcardActive,
    GroupInactive,
    GroupActive,
    HandicapInactive,
    HandicapActive,
    KidInactive,
    KidActive,
    ParkingInactive,
    ParkingActive,
    PetInactive,
    PetActive,
    PlugInactive,
    PlugActive,
    SmokingInactive,
    SmokingActive,
    WifiInactive,
    WifiActive,
    ArrowDown,
    ArrowUp,
} from './Icon'

const FacilityList = [
    {
        icon_inactive: WifiInactive,
        icon_active: WifiActive,
        title: 'WIFI available',
    },
    {
        icon_inactive: CreditcardInactive,
        icon_active: CreditcardActive,
        title: 'Credit/Debit card',
    },
    {
        icon_inactive: ParkingInactive,
        icon_active: ParkingActive,
        title: 'Car parks',
    },
    {
        icon_inactive: PlugInactive,
        icon_active: PlugActive,
        title: 'Free charge',
    },
    {
        icon_inactive: GroupInactive,
        icon_active: GroupActive,
        title: 'Group',
    },
    {
        icon_inactive: HandicapInactive,
        icon_active: HandicapActive,
        title: 'Handicapped accessible',
    },
    {
        icon_inactive: KidInactive,
        icon_active: KidActive,
        title: 'Kids',
    },
    {
        icon_inactive: CoinInactive,
        icon_active: CoinActive,
        title: 'Service charge',
    },
    {
        icon_inactive: PetInactive,
        icon_active: PetActive,
        title: 'Pet allowed',
    },
    {
        icon_inactive: SmokingInactive,
        icon_active: SmokingActive,
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

    // componentDidUpdate (prevProps, prevState) {
    //     if (prevState.all_icon === this.state.all_icon) {
    //         {this.checkFacilities()}
    //     }
    // }

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

    // checkFacilities = () => {
    //     const service = this.props.service
    //     const all_icon = []
    //     if (service.facilities === null) {
    //         for (let i = 0; i < FacilityList.length; i++) {
    //             all_icon.push(false)
    //         }
    //     }
    //     if (service.payment !== null) {
    //         all_icon[1] = true
    //     }
    //     this.setState({all_icon})
    // }

    facilityDetail = () => {
        const facility_show = []
        const facility_hidden = []
        FacilityList.forEach((facility, i) => {
            if (i <= 5) {
                facility_show.push(
                    <div className='facility-box' key={facility.title}>
                        <img
                            src={
                                this.state.all_icon[i]
                                    ? facility.icon_active
                                    : facility.icon_inactive
                            }
                            alt='facility-icon-active'
                        />
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
                        <img
                            src={
                                this.state.all_icon[i]
                                    ? facility.icon_active
                                    : facility.icon_inactive
                            }
                            alt='facility-icon-active'
                        />
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
