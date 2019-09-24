import React from 'react'
import './../assets/scss/navbar.scss'
import Menu from '../assets/icon/featured-menu.svg'
import Airplane from '../assets/icon/airplane.svg'
const NavBar = () => {
    return (
        <div className='nav-bar'>          
            <button className='button-mytrip'>
                <img src={Airplane}/>
                My trips
            </button>           
            <img className='menu' src={Menu}/>            
        </div>
    )
}
export default NavBar