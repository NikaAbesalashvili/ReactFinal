import React from 'react';
import Header from '../header/Header';
import Slider from '../slider/Slider';
import Content from '../main-content/Content'
import Check from '../check-form/Check';

const HomePage = () => {
    return (
        <div className="home-page">
            <Header />
            <Slider />
            <Content />
            <Check />
        </div>
    )
}

export default HomePage
