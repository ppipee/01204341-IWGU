import React from 'react'
import './../assets/scss/nearby.scss'
import LocationIcon from '../assets/icon/location-icon.svg'
import Wave from '../assets/img/wave.svg'
import Restaurant from '../assets/icon/restaurant.svg'
import Landmark from '../assets/icon/landmark.svg'
import Tree from '../assets/icon/tree.svg'
import Sleep from '../assets/icon/sleep.svg'
import Burger from '../assets/img/burger.jpg'
import Coffee from '../assets/img/coffee_cake.jpg'
import Salad from '../assets/img/thai_salad.jpg'
import Sashimi from '../assets/img/sashimi.jpg'
import Read from '../assets/img/read.jpg'
import Lhong_Tou from '../assets/img/lhong_tou.jpg'
import Museum from '../assets/img/museum.jpg'




function open_content(evt, pic_name) {
    var i, tabcontent, tablinks
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(pic_name).style.display = "block";
    evt.currentTarget.className += " active";
}

const NearBy = () => {
    return (
        <div className='nearby' onLoad={()=>(open_content(event,'pic_res'))} >
            <div className='head'>
                <img  className='location_icon' src={LocationIcon}/>
                <span className='nearby_you'>Nearby-you</span>
            </div>
            <div className='wave'>
                <div className='wave_background'>
                    {/* <img className='wave_pic' src={Wave}/> */}
                    <div className='icon'>                     
                        <img onClick={()=>(open_content(event,'pic_res'))} className='tablinks' className='icon1'src={Restaurant}/>
                    </div>
                    <div className='icon'>
                        <img onClick={()=>(open_content(event,'pic_land'))} className='tablinks' className='icon2' src={Landmark}/>
                    </div>
                    <div className='icon'>
                        <img className='icon3' src={Tree}/>
                    </div>
                    <div className='icon'>
                        <img className='icon4' src={Sleep}/>
                    </div>
                </div>
            </div>
            <div className='pictures'>
                <div className='container'>
                    <div id='pic_res' className='tabcontent'>
                        <img className='picture' src={Burger}/>
                        <img className='picture' src={Coffee}/>
                        <img className='picture' src={Salad}/>
                        <img className='picture' src={Sashimi}/>
                    </div>
                    <div id='pic_land' className='tabcontent'>                        
                        <img className='picture' src={Read}/>
                        <img className='picture' src={Lhong_Tou}/>
                        <img className='picture' src={Museum}/>
                        <img className='picture' src={Salad}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NearBy