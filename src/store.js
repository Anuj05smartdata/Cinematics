import { createStore, applyMiddleware } from 'redux';
import appReducer from './Reducers/'
import thunk from 'redux-thunk';

let store = createStore(appReducer,
    applyMiddleware(thunk));

export default store;