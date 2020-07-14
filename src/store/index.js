import { combineReducers, createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import categories from './categories.js';
// import actions from './actions.js';

// import thunk from './middleware/thunk';
import thunk from 'redux-thunk';


let reducers = combineReducers({ categories });

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();