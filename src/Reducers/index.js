import {combineReducers} from 'redux';
import {HomeReducer, ListUpdate} from './homeReducer';

const appReducer = combineReducers(
    {
        home: HomeReducer,
        listUpdate: ListUpdate
    }
);

export default appReducer;