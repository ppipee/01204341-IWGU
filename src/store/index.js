import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
// import { createStore, applyMiddleware } from 'redux'
// import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import rootReducer from '../reducers'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['newtrip', 'planner'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    const store = createStore(persistedReducer)
    // const store = createStore(persistedReducer, applyMiddleware(logger))
    const persistor = persistStore(store)
    return { store, persistor }
}
