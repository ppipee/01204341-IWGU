import React from 'react'
import {
    LandmarkCategory,
    Cafe,
    Park,
    StreetFood,
    Art,
    Museum,
    Spa,
    Bar,
    Hotel,
} from './Icon'

const DefaultFilter = {
    tags: [],
    sortby: {
        nearby: true,
        rating: false,
        price: false,
    },
    time: [6, 29],
    rating: {
        star1: false,
        star2: false,
        star3: false,
        star4: false,
        star5: false,
    },
}

const PhotoCategory = [
    {
        icon_inactive: <LandmarkCategory fill='#565656' />,
        icon_active: <LandmarkCategory fill='#fff' />,
        title: 'Landmark',
    },
    {
        icon_inactive: <Cafe fill='#565656' />,
        icon_active: <Cafe fill='#fff' />,
        title: 'Café',
    },
    {
        icon_inactive: <Park fill='#565656' />,
        icon_active: <Park fill='#fff' />,
        title: 'Park',
    },
    {
        icon_inactive: <StreetFood fill='#565656' />,
        icon_active: <StreetFood fill='#fff' />,
        title: 'Street Food',
    },
    {
        icon_inactive: <Art fill='#565656' />,
        icon_active: <Art fill='#fff' />,
        title: 'Arts',
    },
    {
        icon_inactive: <Museum fill='#565656' />,
        icon_active: <Museum fill='#fff' />,
        title: 'Museum',
    },
    {
        icon_inactive: <Bar fill='#565656' />,
        icon_active: <Bar fill='#fff' />,
        title: 'Bar',
    },
    {
        icon_inactive: <Hotel fill='#565656' />,
        icon_active: <Hotel fill='#fff' />,
        title: 'Hotel',
    },
    {
        icon_inactive: <Spa fill='#565656' />,
        icon_active: <Spa fill='#fff' />,
        title: 'Spa',
    },
]

export { DefaultFilter, PhotoCategory }
