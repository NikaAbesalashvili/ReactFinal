import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const AboutPageStyle = {
    backgroundColor: '#bfbfbf',
    width: '30%',
    marginLeft: '35%',
    marginTop: '25px',
    borderRadius: '25px'
}

const AuthorStyle = {
    margin: '0',
    color: '#737373',
    textAlign: 'center',
    fontSize: '20px'
}

const CreationStyle = {
    marginBotton: '15px',
    textAlign: 'center'
}

const AboutCreator = {
    width: '75%',
    textAlign: 'center',
    marginLeft: '13%'
}

const AboutPage = () => {
    return (
        <div>
            <Header />
            <div style={AboutPageStyle}>
                <h2 style={AuthorStyle}>Created by: Nika Abesalashvili</h2>
                <p style={AboutCreator}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Proin sit amet molestie eros. 
                    Praesent interdum iaculis justo, eu interdum sapien tristique at. 
                    In dolor ante, eleifend eu nibh sit amet, 
                    lacinia pharetra lorem. Integer dolor nisi, 
                    luctus ut volutpat imperdiet, laoreet consequat arcu. Suspendisse quis 
                    sapien quis ipsum pharetra pharetra. Integer elementum, 
                    tortor ut dignissim lobortis, velit nunc vehicula orci, 
                    id vestibulum lacus lectus eu lectus. Integer quis interdum quam. 
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                    Aliquam vel volutpat diam, id tincidunt massa. 
                    Quisque vehicula, ex sit amet fermentum scelerisque, sapien nisi interdum.
                </p>
                <h3 style={CreationStyle}>Page Creation Data: 19:01:2021</h3>
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage;
