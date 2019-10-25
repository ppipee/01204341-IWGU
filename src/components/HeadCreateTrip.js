import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CloseColor } from './Icon'
import { NewTripAction } from '../action'
import '../assets/scss/headcreatetrip.scss'

const Action = NewTripAction

class HeadCreateTrip extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value_inp: '',
            line: '',
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside)
    }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        let input = nextState.value_inp
        if (this.state.value_inp !== input) {
            input = input.length <= 20 ? input : ''
            this.props.setName(input)
        }
    }

    handleChange = e => {
        this.setState({ value_inp: e.target.value })
    }

    handleClickOutside = event => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ line: '' })
        }
    }

    lengthCheck = () => {
        let name = ''
        const len = this.state.value_inp.length
        if (len !== 0) name = len > 20 ? 'alert' : 'active'
        return <span className={`size-input ${name}`}>{len}/20</span>
    }

    render() {
        return (
            <div className='head-create-trip'>
                <div className='create-trip-title'>
                    <span>Create your new trip</span>
                    <img
                        src={CloseColor}
                        onClick={this.props.click}
                        alt='close-color-icon'
                    />
                </div>
                <div className='input'>
                    <div>
                        <input
                            placeholder='Name your trip'
                            value={this.state.value_inp}
                            onChange={this.handleChange}
                            ref={node => {
                                this.wrapperRef = node
                            }}
                            onClick={() => this.setState({ line: 'active' })}
                        />
                        {this.lengthCheck()}
                    </div>
                    <div className={`line ${this.state.line}`} />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setName: name => dispatch({ type: Action.SETNAMETRIP, setName: name }),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(HeadCreateTrip)
