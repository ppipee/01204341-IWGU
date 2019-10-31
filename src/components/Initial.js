import {
    LandmarkCategoryInActive,
    CafeInActive,
    ParkInActive,
    StreetFoodInActive,
    ArtInActive,
    MuseumInActive,
    BarInActive,
    HotelInActive,
    SpaInActive,
    LandmarkCategoryActive,
    CafeActive,
    ParkActive,
    StreetFoodActive,
    ArtActive,
    MuseumActive,
    BarActive,
    HotelActive,
    SpaActive,
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
        icon_inactive: LandmarkCategoryInActive,
        icon_active: LandmarkCategoryActive,
        title: 'Landmark',
    },
    {
        icon_inactive: CafeInActive,
        icon_active: CafeActive,
        title: 'Café',
    },
    {
        icon_inactive: ParkInActive,
        icon_active: ParkActive,
        title: 'Park',
    },
    {
        icon_inactive: StreetFoodInActive,
        icon_active: StreetFoodActive,
        title: 'Street Food',
    },
    {
        icon_inactive: ArtInActive,
        icon_active: ArtActive,
        title: 'Arts',
    },
    {
        icon_inactive: MuseumInActive,
        icon_active: MuseumActive,
        title: 'Museum',
    },
    {
        icon_inactive: BarInActive,
        icon_active: BarActive,
        title: 'Bar',
    },
    {
        icon_inactive: HotelInActive,
        icon_active: HotelActive,
        title: 'Hotel',
    },
    {
        icon_inactive: SpaInActive,
        icon_active: SpaActive,
        title: 'Spa',
    },
    {
        icon_inactive: SpaInActive,
        icon_active: SpaActive,
        title: 'Spā',
    },
]

export { DefaultFilter, PhotoCategory }
