import React from 'react';
import './FindTour.css';

const FindTour = () => {
    return (
        <div className="find_tour">
            <div className="find_tour_title">
                <h1>Find Your Favourite Place</h1>
            </div>
            <div className="container find_tour_inner">
                <select className="all_destinations">
                    <option value="0">All destinations</option>
                    <option value="1">Middle East-Saudi Arabia</option>
                    <option value="2">Asia-China</option>
                    <option value="3">Asia-Pakistan</option>
                    <option value="4">Africa-Ethiopia</option>
                    <option value="5">Africa-Congo</option>
                    <option value="6">Europe-USA</option>
                    <option value="7">Europe-Canada</option>
                </select>

                <select className="all_activities">
                    <option value="0">All Activities</option>
                    <option value="1">Beach</option>
                    <option value="2">Safari</option>
                    <option value="3">Jungle</option>
                    <option value="4">Park</option>
                    <option value="5">City Tours</option>
                    <option value="6">Hiking Trips</option>
                    <option value="7">Hunting Trips</option>
                </select>

                <select className="start_month">
                    <option value="0">Start Month</option>
                    <option value="1">Oct 2021</option>
                    <option value="2">Nov 2021</option>
                    <option value="3">Dec 2021</option>
                    <option value="4">Jan 2022</option>
                    <option value="5">Feb 2022</option>
                    <option value="6">Mar 2022</option>
                    <option value="7">Apr 2022</option>
                </select>
                <button>Find Tours</button>
            </div>
        </div>
    );
};

export default FindTour;