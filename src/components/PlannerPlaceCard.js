import React, { Component } from 'react'
import moment from 'moment'
import { graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Info, Edit, Trash, Check } from './Icon'
import { userDrafts, updateDrafts } from '../queries/user'
import { updatePlanner } from '../queries/planner'
import { PlannersAction } from '../action'
import { removeItemFromList } from './main'
import '../assets/scss/plannerplacecard.scss'

class PlannerPlaceCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expandCard: null,
            start: '00.00',
            end: '00.00',
            date: '',
        }
    }

    async componentDidMount() {
        if (!this.props.getLoadDrafts)
            await this.props.userDrafts.refetch({ id: this.props.userID })
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
        return prevProps.planner !== this.props.planner
    }

    // shouldComponentUpdate(nextProps) {
    //     return (
    //         (this.props.getPlanner !== nextProps.getPlanner) ||
    //     )
    // }

    setPlace(place, fromDay) {
        this.setState({ expandCard: null })
        const planner =
            this.props.getPlanner === null
                ? this.props.planner
                : this.props.getPlanner
        const { placeID, categoryCode, name: placeName } = place
        const { id, name, share, author } = planner
        const destDay = this.state.date - 1 === -1 ? 0 : this.state.date - 1
        const { date, day: dayPrev, note } = planner.days[destDay]
        const new_place = {
            place: {
                placeID,
                categoryCode,
                name: placeName,
            },
            time: {
                start: this.state.start,
                end: this.state.end,
            },
        }

        if (this.state.date - 1 === -1) {
            const draft = {
                placeID,
                categoryCode,
                name,
            }

            const new_drafts = [...this.props.getDrafts, draft]
            this.props.adddraft(draft)

            this.props.updateDrafts({
                variables: {
                    id: this.props.userID,
                    draft: new_drafts.map(place => {
                        return {
                            placeID: place.placeID,
                            categoryCode: place.categoryCode,
                        }
                    }),
                },
            })
            this.deletePlace(place, fromDay)
        }

        if (fromDay === 0) {
            const places = this.props.getDrafts.map(place => place.placeID)
            const new_draft = removeItemFromList(
                this.props.getDrafts,
                placeID,
                places
            )
            this.props.setdrafts(new_draft)

            this.props.updateDrafts({
                variables: {
                    id: this.props.userID,
                    draft: new_draft.map(place => {
                        return {
                            placeID: place.placeID,
                            categoryCode: place.categoryCode,
                        }
                    }),
                },
            })
        }

        const place_list = [...planner.days[destDay].places, new_place]

        const new_planner = {
            plannerID: id,
            author,
            name,
            days: planner.days.map(day => {
                if (day.day === fromDay) {
                    return {
                        day: day.day,
                        date: day.date,
                        places: day.places
                            .filter(place => placeID !== place.place.placeID)
                            .map(place => {
                                return {
                                    place: {
                                        placeID: place.place.placeID,
                                        categoryCode: place.place.categoryCode,
                                        name: place.place.name,
                                    },
                                    time: {
                                        start: place.time.start,
                                        end: place.time.end,
                                    },
                                }
                            }),
                        note: day.note,
                    }
                }
                if (day.day === destDay + 1) {
                    return {
                        day: dayPrev,
                        date,
                        places: place_list.map(place => {
                            return {
                                place: {
                                    placeID: place.place.placeID,
                                    categoryCode: place.place.categoryCode,
                                    name: place.place.name,
                                },
                                time: {
                                    start: moment(
                                        place.time.start,
                                        'HH:mm'
                                    ).format('HH:mm:ssZ'),
                                    end: moment(place.time.end, 'HH:mm').format(
                                        'HH:mm:ssZ'
                                    ),
                                },
                            }
                        }),
                        note,
                    }
                }
                return {
                    day: day.day,
                    date: day.date,
                    places: day.places.map(place => {
                        return {
                            place: {
                                placeID: place.place.placeID,
                                categoryCode: place.place.categoryCode,
                                name: place.place.name,
                            },
                            time: {
                                start: place.time.start,
                                end: place.time.end,
                            },
                        }
                    }),
                    note: day.note,
                }
            }),
            share,
        }

        this.props.setplanner(new_planner)

        this.props.updatePlanner({
            variables: new_planner,
        })
    }

    inputEnable = e => {
        e.currentTarget.type = 'date'
    }

    inputDisable = e => {
        e.currentTarget.type = 'text'
        e.currentTarget.placeholder = 'Select Date'
    }

    selectDate = e => {
        this.setState({
            date: e.target.value,
        })
    }

    selectStart = e => {
        this.setState({
            start: e.target.value,
        })
    }

    selectEnd = e => {
        this.setState({
            end: e.target.value,
        })
    }

    expandCard = cardNo => {
        this.setState({ expandCard: cardNo })
    }

    deletePlace(place, fromDay) {
        this.setState({ expandCard: null })
        const { placeID } = place
        const planner =
            this.props.getPlanner === null
                ? this.props.planner
                : this.props.getPlanner
        const { id, name, share, author } = planner

        if (fromDay === 0) {
            const places = this.props.getDrafts.map(place => place.placeID)
            const new_draft = removeItemFromList(
                this.props.getDrafts,
                placeID,
                places
            )
            this.props.setdrafts(new_draft)

            this.props.updateDrafts({
                variables: {
                    id: this.props.userID,
                    draft: new_draft.map(place => {
                        return {
                            placeID: place.placeID,
                            categoryCode: place.categoryCode,
                        }
                    }),
                },
            })
        }

        const new_planner = {
            plannerID: id,
            author,
            name,
            days: planner.days.map(day => {
                if (day.day === fromDay) {
                    return {
                        day: day.day,
                        date: day.date,
                        places: day.places
                            .filter(place => placeID !== place.place.placeID)
                            .map(place => {
                                return {
                                    place: {
                                        placeID: place.place.placeID,
                                        categoryCode: place.place.categoryCode,
                                        name: place.place.name,
                                    },
                                    time: {
                                        start: place.time.start,
                                        end: place.time.end,
                                    },
                                }
                            }),
                        note: day.note,
                    }
                }
                return {
                    day: day.day,
                    date: day.date,
                    places: day.places.map(place => {
                        return {
                            place: {
                                placeID: place.place.placeID,
                                categoryCode: place.place.categoryCode,
                                name: place.place.name,
                            },
                            time: {
                                start: place.time.start,
                                end: place.time.end,
                            },
                        }
                    }),
                    note: day.note,
                }
            }),
            share,
        }
        this.props.setplanner(new_planner)

        this.props.updatePlanner({
            variables: new_planner,
        })
    }

    dropdownList(dayRange) {
        const list = []
        for (let i = 0; i < dayRange.length + 1; i++) {
            let listItem = 'Select Date'
            if (i !== 0)
                listItem = moment(dayRange[i - 1].date).format('ddd, D MMM')
            list.push(
                <option key={`date-${i + 1}`} value={i}>
                    {listItem}
                </option>
            )
        }
        return list
    }

    genPlaceCard(day, places) {
        const planner =
            this.props.getPlanner === null
                ? this.props.planner
                : this.props.getPlanner
        const dayRange = planner.days
        const card = []
        const len = places.length
        for (let i = 0; i < len; i++) {
            let expand = ''
            const place = day > 0 ? places[i].place : places[i]
            if (this.state.expandCard === i) expand = ' expand'
            card.push(
                <div key={`place-${i + 1}`} className={`place-card ${expand}`}>
                    <div className='header' onClick={() => this.expandCard(i)}>
                        <p>{place.name}</p>
                        <Info fill='#fcb7a0' />
                    </div>
                    <div className='detail'>
                        {day === 0 ? (
                            <>
                                <div className='from'>
                                    <p>From</p>
                                    <input
                                        type='time'
                                        defaultValue='00:00'
                                        step='300'
                                        onChange={this.selectStart}
                                    />
                                    <p>To</p>
                                    <input
                                        type='time'
                                        defaultValue='00:00'
                                        step='300'
                                        onChange={this.selectEnd}
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
                            </>
                        ) : (
                            <>
                                <div className='from'>
                                    <p>From</p>
                                    <input
                                        type='time'
                                        defaultValue={moment(
                                            places[i].time.start,
                                            'HH:mm:ssZ'
                                        ).format('HH:mm')}
                                        step='300'
                                        onChange={this.selectStart}
                                    />
                                    <p>To</p>
                                    <input
                                        type='time'
                                        defaultValue={moment(
                                            places[i].time.end,
                                            'HH:mm:ssZ'
                                        ).format('HH:mm')}
                                        step='300'
                                        onChange={this.selectEnd}
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
                            </>
                        )}
                        <div className='note'>
                            <p>Note</p>
                            <div className='add-note'>
                                <p>Add note</p>
                                <img alt='edit' src={Edit} />
                            </div>
                        </div>
                        <div className='footer'>
                            <span onClick={() => this.deletePlace(place, day)}>
                                <Trash fill='#b0b0b0' />
                            </span>
                            <img
                                alt='check'
                                src={Check}
                                onClick={() => this.setPlace(place, day)}
                            />
                        </div>
                    </div>
                </div>
            )
        }
        return card
    }

    render() {
        if (this.props.userDrafts.loading) return <div />
        const draft_places = !this.props.getLoadDrafts
            ? this.props.userDrafts.user.draft
            : this.props.getDrafts
        const { day, places } = this.props
        let places_list = places
        if (day === 0) places_list = draft_places
        return (
            <div className='planner-place'>
                {this.genPlaceCard(day, places_list)}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        userID: state.userauth.userid,
        getDrafts: state.planner.drafts,
        getLoadDrafts: state.planner.load_drafts,
        getPlanner: state.planner.planner,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        adddraft: draft =>
            dispatch({
                type: PlannersAction.ADDDRAFT,
                add_draft: draft,
            }),
        setdrafts: drafts =>
            dispatch({ type: PlannersAction.SETDRAFTS, new_drafts: drafts }),
        setloaddrafts: status =>
            dispatch({ type: PlannersAction.LOADDRAFTS, load: status }),
        setplanner: planner =>
            dispatch({
                type: PlannersAction.SETPLANNERS,
                new_planner: planner,
            }),
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
    graphql(updateDrafts, { name: 'updateDrafts' }),
    graphql(updatePlanner, { name: 'updatePlanner' })
)(PlannerPlaceCard)
