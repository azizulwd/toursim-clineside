import React from 'react';
import './Service.css';

const Service = (props) => {
    const {name, description, img, price} = props.service;

    return (
        <div className="service">
            <img src={img} alt="" />
            <div className="service_info">
                <h2>{name}</h2>
                <h4>${price}</h4>
                <p>{description}</p>
                <button>Book for ${price}</button>
            </div>
        </div>
    );
};

export default Service;