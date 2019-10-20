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

const Planners = [
    // {
    //     id: '1',
    //     name: 'plan1',
    //     days: [
    //         {
    //             date: new Date('2019-10-10'),
    //         },
    //         {
    //             date: new Date('2019-10-11'),
    //         },
    //         {
    //             date: new Date('2019-10-12'),
    //         },
    //     ],
    // },
    // {
    //     id: '2',
    //     name: 'plan2',
    //     days: [
    //         {
    //             date: new Date('2019-6-14'),
    //         },
    //     ],
    // }
]

export { Places, TopAttractions, Planners, Trip }
