import React from 'react'
import { combineReducers } from 'redux'
import historyReducer from './historyReducer'
import questionReducer from './questionReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    user: userReducer,
    question: questionReducer,
    history: historyReducer
})

export default rootReducer
