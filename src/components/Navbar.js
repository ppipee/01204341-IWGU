import React from 'react'
import { Menu, Airplane, Back } from './Icon'
import { Link } from 'react-router-dom'
import './../assets/scss/navbar.scss'


const GoBack = (back) => {
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

const NavBar = (props) => {
    return (
        <div className='nav-bar'>
            {GoBack(props.back)}
            <button className='button-mytrip'>
                <img src={Airplane} />
                My trips
            </button>
            <img className='menu' src={Menu} />
        </div>
    )
}
export default NavBar