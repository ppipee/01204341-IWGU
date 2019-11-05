import React, { Component } from 'react'
import '../assets/scss/contact.scss'
import { Phone, FB, Instagram } from './Icon'

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    genContact(contact) {
        const icons = [
            {
                name: 'phone',
                active: <Phone fill='#FCBBA4' />,
                inactive: <Phone fill='#d0d0d0' />,
            },
            {
                name: 'facebook',
                active: <FB fill='#FCBBA4' />,
                inactive: <FB fill='#d0d0d0' />,
            },
            {
                name: 'instagram',
                active: <Instagram fill='#FCBBA4' />,
                inactive: <Instagram fill='#d0d0d0' />,
            },
        ]
        const commune = []
        icons.forEach(keepIntouch => {
            if (contact[keepIntouch.name] === '') {
                keepIntouch.active = keepIntouch.inactive
            }
            if (keepIntouch.name === 'phone') {
                const tel = contact[keepIntouch.name]
                commune.push(
                    <a href={`tell:${tel}`}>
                        <div
                            id={`${keepIntouch.name}`}
                            key={`${keepIntouch.name}`}
                        >
                            {keepIntouch.active}
                        </div>
                    </a>
                )
            } else {
                commune.push(
                    <div id={`${keepIntouch.name}`} key={`${keepIntouch.name}`}>
                        {keepIntouch.active}
                    </div>
                )
            }
        })
        return <div className='container'> {commune} </div>
    }

    render() {
        const { contact } = this.props
        return <div className='contact'>{this.genContact(contact)}</div>
    }
}
export default Contact
