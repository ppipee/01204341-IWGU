import React, { Component } from 'react'
import './../assets/scss/navbar.scss'
import Menu from '../assets/icon/featured-menu.svg'
import Airplane from '../assets/icon/airplane.svg'
class NavBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            side_nav:false,
        }
    }
    openNav = () => {
        document.getElementById("mySidenav").style.width = "298px"        
        document.getElementById("backDrop").style.display = "block"
        this.setState({side_nav:true})
      }
      componentWillMount(){
          document.addEventListener('mousedown',this.handleClick,false)
      }
      componentWillUnMount(){
        document.removeEventListener('mousedown',this.handleClick,false)
    }
    handleClick = (e) =>{
        if(this.node.contains(e.target)){
            return;
        }
        this.handleClickOutside();
    }
    handleClickOutside(){
        document.getElementById("mySidenav").style.width = "0px" 
        document.getElementById("backDrop").style.display = "none"        
        this.setState({side_nav:false})
    }
    genSideBar(){
        if(this.state.side_nav){
            return(
                <>
                    <div id="backDrop" className="containerSideNav" ref={node => this.node = node}  onClick={()=>this.handleClickOutside()}/>           
                    <div id="mySidenav" className="sidenav" ref={node => this.node = node}  />
                </>
            )
        }
        return(                
            <>
                <div id="backDrop" className="containerSideNav" ref={node => this.node = node} onClick={()=>this.handleClickOutside()}/>           
            <div id="mySidenav" className="sidenav" ref={node => this.node = node}   />
            </>
        )
    }
    render() {
        return (
            <div>
                {this.genSideBar()}
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