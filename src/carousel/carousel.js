import React, { Component } from 'react';

import Desert from '../images/MeInIsraelDesert.png';
import Batman from '../images/ImBatman.png';
import Me from '../images/DanC.png';

import './carousel.css';

class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [Desert, Batman, Me],
            currentImageIndex: 0
        };
    }

    handleLeftArrowClick = () => {
        let currentIndex = this.state.currentImageIndex;
        if (currentIndex === 0) {
            currentIndex = this.state.images.length-1;
        } else {
            currentIndex = currentIndex - 1;
        }
        this.setState({currentImageIndex: currentIndex});
    }

    handleRightArrowClick = () => {
        let currentIndex = this.state.currentImageIndex;
        if (currentIndex === this.state.images.length-1) {
            currentIndex = 0;
        } else {
            currentIndex = currentIndex + 1;
        }
        this.setState({currentImageIndex: currentIndex});
    }

    render() {
        return (
            <div className='Carousel'>
                <div className='LeftArrow'>
                    <div className='Arrow Left' onClick={this.handleLeftArrowClick}></div>
                </div>
                <div className='CarouselContent'>
                    <img src={this.state.images[this.state.currentImageIndex]} alt='Carousel Item' />
                </div>
                <div className='RightArrow'>
                    <div className='Arrow Right' onClick={this.handleRightArrowClick}></div>
                </div>
            </div>
        );
    }
}

export default Carousel;