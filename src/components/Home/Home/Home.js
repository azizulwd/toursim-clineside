import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import FindTour from '../FindTour/FindTour';
import TourGuides from '../TourGuides/TourGuides';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <FindTour></FindTour>
            <TourGuides></TourGuides>
            <Footer></Footer>
        </div>
    );
};

export default Home;