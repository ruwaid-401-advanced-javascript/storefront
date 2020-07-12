import { combineReducers, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import categories from './categories.js';
let reducers = combineReducers({ categories });

const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();