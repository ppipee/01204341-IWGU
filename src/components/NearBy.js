import React,{Component} from 'react'
import './../assets/scss/nearby.scss'
import LocationIcon from '../assets/icon/location-icon.svg'
import Restaurant from '../assets/icon/restaurant.svg'
import Restaurant2 from '../assets/icon/restaurant2.svg'
import Landmark from '../assets/icon/landmark.svg'
import Landmark2 from '../assets/icon/landmark2.svg'
import Tree from '../assets/icon/tree.svg'
import Tree2 from '../assets/icon/tree2.svg'
import Sleep from '../assets/icon/sleep.svg'
import Sleep2 from '../assets/icon/sleep2.svg'
import Burger from '../assets/img/burger.jpg'
import Coffee from '../assets/img/coffee_cake.jpg'
import Salad from '../assets/img/thai_salad.jpg'
import Sashimi from '../assets/img/sashimi.jpg'
import Read from '../assets/img/read.jpg'
import Lhong_Tou from '../assets/img/lhong_tou.jpg'
import Museum from '../assets/img/museum.jpg'


const res = [Burger,Coffee,Salad,Sashimi]
const land = [Read,Lhong_Tou,Museum, Salad]
const tabs = [[Restaurant,"res",Restaurant2],[Landmark,"land", Landmark2],[Tree,"tree",Tree2],[Sleep,"sleep",Sleep2]]
/*const place = {
    res:[
            {
                "name":"Burger",
                src: Burger,
            },
            {
                "name":
                src:
            }   
        ],
    land:[

    ]
}

place.res[0]["name"]*/
class NearBy extends Component{
    constructor(props){
        super(props)
        this.state = {
            tab_state:{
                "res":true,
                "land":false,
                "tree":false,
                "sleep":false,
            }
        }
    }

    genPlace1(){
        let restuarant =[]
        let restuarant_name = []
        res.map(place => restuarant.push(<img className='picture' src={place}/>))
        return(
            <div id='pic_res' className='tabcontent'>
                {restuarant}
            </div>
        )
    }


    genPlace2(){
        let landmark = []
        land.map(place => landmark.push(<img className='picture' src={place}/>))
        return(
            <div id='pic_land' className='tabcontent'>
                {landmark}
            </div>
        )
    }
    openContents= (event)=>{
        let target_state = event.target.getAttribute("tabName")
        let new_state = this.state.tab_state
        Object.keys(new_state).forEach(key=>{
            new_state[key]=false
        })
        new_state[target_state] = true
        this.setState({
            tab_state:new_state
        })
    }

    genTabs(){
        let tabbar =[]
        tabs.map(tab => {
            let [src,name,src2] = tab
            let active = ""
            if(this.state.tab_state[name]){
                active = " active"
                src = src2
            }
            tabbar.push(
                <div className={`icon${active}`}>                     
                    <img className='tablinks' tabName={name} onClick={this.openContents} src={src}/>
                </div>
            )
        }
        )
        return(
            <div className='wave'>
                <div className='wave_background'>
                    {tabbar}
                </div>
            </div>
        ) 
    }

    render(){
        return (
            <div className='nearby'  >
                <div className='head'>
                    <img  className='location_icon' src={LocationIcon}/>
                    <span className='nearby_you'>Nearby-you</span>
                </div>
                {this.genTabs()}
                <div className='pictures'>
                    <div className='container'>
                        {(this.state.tab_state['res']) && this.genPlace1()}
                        {(this.state.tab_state['land']) && this.genPlace2()}
                    </div>
                </div>
            </div>
                    )
        }
                }
export default NearBy
