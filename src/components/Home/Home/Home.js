import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import FindTour from '../FindTour/FindTour';
import Services from '../Services/Services';
import TourGuides from '../TourGuides/TourGuides';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FindTour></FindTour>
            <Services></Services>
            <TourGuides></TourGuides>
        </div>
    );
};

export default Home;