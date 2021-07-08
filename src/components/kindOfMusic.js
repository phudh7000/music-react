import { Component } from "react";
import { connect } from 'react-redux'
import * as actions from '../actions/actionTypes'

class KindOfMusic extends Component {

    onChangeKindOf = (type)=>{
        let wrapper = document.querySelector('.wrapper');
        wrapper.scrollLeft=0;
        this.props.onChangeType(type)
    }

    render() {

        let renderKinds = this.props.types.map((item,index) => {
            return(
            <li key = {index} className="kind_of" onClick = {()=>this.onChangeKindOf(item.name)}>
                <div className="kind_of-content">
                    <img src={item.image} alt=""
                        className="kind_of-img" />
                    <h3 className="kind_of-name">{item.name}</h3>
                </div>
            </li>)
        })

        return (
            <ul className="category">
                {renderKinds}
            </ul>
        )
    }

}

var mapStateToProps = (state) => {
    return {
        types: state.types
    }
}

var mapDispatchToProps = (dispatch, props) => {
    return {
        onChangeType: (type) => {
            dispatch(actions.changeKindOf(type))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(KindOfMusic);