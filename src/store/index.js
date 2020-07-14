import { combineReducers, createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import categories from './categories.js';
import cart from './cart.js';

import thunk from 'redux-thunk';


let reducers = combineReducers({ categories, cart });

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();