import { Component } from "react";
import SongPlaying from "./components/songPlaying";
import SongList from "./components/songlist";
import KindOfMusic from "./components/kindOfMusic";
import ButtonControl from "./components/buttonControl"
import './App.css'
import { Provider } from 'react-redux'
import {isMobile} from 'react-device-detect'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import store from './reducers'


class App extends Component {

    renderView(){
        // if(isMobile)return(
        //     <Provider store={store}>
                
        //             <div className="wrapper" style={{ width: "400px", overflowX: "scroll" }}>
        //                 <div className="slider">
        //                     <div className="side-left">
        //                         <SongPlaying />
        //                         <SongList />
        //                     </div>

        //                     <div className="side-right">
        //                         <KindOfMusic />
        //                     </div>
        //                 </div>
        //             <ButtonControl />
        //             </div>
        //     </Provider>
        // )
        // else 
        return(
            <Provider store={store}>
                    <div className="wrapper">
                            <div className="side-left">
                                <SongPlaying />
                                <SongList />
                            </div>
                            <div className="side-right">
                                <KindOfMusic />
                            </div>
                    </div>
            </Provider>
        )
    }

    render() {
        return (
            this.renderView()
        )
    }
}

export default App;