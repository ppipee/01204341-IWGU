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

    tree: [
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
        {
            src: Museum,
            name: 'Pon',
        },
    ],

    sleep: [
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
        {
            src: Read,
            name: 'Pon',
        },
    ],
}

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

const TopAttractions = [
    {
        id: 0,
        image: img0,
        title: 'Bangkok, Thailand',
        subtitle: 'The Beautiful temple near Chao Phraya River',
    },
    {
        id: 1,
        image: img1,
        title: 'Bangkok, Thailand',
        subtitle: 'The Beautiful temple near Chao Phraya River',
    },
    {
        id: 2,
        image: img2,
        title: 'Bangkok, Thailand',
        subtitle: 'The Beautiful temple near Chao Phraya River',
    },
    {
        id: 3,
        image: img3,
        title: 'Bangkok, Thailand',
        subtitle: 'The Beautiful temple near Chao Phraya River',
    },
]
// const TimePlanner = [
//     new Date(2019,11,18),
//     new Date(2019,10,19),
//     new Date(2019,9,28),
//     new Date(2019,10,7),
//     new Date(2019,11,5),
//     new Date(2019,10,20),
//     new Date(2019,9,22),
// ]

const Trip = [
    {
        days: [
            {
                date: new Date(2019, 9, 20),
                places: [
                    {
                        time: {
                            start: new Date(2019, 9, 21, 2, 0, 0),
                            end: new Date(2019, 9, 22, 17, 0, 0),
                        },
                    },
                ],
            },
        ],
    },
    {
        days: [],
    },
]

const Images = [Burger, Coffee, Salad, Sashimi, Burger, Coffee, Salad, Sashimi]

const Planners = []
const Detail = {
    loading: false,
    placeDetail: {
        placeID: 'P03000014',
        name: 'Chino-Portugal Architecture Building',
        location: {
            address: '',
            district: 'Sathon',
            province: 'Bangkok',
            sub_district: 'Yan Nawa',
            postcode: '10120',
        },
        description:
            'Phuket is one of the oldestcities with a long history in Thailand. This old town used to be the important port of the west of Malay Peninsula where Chinese people from oversea came for settling business and where cassiterite can be found. Phuket used to be ruled by the western both Portugal and Holland. This is why Phuket becomes major growing community and becomes the meeting location for those two major cultures from two different countries.',
        map: {
            longitude: 100.528338,
            latitude: 13.72042,
        },
        category: [
            'Corporate Functions',
            'Fine Dining',
            'Pubs & Bar ',
            'Romance/First Dates',
        ],
        service: {
            payment: ['credit', 'cash'],
            facilities: null,
        },
        rate: 5,
        time: '09:00 - 18:00',
        contact: {
            mobiles: '02222222',
            urls: [
                'http://thai.tourismthailand.org/สถานที่ท่องเที่ยว/ตึกโบราณสถาปัตยกรรมแบบชิโน-โปรตุกีส--5456',
                'http://www.tourismthailand.org/Attraction/CHINO-PORTUGAL ARCHITECTURE BUILDING--5456',
            ],
            emails: 'pon@ponponponnn',
            phone: '09222222',
        },
    },
}

const id = 'P08000001'
const code = 'restaurant'

export { Places, TopAttractions, Planners, Detail, Images, Trip, SearchPlaces }
