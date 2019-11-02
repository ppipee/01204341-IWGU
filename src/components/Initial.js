import React from 'react'
import { Add, Fav } from './Icon'

const SearchResultTab = [
    {
        name: 'add',
        icon_active: <Add stroke='#fff' />,
        icon_inactive: <Add stroke='#B0B0B0' />,
    },
    {
        name: 'fav',
        icon_active: <Fav fill='#fff' />,
        icon_inactive: <Fav fill='#B0B0B0' />,
    },
]

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

export { DefaultFilter, SearchResultTab }
