import React, { Component } from 'react'
import moment from 'moment'
import { Info, DownArrow, Edit, Trash, Check } from './Icon'
import '../assets/scss/plannerplacecard.scss'

class PlannerPlaceCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expandCard: null,
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

    genPlaceCard(places, len, dayRange) {
        const card = []
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
        return (
            <div className='planner-place'>
                {this.genPlaceCard(
                    this.props.places,
                    this.props.no,
                    this.props.range
                )}
            </div>
        )
    }
}
export default PlannerPlaceCard
