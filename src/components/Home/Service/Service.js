import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {_id, name, description, img, price} = props.service;

    return (
        <div className="service">
            <img src={img} alt="" />
            <div className="service_info">
                <h2>{name}</h2>
                <h4>${price}</h4>
                <p>{description}</p>
                <Link to={`/service/${_id}`}>
                    <button>Book for ${price}</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;