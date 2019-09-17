import React from 'react'
import { hot } from 'react-hot-loader'
import { Route } from 'react-router-dom'
import { Home } from './../pages'

const Routes = () => (
    <div className="route-container">
        <Route path="/" component={Home} />
    </div>
)

export default hot(module)(Routes)