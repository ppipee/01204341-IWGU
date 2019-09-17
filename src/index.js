import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware } from 'redux'
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import reducer from './reducers'
import './asset/css/index.css'
import App from './App'


// create redux store 
const store = createStore(reducer, applyMiddleware(logger))
// const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                {/* <IndexRoute component={Home} /> */}
                {/* <Route path='pages' component={Pages} /> */}
            </Route>
        </Router>
    </Provider>
    , document.getElementById('root')
)
// working offling if you want to close serviceWorker you can change to "unregister()"
serviceWorker.register()