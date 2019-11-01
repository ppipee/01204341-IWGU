import React, { Component } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import {
    ShareButton,
    PaperAirplane,
    Close,
    Facebook,
    Line,
    Twitter,
    Copy,
} from './Icon'
import '../assets/scss/shareplanner.scss'

class SharePlanner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open_modal: false,
        }
    }

    openModal = () => {
        this.setState({ open_modal: !this.state.open_modal })
        console.log(this.state.openModal)
    }

    sharePlanner() {
        let modal = ''
        const url = window.location
        const desc = "Let' see my trip planner"
        const twitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            desc
        )}&url=${encodeURIComponent(url.href)}&via=${encodeURIComponent(
            'IWGU'
        )}`
        const line = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
            url.href
        )}`
        if (this.state.open_modal) {
            modal = ' active'
        }
        return (
            <div className={`share-planner ${modal}`}>
                <div className='share-modal'>
                    <div>
                        <img alt='paper-plane' src={PaperAirplane} />
                        <p>Share your trip</p>
                        <div onClick={this.openModal}>
                            <Close color='#d0d0d0' />
                        </div>
                    </div>
                    <div className='url-container'>
                        <textarea readOnly value={url} />
                        <CopyToClipboard text={url}>
                            <div className='copy'>
                                <img alt='copy' src={Copy} />
                            </div>
                        </CopyToClipboard>
                    </div>
                    <div className='via'>
                        <a href='www.google.com'>
                            <img alt='facebook' src={Facebook} />
                        </a>
                        <a href={twitter}>
                            <img alt='twitter' src={Twitter} />
                        </a>
                        <a href={line}>
                            <img alt='line' src={Line} />
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <span>
                <img
                    onClick={this.openModal}
                    src={ShareButton}
                    alt='share-button'
                />
                {this.sharePlanner()}
            </span>
        )
    }
}

export default SharePlanner
