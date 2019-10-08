import React, { Component } from 'react'
import { SearchIcon } from './Icon'
import '../assets/scss/category.scss'

class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className='category'>
                <img src={SearchIcon} alt='search-icon' />
            </div>
        )
    }
}
export default Category
