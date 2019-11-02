import React from 'react'
// import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom'
import {
    Home,
    Search,
    MyTrips,
    Detail,
    Planner,
    NotFoundPage,
    Auth,
    Favourites,
} from '../pages'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/search' component={Search} />
        <Route path='/mytrips' component={MyTrips} />
        <Route path='/detail' component={Detail} />
        <Route path='/planner' component={Planner} />
        <Route path='/auth' component={Auth} />
        <Route path='/:id/favourites' component={Favourites} />
        <Route path='/favourites' component={Favourites} />
        <Route component={NotFoundPage} />
    </Switch>
)

export default Routes
// export default hot(module)(Routes)
