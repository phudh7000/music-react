import { Component } from "react";

class ButtonControl extends Component {

    componentDidMount() {
        const views = document.querySelectorAll('.btn-control');
        const wrapper = document.querySelector('.wrapper');
        wrapper.onscroll = function () {
            if (this.scrollLeft === 0) {
                views[0].classList.add('active');
                views[1].classList.remove('active');
            } else if (this.scrollLeft === 400) {

                views[1].classList.add('active');
                views[0].classList.remove('active');
            }
        }
        wrapper.addEventListener('touchend', () => {
            if (wrapper.scrollLeft<=200) {
                wrapper.scrollLeft=0;
            }else{
                wrapper.scrollLeft=400;
            }
        })

    }
    onPick = (e) => {
        const btnControl = document.querySelectorAll('.btn-control');
        const wrapper = document.querySelector('.wrapper');
        let view = parseInt(e.target.getAttribute('attr'));
        // const slider = document.querySelector('.slider');
        // slider.style.transform = `translateX(-${view*50}%)`;
        wrapper.scrollLeft = view * 400;
        btnControl.forEach((item) => {
            item.classList.remove('active');
        })
        e.target.classList.add('active');
    }


    render() {
        return (
            <div className="nav-control">
                <button className="btn-control active" attr="0" onClick={this.onPick}>Đang nghe</button>
                <button className="btn-control" attr="1" onClick={this.onPick}>Thể loại</button>
            </div>
        )
    }
}

export default ButtonControl;