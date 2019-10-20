import Burger from '../assets/demo/burger.jpg'
import Coffee from '../assets/demo/coffee_cake.jpg'
import Salad from '../assets/demo/thai_salad.jpg'
import Sashimi from '../assets/demo/sashimi.jpg'
import Read from '../assets/demo/read.jpg'
import Lhong_Tou from '../assets/demo/lhong_tou.jpg'
import Museum from '../assets/demo/museum.jpg'
import img0 from '../assets/img/bangkok2.jpg'
import img1 from '../assets/img/bangkok3.jpg'
import img2 from '../assets/img/bangkok4.jpg'
import img3 from '../assets/img/yaowarach.jpg'

const Places = {
    res: [
        {
            src: Burger,
            name: 'Burger',
            rating: '',
        },
        {
            src: Coffee,
            name: 'Thai Salad',
        },
        {
            src: Salad,
            name: 'Coffee',
        },
        {
            src: Sashimi,
            name: 'Sashimi',
        },
        {
            src: Sashimi,
            name: 'Sashimi',
        },
        {
            src: Sashimi,
            name: 'Sashimi',
        },
    ],
    land: [
        {
            src: Read,
            name: 'Chut',
        },
        {
            src: Lhong_Tou,
            name: 'Earn',
        },
        {
            src: Museum,
            name: 'Eye',
        },
        {
            src: Salad,
            name: 'Pipe',
        },
    ],
}

// SearchPlaces.map(place=>{
// Object.keys(place).map(key=>place[key])}
// )

const SearchPlaces = [
    {
        placeID: '1',
        name: 'Kasetsart University',
        categoryCode: 'shop',
        thumbnail: Burger,
        map: {
            latitude: '',
            longitude: '',
        },
        rate: 5,
        time: '7.00 AM - 7.00 PM',
        location: {
            district: 'Laksi',
            province: 'Bangkok',
        },
    },
    {
        placeID: '2',
        name: 'Read Cafe',
        categoryCode: 'shop',
        thumbnail: Salad,
        map: {
            latitude: '',
            longitude: '',
        },
        rate: 4,
        time: '7.00 AM - 9.00 PM',
        location: {
            district: 'Laksi',
            province: 'Bangkok',
        },
    },
    {
        placeID: '3',
        name: 'Lhong Tou',
        categoryCode: 'shop',
        thumbnail: Burger,
        map: {
            latitude: '',
            longitude: '',
        },
        rate: 2,
        time: '7.00 AM - 7.00 PM',
        location: {
            district: 'Laksi',
            province: 'Bangkok',
        },
    },
    {
        placeID: '4',
        name: 'B',
        categoryCode: 'shop',
        thumbnail: Salad,
        map: {
            latitude: '',
            longitude: '',
        },
        rate: 1,
        time: '7.00 AM - 9.00 PM',
        location: {
            district: 'Laksi',
            province: 'Bangkok',
        },
    },
    {
        placeID: '5',
        name: 'Kasetsart University',
        categoryCode: 'shop',
        thumbnail: Burger,
        map: {
            latitude: '',
            longitude: '',
        },
        rate: 5,
        time: '7.00 AM - 7.00 PM',
        location: {
            district: 'Laksi',
            province: 'Bangkok',
        },
    },
]

export { Places, img0, img1, img2, img3, SearchPlaces }
