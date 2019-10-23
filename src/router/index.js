import React from 'react'
// import { hot } from 'react-hot-loader'
import { Route } from 'react-router-dom'
import { Home, Search, MyTrips, Detail } from '../pages'

const Routes = () => (
    <div className='route-container'>
        <Route exact path='/' component={Home} />
        <Route path='/search' component={Search} />
        <Route path='/mytrips' component={MyTrips} />
        <Route path='/detail' component={Detail} />
    </div>
)

export default Routes
// export default hot(module)(Routes)
