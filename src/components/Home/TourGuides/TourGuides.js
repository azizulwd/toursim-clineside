import React from 'react';
import expert1 from '../../../images/expert-1.jpg';
import expert2 from '../../../images/expert-2.jpg';
import expert3 from '../../../images/expert-3.jpg';
import './TourGuides.css';

const TourGuides = () => {
    return (
        <div className="tour_guides">
            <div className="container">
                <div className="tour_guide_title">
                    <h1>Tour Guides</h1>
                    <p>Our highly trained efficient guides</p>
                </div>
                <div className="our_guides">
                    <div className="guide">
                        <img src={expert1} alt="" />
                        <h3>Shane Watson</h3>
                        <p>Tourism Expert</p>
                    </div>
                    <div className="guide">
                        <img src={expert2} alt="" />
                        <h3>Kevin Peterson</h3>
                        <p>Adventure Guru</p>
                    </div>
                    <div className="guide">
                        <img src={expert3} alt="" />
                        <h3>Ricky Ponting</h3>
                        <p>Trekking Guide</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourGuides;