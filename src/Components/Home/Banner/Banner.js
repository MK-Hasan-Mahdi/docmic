import React from 'react';
import { Link } from 'react-router-dom';
import pose2 from '../../../asset/docmic/pose_2.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='mid-container'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 lg:gap-0 gap-10  mt-10 pb-16'>
                <div className='lg:flex md:flex items-center lg:order-1 md:order-1 order-2'>
                    <div>
                        <div className='lg:text-start text-center'>
                            <h1 className='lg:text-6xl text-4xl font-bold mb-2 lg:leading-[60px]'>Your <span className='text-primary'>Health</span> Is Our <br /></h1>
                            <h1 className='lg:text-6xl text-4xl font-bold mb-6 lg:leading-[60px]'>Top <span className='text-secondary'>Priority</span></h1>
                            <p className='text-neutral font-normal mb-10'>There are many variations of passages of Ipsum <br /> available. but the majority has suffered <br /></p>
                            <Link to='/' ><button className='btn btn-primary lg:px-5 capitalize'>Meet Our Specialist</button> </Link>
                        </div>
                        <div className='flex justify-between mt-20'>
                            <div className='text-center'>
                                <h1 className='text-3xl font-bold text-secondary'>262k+</h1>
                                <h1 className='text-sm'>Recovered Patients</h1>
                            </div>
                            <div className='text-3xl text-center'>
                                <h1 className='font-bold text-secondary'>96%</h1>
                                <h1 className='text-sm'>Satisfaction Rate</h1>
                            </div>
                            <div className='text-center'>
                                <h1 className='text-3xl font-bold text-secondary'>86+</h1>
                                <h1 className='text-sm'>Expert Doctors</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:order-2 md:order-2 order-1 bg-banner'>
                    <img className='w-full' src={pose2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;