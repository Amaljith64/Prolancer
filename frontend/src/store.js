import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {categoryReducer} from './reducers/postReducers'

const reducers = combineReducers({
    listCategory:categoryReducer
})

const initialState = {}

const middleware = [thunk]

const store = configureStore({reducer: reducers}, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store
