import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
// import { createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import * as serviceWorker from './ServiceWorker'
import reducer from './reducers'
import './assets/css/index.css'
import Routes from './router'

// create redux store
const store = createStore(reducer, applyMiddleware(logger))
// const store = createStore(reducer)

const client = new ApolloClient({
    uri: 'https://iwgu.herokuapp.com/graphql',
})

ReactDOM.render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </ApolloProvider>
    </Provider>,
    document.getElementById('root')
)

// working offline if you want to close serviceWorker you can change to "unregister()"
serviceWorker.register()
