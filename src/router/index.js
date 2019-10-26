import React from 'react'
// import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom'
import { Home, Search, MyTrips, Detail, Planners, NotFoundPage } from '../pages'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/search' component={Search} />
        <Route path='/mytrips' component={MyTrips} />
        <Route path='/detail' component={Detail} />
        <Route path='/planners' component={Planners} />
        <Route component={NotFoundPage} />
    </Switch>
)

export default Routes
// export default hot(module)(Routes)
