import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {categoryReducer} from './reducers/postReducers'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducer } from '@reduxjs/toolkit'


const persistConfig = {
    key : 'root',
    version : 1,
    storage
}

const reducers = combineReducers({
    listCategory:categoryReducer
})


const persistedReducer = persistReducer(persistConfig, reducers)

const initialState = {}

const middleware = [thunk]

const store = configureStore({reducer: persistedReducer}, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store
