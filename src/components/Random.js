import faker from 'faker'

const Reviews = [...Array(2 + faker.random.number(20)).keys()].map(index => {
    return {
        id: index,
        author: faker.name.firstName(),
        rate: 2 + faker.random.number(3),
        timestamp: faker.date.past(),
        review: faker.lorem.sentence(),
    }
})
const PriceLevel = 1 + faker.random.number(4)
const Info = faker.lorem.paragraph()
const Rate = () => 2 + faker.random.number(3)

const time = [
    '09:00 - 22:00',
    '06:00 - 18:00',
    '10:00 - 23:00',
    '08:00 - 16:00',
]
const Time = time[faker.random.number(3)]

const Days = () => {
    const days = {
        day1: true,
        day2: true,
        day3: true,
        day4: true,
        day5: true,
        day6: true,
        day7: false,
    }
    const blank = {}
    Object.keys(days).forEach(day => {
        blank[day] = faker.random.boolean()
    })
    return blank
}

export { Reviews, PriceLevel, Info, Rate, Days, Time }
