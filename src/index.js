import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import * as serviceWorker from './ServiceWorker'
import './assets/css/index.css'
import Routes from './router'
import configureStore from './store'
import App from './components/App'

// const store = createStore(reducer, applyMiddleware(logger))
const { store, persistor } = configureStore()

const client = new ApolloClient({
    uri: 'https://iwgu.herokuapp.com/graphql',
})

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ApolloProvider client={client}>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </ApolloProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)

// working offline if you want to close serviceWorker you can change to "unregister()"
serviceWorker.register()
