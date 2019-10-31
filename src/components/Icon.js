import React from 'react'
import SearchIcon from '../assets/icon/search-icon.svg'
import Filter from '../assets/icon/filter.svg'
import FilterActive from '../assets/icon/filter-active.svg'
import Clear from '../assets/icon/refresh.svg'
import Star from '../assets/icon/full-star.svg'
import BlankStar from '../assets/icon/empty-star.svg'
import Close from '../assets/icon/close.svg'
import Menu from '../assets/icon/featured-menu.svg'
import Airplane from '../assets/icon/airplane.svg'
import Back from '../assets/icon/back.svg'
import LocationIcon from '../assets/icon/location-icon.svg'
import RestaurantInActive from '../assets/icon/restaurant.svg'
import RestaurantActive from '../assets/icon/restaurant2.svg'
import LandmarkInActive from '../assets/icon/landmark.svg'
import LandmarkActive from '../assets/icon/landmark2.svg'
import TreeInActive from '../assets/icon/tree.svg'
import TreeActive from '../assets/icon/tree2.svg'
import SleepInActive from '../assets/icon/sleep.svg'
import SleepActive from '../assets/icon/sleep2.svg'
import PaperAirplane from '../assets/icon/paper-airplane.svg'
import BlackAirplane from '../assets/icon/black-airplane.svg'
import Calendar from '../assets/icon/calendar.svg'
import RightArrow from '../assets/icon/right-arrow.svg'
import CurveArrow from '../assets/icon/curve-arrow.svg'
import Plus from '../assets/icon/plus.svg'
import LeftArrowColor from '../assets/icon/left-arrow-color.svg'
import RightArrowColor from '../assets/icon/right-arrow-color.svg'
import CloseColor from '../assets/icon/close-color.svg'
import Dollar from '../assets/icon/dollar.svg'
import DownArrow from '../assets/icon/down-arrow.svg'
import UpArrow from '../assets/icon/up-arrow.svg'
import PinkClose from '../assets/icon/pink-close.svg'
import LandmarkCategoryInActive from '../assets/icon/landmark-inactive.svg'
import LandmarkCategoryActive from '../assets/icon/landmark-active.svg'
import CafeInActive from '../assets/icon/cafe-inactive.svg'
import CafeActive from '../assets/icon/cafe-active.svg'
import ParkInActive from '../assets/icon/park-inactive.svg'
import ParkActive from '../assets/icon/park-active.svg'
import StreetFoodInActive from '../assets/icon/street-food-inactive.svg'
import StreetFoodActive from '../assets/icon/street-food-active.svg'
import ArtInActive from '../assets/icon/art-inactive.svg'
import ArtActive from '../assets/icon/art-active.svg'
import MuseumInActive from '../assets/icon/museum-inactive.svg'
import MuseumActive from '../assets/icon/museum-active.svg'
import BarInActive from '../assets/icon/bar-inactive.svg'
import BarActive from '../assets/icon/bar-active.svg'
import HotelInActive from '../assets/icon/hotel-inactive.svg'
import HotelActive from '../assets/icon/hotel-active.svg'
import SpaInActive from '../assets/icon/spa-inactive.svg'
import SpaActive from '../assets/icon/spa-active.svg'
import RateStar from '../assets/icon/rate-star.svg'
import CircleArrow from '../assets/icon/up-circle-arrow.svg'
import DoubleQuotes from '../assets/icon/doublequotes-left.svg'
import Bus from '../assets/icon/bus.svg'
import Train from '../assets/icon/train.svg'
import Ferry from '../assets/icon/ferry.svg'
import Bts from '../assets/icon/bts.svg'
import Mrt from '../assets/icon/mrt.svg'
// import Phone from '../assets/icon/phone.svg'
// import Facebook from '../assets/icon/facebook.svg'
// import Instagram from '../assets/icon/instagram.svg'

// const Hotel = (props) => (
//     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40">
//         <g clipPath="url(#a)">
//             <path fill={props.fill} d="M36.107 16.962V10.46c0-2.91-2.053-3.979-3.979-3.979H7.743c-1.925 0-3.978 1.027-3.978 3.979v6.502C1.84 17.176 0 18.46 0 21.412v5.048C0 27.315.684 28 1.54 28h.513v3.979c0 .855.685 1.54 1.54 1.54h1.455c.856 0 1.54-.685 1.54-1.54v-4.022h26.824v4.022c0 .855.684 1.54 1.54 1.54h1.454c.856 0 1.54-.685 1.54-1.54v-4.022h.514c.855 0 1.54-.684 1.54-1.54v-5.005c-.128-2.952-1.968-4.236-3.893-4.45zM5.219 10.46h.086c0-2.01 1.326-2.439 2.438-2.439h24.385c1.113 0 2.439.428 2.439 2.439v6.46h-1.155v-3.68c0-.855-.685-1.54-1.54-1.54H22.46c-.856 0-1.54.685-1.54 1.54v3.68h-1.797v-3.68c0-.855-.684-1.54-1.54-1.54H8.17c-.855 0-1.54.685-1.54 1.54v3.68H5.219v-6.46zm26.653 2.78v3.68H22.46v-3.68h9.412zm-14.204 0v3.68H8.257v-3.68h9.411zM5.005 31.98H3.551v-4.022h1.454v4.022zm31.316 0h-1.455v-4.022h1.455v4.022zm2.01-5.52H1.498v-2.267h36.835v2.268zm0-3.807H1.498v-1.24c0-2.567 1.883-2.952 2.952-2.952H35.38c1.112 0 2.952.385 2.952 2.952v1.24z" />
//         </g>
//         <defs>
//             <clipPath id="a">
//                 <path fill="#fff" d="M0 0h40v40H0z" />
//             </clipPath>
//         </defs>
//     </svg>
// )

const Phone = props => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='30'
        height='30'
        fill='none'
        viewBox='0 0 30 30'
    >
        <path
            fill={props.fill}
            d='M15 0C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zM9.61 5.958c.308-.018.588.167.8.495l2.05 3.889c.216.46.093.954-.229 1.283l-.939.94a.46.46 0 0 0-.097.267c.36 1.394 1.453 2.68 2.417 3.565.964.885 2 2.082 3.345 2.366.167.046.37.063.49-.048l1.09-1.111c.377-.286.922-.424 1.325-.19h.018l3.7 2.184c.544.34.6.998.21 1.399l-2.548 2.528c-.376.386-.876.516-1.362.517-2.149-.065-4.18-1.12-5.847-2.203-2.737-1.991-5.248-4.461-6.824-7.445-.605-1.251-1.315-2.848-1.247-4.244.006-.526.148-1.04.518-1.38L9.03 6.223c.198-.169.395-.253.58-.264z'
        />
    </svg>
)

const Facebook = props => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='30'
        height='30'
        fill='none'
        viewBox='0 0 30 30'
    >
        <path
            fill={props.fill}
            d='M29.997 15c0-8.285-6.715-15-14.998-15C6.715 0 0 6.715 0 15c0 7.485 5.485 13.69 12.655 14.815v-10.48H8.848v-4.336h3.807v-3.304c0-3.76 2.24-5.836 5.665-5.836 1.641 0 3.357.292 3.357.292v3.691h-1.89c-1.862 0-2.443 1.157-2.443 2.343V15h4.16l-.665 4.336h-3.495v10.48c7.17-1.125 12.655-7.33 12.655-14.816h-.002z'
        />
    </svg>
)

const Instagram = props => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='30'
        height='30'
        fill='none'
        viewBox='0 0 30 30'
    >
        <path
            fill={props.fill}
            d='M17.871 15a2.871 2.871 0 1 1-5.742 0 2.871 2.871 0 0 1 5.742 0z'
        />
        <path
            fill={props.fill}
            d='M21.715 9.92a2.669 2.669 0 0 0-.645-.99 2.668 2.668 0 0 0-.99-.644c-.304-.118-.76-.258-1.6-.297-.908-.041-1.18-.05-3.48-.05s-2.572.009-3.48.05c-.84.039-1.296.179-1.6.297a2.665 2.665 0 0 0-.99.644 2.67 2.67 0 0 0-.645.99c-.118.304-.258.76-.296 1.6-.042.908-.05 1.18-.05 3.48s.008 2.573.05 3.481c.038.84.178 1.296.296 1.6.139.373.358.712.645.99.277.286.616.506.99.644.303.118.76.258 1.6.297.908.041 1.18.05 3.48.05s2.572-.009 3.48-.05c.84-.039 1.296-.179 1.6-.297a2.853 2.853 0 0 0 1.635-1.635c.117-.303.258-.76.296-1.599.041-.908.05-1.18.05-3.48s-.009-2.573-.05-3.481c-.038-.84-.178-1.296-.296-1.6zM15 19.423a4.423 4.423 0 1 1 0-8.846 4.423 4.423 0 0 1 0 8.846zm4.598-7.987a1.034 1.034 0 1 1 0-2.067 1.034 1.034 0 0 1 0 2.067z'
        />
        <path
            fill={props.fill}
            d='M15 0C6.717 0 0 6.717 0 15c0 8.283 6.717 15 15 15 8.283 0 15-6.717 15-15 0-8.283-6.717-15-15-15zm8.561 18.551c-.041.917-.187 1.543-.4 2.09a4.404 4.404 0 0 1-2.52 2.52c-.547.213-1.173.358-2.09.4-.918.042-1.212.052-3.55.052-2.34 0-2.633-.01-3.552-.052-.917-.042-1.543-.187-2.09-.4a4.22 4.22 0 0 1-1.526-.994 4.22 4.22 0 0 1-.994-1.525c-.213-.548-.358-1.174-.4-2.09-.042-.92-.052-1.213-.052-3.552 0-2.34.01-2.633.052-3.551.041-.917.187-1.543.4-2.09a4.22 4.22 0 0 1 .994-1.526c.43-.439.95-.778 1.525-.994.548-.213 1.174-.358 2.09-.4.92-.042 1.213-.052 3.552-.052 2.34 0 2.633.01 3.551.052.917.042 1.543.187 2.09.4a4.222 4.222 0 0 1 1.527.994c.438.43.777.95.993 1.525.213.548.359 1.174.4 2.09.042.92.052 1.213.052 3.552 0 2.34-.01 2.633-.052 3.551z'
        />
    </svg>
)

export {
    SearchIcon,
    Filter,
    FilterActive,
    Clear,
    Star,
    BlankStar,
    Close,
    Menu,
    Airplane,
    Back,
    LocationIcon,
    RestaurantActive,
    RestaurantInActive,
    LandmarkActive,
    LandmarkInActive,
    Plus,
    TreeActive,
    TreeInActive,
    SleepActive,
    SleepInActive,
    PaperAirplane,
    BlackAirplane,
    Calendar,
    RightArrow,
    CurveArrow,
    LeftArrowColor,
    RightArrowColor,
    CloseColor,
    Dollar,
    DownArrow,
    UpArrow,
    PinkClose,
    LandmarkCategoryInActive,
    LandmarkCategoryActive,
    CafeInActive,
    CafeActive,
    ParkInActive,
    ParkActive,
    StreetFoodInActive,
    StreetFoodActive,
    ArtInActive,
    ArtActive,
    MuseumInActive,
    MuseumActive,
    BarInActive,
    BarActive,
    HotelInActive,
    HotelActive,
    SpaInActive,
    SpaActive,
    RateStar,
    CircleArrow,
    DoubleQuotes,
    Bus,
    Train,
    Ferry,
    Bts,
    Mrt,
    Phone,
    Facebook,
    Instagram,
}
