import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/service', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('Added Successfully');
                reset();
            }
        });
    };

    return (
        <div className="add_service_main">
            <div className="add_service">
                <h1>Add Service</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name")} placeholder="Service name" />
                    <textarea {...register("description")} placeholder="Description" />
                    <input type="number" {...register("price")} placeholder="Price" />
                    <input {...register("img")} placeholder="img url" />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;