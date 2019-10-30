import React from 'react'
import Filter from '../assets/icon/filter.svg'
import FilterActive from '../assets/icon/filter-active.svg'
import Clear from '../assets/icon/refresh.svg'
import Star from '../assets/icon/full-star.svg'
import BlankStar from '../assets/icon/empty-star.svg'
import Close from '../assets/icon/close.svg'
import Menu from '../assets/icon/featured-menu.svg'
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
import Info from '../assets/icon/info.svg'
import Trash from '../assets/icon/trash.svg'
import Clock from '../assets/icon/clock.svg'

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

const Airplane = props => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={props.size}
        height={props.size}
        fill='none'
        viewBox='0 0 10 10'
    >
        <path
            fill={props.fill}
            d='M9.818.182c.21.247.238.6.086 1.056-.152.456-.41.866-.77 1.227l-1.15 1.149L9.127 8.58c.024.09-.005.169-.085.236l-.914.685a.201.201 0 0 1-.135.042.158.158 0 0 1-.05-.007.197.197 0 0 1-.15-.114l-1.99-3.625-1.849 1.848.379 1.385a.217.217 0 0 1-.058.22l-.685.686a.222.222 0 0 1-.164.064h-.014a.256.256 0 0 1-.171-.093L1.89 8.11.093 6.761C.041 6.727.01 6.673.001 6.596a.245.245 0 0 1 .064-.178l.685-.692a.222.222 0 0 1 .164-.064c.028 0 .047.002.057.007l1.384.378 1.848-1.848L.58 2.209a.239.239 0 0 1-.122-.172.22.22 0 0 1 .064-.193l.914-.913c.066-.062.138-.08.214-.057l4.745 1.134L7.535.867c.362-.362.77-.619 1.227-.77.457-.153.809-.125 1.056.085z'
        />
    </svg>
)

const Search = props => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={props.size}
        height={props.size}
        fill='none'
        viewBox='0 0 17 16'
    >
        <path
            fill={props.fill}
            d='M16.005 14.85l-5.211-5.194A5.933 5.933 0 0 0 12.04 6a5.954 5.954 0 0 0-1.764-4.242A5.986 5.986 0 0 0 6.02 0C4.413 0 2.9.626 1.764 1.758A5.942 5.942 0 0 0 0 6c0 1.602.628 3.11 1.764 4.242A5.982 5.982 0 0 0 6.02 12c1.344 0 2.62-.436 3.666-1.24l5.211 5.192a.164.164 0 0 0 .233 0l.875-.87a.164.164 0 0 0 0-.232zM9.2 9.168A4.478 4.478 0 0 1 6.02 10.48c-1.2 0-2.328-.466-3.179-1.312A4.448 4.448 0 0 1 1.525 6c0-1.196.468-2.322 1.316-3.168A4.478 4.478 0 0 1 6.02 1.52c1.2 0 2.33.464 3.179 1.312A4.448 4.448 0 0 1 10.515 6a4.445 4.445 0 0 1-1.316 3.168z'
        />
    </svg>
)

const Fav = props => (
    <svg
        width={props.width}
        height={props.height}
        viewBox='0 0 15 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            fill={props.fill}
            d='M6.94023 1.41895L7.51206 2.085L8.08389 1.41989C8.45881 0.97996 8.90475 0.6305 9.3961 0.391571C9.88745 0.152641 10.4145 0.0289477 10.9471 0.0275913C11.4797 0.0262348 12.0072 0.147242 12.4995 0.383666C12.9917 0.620091 13.4389 0.967275 13.8155 1.40529C14.1921 1.8433 14.4906 2.36352 14.6939 2.93607C14.8971 3.50862 15.0012 4.12223 15 4.74167C14.9988 5.36111 14.8925 5.97419 14.6871 6.5457C14.4816 7.11721 14.1812 7.6359 13.803 8.07199L8.0847 14.7241C8.00958 14.8116 7.92038 14.8809 7.82219 14.9283C7.724 14.9756 7.61875 15 7.51247 15C7.40617 15 7.30093 14.9756 7.20274 14.9283C7.10455 14.8809 7.01535 14.8116 6.94023 14.7241L1.22115 8.07199C0.837778 7.6373 0.532433 7.1184 0.322824 6.54538C0.113215 5.97237 0.00351324 5.35664 8.30126e-05 4.73393C-0.00334722 4.11121 0.0995621 3.49391 0.302842 2.91781C0.506121 2.34172 0.805724 1.81831 1.18427 1.37794C1.56282 0.937578 2.01277 0.589024 2.50804 0.3525C3.0033 0.115976 3.53401 -0.00380943 4.06938 9.23396e-05C4.60476 0.00399411 5.13414 0.131505 5.62681 0.375229C6.11949 0.618953 6.56565 0.974039 6.93942 1.41989L6.94023 1.41895Z'
        />
    </svg>
)

const Back = props => (
    <svg
        width={props.width}
        height={props.height}
        viewBox='0 0 13 21'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            fill={props.fill}
            stroke={props.stroke}
            d='M1.20224 19.6643C1.71266 20.1747 2.53557 20.1747 3.04599 19.6643L11.7022 11.0081C11.7988 10.9117 11.8754 10.7972 11.9277 10.6712C11.98 10.5452 12.0069 10.4101 12.0069 10.2737C12.0069 10.1373 11.98 10.0022 11.9277 9.87616C11.8754 9.75014 11.7988 9.63567 11.7022 9.53931L3.04599 0.883057C2.53557 0.37264 1.71266 0.37264 1.20224 0.883057C0.691823 1.39347 0.691823 2.21639 1.20224 2.72681L8.74391 10.2789L1.19182 17.831C0.691823 18.331 0.691823 19.1643 1.20224 19.6643Z'
        />
    </svg>
)

export {
    Search,
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
    Fav,
    Info,
    Trash,
    Clock,
}
