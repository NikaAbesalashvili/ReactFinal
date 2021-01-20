import React from 'react';
import Header from '../header/Header';
import './top.css'

const Images = [
    'images/places/Clip.jpg',
    'images/places/image1.jpg',
    'images/places/image2.jpg',
    'images/places/image3.jpg',
]

const TopPlacesPage = () => {
    return (
        <div className='top-places'>
            <Header />
            <img className='head-photo' src={Images[0]} alt="image"/>
            <h1 className='main-title'>Ready to plan your trip?</h1>
            <div className="elements">
                <div className='elenemt'>
                    <img className='mini-image' src={Images[1]} alt="image"/>
                    <h2 className='text'>Thiland</h2>
                    <h3 className='text'>$900-$1900</h3>
                </div>
                <div className='elenemt'>
                    <img className='mini-image' src={Images[2]} alt="image"/>
                    <h2 className='text'>Italy</h2>
                    <h3 className='text'>$700-$2000</h3>
                </div>
                <div className='elenemt'>
                    <img className='mini-image' src={Images[3]} alt="image"/>
                    <h2 className='text'>Indonesia</h2>
                    <h3 className='text'>$300-$1100</h3>
                </div>
                <div className='elenemt'>
                    <img className='mini-image' src={Images[1]} alt="image"/>
                    <h2 className='text'>Singapore</h2>
                    <h3 className='text'>$1900-$2700</h3>
                </div> 
            </div>
        </div>
    )
}

export default TopPlacesPage;
