import React from 'react'
import Clear from '../assets/icon/refresh.svg'
import Star from '../assets/icon/full-star.svg'
import BlankStar from '../assets/icon/empty-star.svg'
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
import AddActive from '../assets/icon/add-white.svg'
import AddInActive from '../assets/icon/add-grey.svg'
import FavActive from '../assets/icon/heart-white.svg'
import FavInActive from '../assets/icon/heart-grey.svg'
import Time from '../assets/icon/time.svg'
import PinkLocationIcon from '../assets/icon/location.svg'
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
import CoinInactive from '../assets/icon/coin-inactive.svg'
import CoinActive from '../assets/icon/coin-active.svg'
import CreditcardInactive from '../assets/icon/credit-card-inactive.svg'
import CreditcardActive from '../assets/icon/credit-card-active.svg'
import GroupInactive from '../assets/icon/group-inactive.svg'
import GroupActive from '../assets/icon/group-active.svg'
import HandicapInactive from '../assets/icon/handicap-inactive.svg'
import HandicapActive from '../assets/icon/handicap-active.svg'
import KidInactive from '../assets/icon/kids-inactive.svg'
import KidActive from '../assets/icon/kids-active.svg'
import ParkingInactive from '../assets/icon/parking-inactive.svg'
import ParkingActive from '../assets/icon/parking-active.svg'
import PetInactive from '../assets/icon/pet-inactive.svg'
import PetActive from '../assets/icon/pet-active.svg'
import PlugInactive from '../assets/icon/plug-inactive.svg'
import PlugActive from '../assets/icon/plug-active.svg'
import SmokingInactive from '../assets/icon/smoking-inactive.svg'
import SmokingActive from '../assets/icon/smoking-active.svg'
import WifiInactive from '../assets/icon/wifi-inactive.svg'
import WifiActive from '../assets/icon/wifi-active.svg'
import ArrowDown from '../assets/icon/show-more.svg'
import ArrowUp from '../assets/icon/show-less.svg'
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
import Twitter from '../assets/icon/twitter.svg'
import Line from '../assets/icon/line.svg'
import Facebook from '../assets/icon/facebook.svg'
import Copy from '../assets/icon/copy.svg'
import SettingButton from '../assets/icon/setting-button.svg'
import ShareButton from '../assets/icon/share-button.svg'
import SummaryButton from '../assets/icon/summary-button.svg'
import NoResult from '../assets/icon/no-result.svg'

const Close = props => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='6'
        height='6'
        fill='none'
        viewBox='0 0 6 6'
    >
        <path
            fill={props.color}
            d='M3.748 3L5.843.905a.53.53 0 1 0-.748-.75L3 2.25.905.155a.53.53 0 1 0-.75.75L2.25 3 .155 5.095a.53.53 0 1 0 .75.75L3 3.75l2.095 2.095a.53.53 0 0 0 .75-.75L3.748 3z'
        />
    </svg>
)

const Filter = props => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='21'
        height='22'
        fill='none'
        viewBox='0 0 21 22'
    >
        {props.status === 'inactive' && (
            <path
                fill='#F2B099'
                d='M8.135 19.807l2.13 1.6c.33.3.744.45 1.24.45.197 0 .528-.066.99-.2.76-.4 1.14-1.05 1.14-1.95v-7.553l6.888-8.653c.561-.7.627-1.45.198-2.25C20.225.416 19.598 0 18.838 0H2.089C1.131 0 .504.383.206 1.15c-.33.867-.264 1.618.199 2.251l6.887 8.753v5.952c0 .734.281 1.3.843 1.7z'
            />
        )}
        {props.status === 'active' && (
            <path
                fill='#F2B099'
                d='M8.135 19.807l2.13 1.6c.33.3.744.45 1.24.45.197 0 .528-.066.99-.2.76-.4 1.14-1.05 1.14-1.95v-7.553l6.888-8.653c.561-.7.627-1.45.198-2.25C20.225.416 19.598 0 18.838 0H2.089C1.131 0 .504.383.206 1.15c-.33.867-.264 1.618.199 2.251l6.887 8.753v5.952c0 .734.281 1.3.843 1.7zM2.089 2.1h16.749l-7.334 9.203v8.403l-2.08-1.6v-6.803L2.088 2.101z'
            />
        )}
    </svg>
)

const LandmarkCategory = props => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='40'
        height='40'
        fill='none'
        viewBox='0 0 40 40'
    >
        <g fill={props.fill} clipPath='url(#a)'>
            <path d='M31.348 19.967v-.932l-4.992-3.66h-2.995V13.71l1.997-1.332V9.517l-2.663-.665v-1.73l1.331-.666V2.928l-1.996-.665V.998L20.033 0l-1.997.998v1.265l-1.996.665v3.528l1.33.666v1.73l-2.661.665v2.862l1.996 1.332v1.663H13.71L8.72 19.035v.266l-3.994-3.328v5.658l1.331 1.33v3.728c0 .599.267 1.198.8 1.597l1.863 1.398v.599c0 1.331.798 2.529 1.996 3.061l3.994 1.797v.666l-1.331 1.997V40h13.31v-2.196l-1.33-1.997v-.666l3.993-1.797c1.198-.532 1.93-1.663 1.997-2.995l1.863-1.397c.533-.4.799-.999.799-1.598v-3.727l1.331-1.33v-5.658l-3.993 3.328zm-5.99 8.719h-2.663v1.33h1.331c.4 0 .666.267.666.666 0 .4-.266.666-.666.666-.998 0-1.863-.533-2.262-1.398l-.666-1.264h-2.13l-.599 1.264c-.399.865-1.33 1.398-2.263 1.398-.399 0-.665-.266-.665-.666s.266-.665.665-.665h1.332v-1.331h-2.663a1.335 1.335 0 0 1-1.33-1.331v-.666h-3.329V21.23l2.463 1.465h5.457c.2 0 .4.132.533.266l.666 1.065-.932 1.397c-.533.799-.333 1.797.466 2.33.266.2.599.266.931.266h.6c.931 0 1.663-.732 1.663-1.664 0-.333-.066-.665-.266-.932l-.865-1.397.665-1.065c.134-.2.333-.266.533-.266h5.457l2.463-1.465v5.458h-3.328v.666c.067.732-.532 1.33-1.264 1.33zm-5.99-2.33c0-.067 0-.133.066-.2l.6-.931.598.931c.133.134.067.4-.066.466-.067.067-.133.067-.2.067h-.599c-.266 0-.4-.133-.4-.333zm.665-24.892l.666.333v.266h-1.331v-.266l.665-.333zM17.371 3.86l1.464-.466h2.463l1.397.466v1.797l-.798.4h-3.66l-.866-.4V3.86zm3.993 4.859h-2.662V7.388h2.662v1.33zm-5.324 2.995v-1.132l2.063-.532h3.86l2.063.532v1.132l-1.53.998H17.57l-1.531-.998zm5.99 3.66h-3.994v-1.33h3.994v1.33zm-7.92 1.332h11.847l4.06 2.995-2.862 1.663H22.03c-.666 0-1.265.333-1.664.866l-.333.598-.399-.598c-.4-.533-.998-.866-1.664-.866h-5.125l-2.795-1.663 4.06-2.995zM7.654 27.22c-.2-.133-.266-.332-.266-.532v-4.26L6.056 21.1v-2.33l2.663 2.196v7.055l-1.065-.799zM25.358 38.67h-10.65v-.466l1.332-1.997v-.865h1.33c1.133 0 1.998.865 1.998 1.997h1.33c0-1.132.866-1.997 1.997-1.997h1.331v.865l1.332 1.997v.466zm3.46-6.589l-4.259 1.93h-1.864a3.373 3.373 0 0 0-2.662 1.331c-.599-.865-1.597-1.33-2.662-1.33h-1.863l-4.26-1.931c-.732-.333-1.198-1.065-1.198-1.797V28.02h2.063a2.659 2.659 0 0 0 2.063 1.93c-.066.266-.133.466-.133.732 0 1.132.866 1.997 1.997 1.997 1.464 0 2.862-.799 3.46-2.13l.267-.532h.533l.266.532a3.837 3.837 0 0 0 3.46 2.13c1.132 0 1.997-.866 1.997-1.997 0-.266-.066-.466-.133-.732a2.66 2.66 0 0 0 2.064-1.93h2.063v2.263c0 .799-.466 1.53-1.198 1.797zm5.192-10.316l-1.331 1.331v4.26c0 .199-.067.399-.266.532l-1.065.799v-6.989l2.662-2.196v2.263z' />
            <path d='M24.36 24.027c-.932 0-1.665.732-1.665 1.663 0 .932.733 1.664 1.664 1.664.932 0 1.664-.732 1.664-1.663 0-.932-.732-1.664-1.664-1.664zm0 1.996c-.2 0-.334-.133-.334-.332 0-.2.134-.333.333-.333.2 0 .333.133.333.332 0 .2-.133.333-.333.333zM15.707 24.027c-.932 0-1.664.732-1.664 1.663 0 .932.732 1.664 1.664 1.664.932 0 1.664-.732 1.664-1.663 0-.932-.732-1.664-1.664-1.664zm0 1.996c-.2 0-.333-.133-.333-.332 0-.2.133-.333.333-.333s.333.133.333.332c0 .2-.133.333-.333.333zM24.026 18.702h3.328v1.331h-3.328v-1.33zM20.699 18.702h1.996v1.331H20.7v-1.33zM17.37 18.702h1.998v1.331H17.37v-1.33zM12.712 18.702h3.328v1.331h-3.328v-1.33z' />
        </g>
        <defs>
            <clipPath id='a'>
                <path fill='#fff' d='M0 0h40v40H0z' />
            </clipPath>
        </defs>
    </svg>
)
const Cafe = props => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='40'
        height='40'
        fill='none'
        viewBox='0 0 40 40'
    >
        <g fill={props.fill} clipPath='url(#a)'>
            <path d='M30.833 15.833H7.5a2.503 2.503 0 0 0-2.5 2.5v1.666c0 5.947 3.285 11.34 8.572 14.076a.835.835 0 0 0 .765-1.482 14.131 14.131 0 0 1-7.67-12.594v-1.666c0-.46.373-.834.833-.834h23.334c.46 0 .834.374.834.834v1.666c0 5.322-2.94 10.147-7.672 12.592a.834.834 0 0 0 .765 1.482 15.787 15.787 0 0 0 8.573-14.074v-1.666c0-1.379-1.122-2.5-2.5-2.5z' />
            <path d='M38.272 33.013a.835.835 0 0 0-.77-.515H.834a.835.835 0 0 0-.59 1.423l1.868 1.87A5.798 5.798 0 0 0 6.238 37.5h25.857a5.809 5.809 0 0 0 4.128-1.709l1.869-1.87a.831.831 0 0 0 .18-.908zm-3.229 1.6a4.143 4.143 0 0 1-2.946 1.22H6.237a4.143 4.143 0 0 1-2.946-1.22l-.447-.447H35.49l-.447.447zM38.388 19.768c-2.245-1.444-5.831.123-6.233.305a.835.835 0 0 0 .691 1.518c.804-.365 3.38-1.23 4.64-.418.569.365.847 1.073.847 2.16 0 3.337-6.73 5.353-9.328 5.85l-.59.117a.833.833 0 1 0 .321 1.633l.585-.115C29.758 30.735 40 28.726 40 23.333c0-1.677-.543-2.875-1.612-3.565zM25.655 8.853c1.355-1.694 1.355-4.346 0-6.039a.832.832 0 1 0-1.302 1.042c.858 1.071.858 2.883-.002 3.958-1.356 1.694-1.356 4.345 0 6.039a.83.83 0 0 0 1.172.13.833.833 0 0 0 .13-1.172c-.86-1.072-.86-2.883.002-3.958zM20.648 8.853c1.357-1.694 1.357-4.345 0-6.039a.833.833 0 1 0-1.302 1.042c.86 1.071.86 2.883-.002 3.958-1.355 1.694-1.355 4.345 0 6.039a.83.83 0 0 0 1.172.13.832.832 0 0 0 .13-1.172c-.858-1.072-.858-2.883.002-3.958zM15.654 8.854c1.355-1.693 1.355-4.345 0-6.038a.833.833 0 0 0-1.302 1.04c.86 1.071.86 2.883 0 3.958-1.358 1.694-1.358 4.345 0 6.039a.83.83 0 0 0 1.17.131.833.833 0 0 0 .13-1.171c-.86-1.074-.86-2.884.002-3.959z' />
        </g>
        <defs>
            <clipPath id='a'>
                <path fill='#fff' d='M0 0h40v40H0z' />
            </clipPath>
        </defs>
    </svg>
)
const Park = props => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='40'
        height='40'
        fill='none'
        viewBox='0 0 40 40'
    >
        <g fill={props.fill} clipPath='url(#a)'>
            <path d='M39.333 31.333a.667.667 0 0 0 0-1.333h-.666a.667.667 0 1 0-1.334 0H26.667a.667.667 0 0 0-1.334 0h-.666a.667.667 0 1 0 0 1.333h.666v2h-.666a.667.667 0 1 0 0 1.333h.666v.667h-.666a.667.667 0 1 0 0 1.333h.666v2H14v-5.515a6.592 6.592 0 0 0 3.231.849 6.869 6.869 0 0 0 6.77-6.949 6.942 6.942 0 0 0-3.797-6.242 6.085 6.085 0 0 0 1.18-3.63 6.019 6.019 0 0 0-4.818-5.946A5.156 5.156 0 0 0 12 3.95c-.02 0-.039.003-.058.003a4.665 4.665 0 0 0-9.236.107 3.334 3.334 0 0 0 .628 6.608H7.22c.06.192.131.38.213.563a6.022 6.022 0 0 0-4.817 5.95 6.086 6.086 0 0 0 1.18 3.629A6.942 6.942 0 0 0 0 27.05 6.868 6.868 0 0 0 6.77 34a6.59 6.59 0 0 0 3.23-.85v5.516H.667a.667.667 0 1 0 0 1.334h38.666a.667.667 0 0 0 0-1.334h-.666v-2h.666a.667.667 0 1 0 0-1.333h-.666v-.667h.666a.667.667 0 1 0 0-1.333h-.666v-2h.666zM6.975 9.103c0 .077.008.154.012.23H3.334a2 2 0 1 1 0-4A.666.666 0 0 0 4 4.668a3.327 3.327 0 0 1 6.615-.514 5.143 5.143 0 0 0-3.64 4.95zm5.692 29.563h-1.333v-6.495c.239-.223.461-.462.666-.716.205.254.428.493.667.716v6.495zm.08-8.471l4.391-4.39a.667.667 0 0 0-.942-.943l-3.529 3.529v-6.782l3.138-3.138a.667.667 0 0 0-.943-.942l-2.195 2.195v-3.057a.667.667 0 1 0-1.333 0v3.057l-2.196-2.195a.667.667 0 0 0-.942.942l3.138 3.138v6.781l-3.529-3.528a.667.667 0 0 0-.943.943l4.39 4.39a5.338 5.338 0 0 1-4.483 2.471 5.534 5.534 0 0 1-5.435-5.615 5.58 5.58 0 0 1 3.779-5.347.667.667 0 0 0 .258-1.108A4.75 4.75 0 0 1 3.95 17.18a4.643 4.643 0 0 1 4.511-4.72.689.689 0 0 0 .669-.363.665.665 0 0 0-.058-.695 3.864 3.864 0 0 1-.763-2.299A3.763 3.763 0 0 1 12 5.283a3.762 3.762 0 0 1 3.693 3.82 3.864 3.864 0 0 1-.764 2.299.662.662 0 0 0-.047.694.681.681 0 0 0 .605.366 4.648 4.648 0 0 1 4.565 4.718 4.751 4.751 0 0 1-1.423 3.416.666.666 0 0 0 .258 1.108 5.641 5.641 0 0 1-1.656 10.962 5.337 5.337 0 0 1-4.483-2.471zm24.586 8.471H26.667v-2h10.666v2zm0-3.333H26.667v-.667h10.666v.667zm0-2H26.667v-2h10.666v2zM28.667 16.667h8a3.334 3.334 0 0 0 .627-6.608 4.667 4.667 0 0 0-9.254 0 3.334 3.334 0 0 0 .627 6.608zm0-5.334a.666.666 0 0 0 .666-.666 3.333 3.333 0 0 1 6.667 0 .666.666 0 0 0 .667.666 2 2 0 0 1 0 4h-8a2 2 0 0 1 0-4z' />
        </g>
        <defs>
            <clipPath id='a'>
                <path fill='#fff' d='M0 0h40v40H0z' />
            </clipPath>
        </defs>
    </svg>
)
const StreetFood = props => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='40'
        height='40'
        fill='none'
        viewBox='0 0 40 40'
    >
        <path
            fill={props.fill}
            d='M15 31.25a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM15 35a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z'
        />
        <path
            fill={props.fill}
            d='M36.25 33.75a2.477 2.477 0 0 0-1.625.616l-.875-.875V23.125h2.5v-3.75H35v-15h-1.375c.08-.199.122-.41.125-.625 0-1.183-.77-2.5-1.875-2.5a1.615 1.615 0 0 0-1.25.688 1.484 1.484 0 0 0-2.5 0 1.615 1.615 0 0 0-1.25-.688C25.77 1.25 25 2.567 25 3.75c.003.214.045.426.125.625H20v15h-1.008l.976-2.927a.625.625 0 0 0-.593-.823h-7.5a.626.626 0 0 0-.592.823l.975 2.927H11.25v-3.75a.626.626 0 0 0-.066-.28l-.559-1.118V12.5a.624.624 0 0 0-.625-.625H7.5a.625.625 0 0 0-.625.625v1.727l-.56 1.119a.625.625 0 0 0-.065.279v3.75H1.875A.625.625 0 0 0 1.25 20v1.875H2.5v-1.25H5v2.5h2.5v11.25h2.543a4.997 4.997 0 0 0 9.914 0h12.91l1.037 1.038a2.493 2.493 0 1 0 2.346-1.663zM31.875 2.5c.2 0 .625.591.625 1.25a.625.625 0 1 1-1.25 0c0-.659.425-1.25.625-1.25zm-2.5 0c.2 0 .625.591.625 1.25a.625.625 0 1 1-1.25 0c0-.659.425-1.25.625-1.25zM26.25 3.75c0-.659.425-1.25.625-1.25s.625.591.625 1.25a.625.625 0 1 1-1.25 0zm7.5 1.875v6.25h-2.615c.074-.2.113-.412.115-.625a1.867 1.867 0 0 0-3.125-1.387 1.866 1.866 0 0 0-.762-.415 1.874 1.874 0 1 0-3.476 0 1.844 1.844 0 0 0-1.272 2.427H21.25v-6.25h12.5zm-10 5.625a.625.625 0 1 1 1.25 0 .625.625 0 0 1-1.25 0zm1.875-1.875a.625.625 0 1 1 0-1.25.625.625 0 0 1 0 1.25zm.625 1.875a.625.625 0 1 1 1.25 0 .625.625 0 0 1-1.25 0zm2.5 0a.625.625 0 1 1 1.25 0 .625.625 0 0 1-1.25 0zm-7.5 1.875h12.5v6.25H32.5v-5h-5v2.5h-5v2.5h-1.25v-6.25zm6.25 6.25h-3.75v-1.25h3.75v1.25zm1.25-3.75h2.5v3.75h-2.5v-3.75zm-16.008 1.25H15v1.25h1.25v-1.25h2.258l-.834 2.5h-4.098l-.834-2.5zm-4.68-2.22a.625.625 0 0 0 .063-.28v-1.25h1.25v1.25c0 .097.022.193.066.28L10 15.772v1.102H7.5v-1.102l.563-1.119zm-.562 3.47H10v1.25H7.5v-1.25zm-1.25 3.75v-1.25H35v1.25H6.25zm8.75 1.25h12.5v3.125H15v-3.125zM15 37.5a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5zm17.5-4.375H19.957a4.981 4.981 0 0 0-.325-1.25H27.5v-1.25h-8.603a4.992 4.992 0 0 0-8.854 2.5H8.75v-10h5V27.5h15v-4.375h3.75v10zm3.75 4.375a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z'
        />
        <path
            fill={props.fill}
            d='M28.75 30.625v1.25h2.5V26.25H30v4.375h-1.25zM10 24.375h1.25v1.25H10v-1.25zM11.25 26.875h1.25v1.25h-1.25v-1.25z'
        />
    </svg>
)
const Art = props => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='40'
        height='40'
        fill='none'
        viewBox='0 0 40 40'
    >
        <path
            fill={props.fill}
            d='M9.063 10.938a.782.782 0 1 0-.001-1.564.782.782 0 0 0 0 1.563z'
        />
        <path
            fill={props.fill}
            d='M4.375 28.125h5.334L4.312 38.868A.782.782 0 0 0 5.01 40h3.56a.782.782 0 0 0 .698-.43l5.75-11.445h2.638v11.094c0 .431.35.781.782.781h3.125c.431 0 .78-.35.78-.781V28.125h2.64l5.75 11.444a.78.78 0 0 0 .697.431h3.56c.581 0 .96-.613.699-1.132L30.29 28.125h5.334a2.343 2.343 0 0 0 .781-4.553V5.469a2.346 2.346 0 0 0-2.343-2.344h-9.376v-.781A2.346 2.346 0 0 0 22.345 0h-4.688a2.346 2.346 0 0 0-2.343 2.344v.781H5.937a2.346 2.346 0 0 0-2.343 2.344V23.57a2.345 2.345 0 0 0 .781 4.554zm3.713 10.313H6.277l5.18-10.313h1.812L8.088 38.438zm12.693 0H19.22V28.124h1.562v10.313zm12.943 0h-1.812l-5.181-10.313h1.811l5.182 10.313zm1.901-11.876H4.375a.782.782 0 0 1 0-1.562h31.25a.782.782 0 0 1 0 1.563zm-10.614-3.125l-2.343-2.343 4.363-4.364 6.708 6.707H25.01zm-4.001-1.79l1.791 1.79H6.261l8.27-8.27 6.479 6.48zM16.875 2.343c0-.431.35-.781.781-.781h4.688c.43 0 .781.35.781.78v2.345h-6.25V2.344zM5.937 4.688h9.375v.78c0 .432.35.782.782.782h7.812c.432 0 .782-.35.782-.781v-.782h9.375c.43 0 .78.35.78.782v16.863l-7.26-7.26a.781.781 0 0 0-1.104 0l-4.916 4.917-6.48-6.479a.781.781 0 0 0-1.104 0l-8.823 8.822V5.47c0-.431.35-.782.782-.782z'
        />
        <path
            fill={props.fill}
            d='M21.563 15.625a2.346 2.346 0 0 0 2.343-2.344 2.346 2.346 0 0 0-2.343-2.344 2.346 2.346 0 0 0-2.344 2.344 2.346 2.346 0 0 0 2.343 2.344zm0-3.125a.782.782 0 1 1-.002 1.564.782.782 0 0 1 .002-1.564zM27.813 10.938h3.125a.781.781 0 1 0 0-1.563h-3.125a.781.781 0 1 0 0 1.563zM12.188 10.938h4.687a.781.781 0 1 0 0-1.563h-4.688a.781.781 0 1 0 0 1.563z'
        />
    </svg>
)
const Museum = props => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='40'
        height='40'
        fill='none'
        viewBox='0 0 40 40'
    >
        <path
            fill={props.fill}
            d='M34.57 24.032a2.31 2.31 0 0 0-2.304 2.325v2.558c-.235 1.382-1.43 2.665-3.419 3.696-2.348 1.216-5.492 1.892-8.837 1.892-3.346 0-6.505-.674-8.852-1.89-1.99-1.03-3.19-2.316-3.424-3.698v-2.558a2.305 2.305 0 0 0-4.609 0v12.28c0 .346.28.66.625.66h3.398c.346 0 .586-.314.586-.66v-7.036c.704.788 1.655 1.506 2.844 2.122 2.522 1.306 5.871 2.034 9.413 2.034 3.541 0 6.904-.727 9.427-2.034 1.189-.616 2.145-1.334 2.848-2.122v7.037c0 .346.24.659.586.659h3.398c.345 0 .625-.313.625-.659V26.357a2.31 2.31 0 0 0-2.305-2.325zm-29.14 1.25a1.058 1.058 0 0 1 1.054 1.075v1.612H4.375v-1.612a1.059 1.059 0 0 1 1.055-1.075zM4.375 38.047v-8.828h2.11v8.828h-2.11zM34.57 25.283a1.058 1.058 0 0 1 1.055 1.074v1.612h-2.11v-1.612a1.06 1.06 0 0 1 1.055-1.075zm-1.054 12.764v-8.828h2.109v8.828h-2.11z'
        />
        <path
            fill={props.fill}
            d='M29.531 3.281a.625.625 0 0 0-.625-.625H11.172a.625.625 0 0 0-.625.625v21.016a.625.625 0 0 0 .625.625h17.734a.625.625 0 0 0 .625-.625V3.28zm-1.328 20.313H11.797V3.906h16.406v19.688z'
        />
        <path
            fill={props.fill}
            d='M31.406 1.328a.625.625 0 0 0-.625-.625H9.22a.625.625 0 0 0-.625.625v24.844a.625.625 0 0 0 .625.625H30.78a.625.625 0 0 0 .625-.625V1.328zm-21.562.625h20.312v23.594H9.844V1.953z'
        />
        <path
            fill={props.fill}
            d='M14.1 14.797c0 2.126 1.06 4.187 2.726 5.351l.005 1.338a.625.625 0 0 0 .625.623h5.122a.625.625 0 0 0 .625-.625v-1.325c1.63-1.023 2.667-3.093 2.667-5.37 0-2.21-1.073-4.23-2.823-5.365v-.908h.469a.625.625 0 0 0 .625-.625V6.25a.625.625 0 0 0-.625-.625h-7.11a.625.625 0 0 0-.625.625v1.64a.625.625 0 0 0 .625.626h.39v.925c-1.648 1.168-2.696 3.23-2.696 5.356zm9.898-2.531c.23.43.397.892.5 1.37l-.072.073c-.161.17-.174.17-.239.17-.064 0-.078 0-.239-.17-.198-.209-.53-.558-1.145-.558-.614 0-.946.35-1.145.558-.161.17-.175.17-.239.17s-.078 0-.239-.17c-.198-.209-.53-.558-1.145-.558-.614 0-.946.35-1.145.558-.161.17-.174.17-.239.17-.064 0-.077 0-.239-.17-.198-.209-.53-.558-1.145-.558-.614 0-.946.35-1.145.558-.16.17-.174.17-.238.17-.065 0-.078 0-.24-.17a3.594 3.594 0 0 0-.15-.15c.106-.45.266-.884.478-1.293h8.026zm-8.642 2.763c.167.068.347.101.528.1.614 0 .946-.35 1.145-.559.16-.17.174-.17.238-.17.065 0 .078 0 .24.17.198.21.53.56 1.144.56.615 0 .947-.35 1.145-.56.162-.17.175-.17.24-.17.063 0 .077 0 .238.17.199.21.53.56 1.145.56s.947-.35 1.145-.56c.162-.17.175-.17.24-.17.063 0 .077 0 .238.17.199.21.531.56 1.145.56.144 0 .288-.021.426-.064-.016.346-.061.69-.136 1.028H15.51a5.407 5.407 0 0 1-.154-1.065zm7.095 4.125a.625.625 0 0 0-.498.612v1.093H18.08l-.004-1.05a.625.625 0 0 0-.3-.532 4.99 4.99 0 0 1-1.786-1.933h8.054c-.38.78-.93 1.42-1.592 1.81zm-5.42-12.279h5.86v.39h-.47a.625.625 0 0 0-.624.626v.234h-3.75v-.234a.625.625 0 0 0-.625-.625h-.39v-.391zm.719 3.433a.626.626 0 0 0 .297-.532v-.401h3.75v.401a.625.625 0 0 0 .319.545c.34.191.655.425.937.695h-6.182c.263-.271.558-.509.879-.708z'
        />
    </svg>
)
const Bar = props => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='40'
        height='40'
        fill='none'
        viewBox='0 0 40 40'
    >
        <path
            fill={props.fill}
            d='M26.655.087a2.03 2.03 0 1 0 0 4.058 2.03 2.03 0 0 0 0-4.058zm0 2.706a.677.677 0 1 1 0-1.354.677.677 0 0 1 0 1.354zM20.567 3.47a3.382 3.382 0 1 0 0 6.763 3.382 3.382 0 0 0 0-6.764zm0 5.41a2.03 2.03 0 1 1 0-4.058 2.03 2.03 0 0 1 0 4.059zM11.096 4.822a2.706 2.706 0 1 0 0 5.412 2.706 2.706 0 0 0 0-5.412zm0 4.059a1.353 1.353 0 1 1 0-2.706 1.353 1.353 0 0 1 0 2.706zM7.037.087a2.03 2.03 0 1 0 0 4.058 2.03 2.03 0 0 0 0-4.058zm0 2.706a.677.677 0 1 1 0-1.354.677.677 0 0 1 0 1.354zM23.46 21.819l1.28-.436 4.375 12.86-1.28.435-4.376-12.86zM19.998 22.992l1.28-.435 4.376 12.86-1.28.435-4.376-12.86zM26.92 20.639l1.28-.436 4.374 12.86-1.28.435-4.374-12.86z'
        />
        <path
            fill={props.fill}
            d='M39.795 25.087L36.6 15.69a3.81 3.81 0 0 0-4.835-2.38l-1.834.623-.118-.348a4.854 4.854 0 0 0-8.456-1.385 3.754 3.754 0 0 0-3.117 1.285 3.292 3.292 0 0 0-.446-.112 3.816 3.816 0 0 0-1.507.04 4.855 4.855 0 0 0-8.14 2.672l-.064.363-1.907-.334a3.81 3.81 0 0 0-4.41 3.097L.056 28.989A3.816 3.816 0 0 0 3.155 33.4l1.907.334-.06.347a1.721 1.721 0 0 0 .096 3.372l14.41 2.52a1.722 1.722 0 0 0 1.856-.983c.3.069.615.051.907-.05l13.849-4.712a1.722 1.722 0 0 0-.424-3.346l-.114-.334 1.832-.623a3.816 3.816 0 0 0 2.381-4.837zM28.752 14.66l.237.698-4.655 1.583-.239-.698 4.657-1.583zm-11.257.516a2.42 2.42 0 0 1 .886-.127.67.67 0 0 0 .608-.324h.003a2.449 2.449 0 0 1 2.56-1.137.677.677 0 0 0 .702-.306 3.461 3.461 0 0 1 1.83-1.45 3.506 3.506 0 0 1 4.162 1.569l-5.23 1.78a.677.677 0 0 0-.42.858l1.01 2.968a.89.89 0 0 1-1.687.573l-.338-.989a.676.676 0 1 0-1.28.437.89.89 0 0 1-1.687.572l-.676-1.979a.677.677 0 0 0-.858-.422l-1.237.42a2.453 2.453 0 0 1 1.652-2.443zm-.38 4.224l-.697.237-.237-.698.697-.237.238.698zm-3.58-5.931h.002a3.463 3.463 0 0 1 2.037 1.15.677.677 0 0 0 .12.101 3.834 3.834 0 0 0-1.088 1.827l-4.938-.884a3.506 3.506 0 0 1 3.867-2.194zm-4.17 3.52l5.138.92c.027.255.08.507.159.751l-5.424-.947.126-.724zm-5.98 15.077a2.462 2.462 0 0 1-1.996-2.845L3.1 19.443a2.456 2.456 0 0 1 2.841-1.998h.004l1.907.333-.127.727-1.392-.244a2.244 2.244 0 0 0-2.597 1.824v.003l-1.53 8.748a2.245 2.245 0 0 0 1.826 2.597l1.392.244-.127.726-1.913-.337zm4.107-12.229L5.655 30.341l-1.393-.243a.89.89 0 0 1-.724-1.03v-.001l1.53-8.75a.894.894 0 0 1 1.032-.723l1.392.243zM20.168 38.34a.369.369 0 0 1-.427.3L5.33 36.12a.369.369 0 1 1 .103-.73l.025.004a.677.677 0 0 0 .783-.55L9.006 19.04l6.149 1.076 4.714 13.862-.551 3.151a.675.675 0 0 0 .55.783.37.37 0 0 1 .3.427zm15.747-5.86a.368.368 0 0 1-.23.467l-13.849 4.712a.369.369 0 1 1-.239-.698.676.676 0 0 0 .423-.858l-5.166-15.188.806-.274a2.235 2.235 0 0 0 3.46.183 2.244 2.244 0 0 0 3.767-2.252l-.12-.348 4.656-1.585 5.167 15.188c.12.353.504.543.858.423.193-.065.401.038.467.23zM31.04 17.19l1.338-.455a.89.89 0 0 1 1.13.556v.001L36.37 25.7a.892.892 0 0 1-.556 1.13l-1.338.456L31.04 17.19zm5.94 11.45l-1.832.624-.24-.698 1.338-.456a2.246 2.246 0 0 0 1.401-2.847l-2.861-8.408a2.248 2.248 0 0 0-2.847-1.402l-1.338.455-.236-.697 1.837-.621a2.46 2.46 0 0 1 3.12 1.536l3.194 9.396a2.461 2.461 0 0 1-1.536 3.118z'
        />
        <path
            fill={props.fill}
            d='M12.018 36.389l2.34-13.38 1.334.233-2.341 13.38-1.333-.233zM15.627 37.023l1.312-7.958 1.334.22-1.312 7.957-1.334-.22zM8.423 35.756l2.34-13.381 1.333.233-2.34 13.38-1.333-.232z'
        />
    </svg>
)
const Hotel = props => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='40'
        height='40'
        fill='none'
        viewBox='0 0 40 40'
    >
        <g clipPath='url(#a)'>
            <path
                fill={props.fill}
                d='M36.107 16.962V10.46c0-2.91-2.053-3.979-3.979-3.979H7.743c-1.925 0-3.978 1.027-3.978 3.979v6.502C1.84 17.176 0 18.46 0 21.412v5.048C0 27.315.684 28 1.54 28h.513v3.979c0 .855.685 1.54 1.54 1.54h1.455c.856 0 1.54-.685 1.54-1.54v-4.022h26.824v4.022c0 .855.684 1.54 1.54 1.54h1.454c.856 0 1.54-.685 1.54-1.54v-4.022h.514c.855 0 1.54-.684 1.54-1.54v-5.005c-.128-2.952-1.968-4.236-3.893-4.45zM5.219 10.46h.086c0-2.01 1.326-2.439 2.438-2.439h24.385c1.113 0 2.439.428 2.439 2.439v6.46h-1.155v-3.68c0-.855-.685-1.54-1.54-1.54H22.46c-.856 0-1.54.685-1.54 1.54v3.68h-1.797v-3.68c0-.855-.684-1.54-1.54-1.54H8.17c-.855 0-1.54.685-1.54 1.54v3.68H5.219v-6.46zm26.653 2.78v3.68H22.46v-3.68h9.412zm-14.204 0v3.68H8.257v-3.68h9.411zM5.005 31.98H3.551v-4.022h1.454v4.022zm31.316 0h-1.455v-4.022h1.455v4.022zm2.01-5.52H1.498v-2.267h36.835v2.268zm0-3.807H1.498v-1.24c0-2.567 1.883-2.952 2.952-2.952H35.38c1.112 0 2.952.385 2.952 2.952v1.24z'
            />
        </g>
        <defs>
            <clipPath id='a'>
                <path fill='#fff' d='M0 0h40v40H0z' />
            </clipPath>
        </defs>
    </svg>
)
const Spa = props => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='40'
        height='40'
        fill='none'
        viewBox='0 0 40 40'
    >
        <g fill={props.fill} clipPath='url(#a)'>
            <path d='M39.333 31.666h-.74a4.653 4.653 0 0 0-.868-7.333 4.666 4.666 0 0 0 2.274-4 4.673 4.673 0 0 0-4.666-4.666h-6V11a.667.667 0 0 0-.768-.659l-7.899 1.215v-.623a3.34 3.34 0 0 0 2.667-3.266c0-2.91-2.745-5.688-2.862-5.805a.667.667 0 0 0-.943 0c-.117.117-2.861 2.895-2.861 5.805a3.34 3.34 0 0 0 2.666 3.266v.83l-8.101 1.246a.667.667 0 0 0-.566.658v7.427A7.296 7.296 0 0 0 9 19.757a.667.667 0 0 0-.667 0 7.366 7.366 0 0 0-3.6 5.39 7.236 7.236 0 0 0-1.4-.147c-.294.001-.588.02-.88.057a.667.667 0 0 0-.533.4 7.327 7.327 0 0 0 2.538 8.876H0v1.333h1.588l1.149 2.298a.667.667 0 0 0 .596.37h25.333a.667.667 0 0 0 .667-.668v-2h4.255l1.148 2.298a.667.667 0 0 0 .597.37h2.666a.667.667 0 0 0 .667-.668v-2h.667a.667.667 0 0 0 .666-.666v-2.667a.667.667 0 0 0-.666-.666zm-.667-3.333a3.337 3.337 0 0 1-3.333 3.334h-12a3.333 3.333 0 0 1 0-6.667H32a2 2 0 1 1 0 4h-6.667a.667.667 0 0 1 0-1.334H30v-1.333h-4.667a2 2 0 0 0 0 4H32A3.337 3.337 0 0 0 35.333 27a3.298 3.298 0 0 0-.684-2h.684a3.337 3.337 0 0 1 3.333 3.333zM33.333 17a2 2 0 1 1 0 4h-6.667a.667.667 0 0 1 0-1.333h4.667v-1.334h-4.667a2 2 0 0 0 0 4h6.667A3.337 3.337 0 0 0 36.666 19c0-.688-.216-1.358-.616-1.917a3.333 3.333 0 0 1-.717 6.584H26A3.333 3.333 0 0 1 26 17h7.333zM18 7.667c0-1.705 1.283-3.478 2-4.334.717.856 2 2.625 2 4.334a2 2 0 0 1-1.334 1.877v-1.21h-1.333v1.21A2 2 0 0 1 18 7.667zM8.667 21.119a6.02 6.02 0 0 1 2.63 4.404 7.349 7.349 0 0 0-2.624 1.785 7.379 7.379 0 0 0-2.637-1.775 6.02 6.02 0 0 1 2.63-4.414zm3.344 5.553a6.002 6.002 0 0 1 2.317-.328 6 6 0 0 1-5.99 7.978 6 6 0 0 1 3.673-7.65zm-9.344 1.661c-.001-.677.113-1.35.338-1.988a5.938 5.938 0 0 1 4.83 2.033 7.22 7.22 0 0 0-.954 5.684 6 6 0 0 1-4.214-5.729zM13.587 37H3.746l-.666-1.334h11.175L13.588 37zM20 37h-4.921l.666-1.334h1.588v-1.333H12.87a7.322 7.322 0 0 0 2.543-8.875.667.667 0 0 0-.533-.4 7.026 7.026 0 0 0-2.278.08A7.303 7.303 0 0 0 11.957 23H12v-8.761l16-2.462v3.89h-2a4.66 4.66 0 0 0-3.22 8.036 4.66 4.66 0 0 0-2.706 7.963h-.74a.667.667 0 0 0-.668.667V35c0 .368.299.666.667.666H20V37zm2.921 0h-1.588v-1.334h2.255L22.92 37zM28 37h-3.588l.666-1.334H28V37zm9.333 0h-1.588l-.667-1.334h2.255V37zm1.333-2.667H20V33h18.666v1.333z' />
            <path d='M14.666 15.667h-1.333V21h1.333v-5.333zM14.666 22.333h-1.333v1.334h1.333v-1.334z' />
        </g>
        <defs>
            <clipPath id='a'>
                <path fill='#fff' d='M0 0h40v40H0z' />
            </clipPath>
        </defs>
    </svg>
)

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
    AddActive,
    AddInActive,
    FavActive,
    FavInActive,
    Time,
    PinkLocationIcon,
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
    CoinInactive,
    CoinActive,
    CreditcardInactive,
    CreditcardActive,
    GroupInactive,
    GroupActive,
    HandicapInactive,
    HandicapActive,
    KidInactive,
    KidActive,
    ParkingInactive,
    ParkingActive,
    PetInactive,
    PetActive,
    PlugInactive,
    PlugActive,
    SmokingInactive,
    SmokingActive,
    WifiInactive,
    WifiActive,
    ArrowDown,
    ArrowUp,
    LandmarkCategory,
    Cafe,
    Park,
    StreetFood,
    Art,
    Museum,
    Bar,
    Hotel,
    Spa,
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
    Twitter,
    Facebook,
    Copy,
    Line,
    SettingButton,
    SummaryButton,
    ShareButton,
    NoResult,
}
