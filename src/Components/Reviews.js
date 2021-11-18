import React from 'react';
import { useForm } from "react-hook-form";

const Reviews = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        // giving alert after successfully adding a package
        alert('Thank you for your Review!!')

        // set the add package data to the database
        fetch('http://localhost:5000/addreview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
    }
    return (
        <div className='text-center'>
            <h1 style={{ fontSize: '35px', fontWeight: '600' }} className='mt-2 mb-3'>Please Give your valuable review</h1>

            {/* react hook form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' className='p-2 m-2' {...register("name", { required: true })} placeholder='Your Name' />
                <br />
                <input type='text' className='p-2 m-2'  {...register("words", { required: true })} placeholder='Your Review' />
                <br />
                <input type='number' min="1" max="5" className='p-2 m-2 w-25'  {...register("rate", { required: true })} placeholder='Rate us (1-5)' />


                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input className='btn btn-primary mt-3 mb-2' type="submit" />
            </form>
        </div>
    );
};

export default Reviews;