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

export { Reviews, PriceLevel, Info, Rate }
