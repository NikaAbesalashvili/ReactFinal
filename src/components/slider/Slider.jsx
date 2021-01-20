import React, {Component} from 'react';
import './slider.css'

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderImages: [
                'images/slider-images/city-house.jpg',
                'images/slider-images/mountain-house.jpg',
                'images/slider-images/snow-house.jpg',
                'images/slider-images/village-house.jpg'
            ],
            titles: [
                'Comfortable appartament in city.',
                'Quiet and warm house in mountain.',
                'Spend your vaccation at snowwy place for christmas.',
                'House at countryside with friendly neighbourhood'
            ],
            currentPossition: 0,
        }
    }

    slideLeft = () => {
        if(this.state.currentPossition === 0) {
            this.setState({currentPossition: this.state.sliderImages.length - 1});
        }else {
            this.setState({currentPossition: this.state.currentPossition - 1});
        }
    }

    slideRight = () => {
        if(this.state.currentPossition === this.state.sliderImages.length - 1) {
            this.setState({currentPossition: 0})
        }else {
            this.setState({currentPossition: this.state.currentPossition + 1});
        }
    }

    render() { 
        return (
            <div className='slider'>
                <button className='slider-button' onClick={this.slideLeft}>
                    <img src="images/slider-images/slider-buttons/left.svg" alt='left'/>
                </button>
                <div className="slider-content">
                    <img className='slider-image' src={this.state.sliderImages[this.state.currentPossition]} alt="slider-image"/>
                    <h2 className='title'>{this.state.titles[this.state.currentPossition]}</h2>
                </div>
                <button className='slider-button' onClick={this.slideRight}>
                    <img src="images/slider-images/slider-buttons/right.svg" alt="right"/>
                </button>
            </div>
        );
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            if(this.state.currentPossition === this.state.sliderImages.length - 1) {
                this.setState({currentPossition: 0});
            }else {
                this.setState({currentPossition: this.state.currentPossition + 1});
            }
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
}
 
export default Slider;
