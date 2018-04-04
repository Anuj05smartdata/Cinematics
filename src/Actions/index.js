// const apiRoot="https://api.themoviedb.org/3/";
// const apiKey="86b2419a9c48b19190c3819e8be49d2c";
// export const NOWPLAYING = 'NOWPLAYING';
// export const ERROR = "ERROR";
// export const LISTVIEWUPDATE = "UPDATELISTVIEW";

import {API, INDEX} from '../Const/consts';

export function getData(lang, page, partialUrl, ContentType) {
    return dispatch => {
        fetch(
            API.rootUrl +
            partialUrl + 
            API.key + 
            "&language=" + 
            lang + 
            "&page=" + 
            page
        )
        .then(response => response.json())
        .then(responseJson => {
            data = responseJson.results;
            dispatch({type: ContentType, payload: data});       
        })
        .catch(function(error){
            console.warn('Error =>', error);
            dispatch({type: INDEX.ERROR, payload: error});
        })
    }    
}

export function updateListView(){
    return dispatch => {
        dispatch({ type: INDEX.LISTVIEWUPDATE })
    }
}
