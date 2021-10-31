import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './SingleService.css';

const SingleService = () => {
    let {singleId} = useParams();
    const [servicesDetails, setServicesDetails] = useState([]);
    const [singleServiceDetails, setSingleServiceDetails] = useState({});

    useEffect(()=>{
        fetch('https://grim-vampire-40155.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServicesDetails(data));
    }, []);

    useEffect(()=>{
        const foundSingleService = servicesDetails.find(service => service._id === singleId);
        setSingleServiceDetails(foundSingleService);
    },[servicesDetails]);

    return (
        <div className="single_service_details">
            <div className="container single_service_inner">
                <div className="single_service_img">
                    <img src={singleServiceDetails?.img} alt="" />
                </div>
                <div className="single_service_info">
                    <h2>{singleServiceDetails?.name}</h2>
                    <p>{singleServiceDetails?.description}</p>
                    <button>Booking</button>
                </div>
            </div>
        </div>
    );
};

export default SingleService;