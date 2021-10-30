import React from 'react';
import './Banner.css';
import bannerImg from '../../../images/banner.jpg';

const Banner = () => {

    const bannerImgStyle = {
        width: '100%',
        height: '650px',
        backgroundImage: `url(${bannerImg})`
    }

    return (
        <div className="banner" style={bannerImgStyle}>
            <div className="banner_overlay">
                <div className="banner_content">
                    <h1>Your Dream Escape...</h1>
                    <p>only a quick search away</p>
                </div>
                <div className="select_place"></div>
            </div>
        </div>
    );
};

export default Banner;