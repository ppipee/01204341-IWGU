import React, { Component } from 'react'
import '../assets/scss/infoplace.scss'
import { Dollar, DownArrow, UpArrow } from './Icon'
import OpeningHour from './OpeningHour'
import Review from './Review'

const ShowMore = {
    text: 'more',
    icon: DownArrow,
}

const ShowLess = {
    text: 'less',
    icon: UpArrow,
}

class InfoPlace extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showMore: false,
        }
    }

    toggleShowMore = () => {
        this.setState({
            showMore: !this.state.showMore,
        })
    }

    showSomeText = fullDesc => {
        const someDescArray = fullDesc.split('')
        const remainingDescArray = []
        let isShow = ''
        const maxLength = (window.innerWidth * 120) / 375
        while (someDescArray.length > maxLength) {
            remainingDescArray.unshift(someDescArray.pop())
        }
        const someDesc = someDescArray.join('')
        const remainingDesc = remainingDescArray.join('')

        if (!this.state.showMore) {
            isShow = 'hide'
        }
        return (
            <span>
                {someDesc}
                <div className={`remaining ${isShow}`}>{remainingDesc}</div>
            </span>
        )
    }

    genTag = tags =>
        tags.map(tag => (
            <div className='tag' key={tag}>
                {tag}
            </div>
        ))

    genPrice() {
        const priceLevel = 4
        const price = []
        for (let i = 0; i < priceLevel; i++) {
            price.push(<img src={Dollar} key={i} alt='dollar' />)
        }
        return price
    }

    genButton() {
        const buttonText = this.state.showMore ? ShowLess : ShowMore
        return (
            <div
                onClick={this.toggleShowMore}
                className={`show-${buttonText.text}`}
            >
                Show {buttonText.text}
                <img src={buttonText.icon} alt={buttonText.text} />
            </div>
        )
    }

    render() {
        const { name, category, description } = this.props.info
        return (
            <div className='info-place'>
                <div className='info-border'>
                    <p className='title'>{name}</p>
                    <div className='description'>
                        <div className='subtitle'>
                            <p>{category[0]}</p>
                            <div className='dot' />
                            <div className='price'>{this.genPrice()}</div>
                        </div>
                        <div className='details'>
                            {this.showSomeText(description)}
                            {this.genButton()}
                        </div>
                        <div className='category-tags' />
                        <div className='search-tag'>
                            {this.genTag(category)}
                        </div>
                    </div>
                    <hr />
                    <OpeningHour />
                    <Review rate={this.props.info.rate} />
                </div>
            </div>
        )
    }
}

export default InfoPlace
