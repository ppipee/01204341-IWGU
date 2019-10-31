import { AddActive, AddInActive, FavActive, FavInActive } from './Icon'

const SearchResultTab = [
    {
        name: 'add',
        icon_active: AddActive,
        icon_inactive: AddInActive,
    },
    {
        name: 'fav',
        icon_active: FavActive,
        icon_inactive: FavInActive,
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
