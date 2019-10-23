import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Plus } from './Icon'
import { NewTripAction } from '../action'
import HeadCreateTrip from './HeadCreateTrip'
import Calendar from './CalendarTrip'
import '../assets/scss/createtrip.scss'

const Action = NewTripAction
class CreateTrip extends Component {
    constructor(props) {
        super(props)
        this.state = {
            plan_maker: false,
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            this.createTrip()
        }
    }

    calDay = (start, end) =>
        start ? (end - start) / (1000 * 60 * 60 * 24) + 1 : 0

    createTrip = () => {
        if (this.props.getCreateAuth) {
            const userid = this.props.getUserID
            const { name, date } = this.props.getNewTrip
            const day = this.calDay(date.start, date.end)
            let days = []
            for (let i = 0; i < day; i++) {
                const current_date = date.start
                days = [
                    ...days,
                    {
                        day: i,
                        date: new Date(
                            current_date.setDate(current_date.getDate() + i)
                        ),
                        places: [],
                        note: '',
                    },
                ]
            }
            const trip = {
                userID: userid,
                name,
                days,
            }
            this.props.setAuth(false)
            this.setState({
                plan_maker: false,
            })
        }
    }

    handleClick = () => {
        this.setState({ plan_maker: !this.state.plan_maker })
    }

    showMaker = () => {
        if (this.state.plan_maker) {
            return (
                <div className='plan-maker popup'>
                    <div className='create-trip popup'>
                        <HeadCreateTrip click={this.handleClick} />
                        <Calendar />
                    </div>
                </div>
            )
        }
        return (
            <div className='plan-maker'>
                <div className='create-trip' />
            </div>
        )
    }

    render() {
        return (
            <>
                <img
                    src={Plus}
                    alt='plus-btn'
                    className='add-btn'
                    onClick={this.handleClick}
                />
                {this.showMaker()}
            </>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setAuth: auth => dispatch({ type: Action.SETAUTH, setAuth: auth }),
    }
}
const mapStateToProps = state => {
    return {
        getNewTrip: state.newtrip,
        getCreateAuth: state.newtrip.auth,
        getUserID: state.userauth.userid,
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateTrip)
