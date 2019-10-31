import faker from 'faker'
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

const Trip = [
    {
        days: [
            {
                date: new Date(2019, 9, 25),
                places: [
                    {
                        time: {
                            start: new Date(2019, 9, 29, 0, 0, 0),
                            end: new Date(2019, 9, 26, 17, 0, 0),
                        },
                    },
                ],
            },
        ],
    },
    {
        days: [
            {
                date: new Date(2019, 10, 24),
                places: [
                    {
                        time: {
                            start: new Date(2019, 10, 5, 14, 4, 0),
                            end: new Date(2019, 9, 25, 13, 0, 0),
                        },
                    },
                ],
            },
        ],
    },
    {
        days: [
            {
                date: new Date(2019, 9, 24),
                places: [
                    {
                        time: {
                            start: new Date(2019, 9, 25, 18, 0, 0),
                            end: new Date(2019, 9, 25, 13, 0, 0),
                        },
                    },
                ],
            },
        ],
    },
]

const Images = [Burger, Coffee, Salad, Sashimi, Burger, Coffee, Salad, Sashimi]

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
            facebook: '',
            instagram: '',
        },
    },
}

const Routes = {
    bus: ['25', '77', '204', '505', '511'],
    train: [
        {
            name: 'bts',
            station: 'Chitlom',
        },
        {
            name: 'mrt',
            station: 'Samyan',
        },
    ],
    ferry: ['Pratu Nam'],
}

const id = 'P08000001'
const code = 'restaurant'

const Reviews = [
    {
        id: 0,
        author: 'pon',
        rate: 3,
        timestamp: '2019-10-18',
        review: faker.lorem.sentence(),
    },
    {
        id: 1,
        author: 'asmb',
        rate: 4,
        timestamp: '2019-10-20',
        review: faker.lorem.sentence(),
    },
    {
        id: 2,
        author: 'pipe',
        rate: 5,
        timestamp: '2019-10-21',
        review: faker.lorem.sentence(),
    },
    {
        id: 3,
        author: 'chut',
        rate: 3,
        timestamp: '2019-11-08',
        review: faker.lorem.sentence(),
    },
    {
        id: 4,
        author: 'earn',
        rate: 2,
        timestamp: '2019-11-30',
        review: faker.lorem.sentence(),
    },
]

export { Places, TopAttractions, Detail, Images, Trip, Reviews, Routes }
