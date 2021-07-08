import * as types from '../constant/index'
export const songPick = (song)=>{
    return{
        type: types.SONG_PICK,
        song
    }
}

export const nextSong =(song)=>{
    return{
        type: types.NEXT_SONG,
        song
    }
}

export const previousSong = song =>{
    return{
        type: types.PREVIOUS_SONG,
        song
    }
}

export const randomSong = (song)=>{
    return {
        type: types.RANDOM_SONG,
        song
    }
}

export const changeKindOf = (kindOf)=>{
    return{
        type: types.CHANGE_KIND_OF,
        kindOf
    }
}