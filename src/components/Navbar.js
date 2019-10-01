import React, { Component } from 'react'
import './../assets/scss/navbar.scss'
import Menu from '../assets/icon/featured-menu.svg'
import Airplane from '../assets/icon/airplane.svg'
class NavBar extends Component {
    openNav() {
        document.getElementById("mySidenav").style.width = "298px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      }
      /*window.onload = function(){
        var divToHide = document.getElementById('mySidenav');
        document.onclick = function(e){
          if(e.target.id !== 'mySidenav'){
            //element clicked wasn't the div; hide the div
            mySidenav.style.display = 'none';
          }
        };
      };*/
    render() {
        return (
            <div>
                <div id="mySidenav" className="sidenav">
                </div>
            <div className='nav-bar'>
            <button className='button-mytrip'>
                <img src={Airplane}/>
                My trips
            </button>
            <span onClick={this.openNav}>
            <img className='menu' src={Menu}/></span>
            </div>

        </div>
    )
}
}

export default NavBar