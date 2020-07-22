import { combineReducers, createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import categories from './categoriesReducer.js';
import products from './productsReducer';
import cart from './cartReducer.js';



let reducers = combineReducers({ categories, products, cart });

const store = () => createStore(reducers, applyMiddleware(thunk));

export default store();