import React, { Component } from 'react'
import { Menu, Airplane, Back } from './Icon'
import { Link } from 'react-router-dom'
import './../assets/scss/navbar.scss'

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
    componentWillUnMount() {
        document.removeEventListener('mousedown', this.handleClickOutSide, false)
    }
    goBack(back) {
        if (back) {
            return (
                <div className="back-home">
                    <Link to="/">
                        <img src={Back} />
                    </Link>
                </div>
            )
        }
    }
    openNav = () => {
        document.getElementById("mySidenav").style.width = "298px"
        document.getElementById("backDrop").style.display = "block"
        this.setState({ side_nav: true })
    }
    handleClickOutside = () => {
        document.getElementById("mySidenav").style.width = "0px"
        document.getElementById("backDrop").style.display = "none"
        this.setState({ side_nav: false })
    }
    genSideBar() {
        if (this.state.side_nav) {
            return (
                <>
                    <div id="backDrop" className="container-sidenav" ref={node => this.node = node} onClick={() => this.handleClickOutside()} />
                    <div id="mySidenav" className="sidenav" ref={node => this.node = node} />
                </>
            )
        }
        return (
            <>
                <div id="backDrop" className="container-sidenav" ref={node => this.node = node} onClick={() => this.handleClickOutside()} />
                <div id="mySidenav" className="sidenav" ref={node => this.node = node} />
            </>
        )
    }

    render() {
        return (
            <div>
                <div className='nav-bar'>
                    {this.genSideBar()}
                    {this.goBack(this.props.back)}
                    <Link to='/mytrip'>
                    <button className='button-mytrip'>
                            <img src={Airplane} />
                                My trips
                    </button>
                    </Link>
                    <span onClick={this.openNav}>
                        <img className='menu' src={Menu} />
                    </span>
                </div>
            </div>
        )
    }
}
export default NavBar

