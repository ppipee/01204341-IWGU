import React, { Component } from 'react'
import moment from 'moment'
import { Info } from './Icon'
import '../assets/scss/plannerplacecard.scss'

class PlannerPlaceCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expandCard: null,
        }
    }

    expand = cardNo => {
        this.setState({ expandCard: cardNo })
    }

    inputEnable = e => {
        e.currentTarget.type = 'date'
    }

    inputDisable = e => {
        e.currentTarget.type = 'text'
        e.currentTarget.placeholder = 'Select Date'
    }

    format = e => {
        const input = e.currentTarget.value
        console.log(input)
        const date = moment(input, 'YYYY-MM-DD').format('ddd, D MMM')
        console.log(date)
        e.currentTarget.type = 'text'
        e.currentTarget.value = date
    }

    genPlaceCard(places, len, dayRange) {
        const minDay = moment(dayRange[0]).format('YYYY-MM-DD')
        const maxDay = moment(dayRange[1]).format('YYYY-MM-DD')
        const card = []
        for (let i = 0; i < len; i++) {
            let expand = ''
            if (this.state.expandCard === i) expand = ' expand'
            card.push(
                <div
                    key={`place-${i + 1}`}
                    className={`place-card ${expand}`}
                    onClick={() => this.expand(i)}
                >
                    <div className='header'>
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
                            <input type='time' defaultValue='00:00' />
                        </div>
                        <div className='date'>
                            <p>Date</p>
                            <input
                                placeholder='Select Date'
                                onFocus={e => {
                                    e.target.type = 'date'
                                }}
                                onBlur={e => {
                                    e.target.type = 'text'
                                }}
                                onChange={this.format}
                                min={minDay}
                                max={maxDay}
                            />
                        </div>
                        <div className='note'>
                            <p>Note</p>
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
