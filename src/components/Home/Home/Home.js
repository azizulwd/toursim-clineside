import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import FindTour from '../FindTour/FindTour';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <FindTour></FindTour>
            <Footer></Footer>
        </div>
    );
};

export default Home;