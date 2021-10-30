import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);

    return (
        <div className="services">
            <div className="services_title">
                <h1>Our Special Services</h1>
            </div>
            <div className="container services_inner">
                {
                    services.map(service => <Service
                        key = {service._id}
                        service = {service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;