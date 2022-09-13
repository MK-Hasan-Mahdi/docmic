import React from 'react';
import Service from './Service';

const Services = () => {
    return (
        <div className='mid-container'>
            <p className='lg:mt-24 md:mt-16 text-center text-xl text-secondary'>Our Services</p>
            <h1 className='text-4xl text-center mt-4'>Services For Your Health</h1>
            <div className=' lg:mt-16 md:my-10'>
                <Service />
            </div>

        </div>
    );
};

export default Services;