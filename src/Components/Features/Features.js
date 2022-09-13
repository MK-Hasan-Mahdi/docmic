import React from 'react';
import features from '../../asset/docmic/Frame 22.png';
import feature1 from '../../asset/docmic/Group 21.png';
import feature2 from '../../asset/docmic/Group 22.png';
import feature3 from '../../asset/docmic/Group 23.png';
import feature4 from '../../asset/docmic/Group 24.png';

const Features = () => {
    return (
        <div className='mid-container'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 lg:gap-0 '>
                <div className='lg:order-2 md:order-2 order-1 lg:flex lg:items-center'>
                    <img className='' src={features} alt="" />
                </div>
                <div className='lg:flex md:flex items-center lg:order-2 md:order-2 order-1'>
                    <div>
                        <div className='lg:text-start text-center'>
                            <h1 className='text-secondary'>Our Hospital Feature</h1>
                            <h1 className='lg:text-3xl text-4xl py-6'>Make An Appointment Easy And Fast <br /> Services</h1>
                            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-6'>
                                <div className=' bg-white px-4 rounded-xl shadow-xl p-10'>
                                    <div className='flex justify-between items-center'>
                                        <h1 className=''>24 Hours Doctor Support</h1>
                                        <img src={feature1} alt="" />
                                    </div>
                                    <p className='text-sm pt-2 text-justify'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                                </div>
                                <div className='bg-white px-4 rounded-xl shadow-xl p-10'>
                                    <div className='flex justify-between items-center'>
                                        <h1 className=''>Exclusive Supports</h1>
                                        <img src={feature2} alt="" />
                                    </div>
                                    <p className='text-sm pt-2 text-justify'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                                </div>
                                <div className='bg-white px-4 rounded-xl shadow-xl p-10'>
                                    <div className='flex justify-between items-center'>
                                        <h1 className=''>Friendly Environment</h1>
                                        <img src={feature3} alt="" />
                                    </div>
                                    <p className='text-sm pt-2 text-justify'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                                </div>
                                <div className='bg-white px-4 rounded-xl shadow-xl p-10'>
                                    <div className='flex justify-between items-center'>
                                        <h1 className=''>24 Hours Nurse Support</h1>
                                        <img src={feature4} alt="" />
                                    </div>
                                    <p className='text-sm pt-2 text-justify'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;