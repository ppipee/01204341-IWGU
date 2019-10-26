import React, { Component } from 'react'
import faker from 'faker'
import { RateStar, CircleArrow, Star, BlankStar, DoubleQuotes } from './Icon'
import '../assets/scss/review.scss'

const reviews = [
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
        timestamp: '2019-05-10',
        review: faker.lorem.sentence(),
    },
    {
        id: 3,
        author: 'chut',
        rate: 3,
        timestamp: '2019-05-10',
        review: faker.lorem.sentence(),
    },
    {
        id: 4,
        author: 'earn',
        rate: 2,
        timestamp: '2019-05-10',
        review: faker.lorem.sentence(),
    },
]
const text = faker.lorem.sentence()
class Review extends Component {
    constructor() {
        super()
        this.state = {
            show: false,
        }
    }

    showHandle = () => {
        this.setState({
            show: !this.state.show,
        })
    }

    genRate = () => (
        <div className='rate'>
            <div className={`rate-${(this.props.rate * 100) / 5}`}>
                <span>{this.props.rate}</span>
                <img src={RateStar} alt='rate-icon' />
            </div>
        </div>
    )

    genStar = rate =>
        [...Array(5).keys()].map(star => (
            <img
                key={`rate-${star} `}
                src={star < rate ? Star : BlankStar}
                alt='rate-star'
            />
        ))

    genReview = () => {
        if (this.state.show) {
            const box_review = reviews.map(item => {
                const date = new Date(item.timestamp)
                    .toString()
                    .split(' ')
                    .splice(1, 3)
                return (
                    <div className='review' key={item.id}>
                        <div className='sub-review'>{item.review}</div>
                        <div className='sub-detail'>
                            <div className='sub-rate'>
                                {this.genStar(item.rate)}
                            </div>
                            <span>{item.author}</span>
                            <span>{`${date[1]} ${date[0]} ${date[2].substring(
                                0,
                                2
                            )}`}</span>
                        </div>
                    </div>
                )
            })
            return (
                <div className='sub-section-reviews'>
                    <div className='show-control' onClick={this.showHandle}>
                        <span>less reivews</span>
                        <img src={CircleArrow} alt='up-circle-arrow' />
                    </div>
                    <div className='other-reviews show'>{box_review}</div>
                </div>
            )
        }
        return (
            <div className='sub-section-reviews'>
                <div className='show-control down' onClick={this.showHandle}>
                    <span>more reivews</span>
                    <img src={CircleArrow} alt='down-circle-arrow' />
                </div>
                <div className='other-reviews' />
            </div>
        )
    }

    render() {
        return (
            <div className='review-section'>
                <div>
                    {this.genRate()}
                    <div className='best-review'>
                        <img
                            className='double-quotes left'
                            src={DoubleQuotes}
                            alt='double-quotes'
                        />
                        {text}
                        <img
                            className='double-quotes right'
                            src={DoubleQuotes}
                            alt='double-quotes'
                        />
                    </div>
                </div>
                {this.genReview()}
            </div>
        )
    }
}
export default Review
