import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware } from 'redux'
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import reducer from './reducers'
import './asset/css/index.css'
import App from './App'

// create redux store 
const store = createStore(reducer, applyMiddleware(logger))
// const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root')
)

// working offling if you want to close serviceWorker you can change to "unregister()"
serviceWorker.register()