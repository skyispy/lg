import {createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import root from '../reducer';

export const store = createStore(root, applyMiddleware(thunk));