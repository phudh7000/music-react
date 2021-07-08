import {createStore, combineReducers } from "redux";
import songPlaying from './songPick'
import songs from './songList';
import types from './kindOfMusic'
var myReducers = combineReducers({
    songPlaying,
    songs,
    types
})


var store = createStore(myReducers)

export default store;