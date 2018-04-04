import {INDEX} from '../Const/consts';
let defaultState = { data: [] };
let defaultList = { isListSingleRow: true };

export function HomeReducer(state= defaultState, action){
    switch(action.type){
        case  INDEX.NOWPLAYING:
            return {
                ...state,
                data: action.payload
            }
        case INDEX.ERROR:
            return {
                ...state,
                data: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export function ListUpdate(state = defaultList, action) {
    switch(action.type) {
        case INDEX.LISTVIEWUPDATE:
            return {
                ...state,
                isListSingleRow: !state.isListSingleRow
            }
        default:
            return {
                ...state
            }
    }
}