import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    categoryReducer,
    jobpostReducer,
    singlejobpostReducer,
    servicepostReducer,
    singleservicepostReducer,
    profileReducer,
    allUsersReducer,
    singleUsersReducer,
    } from './reducers/postReducers'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'


const persistConfig = {
    key : 'root',
    version : 1,
    storage
}

const reducers = combineReducers({
    listCategory : categoryReducer,
    jobList : jobpostReducer,
    viewJob : singlejobpostReducer,
    serviceList : servicepostReducer,
    viewService : singleservicepostReducer,
    userProfile : profileReducer,
    allUsers : allUsersReducer,
    singleUser : singleUsersReducer,

})


const persistedReducer = persistReducer(persistConfig, reducers)

const initialState = {}

const middleware = [thunk]

const store = configureStore({reducer: persistedReducer}, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store
