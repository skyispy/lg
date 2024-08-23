import inputReducer from './inputReducer'
import userReducer from './userReducer';
import { combineReducers } from 'redux';

const root = combineReducers({
    userReducer, inputReducer
})

export default root