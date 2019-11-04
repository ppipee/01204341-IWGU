import React, { Component } from 'react'
import moment from 'moment'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Info, Edit, Trash, Check } from './Icon'
import { userDrafts, updateDrafts } from '../queries/user'
import { PlannersAction } from '../action'
import '../assets/scss/plannerplacecard.scss'

class PlannerPlaceCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expandCard: null,
        }
    }

    async componentDidMount() {
        if (!this.props.getLoadDrafts)
            await this.props.userDrafts.refetch({ id: this.props.id })
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.userDrafts.loading &&
            !this.props.userDrafts.loading &&
            !this.props.getLoadDrafts
        ) {
            const draft_places = this.props.userDrafts.user.draft
            this.props.setdrafts(draft_places)
            this.props.setloaddrafts(true)
        }
    }

    expandCard = cardNo => {
        this.setState({ expandCard: cardNo })
    }

    inputEnable = e => {
        e.currentTarget.type = 'date'
    }

    inputDisable = e => {
        e.currentTarget.type = 'text'
        e.currentTarget.placeholder = 'Select Date'
    }

    dropdownList(dayRange) {
        const list = []
        for (let i = 0; i < dayRange.length + 1; i++) {
            let listItem = 'Select Date'
            if (i !== 0)
                listItem = moment(dayRange[i - 1].date).format('ddd, D MMM')
            list.push(
                <option key={`date-${i + 1}`} value={listItem}>
                    {listItem}
                </option>
            )
        }
        return list
    }

    genPlaceCard(places, dayRange) {
        console.log(places)
        const card = []
        const len = places.length
        for (let i = 0; i < len; i++) {
            let expand = ''
            if (this.state.expandCard === i) expand = ' expand'
            card.push(
                <div key={`place-${i + 1}`} className={`place-card ${expand}`}>
                    <div className='header' onClick={() => this.expandCard(i)}>
                        <p>{places[i].name}</p>
                        <Info fill='#fcb7a0' />
                    </div>
                    <div className='detail'>
                        <div className='from'>
                            <p>From</p>
                            <input
                                type='time'
                                defaultValue='00:00'
                                step='300'
                            />
                            <p>To</p>
                            <input
                                type='time'
                                defaultValue='00:00'
                                step='300'
                            />
                        </div>
                        <div className='date'>
                            <p>Date</p>
                            <div className='select'>
                                <select onChange={this.selectDate}>
                                    {this.dropdownList(dayRange)}
                                </select>
                            </div>
                        </div>
                        <div className='note'>
                            <p>Note</p>
                            <div className='add-note'>
                                <p>Add note</p>
                                <img alt='edit' src={Edit} />
                            </div>
                        </div>
                        <div className='footer'>
                            <Trash fill='#b0b0b0' />
                            <img
                                alt='check'
                                src={Check}
                                onClick={() => this.expandCard(null)}
                            />
                        </div>
                    </div>
                </div>
            )
        }
        return card
    }

    render() {
        const draft_places = !this.props.getLoadDrafts
            ? this.props.userDrafts.user.draft
            : this.props.getDrafts
        const { day, range, places } = this.props
        let places_list = places
        if (day === 0) places_list = draft_places
        return (
            <div className='planner-place'>
                {this.genPlaceCard(places_list, range)}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        getDrafts: state.planner.drafts,
        getLoadDrafts: state.planner.load_drafts,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setdrafts: drafts =>
            dispatch({ type: PlannersAction.SETDRAFTS, new_drafts: drafts }),
        setloaddrafts: status =>
            dispatch({ type: PlannersAction.LOADDRAFTS, load: status }),
    }
}

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    graphql(userDrafts, {
        name: 'userDrafts',
        options: props => {
            return {
                variables: {
                    id: props.id,
                },
            }
        },
    }),
    graphql(updateDrafts, { name: 'updateDrafts' })
)(PlannerPlaceCard)
