import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleService = () => {
    let {singleId} = useParams();
    const [servicesDetails, setServicesDetails] = useState([]);
    const [singleServiceDetails, setSingleServiceDetails] = useState({});

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServicesDetails(data));
    }, []);

    useEffect(()=>{
        const foundSingleService = servicesDetails.find(service => service._id === singleId);
        setSingleServiceDetails(foundSingleService);
    },[servicesDetails]);

    return (
        <div>
            <h1>{singleServiceDetails?.name}</h1>
        </div>
    );
};

export default SingleService;