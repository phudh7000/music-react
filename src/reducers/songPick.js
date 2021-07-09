import * as types from '../constant'
import {currentList} from './songList'
import a from './songs/Camila Cabello Havana Lyrics ft Young Thug.mp3'
var initialStore = {
    name: 'Hanava',
    singer: 'Camila Cabello, Young Thug',
    path: a,
    image: 'https://upload.wikimedia.org/wikipedia/vi/9/98/Havana_%28featuring_Young_Thug%29_%28Official_Single_Cover%29_by_Camila_Cabello.png'
}


var myReducers = (state = initialStore, action) => {
    var list = currentList;
    var i = 0;
    var index;
    switch (action.type) {
        case types.SONG_PICK:
            var {name, singer, path, image} = action.song;
            return {name, singer, path, image};
        case types.NEXT_SONG:
            i = 0;
            list.forEach((element,index )=> {
                if(element.path === action.song.path){
                    i=index+1;
                }
            });
            index = i%list.length;
            return list[index]
        case types.PREVIOUS_SONG:
            i = 0;
            list.forEach((element,index )=> {
                if(element.path === action.song.path){
                    i=index;
                }
            });
            index = i-1;
            // index ===-1 ?index=list.length-1:index=index;
            index= index ===-1 ?list.length-1:index;
            return list[index]
        case types.RANDOM_SONG:
            i=0;
            list.forEach((item,index) =>{
                if(item.path === action.song.path){
                    i = index;
                }
            })
            while(1){
                index = Math.round(Math.random()*(list.length-1));
                if(index !== i){
                    return list[index];
                }
            }

        default:
            return state;
    }
}

export default myReducers;