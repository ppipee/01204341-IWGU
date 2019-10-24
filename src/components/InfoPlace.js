import React, { Component } from 'react'
import '../assets/scss/infoplace.scss'
import { Dollar, DownArrow } from './Icon'
import OpeningHour from './OpeningHour'
import Review from './Review'

const Desc = {
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque volutpat morbi interdum maurisssssssssssssdasds Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}

const ShowMore = {
    text: 'Show more',
    icon: DownArrow,
    style: 'show-more',
}

const ShowLess = {
    text: 'Show less',
    icon: DownArrow,
    style: 'show-less',
}

class InfoPlace extends Component {
    constructor() {
        super()
        this.state = {
            showMore: false,
            fullDesc: Desc.description,
        }
    }

    toggleShowMore = () => {
        this.setState({
            showMore: !this.state.showMore,
        })
    }

    showSomeText = () => {
        const remainingDescArray = []
        const someDescArray = this.state.fullDesc.split('')
        while (someDescArray.length > 120) {
            remainingDescArray.unshift(someDescArray.pop())
        }
        const someDesc = someDescArray.join('')
        const remainingDesc = remainingDescArray.join('')

        if (!this.state.showMore) {
            return (
                <>
                    {someDesc}
                    <span className='show-remaining--hide'>
                        {remainingDesc}
                    </span>
                </>
            )
        }
        return (
            <>
                {someDesc}
                <span className='show-remaining'>{remainingDesc}</span>
            </>
        )
    }

    genButton() {
        const buttonText = this.state.showMore ? ShowLess : ShowMore
        return (
            <div onClick={this.toggleShowMore} className={buttonText.style}>
                {buttonText.text}
                <img src={buttonText.icon} alt={buttonText.style} />
            </div>
        )
    }

    genPrice() {
        const priceLevel = 4
        const price = []
        for (let i = 0; i < priceLevel; i++) {
            price.push(<img src={Dollar} key={i} alt='dollar' />)
        }
        return price
    }

    render() {
        const { someDesc, fullDesc } = this.state
        return (
            <div className='info-place'>
                <div className='info-border'>
                    <p className='title'>Place Title</p>
                    <div className='description'>
                        <div className='subtitle'>
                            <p>Café</p>
                            <div className='dot' />
                            <div className='price'>{this.genPrice()}</div>
                        </div>
                        <div className='details'>
                            {this.showSomeText()}
                            {this.genButton()}
                        </div>
                        <div className='category-tags' />
                    </div>
                    <hr />
                    <OpeningHour />
                    <Review />
                </div>
            </div>
        )
    }
}
export default InfoPlace
