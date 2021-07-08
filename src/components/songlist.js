import { Component } from "react";
import {connect} from 'react-redux'
import * as actions from '../actions/actionTypes'


class SongList extends Component {

    componentDidMount(){
    const $ = document.querySelector.bind(document);
    const img = $('.img')
    const list = $('.list');
    const header = $('.header');
    const wrapper = $('.wrapper');
    list.style.height = wrapper.clientHeight - header.clientHeight + 'px';
    let imgWidth = img.clientWidth;
    list.onscroll = function (e) {
      // console.log(e.target.scrollTop);
      let scrollTop = e.target.scrollTop;
      let width = imgWidth - scrollTop * 4;
        // console.log(e.target)
    //   let width = 0;
      if (width <= 0) {
        img.style.width = 0;
      } else {
        img.style.width = width + 'px';
      }
      let listHeight = wrapper.clientHeight - header.clientHeight;
      list.style.height = listHeight + 'px';
    }
  }
    
    playing = (song)=>{
        this.props.playing(song);
    }
    render() {
        let renderSong = this.props.songs.map((item, index) => {
            return (
                <li key ={index}>
                    <div className={item.path === this.props.songPlaying.path?"song-item active":"song-item"} onClick = {()=>this.playing(item)}>
                        <div className="song-img">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="song-info">
                            <p className="song-name">{item.name}</p>
                            <p className="song-singer">{item.singer}</p>
                        </div>
                        <button className="btn btn-add"><i className="fas fa-ellipsis-h"></i></button>
                    </div>
                </li>)
        })
        return (
            <div className="song-list">
                <ul className="list">
                    {renderSong}
                </ul>
            </div>
        )
    }
}

var mapStateToProps = (state)=>{
    return {
        songs: state.songs,
        songPlaying: state.songPlaying
    }
}

var mapDispatchToProps = (dispatch, props)=>{
    return{
        playing: (song)=>{
            dispatch(actions.songPick(song));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SongList);