import React, { Component } from 'react'
import Detail from './Demo'
import '../assets/scss/contact.scss'
import { Phone, Facebook, Instagram } from './Icon'

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
                active: <Facebook fill='#FCBBA4' />,
                inactive: <Facebook fill='#d0d0d0' />,
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
            commune.push(
                <div id={`${keepIntouch.name}`}>{keepIntouch.active}</div>
            )
        })
        return <div className='container'> {commune} </div>
    }

    render() {
        const { map, contact } = this.props
        return <div className='contact'>{this.genContact(contact)}</div>
    }
}
export default Contact
