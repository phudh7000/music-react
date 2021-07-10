import { Component } from "react";
import { connect } from 'react-redux'
import * as actions from '../actions/actionTypes'

class SongPlaying extends Component {

    play=null;

    componentDidMount(){
    var $ = document.querySelector.bind(document);
    var btnRedo = $('.btn-redo');
    btnRedo.classList.add('active');
}

componentDidUpdate() {
    var $ = document.querySelector.bind(document);
    var audio = $('.audio');
    var timeDuration = $('.time-duration');

    audio.play();

    var btnToggle = $('.btn-toggle-play')
    btnToggle.innerHTML = '<i class="fas fa-pause"></i>';
    audio.onloadeddata = ()=> {
        let duration = audio.duration;
        timeDuration.textContent = this.convertTime(duration);
    }

    this.run();
}

convertTime(time){
    let min = parseInt(time / 60);
    min = min<10? `0${min}`:`${min}`;
    let seconds = parseInt(time % 60);
    seconds = seconds<10? `0${seconds}`:`${seconds}`;
    return `${min}:${seconds}`;
}

run() {
    var $ = document.querySelector.bind(document);
    var audio = $('.audio');
    var range = $('.range');
    var timePresent = $('.time-present');
    var btnRedo = $('.btn-redo');
    var btnRandom = $('.btn-random');

    clearInterval(this.play);
    this.play = setInterval(() => {
        let percent = audio.currentTime / audio.duration * 100;
        range.style.width = percent + '%';
        let currentTime = audio.currentTime;
        timePresent.textContent = this.convertTime(currentTime);


        if (percent === 100 && (btnRedo.classList.contains('active') || btnRandom.classList.contains('active'))) {


            $('.btn-toggle-play').innerHTML = '<i class="fas fa-play"></i>';


            if (btnRedo.classList.contains('active')) {
                clearInterval(this.play);
                setTimeout(() => {
                    this.nextSong();
                    // console.log(this.props.songPlaying)
                }, 1000)
            } else if (btnRandom.classList.contains('active')) {
                // let index = this.currentIndex + parseInt(Math.random() * (this.songs.length - 1));
                clearInterval(this.play);
                setTimeout(() => {
                    this.randomSong();
                }, 1000)
            }
        }

    }, 100)

}

changeSong = (e) => {
    var $ = document.querySelector.bind(document);
    var audio = $('.audio');
    let btnRedo = $('.btn-redo');
    let btnRandom = $('.btn-random');

    // console.log(e.target.parentElement.classList.contains('btn-random'))
    // console.log(e.target)

    var element = e.target.parentElement;
    if (element.classList.contains('btn-redo')) {
        btnRedo.classList.toggle('active');
        if (btnRandom.classList.contains('active')) {
            btnRandom.classList.remove('active');
        }

    }
    else {
        btnRandom.classList.toggle('active');
        if (btnRedo.classList.contains('active')) {
            btnRedo.classList.remove('active');
        }
    }

    if (btnRandom.classList.contains('active') || btnRedo.classList.contains('active')) {
        audio.loop = false;
    }
    else {
        audio.loop = true;
    }
}


range = (e) => {
    var $ = document.querySelector.bind(document);
    var audio = $('.audio');
    var controlBars = $('.control-bars');
    var range = $('.range');
    let rangeX = e.nativeEvent.offsetX;
    let rangeWidth = controlBars.clientWidth;
    let duration = audio.duration;
    let percent = rangeX / rangeWidth;
    audio.currentTime = (percent * duration);
    range.style.width = percent * 100 + '%';
}

togglePlay = () => {

    // const audio = $('.audio')
    // const timeDuration = this.$('.time-duration');

    var $ = document.querySelector.bind(document);
    var audio = $('.audio');
    var timeDuration = $('.time-duration');
    var btnToggle = $('.btn-toggle-play')
    let duration = audio.duration;
    let time = parseInt(duration / 60) + ':' + parseInt(duration % 60);
    timeDuration.textContent = time;

    if (audio.paused) {
        audio.play();
        // run();
        this.run();
        btnToggle.innerHTML = '<i class="fas fa-pause"></i>';

    } else {

        clearInterval(this.play);
        audio.pause();
        btnToggle.innerHTML = '<i class="fas fa-play"></i>';

    }
}

nextSong = () => {
    var $ = document.querySelector.bind(document);
    var btnRandom = $('.btn-random');
    if (btnRandom.classList.contains('active')) {
        this.randomSong();
        return;
    }
    this.props.nextSong(this.props.songPlaying);
}
previousSong = () => {
    this.props.previousSong(this.props.songPlaying);
}

randomSong = () => {
    this.props.randomSong(this.props.songPlaying);
}
render() {



    return (
        <div className="header">
            <div className="title">
                <h2 className="name">{this.props.songPlaying.name}</h2>
                <p className="singer">{this.props.songPlaying.singer}</p>
            </div>
            <audio src={this.props.songPlaying.path} className="audio"></audio>
            <div className="music-playing">
                <div className="img">
                    <img src={this.props.songPlaying.image}
                        alt="" />

                </div>
                <div className="control">
                    <div className="control-btn">
                        <button className="btn btn-redo" onClick={this.changeSong}>
                            <i className="fas fa-redo"></i>
                        </button>
                        <button className="btn btn-backward" onClick={this.previousSong}>
                            <i className="fas fa-step-backward"></i>
                        </button>
                        <button className="btn btn-toggle-play" onClick={this.togglePlay}>
                            <i className="fas fa-play"></i>
                        </button>
                        <button className="btn btn-forward" onClick={this.nextSong}>
                            <i className="fas fa-step-forward"></i>
                        </button>
                        <button className="btn btn-random" onClick={this.changeSong}>
                            <i className="fas fa-random"></i>
                        </button>
                    </div>
                    <div className="bars-timing">
                        <span className="time time-present">00:00</span>
                        <div className="control-bars" onClick={this.range}>
                            <div className="range"></div>
                        </div>
                        <span className="time time-duration">00:00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

var mapStateToProps = (state) => {
    return {
        songPlaying: state.songPlaying
    }
}

var mapDispatchToProps = (dispatch, props) => {
    return {
        nextSong: (song) => {
            dispatch(actions.nextSong(song))
        },
        previousSong: (song) => {
            dispatch(actions.previousSong(song))
        },
        randomSong: (song) => {
            dispatch(actions.randomSong(song))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongPlaying);