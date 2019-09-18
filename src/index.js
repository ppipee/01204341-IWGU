import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import reducer from './reducers'
import './assets/css/index.css'
import Routes from './router'

// create redux store 
const store = createStore(reducer, applyMiddleware(logger))
// const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
)

// working offling if you want to close serviceWorker you can change to "unregister()"
serviceWorker.register()