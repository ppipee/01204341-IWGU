/* eslint-disable react/no-typos */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Airplane, Back } from './Icon'
import '../assets/scss/navbar.scss'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            side_nav: false,
        }
    }

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClickOutSide, false)
    }

    handleClickOutside = () => {
        this.setState({ side_nav: false })
    }

    openNav = () => {
        this.setState({ side_nav: true })
    }

    componentWillUnMount() {
        document.removeEventListener(
            'mousedown',
            this.handleClickOutSide,
            false
        )
    }

    goBack(back) {
        if (back) {
            return (
                <div className='back-home'>
                    <Link to='/'>
                        <img src={Back} alt='icon-back' />
                    </Link>
                </div>
            )
        }
    }

    genSideBar() {
        const active = this.state.side_nav ? 'active' : ''
        return (
            <>
                <div
                    className={`container-sidenav ${active}`}
                    ref={node => {
                        this.node = node
                    }}
                    onClick={this.handleClickOutside}
                />
                <div
                    className={`sidenav ${active}`}
                    ref={node => {
                        this.node = node
                    }}
                />
            </>
        )
    }

    render() {
        const design =
            this.props.design === 'planners' ? ' planners' : ' default'
        return (
            <>
                <div className={`nav-bar${design}`}>
                    {this.genSideBar()}
                    {this.goBack(this.props.back)}
                    <Link to='/mytrips'>
                        <button className={`button-mytrips${design}`}>
                            <img src={Airplane} alt='icon-mytrips' />
                            My trips
                        </button>
                    </Link>
                    <span onClick={this.openNav}>
                        <img className='menu' src={Menu} alt='menu' />
                    </span>
                </div>
                {this.props.design !== 'planners' && (
                    <div className='blank-navbar' />
                )}
            </>
        )
    }
}
export default NavBar
