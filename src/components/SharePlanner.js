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
    }

    sharePlanner() {
        let modal = ''
        const url = window.location
        const encodeURL = encodeURIComponent(url)
        const desc = encodeURIComponent("Let' see my trip planner")
        const provider = encodeURIComponent('IWGU')
        const twitter = `https://twitter.com/intent/tweet?text=${desc}&url=${encodeURL}&via=${provider}`
        const line = `https://social-plugins.line.me/lineit/share?url=${encodeURL}`
        const facebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURL}`
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
                        <a href={facebook} rel='noopener'>
                            <img alt='facebook' src={Facebook} />
                        </a>
                        <a href={twitter} rel='noopener'>
                            <img alt='twitter' src={Twitter} />
                        </a>
                        <a href={line} rel='noopener'>
                            <img alt='line' src={Line} />
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <>
                <img
                    onClick={this.openModal}
                    src={ShareButton}
                    alt='share-button'
                />
                {this.sharePlanner()}
            </>
        )
    }
}

export default SharePlanner
