import React, { Component } from 'react'
import './../asset/scss/serchbar.scss'
import SerchIcon from '../asset/icon/search-icon.svg'

const tags = ['coffee shop', 'street food', 'folk villages', 'landmark', 'souvenir shop', 'park']
class SerchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            serch_word: "",
            show: false,
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef = node => {
        this.wrapperRef = node;
    }

    handleClickOutside = event => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ show: false })
        }
    }

    showSerch = () => {
        let show = false
        if (this.state.serch_word.length !== 0)
            show = true
        this.setState({ show: show })
    }

    handleChange = event => {
        let word = event.target.value
        // console.log(word)
        let show = word.length !== 0 ? true : false
        // console.log(show)
        this.setState({
            serch_word: word
            , show
        })
    }

    genTag = () => tags.map((tag, i) => <div className="tag" key={`tag ${i}`}>{tag}</div>)

    render() {
        return (
            <div className='serch'>
                <div className='input'>
                    <img src={SerchIcon} />
                    <input placeholder='Search' onChange={this.handleChange} onClick={this.showSerch} value={this.state.serch_word} />
                </div>
                {this.state.show &&
                    <div className='serch-box' ref={this.setWrapperRef}>
                        <div className='serch-area'>
                            <div className='serch-category'>
                                <span>Popular category</span>
                                <div className='serch-tag'>{this.genTag()}</div>
                            </div>
                            <div className='serch-history'>Serch History</div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
export default SerchBar
